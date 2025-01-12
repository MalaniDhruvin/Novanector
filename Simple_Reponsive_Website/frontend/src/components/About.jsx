import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      {/* Fixed Navbar */}
      <div className="w-full fixed top-0 z-50">
        <Navbar />
      </div>

      {/* First Section */}
      <div className="w-full flex max-md:flex-wrap md:flex-nowrap gap-10 p-5 md:p-10 mt-[70px]">
        <div className="md:w-3/5 w-full flex justify-center items-center">
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl object-cover"
            src="fried-chicken-with-mushrooms-rice.jpg"
            alt="Delicious Food"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start space-y-5 px-5 md:px-10">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            We Pride Ourselves On Making Real Food From The Best Ingredients
          </h2>
          <p className="text-slate-500 text-sm md:text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            dolor ipsa natus quisquam molestiae maiores harum atque autem iusto
            eius obcaecati, error possimus veniam? Perferendis, error corrupti!
            Iure nostrum exercitationem rem tenetur?
          </p>
          <button className="border py-2 px-4 text-white bg-[#bc3839] rounded-md">
            Learn More
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full flex max-md:flex-wrap-reverse md:flex-nowrap gap-10 p-5 md:p-10">
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start space-y-5 px-5 md:px-10">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            We Make Everything By Hand With The Best Possible Ingredients.
          </h2>
          <p className="text-slate-500 text-sm md:text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            dolor ipsa natus quisquam molestiae maiores harum atque autem iusto
            eius obcaecati, error possimus veniam? Perferendis, error corrupti!
            Iure nostrum exercitationem rem tenetur?
          </p>
          <div className="space-y-2">
            {[
              "Lorem ipsum dolor sit amet.",
              "Consectetur adipisicing elit.",
              "Repellat voluptatum explicabo.",
            ].map((text, index) => (
              <p
                key={index}
                className="text-slate-500 text-sm md:text-base flex items-center"
              >
                <TiTick className="text-lg md:text-xl text-[#bc3839] mr-2" />
                {text}
              </p>
            ))}
          </div>
          <button className="border py-2 px-4 text-white bg-[#bc3839] rounded-md">
            Learn More
          </button>
        </div>
        <div className="md:w-3/5 w-full flex justify-center items-center">
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl object-cover"
            src="about.png"
            alt="About Us"
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

export default About;
