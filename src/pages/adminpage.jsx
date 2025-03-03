import { useState, useContext } from "react";
import { ProductContext } from "./productcontext";

const AdminPage = () => {
  const { addProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({ name: "", price: "", image: "", rating: "", category: "womens" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.image || !product.rating) {
      return alert("All fields are required!");
    }

    addProduct({ ...product, id: Date.now(), price: parseFloat(product.price), rating: parseFloat(product.rating) });
    setProduct({ name: "", price: "", image: "", rating: "", category: "womens" });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛠 Admin Panel - Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Product Name" className="w-full p-2 border rounded"
          value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />

        <input type="number" placeholder="Price" className="w-full p-2 border rounded"
          value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />

        <input type="text" placeholder="Image URL" className="w-full p-2 border rounded"
          value={product.image} onChange={(e) => setProduct({ ...product, image: e.target.value })} />

        <input type="number" placeholder="Rating (1-5)" className="w-full p-2 border rounded"
          value={product.rating} onChange={(e) => setProduct({ ...product, rating: e.target.value })}
          min="1" max="5" />

        <select className="w-full p-2 border rounded"
          value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })}>
          <option value="womens">Womens Collection</option>
          <option value="perfumes">Perfume Collection</option>
          <option value="hot-offers">Hot Offers</option>
        </select>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
