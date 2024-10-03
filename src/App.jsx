import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './comps/Nav.jsx'
import Hero from './comps/Hero.jsx'
import About from './comps/About.jsx'
import Projects from './comps/Projects.jsx'
import Contact from './comps/Contact.jsx'

function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
