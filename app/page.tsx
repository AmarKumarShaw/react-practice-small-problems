"use client"
import Image from "next/image";
import {useState} from "react"
import Timer from "./_components/Timer"
export default function Home() {
 

  return (
   <div className="h-screen flex border border-gray-400 justify-center items-center ">
   <Timer/>
   </div>
  );
}
