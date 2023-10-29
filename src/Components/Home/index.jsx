import { Box, Button, Stack, Typography } from "@mui/material";

import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100vw",
          height: "50vh",
          paddingTop: "160px",
        }}
      >
        <Typography
          sx={{
            fontFamily: " Helvetica, Arial, sans-serif",
            fontSize: " 1.5rem",
            textAlign: "center",
            fontWeight: "200",
            lineHeight: "1.334",
          }}
        >
          WELCOME TO
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontSize: "6rem",
            textAlign: "center",
            fontWeight: "700",
            lineHeight: "1.167",
          }}
        >
          DOTA 2 MUI
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            variant="outlined"
            sx={{ fontFamily: " Helvetica, Arial, sans-serif" }}
            onClick={() => navigate("/heroes")}
          >
            YOUR HEROES
          </Button>
          <Button
            variant="contained"
            sx={{ fontFamily: " Helvetica, Arial, sans-serif" }}
            onClick={() => navigate("/heroes")}
          >
            CREATE BATTLE
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
