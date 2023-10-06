import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../client/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";

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
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          style: {
            button: {
              border: "transparent",
              color: "white",
              backgroundColor: "black",
            },
            input: {
              width: "100%",
            },
          },
        }}
        providers={["github", "google"]}
        redirectTo="https://pomodorokai.vercel.app/work"
      />
    </div>
  );
}
