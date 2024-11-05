import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className='pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pb-1'>
            <div className="py-10 mb-1 overflow-hidden md:pt-0 sm:pt-10 2xl:pt-10 relative bg-black/90 max-w-[1300px] mx-auto rounded-xl">
                <div className='text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
                    <h1 className='text-3xl font-bold primary-color ml-4'>Alvarez</h1>
                    <ul className='hidden md:flex'>
                        <li className='p-5'><HashLink smooth to="/#about">About</HashLink></li>
                        <li className='p-5'><HashLink smooth to="/#work">Work</HashLink></li>
                        <li className='p-5'><HashLink smooth to="/#contact">Contact</HashLink></li>
                        <li className='p-5'><HashLink smooth to="/">Home</HashLink></li>
                    </ul>

                    {/* Hamburger Icon */}
                    <div onClick={handleNav} className='block md:hidden mr-6'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>

                    {/* Overlay */}
                    {nav && (
                        <div
                            onClick={closeNav}
                            className="fixed inset-0 bg-black/50 z-40"
                        />
                    )}

                    {/* Mobile Menu */}
                    <div
                        className={
                            nav
                                ? 'z-50 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 transform translate-x-0'
                                : 'fixed left-0 top-0 w-[60%] h-full bg-[#202121] ease-in-out duration-500 transform -translate-x-full'
                        }
                    >
                        {/* Close Button inside the navbar */}
                        <div onClick={handleNav} className="text-right p-4">
                            <AiOutlineClose size={20} />
                        </div>
                        <h1 className='text-3xl font-bold primary-color ml-4'>Alvarez</h1>
                        <ul className='p-8 text-2xl'>
                            <li className='p-5'><HashLink smooth to="/#about" onClick={closeNav}>About</HashLink></li>
                            <li className='p-5'><HashLink smooth to="/#work" onClick={closeNav}>Work</HashLink></li>
                            <li className='p-5'><HashLink smooth to="/#contact" onClick={closeNav}>Contact</HashLink></li>
                            <li className='p-5'><HashLink smooth to="/" onClick={closeNav}>Home</HashLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
