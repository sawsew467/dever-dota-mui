import React from "react";
import "./App.css";
import Header from "../components/header";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../components/home";
import Heroes from "../components/heroes";
import EachHero from "../components/each_hero";
import { Breadcrumbs, Container, Link } from "@mui/material";
import Battle from "../components/battle";
import axios from "axios";

function App() {
  const location = useLocation();
  const [HEROES, setHEROES] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const get = async () => {
    await axios.get("https://api.opendota.com/api/heroStats").then((res) => {
      setLoading(false);
      setHEROES(res.data);
    });
  };
  React.useEffect(() => {
    get();
  }, []);

  return (
    <>
      <Header></Header>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          marginTop: "80px",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          {location.pathname.split("/").map((url, index) => (
            <Link
              sx={{ textTransform: "capitalize" }}
              key={index}
              underline="hover"
              href={url === "" ? "/home" : `/${url}`}
              color={
                index === location.pathname.split("/").length - 1
                  ? "text.primary"
                  : "inherit"
              }
            >
              {url === "" ? "DOTA 2-MUI" : url.replaceAll("%20", " ")}
            </Link>
          ))}
        </Breadcrumbs>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/heroes"
            element={<Heroes HEROES={HEROES} isLoading={isLoading} />}
          />
          <Route
            path="/heroes/*"
            element={<EachHero p={1} HEROES={HEROES} isLoading={isLoading} />}
          />
          <Route
            path="/battle"
            element={<Battle HEROES={HEROES} isLoading={isLoading} />}
          />
          <Route path="/" element={<Navigate to="home" replace />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
