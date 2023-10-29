import { Box, Button, ImageList } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: 1,
          paddingTop: 65,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Link to={"/heros"}>
          <Button variant="outlined" sx={{ marginRight: 5 }} color="error">
            Your heros
          </Button>
        </Link>
        <Link to={"/battle"}>
          <Button variant="contained" color="error">
            Create Battle
          </Button>
        </Link>
      </Box>
      <ImageList sx={{ margin: 0, overflow: "hidden" }}>
        <img
          src="\src\Image\dota2.jpg"
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        ></img>
      </ImageList>
    </>
  );
}

export default Home;
