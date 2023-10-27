/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
// const pages = ["Home", "Heroes", "Battle"];

function Header() {
  const pages = [
    {
      value: "home",
      path: "/home",
    },
    {
      value: "heroes",
      path: "/heroes",
    },
    {
      value: "battle",
      path: "/battle",
    },
  ];

  return (
    <AppBar position="fixed" sx={{ justifyContent: "space-between" }}>
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: {},
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
            {pages?.map((page, index) => (
              <>
                <Link to={page.path}>
                  <Button
                    key={index}
                    onClick={() => {
                      console.log(page.value.toLowerCase());
                      // navigationPages(page.toLowerCase());
                    }}
                    sx={{
                      my: 2,
                      p: "10px 50px",
                      color: "white",
                      fontSize: "small",
                    }}
                  >
                    {page.value}
                  </Button>
                </Link>
              </>
            ))}
          </Box>
          <Box sx={{ p: 0, fontSize: "large" }}>
            <Avatar alt="R" src="/static/images/avatar/2.jpg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
