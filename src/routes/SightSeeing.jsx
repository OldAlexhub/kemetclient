import React, { useState } from "react";
import Logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const SightSeeing = () => {
  const navigate = useNavigate();
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const token = localStorage.getItem("token");
  const names = localStorage.getItem("name");
  const phone = localStorage.getItem("phone");
  const mail = localStorage.getItem("email");
  const user = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    userId: user,
    name: names,
    pickupAddress: "",
    duration: "",
    dropoffAddress: "",
    email: mail,
    phoneNumber: phone,
    fare: "",
    special: "",
    date: "",
    time: "",
  });

  const calculateFare = (duration) => {
    switch (duration) {
      case "2hours":
        return 35;
      case "4hours":
        return 45;
      case "6hours":
        return 55;
      case "all-day":
        return 75;
      default:
        return 0;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "duration") {
      const fare = calculateFare(value);
      setFormData({ ...formData, duration: value, fare: fare });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_SIGHT_SEEING,
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

  return (
    <div className="container">
      {" "}
      {/* Bootstrap container class for responsiveness */}
      <form onSubmit={handleSubmit} className="my-4">
        <div className="text-center mb-4">
          <img src={Logo} alt="logo" className="img-fluid" />
          <h3>Book Your Sightseeing Trip</h3>
        </div>

        <div className="form-group mb-3">
          <input
            className="form-control"
            placeholder="Pickup Address"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Pickup Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Pickup Time</label>
          <input
            type="time"
            className="form-control"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Booking Duration</label>
          <select
            className="form-control"
            value={formData.duration}
            name="duration"
            onChange={handleChange}
          >
            <option value="#">Select Duration</option>
            <option value="2hours">2 Hours</option>
            <option value="4hours">4 Hours</option>
            <option value="6hours">6 Hours</option>
            <option value="all-day">All Day</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <input
            className="form-control"
            placeholder="Drop off Location, if different from the pickup address"
            name="dropoffAddress"
            value={formData.dropoffAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            placeholder="Special Requests"
            name="special"
            value={formData.special}
            onChange={handleChange}
          />
        </div>
        {/* Display the calculated fare */}
        <div className="form-group mb-3">
          <label>Fare: ${formData.fare}</label>
        </div>
        <button className="btn btn-primary">Book Now</button>
        {isBookingSuccess && (
          <div className="alert alert-success" role="alert">
            Booking in Progress... Redirecting to Payment!
          </div>
        )}
      </form>
    </div>
  );
};

export default SightSeeing;
