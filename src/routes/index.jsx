import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
