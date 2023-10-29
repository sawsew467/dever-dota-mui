import {
  Autocomplete,
  Box,
  Card,
  FormControl,
  InputLabel,
  List,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Header from "../Header";
import { HEROES } from "../../data/Heroes";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
function HeroPages() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [roleHero, setRoleHero] = React.useState("All");
  const handleSearchName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Header></Header>
      <Box>
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          CHOOSE YOUR HERO
        </div>
        <div
          style={{
            marginBottom: "70px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            fontSize: "25px",
            marginLeft: "250px",
            marginRight: "150px",
            textAlign: "center",
          }}
        >
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory
        </div>
      </Box>
      <Box
        sx={{
          borderLeft: "5px solid rgb(25, 118, 209)",
          marginLeft: "180px",
          width: "1200px",
          height: "100px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          borderRadius: "10px 10px 10px 10px",
        }}
      >
        <Box
          sx={{
            padding: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            gap: "320px ",
          }}
        >
          <div>FILLTER HEROES</div>
          <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                ROLE
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={"all"}
                onChange={(e) => {
                  setRoleHero(e.target.value.toString() || "All");
                }}
                label="role"
              >
                <MenuItem value={"all"} >All</MenuItem>
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
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={handleSearchName}
            />
          </div>
        </Box>
      </Box>
      <div>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            gap: "15px",
          }}
        >
          {HEROES?.map((heroes) => {
            if (
              (heroes.roles.find((e) => e === roleHero) ||
                roleHero === "All") &&
              heroes.localized_name
                .toLocaleLowerCase()
                .includes(name.toLocaleLowerCase())
            ) {
              return (
                <>
                  <Card
                    key={heroes.id}
                    sx={{
                      marginTop: "20px",
                      marginLeft: "10px",
                      marginRight: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      onClick={() => {
                        navigate("/herodetail");
                      }}
                      style={{ width: "100%", height: "100%" }}
                      src={`https://api.opendota.com${heroes.img}`}
                    ></img>
                  </Card>
                </>
              );
            }
          })}
        </List>
      </div>
    </div>
  );
}

export default HeroPages;
