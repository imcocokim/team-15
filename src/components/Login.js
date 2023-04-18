import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
//use this link to go to the signUp page 'signup'


const Login = (props) => {
    const [message, setMessage] = useState('')

    const updateMessage = msg => {
        setMessage(msg)
    }

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            // submission logic here
            // authservice...
        } catch (err) {
            updateMessage(err.message)
        }
    }

    const handleChange = e => {
        updateMessage('')
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value,
        })
    }


    return (
        <form 
            autoComplete='off'
            onSubmit={handleSubmit}
            className='signupContainer'
        >
            <div>
                <div className='label'>
                    <label htmlFor="email">Email</label>
                </div>
                <div className='input'>
                    <input 
                        type="text" 
                        autoComplete='off'
                        id='email'
                        name='email'
                        placeholder='name@example.com'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <div className='label'>
                    <label htmlFor="password">Password</label>
                </div>
                <div className='input'>
                    <input
                        type='password'
                        autoComplete='off'
                        id='password'
                        name='password'
                        placeholder='****************'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <button>Log In</button>
            </div>
            <div>
                <text>Don't have an account? <Link to='/signup'>Create free account</Link></text>
            </div>

        </form>
    )
}

export default Login