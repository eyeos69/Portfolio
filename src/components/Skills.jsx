import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import csharp from '../assets/csharp.png'
import java from '../assets/java.png'
import python from '../assets/python.png'

const Skills = () => {
  return (
    <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1 '>
      <div class="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
    <div className=' text-gray-400 md:h-[150x] max-w-[1200x] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
        <h2 className="primary-color text-xl md:text-4xl font-bold m-4">
            My <br/> Tech <br/> Stack
        </h2>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={csharp} alt="" width={200} height={200}/>
            <p className='mt-2'>C#</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={css} alt="" width={100} height={100}/>
            <p className='mt-2'>CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={html} alt="" width={100} height={100}/> 
            <p className='mt-2'>HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={java} alt="" width={100} height={100}/>
            <p className='mt-2'>JAVA</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={python} alt="" width={100} height={100}/>
            <p className='mt-2'>PYTHON</p>
        </div>

    </div>
    </div>
    </div>
  )
}

export default Skills
