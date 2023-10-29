/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Card,
  FormControl,
  ImageList,
  ImageListItem,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ROLE_LIST } from "../../DATA/RoleList";
import { HEROES } from "../../DATA/heroes";
import { getImageUrl } from "../../assets/utils/img";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getPath } from "../../assets/utils/path";
import HeroDetail from "../HeroDetail";

function Heros() {
  const [filterRole, setFilterRole] = useState("All");
  const [filterName, setFilterName] = useState('');
  const [number, setNumber] = useState();
  const handleClick = (index) => {
    setNumber(index);
  }
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url('/src/Image/e7031acca9a34bc69a460796feb5194d.jpg')",
        }}
      >
        <Box
          sx={{
            paddingTop: 20,
            marginLeft: 20,
            marginRight: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            CHOOSE YOUR HERO
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, textAlign: "center", paddingTop: 2 }}
          >
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
          </Typography>
          <Card
            sx={{
              backgroundColor: "rgb(24, 118, 209)",
              marginTop: 10,
              paddingLeft: 0.6,
              width: "100%",
              opacity: 0.7,
            }}
          >
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: 80,
                borderRadius: 0,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              <Typography> FILLTER HEROES</Typography>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  ROLE
                </InputLabel>
                <Select
                  defaultValue="All"
                  onChange={(e) => setFilterRole(e.target.value)}
                >
                  {ROLE_LIST.map((role) => (
                    <MenuItem value={role}>{role}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField onChange={(e)=> setFilterName(e.target.value)} placeholder="Search..." variant="standard" />
              </Box>
            </Card>
          </Card>

          <ImageList sx={{ width: "100%", paddingTop: 2, paddingBottom: 10 }} gap={15} cols={4}>
            {HEROES.map((item, index) =>
             ( item.roles[0] === filterRole ||
              item.roles[1] === filterRole ||
              item.roles[2] === filterRole ||
              item.roles[3] === filterRole ||
              item.roles[4] === filterRole ||
              item.roles[5] === filterRole ||
              item.roles[6] === filterRole ||
              item.roles[7] === filterRole ||
              item.roles[8] === filterRole ||
              item.roles[9] === filterRole ||
              item.roles[10] === filterRole ||
              item.roles[11] === filterRole ||
              item.roles[12] === filterRole) &&
              item.localized_name.toLowerCase().includes(filterName.toLowerCase())=== true ||
              (item.localized_name.toLowerCase().includes(filterName.toLowerCase())=== true 
              && filterRole === "All")
               ? (
                <Link to={getPath(item)} onClick={() => handleClick(index)}>
                <ImageListItem sx={{cursor: "pointer"}}>
                <img src={getImageUrl(item)}  />
                </ImageListItem>
                </Link>
              ) : (
                <></>
              )
            )}
          </ImageList>
        </Box>
      </Box>
    </>
  );
}

export default Heros;
