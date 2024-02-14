import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReturnTrip = () => {
  const navigate = useNavigate();
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const names = localStorage.getItem("name");
  const user = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    name: names,
    returnCity: "",
    returnPickupAddress: "",
    returnDate: "",
    returnTime: "",
    returndropOffCity: "",
    returnDropoff: "",
    userId: user,
    fare: "",
  });

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        process.env.REACT_APP_RETURN,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        setIsBookingSuccess(true); // Set success state to true
        setTimeout(() => {
          navigate("/ccpayment");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const calculateFare = () => {
    let fare = 0;
    if (
      formData.returnCity === "cairo" &&
      formData.returndropOffCity === "cai"
    ) {
      fare = 35;
    } else if (
      formData.returnCity === "cairo" &&
      formData.returndropOffCity === "hbe"
    ) {
      fare = 45;
    } else if (
      formData.returnCity === "alexandria" &&
      formData.returndropOffCity === "cai"
    ) {
      fare = 45;
    } else if (
      formData.returnCity === "alexandria" &&
      formData.returndropOffCity === "hbe"
    ) {
      fare = 35;
    }
    setFormData({ ...formData, fare });
  };
  useEffect(() => {
    calculateFare();
  }, [formData.returnCity, formData.returndropOffCity]);

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
          <div className="text-center mb-4">
            <img
              src={Logo}
              alt="logo"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
          </div>
          <h2 className="text-center mb-4">Book your Return Trip</h2>

          <form onSubmit={handleSubmit}>
            {/* Return From Field */}
            <div className="form-group mb-3">
              <label>Return From</label>
              <select
                className="form-control"
                name="returnCity"
                value={formData.returnCity}
                onChange={handleChange}
              >
                <option value="#">Select One</option>
                <option value="cairo">Cairo</option>
                <option value="alexandria">Alexandria</option>
              </select>
            </div>

            {/* Pickup Address Field */}
            <div className="form-group mb-3">
              <input
                className="form-control"
                placeholder="Pickup Address/ Location"
                name="returnPickupAddress"
                value={formData.returnPickupAddress}
                onChange={handleChange}
              />
            </div>

            {/* Pickup Time Field */}
            <div className="form-group mb-3">
              <label>Pickup Time</label>
              <input
                className="form-control"
                type="time"
                name="returnTime"
                value={formData.returnTime}
                onChange={handleChange}
              />
            </div>

            {/* Pickup Date Field */}
            <div className="form-group mb-3">
              <label>Pickup Date</label>
              <input
                className="form-control"
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
              />
            </div>

            {/* Dropoff In Field */}
            <div className="form-group mb-3">
              <label>Dropoff In</label>
              <select
                className="form-control"
                name="returndropOffCity"
                value={formData.returndropOffCity}
                onChange={handleChange}
              >
                <option value="#">Select One</option>
                <option value="cai">Cairo International Airport- CAI</option>
                <option value="hbe">
                  Alexandria International Airport-HBE
                </option>
              </select>
            </div>

            {/* Dropoff Location Field */}
            <div className="form-group mb-4">
              <input
                placeholder="Dropoff Location/ Address"
                className="form-control"
                type="text"
                name="returnDropoff"
                value={formData.returnDropoff}
                onChange={handleChange}
              />
            </div>

            {/* Fare Display */}
            <div className="form-group mb-4">
              <p className="text-center h5">Estimated Fare: ${formData.fare}</p>
            </div>

            {/* Submit Button */}
            <div className="text-center mb-3">
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
            </div>

            {/* Success Message */}
            {isBookingSuccess && (
              <div className="alert alert-success" role="alert">
                Booking in Progress... Redirecting to Payment!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReturnTrip;
