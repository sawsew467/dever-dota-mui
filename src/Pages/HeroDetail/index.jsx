/* eslint-disable react/jsx-key */
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  ImageListItem,
  Typography,
} from "@mui/material";
import { HEROES } from "../../DATA/heroes";
import { getImageUrl } from "../../assets/utils/img";
import { Fullscreen } from "@mui/icons-material";
import { Link } from "react-router-dom";

function HeroDetail() {
  const url = window.location.href;
  // Sử dụng URLSearchParams để lấy đường dẫn path
  const path = new URL(url).pathname;

  // Phân tách thành phần bởi dấu /
  const pathComponents = path.split("/").filter(Boolean);
  const decodedString = decodeURIComponent(pathComponents[1]);
  console.log(decodedString);
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url('/src/Image/e7031acca9a34bc69a460796feb5194d.jpg')",
          minHeight: "100vh",
        }}
      >
        <Breadcrumbs
          sx={{ paddingTop: 10, paddingLeft: 10 }}
          aria-label="breadcrumb"
        >
          <Link to={"/"}>
            <Button sx={{ color: "black" }}>Dota 2</Button>
          </Link>
          <Link to={"/heros"}>
            <Button sx={{ color: "black" }}>Heroes</Button>
          </Link>
          <Typography color="text.primary">{decodedString}</Typography>
        </Breadcrumbs>
        {HEROES.map((hero) =>
          hero.localized_name === decodedString ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 15,
                // height: "100vh",
              }}
            >
              <img
                src={getImageUrl(hero)}
                width={600}
                style={{ borderRadius: 5 }}
              />
              <Box sx={{ paddingLeft: 10 }}>
                <Typography variant="h1" sx={{ paddingBottom: 5 }}>
                  {hero.localized_name}
                </Typography>
                <Typography variant="h5">ATTACK TYPE</Typography>
                <Typography variant="h6" sx={{ paddingBottom: 3 }}>
                  {hero.attack_type}
                </Typography>
                <Typography variant="h5">ROLE</Typography>
                <Typography variant="h6"> {hero.roles + " "}</Typography>
              </Box>
            </Box>
          ) : (
            <></>
          )
        )}
      </Box>
    </>
  );
}

export default HeroDetail;
