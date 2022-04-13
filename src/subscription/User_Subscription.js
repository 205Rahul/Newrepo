import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const User_Subscription = () => {
    var style={
        marginTop:"50px",
        paddingLeft:"240px",
        paddingRight:"280px",
      }

    const[usersubscription,setusersubscription] = useState([])

    const getData = () =>{
        axios.get("http://localhost:4001/usersubscriptions").then(res =>{
            console.log(res.data.data)
            setusersubscription(res.data.data)
        })
    }

    const DeleteData = (_id) => {
        axios.delete(`http://localhost:4001/usersubscriptions/${_id}`).then((res)=>{
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
            <h1 className="page-header">Members_Subscription</h1>
          </div>
        </div>
        <div className="container">
        <table class="table">
        <thead class="table-dark">
         <tr>
         <th scope="col">Member_Sub_Id</th>    
         <th scope="col">Member_Id</th>    
         <th scope="col">Subscription_Id</th>    
         <th scope="col">pay</th>  
         <th scope="col">Subscribe_Date</th>
         <th scope="col">Payment_RefCode</th> 
         <th scope='col'>Action</th> 
         </tr>    
        </thead>
    <tbody>
        {
            usersubscription.map((usersubscription)=>{
                return(
                    <tr>
                        <th scope='row'>{usersubscription._id}</th>
                        <td>{usersubscription.user}</td>
                        <td>{usersubscription.subscription}</td>
                        <td>{usersubscription.pay}</td>
                        <td>{usersubscription.subscribeDate}</td>
                        <td>{usersubscription.paymentRefCode}</td>
                        <td><button onClick={() => DeleteData(usersubscription._id)} className="btn btn-danger">DELETE</button></td>
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
