import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Diet = () => {
    var style={
        marginTop:"50px",
        paddingLeft:"240px",
        paddingRight:"280px",
      }

      const [diet,setdiet] = useState([])

      const getData = ()=>{
          axios.get("http://localhost:4001/diets").then(res =>{
              console.log(res.data.data)
              setdiet(res.data.data)
          })
      }

      const DeleteData = (_id)=>{
           axios.delete(`http://localhost:4001/diets/${_id}`).then((res)=>{
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
           
            <Link to="/adddiet"><button type="button" class="btn btn-success">Add Diet</button></Link>
            
          </div>
          

        </div>
        <br/>
     <div className="container">
        <table class="table">
        <thead class="table-dark">
         <tr>
         <th scope="col">Diet_Id</th>    
         <th scope="col">Title</th>    
         <th scope="col">Description</th>    
         <th scope="col">Member_id</th>
         <th scope='col'>Action</th>    
         </tr>    
        </thead>
    <tbody>
        {
            diet.map((diet)=>{
                return(
                    <tr>
                        <td>{diet._id}</td>
                        <td>{diet.title}</td>
                        <td>{diet.description}</td>
                        <td>{diet.user}</td>
                        <td><button onClick={()=>DeleteData(diet._id)}  class="btn btn-danger">DELETE</button></td>
                       <td><Link to={`/diet/update/${diet.id}`} className="btn btn-primary">UPDATE</Link></td>
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
