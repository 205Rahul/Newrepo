import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export const Subscription = () => {
    var style={
        marginTop:"50px",
        paddingLeft:"240px",
        paddingRight:"280px",
      }

    const[subscription,setsubscription] = useState([])

    const getData = () => {
        axios.get("http://localhost:4001/subscriptions").then(res =>{
            console.log(res.data.data)
            setsubscription(res.data.data)
        })
    }

    const DeleteData = (_id)=>{
        axios.delete(`http://localhost:4001/subscriptions/${_id}`).then((res)=>{
            alert(res.data);
            getData();
        });
    };


    useEffect(() =>{
        getData()
    }, [])
  return (
    <div style={style}>
        <div className="row">
          <div className="col-lg-12">
          <Link to="/addsubscription"><button type="button" class="btn btn-success">Add Subscription</button></Link>

          </div>
        </div>
        <br />
    <div className="container">
        <table class="table">
        <thead class="table-dark">
         <tr>
         <th scope="col">Subscription_Id</th>    
         <th scope="col">Title</th>    
         <th scope="col">Duration</th>    
         <th scope="col">Offer</th>  
         <th scope="col">Offer_Description</th>
         <th scope="col">Price</th>
         <th scope='col'>Action</th>  
         </tr>    
        </thead>
        <tbody>
          {
              subscription.map((subscription)=>{
                  return(
                      <tr>
                          <th scope='row'>{subscription._id}</th>
                          <td>{subscription.title}</td>
                          <td>{subscription.duration}</td>
                          <td>{subscription.offer}</td>
                          <td>{subscription.offerDescription}</td>
                          <td>{subscription.price}</td>
                          <td><button onClick={() => DeleteData(subscription._id)} className="btn btn-danger">DELETE</button></td>
                          <td><Link to = {`/subscription/subupdate/${subscription.id}` } className="btn btn-primary">UPDATE</Link></td>
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
