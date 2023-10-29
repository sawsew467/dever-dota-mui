import {
  Box,
  Stack,
  Typography,
  Chip,
  Select,
  MenuItem,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  ImageList,
  ImageListItem,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { getImageUrl } from "../utils/ultils";
import { HEROES } from "../hero/heroes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

function HERO() {
  const navigate = useNavigate();
  const [selectHero, setSelectHero] = useState("ALL");
  const [filteredHeroes, setFilteredHeroes] = useState(HEROES);
  const [inputSearch, setInputSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleRole = (event) => {
    const selectedRole = event.target.value;
    setSelectHero(selectedRole);
    filterHeroRole(selectedRole);
  };
  const filterHeroRole = (selectedRole) => {
    if (selectedRole === "ALL") {
      setFilteredHeroes(HEROES);
    } else {
      const filtered = HEROES.filter((hero) =>
        hero.roles.includes(selectedRole)
      );
      setFilteredHeroes(filtered);
    }
  };

  const handleSearch = (event) => {
    const searching = event.target.value;
    setInputSearch(searching);
    const filtered = HEROES.filter((hero) =>
      hero.localized_name.toLowerCase().includes(searching.toLowerCase())
    );
    // console.log("searching", searching);
    // console.log("inputSearch", inputSearch);
    setSearchResult(filtered);
    console.log("filtered", filtered);
  };

  const handleClick = (hero) => {
    console.log("hero", hero);
    navigate("/infor");
  };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            padding: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack>
            <Typography
              sx={{
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "3rem",
                lineHeigh: "1.167",
                textAlign: "center",
                fontWeight: "700",
                text: "center",
              }}
            >
              CHOOSE YOUR HERO
            </Typography>
            <Typography
              sx={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: "24px",
                lineHeigh: "1.167",
                fontWeight: "200",
                textAlign: "center",
              }}
            >
              From magical tacticians to fierce brutes and cunning rogues, Dota
              2s hero pool is massive and limitlessly diverse. Unleash
              incredible abilities and devastating ultimates on your way to
              victory.
            </Typography>
          </Stack>
          <Card
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: "80px",
              marginTop: " 100px",
            }}
          >
            <Chip
              sx={{ backgroundColor: "#1976D2", height: "100%", width: "6px" }}
            ></Chip>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                height: "20px",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  alignItems: "center",
                  fontFamily: "Helvetica, Arial, sans-serif",
                }}
              >
                FILLTER HEROES
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <FormHelperText
                  sx={{
                    alignItems: "center",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: " 12px",
                  }}
                >
                  ROLE
                </FormHelperText>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    sx={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    value="ALL"
                    onChange={handleRole}
                  >
                    ALL
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    shrink={false}
                    sx={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                    }}
                    value={selectHero}
                    onChange={handleRole}
                  >
                    <MenuItem
                      value="ALL"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      ALL
                    </MenuItem>
                    <MenuItem
                      value="Carry"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Carry
                    </MenuItem>
                    <MenuItem
                      value="Escape"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Escape
                    </MenuItem>
                    <MenuItem
                      value="Nuker"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Nuker
                    </MenuItem>
                    <MenuItem
                      value="Support"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Support
                    </MenuItem>
                    <MenuItem
                      value="Disabler"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Disabler
                    </MenuItem>
                    <MenuItem
                      value="Pusher"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Pusher
                    </MenuItem>
                    <MenuItem
                      value="Durable"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Durable
                    </MenuItem>
                    <MenuItem
                      value="Initiator"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Initiator
                    </MenuItem>
                    <MenuItem
                      value="Jungle"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Jungle
                    </MenuItem>
                    <MenuItem
                      value="Durable"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Durable
                    </MenuItem>
                    <MenuItem
                      value="Disabler"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Disabler
                    </MenuItem>
                    <MenuItem
                      value="Nuker"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Nuker
                    </MenuItem>
                    <MenuItem
                      value="Escape"
                      sx={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      Escape
                    </MenuItem>
                  </Select>
                </FormControl>
              </FormControl>
              <Stack sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      // inputProps={{ "aria-label": "search" }}
                      onChange={handleSearch}
                    />
                  </Search>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <ImageList
            sx={{ width: "100%", height: "100%", paddingTop: "20px" }}
            cols={4}
            rowHeight={170}
            gap={"20px"}
          >
            {inputSearch !== ""
              ? searchResult.map((hero) => (
                  <ImageListItem
                    key={hero.id}
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  >
                    <img
                      src={getImageUrl(hero)}
                      alt={hero.localized_name}
                      loading="lazy"
                      onClick={() => handleClick(hero)}
                    />
                  </ImageListItem>
                ))
              : filteredHeroes.map((hero) => (
                  <ImageListItem
                    key={hero.id}
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  >
                    <img
                      src={getImageUrl(hero)}
                      alt={hero.localized_name}
                      loading="lazy"
                      onClick={() => handleClick(hero)}
                    />
                  </ImageListItem>
                ))}
          </ImageList>
        </Box>
      </Box>
    </>
  );
}

export default HERO;
