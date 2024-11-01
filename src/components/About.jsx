import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0"> 
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                    <p className="text-base lg:text-lg">
                    Hi! I’m John Adrian Alvarez, a Bachelor of Science in Computer Science (BSCS) student at Cavite State University - Bacoor Campus. I’m passionate about expanding my knowledge in the field of computer science and continuously improving my skills. This website showcases the programming languages I’ve worked with and some of the projects I’ve completed so far. I’m always eager to learn more and explore new opportunities in the tech world.
                    </p>
                </div>
            </div>
            <img className="mx-auto rounded-3x1 py-8 md:py-0" src={aboutImg} style="border-radius: 10px;" width={300} height={300}></img>

        </div>
    </div>
  )
}

export default About
