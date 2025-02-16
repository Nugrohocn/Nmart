const CardProduct = () => {
  return (
    <div className="h-auto mt-4 shadow-xl p-4 flex flex-col">
      <div className="w-full h-40">
        <img
          src="images/samsung.jpg"
          alt="samsung"
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="mt-2 font-bold text-lg">Samsung S23</h1>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        ratione.
      </p>
    </div>
  );
};

export default CardProduct;
