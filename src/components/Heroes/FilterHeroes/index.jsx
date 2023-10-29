/* eslint-disable react/prop-types */
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function FilterHeroes(props) {
  const { setRoleList, HEAD_DATA } = props;

  const ROLE_CHOICE = [
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

  const [roleSelect, setRoleSelect] = useState("All");
  const [searchName, setSearchName] = useState("");

  // const [list, setList] = useState[HEAD_DATA];
  function handleChange(e) {
    setRoleSelect(e.target.value);
  }
  function handleSearch(e) {
    setSearchName(e.target.value);
  }
  useEffect(() => {
    roleSelect.toLowerCase() === "all"
      ? setRoleList(
          HEAD_DATA.filter((hero) => {
            return hero.localized_name
              .toLowerCase()
              .includes(searchName.toLowerCase());
          })
        )
      : setRoleList(
          HEAD_DATA.filter((hero) => {
            return (
              hero.roles.includes(roleSelect) &&
              hero.localized_name
                .toLowerCase()
                .includes(searchName.toLowerCase())
            );
          })
        );
  }, [roleSelect, searchName]);

  return (
    <>
      <Box
        sx={{
          flexGrow: 0,
          width: "100%",
          pt: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "inherit",
            color: "inherit",
            borderLeft: "3px solid #1976d2",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Filter Heroes
            </Typography>
            <FormControl variant="standard" sx={{ m: 2, minWidth: "10%" }}>
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{ fontSize: "small" }}
              >
                Role
              </InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // defaultValue
                value={roleSelect}
                onChange={handleChange}
                label="Role"
                sx={{ fontSize: "small", height: "100%" }}
              >
                <MenuItem
                  onChange={(e) => console.log(e.target.value)}
                  value="All"
                >
                  All
                </MenuItem>
                {ROLE_CHOICE.map((role, index) => (
                  <MenuItem key={index} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ height: "100%" }} />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={handleSearch}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{ fontSize: "small" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default FilterHeroes;
