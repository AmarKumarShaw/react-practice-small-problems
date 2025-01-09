import React from 'react'
import { useState } from 'react'

const UserInput = () => {
    const[userInput,setUserInput] = useState("")
  return (
    <div>
        <input
        className='p-2 rounded-md outline-none '
        type="text" 
        placeholder='Enter your Input'
        onChange={(e)=> setUserInput(e.target.value)}
        />

        <p>Display Input:{userInput}</p>
    </div>
  )
}

export default UserInput