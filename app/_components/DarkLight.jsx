"use client"
import React,{createContext,useState} from "react";


export const ThemeContext = createContext();

const DarkLight = ({children}) => {
    const [colors,setColors] = useState("black")
    const [textColor,setTextColor] = useState("white")
   

    const toggleTheme = () => {
        setColors((prevTheme)=> (prevTheme == "black" ? "white" : "black"))
        if(colors == "black" && textColor == "white"){
            setTextColor("black")
        }else {
            setTextColor("white")
        }
    }
    
    return(
            <ThemeContext.Provider value={{colors,toggleTheme,textColor}}>
                {children}
            </ThemeContext.Provider>
    )
}
export default DarkLight;




