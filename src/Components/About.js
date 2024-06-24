import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Farm-to-Table Freshness.
        </h1>
        <p className="primary-text">
        At Foodie Restaurant, we are committed to sourcing the freshest ingredients 
        from local farmers. Our menu features a wide variety of dishes made from organic produce, 
        free-range meats, and sustainable seafood. Indulge in flavorful meals crafted with care and passion 
        for a truly authentic farm-to-table dining experience.
        </p>
        <p className="primary-text">
        Step into the cozy and inviting ambiance of Foodie Restaurant, 
        where every corner exudes warmth and charm.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
