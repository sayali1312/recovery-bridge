import React from "react";
import Sidenav from "../sidenav";
import { Box } from "@mui/system";

function About() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>About</div>
        </Box>
      </Box>
    </>
  );
}

export default About;