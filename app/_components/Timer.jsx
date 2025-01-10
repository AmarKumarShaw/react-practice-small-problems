import React,{useEffect, useState} from "react"


const Timer = () =>{
    const [time,setTime] = useState(60);
    useEffect(()=>{
        if(time=>0){
            const timer = setTimeout(()=>{
                setTime(time-1)
            }
                ,1000)
              return ()=> clearTimeout(timer)
        }
        else if(time<=0){
            alert("Timeout has been completed")
     
         }
    },[time])

    

    return(
            <div>
                <h1>Timer: {time}</h1>
            </div>
    )
}

export default Timer;