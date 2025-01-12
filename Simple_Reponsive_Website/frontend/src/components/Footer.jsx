import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
          <li className="nav-item">
            <a href="/" className=" nav-link px-2 text-body-secondary ">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-body-secondary ">
              Contact
            </a>
          </li>
        </ul>
        <p className="text-center ">© 2025 , Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
