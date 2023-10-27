import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import MainPage from "./MainPage";

function AppRoutes() {
  return (
    <Routes>
      {/* <Route
        path="/*"
        element={isLoggedIn() ? <MainPage></MainPage> : <GuestPage />}
      /> */}
      <Route path="/*" element={<MainPage></MainPage>}></Route>
      <Route path="404" element={<NotFound />} />
    </Routes>
  );
}
export default AppRoutes;
