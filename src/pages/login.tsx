import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../client/supabaseClient";
import { AuthForm } from "@/mainParts/Auth";
import { Background_Login } from "@/mainParts/LoginBackground";

export function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthStateChange = async (event: string, session: any) => {
      if (event === "SIGNED_IN") {
        try {
          const { data, error } = await supabase
            .from("profiles")
            .select("username")
            .eq("id", session.user.id);

          if (error) {
            console.error("Error fetching user data:", error);
            return;
          }

          if (data !== null && data?.length > 0 && data[0]?.username !== null) {
            navigate("/work");
          } else {
            navigate("/setup");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    supabase.auth.onAuthStateChange(handleAuthStateChange);
  }, [navigate]);

  return (
    <>
      <div className="font-SF container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <a
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Home
        </a>
        <Background_Login />
        <AuthForm />
      </div>
    </>
  );
}
