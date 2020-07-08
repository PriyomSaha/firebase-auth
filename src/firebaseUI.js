import React,{useState, useEffect} from 'react';
import './App.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyAG3GUwgc5ExCCI7LgnJ-07iYp1iSGnmZs",
  authDomain: "fir-authtest-a6924.firebaseapp.com"
})

function firebaseui() {
  const [isSignedIn, setisSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setisSignedIn(!!user)
      console.log("user", user)
    })
  }, [])

  return (
    <div className="App">
      {isSignedIn ? 
      <div>Signed In !<br/>
        
        <button onClick={()=>firebase.auth().signOut()}>SignOut</button>
        <h1>Welcome {firebase.auth().currentUser.displayName} </h1>
      </div>
      : 
      (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )
      }
    </div>
  );
}

export default firebaseui;
