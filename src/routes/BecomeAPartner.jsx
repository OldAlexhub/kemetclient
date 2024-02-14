import React, { useState } from "react";
import Logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BecomeAPartner = () => {
  const navigate = useNavigate();
  const [isPartnerSuccess, setIsPartnerSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    fleetSize: "",
    city: "",
  });
  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_PARTNER,
        formData
      );
      if (response.status === 201) {
        setIsPartnerSuccess(true); // Set success state to true
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
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Become a Partner</h1>
          <form onSubmit={handleSubmit}>
            <img src={Logo} alt="logo" className="img-fluid" />
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Fleet Size"
                name="fleetSize"
                value={formData.fleetSize}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Submit Request
              </button>
            </div>
            {isPartnerSuccess && (
              <div className="alert alert-success" role="alert">
                Application Submitted... Redirecting to Home!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeAPartner;
