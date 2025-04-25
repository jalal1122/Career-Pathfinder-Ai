import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-around bg-[#9EBBB9] p-5">
      <div className="left">
        <h1 className="text-3xl font-bold text-[#0D2B4E] mb-5">
          Career Pathfinder AI
        </h1>
        <p className="text-[#0D2B4E] text-2xl font-semibold mb-5">
          Discover your path, powered by AI.
        </p>
        <p className="text-[#0D2B4E] text-2xl font-semibold mb-5">
          © 2023 Career Pathfinder AI. All rights reserved.
        </p>
      </div>
      <div className="middle">
        <h1 className="text-3xl font-bold text-[#0D2B4E] mb-5">Contact Me</h1>
        <p className="text-[#0D2B4E] text-2xl font-semibold mb-5">
          Email: jk4350649@gmail.com
        </p>
      </div>
      <div className="right flex items-center justify-center gap-5">
        <div className="linkedin-div">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center p-4 bg-transparent border-2 border-[#0D2B4E] rounded-full hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">
              <FaLinkedinIn className="w-10 h-10 invert" />
            </div>
          </a>
        </div>
        <div className="github-div">
          <a href="https://github.com/jalal1122">
            <div className="flex items-center justify-center p-4 bg-transparent border-2 border-[#0D2B4E] rounded-full hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">
              <FaGithub className="w-10 h-10 invert" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
