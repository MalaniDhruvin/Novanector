import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { userMessage } from "../global/apicalls";

const Contact = () => {
  const [usermessage, setUserMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const getInfo = (e) => {
    const { name, value } = e.target;
    setUserMessage({ ...usermessage, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userMessage(usermessage);
      console.log(response);
      setUserMessage({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {/* Fixed Navbar */}
      <div className="w-full fixed top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Contact Form Section */}
      <div className="w-full flex max-md:flex-wrap-reverse md:flex-nowrap gap-4 p-5 md:p-10 mt-[70px]">
        {/* Form */}
        <form
          className="md:w-1/2 w-full flex flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Get in touch
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            We'd love to hear from you. Please fill out this form.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* First Name */}
            <div className="flex-1">
              <label className="text-sm md:text-base font-medium">First Name</label>
              <input
                className="w-full h-10 border border-gray-300 rounded-md px-2 mt-1"
                type="text"
                placeholder="First Name"
                value={usermessage.firstname}
                name="firstname"
                onChange={getInfo}
                required
              />
            </div>
            {/* Last Name */}
            <div className="flex-1">
              <label className="text-sm md:text-base font-medium">Last Name</label>
              <input
                className="w-full h-10 border border-gray-300 rounded-md px-2 mt-1"
                type="text"
                placeholder="Last Name"
                value={usermessage.lastname}
                name="lastname"
                onChange={getInfo}
                required
              />
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base font-medium">Email</label>
            <input
              className="w-full h-10 border border-gray-300 rounded-md px-2 mt-1"
              type="email"
              value={usermessage.email}
              placeholder="Email"
              name="email"
              onChange={getInfo}
              required
            />
          </div>
          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base font-medium">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-md px-2 mt-1"
              rows="5"
              value={usermessage.message}
              placeholder="Write your message..."
              name="message"
              onChange={getInfo}
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 py-2 text-white bg-[#bc3839] rounded-lg hover:bg-[#a03030] transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0">
          <img
            className="w-full h-auto max-h-[400px] object-contain"
            src="contact1.png"
            alt="Contact"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-[#bc3839] py-6">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
