import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm py-4 px-8 shadow-lg text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo Section */}
                <div>
                    <a href="#home" className='text-3xl font-bold text-white flex items-center gap-1'>
                        Durga
                        <span className='text-purple-500'>Waghchaure</span>
                        <div className='w-2 h-2 bg-purple-500 rounded-full self-end mb-2'></div>
                    </a>
                </div>

                {/* Desktop Navigation Links (Lowercase href to match section IDs) */}
                <div className='hidden md:flex space-x-10'>
                    <a href="#home" className='relative text-white/80 transition-all duration-300 hover:text-purple-500 group'>
                        <span>Home</span>
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#about" className='relative text-white/80 transition-all duration-300 hover:text-purple-500 group'>
                        <span>About</span>
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#skills" className='relative text-white/80 transition-all duration-300 hover:text-purple-500 group'>
                        <span>Skills</span>
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#projects" className='relative text-white/80 transition-all duration-300 hover:text-purple-500 group'>
                        <span>Projects</span>
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#experience" className='relative text-white/80 transition-all duration-300 hover:text-purple-500 group'>
                        <span>Experience</span>
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#contact" className='relative text-white/80 transition-all duration-300 hover:text-purple-500 group'>
                        <span>Contact</span>
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                </div>

                {/* Mobile Menu Icon Toggle Button */}
                <div className='md:hidden z-50'>
                    {showMenu ? (
                        <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer text-white' />
                    ) : (
                        <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer text-white' />
                    )}
                </div>
            </div>

            {/* Mobile Sidebar Dropdown */}
            {showMenu && (
                <div className="md:hidden fixed inset-x-0 top-17 bg-neutral-800 h-[calc(100vh-68px)] p-8 flex flex-col space-y-6 text-center items-center justify-center transition-all duration-300">
                    <a onClick={() => setShowMenu(false)} href="#home" className='text-xl text-white/80 hover:text-purple-500 transition-colors'>
                        Home
                    </a>
                    <a onClick={() => setShowMenu(false)} href="#about" className='text-xl text-white/80 hover:text-purple-500 transition-colors'>
                        About
                    </a>
                    <a onClick={() => setShowMenu(false)} href="#skills" className='text-xl text-white/80 hover:text-purple-500 transition-colors'>
                        Skills
                    </a>
                    <a onClick={() => setShowMenu(false)} href="#projects" className='text-xl text-white/80 hover:text-purple-500 transition-colors'>
                        Projects
                    </a>
                    <a onClick={() => setShowMenu(false)} href="#experience" className='text-xl text-white/80 hover:text-purple-500 transition-colors'>
                        Experience
                    </a>
                    <a onClick={() => setShowMenu(false)} href="#contact" className='text-xl text-white/80 hover:text-purple-500 transition-colors'>
                        Contact
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar