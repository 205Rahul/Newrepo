import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const User = () => {
  var style={
    marginTop:"50px",
    paddingLeft:"240px",
    paddingRight:"280px",
  }


  
  const [userList, setuserList] = useState([])

  const getData = () => {
      
    axios.get("http://localhost:4001/users").then((res) => {
      console.log(res.data.data);
      setuserList(res.data.data);
    });
  };

  const DeleteData = (_id)=>{
    axios.delete(`http://localhost:4001/users/${_id}`).then((res)=>{
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
            <h1 className="page-header">Members</h1>
          </div>
        </div>
       
      <div className="container">
        <table className="table">
        <thead className="table-dark">
         <tr>
             
         <th scope="col">First_name</th>    
         <th scope="col">Last_name</th>    
         <th scope="col">Email</th>        
         <th scope="col">Gender</th>
         <th scope="col">ContactNumber</th>
    
         <th scope='col'>Action</th>
         </tr>    
        </thead>
      <tbody>
        {
           userList.map((user)=>{
             return(
               <tr>
                 
                 <td>{user.firstname}</td>
                 <td>{user.lastname}</td>
                 <td>{user.email}</td>
                 <td>{user.gender}</td>
                 <td>{user.contactNumber}</td>
                 
                 <td><button  onClick={()=>DeleteData(user._id)}  className="btn btn-danger">DELETE</button></td>
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
