import React from 'react'
import visualArts from '../assets/visual arts.png'

const Future = () => {
  return (
<div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
<div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0"> 
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">Future Plans</h2>
                    <p className="text-base lg:text-lg">
                    After completing my Bachelor of Science in Computer Science degree at Cavite State University – Bacoor Campus, I plan to pursue my passion for visual arts. While my academic background has equipped me with strong technical and problem-solving skills, I’ve always been deeply drawn to creative expression through design and visual storytelling.

                    My goal is to become a visual artist who bridges technology and creativity—whether that means working in digital illustration, visual design, multimedia, or even combining art with front-end development. I envision myself exploring roles where I can bring concepts to life visually, tell impactful stories, and contribute to meaningful projects that connect with people on an emotional and visual level.

                    I believe that art and technology can go hand-in-hand, and I aim to use both to build a fulfilling career that reflects who I am—someone who values both logic and creativity, structure and soul.
                    </p>

                </div>
            </div>
            <div className="flex justify-center items-center">
            <img className="mx-auto rounded-3xl py-8 md:py-0" src={visualArts} width={600} height={600}></img>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Future
