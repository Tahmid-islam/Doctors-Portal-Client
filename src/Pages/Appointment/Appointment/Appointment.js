import React, { useState } from "react";
import Footer from "../../Home/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  );
};

export default Appointment;
