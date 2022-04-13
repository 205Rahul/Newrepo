import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const User_diet = () => {
    var style={
        marginTop:"50px",
        paddingLeft:"240px",
        paddingRight:"280px",
      }

      const [userdiet,setuserdiet] = useState([])

      const getData=() => {
          axios.get("http://localhost:4001/userdiets").then(res =>{
              console.log(res.data.data)
              setuserdiet(res.data.data)
          })
      }

      const DeleteData = (_id)=>{
          axios.delete(`http://localhost:4001/userdiets/${_id}`).then((res)=>{
              alert(res.data);
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
            <h1 className="page-header">Members_Diet</h1>
          </div>
        </div>

         <div className="container">
        <table class="table">
        <thead class="table-dark">
         <tr>
         <th scope="col">Memberdiet_Id</th>    
         <th scope="col">Member_Id</th>    
         <th scope="col">Diet_Id</th>    
         <th scope="col">IsActive</th>
         <th scope="col">Assign_Date</th>
         <th scope="col">Revoke_Date</th>
         <th scope="col">Action</th>

         </tr>    
        </thead>
    <tbody>
        {
            userdiet.map((userdiet)=>{
                return(
                    <tr>
                        <th>{userdiet._id}</th>
                        <td>{userdiet.user}</td>
                        <td>{userdiet.diet}</td>
                        <td>{userdiet.isActive}</td>
                        <td>{userdiet.assignDate}</td>
                        <td>{userdiet.revokeData}</td>
                        <td><button onClick={() => DeleteData(userdiet._id)} className="btn btn-danger">DELETE</button></td>
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
