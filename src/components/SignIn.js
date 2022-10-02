import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import {auth} from '../firebase'

import React from 'react'
import GoogleButton from 'react-google-button'


const style={
    wrapper:`flex justify-center `
}

//firebase methods
const googleSignIn=()=>{
    const provider=new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}

function SignIn() {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn