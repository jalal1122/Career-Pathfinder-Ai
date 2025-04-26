import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div ref={ref} initial={{opacity: 0, y: 50}} animate={inView ? {opacity: 1, y: 0 } : {}} transition={{duration: 1.2, ease: "easeInOut"}}>
      {/* main Div */}
      <div className="w-full flex justify-end items-center flex-col gap-10 pt-5">
        {/* Heading of Hero */}
        <div className="heading flex flex-col justify-center items-center gap-5">
          {/* Logo of hero */}
          <img src="/logo.png" alt="Career Pathfinder AI Logo" className="w-[120px]"/>
          {/* Heading and Tagline */}
          <h1 className="text-4xl 2xl:text-4xl font-bold text-[#0D2B4E] mb-2">
            Career Pathfinder AI
          </h1>
          {/* Tagline */}
          <p className="text-[#0D2B4E] 2xl:text-xl mb-2">
            Discover your path, powered by AI.
          </p>
        </div>
        {/* Hero Div */}
        <div className="hero-div md:w-[60vw] w-screen bg-[#9ebbb9] rounded-4xl shadow-xl text-[#0D2B4E] p-4 flex flex-col justify-center items-center gap-4 text-center hover:shadow-2xl transition-all duration-300 ease-in-out">
          {/* Hero Paragraphs */}
          <h3 className="2xl:text-xl">
            Shape Your Future with AI-Powered Career Guidance
          </h3>
          <p className="text-lg">
            Career Pathfinder AI is an intelligent assistant designed to help
            you make informed career decisions based on your unique interests,
            skills, and educational background.
          </p>
          <p className="text-lg">
            Using the power of Google's Gemini API, our system analyzes your
            responses and delivers personalized career recommendations, learning
            paths, and skill-building resources — all in one place.
          </p>
          <p className="text-lg">
            Whether you're a student exploring possibilities or a professional
            planning your next move, Career Pathfinder AI is here to guide you
            every step of the way.
          </p>
          {/* Moto */}
          <p className="text-2xl">
            <strong>
              Discover the right path. Build a future you&rsquo;re proud of.
            </strong>
          </p>
          {/* Button */}

          <Link to="/inputFormSection">
            <button className="text-white rounded-4xl bg-[#0D2B4E] font-semibold px-14 py-3 text-2xl hover:scale-105 active:scale-95 hover:shadow-md mb-6">
              Start Exploring
            </button>
          </Link>
        </div>
        <div className="hero-bottom-white-div md:w-[60vw] w-screen h-[5vh] bg-white mt-[-70px]"></div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
