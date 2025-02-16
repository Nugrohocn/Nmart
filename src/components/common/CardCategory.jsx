const CardCategory = ({ kategori }) => {
  return (
    <div className="flex justify-center p-1">
      <div className="px-2 py-2 flex justify-center text-sm items-center w-[200px] md:w-[140px] rounded-full shadow-lg hover:bg-blue-500 hover:text-white hover:border-none capitalize font-semibold ">
        <a href="#" className="">
          {kategori}
        </a>
      </div>
    </div>
  );
};

export default CardCategory;
