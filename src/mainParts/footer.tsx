import { ModeToggle } from "@/components/mode-toggle";
import logo from "../assets/Logo_Trans.png";
import logo1 from "../assets/Logo_Trans_v1.png";
import { useTheme } from "@/components/theme-provider"; // Import the useTheme hook

export function Footer() {
  const { theme } = useTheme();

  const logoSizeClass =
    theme === "dark" ? "h-[7rem] w-[7rem]" : "h-[7rem] w-[7rem]";

  const LogoStyle: React.CSSProperties = {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
  };
  const LogoTwoStyle: React.CSSProperties = {
    backgroundImage: `url(${logo1})`,
    backgroundSize: "cover",
  };

  return (
    <div className="pl-[5rem] pr-[5rem] pb-[2rem] flex flex-row max-sm:flex-col justify-between">
      <div className="flex flex-col items-center justify-between mt-8">
        {theme === "dark" ? (
          <div style={LogoStyle} className={logoSizeClass}></div>
        ) : (
          <div style={LogoTwoStyle} className={logoSizeClass}></div>
        )}
        <div className="max-sm:hidden ">
          <ModeToggle />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-row gap-[4rem] max-sm:gap-18 mt-10">
          <div className="flex flex-col gap-5 text-[15px] font-SF text-black dark:text-white">
            <div className="font-semibold">Product</div>
            <div>Overview</div>
            <div>Support</div>
            <div>Analytics</div>
          </div>
          <div className="flex flex-col gap-5 text-[15px] font-SF text-black dark:text-white">
            <div className="font-semibold">Company</div>
            <div>Careers</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="flex flex-row text-[14px] font-SF font-medium text-black dark:text-zinc-400">
          ©2024 PomodoroKai
        </div>
      </div>
    </div>
  );
}
