import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

import BlueBall from './components/assets/BlueBall'
import './App.css'

function App() {


  return (
    <div className='body flex flex-row bg-black text-white min-h-[100vh] max-w-[100vw] overflow-x-hidden'>
      <div className="container  mx-5 sm:mx-[50px]">
        <Header />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <BlueBall top={'-700px'} left={'-700px'} />
    </div>
  )
}

export default App
