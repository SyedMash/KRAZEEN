"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const timeline = gsap.timeline({ paused: true });
  const allHeadingDiv = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    gsap.to(menuRef.current, {
      top: 0,
    });
    timeline.from(".ani", {
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out",
    });
    timeline.play();
  };

  const handleCloseMenu = () => {
    gsap.to(menuRef.current, {
      top: "-100%",
    });
  };

  useEffect(() => {
    if (allHeadingDiv.current) {
      Array.from(allHeadingDiv.current.children).forEach((e) => {
        e.addEventListener("click", () => {
          handleCloseMenu();
        });
      });
    }
  });

  return (
    <div className="overflow-hidden">
      <div
        ref={menuRef}
        className="fixed -top-full left-0 w-full h-screen backdrop-blur-md bg-red-400/50 z-10"
      >
        <h1
          className="absolute top-5 right-5 text-2xl font-bold sm:text-3xl cursor-pointer"
          onClick={handleCloseMenu}
        >
          CLOSE
        </h1>
        <div
          ref={allHeadingDiv}
          className="flex flex-col gap-5 absolute top-2/4 -translate-y-2/4 right-5"
        >
          <h1 className="ani text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-semibold cursor-pointer text-center">
            Home
          </h1>
          <h1 className="ani text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-semibold cursor-pointer text-center">
            About
          </h1>
          <h1 className="ani text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-semibold cursor-pointer text-center">
            Services
          </h1>
          <h1 className="ani text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-semibold cursor-pointer text-center">
            Contact
          </h1>
        </div>
        <div className="ani absolute bottom-5 left-5 w-[90%] lg:w-[50%] xl:w-[30%] 2xl:w-[30%] h-[30%]">
          <video
            src="/videos/car.mp4"
            autoPlay
            loop
            muted
            className="h-full w-full object-cover rounded-3xl"
          ></video>
        </div>
      </div>
      <nav className="flex justify-between items-center px-4 py-5 relative h-[5vh] ">
        <h1 className="text-2xl sm:text-3xl font-bold">MASH</h1>
        <h1
          className="text-2xl sm:text-3xl font-bold cursor-pointer hover:text-red-400/50 transition-colors duration-200"
          onClick={handleToggleMenu}
        >
          MENU
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;
