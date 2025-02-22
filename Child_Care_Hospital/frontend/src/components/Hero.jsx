import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Sidhbali Hospital is a state-of-the-art child care facility dedicated to providing specialized pediatric healthcare with compassion and expertise. Our team of skilled professionals is committed to delivering personalized care tailored to each child's needs. At Sidhbali Hospital, we prioritize your child's well-being, ensuring a nurturing and supportive journey toward optimal health and development.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
