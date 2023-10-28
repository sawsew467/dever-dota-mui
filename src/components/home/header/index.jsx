import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 54,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DOTA 2 - MUI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/home"} style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                HOME
              </Button>
            </Link>
            <Link to={"/heroes"} style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{ my: 2, mx: 10, color: "white", display: "block" }}
              >
                HEROES
              </Button>
            </Link>
            <Link to={"/battle"} style={{textDecoration: "none"}}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                BATTLE
              </Button>
            </Link>
          </Box>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
