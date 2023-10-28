import { Box, Button, Stack, Typography } from "@mui/material";
import Header from "../../components/home/header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header></Header>
      <Typography variant="h5" textAlign={"center"} mt={20}>
        WELCOME TO
      </Typography>
      <Typography variant="h1" sx={{ fontWeight: 700 }} textAlign={"center"}>
        DOTA 2 MUI
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Link to={"/heroes"}>
          <Button variant="outlined">YOUR HEROES</Button>
        </Link>
        <Link to={"/battle"}>
          <Button variant="contained">CREATE BATTLE</Button>
        </Link>
      </Box>
    </>
  );
}

export default Home;
