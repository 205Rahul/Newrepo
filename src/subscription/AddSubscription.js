import axios from 'axios'
import React, { useState } from 'react'

export const AddSubscription = () => {
    var style={
        marginTop:"50px",
        paddingLeft:"390px",
        paddingRight:"360px",
      }
      var style2={
        backgroundColor:"#00b4ff5e"
      }

    const[title,settitle]=useState("")
    const[duration,setduration] = useState("")
    const[offer,setoffer] = useState("")
    const[offerDescription,setofferDescription] = useState("")
    const[price,setprice] = useState("")

    var Data = {
        title:title,
        duration:duration,
        offer:offer,
        offerDescription:offerDescription,
        price:price
    };

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4001/subscriptions",Data).then((res) =>{
            console.log(res.status);
            console.log(res.data);
            alert("Subscription Added....");
        });
    };
  return (
    <div style={style}>
    <div className="card-body p-0 text-center" style={style2}>
     <h3 className="mb-5">Add Subscription</h3>
     </div>
     <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Subscription_Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter SubscriptionName'
    onChange={(e) => settitle(e.target.value)}/>
    
  </div>
  <br/>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Duration</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Duration'
    onChange={(e)=>setduration(e.target.value)} />
  </div>
  <br/>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Offer</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Offer'
    onChange={(e)=>setoffer(e.target.value)} />
  </div>
  <br/>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Offer_Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Offer_Description'
    onChange={(e)=>setofferDescription(e.target.value)} />
  </div>
  <br/>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Price'
    onChange={(e)=>setprice(e.target.value)} />
  </div>
  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">ADD</button>
  
    </form>
    </div>    
  )
}
