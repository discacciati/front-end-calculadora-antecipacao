import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "../pages/errors";

function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/errors" element={<ErrorPage />} />
    </Routes>
  );
}

export default RoutesApp;
