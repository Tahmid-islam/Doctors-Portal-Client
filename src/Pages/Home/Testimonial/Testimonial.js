import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const Testimonial = () => {
  return (
    <Container sx={{ py: 5, my: 5 }}>
      <Typography
        style={{ color: "#5CE7ED" }}
        variant="h6"
        sx={{ textAlign: "left" }}
        gutterBottom
      >
        Testimonial
      </Typography>
      <Typography variant="h3" sx={{ textAlign: "left" }}>
        What's Our Patient <br /> Says
      </Typography>
      <Grid container spacing={2} sx={{ my: 3 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ pb: 4 }}>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", p: 2, m: 2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              delectus doloribus voluptatum autem nobis dolor soluta vel ipsam
              minima molestiae.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                mx: 2,
              }}
            >
              <Box>
                <img style={{ width: "80%" }} src={people1} alt="" />
              </Box>
              <Box>
                <Typography variant="subtitle1" style={{ color: "#5CE7ED" }}>
                  Winson Harry
                </Typography>
                <Typography variant="caption">California</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ pb: 4 }}>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", p: 2, m: 2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              delectus doloribus voluptatum autem nobis dolor soluta vel ipsam
              minima molestiae.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                mx: 2,
              }}
            >
              <Box>
                <img style={{ width: "80%" }} src={people2} alt="" />
              </Box>
              <Box>
                <Typography variant="subtitle1" style={{ color: "#5CE7ED" }}>
                  Winson Harry
                </Typography>
                <Typography variant="caption">California</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ pb: 4 }}>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", p: 2, m: 2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              delectus doloribus voluptatum autem nobis dolor soluta vel ipsam
              minima molestiae.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                mx: 2,
              }}
            >
              <Box>
                <img style={{ width: "80%" }} src={people3} alt="" />
              </Box>
              <Box>
                <Typography variant="subtitle1" style={{ color: "#5CE7ED" }}>
                  Winson Harry
                </Typography>
                <Typography variant="caption">California</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
