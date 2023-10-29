import {
  Box,
  Card,
  Container,
  FormControl,
  Grid,
  ImageList,
  ImageListItem,
  InputBase,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ROLE_LIST } from "../../data/Role";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { HEROES } from "../../data/heroes";
import { getImage } from "../../ultitis/getImage";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function Heroes() {
  const [role, setRole] = useState("All");
  const [search, setSearch] = useState("");
  console.log("role");
  console.log(role);
  return (
    <>
      <Container maxWidth="xl" sx={{ padding: "80px 24px" }}>
        <Stack alignItems={"center"}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Roboto", fontWeight: 600 }}
          >
            CHOOSE YOUR HERO
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Roboto" }}
            textAlign={"center"}
          >
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
          </Typography>
        </Stack>
        <Card
          width={"100%"}
          sx={{
            padding: "8px 24px",
            height: "80px",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderLeft: "5px solid blue",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Typography>FILTER HEROES</Typography>
          <FormControl sx={{ width: "120px" }}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <NativeSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Role"
              onChange={(e) => setRole(e.target.value)}
            >
              {ROLE_LIST.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <Stack flexDirection={"row"}>
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Stack>
        </Card>
        <ImageList cols={4}>
          {HEROES.map((hero) =>
            (role == "All" ||
            hero.roles.includes(role)) &&
            hero.localized_name.includes(search) 
            ? (
              <Link to={`/heroes/${hero.localized_name}`} key = {hero.id}>
                <ImageListItem
                sx={{ paddingLeft: 2, paddingTop: 2 }}
              >
                <img src={getImage(hero)}></img>
              </ImageListItem>
              </Link>
            ) : (
              <></>
            )
          )}
        </ImageList>
      </Container>
    </>
  );
}

export default Heroes;
