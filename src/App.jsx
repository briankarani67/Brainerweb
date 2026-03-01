import React from 'react'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Programs from './Components/Programs'
import Title from './Components/Title'
import Campus from './Components/Campus'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='OUR PROGRAMS' title='What we offer' />
        <Programs/>
        <About/>
        <Title subtitle='GALLERY' title='Campus photos' />
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What a student says' />
        <Testimonials/>
        <Title subtitle='CONTACT US' title='Get in touch' />
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App