import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function INFOR({}) {
  const handleClick = (event) => {
    event.preventDefault();
    // console.log("pick hero", pickHero);
  };
  const heroesName = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      DOTA 2 MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Heroes
    </Link>,
    <Typography key="3" color="text.primary"></Typography>,
  ];
  return (
    <>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {heroesName}
        </Breadcrumbs>
      </Stack>
    </>
  );
}

export default INFOR;
