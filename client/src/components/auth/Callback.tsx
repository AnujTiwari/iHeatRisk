import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const AuthCallback = () => {
  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data?.session) {
        window.location.href = "/calculator"; // ✅ Redirect after successful login
      } else {
        console.error("Session not found or error occurred:", error);
      }
    };

    checkSession();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      {/* <p>Signing you in...</p> */}
    </div>
  );
};

export default AuthCallback;
