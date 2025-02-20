import inno1 from "../assets/perfume1.jpg"
import inno2 from "../assets/perfume2.jpg"
import inno3 from "../assets/perfume3.jpg"
import inno4 from "../assets/perfume4.jpg"
import inno5 from "../assets/perfume5.jpg"
import inno6 from "../assets/perfume6.jpg"
//import Store from "./Store";
const clothes = [
  {
    id: 1,
    image: inno1,
    title: "Casual T-Shirt",
    price: "$20",
    rating: 4.5,
  },
  {
    id: 2,
    image: inno2,
    title: "Denim Jacket",
    price: "$50",
    rating: 4.7,
  },
  {
    id: 3,
    image: inno3,
    title: "Summer Dress",
    price: "$35",
    rating: 4.6,
  },
  {
    id: 1,
    image: inno4,
    title: "Casual T-Shirt",
    price: "$20",
    rating: 4.5,
  },
  {
    id: 2,
    image: inno5,
    title: "Denim Jacket",
    price: "$50",
    rating: 4.7,
  },
  {
    id: 3,
    image: inno6,
    title: "Summer Dress",
    price: "$35",
    rating: 4.6,
  },
];


const ClothesCollection = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {clothes.map((item) => (
        <div key={item.id} className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md opacity-75 hover:opacity-100" />
          <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
          <p className="text-gray-700">{item.price}</p>
          <p className="text-yellow-500">⭐ {item.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ClothesCollection;
