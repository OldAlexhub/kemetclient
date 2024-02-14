import React, { useEffect, useState } from "react";
import Logo from "../images/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Sighseeing from "../components/Sighseeing";

const MyTrip = () => {
  const [trips, setTrips] = useState([]);
  const [payments, setPayments] = useState([]);
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        const tripResponse = await axios.get(
          `${process.env.REACT_APP_MY_TRIP}?userId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("Trip Response Data:", tripResponse.data);

        const paymentResponse = await axios.get(
          `${process.env.REACT_APP_MY_PAYMENT}?userId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const returnResponse = await axios.get(
          `${process.env.REACT_APP_RETURN_DATA}?userId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Check if the data contains the booking array and set it to state
        setTrips(tripResponse.data.booking ? tripResponse.data.booking : []);
        setPayments(
          paymentResponse.data.payments ? paymentResponse.data.payments : []
        );
        setReturns(
          returnResponse.data.returns ? returnResponse.data.returns : []
        );
        // console.log(returnResponse.data);
      } catch (error) {
        console.log(error);
        setTrips([]); // Set to empty array on error
        setPayments([]);
      }
    };

    fetchData();
  }, []);

  const calculateTotalFare = () => {
    const tripFareTotal = trips.reduce(
      (acc, trip) => acc + parseFloat(trip.fare || 0),
      0
    );
    const returnFareTotal = returns.reduce(
      (acc, returnTrip) => acc + parseFloat(returnTrip.fare || 0),
      0
    );
    return tripFareTotal + returnFareTotal;
  };

  return (
    <div className="container my-4">
      <div className="text-center mb-4">
        <img
          src={Logo}
          alt="logo"
          className="img-fluid"
          style={{ maxWidth: "200px" }}
        />
        <h1>Trip Itinerary</h1>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Trip</h3>
          <ul className="list-group">
            {trips.map((trip) => (
              <li key={trip._id} className="list-group-item">
                <p>
                  <strong>Booking Id:</strong> {trip.bookingId}
                </p>
                <p>
                  <strong>Name:</strong> {trip.name}
                </p>
                <p>
                  <strong>Pickup From:</strong>{" "}
                  <span style={{ textTransform: "uppercase" }}>
                    {trip.pickupAddress}
                  </span>
                </p>
                <p>
                  <strong>Pickup Date:</strong>{" "}
                  {new Date(trip.pickupDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Pickup Time:</strong> {trip.pickupTime}
                </p>
                <p>
                  <strong>Passengers:</strong> {trip.passCount}
                </p>
                <p>
                  <strong>Destination:</strong>{" "}
                  <span style={{ textTransform: "uppercase" }}>
                    {trip.destination}
                  </span>
                </p>
                <p>
                  <strong>Dropoff Location:</strong> {trip.dropoffAddress}
                </p>
                <p>
                  <strong>Phone Number:</strong> {trip.phoneNumber}
                </p>
                <p>
                  <strong>Email:</strong> {trip.email}
                </p>
                <p>
                  <strong>Fare:</strong> ${trip.fare}
                </p>
                <ul className="list-group mt-3">
                  {returns.map((returnz) => (
                    <li key={returnz._id} className="list-group-item">
                      <h4 className="mb-2">Return Trip</h4>
                      <p>
                        <strong>Pickup From: </strong>
                        {returnz.returnCity}
                      </p>
                      <p>
                        <strong>Pickup Location: </strong>
                        {returnz.returnPickupAddress}
                      </p>
                      <p>
                        <strong>Pickup Date: </strong>
                        {new Date(returnz.returnDate).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Pickup Time: </strong>
                        {returnz.returnTime}
                      </p>
                      <p>
                        <strong>Drop Off Airport: </strong>
                        {returnz.returndropOffCity}
                      </p>
                      <p>
                        <strong>Fare: </strong>${returnz.fare}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <hr />
          <div>
            <Sighseeing />
          </div>
          <hr />
        </div>
        <div className="col-12 col-md-6">
          <h3>Payment Info</h3>
          <ul className="list-group">
            {payments.map((payment) => (
              <li key={payment._id} className="list-group-item">
                <p>
                  <strong>Reference Number:</strong> {payment.referenceNumber}
                </p>
                <p>
                  <strong>Credit Card Number:</strong> **** ***{" "}
                  {String(payment.ccNumber).slice(-5)}
                </p>
              </li>
            ))}
          </ul>
          <div className="row">
            <div className="col-12">
              <h2>Total Fare: ${calculateTotalFare().toFixed(2)}</h2>
            </div>
          </div>

          <div className="alert alert-info mt-4">
            <h4>Attention</h4>
            <p>
              If you wish to book a return trip,
              <span>
                <Link to="/return">Click Here</Link>
              </span>
            </p>
            <p>We will apply the charges 24 hours before the pickup date.</p>
            <p>
              You can cancel your trip no later than 48 hours prior to the
              pickup date in order to get a full refund.
            </p>
            <p>
              Please call +20 123 456 7890 or email us at{" "}
              <Link to="mailto:contact@kemettranspo.com">
                contact@kemettranspo.com
              </Link>{" "}
              if you wish to cancel your ride.
            </p>
            <p>
              Or, <Link to="/contactus">Contact Us to request cancelation</Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyTrip;
