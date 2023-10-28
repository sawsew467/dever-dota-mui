import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Heroes from "./pages/Heroes"
import HeroDetail from "./pages/HeroDetail"
import Battle from "./pages/Battle"

function App() {
  return (
    <Routes>
      <Route element={<Home></Home>} path="/"></Route>
      <Route element={<Home></Home>} path="/home"></Route>
      <Route element={<Heroes></Heroes>} path="/heroes"></Route>
      <Route element={<HeroDetail></HeroDetail>} path="/herodetail"></Route>
      <Route element={<Battle></Battle>} path="/battle"></Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default App