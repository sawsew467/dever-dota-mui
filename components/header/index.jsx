import {
  Avatar,
  Container,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
const P = styled(Typography)(() => ({
  color: "#fff",
  fontSize: 16,
  fontWeight: 600,
}));
const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: 68.5,
        backgroundColor: "rgb(25, 118, 210)",
        margin: 0,
        boxShadow : "0px -15px 20px 10px #000"
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBlock: "auto",
          width: "100%",
          height: "100%",
          fontSize: 20,
          fontWeight: 800,
          color: "#fff",
        }}
      >
        <Typography sx={{}}>DOTA-MUI 2</Typography>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          <ListItemText sx={{ fontSize: 16, fontWeight: 600 }}>
            <Link to={"/home"}>
              <P>HOME</P>
            </Link>
          </ListItemText>
          <ListItemText>
            <Link to={"/heroes"}>
              <P>HEROES</P>
            </Link>
          </ListItemText>
          <ListItemText>
            <Link to={"/battle"}>
              <P>BATTLE</P>
            </Link>
          </ListItemText>
        </List>
        <Avatar>P</Avatar>
      </Container>
    </header>
  );
};

export default Header;
