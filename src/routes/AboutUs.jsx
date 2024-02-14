import React from "react";
import Logo from "../images/logo.png";

const AboutUs = () => {
  return (
    <section id="about" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4">About Kemet Transportation</h2>
            <img src={Logo} alt="logo" style={{ maxWidth: "250px" }} />
            <hr className="my-4" />
            <p className="lead">
              Kemet Transportation is a trusted name in the transportation
              industry, with over a decade of experience providing exceptional
              services to our valued customers across the USA.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">A Decade of Expertise</h5>
                <p className="card-text">
                  Our team boasts over 10 years of experience in various
                  transportation sectors, including taxis, Transportation
                  Network Companies (TNCs), and public transit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">Trans Voyage Taxi</h5>
                <p className="card-text">
                  We are proudly part owners and operate "Trans Voyage Taxi" in
                  Denver, Colorado, delivering safe and reliable transportation
                  services to the vibrant city.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">Public Transit Partners</h5>
                <p className="card-text">
                  Our team also plays a vital role in managing key departments
                  in public transit in Florida, USA, with a focus on enhancing
                  accessibility and convenience for the community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="lead">
              At Kemet Transportation, our commitment to customer satisfaction,
              safety, and innovation sets us apart. We continually embrace the
              latest technologies and industry best practices to provide
              top-notch services.
            </p>
            <p className="lead">
              We extend our sincere gratitude to our valued customers for
              choosing Kemet Transportation. We are dedicated to enhancing the
              transportation experience for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
