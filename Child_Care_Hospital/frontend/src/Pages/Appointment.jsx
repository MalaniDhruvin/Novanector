import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Sidhbali Hospital"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
