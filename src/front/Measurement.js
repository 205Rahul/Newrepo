import axios from 'axios'
import React from 'react'
import useStateRef from 'react-usestateref'
import { useState } from 'react'

export const Measurement = () => {
    const [height,setheight] = useState('')
    const [weight,setweight] = useState('')
    const [bmi,setbmi] = useState('')
    const [measurementByduration,setmeasurementByduration] = useState('')

    var Data = {
      height:height,
      weight:weight,
      bmi:bmi,
      measurementByduration:measurementByduration
    }

    const submit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:4001/usermeasurements",Data).then((res)=>{
        console.log(res.status);
        console.log(res.data);
        alert("Measurement Added....");
      });
    };

  var style={
    marginTop:"50px",
    paddingLeft:"390px",
    paddingRight:"360px",
  }
  var style2={
    backgroundColor:"#00b4ff5e"
  }

  return (
    <div style={style}>
         <div className="card-body p-0 text-center" style={style2}>
     <h3 className="mb-5">Measurement</h3>
     </div>
     <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Height</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter DietName'
    onChange={(e) => setheight(e.target.value)}/>
    
  </div>
  <br/>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Weight</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Description'
    onChange={(e)=>setweight(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">BMI</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Description'
    onChange={(e)=>setbmi(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">MeasurementByDuration</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Description'
    onChange={(e)=>setmeasurementByduration(e.target.value)} />
  </div>
  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">ADD</button>
  
    </form>
    </div>
  )
}
