"use client"
import Image from "next/image";
import {useState} from "react"
import Toggle from "./_components/Toggle"
export default function Home() {
 

  return (
   <div className="h-screen flex border border-gray-400 justify-center items-center ">
   <Toggle/>
   </div>
  );
}
