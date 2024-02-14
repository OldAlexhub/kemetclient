import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tripInfo, setTripInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTripInfo = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${process.env.REACT_APP_TRIP_DATA_ENDPOINT}/?phoneNumber=${phoneNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTripInfo(response.data.show);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch trip info:", error);
      setError(
        `No trips are booked at this time for phone number ${phoneNumber}`
      );
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (phoneNumber) {
      fetchTripInfo();
    } else {
      setError("Please enter a phone number.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              aria-label="Enter Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Search"
                )}
              </button>
            </div>
          </div>
          {error && (
            <div className="alert alert-warning text-center">{error}</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {tripInfo.length > 0 ? (
            <table className="table table-hover">
              <thead className="thead-light">
                <h3>Trip Itinerary</h3>
                <tr>
                  <th scope="col">Booking ID</th>
                  <th scope="col">Pickup From</th>
                  <th scope="col">Pickup Date</th>
                  <th scope="col">Pickup Time</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Fare</th>
                </tr>
              </thead>
              <tbody>
                {tripInfo.map((trip, index) => (
                  <tr key={index}>
                    <td>{trip.bookingId}</td>
                    <td>{trip.pickupAddress}</td>
                    <td>{new Date(trip.pickupDate).toLocaleDateString()}</td>
                    <td>{trip.pickupTime}</td>
                    <td>{trip.destination}</td>
                    <td>${trip.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center mt-4">{!loading && ""}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
