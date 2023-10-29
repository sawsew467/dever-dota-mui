import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import Header from "../../components/home/header";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function HeroDetail() {
  return (
    <>
      <Header></Header>
      <Box
        sx={{
          maxWidth: "1200px",
          // minWidth: "100vw",
          minHeight: "100vh",
          m: "auto",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          padding: "80px 24px",
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            style={{ textDecoration: "none" }}
            underline="hover"
            key="1"
            color="inherit"
            to={"/home"}
          >
            Dota 2 MUI
          </Link>
          ,
          <Link
            style={{ textDecoration: "none" }}
            underline="hover"
            key="2"
            color="inherit"
            to={"/heroes"}
          >
            Heroes
          </Link>
          ,
          <Typography key="3" color="text.primary">
            Anti-Mage
          </Typography>
          ,
        </Breadcrumbs>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "32px",
            justifyContent: "space-between",
          }}
        >
          <Stack>
            <Typography variant="h1">ANTI-MAGE</Typography>
            <Typography variant="h5" sx={{ opacity: 0.5 }}>
              ATTACK TYPE
            </Typography>
            <Typography variant="h6" mb={4}>
              MELEE
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.5 }}>
              ROLE
            </Typography>
            <Typography variant="h6">CARRY, ESCAPE, NUKER</Typography>
          </Stack>
          <img
            style={{ width: "70%" }}
            src="https://api.opendota.com/apps/dota2/images/dota_react/heroes/antimage.png?"
          ></img>
        </Box>
      </Box>
    </>
  );
}

export default HeroDetail;
