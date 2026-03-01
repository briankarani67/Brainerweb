import React from 'react'
import './Programs.css'
import program_1 from '../assets/braza.jpg'
import program_2 from '../assets/Full suit.jpeg'
import program_3 from '../assets/mbogi.jpg'
import program_icon_1 from '../assets/brazabig.png'
import program_icon_2 from '../assets/logokomz.jpeg'
import program_icon_3 from '../assets/Mbogibig.png'

function Programs() {
  return (
        <div className="programs">
            <div className="program">
                <img src={program_1} alt='braza'/>
                <div className="caption">
                    <img src={program_icon_1} alt="braza" />
                    <p>BIG UP BRAZA</p>
                </div>
            </div>
            <div className="program">
                <img src={program_2} alt='master-the-planner'/>
                <div className="caption">
                    <img src={program_icon_2} alt="master-the-planner" />
                    <p>THE MASTER PLANNER</p>
                </div>
            </div>
            <div className="program">
                <img src={program_3} alt='mbogi'/>
                <div className="caption">
                    <img src={program_icon_3} alt="mbogi" />
                    <p>BIG MBOGI</p>
                </div>
            </div>
        </div>
  )
}

export default Programs