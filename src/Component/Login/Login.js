import React, { useState, useEffect } from 'react'
import { auth} from '../../firebase'

function Login({ setisSignedIn }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        
       await auth.signInWithEmailAndPassword(email,password).then(cred =>{
           setisSignedIn(true)                    
       })


    }

    return (
        <div style={{float:'left', marginTop: '10%' }}>
            <input type="text" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input style={{ marginTop: '2%' }} type="password" placeholder="enter password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button style={{ marginTop: '2%' }} onClick={login}>Log In</button>
        </div>
    )
}

export default Login
