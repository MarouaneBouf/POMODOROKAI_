import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../client/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import headerImg from "../assets/Header.png";
import logoBlack from "../assets/Logo_Trans.png";

export function Login() {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
  };

  const LogoStyle: React.CSSProperties = {
    backgroundImage: `url(${logoBlack})`,
    backgroundSize: "cover",
  };

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
    <div className="font-clash relative bg-white text-white flex flex-row selection:bg-black/30">
      <div className="flex items-center justify-center container mx-auto">
        <div className="w-[80%] max-sm:w-full">
          <div
            className="flex flex-col m-5 items-center max-sm:hidden h-[15rem] w-[15rem] justify-center rounded-2xl"
            style={LogoStyle}
          ></div>
          <Auth
            socialLayout="horizontal"
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
            }}
            providers={[
              "github",
              "google",
              "facebook",
              "twitch",
              "apple",
              "workos",
            ]}
            redirectTo="https://pomodorokai.vercel.app/work"
          />
        </div>
      </div>
      <div
        className="flex flex-col m-5 items-center max-sm:hidden h-[94vh] w-[90vw] justify-center rounded-2xl"
        style={backgroundImageStyle}
      ></div>
    </div>
  );
}
