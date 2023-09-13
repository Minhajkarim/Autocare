import React from "react";
import user1 from "./images/user1.jpeg";
import user2 from "./images/user2.jpeg";
import user3 from "./images/user3.jpeg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              It's not every day you find a passionate and trustworthy car
              mechanic like John Doe. He's a true professional who excels in his
              work. Thanks, John, for your exceptional service!
            </p>
            <p>
              <span>Johnson.M.J.</span>
            </p>
            <p>Director of "Financial Times"</p>
          </div>
          <div className="card">
            <img src={user2} alt="user1" />
            <p>
              In just two brief visits to John's shop, he swiftly pinpointed a
              personalized solution perfectly tailored to my vehicle's needs and
              my expectations. Punctual, highly knowledgeable, and incredibly
              dependable.
            </p>
            <p>
              <span>Carol Harper</span>
            </p>
            <p>Director at Risktec Solutions Ltd</p>
          </div>
          <div className="card">
            <img src={user3} alt="user1" />
            <p>
              A highly professional car mechanic who stands by his promises.
              John has consistently shown exceptional integrity throughout our
              interactions, and he's quick to address any automotive concerns I
              bring to him
            </p>
            <p>
              <span>Snow.J.R.</span>
            </p>
            <p>Managing Director of BPW Global</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
