import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDataProducts } from "../../services/api";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getDataProducts((data) => {
      const selectedProduct = data.find((item) => item.id === parseInt(id));
      setProduct(selectedProduct);
    });
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-bold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-10">
      <div className="w-full h-96 overflow-hidden">
        <img
          src={product.image}
          alt="Samsung S23 Ultra"
          className="w-full h-full object-contain md:object-contain"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">${product.price}</h1>
          <h2 className="text-lg text-yellow-500 font-semibold flex items-center">
            {product.rating.rate} / 5
          </h2>
        </div>

        <h2 className="text-2xl font-semibold mt-2">{product.title}</h2>
        <h3 className="text-lg text-gray-800 capitalize">
          Category: {product.category}
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          {product.description}
        </p>

        <button className="w-full bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-lg text-white p-3 mt-6 text-lg font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;
