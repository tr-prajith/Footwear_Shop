import React, { useState } from 'react'
import '../navbar/Navbar.css'
import { Link } from 'react-router-dom'
import {  FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";

const Navbar = () => {


    return (

        // Navbar Logo Section
        <div className="Container">
            <div className="nav">
                <div className='logo-section'>
                    <img src="../assets/logo.png" alt="logo" />

                    <div>
                        <h1>Step<span>Up</span></h1>
                        <p>FOOTWEAR</p>
                    </div>
                </div>

                {/* Nav items */}
                <div className="nav-items">
                    <Link to='/home'>Home</Link>
                    <Link to='/men'>Men</Link>
                    <Link to='/women'>Women</Link>
                    <Link to='/kids'>Kids</Link>
                    <Link to='/brands'>Brands</Link>
                    <Link to='/new-arrivals'>New Arrivals</Link>
                    <Link to='/offers'>Offers</Link>
                </div>

                {/* icons */}
                <div className="nav-icons">
                    <FaSearch/>
                    <Link to='/login'><FaUser /></Link>
                    <FaShoppingBag />                    
                </div>
            </div>
        </div>
    )
}

export default Navbar