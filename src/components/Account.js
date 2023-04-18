import React from 'react';
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
    return (
        <section className='container'>
            <Router>
                {/* logo here */}
                <div className='logo-container'>
                    <img className='logo' src={logo} alt="tasks" />
                </div>

                <Routes>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<SignUp />}/>
                </Routes>
            </Router>
        </section>
    )
}

export default Account