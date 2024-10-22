import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Experiences from './components/Experiences'
import Certificates from './components/Certificates'
import Entries from './components/Entries'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'


function App() {

  return (
    <div>

      <Header />

      <Banner />

      <About />

      <Projects />

      <Skill />

      <Experiences />

      <Chatbox />

      <Contact />

      <Footer />
    </div>
  )
}

export default App