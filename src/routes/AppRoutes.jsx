import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Productspage from "../pages/Productspage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Productspage />} />
      <Route path="/products/:id" element={<Productspage />} />
    </Routes>
  );
};

export default AppRoutes;
