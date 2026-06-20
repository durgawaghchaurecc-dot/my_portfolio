import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

// Your list of portfolio projects with their metadata
const projectsData = [
    {
        title: 'Modern React Project',
        description: 'It incorporates rich, modern interface features, interactive UI micro-interactions powered by Framer Motion, and dynamic components to showcase personal web development projects, engineering skillsets, and educational milestones beautifully across all screen layouts.',
        tags: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: 'https://youtu.be/O1n5EEByYfg?si=Z0HEebnDIWPleUqw',
        codeLink: 'https://github.com/durgawaghchaurecc-dot/modern-react-project',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&auto=format&fit=crop&q=60'
    },
    {
        title: 'Quiz App',
        description: 'A lightweight, user-friendly quiz application designed to test user knowledge dynamically. Built with a component-driven architecture in React, it handles state seamlessly for question transitions, selected answers, and score accumulation.',
        tags: ['React', 'AI Tools', 'CSS',],
        demoLink: 'https://youtu.be/VMZ7lcSdVnY?si=7hhURS52O1rIm52O',
        codeLink: 'https://github.com/durgawaghchaurecc-dot/quiz-app',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60'
    },
    {
        title: 'JavaScript Project',
        description: 'A practical, hands-on development module designed to map out the foundational building blocks of native JavaScript coding. It focuses on clean code structure, error resilience, and interactive front-end implementations.',
        tags: ['React', 'JavaScript', 'AI', 'CSS'],
        demoLink: 'https://youtu.be/LX8_z1nvqk4?si=AiQgw90kF1OVYSRB',
        codeLink: 'https://github.com/durgawaghchaurecc-dot/jproject',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60'
    }
]

const Projects = () => {
    return (
        <section id='projects' className='py-20 bg-neutral-900 text-white'>
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
                        My Recent <span className='text-purple-500'>Projects</span>
                    </h2>
                    <p className='text-gray-400 max-w-2xl mx-auto'>
                        Take a look at some of the web development and engineering projects I have worked on recently.
                    </p>
                </motion.div>

                {/* Projects Grid Container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projectsData.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className='bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 flex flex-col group shadow-xl'
                        >
                            {/* Project Thumbnail Image */}
                            <div className='h-48 overflow-hidden relative'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                />
                                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4' />
                            </div>

                            {/* Project Information */}
                            <div className='p-6 flex flex-col grow'>
                                <h3 className='text-xl font-semibold mb-3 tracking-wide'>{project.title}</h3>
                                <p className='text-gray-400 text-sm mb-6 grow leading-relaxed'>{project.description}</p>
                                
                                {/* Technology Badges */}
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex} 
                                            className='bg-neutral-700/60 text-purple-400 text-xs px-3 py-1 rounded-full border border-neutral-600/30'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Buttons */}
                                <div className='flex items-center gap-4 border-t border-neutral-700/50 pt-4 mt-auto'>
                                    <a 
                                        href={project.demoLink} 
                                        target='_blank' 
                                        rel='noreferrer'
                                        className='flex items-center gap-2 text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition-colors duration-200'
                                    >
                                        <FaExternalLinkAlt className='text-xs' /> View Demo
                                    </a>
                                    <a 
                                        href={project.codeLink} 
                                        target='_blank' 
                                        rel='noreferrer'
                                        className='flex items-center gap-2 text-sm font-medium border border-neutral-600 hover:bg-neutral-700 text-gray-300 hover:text-white px-4 py-2 rounded-xl transition-all duration-200'
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects