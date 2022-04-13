import axios from 'axios';
import React from 'react'
import { useState } from 'react';

export const AddDiet = () => {
    var style={
        marginTop:"50px",
        paddingLeft:"390px",
        paddingRight:"360px",
      }
      var style2={
        backgroundColor:"#00b4ff5e"
      }



    const [title,settitle] = useState("");
    const [description,setdescription] = useState("");

    var Data={
        title:title,
        description:description
    };


    const submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:4001/diets",Data).then((res) => {
            console.log(res.status);
            console.log(res.data);
            alert("Diet Added.....");
        });
    };

  return (
    <div style={style}>
    <div className="card-body p-0 text-center" style={style2}>
     <h3 className="mb-5">Add Diet</h3>
     </div>
     <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Diet_Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter DietName'
    onChange={(e) => settitle(e.target.value)}/>
    
  </div>
  <br/>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Description'
    onChange={(e)=>setdescription(e.target.value)} />
  </div>
  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">ADD</button>
  
    </form>
    </div>
  )
}
