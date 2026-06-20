import React from 'react'
import { motion } from 'framer-motion'
// Note: If you have an icons or aboutInfo data array imported from another file, 
// make sure it's imported here. For now, we will add a fallback variable so it doesn't crash.
import { FaCode, FaGraduationCap } from 'react-icons/fa' 

const aboutInfo = [
    { icon: FaGraduationCap, title: "Education", desc: "Computer Engineering & IoT" },
    { icon: FaCode, title: "Experience", desc: "Web Development Projects" }
];

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-neutral-900 text-white' // Standard Tailwind color fallback
        >
            <div className='container mx-auto px-6'>
                {/* Heading */} 
                <h2 className='text-3xl font-bold text-center mb-4'>
                    About <span className='text-purple-500'>Me</span>
                </h2>
                
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Get to know more about me, my journey, and what 
                    drives my passion for development. I specialize in
                    building robust and beautifully designed web applications.
                </p>

                {/* Image + My Journey Layout */}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* Image Wrapper */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img 
                            src="/src/assets/profile.avif" 
                            alt="profile"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    {/* Text Content Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='md:w-1/2 rounded-2xl p-8'
                    >
                        <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                        <p className='text-gray-300 mb-6'>
                            I am a Computer Engineering and IoT student passionate about 
                            web development, programming, and technology. I enjoy building 
                            creative projects using HTML, CSS, JavaScript, React, and Tailwind 
                            CSS. My goal is to improve my skills and create innovative 
                            solutions that help people and the environment.
                        </p>
                        <p className='text-gray-300 mb-12'>
                            Apart from coding, I love photography, nature, drawing, 
                            and learning new technologies. I believe in continuous 
                            learning and turning ideas into real-world projects.
                        </p>

                        {/* Info Grid Cards */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            {aboutInfo.map((data, index) => (
                                <div 
                                    key={index} 
                                    className='bg-neutral-800 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'
                                >
                                    <div className='text-purple-500 text-4xl mb-4'>
                                        <data.icon />
                                    </div>
                                    <h4 className='text-lg font-medium mb-1'>{data.title}</h4>
                                    <p className='text-sm text-gray-400'>{data.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;