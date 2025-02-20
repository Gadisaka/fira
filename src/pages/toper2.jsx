import { FaSearch, FaUser, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Toper2() {
  return (
    <div className="flex flex-wrap items-center justify-between py-4 px-4 border-b-2 border-gray-200">
      {/* Logo Section */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">INNOO</h1>
      </div>

      {/* Search Bar */}
      <div className="hidden sm:flex items-center border-2 border-gray-200 rounded-md w-full sm:w-[400px] md:w-[500px] lg:w-[650px] px-2">
        <input
          type="text"
          placeholder="Search what you want"
          className="w-full p-2 outline-none text-sm"
        />
        <FaSearch className="text-gray-400 cursor-pointer" />
      </div>

      {/* Icons */}
      <div className="flex gap-4 text-lg">
        <FaUser className="cursor-pointer" />
        <FaHeart className="cursor-pointer" />
        <HiOutlineShoppingBag className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Toper2;
