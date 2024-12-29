import React from 'react'
import SectionHeading from './assets/SectionHeading'

const About = () => {
  return (
    <div id='About' className='mt-[150px] min-h-[50vh] flex flex-col items-center gap-10'>
      <div className="section-heading">
        <SectionHeading title={'About Me'} />

        <div className="flex flex-col-reverse items-center md:flex-row md:justify-center gap-10">
          <div className="about-me-text md:w-[30%] text-justify">
            Hello! My name is Anurag Vishwakarma, A keen learner & problem solver.
            I am a software developer with a passion for building scalable and efficient software systems.
            I am a lifelong learner, always looking to improve my skills and knowledge in the field of software
            development.
            <br /><br />
            Apart fom that, I am currently pursuing B.Tech in CSE from Madhav Institute of Technology & Science, Gwalior. Also holds a Diploma in CSE from Dr. B.R. Ambedkar Polytechnic College, Gwalior.
            
          </div>
          <div className="">
            <img src="./assets/images/about.jpg" className='w-80 rounded-lg md:w-100' alt="Anurag Vishwakarma lab photo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
