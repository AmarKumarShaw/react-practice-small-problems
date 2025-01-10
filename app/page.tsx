"use client"
import Image from "next/image";
import UploadImage from "./_components/UploadImage"
export default function Home() {
 

  return (
   <div className="h-screen flex border border-gray-400 justify-center items-center ">
    <UploadImage/>
   </div>
  );
}
