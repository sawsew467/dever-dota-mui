import { Box, List, ListItemText, Paper, Typography } from "@mui/material";
import { HEROES } from "../../data/Heroes";
import { useParams } from "react-router-dom";
import Header from "../Header";

function HeroDetail() {
  return (
    <div>
      <Header></Header>

      <div
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "start",
          gap: "40px",
        }}
      >
        <ListItemText>
          <Typography align="left" sx={{ color: "gray" }} variant="h4">
            ATTACK TYPE
          </Typography>
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <img style={{ width: "25px", height: "25px" }}></img>
            <Typography align="left" variant="h5"></Typography>
          </div>
        </ListItemText>
        <Typography align="left" sx={{ color: "gray" }} variant="h4">
          ROLE
        </Typography>
        <Typography align="left" variant="h5"></Typography>
        <Paper
          sx={{
            aspectRatio: "256/144",
            width: "50%",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img style={{ width: "100%", height: "100%" }}></img>
        </Paper>
      </div>
    </div>
  );
}

export default HeroDetail;
