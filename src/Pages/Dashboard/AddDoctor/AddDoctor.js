import React, { useState } from "react";
import { Button, Input, TextField } from "@mui/material";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("https://stormy-brushlands-71850.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Doctor added successfully");
          console.log("doctor added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h4>Add a doctor</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Name"
          sx={{ width: "50%" }}
          variant="standard"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <TextField
          type="email"
          label="Email"
          sx={{ width: "50%" }}
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
          required
        />
        <br />
        <br />
        <Input
          accept="image/*"
          sx={{ width: "50%" }}
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddDoctor;
