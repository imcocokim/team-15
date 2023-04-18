import React from 'react';
import {
    Link
} from "react-router-dom";
//use this link to go to the signUp page 'signup'


const Login = () => {
    return (
        <form 
            autoComplete='off'
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
                        // value={email}
                        // onChange={handChange}
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
                        // value={password}
                        //onChange={handleChange}
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