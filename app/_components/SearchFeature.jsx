import React,{useState} from "react";


const items = [
    {
        name:"Amar Shaw"
    },
    {
        name:"Gourav Bania"
    },
{
    name:"Rajesh Singh"
}
]


const SearchFeature = () =>{

    const [name,setName] = useState("")
    const filteredName = items.filter((item)=>
    item.name.toLowerCase().includes(name.toLowerCase())
    )
    return(
        <div>
    <p>This is a Simple Search Feature</p>
    <input type="text" placeholder="Please Search Your Name"
    onChange={(e)=> setName(e.target.value)}

    className="p-2 outline-none border border-gray-200 w-full 
    rounded-full px-4
    "
    />

    <br />

        {
            filteredName.map((data,index)=>{
                return(
                    <div>
                        <p key={index}>{data.name}</p>
                    </div>
                )
            })
        }
    


        </div>
    )
}

export default SearchFeature;