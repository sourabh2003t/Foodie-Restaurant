import React from "react";
import ProfilePic from "../Assets/Profile.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Discover what users say about our dishes and service.   
        Read authentic reviews to help you make informed choices. Join our community and share your own experience today.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        I love ordering from this restaurant! The food is always fresh and delicious, and the delivery is super quick. Highly recommended!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Riya Sharma</h2>
      </div>
    </div>
  );
};

export default Testimonial;
