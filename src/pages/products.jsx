import { useState } from "react";
import inno1 from "../assets/inno1.jpg";
import inno2 from "../assets/inno2.jpg";
import inno3 from "../assets/inno3.jpg";
import inno4 from "../assets/inno4.jpg";
import inno5 from "../assets/inno5.jpg";
import inno6 from "../assets/inno6.jpg";


const productsPage1 = [
  { id: 1, image: inno1, name: "Casual T-Shirt", price: "$20", rating: 4.5 },
  { id: 2, image: inno2, name: "Denim Jacket", price: "$50", rating: 4.7 },
  { id: 3, image: inno3, name: "Summer Dress", price: "$35", rating: 4.6 },
  { id: 4, image: inno4, name: "Casual T-Shirt", price: "$20", rating: 4.5 },
  { id: 5, image: inno5, name: "Denim Jacket", price: "$50", rating: 4.7 },
  { id: 6, image: inno6, name: "Summer Dress", price: "$35", rating: 4.6 },
];

const ClothesCollection = () => {
  const [counts, setCounts] = useState({});

  const handleIncrease = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0),
    }));
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
      {productsPage1.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-60 object-cover rounded-md opacity-75 hover:opacity-100"
          />
          <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
          <p className="text-gray-700">{item.price}</p>
          <p className="text-yellow-500">⭐ {item.rating}</p>
          <div className="flex justify-between items-center mt-4 px-10">
            <button
              onClick={() => handleDecrease(item.id)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              -
            </button>
            <p className="text-lg font-semibold">{counts[item.id] || 0}</p>
            <button
              onClick={() => handleIncrease(item.id)}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClothesCollection;
