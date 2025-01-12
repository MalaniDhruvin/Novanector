import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      {/* Navbar */}
      <div className="w-full h-max">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="w-full h-screen flex max-md:flex-col max-md:mt-20">
        <div className="w-1/2 h-full max-md:w-full flex flex-col justify-center px-10 max-md:px-4">
          <h1 className="text-orange-950 font-bold text-4xl max-md:text-3xl">
            Good food choices
            <br /> are good investments.
          </h1>
          <p className="text-slate-600 mt-4">
            Lorem ipsum sit sit amet consectetur adipisicing elit quia.
            <br />
            Ut accusamus iure nam aperiam est animi eum quia aspernatur.
          </p>
          <button className="mt-6 px-6 py-2 text-white bg-[#bc3839] rounded-md">
            Order Now
          </button>
        </div>
        <div className="w-1/2 max-md:w-full flex items-center">
          <img
            className="w-full h-full object-cover"
            src="hero.png"
            alt="Delicious Food"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-[#bc3839] py-6 flex justify-evenly items-center max-md:flex-col">
        {[
          { label: "SAVINGS", value: "555+" },
          { label: "PHOTOS", value: "643+" },
          { label: "GLOBLES", value: "537+" },
          { label: "ROCKETS", value: "55+" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white mt-4 max-md:mt-2"
          >
            <h4 className="text-2xl font-bold">{item.value}</h4>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="w-full h-[500px] flex justify-center items-center mt-12">
        <div
          className="w-full h-4/6 bg-cover bg-center flex flex-col justify-center items-center text-center p-4"
          style={{ backgroundImage: "url('banner.png')" }}
        >
          <h3 className="text-[#bc3839] text-2xl font-semibold max-md:text-xl">
            When A Man's Stomach Is Full It Makes No Difference
          </h3>
          <h3 className="text-[#bc3839] text-2xl font-semibold mt-1 max-md:text-xl">
            Whether He Is Rich Or Poor
          </h3>
          <p className="text-slate-600 mt-2 max-md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iure
            ratione.
          </p>
          <p className="text-slate-600 mt-[-5px] max-md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. iure
            ratione.
          </p>
          <button className="mt-6 px-6 py-2 text-white bg-[#bc3839] rounded-md">
            Read More
          </button>
        </div>
      </div>

      {/* Food Section */}
      <div className="w-full py-12 bg-white flex flex-col items-center">
        <h3 className="text-2xl font-bold">Explore Our Foods</h3>
        <p className="mt-4 text-slate-500 text-center max-md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          amet fugiat dolore aliquid reprehenderit ullam.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-8 w-full">
          {[
            {
              title: "Rainbow Vegetable Soup",
              time: "15 - 20 minutes | Serves: 1",
              price: "$20.00",
              img: "explore_1.png",
            },
            {
              title: "Roasted Pasta",
              time: "15 - 20 minutes | Serves: 1",
              price: "$30.00",
              img: "explore_2.png",
            },
            {
              title: "Fried Momo",
              time: "15 - 20 minutes | Serves: 1",
              price: "$22.00",
              img: "explore_3.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-64 object-cover"
                src={item.img}
                alt={item.title}
              />
              <div className="p-4">
                <h6 className="text-xl font-bold">{item.title}</h6>
                <p className="text-slate-500 mt-2">{item.time}</p>
                <p className="text-[#bc3839] text-lg font-semibold mt-2">
                  {item.price}
                </p>
                <button className="mt-4 px-6 py-2 text-white bg-[#bc3839] rounded-md">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-6 bg-[#bc3839]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
