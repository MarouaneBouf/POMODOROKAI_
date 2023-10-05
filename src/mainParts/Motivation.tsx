import React from "react";
import headerImg from "../assets/Header.png";

export function Motivation() {
  const ImgOneStyle: React.CSSProperties = {
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
  };

  const ImgTwoStyle: React.CSSProperties = {
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
  };

  return (
    <div className="flex flex-col items-center justify-center text-black dark:text-white font-SF pt-[9.9rem] max-sm:pt-[5rem]">
      <div className="text-[3rem] max-sm:text-[2rem] text-center font-semibold tracking-tight leading-tight p-5">
        Time is so expensive, why losing it!
      </div>
      <div className="text-[1rem] max-sm:w-[20rem] text-center leading-tight m-3 w-[30rem] text-zinc-400">
        We all have a multitude of tasks that require effective organization and
        structuring.
      </div>
      <div className="flex flex-row max-sm:flex-col gap-10 mt-8">
        <div
          style={ImgOneStyle}
          className="h-[22rem] w-[22rem] max-sm:h-[18rem] max-sm:w-[18rem] bg-black"
        ></div>
        <div
          style={ImgTwoStyle}
          className="h-[22rem] w-[22rem] max-sm:h-[18rem] max-sm:w-[18rem] bg-black"
        ></div>
      </div>
      <div>
        <div className="text-[1.5rem] w-[45rem] max-sm:w-[18rem] max-sm:text-[1rem] text-zinc-400  text-center font-semibold tracking-tight leading-tight mt-[3rem]">
          Time is a created thing. To say I don't have time is like saying I
          don't want to.
        </div>
        <div className="text-[1.2rem] max-sm:text-[.9rem] text-black dark:text-white text-center font-semibold tracking-tight leading-tight p-5">
          Lao Tzu, Chinese writer
        </div>
      </div>
    </div>
  );
}
