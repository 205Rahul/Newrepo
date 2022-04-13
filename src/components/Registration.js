import React, { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const NameHandler = (e) => {
    setName(e.target.value);
  };
  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const AgeHandler = (e) => {
    setAge(e.target.value);
  };
  const submit = (e) => {
    //
    e.preventDefault();
    alert(`Name:${name}\nEmail:${email} \nPassword:${password}\nAge:${age}`);
  };

  return (
    <div>
      <h1> EmployeeRegistration </h1>{" "}
      <form onSubmit={(e) => submit(e)}>
        <table>
          <tr>
            <td> Employee Name </td>{" "}
            <td>
              {" "}
              <input
                type="text"
                name="Name"
                placeholder="enter employee name"
                value={name}
                onChange={(e) => {
                  NameHandler(e);
                }}
              />
            </td>
          </tr>{" "}
          <tr>
            <td> Employee Email </td>{" "}
            <td>
              {" "}
              <input
                type="text"
                name="Email"
                value={email}
                placeholder="enter employee Email"
                onChange={(e) => {
                  EmailHandler(e);
                }}
              />
            </td>
          </tr>{" "}
          <tr>
            <td> Employee Password </td>{" "}
            <td>
              {" "}
              <input
                type="text"
                name="Password"
                value={password}
                placeholder="enter employee Password"
                onChange={(e) => {
                  PasswordHandler(e);
                }}
              />
            </td>
          </tr>{" "}
          <tr>
            <td> Employee Age </td>{" "}
            <td>
              {" "}
              <input
                type="text"
                name="Age"
                value={age}
                placeholder="enter employee Age"
                onChange={(e) => {
                  AgeHandler(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <button type="submit"> Submit </button>{" "}
          </tr>{" "}
        </table>{" "}
      </form>{" "}
    </div>
  );
};
export default Registration;
