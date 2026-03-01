import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better eduation for better world</h1>
            <p>Our cutting edge cirriculumn is designed to empower students with the knowledge,
                skills, and experiences needed to excel in the dynamic field of education.
            </p>
            <button className="btn">Explore more <p className='arrow'>→</p></button>
        </div>
    </div>
  )
}

export default Hero