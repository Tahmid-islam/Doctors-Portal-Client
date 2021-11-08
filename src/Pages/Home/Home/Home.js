import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import DentalBanner from "../DentalBanner/DentalBanner";
import Footer from "../Footer/Footer";
import OurDoctors from "../OurDoctors/OurDoctors";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner />
      <Services />
      <DentalBanner></DentalBanner>
      <AppointmentBanner />
      <Testimonial></Testimonial>
      <Blogs></Blogs>
      <OurDoctors></OurDoctors>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
