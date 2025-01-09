import React from 'react'
import {useState} from "react"

const DisplayList = () => {

 const listOfItems = ["Amar","Ankush","Ankit","Arjun",]
  return (
    <div>
        {listOfItems.map((data,index)=>{
            return (
                <div key={index}>
                    <p>{data}</p>
                </div>
            )
        })}

    </div>
  )
}

export default DisplayList