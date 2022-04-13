import React from 'react'
import {useNavigate} from "react-router-dom"

export const About = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>A Computer Science portal for geeks.</h1>
        <button onClick={()=>navigate(-1)}>Go Back Home</button>
    </div>
  )
}
