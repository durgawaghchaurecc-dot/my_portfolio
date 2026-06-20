import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills'
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
const Home = () => {
  return (
    <div className='bg-neutral-900 min-h-screen overflow-x-hidden'>
            {/* This ID matches the href="#home" in your navbar perfectly */}
            <section id='home' className='scroll-mt-20'/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
    </div>
  )
}

export default Home