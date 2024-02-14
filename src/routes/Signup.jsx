import React, { useState } from "react";
import Logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.REACT_APP_SIGNUP, formData);

      if (response.status === 201) {
        setIsSignupSuccess(true); // Set success state to true
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Create an account</h1>
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-4">
              <img
                src={Logo}
                alt="logo"
                className="img-fluid"
                style={{ maxHeight: "275px" }}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </div>
            {isSignupSuccess && (
              <div className="alert alert-success" role="alert">
                Account created successfully! Redirecting...
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
