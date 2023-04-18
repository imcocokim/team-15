import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import '../styles/Account.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import logo from '../images/tasks-logo.png'

const Account = () => {
    const [message, setMessage] = useState([''])

    const updateMessage = msg => {
        setMessage(msg)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            // submission logic here
        } catch (err) {
            updateMessage(err.message)
            console.err(message)
        }
    }
    return (
        <section className='container'>
            <Router>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt="tasks" />
                </div>

                <Routes>
                    <Route path='/login' element={<Login />}/>
                    <Route 
                        path='/signup' 
                        element={<SignUp handleSubmit={handleSubmit} updateMessage={updateMessage}/>}
                    />
                </Routes>
            </Router>
        </section>
    )
}

export default Account