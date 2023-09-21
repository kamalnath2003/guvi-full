import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../services/helper";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/login`, { password, email })
      .then((result) => {
        console.log(result);
        if (result.data.email == email) {
          const user = result.data;
          console.log(user);

          nav(`/dashboard/${user._id}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                         
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />

                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div>

    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit}>

    //     <div>
    //       <p>Email</p>
    //       <input
    //         type="text"
    //         onChange={(e) => {
    //           setEmail(e.target.value);
    //         }}
    //       />
    //     </div>
    //     <div>
    //       <p>Password</p>
    //       <input
    //         type="text"
    //         onChange={(e) => {
    //           setPassword(e.target.value);
    //         }}
    //       />
    //     </div>
    //     <button type="submit">submit</button>
    //     <a type="submit" href="#">Register</a>
    //     <a className="ps-3" href="/login">
    //       Login
    //     </a>
    //     <a className="ps-3" href="/">
    //       home
    //     </a>
    //   </form>
    // </div>
  );
}

export default Login;
