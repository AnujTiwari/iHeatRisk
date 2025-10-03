import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [sessionReady, setSessionReady] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const handleRecovery = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (data.session) {
        setSessionReady(true);
      } else {
        const url = new URL(window.location.href);
        const accessToken = url.searchParams.get("access_token");
        const type = url.searchParams.get("type");

        if (type === "recovery" && accessToken) {
          const { data: userSession } = await supabase.auth.exchangeCodeForSession(accessToken);
          if (userSession?.session) {
            setSessionReady(true);
          } else {
            setMessage("Invalid or expired reset link.");
          }
        } else {
          setMessage("Session missing. Please use the reset link from your email.");
        }
      }
    };

    handleRecovery();
  }, []);

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Password successfully reset! You can now log in.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Your Password</h2>
        {message && (
          <p className={`text-center mb-4 ${message.includes("Error") ? "text-red-500" : "text-green-600"}`}>
            {message}
          </p>
        )}
        {sessionReady ? (
          <>
            <div className="relative mb-4">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-neutral-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="relative mb-6">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-neutral-500"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <Button onClick={handleResetPassword} className="w-full bg-primary text-white">
              Reset Password
            </Button>
          </>
        ) : (
          <p className="text-center text-neutral-500">Waiting for password reset session...</p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
