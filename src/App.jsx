
import Home from './pages/Home'
import Heroes from './pages/Heroes'
import Battle from './pages/Battle'
import { Route, Routes } from 'react-router'
import Header from './pages/Header'
import HeroDetail from './pages/HeroDetail'

function App() {

  return (
    
    <>
    <Header></Header>
    <Routes>
      <Route element={<Home></Home>} path='/'></Route>
      <Route element={<Home></Home>} path='/home'></Route>
      <Route element={<Heroes></Heroes>} path='/heroes'></Route>
      <Route element={<Battle></Battle>} path='/battle'></Route>
      <Route element={<HeroDetail></HeroDetail>} path='/heroes/:heroname'></Route>
    </Routes>
    </>
  )
}

export default App
