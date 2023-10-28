import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import Header from './../../components/Header/index';
import { Card, CardContent, CardMedia, FormControl, Grid, InputLabel, NativeSelect, Stack } from "@mui/material";
import { ROLE_LIST } from './../../data/roles';
import { HEROES } from "../../data/heroes";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function Hero() {


  const [roleHero, setRoleHero] = React.useState("All");

  const [name, setName] = React.useState("");

  const handleSearchName = (e) => {
    setName(e.target.value);
  };

  const filterHeroes = HEROES.filter(hero => {
   return hero.roles.includes(roleHero) ||
          roleHero === "All" &&
          hero.localized_name.toLowerCase() !== name.toLowerCase()
})

  return (
    <>
      <Header></Header>
      <Stack
        sx={{
          minHeight: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          width: "100wh",
        }}
      >
        <Stack
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              lineHeight: "1.167",
              fontWeight: 700,
              fontSize: "3rem",
            }}
          >
            CHOOSE YOUR HERO
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "1.5rem",
            }}
          >
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
          </Typography>
        </Stack>
        <Card sx={{ display: "flex", width: "90%", marginBottom: "30px" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <CardMedia
                sx={{
                  flexDirection: "column",
                  backgroundColor: "rgb(24, 118,  209)",
                  width: 5,
                }}
                image={null}
              />
              <CardContent>
                <Typography
                  component="div"
                  sx={{
                    fontSize: "1rem",
                  }}
                >
                  FILTER HEROES
                </Typography>
              </CardContent>
            </Box>
            <FormControl
              sx={{
                marginTop: 1,
              }}
            >
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                ROLE
              </InputLabel>
              <NativeSelect
                defaultValue="All"
                onChange={(e) => setRoleHero(e.target.value)}
              >
                <option value="All">All</option>
                {ROLE_LIST.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>

            <Box sx={{
              marginTop:1.5
            }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={handleSearchName}
                />
              </Search>
            </Box>
          </Box>
        </Card>
      </Stack>

      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 10, sm: 8, md: 16 }}
        sx={{
          display: "flex",
          width: "75%",
        }}
      >
        {filterHeroes.map((hero) =>
          hero.localized_name.toLowerCase().includes(name.toLocaleLowerCase()) ? (
            <Grid item xs={2} sm={4} md={4} key={hero.localized_name}>
              <Link to={`/heroes/:${hero.id}`}>
                <Box
                  component="img"
                  src={`https://api.opendota.com${hero.img}`}
                  sx={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                ></Box>
              </Link>
            </Grid>
          ) : null
        )}
        {/* <searchFilter name={name} roleHero={roleHero}></searchFilter> */}
      </Grid>
    </>
  );
}

