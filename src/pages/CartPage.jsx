import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total cost
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
    <Navbar />
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
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

          {/* Show Total Cost */}
          <div className="mt-6 text-lg font-bold text-right">
            Total Cost: <span className="text-green-600">${totalCost.toFixed(2)}</span>
          </div>
        </>
      )}

      {/* Buttons Section */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate("/home")}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-pink-800"
        >
          Continue Shopping
        </button>

        <a
          href="https://t.me/@Fl16f16" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-pink-800"
        >
          Buy with Telegram
        </a>
      </div>
    </div>
    </div>
  );
};

export default CartPage;
