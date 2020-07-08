import React from 'react'
import { google_provider, auth } from '../../firebase'

function Google({setisSignedIn}) {

    const gooleSignup = async ()=>{
      await auth.signInWithPopup(google_provider)
      alert("inserted")
      setisSignedIn(true)
    }
    return (
        <div style={{float:'center'}}>
             <br />
            <button style={{ marginTop: '2%', color:'white', background:'red'}} onClick={gooleSignup}>Google SignUp</button>
        </div>
    )
}

export default Google
