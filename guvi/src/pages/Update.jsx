import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState();
  const [mobile, setMobile] = useState("");
  const [user, setUser] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getuser/" + id)
      .then((result) => {
        console.log(result.data);
        setEmail(result.data.email);
        setGender(result.data.gender);
        setDob(result.data.dob);
        setAge(result.data.age);
        setMobile(result.data.mobile);

        setName(result.data.name);
        setPassword(result.data.password);
      })
      .catch((err) => console.log(err));
  }, []);

  const updatebutton = (e) => {
    console.log("start");
    e.preventDefault();
    axios
      .put("http://localhost:3000/update/" + id, {
        name,
        email,
        password,
        age,
        gender,
        dob,
        mobile,
      })
      .then((result) => {
        console.log(result);
        nav("/dashboard/" + id);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((result) => {
        console.log(result);
        nav("/signup");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container m-5 p-5 w-100">
      <form className="mx-auto px-5 " onSubmit={updatebutton}>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="form6Example1"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
              />
              <label className="form-label" htmlFor="form6Example1">
                Name
              </label>
            </div>
          </div>
        </div>

        {/* Text input */}
        <div className="form-outline mb-4">
          <input
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            id="form6Example3"
            className="form-control"
          />
          <label className="form-label" htmlFor="form6Example3">
            Age
          </label>
        </div>

        {/* Text input */}
        <div className="form-outline mb-4">
          <input
            type="text"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
            id="form6Example4"
            className="form-control"
          />
          <label className="form-label" htmlFor="form6Example4">
            Date of birth
          </label>
        </div>

        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="text"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            id="form6Example5"
            className="form-control"
          />
          <label className="form-label" htmlFor="form6Example5">
            Gender
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="form6Example5"
            className="form-control"
          />
          <label className="form-label" htmlFor="form6Example5">
            Password
          </label>
        </div>

        {/* Number input */}
        <div className="form-outline mb-4">
          <input
            type="number"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            id="form6Example6"
            className="form-control"
          />
          <label className="form-label" htmlFor="form6Example6">
            Phone
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="form6Example6"
            className="form-control"
          />
          <label className="form-label" htmlFor="form6Example6">
            email
          </label>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Update
        </button>
        <button
          onClick={(e) => {
            handleDelete(id);
          }}
          className="btn btn-danger btn-block mb-4 ms-5"
        >
          Delete account
        </button>
      </form>
    </div>

    // <div>
    //   <form onSubmit={updatebutton}>
    //     Name
    //     <input
    //       type="text"
    //       value={name}
    //       onChange={(e) => {
    //         setName(e.target.value);
    //       }}
    //     />
    //     email
    //     <input
    //       type="text"
    //       value={email}
    //       onChange={(e) => {
    //         setEmail(e.target.value);
    //       }}
    //     />
    //     password
    //     <input
    //       type="text"
    //       value={password}
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //     />
    //     age
    //     <input
    //       type="text"
    //       value={age}
    //       onChange={(e) => {
    //         setAge(e.target.value);
    //       }}
    //     />
    //     gender
    //     <input
    //       type="text"
    //       value={gender}
    //       onChange={(e) => {
    //         setGender(e.target.value);
    //       }}
    //     />
    //     dob
    //     <input
    //       type="text"
    //       value={dob}
    //       onChange={(e) => {
    //         setDob(e.target.value);
    //       }}
    //     />
    //     mobile
    //     <input
    //       type="text"
    //       value={mobile}
    //       onChange={(e) => {
    //         setMobile(e.target.value);
    //       }}
    //     />
    //     <button type="submit">apply changes</button>

    //   </form>
    //   <button onClick={(e)=>{
    //     handleDelete(id)

    //   }}>delete</button>
    // </div>
  );
}

export default Update;
