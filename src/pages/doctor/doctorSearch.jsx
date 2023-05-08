import React from "react";
import Sidenavdoc from "../../components/sidenavdoc";
import Navbar from "../../components/navbar";
import { Box } from "@mui/system";
import SearchName from "../../components/searchname";
import Button from "@mui/material/Button";
import SearchId from "../../components/searchid";

function DoctorSearch() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenavdoc />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>Doctor Search</div>
          <Box height={30} />
          <SearchName />
          <Box height={30} />
          <SearchId />
          <Box height={30} />
          <Button variant="contained" size="large">
            Show Patient
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default DoctorSearch;
