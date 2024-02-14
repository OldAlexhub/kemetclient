import React, { useState, useEffect } from "react";
import axios from "axios";

const Sightseeing = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchSight = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `${process.env.REACT_APP_GET_SIGHT_SEEING}?userId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTrips(response.data.show);
        // console.log(response.data.show);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSight();
  }, []);

  return (
    <div className="container">
      {trips.map((trip) => (
        <div key={trip._id} className="card mb-3">
          <div className="card-body">
            <h4>{trip.tag}</h4>
            <p>
              <strong>Booking Id:</strong> {trip.bookingId}
            </p>
            <p>
              <strong>Name:</strong> {trip.name}
            </p>
            <p>
              <strong>Pickup From:</strong> {trip.pickupAddress}
            </p>
            <p>
              <strong>Duration:</strong> {trip.duration}
            </p>
            <p>
              <strong>Drop Off Address:</strong> {trip.dropoffAddress}
            </p>
            <p>
              <strong>Email:</strong> {trip.email}
            </p>
            <p>
              <strong>Special Requests:</strong> {trip.special}
            </p>
            <p>
              <strong>Fare:</strong> ${trip.fare}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sightseeing;
