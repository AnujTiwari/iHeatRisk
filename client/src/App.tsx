import { Route, Switch } from "wouter";
import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Home from "@/pages/Home";
import Calculator from "@/pages/Calculator";
import HowItWorks from "@/pages/HowItWorks";
import Activities from "@/pages/Activities";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Faq from "@/pages/Faq";
import ResetPassword from "@/pages/ResetPassword";
import AuthCallback from "./components/auth/Callback";

function App() {
  // Supabase Auth State Listener for Password Recovery Session
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" && session) {
        console.log("Password recovery session detected.");
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const routes = [
    { path: "/", Component: Home },
    { path: "/calculator", Component: Calculator },
    { path: "/how-it-works", Component: HowItWorks },
    { path: "/activities", Component: Activities },
    { path: "/faq", Component: Faq },
    { path: "/about", Component: About },
    { path: "/contact", Component: Contact },
    { path: "/reset-password", Component: ResetPassword },
    { path: "/auth/callback", Component: AuthCallback }
  ];

  return (
    <div className="flex flex-col min-h-screen font-body text-neutral-800 bg-neutral-100">
      <Header />
      <main className="flex-grow w-full px-2 sm:px-2">
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
