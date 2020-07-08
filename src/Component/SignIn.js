import React from 'react'
import { auth} from '../firebase'

function SignIn({ setisSignedIn }) {
    const signout = async ()=>{
        await auth.signOut()
        setisSignedIn(false);
    }
    return (
        <div>
            I am In
            <button onClick={signout}>Sign Out</button>
        </div>
    )
}

export default SignIn
