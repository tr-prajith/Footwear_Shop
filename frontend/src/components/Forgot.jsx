import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Forgot = () => {
    return (
        <div className='container'>
            <div className="card">

                {/* Left side image section */}
                <div className="left-side">
                    <img src="../assets/login.png" alt="Image" />
                </div>

                {/* Right side form section */}
                <div className="right-side">
                    <div className="head">
                        <h2>Forgot Password🔒</h2>
                        <p>
                            No worries! Enter your email and <br />
                            we will send you a reset link.
                        </p>
                    </div>
                    {/* Form section */}

                    <form className='user-form'>
                        <p>Email Address</p>
                        <input type="email" placeholder='Enter your registered email' />
                        <button className='submit-btn' type='submit'>Send Reset Link</button>
                    </form>

                    <Link to='/login' className='back-text'>
                    
                        <FaArrowLeft /> Back to Login
                    
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Forgot