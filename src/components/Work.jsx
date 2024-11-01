import React from 'react';
import proj1 from '../assets/projpic1.png';
import proj2 from '../assets/projpic2.png';
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1'>
      <div className="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
        <div className='max-w-[1200px] mx-auto p-5' id="work">
          <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Here are a few of my works</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
              <img src={proj2} alt="" />
              <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2x1 font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                  <Link to="project1">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Live
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
              <img src={proj1} alt="" />
              <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2x1 font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                  <Link to="project1">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Live
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>       
        </div>
      </div>
    </div>
  );
};

export default Work;

 