import { Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import bg from "../../../images/appointment-bg.png";
const Contact = () => {
  const useStyle = makeStyles({
    root: {
      background: `url(${bg}), linear-gradient(#3A4256,#3A4256)`,
      backgroundBlendMode: "overlay",
      backgroundRepeat: "no-repeat",
      textAlign: "center",
      padding: "30px",
      marginTop: 100,
    },
    textArea: {
      border: 0,
      outline: 0,
      width: "100%",
      margin: "20px 0",
      borderRadius: 3,
      fontFamily: "inherit",
      padding: 1,
    },
  });
  const { root, textArea } = useStyle();
  return (
    <div className={root}>
      <Container maxWidth="md">
        <Typography variant="h6" color="#19D3AE">
          Contact us
        </Typography>
        <Typography variant="h4" color="#fff">
          Always connect with us
        </Typography>
        <TextField
          fullWidth
          placeholder="Email"
          margin="normal"
          required
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        />
        <TextField
          fullWidth
          placeholder="Subject"
          margin="normal"
          required
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        />
        <textarea
          fullWidth
          rows={10}
          className={textArea}
          margin="normal"
          placeholder="Your Message"
        ></textarea>
        <Button variant="contained">Submit</Button>
      </Container>
    </div>
  );
};

export default Contact;
