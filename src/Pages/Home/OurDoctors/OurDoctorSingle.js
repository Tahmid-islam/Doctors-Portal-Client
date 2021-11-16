import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
const OurDoctorSingle = ({ doctor }) => {
  const { name, email, image } = doctor;
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Paper elevation={0} sx={{ textAlign: "center" }}>
        <img src={`data:image/*;base64,${image}`} width="100%" alt="" />
        <Typography variant="h5" fontWeight={600}>
          {name}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CallIcon sx={{ color: "#19D3AE" }} />
          <Typography variant="body1">{email}</Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default OurDoctorSingle;
