import React from 'react'
import skillsImg from '../assets/certs.png'

const Certs = () => {
  return (
<div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
<div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0"> 
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">Skills, Trainings & Certificates</h2>
                        <p className="text-base lg:text-lg mt-4">
                        <strong>Skills:</strong><br />

                        <strong>Programming Languages:</strong> JavaScript, Python, C++, Java<br />
                        <strong>Frameworks/Libraries:</strong> React, Tailwind CSS, Node.js, Express.js<br />
                        <strong>Tools & Platforms:</strong> Git & GitHub, Visual Studio Code, XAMPP, MySQL, Figma<br />
                        <strong>Other Skills:</strong> Responsive web design, REST API integration, debugging, version control, Visual Design (Canva & Photoshop)
                        </p><br /><br />

                        <p className="text-base lg:text-lg mt-4">
                        <strong>Training:</strong><br />

                        <strong>Godot Game Engine Introduction:</strong> via YT tutorials by sir Jenjie Dela Peña<br />
                        <strong>ReactJS Crash Course:</strong> via YouTube tutorials and FreeCodeCamp
                        </p><br /><br />

                        <p className="text-base lg:text-lg mt-4">
                        <strong>Certificates:</strong><br />

                        <strong>While I may not have any relevant certificates about my course, I have been provided several certificates that showcases my academic dedication</strong><br /><br/>
                        <strong>Dean's Lister Certificates:</strong> I have been part of the Dean's Lister from my 1st year of college up to the present (3rd year)
                        </p>

                </div>
            </div>
            
            <div className="flex justify-center items-center">
            <img className="rounded-3xl py-8 md:py-0" src={skillsImg} width={500} height={500} alt="Skills Image" />
            </div>



        </div>
    </div>
    </div>
    </div>
  )
}

export default Certs
