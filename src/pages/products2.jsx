import { useContext } from "react";
import { CartContext } from "../pages/CartContext"; 

import inno1 from "../assets/perfume1.jpg"
import inno2 from "../assets/perfume2.jpg"
import inno3 from "../assets/perfume3.jpg"
import inno4 from "../assets/perfume4.jpg"
import inno5 from "../assets/perfume5.jpg"
import inno6 from "../assets/perfume6.jpg"


//import Store from "./Store";
const productsPage2 = [
   { id: 1, image: inno1, name: "Black Opium", price: 20, rating: 4.5 },
    { id: 2, image: inno2, name: "bella perfume", price: 50, rating: 4.7 },
    { id: 3, image: inno3, name: "Flower", price: 35, rating: 4.6 },
    { id: 4, image: inno4, name: "Smell", price: 20, rating: 4.5 },
    { id: 5, image: inno5, name: "channel", price: 50, rating: 4.7 },
    { id: 6, image: inno6, name: "N5 ", price: 35, rating: 4.6 },
];


const ClothesCollection = () => {
  const { addToCart } = useContext(CartContext);


  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productsPage2.map((item) => (
        <div key={item.id} className="border border-gray-300 p-4 rounded-lg">
          <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
          <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
          <p className="text-gray-700">${item.price}</p>
          <p className="text-yellow-500">⭐ {item.rating}</p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(item)}
            className="w-1/3 bg-pink-700 text-white mt-4 py-2 rounded cursor-pointer hover:bg-gray-600"
          >
            Add to Cart
          </button>
        </div>
      ))}

      
     
    </div>
  );
};

export default ClothesCollection;
