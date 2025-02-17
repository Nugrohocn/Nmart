import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import DetailProduct from "../components/layout/DetailProduct";

const ProductPage = () => {
  const params = useParams();
  return (
    <>
      <Navbar />
      <DetailProduct />
    </>
  );
};

export default ProductPage;
