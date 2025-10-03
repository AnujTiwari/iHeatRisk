import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ Re-enabled reCAPTCHA

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

const LoginModal = ({ isOpen, onClose, onLoginSuccess }: LoginModalProps) => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "", name: "", general: "" });
  const [resetSent, setResetSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "", general: "" });
  };

  const validate = () => {
    const newErrors: any = {};
    if (!form.email.includes("@")) newErrors.email = "Invalid email.";
    if (form.password.length < 4) newErrors.password = "Password too short.";
    if (isSignup && !form.name) newErrors.name = "Name is required.";
    // if (!captchaToken) newErrors.general = "Please complete the reCAPTCHA.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (isSignup) {
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: { data: { full_name: form.name } },
      });
      if (error) {
        setErrors({ ...errors, general: error.message });
        return;
      }
      alert("Signup successful. Please check your email to confirm.");
      onLoginSuccess();
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (error) {
        const msg = error.message.toLowerCase();

        if (msg.includes("invalid login credentials")) {
          const { error: signupError } = await supabase.auth.signUp({
            email: form.email,
            password: form.password,
          });

          if (signupError && signupError.message.toLowerCase().includes("user already registered")) {
            setErrors({ ...errors, general: "Invalid email or password." });
          } else {
            setIsSignup(true);
            setErrors({ ...errors, general: "Email not registered. Switching to Sign Up mode." });
          }
          return;
        } else {
          setErrors({ ...errors, general: error.message });
        }
        return;
      }

      onLoginSuccess();
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
    if (error) console.error("Google login error:", error.message);
  };

  const handleForgotPassword = async () => {
    if (!form.email.includes("@")) {
      setErrors({ ...errors, email: "Enter a valid email to reset password." });
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(form.email, {
      redirectTo: "https://iheatrisk.com/reset-password",
    });
    error ? alert("Error sending reset email.") : setResetSent(true);
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) setErrors({ ...errors, general: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl relative" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
            <button onClick={() => { onClose(); window.location.href = "/"; }} className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-800">
              <X size={20} />
            </button>

            <h2 className="text-center text-2xl font-semibold mb-6">{isSignup ? "Create an Account" : "Login to Continue"}</h2>

            {errors.general && <p className="text-sm text-red-500 mb-4 text-center">{errors.general}</p>}
            {resetSent && <p className="text-sm text-green-600 mb-4 text-center">Password reset email sent. Check your inbox.</p>}

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              {isSignup && (
                <div className="w-full">
                  <Input placeholder="Full Name" name="name" value={form.name} onChange={handleInputChange} className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 rounded-lg px-4 py-2 text-sm" />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>
              )}

              <div className="w-full">
                <Input type="email" placeholder="Email" name="email" value={form.email} onChange={handleInputChange} className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 rounded-lg px-4 py-2 text-sm" />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="relative w-full">
                <Input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={form.password} onChange={handleInputChange} className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 rounded-lg px-4 py-2 text-sm pr-10" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-neutral-500">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
              </div>

              <div className="w-full flex justify-center">
                <div className="w-full max-w-xs">
                  <ReCAPTCHA sitekey="6Lc4mEUrAAAAAC77cZS3AFrcAiv3QSJhOfwbmY5f" onChange={handleCaptchaChange} className="w-full" />
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-medium py-2.5 rounded-lg shadow-md transition">
                {isSignup ? "Sign Up" : "Log In"}
              </Button>
            </form>

            {!isSignup && (
              <div className="text-center my-3">
                <button onClick={handleForgotPassword} className="text-orange-500 text-sm hover:underline">
                  Forgot Password?
                </button>
              </div>
            )}

            <div className="text-center my-4 text-sm text-neutral-500">or</div>

            <div className="flex justify-center">
              <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 border border-gray-300 text-sm font-medium text-gray-700 py-2.5 rounded-lg hover:bg-gray-50 transition">
                <FcGoogle size={20} />
                Continue with Google
              </button>
            </div>

            <div className="text-center text-sm text-neutral-600 mt-6">
              {isSignup ? "Already have an account?" : "New to iHEATRISK?"}
              <button className="ml-1 text-primary hover:underline" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? "Log In" : "Sign Up"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
