import React from 'react'
import '../styles/user/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        // Navbar Logo Section
        <div className="container">
            <div className="nav">
                <div className='logo-section'>
                    <img src="../assets/logo.png" alt="logo" />

                    <div>
                        <h1>Step<span>Up</span></h1>
                        <p>FOOTWEAR</p>
                    </div>
                </div>
                <div className="nav-items">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/men'>Men</NavLink>
                    <NavLink to='/women'>Women</NavLink>
                    <NavLink to='/kids'>Kids</NavLink>
                    <NavLink to='/brands'>Brands</NavLink>
                    <NavLink to='/new-arrivals'>New Arrivals</NavLink>
                    <NavLink to='/offers'>Offers</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar