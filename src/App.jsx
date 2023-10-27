import { useState } from "react";
import "./App.css";
import Header from "../components/header";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/heroes" element={<Home />} />
        <Route path="/battle" element={<Home />} />
        <Route path="/" element={navigate("/home")} />

      </Routes>
    </>
  );
}

export default App;
