import React, { useState } from "react";
import Logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DriverApply = () => {
  const [isApplySuccess, setIsApplySuccess] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phoneNumber: "",
    email: "",
    driverLicenseNumber: "",
    driverLicenseExpiry: "",
    make: "",
    model: "",
    year: "",
    plateNumber: "",
  });

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_BECOME_DRIVER,
        formData
      );
      if (response.status === 201) {
        setIsApplySuccess(true); // Set success state to true
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
          <h1>Become a Driver</h1>
          <form onSubmit={handleSubmit}>
            <img src={Logo} alt="logo" className="img-fluid" />
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                name="lname"
                value={formData.lname}
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
                placeholder="Driver License Number"
                name="driverLicenseNumber"
                value={formData.driverLicenseNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="driverLicenseExpiry">
                Driver License Expiration Date
              </label>
              <input
                className="form-control"
                type="date"
                name="driverLicenseExpiry"
                value={formData.driverLicenseExpiry}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Car Make"
                name="make"
                value={formData.make}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Car Model"
                name="model"
                value={formData.model}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Car Year"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Plate Numbers"
                name="plateNumber"
                value={formData.plateNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Apply Now
              </button>
            </div>
            {isApplySuccess && (
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

export default DriverApply;
