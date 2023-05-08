import React from "react";
import Sidenav from "../../components/sidenav";
import Navbar from "../../components/navbar";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

function PatientVitals() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Patient Vitals
          </Typography>
          <Box height={20} />
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="inherit" />
          </Stack>
          <Box height={30} />
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
            <Typography variant="h4" gutterBottom>
              Loading Data
            </Typography>
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
          </Stack>
          <Box height={30} />
          <Box sx={{ width: "50%" }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PatientVitals;
