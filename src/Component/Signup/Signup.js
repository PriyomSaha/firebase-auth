import React, { useState, useEffect } from 'react'
import { auth} from '../../firebase'
import Google from './Google'
import Facebook from './Facebook'

function Signup({ setisSignedIn }) {

    /* db.settings({
         timestampsInSnapshots: true
     });*/

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signup = async () => {

        await auth.createUserWithEmailAndPassword(email, password).then(cred => {
            alert("inserted")
            setisSignedIn(true)
        })


    }

    /*var provider = auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);*/
    return (
        <div style={{ float: 'right', marginTop: '10%' }}>
            <input type="text" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input style={{ marginTop: '2%' }} type="password" placeholder="enter password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button style={{ marginTop: '2%' }} onClick={signup}>Sign Up</button>
            <Google setisSignedIn={setisSignedIn}/>
            <Facebook setisSignedIn={setisSignedIn}/>
        </div>
    )
}

export default Signup
