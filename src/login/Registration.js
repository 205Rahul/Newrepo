import React from 'react'

export const Registration = () => {

  var style={
    marginTop:"50px",
    paddingLeft:"290px",
    paddingRight:"280px",
  }
  var style2={
    backgroundColor:"#00b4ff5e"
  }
    


  return (
    <div style={style}>
      <div className="card-body p-0 text-center" style={style2}>
     <h3 className="mb-5">Registration</h3>
     </div>
        <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">FirstName</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your firstName"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">LastName</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your LastName"/>
</div>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your password'/>
  </div>
  <br />
  <label for="formGroupExampleInput2" class="form-label">Gender</label>
  <br />

  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">female</label>
</div>
<br /><br />
  <div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">MobileNumber</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your MobileNumber"/>
  <br />

  <div class="md-form md-outline input-with-post-icon datepicker" id="customDays">
  <input placeholder="Select date" type="text" id="Customization" class="form-control"/>
  <label for="Customization">Try me...</label>
  <i class="fas fa-calendar-alt" ></i>
  </div>


  <label for="formGroupExampleInput2" class="form-label">Role</label>

  <select className="form-control form-control-lg">
  <option value="0">Select Role</option>
  <option value="1">Admin</option>
  <option value="2">Member</option>
  </select>
  <br />
  <label for="formGroupExampleInput2" class="form-label">Gender</label>
  <br />

  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">female</label>
</div>
</div>
    </div>
  )
}
