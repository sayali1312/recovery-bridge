import React from "react";
import Sidenavdoc from "../../components/sidenavdoc";
import Navbar from "../../components/navbar";
import { Box } from "@mui/system";

function DocBoard() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenavdoc />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>DocHome</div>
        </Box>
      </Box>
    </>
  );
}

export default DocBoard;
