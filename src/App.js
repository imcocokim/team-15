// import './App.css';
import React, { useState } from 'react';
import Account from './components/Account';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  return (
    <main className="App">
      {/* to check if the user is logged in */}
      {isLoggedIn ?
        <Account />
      :
      // main app
        <section>

        </section>
      }
    </main>
  );
}

export default App;
