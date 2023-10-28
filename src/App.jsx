import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./pages/Heroes";
import Battle from "./pages/Battle";
import HeroDetail from "./pages/HeroDetail";

function App() {
  return (
      <Routes>
        <Route element={<Home></Home>} path="/home"></Route>
        <Route element={<Home></Home>} path="/"></Route>
        <Route element={<Hero></Hero>} path="/heroes"></Route>
        <Route element={<Battle></Battle>} path="/battle"></Route>
        <Route element={<HeroDetail></HeroDetail>} path="/heroes/:id"></Route>
      </Routes>
  );
}

export default App;
