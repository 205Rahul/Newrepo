import React from 'react'
import {useNavigate} from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1 style={{color:"green"}}>GeeksForGeeks</h1>
        <button onClick={()=>navigate("/about")}>About</button>


    </div>
  )
}
