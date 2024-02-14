import React, { useState } from "react";
import Logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.REACT_APP_LOGIN, formData);
      const { token, userId, name, role, phone, mail } = response.data;
      if (response.status === 200) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("name", name);
        localStorage.setItem("role", role);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", mail);

        setIsLoginSuccess(true); // Set success state to true
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="text-center mb-3">
          <img
            src={Logo}
            alt="logo"
            className="img-fluid"
            style={{ maxWidth: "200px" }}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        {isLoginSuccess && (
          <div className="alert alert-success" role="alert">
            Login success! Redirecting...
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
