import React from 'react'
import { facebook_provider, auth } from '../../firebase'

function Facebook({setisSignedIn}) {

    const facebookSignup = async ()=>{
      await auth.signInWithPopup(facebook_provider)
      alert("inserted")
      setisSignedIn(true)
    }
    return (
        <div style={{float:'center'}}>
             <br />
            <button style={{ marginTop: '2%', color:'white', background:'blue'}} onClick={facebookSignup}>Facebook SignUp</button>
        </div>
    )
}

export default Facebook
