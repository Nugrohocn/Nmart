import CardProduct from "../common/CardProduct";

const Products = () => {
  return (
    <div className="container p-4">
      {/* Title Section */}
      <div>
        <h1 className="text-slate-700">
          Grab the best deal of{" "}
          <span className="text-blue-500 font-bold">Smartphones</span>
        </h1>
        <div className="w-16 h-1 bg-blue-500 mt-2"></div>
      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>

      {/* View All */}
      <div className="flex flex-col items-end mx-4">
        <h1 className="text-blue-500 font-semibold mt-4">View All</h1>
        <div className="w-16 h-1 bg-blue-500 mt-2 self-end"></div>
      </div>
    </div>
  );
};

export default Products;
