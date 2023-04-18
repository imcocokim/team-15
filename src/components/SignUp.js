import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
//use this link to go to the signUp page 'login'

const SignUp = () => {
    
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
                <div className='label'>
                    <label htmlFor="confirm">Confirm Password</label>
                </div>
                <div className='input'>
                    <input
                        type='password'
                        autoComplete='off'
                        id='confirm'
                        name='passwordConf'
                        placeholder='****************'
                        // value={passwordConf}
                        //onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <button>Create Account</button>
            </div>
            <div>
                <text>Already have an account? <Link to='/login'>Log in</Link></text>
            </div>

        </form>
    )
}

export default SignUp