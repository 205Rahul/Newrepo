import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {isExpired,decodeToken} from "react-jwt"
export const Login = () => {
  const navigate = useNavigate();
  const [role,setrole] = useState('')
  let emailForm = useRef()
  let passwordForm = useRef()
  let Form = useRef()
  const toSignUp = () => {
    navigate('/registartion',{replace:true})
  }
  const logInFu = async (e) => {
    e.preventDefault()
    let sendThis = {
      email :emailForm.current.value,
      password:passwordForm.current.value,
      role:role,
    }
     await axios.post("http://localhost:4001/login",sendThis).then(res => {  
       if(res.data.status ===200){
        //  let userdata =decodeToken(res.data.data)
         console.log(res.data.data)
        //  localStorage.setItem('token',res.data.data)
        //  localStorage.setItem('userId',userdata.role)
        //  localStorage.setItem('userName',userdata.firstname)
         toast.success("Logged In Successfully !")
         setTimeout(() =>{
           res.data.data.firstname == 'Rahul'? navigate('/dashboard',{replace:true}):navigate('/index',{replace:true})
         },2000);
       }else{
         toast.error("Please Chech your Credentials !")
       }
     }).catch(err =>{
       console.log(err)
     })
  }
  var style={
    marginTop:"50px",
    paddingLeft:"290px",
    paddingRight:"280px",
  }
  var style2={
    backgroundColor:"#00b4ff5e"
  }
  return (
    <div style={style}>
      <form ref={Form}>
      <div style={style2}>
    <div className="card-body p-0 text-center" style={style2}>
     <h3 className="mb-5">Sign In</h3>
     </div>
     </div>
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email'
           required ref={emailForm}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password'
          required ref={passwordForm}
    />
  </div>
  <label htmlFor="formGroupExampleInput2" className="form-label">Role</label>
  <select className="form-control form-control-lg" onChange={(e)=>{setrole(e.target.value)}}>
  <option value="default" defaultValue={true}>Select Role</option>
  <option value="Admin">Admin</option>
  <option value="Member">Member</option>
  </select>
  <br />
  <button type="submit" className="btn btn-primary btn-block mb-4"  onClick={logInFu}>SIGN IN</button>
  <p>Not Register?<button onClick={toSignUp}>Sign Up</button></p> 
  <ToastContainer
                position="top-center"
                autoClose={1000}
                style={{ marginTop: "80px" }}
            />
     </form>            
    </div>
  )
}
