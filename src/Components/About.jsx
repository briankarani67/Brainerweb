import React from 'react'
import './About.css'

import kyu from '../assets/kyu.png'

function About() {
  return (
    <div className="about">
        <div className="about-left">
            <img src={kyu} alt='kyu'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on transformative educational journey with our university's comprehensive educational programs. Our cutting edge curriculum
                is designed to empower students with the knowledge, skills and experiences needed to excell in dynamic field of education.
            </p>
            <p>
                With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact
                in classrooms, schools and communities.
            </p>
            <p>
                Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range
                of programs offers the perfect way  to achieve your goals and unlock your full potential in shaping the future of education.
            </p>
        </div>
    </div>
  )
}

export default About