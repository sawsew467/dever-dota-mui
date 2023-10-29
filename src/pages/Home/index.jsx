import { Box, Button, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box display={"flex"} sx={{ width: "100%", position: "relative" }}>
        <CardContent
          sx={{
            width: "100%",
            height: "max-content",
            position: "fixed",
            top: "30%",
            bottom: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="button"
            component="h2"
            noWrap
            sx={{
              textWrap: "wrap",
              fontWeight: "normarl",
              color: "inherit",
              m: "0px",
              fontSize: "small",
              textTransform: "uppercase",
            }}
          >
            Welcome to
          </Typography>
          <Typography
            // variant="h1"
            noWrap
            sx={{
              lineHeight: "large",
              whiteSpace: "normal",
              fontWeight: "Bold",
              color: "inherit",
              fontSize: "10rem",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Dota 2 mui
          </Typography>
          <Stack spacing={2} direction="row">
            <Link to="/heroes">
              <Button
                size="large"
                variant="outlined"
                sx={{ p: "5px 15px", fontSize: "small" }}
              >
                Your heroes
              </Button>
            </Link>
            <Link to="/battle">
              {" "}
              <Button
                sx={{ p: "5px 15px", fontSize: "small" }}
                size="large"
                variant="contained"
              >
                Create battle
              </Button>
            </Link>
          </Stack>
        </CardContent>
      </Box>
    </>
  );
};
export default Home;
