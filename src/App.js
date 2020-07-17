/*import React, { useState, useEffect } from 'react';
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

export default App;*/
import React, { Component } from 'react'
import firebase from './firebase'
export class App extends Component {

  handleClick = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
   
    var number = '';//+1 650-555-1234

    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(number, appVerifier).then(function (e) {
      var code = prompt("enter tyhe code");//123456


      if (code === null) return;


      e.confirm(code).then(function (result) {
        console.log(result.user);

        document.querySelector('label').textContent += result.user.phoneNumber + "Number verified";

      }).catch(function (error) {
        console.error(error);

      });

    })
      .catch(function (error) {
        console.error(error);

      });
  }
  render() {
    return (
      <div>
        <label></label>

        <div id="recaptcha"></div>

        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default App
