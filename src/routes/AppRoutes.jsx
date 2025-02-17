import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Productspage from "../pages/Productspage";
import CategoriesPage from "../pages/CategoriesPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Productspage />} />
      <Route path="/products/:id" element={<Productspage />} />
      <Route path="/categories/" element={<CategoriesPage />} />
    </Routes>
  );
};

export default AppRoutes;
