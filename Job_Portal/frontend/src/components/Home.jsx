import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FaCheck } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="bg-[#DDF2FF] min-h-screen">
        {/* Header */}
<Header />
        {/* Hero Section */}
        <section className="container mx-auto mt-12 flex flex-col lg:flex-row items-center justify-between px-6 ">
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Find your dream job now
            </h2>
            <p className="text-gray-600 mb-8 font-medium">
              1 lakh+ jobs for you to explore
            </p>

            {/* Search Bar */}
            <div className="bg-white shadow-xl rounded-md  flex items-center px-4 py-2 lg:w-[52vw]">
              <input
                type="text"
                placeholder="⌕ Search job titles / Enter skills / Company     ⚲ Enter location   💼 Year of experience"
                className="flex-1 px-4 py-2 outline-none w-full"
              />
              
              
              <button className="bg-[#3B46D7] text-white px-6 py-2 rounded-full hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="mt-10 lg:mt-0">
            <img
              src="Hero.png" // Replace with the correct illustration URL or import the image
              alt="Job search illustration"
              className="max-w-full h-96 object-contain"
            />
          </div>
        </section>

        {/* Popular Categories */}
        <section className="mt-4 pb-2">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Popular categories
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Remote job",
                "Internship",
                "Full time",
                "Part time job",
                "Startup",
                "Fresher",
              ].map((category) => (
                <button
                  key={category}
                  className="bg-white shadow-md flex items-center gap-2 px-6 py-3 rounded-lg text-gray-700 hover:bg-[#3B46D7] hover:text-white"
                >
                  <FaHome/>{category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white py-12">
        {/* Info Section */}
        <section className="container mx-auto mb-12 px-6">
          <div className="bg-[#DDF2FF] rounded-lg shadow-md flex flex-col lg:flex-row items-center p-4">
            {/* Left Info */}
            <div className=" bg-white w-[500px] px-16 py-6 rounded-md">
              <h1 className="text-2xl font-bold text-gray-800 w-full">
                More than 20 lakhs Indians trust job hai 👏
              </h1>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Register now
              </button>
            </div>

            {/* Right Info Icons */}
            <div className="flex-1 flex justify-around mt-6 lg:mt-0">
              {[
                { text: "100% free & verified job", icon: <FaCheck /> },
                { text: "Best job in your locality", icon: <FaLocationArrow /> },
                { text: "Direct call with HR for interview", icon: <BiSolidPhoneCall /> },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center text-black tracking-tight"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Companies Section */}
        <section className="container mx-auto px-6 py-10 bg-[#DDF2FF]">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Top companies hiring now
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: "Uber", logo: "/uber.png" },
              { name: "Google", logo: "/google.png" },
              { name: "Microsoft", logo: "/microsoft.png" },
              { name: "Apple", logo: "/apple.png" },
              { name: "Samsung SDS", logo: "/samsung.png" },
            ].map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={company.logo} // Replace with correct paths to logos
                  alt={company.name}
                  className="h-12 mb-4"
                />
                <h4 className="text-gray-800 font-bold">{company.name}</h4>
                <button className="mt-2 text-blue-600 hover:underline">
                  View jobs
                </button>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Show more companies
            </button>
          </div>
        </section>
      </div>
      <div className="bg-white min-h-screen flex flex-col items-center py-10 px-4">
        {/* Header Section */}
        <div className="bg-[#DDF2FF] p-8 rounded-md shadow-md mb-10">
          <h1 className="text-2xl font-semibold text-center mb-8">
            What is your qualifications?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: "10th pass", vacancies: "100000+ vacancy",src:"qua1.png" },
              { label: "12th pass", vacancies: "100000+ vacancy",src:"qua2.png" },
              { label: "Diploma", vacancies: "100000+ vacancy",src:"qua3.png" },
              { label: "Graduate", vacancies: "100000+ vacancy",src:"qua4.png" },
              { label: "Post Graduate", vacancies: "100000+ vacancy",src:"qua5.png" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-md text-center hover:shadow-lg flex flex-col items-center"
              >
                <img src={item.src} width={35} />
                <h2 className="text-lg font-medium mt-1 mb-2">{item.label}</h2>
                <p className="text-gray-500">{item.vacancies}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex shadow-md p-6 rounded-md w-full max-w-md text-center mb-10 bg-[#DDF2FF] gap-6 items-center">
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-lg font-medium mb-2">
              Talk to HR directly & get a job with better salary!
            </h2>
            <p className="text-gray-500">Get local job in your city! 👉</p>
          </div>

          {/* Form Section */}
          <form className="flex flex-col gap-4 bg-white py-4 px-2 rounded-md shadow-md">
            <p>Enter your number to continue</p>
            <label className="text-left" htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter your mobile number"
              className="border border-gray-300 mt-[-10px] rounded-md py-2 px-4 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Get started
            </button>
          </form>
        </div>

        {/* Footer Stats Section */}
        <div className="flex flex-wrap justify-evenly mt-6 w-full text-center">
          {[
            { label: "Active jobs", value: "100k+" },
            { label: "New Opening Everyday", value: "10k+" },
            { label: "Work from jobs", value: "5k+" },
          ].map((stat, index) => (
            <div key={index} className="text-lg">
              <h3 className="text-3xl font-bold text-black mb-1">
                {stat.value}
              </h3>
              <p className="text-black font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-white shadow-md p-8 mt-10">
        {/* Connect with us */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold mb-2 ">Connect with us</h2>
          <div className="border-t-2 border-blue-500 w-24 mx-auto mb-4"></div>
          <div className="flex justify-center gap-12 text-black">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="cursor-pointer text-xl"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="cursor-pointer text-xl"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="cursor-pointer text-xl"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="cursor-pointer text-xl"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="cursor-pointer text-xl"
            />
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-between text-sm text-gray-700 mb-6 px-16 text-center">
          <div className="space-y-2 flex flex-col items-start">
            <p>About us</p>
            <p>Career</p>
            <p>Employer home</p>
            <p>Sitemap</p>
          </div>
          <div className="space-y-2 flex flex-col items-start">
            <p>Help center</p>
            <p>Summons notice</p>
            <p>Grievance</p>
            <p>Report issues</p>
          </div>
          <div className="space-y-2 flex flex-col items-start">
            <p>Privacy policy</p>
            <p>Terms & conditions</p>
            <p>Fraud alert</p>
            <p>Trust & safety</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-xs">
          All right reversed ©2025 Novanecter Pvt. Ltd.
        </div>
      </footer>
    </>
  );
};

export default Home;