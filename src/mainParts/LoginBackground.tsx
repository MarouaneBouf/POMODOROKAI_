import nyc from "../assets/nyc_1_Web-min.jpg";

export function Background_Login() {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url(${nyc})`,
    backgroundSize: "cover",
  };

  return (
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
  );
}
