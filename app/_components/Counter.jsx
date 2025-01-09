import React,{useState} from 'react'


const Counter = () => {

    const[count,setCount] = useState(0)
    const increment = () =>{
      setCount(count+1)
    }
    const decrement = () =>{
    
       if(count > 0){
            setCount(count-1)
        }
    
    }
    
  return (
    <div>

<div className="flex  justify-center items-center h-screen">

<div className="text-center">
<p className="text-3xl">React Test</p>

<p className="text-2xl">Count:{count}</p>
<div className="flex gap-4 ">
<button className="p-2 bg-red-600 rounded-md text-white" onClick={decrement}>Decrease</button>
<button className="p-2 bg-green-600 rounded-md text-white" onClick={increment}>Increase</button>

</div>

</div>

</div>

    </div>
  )
}

export default Counter