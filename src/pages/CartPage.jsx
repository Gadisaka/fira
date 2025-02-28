import { useContext } from "react";
import { CartContext } from "../pages/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
    <Navbar />
    <div className="p-6 max-w-3xl mx-auto">
    
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b py-3">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>${item.price} each</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <p className="px-4">{item.quantity}</p>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  +
                </button>
              </div>
              <p className="font-bold">${item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Go Back to Products */}
      <button
        onClick={() => navigate("/home")}
        className="w-full bg-gray-700 text-white mt-6 py-2 rounded-lg"
      >
        Continue Shopping
      </button>
    </div>
    </div>
  );
};

export default CartPage;
