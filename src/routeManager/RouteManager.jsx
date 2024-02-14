import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Alexandria from "../routes/Alexandria";
import BookARide from "../routes/BookARide";
import Cairo from "../routes/Cairo";
import CCPayment from "../routes/CCPayment";
import Home from "../routes/Home";
import MyTrip from "../routes/MyTrip";
import PointsofInterests from "../routes/PointsofInterests";
import SightSeeing from "../routes/SightSeeing";
import Signup from "../routes/Signup";
import AboutUs from "../routes/AboutUs";
import FareInfo from "../routes/FareInfo";
import DriverApply from "../routes/DriverApply";
import BecomeAPartner from "../routes/BecomeAPartner";
import Contactus from "../routes/Contactus";
import Login from "../routes/Login";
import ReturnTrip from "../routes/ReturnTrip";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="alexandria" element={<Alexandria />} />
          <Route path="cairo" element={<Cairo />} />
          <Route path="bookaride" element={<BookARide />} />
          <Route path="ccpayment" element={<CCPayment />} />
          <Route path="mytrip" element={<MyTrip />} />
          <Route path="pointsofinterest" element={<PointsofInterests />} />
          <Route path="sightseeing" element={<SightSeeing />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="fareinfo" element={<FareInfo />} />
          <Route path="drivers" element={<DriverApply />} />
          <Route path="becomeapartner" element={<BecomeAPartner />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="login" element={<Login />} />
          <Route path="return" element={<ReturnTrip />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteManager;
