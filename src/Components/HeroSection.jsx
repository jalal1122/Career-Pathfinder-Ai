import React from 'react'
// import {logoImg} from '../assets/logo.png'

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
            <h1 className="text-6xl font-bold text-[#0D2B4E]">Career Pathfinder AI</h1>
            <p className="text-[#0D2B4E] text-2xl">Discover your path, powered by AI.</p>
        </div>
        <div className="hero-div w-[60vw] h-[50vh] bg-[#9ebbb9] rounded-4xl shadow-lg">
            
        </div>
        <div className="hero-bottom-white-div w-[60vw] h-[5vh] bg-white mt-[-80px]"></div>
        </div>      
    </>
  )
}

export default HeroSection
