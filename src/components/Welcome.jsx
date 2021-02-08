import React from "react";
import "../assets/styles/components/Welcome.css";

const Welcome = () => {
  <section className="welcome">
    <div className="welcome-container">
      <div className="welcome-images">
        <img src="images/main-top-1-img.jpg" alt="part1" />
        <img src="images/main-top-2-img.jpg" alt="part2" />
        <img src="images/main-top-3-img.jpg" alt="part3" />
      </div>
      <div className="call-to-action">
        <h2>
          Clothes that work
          <br />
          <span>at the office</span>
        </h2>
        <input type="button" value="Shop office" />
      </div>
    </div>
  </section>;
};

export default Welcome;
