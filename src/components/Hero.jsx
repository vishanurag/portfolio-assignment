import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div id='Home' className='mt-10 min-h-[50vh] flex flex-col-reverse items-center md:flex-row md:justify-center gap-10'>
      <div className="hero-1 flex flex-col gap-2">
        <p className="text-sm ">
          <span className="text-lg">नमस्ते <span className="text-red-500">!</span></span>
          , I'm
        </p>
        <div className="my-name mt-10 text-5xl md:text-[5rem] comforter-regular">
          <span className="text-purple-600">
          Anurag
          </span>
           Vishwakarma
        </div>
        <div className="flex gap-4">
          <a href="https://vcma.rf.gd/Files/Resume/AnuragVishwakarmaCV.pdf" target='_blank' className='border-purple-700 rounded-lg w-[4.6rem] p-2 text-blue-500 border flex  justify-center align-center items-center hover:bg-purple-800  hover:text-white'>Resume</a>
          <a href="https://www.linkedin.com/in/anuragvishwakarma" target='_blank' className='border-purple-700 rounded-full h-[2.5rem] w-[2.5rem] flex  justify-center align-center items-center p-2 text-blue-500 border  hover:bg-purple-800  hover:text-white'>
          <FaLinkedinIn />
          </a>
          <a href="https://www.github.com/vishanurag" target='_blank' className='border-purple-700 rounded-full h-[2.5rem] w-[2.5rem] flex  justify-center align-center items-center p-2 text-blue-500 border  hover:bg-purple-800  hover:text-white'>
          <FaGithub />
          </a>
        </div>
      </div>
      <div className="hero-2">
        <img src="./assets/images/hero.png" className='w-80 md:w-auto' alt="Anurag Vishwakarma image" />
      </div>
    </div>
  )
}

export default Hero
