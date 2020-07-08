import React, { useState, useEffect } from 'react';
import './App.css';
import { auth} from './firebase'
import SignIn from './Component/SignIn'
import Signup from './Component/Signup/Signup'
import Login from './Component/Login/Login'

function App() {

  const [isSignedIn, setisSignedIn] = useState(false);

  useEffect(() => {
    
  auth.onAuthStateChanged(user => {
    if (user !== null) {
      setisSignedIn(true)
    }
  })
  },[])

  return (
    <div className="App">
      {isSignedIn ?
        <SignIn setisSignedIn={setisSignedIn} />
        :
        <>
        I am out
          <Signup setisSignedIn={setisSignedIn} />
          <Login setisSignedIn={setisSignedIn} />
        </>
      }
    </div>
  );
}

export default App;
