import { Box, Button } from "@mui/material";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header></Header>
      <div
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <div style={{display: "flex",justifyContent: "center",fontSize:"25px"}}>WELCOME TO</div>
          <div style={{display: "flex",justifyContent: "center",fontSize:"100px",fontWeight:"bold"}}>DOTA 2 MUI</div>
          <div style={{display: "flex",justifyContent: "center",}}>
            <Button variant="outlined" sx={{marginRight:"20px",}} onClick={() =>{navigate("/heroPages")}}>YOUR HEROS</Button>
            <Button variant="contained" onClick={() =>{navigate("/battle")}}>CREATE BATTLE</Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Home;
