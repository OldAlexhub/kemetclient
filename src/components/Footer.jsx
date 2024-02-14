import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Our Company</h5>
            <p>
              Kemet Transportation provides top-notch transportation solutions
              in Egypt, ensuring comfortable and safe journeys for all our
              clients. Explore Egypt with ease and style!
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <p>
                  <strong>Email:</strong> contact@kemettranspo.com
                </p>
              </li>
              <li>
                <p>
                  <strong>Phone:</strong> +20 123 456 7890
                </p>
              </li>
              <li>
                <p>
                  <strong>HQ USA:</strong> 1450 S. Havana St, Aurora, Co 80012
                </p>
              </li>
              <li>
                <p>
                  <strong>Egypt Address:</strong> 123 Cairo St, Egypt
                </p>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Kemet Transportation
      </div>
    </footer>
  );
};

export default Footer;
