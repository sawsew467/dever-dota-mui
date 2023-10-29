import { Route, Routes } from "react-router"
import Navigate from "./Components/Navigate"
import Home from "./Pages/Home"
import Heros from "./Pages/Heros"
import Battle from "./Pages/Battle"
import HeroDetail from "./Pages/HeroDetail"


function App() {
  return (
    <>
    <Navigate></Navigate>
    <Routes>
    <Route element={<Home></Home>} path='/'></Route>
    <Route element={<Home></Home>} path='/home'></Route>
    <Route element={<Heros></Heros>} path='/heros'></Route>
    <Route element={<Battle></Battle>} path='/battle'></Route>
    <Route element={<HeroDetail></HeroDetail>} path='/heros/*'></Route>
    </Routes>
    </>
  )
}

export default App
