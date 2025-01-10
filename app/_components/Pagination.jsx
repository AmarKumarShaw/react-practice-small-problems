// import React, { useState } from 'react';

// const Pagination = ({ items, itemsPerPage }) => {
//     const [currentPage, setCurrentPage] = useState(1);

//     if (!items || items.length === 0) return <p>No items to display</p>;

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <div>
//             <ul>
//                 {currentItems.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>

//             <ul>
//                 {pageNumbers.map((number) => (
//                     <li key={number} onClick={() => setCurrentPage(number)}>
//                         {number}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Pagination;


"use client"
import React,{useState} from "react";

const Pagination = ({items,itemsPerPage}) =>{
    const [currentPage,setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem,indexOfLastItem)
    
    let pageNumbers = [];
    for (let i=1;i<= Math.ceil(items.length/itemsPerPage);i++){
        pageNumbers.push(i)
    }
    
    return(
        <div>
            <h1>This is Pagination</h1>
           {
            currentItems.map((data,index)=>{
                return(
                    <p key={index}>Data:{data}</p>
                )
            })
           }
            <div className="flex space-x-4">
            {
                pageNumbers.map((data)=>{
                    return (
                        <div key={data} className="flex">
                            <li className="style-none list-none shadow-md py-1 px-2 rounded-lg"   onClick={()=> setCurrentPage(data)}>
                            {data}
                        </li>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Pagination;