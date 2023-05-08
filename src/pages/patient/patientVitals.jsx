import React from "react";
import Sidenav from "../../components/sidenav";
import Navbar from "../../components/navbar";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

function PatientVitals() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>Patient Vitals</div>
          <Box height={10} />
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="inherit" />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default PatientVitals;
