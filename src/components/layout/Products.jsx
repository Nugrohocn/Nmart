import CardProduct from "../common/CardProduct";
import { getDataProducts } from "../../services/api";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDataProducts(setProducts);
  }, []);

  return (
    <div className="container p-4">
      <div>
        <h1 className="text-slate-700">
          Grab the best deal of{" "}
          <span className="text-blue-500 font-bold">Products</span>
        </h1>
        <div className="w-16 h-1 bg-blue-500 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {products.map((product) => (
          <CardProduct
            images={product.image}
            price={product.price}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>

      <div className="flex flex-col items-end mx-4">
        <h1 className="text-blue-500 font-semibold mt-4">View All</h1>
        <div className="w-16 h-1 bg-blue-500 mt-2 self-end"></div>
      </div>
    </div>
  );
};

export default Products;
