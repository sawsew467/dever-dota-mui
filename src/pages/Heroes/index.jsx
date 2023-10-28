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
  const handleFilter = (e) =>{
    console.log(e.target.value);
  }
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
                onChange={handleFilter}
                label="role"
              >
                {/* {ROLE_LIST.map((role) => (
                  <MenuItem key={role}>{role}</MenuItem>
                ))} */}
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"carry"}>Carry</MenuItem>
                <MenuItem value={"escape"}>Escape</MenuItem>
                <MenuItem value={"nuker"}>Nuker</MenuItem>
                <MenuItem value={"support"}>Support</MenuItem>
                <MenuItem value={"disabler"}>Disabler</MenuItem>
                <MenuItem value={"pusher"}>Pusher</MenuItem>
                <MenuItem value={"durable"}>Durable</MenuItem>
                <MenuItem value={"initiator"}>Initiator</MenuItem>
                <MenuItem value={"jungle"}>Jungle</MenuItem>
                <MenuItem value={"durable"}>Durable</MenuItem>
                <MenuItem value={"disabler"}>Disabler</MenuItem>
                <MenuItem value={"nuker"}>Nuker</MenuItem>
                <MenuItem value={"escape"}>Escape</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-search"
              label="Search..."
              type="search"
              variant="outlined"
              // onChange={handleFilter}
            />
          </CardContent>
        </Card>

        <ImageList sx={{ width: 1200, height: 450 }} cols={4}>
          {HEROES.map((hero, index) => (
            <ImageListItem
              key={hero.img}
              sx={{ width: "276px", height: "194px" }}
            >
              <img src={getImageUrl(hero)}></img>
              <Typography>{hero.localized_name}</Typography>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

export default Heroes;
