import Search from "../common/Search";
import { CgMenu, CgShoppingCart, CgUser } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex items-center w-full h-16 shadow-xl bg-white px-5">
      {/* Bagian Kiri - Brand */}
      <div className="flex items-center">
        <h2 className="text-xl font-bold text-blue-500">Nmart</h2>
      </div>

      {/* Bagian Tengah - Search (Hidden di Mobile) */}
      <div className="hidden md:flex flex-1 justify-center">
        <Search />
      </div>

      {/* Bagian Kanan - User & Cart */}
      <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center">
          <CgUser className="text-blue-600 text-2xl" />
          <h1 className="text-md font-base ml-1 hidden md:block">Nugroho</h1>
        </div>

        <div className="flex items-center">
          <CgShoppingCart className="text-blue-600 text-2xl" />
          <h1 className="text-md font-base ml-1 hidden md:block">Cart</h1>
        </div>

        {/* Menu Mobile */}
        <button className="md:hidden">
          <CgMenu className="text-blue-600 text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
