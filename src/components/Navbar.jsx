import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const menuRef = useRef(null); // Reference for the menu div

    const handleNav = () => {
        setNav(!nav);
    };

    // Close the menu if a click is detected outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setNav(false);
            }
        };
        // Attach the event listener when the menu is open
        if (nav) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            // Clean up the event listener when the menu is closed
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [nav]);

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

                    {/* Menu icon for mobile view */}
                    <div onClick={handleNav} className='block md:hidden mr-6'>
                        <AiOutlineMenu size={20} />
                    </div>

                    {/* Mobile Menu */}
                    <div
                        ref={menuRef}
                        className={`${nav ? 'translate-x-0' : 'translate-x-full'} z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 transform`}
                    >
                        {/* Close icon inside the menu */}
                        <div className="p-4 flex justify-end">
                            <AiOutlineClose size={20} onClick={handleNav} className="cursor-pointer" />
                        </div>

                        <h1 className='text-3xl font-bold primary-color ml-4'>Alvarez</h1>
                        <ul className='p-8 text-2xl'>
                            <li className='p-5'><HashLink smooth to="/#about" onClick={handleNav}>About</HashLink></li>
                            <li className='p-5'><HashLink smooth to="/#work" onClick={handleNav}>Work</HashLink></li>
                            <li className='p-5'><HashLink smooth to="/#contact" onClick={handleNav}>Contact</HashLink></li>
                            <li className='p-5'><HashLink smooth to="/" onClick={handleNav}>Home</HashLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


