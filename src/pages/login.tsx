import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../client/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import headerImg from "../assets/Header.png";
import logoBlack from "../assets/Logo_Trans_v1.png";
import nyc from "../assets/nyc_1.png";

export function Login() {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url(${nyc})`,
    backgroundSize: "cover",
  };

  const LogoStyle: React.CSSProperties = {
    backgroundImage: `url(${logoBlack})`,
    backgroundSize: "contain",
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
        <div className="relative font-SF max-sm:hidden max-md:hidden h-full flex-col bg-muted p-10 text-white dark:border-r">
          <div
            className="absolute inset-0 bg-zinc-900"
            style={backgroundImageStyle}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            PomodoroKai
          </div>
        </div>
        <div className="font-SF lg:p-8 max-sm:flex max-sm:items-center max-sm:justify-center max-sm:h-screen">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl  font-semibold tracking-tight">
                Welcome to PomodoroKai
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to Login or Signup
              </p>
            </div>
            <Auth
              socialLayout="horizontal"
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                style: {
                  button: {
                    backgroundColor: "black",
                    color: "whitesmoke",
                    border: "none",
                  },
                },
              }}
              providers={["github", "google"]}
              redirectTo="https://pomodorokai.vercel.app/work"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// export function Login() {

//   return (
//     <div className="flex flex-row font-SF bg-zinc-100 h-screen">
//       <div className="flex items-center justify-center container mx-auto">
//         <div className="flex flex-col items-center">
//           <div className="h-[9rem] w-[9rem]" style={LogoStyle}></div>
//           <div className="font-medium">Welcome to PomodoroKai.</div>
//           <div className="font-medium text-[15px] text-gray-500">
//             One of the best task Management App on the planet.
//           </div>
//           <div className="w-[30rem] max-sm:w-[13rem]">
//             <Auth
//               socialLayout="horizontal"
//               supabaseClient={supabase}
//               appearance={{
//                 theme: ThemeSupa,
//                 style: {
//                   button: {
//                     backgroundColor: "black",
//                     color: "whitesmoke",
//                     border: "none",
//                   },
//                 },
//               }}
//               providers={["github", "google"]}
//               redirectTo="https://pomodorokai.vercel.app/work"
//             />
//           </div>
//         </div>
//       </div>
//       <div
//         className="mx-5 mt-5 h-[94vh] w-[90vw] max-sm:hidden rounded-2xl"
//         style={backgroundImageStyle}
//       ></div>
//     </div>
//   );
// }
