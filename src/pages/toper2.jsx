import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

// Import products from different pages
import productsPage1 from "./products";
import productsPage2 from "./products2";
import productsPage3 from "./products3";

// Flatten all imported products into a single array
const allProducts = [productsPage1, productsPage2, productsPage3];

const ProductSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    console.log("All Products Loaded:", allProducts);

    if (!searchQuery.trim()) {
      setResults([]); // Clear results if search is empty
      return;
    }

    const filtered = allProducts.filter(
      (product) =>
        product?.name?.toLowerCase().includes(searchQuery) // Ensure product has a name
    );

    console.log("Filtered Products:", filtered);
    setResults(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Top Bar with Logo, Search, and Icons */}
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
            value={query}
            onChange={(e) => {
              console.log("User Typed:", e.target.value);
              handleSearch(e);
            }}
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

      {/* Search Results */}
      <div className="mt-6 space-y-3">
        {results.length > 0 ? (
          results.map((product, index) => (
            <Link
              to={product.page}
              key={product.id || index} // Ensure each key is unique
              className="block p-4 rounded-lg shadow-md bg-white hover:bg-blue-50 transition"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{product.name}</span>
                <span className="text-blue-600 font-bold">${product.price}</span>
              </div>
            </Link>
          ))
        ) : query ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <p className="text-center text-gray-400">Start typing to search products.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
