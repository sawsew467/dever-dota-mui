/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import {
  Autocomplete,
  Card,
  FormControl,
  InputAdornment,
  List,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { HEROES } from "../../data/hero.js";
import { useNavigate } from "react-router-dom";

const Heroes = ({ isLoading, HEROES}) => {
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState("All");
  const [search, setSearch] = React.useState("");

  const role = [
    "All",
    "Carry",
    "Escape",
    "Nuker",
    "Support",
    "Disabler",
    "Pusher",
    "Durable",
    "Initiator",
    "Jungle",
    "Durable",
    "Disabler",
    "Nuker",
    "Escape",
  ];

  return (
    <>
      <Typography sx={{ fontWeight: 700 }} variant="h2">
        CHOOSE YOUR HERO
      </Typography>
      <Typography sx={{ fontWeight: 400 }} variant="h6">
        From magical tacticians to fierce brutes and cunning rogues, Dota 2's
        hero pool is massive and limitlessly diverse. Unleash incredible
        abilities and devastating ultimates on your way to victory.
      </Typography>
      <List>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingBlock: 20,
            borderRadius: "6px",
            padding: "10px 40px",
            height: "60px",
            position: "relative",
            alignItems: "center",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 6,
              background: "rgb(25, 118, 210)",
              borderRadius: "4px 0 0 4px",
            }}
          ></span>
          <Typography variant="h5" sx={{ fontSize: 16 }}>
            FILLTER HEROES
          </Typography>
          <FormControl>
            <Autocomplete
              onChange={(e, newInputValue) => {
                setFilter(newInputValue);
              }}
              defaultValue={role[0]}
              disablePortal
              id="combo-box-demo"
              sx={{ width: 200 }}
              options={role}
              renderInput={(params) => (
                <TextField
                  size="small"
                  variant="standard"
                  {...params}
                  label="Role"
                />
              )}
            />
          </FormControl>
          <FormControl>
            <TextField
              onChange={(e) => {
                setSearch(e.target.value.toString() || "All");
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              label="Search"
              variant="standard"
            />
          </FormControl>
        </Paper>
      </List>
      <List
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          gap: "15px",
        }}
      >
        {isLoading ||
          HEROES?.map((heroes) => {
            if (
              (heroes.roles.find((e) => e === filter) || filter === "All") &&
              heroes.localized_name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return (
                <>
                  <Card
                    key={heroes.id}
                    onClick={() => {
                      navigate(`/heroes/${heroes.localized_name}`);
                      navigate(0);
                    }}
                    sx={{ width: "calc((100% - 45px)/4)", cursor: "pointer" }}
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={`https://api.opendota.com${heroes.img}`}
                    ></img>
                  </Card>
                </>
              );
            }
          })}
      </List>
    </>
  );
};

export default Heroes;
