import React from 'react'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import LogOut from './LogOut'



const style={
    nav:`bg-gray-800 h-20 flex justify-between items-center p-4 rounded`,
    heading:`text-white text-3xl`
}



function Navbar() {
const [user]=useAuthState(auth)


  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat🫂</h1>

    {/* if the user if true then show logout if the user is not signin or if it is false then show signin  */}
        {user?<LogOut/> :<SignIn/>}
        
    </div>
  )
}

export default Navbar