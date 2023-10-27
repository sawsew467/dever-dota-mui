import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Typography variant={"h6"}>WELCOME TO</Typography>
      <Typography
        sx={{
          fontSize: 100,
          fontWeight: 700,
          color: "#000",
          fontFamily: "fantasy",
        }}
        variant={"h1"}
      >
        DOTA 2 MUI
      </Typography>
      <Box sx={{ gap: 4, display: "flex", justifyContent: "center" }}>
        <Button variant="outlined">
          <Link to={"/heroes"}>
            <Typography sx={{color : "rgb(25, 118, 210)"}}>YOUR HEROES</Typography>
          </Link>
        </Button>
        <Button variant="contained">
          <Link to={"/battle"}>
            <Typography sx={{color : "#fff"}}>CREATE BATTLE</Typography>
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default Home;
