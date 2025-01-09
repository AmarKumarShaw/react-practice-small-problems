import React from 'react'
import {useState} from "react"

const Toggle = () => {
    const [isToggled,setIsToggled] = useState(false);

  return (
    <div>
        <div>
        <input
        className='text-3xl'
        type="checkbox" 
        value={isToggled}
        onClick={()=> setIsToggled(!isToggled)}  

        />
        </div>
       <p className='text-3xl'> {isToggled ? "On" : "Off"}</p>
    </div>
  )
}

export default Toggle