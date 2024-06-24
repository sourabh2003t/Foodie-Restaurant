import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Browse our menu with detailed descriptions and reviews. Find meals that suit your tastes, add to your cart, and order easily online.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Daily, weekly, or monthly. Customize delivery schedule to suit your lifestyle and enjoy consistent, convenient service tailored just for you.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Experience fast delivery from our restaurant website. Enjoy quick service right to your doorstep, ensuring your meal arrives promptly.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Foodie connects with users for dining and food delivery. 
        Users can browse menus, read reviews, and place orders through the website. 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
