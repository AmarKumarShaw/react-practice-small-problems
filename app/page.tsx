"use client"
import Image from "next/image";
import Pagination from "./_components/Pagination"
export default function Home() {
 
const items = ["Amar","Gourav","Rohit","Ankush","Raj",
  "Anuj","Ankit","Arpan","Rajesh"
]
  return (
   <div className="h-screen flex border border-gray-400 justify-center items-center ">
      <Pagination items={items} itemsPerPage={5}/>
   </div>
  );
}
