import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo2.png'
import menu_icon from '../assets/menu-icon.png'
import {Link} from 'react-scroll'



function Navbar() {
const [sticky, setSticky] = useState(false);

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false)
    }
    )
},[])

const [mobileMenu, setMobileMenu] = useState(false)

function toggleMenu(){
    mobileMenu? setMobileMenu(false): setMobileMenu(true)
}

  return (
    <nav className={`container ${sticky? 'dark-nav' : ' '}`}>
        <img src={logo} alt='LOGO' className='logo'/>
        <ul className={mobileMenu?'hide-mobile-menu':' '}>
            <li><Link to='hero' smooth={true} offset={0}duration={1000}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={1000}>About us</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={1000}>Program</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={1000}>Testimonials</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={1000}>Campus</Link></li>
            <li><Link to='contact' smooth={true}  offset={-260} duration={1000}><button className='btn'>Contact us</button></Link></li>
        </ul>
        <img src={menu_icon} alt='menu' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar