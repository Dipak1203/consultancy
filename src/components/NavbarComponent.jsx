import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
const NavbarComponent = () => {
  return (
    <section className='navbar__container row py-3'>
        <div className='navbar__logo col-md-3'>
            <img src='https://moonlightedu.com.np/uploads/company-profile/80_1679988352.png' alt='logo' className='navbar__logo__img w-100' />
        </div>
        <nav className='col-md-9'>
            <ul>
                <li>
                    <NavLink>Home</NavLink>
                </li>
                <li>
                    <NavLink>About Us</NavLink>
                </li>
                <li>
                    <NavLink>Study Abroad</NavLink>
                </li>
                <li>
                    <NavLink>language Preparation</NavLink>
                </li>
                <li>
                    <NavLink>Gallery</NavLink>
                </li>
                <li>
                    <NavLink>Contact Us</NavLink>
                </li>
                <li>
                    <button>Inquiry Now!</button>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default NavbarComponent