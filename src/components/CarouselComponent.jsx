import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import One from "../images/1.jpg";
import Two from "../images/2.jpg";
import Three from "../images/3.jpg";
import Four from "../images/4.jpg";
import Five from "../images/5.jpg";
import Six from "../images/6.jpg";

const CarouselComponent = () => {
  const carouselImageStyle = {
    height: "600px", // Set a fixed height for all images
    objectFit: "cover", // Ensures the image covers the area without stretching
    borderRadius: "20px", // Rounded edges
    padding: "10px",
  };

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome to Egypt</h1>
        <h2 style={{ textAlign: "center" }}>Your Second Home by Nature!</h2>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxWidth: "100%", margin: "auto" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={One}
              className="d-block w-100"
              alt="..."
              style={carouselImageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Two}
              className="d-block w-100"
              alt="..."
              style={carouselImageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Three}
              className="d-block w-100"
              alt="..."
              style={carouselImageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Four}
              className="d-block w-100"
              alt="..."
              style={carouselImageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Five}
              className="d-block w-100"
              alt="..."
              style={carouselImageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Six}
              className="d-block w-100"
              alt="..."
              style={carouselImageStyle}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
