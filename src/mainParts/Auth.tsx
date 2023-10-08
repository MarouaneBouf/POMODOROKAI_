import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../client/supabaseClient";

export function AuthForm() {
  return (
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
          redirectTo="https://pomodorokai.vercel.app/dashboard"
        />
      </div>
    </div>
  );
}
