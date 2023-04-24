import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NavbarHome() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
        < Box sx={{ flexGrow: 0.01 }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Recovery Bridge
          </Typography>
          < Box sx={{ flexGrow: 0.02 }} />
          <Button
            type="text"
            variant="text"
            color="inherit"
            sx={{ mt: 2, mb: 2 }}
          >
            About
          </Button>
          < Box sx={{ flexGrow: 0.01 }} />
          <Button
            type="text"
            variant="text"
            color="inherit"
            sx={{ mt: 2, mb: 2 }}
          >
            Contact
          </Button>
          < Box sx={{ flexGrow: 0.01 }} />
          <Button
            type="text"
            variant="text"
            color="inherit"
            sx={{ mt: 2, mb: 2 }}
          >
            Chat
          </Button>
          < Box sx={{ flexGrow: 0.01 }} />
          <Button
            type="text"
            variant="text"
            color="inherit"
            sx={{ mt: 2, mb: 2 }}
          >
            Help
          </Button>
          < Box sx={{ flexGrow: 0.01 }} />
          <Box sx={{ flexGrow: 1 }} />
          <Button
            type="submit"
            //fullWidth
            variant="outlined"
            color="inherit"
            sx={{ mt: 2, mb: 2 }}
            size="large"
          >
            Sign In
          </Button>
          < Box sx={{ flexGrow: 0.01 }} />
          <Button
            type="submit"
            //fullWidth
            variant="outlined"
            color="inherit"
            sx={{ mt: 2, mb: 2 }}
            size="large"
          >
            Sign Up
          </Button>
          < Box sx={{ flexGrow: 0.01 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
