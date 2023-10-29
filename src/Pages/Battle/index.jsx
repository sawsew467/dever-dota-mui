import { Box, Button } from "@mui/material";
import Header from "../Header";

function Battle() {
  return (
    <div>
      <Header></Header>
      <div
        style={{
          marginBottom:"30px",
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        DOTA 2 FUNNY BATTLE
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{ background: "gray", width: "400px", height: "250px" }}
          ></div>
          <Button variant="contained" sx={{ width: "400px" }}>
            Radom
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Button
            variant="contained"
            sx={{ marginLeft: "80px", marginRight: "80px" }}
          >
            Find
          </Button>
        </div>
        <div>
          <div
            style={{ background: "gray", width: "400px", height: "250px" }}
          ></div>
          <Button variant="contained" sx={{ width: "400px" }}>
            Radom
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Battle;
