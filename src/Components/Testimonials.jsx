import React, { useRef } from 'react'
import './Testimonials.css'
import user_1 from '../assets/user-1.jpg'
import user_2 from '../assets/user-2.jpg'
import user_3 from '../assets/user-3.jpg'
import user_4 from '../assets/user-4.jpg'

function Testimonials() {
const slider = useRef();
let tx = 0;

    function slideFoward(){
        if (tx > -50){
            tx -=25
        }
    slider.current.style.transform = `translate(${tx}%)`
    }
    function slideBackward(){
        if (tx < 0){
            tx +=25
        }
    slider.current.style.transform = `translate(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <p className='next-btn' onClick={slideFoward}>⟫</p>
        <p className='back-btn' onClick={slideBackward}>⟪</p>

        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt='user'/>
                            <div>
                                <h3>Brian Karani</h3>
                                <span>Braines</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at KYU was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excelence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt='user'/>
                            <div>
                                <h3>Evan Koome</h3>
                                <span>Agritech</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at KYU was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excelence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt='user'/>
                            <div>
                                <h3>Roy Mutuma</h3>
                                <span>AABraza</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at KYU was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excelence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt='user'/>
                            <div>
                                <h3>Elena Logan</h3>
                                <span>Bripur</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at KYU was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excelence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials