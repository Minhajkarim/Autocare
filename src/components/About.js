import React from "react";
import john from "./images/john-doe.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={john} alt="john" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            A car mechanic is the unsung hero of the road, keeping vehicles
            running smoothly and ensuring safe travels for all. With a keen eye
            for detail and a toolbox full of expertise, they diagnose, repair,
            and maintain automobiles with precision and care. Whether it's a
            simple tune-up or a complex engine overhaul, a skilled car mechanic
            is the go-to professional for all your automotive needs.
          </p>
          <p>
            I am John Doe, a senior mechanic at an independently owned auto
            repair shop called Autocare Garage.
          </p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
