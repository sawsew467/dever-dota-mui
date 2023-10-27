import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Menu } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = ["Home", "Heroes", "Battle"];

function Header() {
  function handleClickNavigation(page) {
    <Link to="/" className="link-home">
      Go Home
    </Link>;
  }

  return (
    <AppBar position="static" sx={{ display: "flex" }}>
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
              width: "maxWidth",
            }}
          >
            DOTA 2 -MUI
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
              },
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleClickNavigation(page)}
                sx={{
                  my: 2,
                  p: "10px 50px",
                  color: "white",
                  fontSize: "large",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* <IconButton sx={{ p: 0, fontSize: "large" }}> */}
            <Avatar alt="R" src="/static/images/avatar/2.jpg" />
            {/* </IconButton> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
