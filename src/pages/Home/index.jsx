/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/Header";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header></Header>
      <Stack
        sx={{
          minWidth: "100vw",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "1.5rem",
            fontWeight: 400,
          }}
        >
          Welcome to
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "6rem",
            fontWeight: 700,
          }}
        >
          dota 2 mui
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link to="/heroes">
            <Button variant="outlined">YOUR HEROES</Button>
          </Link>
          <Link to="/battle">
            <Button variant="contained">CREATE BATTLE</Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
}

export default Home;
