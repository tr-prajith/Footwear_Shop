import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { authCheck, cartCount } from '../Api/api';


const Navbar = () => {



    const [count, setCount] = useState(0)

    useEffect(() => {
        const fetchCount = async () => {
            const res = await cartCount()
            setCount(res.count)
        }
        fetchCount()

    }, [])

    // For Login & Logout
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const checkAuth = async () => {
            const res = await authCheck()
            console.log("Response", res);

            if (res.authenticated) {
                console.log("setting state true");

                setIsLoggedIn(true)
            }
        }
        checkAuth()


    }, [])

    console.log("Login State:", isLoggedIn)


    // Menu after login
    const handleUserIcon = () => {
        setShowMenu(!showMenu)
    }


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
                    <Link to='/'>Home</Link>
                    <Link to='/men'>Men</Link>
                    <Link to='/women'>Women</Link>
                    <Link to='/kids'>Kids</Link>
                    <Link to='/brands'>Brands</Link>
                    <Link to='/new-arrivals'>New Arrivals</Link>
                    <Link to='/offers'>Offers</Link>
                </div>

                {/* icons */}
                <div className="nav-icons">
                    <FaSearch />
                    {isLoggedIn ? (
                        <div className='user-menu'>
                            <FaUser onClick={handleUserIcon} />
                            {showMenu && (

                                <div className='dropdown-menu'>
                                    <span>Profile</span>
                                    <span>Orders</span>
                                    <span>Logout</span>
                                </div>
                            )}
                        </div>
                    ) : (<Link to='/login'>

                        <FaUser />
                    </Link>
                    )}
                    <div className="cart-icon">
                        <FaShoppingBag />
                        <span>{count}</span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Navbar