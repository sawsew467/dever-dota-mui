// import { useState } from 'react'
import Home from "./Pages/Home/index.jsx"
import { Route, Routes } from 'react-router-dom'
import HeroPages from './Pages/HeroPages'
import Battle from "./Pages/Battle/index.jsx";
import HeroDetail from "./Pages/HeroDetail/index.jsx";
function App() {
  return (
   <Routes>
      <Route element={<Home></Home>} path="/"></Route>
      <Route element={<Home></Home>} path="/home"></Route>
      <Route element={<HeroPages></HeroPages>} path="/heroPages"></Route>
      <Route element={<Battle></Battle>} path="/battle"></Route>
      <Route element={<HeroDetail></HeroDetail>} path="/herodetail"></Route>
    </Routes>
  );
}

export default App
