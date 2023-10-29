import { Box, Button, CardContent, Stack, Typography } from "@mui/material";
import FilterHeroes from "../../components/Heroes/FilterHeroes";
import { useState } from "react";
import DATA_HEROES from "../../ultils/DATA_HEROES";
import HeroList from "../../components/Heroes/HeroList";

const Heroes = () => {
  const [HEAD_DATA] = useState(DATA_HEROES);
  const [roleList, setRoleList] = useState(HEAD_DATA);

  return (
    <>
      <Box
        display={"flex"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <CardContent
          sx={{
            height: "100%",
            mt: "10%",
            width: "80%",
          }}
        >
          <CardContent
            sx={{
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h1"
              noWrap
              sx={{
                lineHeight: "large",
                whiteSpace: "normal",
                fontWeight: "Bold",
                color: "inherit",
                textTransform: "uppercase",
              }}
            >
              CHOOSE YOUR HERO
            </Typography>
            <Typography
              variant="button"
              component="body"
              noWrap
              sx={{
                textWrap: "wrap",
                fontWeight: "normal",
                color: "inherit",
                fontSize: "large",
              }}
            >
              From magical tacticians to fierce brutes and cunning rogues, Dota
              2's hero pool is massive and limitlessly diverse. Unleash
              incredible abilities and devastating ultimates on your way to
              victory.
            </Typography>
          </CardContent>
          <FilterHeroes setRoleList={setRoleList} HEAD_DATA={HEAD_DATA} />
          <HeroList roleList={roleList} />
        </CardContent>
      </Box>
    </>
  );
};
export default Heroes;
