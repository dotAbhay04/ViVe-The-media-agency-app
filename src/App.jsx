import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marque from './Components/Marque'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import Journey from './Components/Journey'

function App() {

    const  locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full m-h-screen bg-zinc-900 text-white' >
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Journey/>
      <Footer />
    </div>
  )
}

export default App
