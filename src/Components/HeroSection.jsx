import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <>
      {/* main Div */}
      <div className="w-full h-[100vh] flex justify-end items-center flex-col gap-10">
        {/* Heading of Hero */}
        <div className="heading flex flex-col justify-center items-center gap-5">
          {/* Logo of hero */}
          <img src="/logo.png" alt="" />
          {/* Heading and Tagline */}
          <h1 className="text-7xl font-bold text-[#0D2B4E] mb-5">
            Career Pathfinder AI
          </h1>
          {/* Tagline */}
          <p className="text-[#0D2B4E] text-3xl mb-5">
            Discover your path, powered by AI.
          </p>
        </div>
        {/* Hero Div */}
        <div className="hero-div w-[60vw] h-[50vh] bg-[#9ebbb9] rounded-4xl shadow-xl text-[#0D2B4E] p-5 flex flex-col justify-center items-center gap-5 text-center hover:shadow-2xl transition-all duration-300 ease-in-out">
          {/* Hero Paragraphs */}
          <h3 className="text-2xl">
            Shape Your Future with AI-Powered Career Guidance
          </h3>
          <p className="text-xl mt-5">
            Career Pathfinder AI is an intelligent assistant designed to help
            you make informed career decisions based on your unique interests,
            skills, and educational background.
          </p>
          <p className="text-xl mt-5">
            Using the power of Google's Gemini API, our system analyzes your
            responses and delivers personalized career recommendations, learning
            paths, and skill-building resources — all in one place.
          </p>
          <p className="text-xl mt-5">
            Whether you're a student exploring possibilities or a professional
            planning your next move, Career Pathfinder AI is here to guide you
            every step of the way.
          </p>
          {/* Moto */}
          <p className="text-2xl mt-5">
            <strong>
              Discover the right path. Build a future you&rsquo;re proud of.
            </strong>
          </p>
          {/* Button */}

          <Link to="inputFormSection" smooth={true} duration={500} offset={-100}>
            <button className="text-white rounded-4xl bg-[#0D2B4E] font-semibold px-14 py-3 text-2xl hover:scale-105 active:scale-95 hover:shadow-md">
              Start Exploring
            </button>
          </Link>
        </div>
        <div className="hero-bottom-white-div w-[60vw] h-[5vh] bg-white mt-[-80px]"></div>
      </div>
    </>
  );
};

export default HeroSection;
