import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';


export const UpdateSubscription = () => {
    
    var style={
        marginTop:"50px",
        paddingLeft:"390px",
        paddingRight:"360px",
      }
      var style2={
        backgroundColor:"#00b4ff5e"
      }

      var id = useParams().id;
      console.log("Id--",id);

      const [data, setdata] = useState('')
      const [title,settitle] = useState(data.title)
      const [duration,setduration] = useState(data.duration)
      const [offer,setoffer] = useState(data.offer)
      const [offerdescription,setofferdescription] = useState(data.offerdescription)
      const [price,setprice] = useState(data.price)

      const getData =()=>{
          axios.get(`http://localhost:4001/subscriptions/${id}`).then((res)=>{
              setdata(res.data.data);
              console.log("--",res.data.data);
          })
      }

      useEffect(()=>{
          getData();
      },[])

     const update = (e) => {
         var updateData = {
             title:title,
             duration:duration,
             offer:offer,
             offerdescription:offerdescription,
             price:price
         };
         e.preventDefault();

         axios.put(`http://localhost:4001/subscriptions/${id}`,updateData).then((res)=>{
             alert('Data Updated....');
         });
     };

  return (
    <div style={style}>
    <div className="card-body p-0 text-center" style={style2}>
<h3 className="mb-5">Update Subscription</h3>
</div>
<form onSubmit={update}>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Subscription_Name</label>
<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  defaultValue={data.title}
onChange={(e) => settitle(e.target.value)}/>

</div>
<br/>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Duration</label>
<input type="text" className="form-control" id="exampleInputPassword1" defaultValue={data.duration}
onChange={(e)=>setduration(e.target.value)} />
</div>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Offer</label>
<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  defaultValue={data.offer}
onChange={(e) => setoffer(e.target.value)}/>

</div>
<br/>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">OfferDescription</label>
<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  defaultValue={data.title}
onChange={(e) => setofferdescription(e.target.value)}/>

</div>
<br/>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Price</label>
<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  defaultValue={data.title}
onChange={(e) => setprice(e.target.value)}/>

</div>
<br/>
{/* <button type="submit" className="btn btn-primary">Submit</button> */}
<button type="submit" className="btn btn-primary btn-block mb-4">ADIT</button>

</form>
</div>
  )
}
