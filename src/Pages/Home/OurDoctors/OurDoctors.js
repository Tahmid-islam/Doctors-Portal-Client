import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import OurDoctorSingle from "./OurDoctorSingle";

const OurDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://stormy-brushlands-71850.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, [doctors]);

  return (
    <Container>
      <Typography
        variant="h5"
        color="#19D3AE"
        sx={{ textAlign: "center", mt: 8, fontWeight: 500 }}
      >
        OUR DOCTORS
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {doctors.map((doctor, i) => (
          <OurDoctorSingle key={i} doctor={doctor} />
        ))}
      </Grid>
    </Container>
  );
};

export default OurDoctors;
