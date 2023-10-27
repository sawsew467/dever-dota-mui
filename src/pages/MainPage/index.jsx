import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Heroes from "../Heroes";

import NotFound from "../NotFound";
import Battle from "../Battle";
function MainPage() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/home"} element={<Home />} />
      <Route path="/heroes" element={<Heroes />} />
      <Route path="/battle" element={<Battle />} />
      <Route path="*" element={<NotFound></NotFound>} />
    </Routes>
  );
}
export default MainPage;
