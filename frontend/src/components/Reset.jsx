import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Reset = () => {
    return (
        <div className='container'>
            <div className="card">
                <div className="left-side">
                    <img src="../assets/login.png" alt="Image" />
                </div>

                {/* Form right side  */}
                <div className="right-side">
                    <div className="head">
                        <h2>Reset Password🔑</h2>
                        <p>Create a new password for your account</p>
                    </div>

                    <form className='user-form'>
                        <p>New Password</p>
                        <input type="password" placeholder='Enter new Password' />
                        <button className='submit-btn' type='submit'>Reset Password</button>
                    </form>

                    <Link to='/login' className='back-text'>
                    <FaArrowLeft/> Back to Login
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Reset