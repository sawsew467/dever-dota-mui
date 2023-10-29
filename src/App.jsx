import { Box, Stack, Typography, Button, Avatar } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import HERO from "./Components/Heroes";
import BATTLE from "./Components/BATTLEHERO";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import INFOR from "./Components/INFOR";
import "./App.css";
function App() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "rgb(25,118,210)",
          width: "100vw",
          height: "68px",
        }}
      >
        <Stack
          sx={{
            marginLeft: "20px",
            display: "flex",
            flexDirection: " row",
            alignItems: "center",
            gap: "10px",
            flex: "0.76",
          }}
        >
          <AdbIcon sx={{ color: "white" }} />
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
            }}
          >
            DOTA 2 -MUI
          </Typography>
        </Stack>

        <Stack
          spacing={{ xs: 1, sm: 10 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          flex={"1"}
          gap={"80px"}
        >
          <Button
            sx={{
              color: "white",
              fontFamily: " Helvetica, Arial, sans-serif",
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            sx={{
              color: "white",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
            onClick={() => navigate("/heroes")}
          >
            Heroes
          </Button>
          <Button
            sx={{
              color: "white",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
            onClick={() => navigate("/Battle")}
          >
            Battle
          </Button>
        </Stack>
        <Avatar
          sx={{
            bgcolor: "#BDBDBD",
            marginRight: "30px",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          R
        </Avatar>
      </Box>
      {/* heading */}

      <Routes>
        <Route element={<Home></Home>} path="/"></Route>
        <Route element={<HERO></HERO>} path="/heroes"></Route>
        <Route element={<BATTLE></BATTLE>} path="/battle"></Route>
        <Route element={<INFOR></INFOR>} path="/infor"></Route>
        <Route element={<h1>page not found</h1>} path="/*"></Route>
      </Routes>
    </>
  );
}
export default App;
