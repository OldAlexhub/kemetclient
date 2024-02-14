import React from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "../components/CarouselComponent";
import Driver from "../images/driver.png";
import Android from "../images/aphone.png";
import Business from "../images/business.png";
import Egypt from "../images/welcome.png";
import Sight from "../images/sight.png";
import "../styles/Home.css";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="container my-4">
      <Search />
      <CarouselComponent />

      <div className="row my-4">
        <div className="col">
          <h2>Preparing for a Trip to Egypt?</h2>
          <p>
            Traveling can be as challenging as it is exciting. While you've
            spent considerable time planning your trip, navigating
            transportation in a new country can often be an enigma.
          </p>
          <p>
            Choosing Egypt as your destination is an excellent start. At Kemet
            Transportation, we're here to seamlessly accommodate your
            transportation needs, eliminating the hassle of shopping around or
            negotiating rates. We offer fixed-rate airport transportation
            between Cairo and Alexandria, ensuring a smooth start to your
            Egyptian adventure.
          </p>
          <p>
            Rest assured, our drivers are dedicated to ensuring the safest local
            travels within Cairo and Alexandria. With Kemet Transportation,
            you'll experience the utmost in comfort and security.
          </p>
          <p>
            Interested in exploring more? We also offer customizable one-day
            sightseeing programs in either Alexandria or Cairo. Your journey,
            your choice!
          </p>
        </div>
      </div>

      <div className="row my-4">
        <div className="col">
          <h1>Services We Offer</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img src={Egypt} alt="egypt" className="img-fluid" />

          <h3>Airport Pickup & Drop Off</h3>
          <p>
            Enjoy hassle-free pickups and drop-offs from Cairo International
            Airport, or any location in Cairo to Alexandria. We also provide the
            same service from Alexandria International Airport to Cairo.
          </p>
          <Link to="/fareinfo" className="btn btn-primary">
            Understand Our Rates
          </Link>
        </div>
        <div className="col-md-6">
          <img src={Sight} alt="sight" className="img-fluid" />

          <h3>Sightseeing Tours</h3>
          <p>
            Interested in exploring? We offer customizable one-day sightseeing
            tours in Alexandria or Cairo. You can also opt for a combined
            package featuring a day in each city. Let us accommodate your
            adventure!
          </p>
          <Link to="/fareinfo" className="btn btn-primary">
            Understand Our Rates
          </Link>
        </div>
      </div>

      <div className="row my-4">
        <h1>More with Kemet Transportation</h1>
        <div className="col-md-4">
          <img src={Driver} alt="driver" className="img-fluid" />
          <h4>Work With Kemet Transportation</h4>
          <p>
            If you have a vehicle and want to start earning; then apply to
            contract with Kemet Transportation
          </p>
          <Link to="/drivers" className="btn btn-success">
            Apply to become a driver
          </Link>
        </div>
        <div className="col-md-4">
          <img src={Business} alt="business" className="img-fluid" />
          <h4>Become A Partner</h4>
          <p>
            If you have a transportation agency and want to increase the volume
            of your work, don't hesitate to apply to join our vendor-customer
            partnership
          </p>
          <Link to="/becomeapartner" className="btn btn-success">
            Become a Partner
          </Link>
        </div>
        <div className="col-md-4">
          <img src={Android} alt="android" className="img-fluid" />
          <h4>Download Our App</h4>
          <Link to="#" className="btn btn-success">
            Download our app
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
