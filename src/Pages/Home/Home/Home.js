import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import DentalBanner from "../DentalBanner/DentalBanner";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Services />
      <DentalBanner></DentalBanner>
      <AppointmentBanner />
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
