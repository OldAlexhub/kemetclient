import React, { useState } from "react";
import Logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contactus = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const userId = localStorage.getItem("userId");
  const phone = localStorage.getItem("phone");
  const name = localStorage.getItem("name");
  const [isMessageSuccess, setIsMessageSuccess] = useState(false);

  const [formData, setFormData] = useState({
    userId: userId,
    email: email,
    name: name,
    phone: phone,
    bookingId: "",
    concern: "",
  });
  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        process.env.REACT_APP_SEND_MESSAGE,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        setIsMessageSuccess(true);
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
          <form onSubmit={handleSubmit}>
            <img src={Logo} alt="logo" className="img-fluid" />

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Booking Id if applicable"
                name="bookingId"
                value={formData.bookingId}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter Concern!"
                name="concern"
                value={formData.concern}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
            {isMessageSuccess && (
              <div className="alert alert-success" role="alert">
                Message Sent!... Redirecting to Home!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
