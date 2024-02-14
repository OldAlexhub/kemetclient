import React from "react";
import Logo from "../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const FareInfo = () => {
  return (
    <div className="container mt-4">
      {" "}
      {/* Use container for responsive alignment */}
      <div className="text-center mb-4">
        <img src={Logo} alt="logo" className="img-fluid" />{" "}
        {/* Responsive image */}
      </div>
      <div>
        <h3 className="text-center mb-4">Rates</h3>

        <div className="mb-4">
          <h5>Cairo International Aiport</h5>
          <p>
            Pickup: <strong>Cairo International Airport or Cairo City</strong>
          </p>
          <p>
            Drop Off: <strong>Cairo City</strong>
          </p>
          <p>
            One Way Cost: <strong>$45.00</strong>
          </p>
          <p>
            Round Trip Cost: <strong>$75.00</strong>
          </p>
        </div>

        <hr />

        <div className="mb-4">
          <p>
            Pickup: <strong>Cairo International Aiport or Cairo City</strong>
          </p>
          <p>
            Drop Off: <strong>Alexandria City</strong>
          </p>
          <p>
            One Way Cost: <strong>$75.00</strong>
          </p>
          <p>
            Round Trip Cost: <strong>$125.00</strong>
          </p>
        </div>

        <div>
          <hr />
          <h5>Alexandria International Airport</h5>
          <p>
            Pickup:{" "}
            <strong>Alexandria International Airport or Alexandria City</strong>
          </p>
          <p>
            Drop Off: <strong>Alexandria City</strong>
          </p>
          <p>
            One Way Cost: <strong>$45.00</strong>
          </p>
          <p>
            Round Trip Cost: <strong>$75.00</strong>
          </p>
          <hr />
          <p>
            Pickup: <strong>Alexandria City</strong>
          </p>
          <p>
            Drop Off: <strong>Cairo International Airport</strong>
          </p>
          <p>
            One Way Cost: <strong>$75.00</strong>
          </p>
          <p>
            Round Trip Cost: <strong>$125.00</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FareInfo;
