import { CgMenu, CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    <div className="relative flex justify-center items-center w-full md:w-[507px] h-[48px]">
      {/* Icon di dalam Input */}
      <CgSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-xl" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search essentials, groceries and more..."
        className="w-full rounded-lg p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-blue-100 shadow-sm text-slate-500"
      />

      <a href="">
        <CgMenu className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-xl" />
      </a>
    </div>
  );
};

export default Search;
