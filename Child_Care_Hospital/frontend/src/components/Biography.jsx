import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At Sidhbali Hospital, we believe in the power of technology to
            revolutionize child healthcare. Our mission is to create seamless,
            efficient, and user-friendly systems that enhance communication
            between pediatric specialists and parents. By simplifying
            appointment scheduling, providing real-time health updates, and
            ensuring an intuitive experience, Sidhbali Hospital strives to make
            pediatric care more accessible and organized. Our dedicated team is
            committed to continuous innovation, ensuring that our services
            evolve to meet the ever-changing needs of children's healthcare.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
