import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import '../styles/Account.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Account = () => {
    return (
        <section>
            <Router>
                {/* logo here */}

                <Switch>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<SignUp />}/>
                </Switch>
            </Router>
        </section>
    )
}

export default Account