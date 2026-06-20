import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

// Your timeline data array (Work or Education milestones)
const experienceData = [
    {
        role: 'Full Stack Web Developer (Freelance)',
        company: 'Self-Employed',
        duration: '2025 - Present',
        description: 'Developing high-performance responsive web applications using React, Tailwind CSS, and Node.js. Collaborating directly with clients to map business requirements into elegant code structures.',
        icon: FaBriefcase,
    },
    {
        role: 'Computer Engineering & IoT Student',
        company: 'Engineering University',
        duration: '2023 - Present',
        description: 'Studying core computing paradigms, hardware-software integration, algorithm designs, internet protocols, and building innovative automated solutions.',
        icon: FaGraduationCap,
    },
    {
        role: 'Frontend Development Intern',
        company: 'Tech Solutions Inc.',
        duration: 'Summer 2024',
        description: 'Assisted senior engineering teams in converting dynamic Figma layout mockups into structural, mobile-optimized React dashboard views with clean styling setups.',
        icon: FaBriefcase,
    }
]

const Experience = () => {
    return (
        <section id='experience' className='py-20 bg-neutral-900 text-white'>
            <div className='container mx-auto px-6'>
                {/* Heading */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl font-bold mb-4'>
                        My <span className='text-purple-500'>Journey</span> & Experience
                    </h2>
                    <p className='text-gray-400 max-w-2xl mx-auto'>
                        A structural timeline highlighting my professional milestones, educational history, and practical technical background.
                    </p>
                </motion.div>

                {/* Timeline Tree Wrapper */}
                <div className='relative max-w-3xl mx-auto before:absolute before:inset-0 before:left-4 before:md:left-1/2 before:w-0.5 before:bg-neutral-700'>
                    {experienceData.map((exp, index) => {
                        const Icon = exp.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div 
                                key={index} 
                                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                                    isEven ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Center/Left Node Marker Icon */}
                                <div className='absolute left-4 md:left-1/2 -translate-x-1/2 bg-purple-600 border-4 border-neutral-900 p-2 rounded-full z-10 text-white shadow-md'>
                                    <Icon className='text-sm' />
                                </div>

                                {/* Content Card Panel */}
                                <motion.div 
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className='w-full md:w-[45%] pl-12 md:pl-0 bg-neutral-800 rounded-2xl p-6 border border-neutral-700/50 hover:border-purple-500/30 transition-all duration-300 shadow-xl'
                                >
                                    <span className='text-purple-400 font-semibold text-sm tracking-wide block mb-1'>
                                        {exp.duration}
                                    </span>
                                    <h3 className='text-xl font-bold tracking-wide text-white'>{exp.role}</h3>
                                    <h4 className='text-neutral-300 font-medium text-sm mb-4'>{exp.company}</h4>
                                    <p className='text-gray-400 text-sm leading-relaxed'>{exp.description}</p>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience