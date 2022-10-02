import React from 'react'
import {auth} from '../firebase'

 const style={
    button:`bg-gray-100 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full`
}



function LogOut() {

//function which helps to logout
const signOut=()=>{
    signOut(auth)
}


  return (
   <button className={style.button} onClick={()=>auth.signOut()}>
    LogOut
   </button>
  )
}

export default LogOut