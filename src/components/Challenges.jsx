import React from 'react'
import me from '../assets/me.jpg'

const Challenges = () => {
  return (
<div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
<div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0"> 
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">Challenges & Learnings</h2>
                    <p className="text-base lg:text-lg mt-4">
                        <strong>Challenges:</strong><br />
                        Throughout my academic journey and while building this portfolio, I encountered several challenges that tested both my technical skills and personal discipline. One major hurdle was managing time effectively—balancing schoolwork, project deadlines, and personal responsibilities often felt overwhelming. Additionally, debugging code and learning new frameworks like React or Tailwind CSS without formal training pushed me to rely heavily on online resources and self-study. These moments of frustration taught me the value of persistence and the importance of asking for help when needed.
                    </p><br /><br />

                    <p className="text-base lg:text-lg mt-4">
                        <strong>Learnings:</strong><br />
                        From these experiences, I’ve learned that growth happens most during uncomfortable and uncertain times. I discovered the importance of self-motivation, especially in tech, where change is constant and learning never stops. I also realized how important it is to take pride in small progress, and that success is built through consistency. Most of all, I’ve learned that challenges aren’t roadblocks—they’re stepping stones to becoming not just a better developer, but a more resilient and adaptable person.
                        </p>

                </div>
            </div>
            <div className="flex justify-center items-center">
            <img className="mx-auto rounded-3xl py-8 md:py-0" src={me} width={400} height={400}></img>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Challenges
