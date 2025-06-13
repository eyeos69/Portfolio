import React from 'react'
import famImg from '../assets/fam.jpg'

const Family = () => {
  return (
<div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
<div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0"> 
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">Family</h2>
                    <p className="text-base lg:text-lg">
                    I come from a close-knit and supportive family that values education, hard work, and 
                    mutual respect. Our household consists of a big members: my father, 
                    Adrian Alvarez, who is a business owner; my mother, Rosemarie Velasquez, a 
                    a stay-at-home wife; and my ever growing family including my brothers, cousins, aunts,
                    uncles, and my nephews and nieces.
                    Our family is originally from Biñan, Laguna and we maintain strong ties 
                    with our relatives and cultural traditions. Growing up, I was taught the importance 
                    of responsibility, humility, and perseverance—values that continue to guide me in 
                    both my academic and personal life.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center">
            <img className="mx-auto rounded-3xl py-8 md:py-0" src={famImg} width={500} height={500}></img>
            </div>
            
        </div>
    </div>
    </div>
    </div>
  )
}

export default Family
