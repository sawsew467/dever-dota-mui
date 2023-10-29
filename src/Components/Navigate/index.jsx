import { Box, Button, ImageList } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
function Navigate() {
  return (
    <>
   
    <Box
      sx={{
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        position: "fixed",
        width: "100%",
        zIndex: 1,
      }}
    >
      <ImageList>
        <img src="\src\Image\61447b065953a50004ee16cf.png" height={60}></img>
      </ImageList>
      <Box sx={{ display: "flex", alignItems: "center", }}>
        <Link to={"/home"}>
          <Button
            style={{
              color: "#fff",
              fontFamily: "inherit",
              fontSize: 20,
              fontWeight: 500,
              marginRight: 80,
            }}
          >
            Home
          </Button>
        </Link>
        <Link to={"/heros"}>
          <Button
            style={{
              color: "#fff",
              fontFamily: "inherit",
              fontSize: 20,
              fontWeight: 500,
              marginRight: 80,
            }}
          >
            Heros
          </Button>
        </Link>
        <Link to={"/battle"}>
          <Button
            style={{
              color: "#fff",
              fontFamily: "inherit",
              fontSize: 20,
              fontWeight: 500,
              marginRight: 80,
            }}
          >
            Battle
          </Button>
        </Link>
        <AccountCircleIcon fontSize="large"  sx={{ color: grey[500] }}/>
      </Box>
      </Box>
    </>
  );
}

export default Navigate;
