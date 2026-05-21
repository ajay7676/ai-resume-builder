import React from "react";

const Banner = () => {
  return (
    <>
      <div className="w-full px-2 py-2.5 bg-[#C4F500]">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-3 sm:gap-12 text-center">
          <p className="text-[13px] font-medium text-zinc-900">
            Don’t miss the limited-time deals!
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-baseline gap-0.5">
              <span className="text-sm font-medium text-zinc-900">05</span>
              <span className="text-[11px] font-light text-zinc-700">D</span>
            </div>

            <div className="flex items-baseline gap-0.5">
              <span className="text-sm font-medium text-zinc-900">24</span>
              <span className="text-[11px] font-light text-zinc-700">H</span>
            </div>

            <div className="flex items-baseline gap-0.5">
              <span className="text-sm font-medium text-zinc-900">26</span>
              <span className="text-[11px] font-light text-zinc-700">M</span>
            </div>

            <div className="flex items-baseline gap-0.5">
              <span className="text-sm font-medium text-zinc-900">32</span>
              <span className="text-[11px] font-light text-zinc-700">S</span>
            </div>
          </div>
          <a
            href="#"
            className="text-xs text-zinc-800 underline cursor-pointer"
          >
            Check out now!
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
