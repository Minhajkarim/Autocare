import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>Call us</p>
        <p>1-234-526-7890</p>
        <p>Autocare Garage</p>
        <p>Driving Excellence, One Repair at a Time</p>
        <Link to="appointment">
          <button href="/appointment" className="button">
            Make An Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
