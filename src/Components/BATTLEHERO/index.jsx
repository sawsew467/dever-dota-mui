import { Box, Typography, Button, Paper, Divider } from "@mui/material";

function BATTLE() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <Typography
          sx={{
            fontFamily: " Roboto, Helvetica, Arial, sans-serif",
            fontSize: "3rem",
            lineHeight: "1.167",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          DOTA 2 FUNNY BATTLE
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "30px",
            gap: "120px",
          }}
        >
          <Box>
            <Paper
              elevation={3}
              sx={{
                width: "400px",
                height: "200px",
                backgroundColor: "#EEEEEE",
              }}
            />
            <Button
              variant="contained"
              sx={{
                width: "100%",
                fontFamily: "Helvetica, Arial, sans-serif",
              }}
            >
              RANDOM
            </Button>
          </Box>
          <Button variant="contained">Fight</Button>
          <Box>
            <Paper
              elevation={3}
              sx={{
                width: "400px",
                height: "200px",
                backgroundColor: "#EEEEEE",
              }}
            />
            <Button
              variant="contained"
              sx={{
                width: "100%",
                fontFamily: "Helvetica, Arial, sans-serif",
              }}
            >
              RANDOM
            </Button>
          </Box>
        </Box>
        <Divider
          sx={{
            width: "100%",
          }}
        ></Divider>
      </Box>
    </>
  );
}
export default BATTLE;
