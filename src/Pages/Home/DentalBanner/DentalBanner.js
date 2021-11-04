import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import treatment from "../../../images/treatment.png";

const DentalBanner = () => {
  return (
    <Container sx={{ py: 4, my: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <img style={{ width: "60%" }} src={treatment} sm={{ m: 4 }} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            py: 4,
            textAlign: "left",
          }}
        >
          <Typography variant="h4" color="primary">
            Exceptional Dental
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ py: 4, textAlign: "justify" }}
          >
            Are you looking for Best Dentist or Dentist near me or Best Dental
            Clinic in Uttara, Dhaka, Bangladesh? Yes, you are in the right
            place. LASER DENTAL is one of the most hi-tech dental clinics in
            Dhaka, serving all of your dental needs , with special emphasis on
            3D Dental Scanning, Laser Dentistry, Invisalign Clear Aligner, Teeth
            whitening, Painless Injection Facility, Dental Braces, Dental
            Implant and Scanning whole mouth with world’s most advanced
            Intra-oral Caries & Plaque Scanner.
          </Typography>
          <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentalBanner;
