import { Button } from "@/components/ui/button";
import headerImg from "../assets/Header.png";
import React from "react";

export function Header() {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className="flex flex-col items-center justify-center mt-[-.2rem] gap-[1rem] h-[39rem] text-white font-SF rounded-b-2xl "
      style={backgroundImageStyle}
    >
      <div className="text-[.8rem] font-medium tracking-tight underline">
        INVEST IN YOUR TIME WITH
      </div>
      <div className="text-[6rem] w-[50rem] text-center max-sm:text-[2.5rem] font-bold tracking-tighter leading-tight">
        POMODOROKAI
      </div>
      <div className="w-[40rem] max-sm:w-[20rem] max-sm:text-[.8rem] text-center">
        Embraces the Kanban methodology, offering users a comprehensive platform
        to create, organize, and manage task lists efficiently.
      </div>
      <div className="mt-7">
        <Button className="bg-black hover:bg-black px-7 py-3 rounded-xl">
          Try it Now
        </Button>
      </div>
    </div>
  );
}
