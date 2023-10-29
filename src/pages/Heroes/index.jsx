/* eslint-disable react/no-unescaped-entities */
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";
import Header from "../../components/home/header";
import {
  Box,
  Card,
  CardContent,
  Container,
  FormControl,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { HEROES } from "../../data/heroes";
import { getImageUrl } from "../../utils/image";
import { useState } from "react";
import { Link } from "react-router-dom";

// const ROLE_LIST = [
//   "All",
//   "Carry",
//   "Escape",
//   "Nuker",
//   "Support",
//   "Disabler",
//   "Pusher",
//   "Durable",
//   "Initiator",
//   "Jungle",
//   "Durable",
//   "Disabler",
//   "Nuker",
//   "Escape",
// ];
function Heroes() {
  const [filterRole, setFilterRole] = useState("all");
  const handleFilter = (e) => {
    setFilterRole(e.target.value);
  };

  const [searchfilter, setSearchFilter] = useState("");
  const handleSearch = (e) => {
    setSearchFilter(e.target.value.toLowerCase());
  };
  return (
    <>
      <Header></Header>
      <Box
        sx={{
          maxWidth: "1200px",
          // minWidth: "100vw",
          minHeight: "100vh",
          m: "auto",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          padding: "80px 24px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700 }} mb={3}>
          CHOOSE YOUR HERO
        </Typography>
        <Typography variant="h5" textAlign={"center"} mb={10}>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.{" "}
        </Typography>
        <Card sx={{ Width: "1200px", marginBottom: "16px" }}>
          <CardContent
            sx={{
              minWidth: "1200px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: "5px solid rgb(24, 118, 209)",
            }}
          >
            <Typography>FILLTER HEROES</Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                ROLE
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value={"all"}
                defaultValue={"all"}
                onChange={handleFilter}
                label="role"
              >
                {/* {ROLE_LIST.map((role) => (
                  <MenuItem key={role}>{role}</MenuItem>
                ))} */}
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"Carry"}>Carry</MenuItem>
                <MenuItem value={"Escape"}>Escape</MenuItem>
                <MenuItem value={"Nuker"}>Nuker</MenuItem>
                <MenuItem value={"Support"}>Support</MenuItem>
                <MenuItem value={"Disabler"}>Disabler</MenuItem>
                <MenuItem value={"Pusher"}>Pusher</MenuItem>
                <MenuItem value={"Durable"}>Durable</MenuItem>
                <MenuItem value={"Initiator"}>Initiator</MenuItem>
                <MenuItem value={"Jungle"}>Jungle</MenuItem>
                <MenuItem value={"Durable"}>Durable</MenuItem>
                <MenuItem value={"Disabler"}>Disabler</MenuItem>
                <MenuItem value={"Nuker"}>Nuker</MenuItem>
                <MenuItem value={"Escape"}>Escape</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-search"
              label="Search..."
              type="search"
              variant="outlined"
              onChange={handleSearch}
            />
          </CardContent>
        </Card>
        <ImageList cols={4} gap={16}>
          {HEROES.filter((hero) => {
            if (searchfilter) {
              return hero.localized_name.toLowerCase().includes(searchfilter);
            } else {
              if (filterRole === "all") {
                return true;
              } else {
                return hero.roles.includes(filterRole);
              }
            }
          }).map((hero, index) => (
            <Link
              key={hero.img}
              style={{ width: "100%", textDecoration: "none", color: "black" }}
              to={"/herodetail"}
            >
              <ImageListItem>
                <img
                  style={{
                    width: "276px",
                    height: "194px",
                    borderRadius: "4px",
                  }}
                  src={getImageUrl(hero)}
                ></img>
                <Typography>Name: {hero.localized_name}</Typography>
                <Typography variant="caption">
                  Roles: {hero.roles.join()}
                </Typography>
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

export default Heroes;
