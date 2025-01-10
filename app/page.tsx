"use client"
import Image from "next/image";
import SearchFeature from "./_components/SearchFeature"
export default function Home() {
 

  return (
   <div className="h-screen flex border border-gray-400 justify-center items-center ">
    <SearchFeature/>
   </div>
  );
}
