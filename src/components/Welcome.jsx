import React from "react";
import Part1 from "../assets/images/main-top-1-img.jpg";
import Part2 from "../assets/images/main-top-2-img.jpg";
import Part3 from "../assets/images/main-top-3-img.jpg";
import "../assets/styles/components/Welcome.css";

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome-container">
        <div className="welcome-images">
          <img src={Part1} alt="part1" />
          <img src={Part2} alt="part2" />
          <img src={Part3} alt="part3" />
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
    </section>
  );
}

export default Welcome;
