/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Battle = ({ HEROES }) => {
  const [randomHero, setRandomHero] = useState(() => {
    const result = JSON.parse(localStorage.getItem("battle")) || {};
    return result;
  });
  const [powerHero, setPowerHero] = useState([]);
  const [open, setopen] = useState(false);
  const numberHeroes = HEROES.length;
  const handleClose = () => {
    setopen(false);
    setRandomHero({});
  };
  const handleCompare = (hero1, hero2) => {
    const hero1Power = Number(
      (Number(hero1?.base_health) +
        Number(hero1?.base_health_regen) +
        Number(hero1?.base_mana) +
        Number(hero1?.base_mana_regen) +
        Number(hero1?.base_armor) +
        Number(hero1?.base_mr) +
        Number(hero1?.base_attack_min) +
        Number(hero1?.base_attack_max) +
        Number(hero1?.base_str) +
        Number(hero1?.base_agi)) /
        11
    );
    const hero2Power = Number(
      (Number(hero2?.base_health) +
        Number(hero2?.base_health_regen) +
        Number(hero2?.base_mana) +
        Number(hero2?.base_mana_regen) +
        Number(hero2?.base_armor) +
        Number(hero2?.base_mr) +
        Number(hero2?.base_attack_min) +
        Number(hero2?.base_attack_max) +
        Number(hero2?.base_str) +
        Number(hero2?.base_agi)) /
        11
    );
    return [Math.floor(hero1Power), Math.floor(hero2Power)];
  };
  useEffect(() => {
    localStorage.setItem("battle", JSON.stringify(randomHero));
  }, [randomHero]);
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align="center">Result</DialogTitle>
        <DialogContent>
          <DialogContentText>
            That was an excellent match, both heroes deserve to be honored.
          </DialogContentText>
          <Typography align="center" variant="h4">
            {powerHero[0] > powerHero[1]
              ? "YOU WIN!!!"
              : powerHero[0] === powerHero[1]
              ? "YOU DRAW!!!"
              : "YOU LOSE!!!"}
          </Typography>
          <List sx={{ display: "flex", justifyContent: "space-between" }}>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "200px", height: "100px" }}
                src={`https://api.opendota.com${HEROES[randomHero.hero1]?.img}`}
              ></img>
              <Typography align="center" variant="p">
                Acttack point: {powerHero[0]}
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "200px", height: "100px" }}
                src={`https://api.opendota.com${HEROES[randomHero.hero2]?.img}`}
              ></img>
              <Typography align="center" variant="p">
                Acttack point: {powerHero[1]}
              </Typography>
            </ListItem>
          </List>
          <div
            style={{ display: "flex", justifyContent: "end", width: "100%" }}
          >
            <Button onClick={handleClose} size="small">
              {" "}
              Play again
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Typography variant="h2" sx={{ fontWeight: 700 }}>
        DOTA 2 FUNNY BATTLE
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            width: "400px",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "rgb(238, 238, 238)",
              width: "400px",
              height: "200px",
            }}
          >
            {!randomHero.hero1 || (
              <img
                style={{ width: "100%", height: "100%" }}
                src={`https://api.opendota.com${HEROES[randomHero.hero1]?.img}`}
              ></img>
            )}
          </Paper>
          <Button
            onClick={() => {
              const randomNumber = Math.floor(Math.random() * numberHeroes);
              setRandomHero({ ...randomHero, hero1: Number(randomNumber) });
            }}
            variant="contained"
            fullWidth
          >
            RANDOM
          </Button>
        </Box>
        <Button
          onClick={() => {
            if (randomHero.hero1 && randomHero.hero2) {
              setopen(true);
              const compare = handleCompare(
                HEROES[randomHero.hero1],
                HEROES[randomHero.hero2]
              );
              setPowerHero(compare);
            } else {
              toast.error("Please pick your hero and your enemy!!!");
            }
          }}
          variant="contained"
        >
          Fight
        </Button>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            width: "400px",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "rgb(238, 238, 238)",
              width: "400px",
              height: "200px",
            }}
          >
            {!randomHero.hero2 || (
              <img
                style={{ width: "100%", height: "100%" }}
                src={`https://api.opendota.com${HEROES[randomHero.hero2]?.img}`}
              ></img>
            )}
          </Paper>
          <Button
            onClick={() => {
              const randomNumber = Math.floor(Math.random() * numberHeroes);
              setRandomHero({ ...randomHero, hero2: randomNumber });
            }}
            variant="contained"
            fullWidth
          >
            RANDOM
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Battle;
