import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <Navbar />
      <Hero
        title={
          "Welcome to Sidhbali Hospital | Your Trusted Child-Care Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
      <Footer />
    </>
  );
};

export default Home;
