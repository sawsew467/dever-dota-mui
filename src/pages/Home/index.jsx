import React from "react";
import Header from "../../components/Header";
import { Box, Button, CardContent, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box display={"flex"} sx={{ width: "100%" }}>
        <CardContent
          sx={{
            width: "100%",
            height: "100%",
            p: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "Center",
            flexDirection: "column",
          }}
        >
          <Typography
            // overflow={"auto"}
            variant="button"
            component="h2"
            noWrap
            sx={{
              whiteSpace: "normal",
              fontWeight: "normarl",
              color: "inherit",
              //   fontSize: "",
              fontSize: "xx-large",
              textTransform: "uppercase",
            }}
          >
            Welcome to
          </Typography>
          <Typography
            // variant="h1"
            noWrap
            sx={{
              whiteSpace: "normal",
              fontWeight: "Bold",
              color: "inherit",
              fontSize: "10rem",
              textTransform: "uppercase",
            }}
          >
            Dota 2 mui
          </Typography>
          <Stack spacing={2} direction="row">
            <Button size="large" variant="outlined">
              Your heroes
            </Button>
            <Button size="large" variant="contained">
              Create battle
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </>
  );
};
export default Home;
