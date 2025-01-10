import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React,{useState} from "react";

const UploadImage = () =>{
    const [file,setFile] = useState()
    const handleChange = (e)=>{
        const uploadImage = e.target.files[0]
        setFile(uploadImage)
    }
    return(
        <div>
            <p>This is an Image File Uploader</p>
            <input type="file" onChange={handleChange} alt="Image File Uploader"/>
            {file && <img src={URL.createObjectURL(file)} alt="Uploaded Image" />}

        </div>
    )
}

export default UploadImage