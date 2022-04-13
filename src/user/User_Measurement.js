import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const User_Measurement = () => {
    var style={
        marginTop:"50px",
        paddingLeft:"240px",
        paddingRight:"280px",
      }

    const [measurement,setmeasurement] = useState([])

    const getData = () => {
        axios.get("http://localhost:4001/usermeasurements").then(res=>{
            console.log(res.data.data)
            setmeasurement(res.data.data)
        })
    }

    const DeleteData = (_id) => {
        axios.delete(`http://localhost:4001/usermeasurements/${_id}`).then((res)=>{
            console.log(res.data);
            getData();
        });
    };


    useEffect(()=>{
        getData()
    }, [])
  return (
    <div style={style}>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Members_Measurement</h1>
          </div>
        </div>
        <div className="container">
        <table className="table">
        <thead className="table-dark">
         <tr>
         <th scope="col">Member_Measurement_Id</th>    
         <th scope="col">Member_Id</th>    
         <th scope="col">Height</th>    
         <th scope="col">Weight</th>  
         <th scope="col">BMI</th>
         <th scope="col">Measurement_Date</th>
         <th scope="col">Measurement_By_Duration</th>  
         <th scope='col'>Action</th>
         </tr>    
        </thead>
    <tbody>
        {
            measurement.map((usermeasurement) => {
                return(
                    <tr>
                        <th scope="row">{usermeasurement._id}</th>
                        <td>{usermeasurement.user}</td>
                        <td>{usermeasurement.height}</td>
                        <td>{usermeasurement.weight}</td>
                        <td>{usermeasurement.bmi}</td>
                        <td>{usermeasurement.measurementDate}</td>
                        <td>{usermeasurement.measurementByduration}</td>
                        <td><button onClick={()=> DeleteData(usermeasurement._id)} className="btn btn-danger">DELETE</button></td>
                    </tr>
                )
            })
        }
    </tbody>
        </table>
        </div>
    </div>
  )
}
