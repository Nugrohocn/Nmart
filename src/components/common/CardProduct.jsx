import { Link, useParams } from "react-router-dom";

const CardProduct = ({ id, images, title, price, description }) => {
  return (
    <div className="h-[450px] mt-4 shadow-xl p-4 flex flex-col justify-between">
      <div>
        <Link to={`/products/${id}`}>
          <div className="w-full h-40">
            <img
              src={images}
              alt="samsung"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
        <h1 className="mt-2 font-bold text-2xl">${price}</h1>
        <h1 className="mt-2 font-bold text-lg">
          {title.length > 20 ? title.slice(0, 20) : title}
        </h1>
        <p className="text-sm text-gray-600 flex-grow mt-2">
          {description.length > 100
            ? description.slice(0, 150) + "..."
            : description}
        </p>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold rounded-md p-2 mt-4"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default CardProduct;
