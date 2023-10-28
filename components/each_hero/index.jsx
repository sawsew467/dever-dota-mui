/* eslint-disable react/prop-types */

import { List, ListItemText, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import melee from "../../asset/images/attack_type/melee.png";
import ranged from "../../asset/images/attack_type/ranged.png";
const EachHero = ({HEROES, isLoading}) => {
  const location = useLocation();
  const nameHeroSelect = location.pathname
    .split("/")
    .splice(-1)
    .toString()
    .replaceAll("%20", " ");
  return (
    <>
      {isLoading || HEROES.map((hero) => {
        console.log();
        if (hero.localized_name === nameHeroSelect) {
          return (
            <div key={hero.id} style={{ display: "flex", justifyContent : "space-between" }}>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "start",
                  gap: "40px",
                }}
              >
                <Typography variant="h1">{hero?.localized_name}</Typography>
                <ListItemText>
                  <Typography align="left" sx={{ color: "gray" }} variant="h4">
                    ATTACK TYPE
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "25px", height: "25px" }}
                      src={hero?.attack_type === "Melee" ? melee : ranged}
                    ></img>
                    <Typography align="left" variant="h5">
                      {hero?.attack_type}
                    </Typography>
                  </div>
                </ListItemText>
                <ListItemText>
                  <Typography align="left" sx={{ color: "gray" }} variant="h4">
                    ROLE
                  </Typography>
                  <Typography align="left" variant="h5">
                    {hero?.roles.join(", ")}
                  </Typography>
                </ListItemText>
              </List>
              <Paper sx={{aspectRatio : "256/144" , width : "50%", borderRadius : "10px", overflow : "hidden"}}>
                <img style={{width : "100%", height : "100%"}} src={`https://api.opendota.com${hero.img}`}></img>
              </Paper>
            </div>
          );
        }
      })}
    </>
  );
};

export default EachHero;
