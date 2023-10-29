import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <Box
        sx={{
          color: "white",
          backgroundColor: "#0099FF",
          padding: 3,
          display: "flex",
          justifyContent: "space-between",
          userSelect: "none"
        }}
      >
        <span style={{fontSize:"22px"}}>DOTA 2 - MUI</span>
        <Box
          sx={{
            backgroundColor: "#0099FF",
            gap: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            style={{
              background: "#0099FF",
              color: "white",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </a>
          <a
            style={{
              background: "#0099FF",
              color: "white",
            }}
            onClick={() => {navigate("/heroPages")}}
          >
            HERO
          </a>
          <a
            style={{
              background: "#0099FF",
              color: "white",
            }}
            onClick={() => {navigate("/battle")}}
          >
            BATTLE
          </a>
        </Box>
        <div
          style={{
            margin: "0",
            padding: 2,
            display: "flex",
            justifyContent: "center",
            width: "3.3vh",
            height: "3.3vh",
            background: "#666699",
            borderRadius: "50%",
          }}
        >
          <span>R</span>
        </div>
      </Box>
    </div>
  );
}

export default Header;
