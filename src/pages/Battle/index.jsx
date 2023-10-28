import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { HEROES } from "../../data/heroes";
import { toast } from "react-toastify";

function Battle() {
  const getStoredHero = () =>
    JSON.parse(localStorage.getItem("hero")) ?? {
      img: "",
      base_attack: null,
    };
  const getStoredEnemy = () =>
    JSON.parse(localStorage.getItem("enemy")) ?? {
      img: "",
      base_attack: null,
    };

  const [hero1, setHero1] = useState(
    JSON.parse(localStorage.getItem("hero")) ?? {
      img: "",
      base_attack: null,
    }
  );
  const [hero2, setHero2] = useState(
    JSON.parse(localStorage.getItem("enemy")) ?? {
      img: "",
      base_attack: null,
    }
  );

  const shuffleArray = (array) => {
    const newArray = [...array]; // Tạo một bản sao của mảng gốc
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray; // Trả về mảng đã được xáo trộn
  };
  const shuffleHero = shuffleArray(HEROES);
  const handleRandom1 = () => {
    setHero1(shuffleHero[0]);
  };

  const handleRandom2 = () => {
    setHero2(shuffleHero[0]);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (hero1.img.trim() === "" || hero2.img.trim() === "") {
      setOpen(false);
      toast.error("Please pick your hero and your enemy!!!");
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.removeItem("hero");
    localStorage.removeItem("enemy");
    setHero1({
      img: "",
      base_attack: null,
    });
    setHero2({
      img: "",
      base_attack: null,
    });
  };

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  useEffect(() => {
    const result1 = JSON.stringify(hero1, getCircularReplacer());
    localStorage.setItem("hero", result1);
  }, [hero1]);
  useEffect(() => {
    const result2 = JSON.stringify(hero2, getCircularReplacer());
    localStorage.setItem("enemy", result2);
  }, [hero2]);
  console.log(hero1.base_attack);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 350,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "4px",
  };

  const styleCenter = {
    textAlign: "center",
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{
              textAlign: "center",
              fontSize: "1.25rem",
            }}
          >
            Result
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center", fontSize: "0.9rem" }}
          >
            That was an excellent match, both heroes deserve to be honored.
          </Typography>
          {hero1.base_attack > hero2.base_attack ? (
            <Typography sx={styleCenter}>YOU WIN!!!</Typography>
          ) : (
            hero1.base_attack = hero2.base_attack ? (
              <Typography sx={styleCenter}>YOU DRAW!!!</Typography>
            ) : (
              <Typography sx={styleCenter}>YOU LOSE!!!</Typography>
            )
          )}

          <Stack
            direction="row"
            spacing={2}
            sx={{
              width: "100%",
              marginTop: 2,
            }}
          >
            <Stack direction="column">
              <Box
                component="img"
                src={"https://api.opendota.com" + hero1.img}
                sx={{
                  objectFit: "cover",
                  maxWidth: "100%",
                }}
              ></Box>
              <Typography
                sx={{
                  textAlign: "center",
                }}
              >
                Attack point: {hero1.base_attack}
              </Typography>
            </Stack>
            <Stack direction="column">
              <Box
                component="img"
                src={"https://api.opendota.com" + hero2.img}
                sx={{
                  objectFit: "cover",
                  maxWidth: "100%",
                }}
              ></Box>
              <Typography
                sx={{
                  textAlign: "center",
                }}
              >
                Attack point: {hero2.base_attack}
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
              width: "100%",
              display: "flex",
            }}
          >
            <Button
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              onClick={handleClose}
            >
              Play Again
            </Button>
          </Box>
        </Box>
      </Modal>
      <Header></Header>
      <Stack
        spacing={5}
        sx={{
          minWidth: "100vw",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            lineHeight: "1.167",
            fontWeight: 700,
            fontSize: "3rem",
          }}
        >
          DOTA 2 FUNNY BATTLE
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-around"
          sx={{
            width: "100%",
          }}
        >
          <Box>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={
                    hero1.img === ""
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/339px-Grey_background.jpg"
                      : "https://api.opendota.com" + hero1.img
                  }
                  alt="green iguana"
                  sx={{
                    width: 400,
                    height: 200,
                  }}
                />
              </CardActionArea>
            </Card>
            <Button
              fullWidth
              variant="contained"
              sx={{
                marginTop: 1,
              }}
              onClick={handleRandom1}
            >
              RANDOM
            </Button>
          </Box>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              height: "16%",
              alignSelf: "center",
            }}
            onClick={handleOpen}
          >
            FIGHT
          </Button>
          <Box>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={
                    hero2.img === ""
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/339px-Grey_background.jpg"
                      : "https://api.opendota.com" + hero2.img
                  }
                  sx={{
                    width: 400,
                    height: 200,
                  }}
                />
              </CardActionArea>
            </Card>
            <Button
              fullWidth
              variant="contained"
              sx={{
                marginTop: 1,
              }}
              onClick={handleRandom2}
            >
              RANDOM
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default Battle;
