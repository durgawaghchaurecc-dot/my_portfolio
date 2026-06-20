import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb } from 'react-icons/si'

// The array holding all your skills data with icons and levels
const skillsData = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: '95%' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', level: '90%' },
    { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-500', level: '85%' },
    { name: 'React.js', icon: FaReact, color: 'text-cyan-400', level: '85%' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', level: '90%' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', level: '75%' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', level: '70%' },
    { name: 'Git & GitHub', icon: FaGitAlt, color: 'text-orange-600', level: '80%' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const Skills = () => {
    return (
        <section id='skills' className='py-20 bg-neutral-900 text-white'>
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
                        My <span className='text-purple-500'>Skills</span>
                    </h2>
                    <p className='text-gray-400 max-w-2xl mx-auto'>
                        Here are the key programming languages, frameworks, and tools I use to bring ideas to life in the browser.
                    </p>
                </motion.div>

                {/* Skills Cards Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.1 }}
                    className='grid grid-cols-2 md:grid-cols-4 gap-6'
                >
                    {skillsData.map((skill, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className='bg-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer hover:-translate-y-1 shadow-lg'
                        >
                            {/* Icon Wrapper */}
                            <div className={`${skill.color} text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <skill.icon />
                            </div>

                            {/* Skill Name */}
                            <h3 className='text-lg font-semibold tracking-wide mb-2'>{skill.name}</h3>

                            {/* Skill Progress Bar Indicator */}
                            <div className='w-full bg-neutral-700 h-1.5 rounded-full overflow-hidden mt-2'>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.level }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className='bg-purple-500 h-full rounded-full'
                                />
                            </div>
                            <span className='text-xs text-gray-400 mt-1 self-end'>{skill.level}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills