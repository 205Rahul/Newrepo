import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Addworkout = () => {
  
    var style={
        marginTop:"50px",
        paddingLeft:"390px",
        paddingRight:"360px",
      }
      var style2={
        backgroundColor:"#00b4ff5e"
      }



    const [name,setname] = useState("");
    const [description,setdescription] = useState("");

    var Data={
        name:name,
        description:description
    };


    const submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:4001/workouts",Data).then((res) => {
            console.log(res.status);
            console.log(res.data);
            alert("Workout Added.....");
        });
    };

  return(
    <div style={style}>
    <div className="card-body p-0 text-center" style={style2}>
     <h3 className="mb-5">Add Workout</h3>
     </div>
     <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Workout_Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter DietName'
    onChange={(e) => setname(e.target.value)}/>
    
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
