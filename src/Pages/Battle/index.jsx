import { Box, Button, Container, Typography } from "@mui/material";
import { HEROES } from "../../DATA/heroes";
import { useEffect, useState } from "react";
import { getImageUrl } from "../../assets/utils/img";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";



function Battle() {
  const [random, setRandom] = useState({
    player1: JSON.parse(localStorage.getItem("player1")) ??  "",
    player2: JSON.parse(localStorage.getItem("player2")) ?? "",
  });
  const random1 = () => {
    setRandom({
      ...random,
      player1: HEROES[Math.floor(Math.random() * HEROES.length)],
    });
  };
  const random2 = () => {
    setRandom({
      ...random,
      player2: HEROES[Math.floor(Math.random() * HEROES.length)],
    });
  };
  console.log(random.player1);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if  (random.player1 === "" || random.player2 === ""){
      toast.error("Please pick your hero and enemy hero")
    } else {
      setOpen(true)
    }
  };

  const handleClose = () => {
    setOpen(false);
    setRandom({
      ...random,
      player1:'',
      player2: '',
    })
  };

  useEffect(() => {
    localStorage?.setItem("player1", JSON.stringify(random.player1));
  }, [random.player1]);
  useEffect(() => {
    localStorage?.setItem("player2", JSON.stringify(random.player2));
  }, [random.player2]);
  console.log();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 20,
          backgroundImage: "url('/src/Image/war.jpg')",
          minHeight: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 600, color: "#ff4242", fontFamily: "initial" }}>
          {" "}
          DOTA 2 BATTLE
        </Typography>

        <Box sx={{ display: "flex", marginTop: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {random.player1.length === 0 ? (
              <>
                <Box
                  sx={{
                    width: 400,
                    height: 225,
                    backgroundColor: "rgb(133 123 123)",
                    opacity: 0.8,
                  }}
                ></Box>
                <></>
              </>
            ) : (
              <img src={getImageUrl(random.player1)} width={400} />
            )}
            <></>
            <Button variant="contained" sx={{ marginTop: 2 }} onClick={random1}>
              Random
            </Button>
          </Box>
          <></>

          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{ margin: 15 }}
          >
            FIGHT
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
          >
            <DialogTitle sx={{display: "flex", justifyContent: "center"}}>
              {"RESULT"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText  sx={{display: "flex", justifyContent: "center"}}>
              That was an excellent match, both heroes deserve to be honored
              </DialogContentText>
            </DialogContent>
            <Typography sx={{display: "flex", justifyContent: "center"}} variant="h4">{random.player1.base_attack - random.player2.base_attack > 0 ? <p>YOU WIN</p> : random.player1.base_attack - random.player2.base_attack === 0 ? <p>DRAW</p> : <p>YOU LOSE</p> }</Typography>
            <Box sx={{display: "flex", justifyContent: "space-between", paddingTop: 3}}>
                <Container sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src={getImageUrl(random.player1)} width={250} style={{paddingBottom: 5}}/>
                <Typography>Attack point: {random.player1.base_attack}</Typography>
                </Container>
                <Container sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src={getImageUrl(random.player2)}  width={250} style={{paddingBottom: 5}}/>
                <Typography>Attack point: {random.player2.base_attack}</Typography>
                </Container>
            </Box>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Play Agian
              </Button>
            </DialogActions>
          </Dialog>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {random.player2.length === 0 ? (
              <>
                <Box
                  sx={{
                    width: 400,
                    height: 225,
                    backgroundColor: "rgb(133 123 123)",
                    opacity: 0.8,
                  }}
                ></Box>
                <></>
              </>
            ) : (
              <img src={getImageUrl(random.player2)} width={400} />
            )}
            <></>
            <Button variant="contained" sx={{ marginTop: 2 }} onClick={random2}>
              Random
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Battle;
