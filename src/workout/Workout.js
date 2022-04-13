import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Workout = () => {
    var style={
        marginTop:"50px",
        paddingLeft:"240px",
        paddingRight:"280px",
      }

     const[workout,setworkout] = useState([])

     const getData = () => {
         axios.get("http://localhost:4001/workouts").then(res=>{
             console.log(res.data.data)
             setworkout(res.data.data)
         })
     }
     const DeleteData = (_id)=>{
         axios.delete(`http://localhost:4001/workouts/${_id}`).then((res)=>{
             alert(res.data);
             getData();
         });
     };

     useEffect(() =>{
         getData()
     }, [])


  return (
    <div  style={style}>
        <div className="row">
          <div className="col-lg-12">
         <Link to="/addworkout"> <button type="button" class="btn btn-success">Add Workout</button></Link>

          </div>
        </div>
        <br/>
      <div className="container">
        <table class="table">
        <thead class="table-dark">
         <tr>
         <th scope="col">Workout-Id</th>    
         <th scope="col">Workout_Name</th>    
         <th scope="col">Description</th>    
         <th scope="col">Userid</th>
         <th scope='col'>Action</th>    
         </tr>    
        </thead>
    <tbody>
        {
            workout.map((workout)=>{
                return(
                    <tr>
                        <th scope='row'>{workout._id}</th>
                        <td>{workout.name}</td>
                        <td>{workout.description}</td>
                        <td>{workout.user}</td>
                        <td><button onClick={() => DeleteData(workout._id)} className="btn btn-danger">DELETE</button></td>
                        <td><Link to = {`/workout/workoutupdate/:id`} className="btn btn-primary">UPDATE</Link></td>
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
