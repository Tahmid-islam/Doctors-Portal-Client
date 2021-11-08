import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Appointments = ({ date }) => {
  const { user, token } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = `https://stormy-brushlands-71850.herokuapp.com/appointments?email=${
      user.email
    }&date=${date.toLocaleDateString()}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date, user.email, token]);

  return (
    <div>
      <h1>Appointments: {appointments.length}</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Service</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">{row.serviceName}</TableCell>
                <TableCell align="center">Approved</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
