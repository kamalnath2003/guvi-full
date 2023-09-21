import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function dashboard() {
  const { id } = useParams();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");

  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getuser/" + id)
      .then((result) => {
        console.log(result.data);
        setEmail(result.data.email);
        setGender(result.data.gender);
        setAge(result.data.age);
        setDob(result.data.dob);
        setMobile(result.data.mobile);
        setName(result.data.name);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 w-100">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 className="my-3">{name}</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA </p>
                <button
                  type="button"
                  class="btn btn-outline-primary ms-1"
                  onClick={() => {
                    nav(`/update/${id}`);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{mobile}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Gender</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{gender}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Date of birth</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{dob}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div>
    //     name:

    // <h1>Name:{name}</h1>
    // <h1>Email:{email}</h1>
    // <h1>GENDER:{gender}</h1>
    // <h1>age:{age}</h1>
    // <h1>dob:{dob}</h1>
    // <h1>mobile:{mobile}</h1>
    // <h1>Email:{email}</h1>
    //    <button onClick={()=>{
    //     nav(`/update/${id}`)
    //    }}>update</button>

    // </div>
  );
}

export default dashboard;
