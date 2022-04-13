import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const WorkoutPlan = () => {
    var style={
        marginTop:"50px",
        paddingLeft:"240px",
        paddingRight:"280px",
      }

    const[workoutplan,setworkoutplan] = useState([])

    const getData = () => {
        axios.get("http://localhost:4001/workoutplans").then(res =>{
            console.log(res.data.data)
            setworkoutplan(res.data.data)
        })
    }

    const DeleteData = (_id) =>{
        axios.delete(`http://localhost:4001/workoutplans/${_id}`).then((res)=>{
            alert(res.data)
            getData();
        })
    }
    useEffect(() =>{
        getData()
    }, [])
  return (
    <div style={style}>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Workout_Plan</h1>
          </div>
        </div>
        <div className="container">
        <table class="table">
        <thead class="table-dark">
         <tr>
         <th scope="col">Plan_Id</th>    
         <th scope="col">User_Id</th>    
         <th scope="col">Workout_Id</th>    
         <th scope="col">Workout_Date</th>  
         <th scope="col">Workout_Time</th>
         <th scope="col">IsWorkout_Complete</th>  
         <th scope='col'>Action</th>
         </tr>    
        </thead>
    <tbody>
        {
            workoutplan.map((workoutplan) => {
                return(
                    <tr>
                        <th scope='row'>{workoutplan._id}</th>
                        <td>{workoutplan.user}</td>
                        <td>{workoutplan.workout}</td>
                        <td>{workoutplan.workoutdate}</td>
                        <td>{workoutplan.workouttime}</td>
                        <td>{workoutplan.isworkoutComplete}</td>
                        <td><button onClick={()=>DeleteData(workoutplan._id) } className="btn btn-danger">DELETE</button></td>
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
