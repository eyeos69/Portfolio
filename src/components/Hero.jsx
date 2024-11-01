import React from 'react'
import heroimage from '../assets/portfoliopic.png'
import { TypeAnimation } from 'react-type-animation'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {
  return (
    <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
      <div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8'>
      <div className=' col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
        <img src={heroimage} alt="hero image"/>
      </div>
      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className="primary-color">
            I'm a
          </span> <br/>
          <TypeAnimation
          sequence={[
            "CVSU Student",
            1000,
            "Computer Scientist",
            1000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
            Greetings! Welcome to my portfolio website!
        </p>
        <div className='my-8'>
          <HashLink smooth to="/#contact" className='px-6 py-3 w-full rounded-x1 mr-4 border border-gray-400 hover:bg-gradient-to-br from-red-600 to-white text-white hover:border-none'>
            Contact
          </HashLink>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Hero
 