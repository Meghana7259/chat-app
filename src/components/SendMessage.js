import { async } from '@firebase/util'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import {db,auth} from '../firebase'

const style={
form:`h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
input:`w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
button:`w-[20%] bg-gray-100`
}




function SendMessage({scroll}) {

const [input,setInput]=useState('')
const sendMessage=async(event)=>{
    event.preventDefault()
    if(input === ''){
        alert("enter the valid message")
        return
    }
    const {uid,displayName}=auth.currentUser
    await addDoc(collection(db,'messages'),{
        text:input,
        name:displayName,
        uid,
        timestamp:serverTimestamp()
    })
    setInput("")
    scroll.current.scrollIntoView({behavior:'smooth'})
}



  return (
    <form  onSubmit={sendMessage}  className={style.form}>
        <input value={input} onChange={(event)=>setInput(event.target.value)}  className={style.input} type='text' placeholder='message'></input>
        <button className={style.button}>Send</button>

    </form>
  )
}

export default SendMessage