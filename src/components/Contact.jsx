import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle your form submission logic here (e.g., EmailJS or Formspree)
        alert(`Thanks for reaching out, ${formData.name}! Your message has been sent.`)
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id='contact' className='py-20 bg-neutral-900 text-white'>
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
                        Get In <span className='text-purple-500'>Touch</span>
                    </h2>
                    <p className='text-gray-400 max-w-2xl mx-auto'>
                        Have a project in mind, a question, or just want to say hello? Drop a message below!
                    </p>
                </motion.div>

                <div className='flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto'>
                    {/* Left Side: Contact Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className='w-full lg:w-2/5 flex flex-col justify-between bg-neutral-800 rounded-2xl p-8 border border-neutral-700/50 shadow-xl'
                    >
                        <div>
                            <h3 className='text-2xl font-bold mb-4 tracking-wide'>Let's Connect</h3>
                            <p className='text-gray-400 text-sm leading-relaxed mb-8'>
                                I am always open to discussing new web applications, creative design structures, or partnerships in full-stack engineering ecosystems.
                            </p>
                        </div>

                        {/* Info Items List */}
                        <div className='space-y-6'>
                            <div className='flex items-center gap-4 group'>
                                <div className='bg-neutral-700/50 p-4 rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300'>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className='text-xs text-gray-400 uppercase tracking-wider font-semibold'>Email Me</h4>
                                    <p className='text-sm text-neutral-200 mt-0.5 font-medium'>your.email@example.com</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 group'>
                                <div className='bg-neutral-700/50 p-4 rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300'>
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h4 className='text-xs text-gray-400 uppercase tracking-wider font-semibold'>Call Me</h4>
                                    <p className='text-sm text-neutral-200 mt-0.5 font-medium'>+1 (234) 567-890</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 group'>
                                <div className='bg-neutral-700/50 p-4 rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300'>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className='text-xs text-gray-400 uppercase tracking-wider font-semibold'>Location</h4>
                                    <p className='text-sm text-neutral-200 mt-0.5 font-medium'>Pune, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className='w-full lg:w-3/5 bg-neutral-800 rounded-2xl p-8 border border-neutral-700/50 shadow-xl'
                    >
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                <div className='flex flex-col'>
                                    <label className='text-xs font-semibold text-gray-400 mb-2 tracking-wider uppercase'>Your Name</label>
                                    <input 
                                        type='text' 
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder='Name SurName'
                                        className='bg-neutral-900 border border-neutral-700 focus:border-purple-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 text-white'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-xs font-semibold text-gray-400 mb-2 tracking-wider uppercase'>Email Address</label>
                                    <input 
                                        type='email' 
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder='you@example.com'
                                        className='bg-neutral-900 border border-neutral-700 focus:border-purple-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 text-white'
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-xs font-semibold text-gray-400 mb-2 tracking-wider uppercase'>Message</label>
                                <textarea 
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows='5'
                                    placeholder='Type your message here...'
                                    className='bg-neutral-900 border border-neutral-700 focus:border-purple-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 text-white resize-none'
                                />
                            </div>

                            <button 
                                type='submit'
                                className='w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors duration-200 cursor-pointer shadow-md'
                            >
                                Send Message <FaPaperPlane className='text-xs' />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact