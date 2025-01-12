// "use client"
// import Image from "next/image";
// import {DarkLight,useTheme} from "./_components/DarkLight"
// export default function Home() {
 
// const items = ["Amar","Gourav","Rohit","Ankush","Raj",
//   "Anuj","Ankit","Arpan","Rajesh"
// ]

//   const ThemeSwitcher = () =>{
//     const {theme,toggleTheme} = useTheme();
//     return(
//       <button onClick={toggleTheme}>
//           Switch to {theme === "light" ? "dark":"light"} Mode <br/>
//       </button>
//     )
//   }

//   const Home = () =>{
//     const {theme} = useTheme();

//     const styles = {
//       light:{
//       backgroundColor: "#fff",
//       color: "#000",
//       height: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       },
//       dark: {
//         backgroundColor: "#333",
//         color: "#fff",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       },

//     }

//     return <div style={styles[theme]}>
//       <ThemeSwitcher />
//       This is {theme} mode!
//       <br />
//       </div>;
  
//   }




//   return (
//    <div>

//     <DarkLight>
        
//         <Home/>

//     </DarkLight>

//    </div>
//   );
// }

"use client"
import React,{useContext} from "react";
import {ThemeContext} from "./_components/DarkLight"


const Home = () => {
  const {colors,toggleTheme,textColor} = useContext(ThemeContext)
  {console.log(textColor)}
  return(

      <div className="h-screen" style={{backgroundColor:colors,color:textColor}}>
      <p className={`text-${textColor}`}>This is App Page</p>
      <button onClick={toggleTheme} >
        Color Changes
        </button>
      </div>
    
  )
}

export default Home;