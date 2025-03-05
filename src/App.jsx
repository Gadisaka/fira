import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Womens from "./pages/womens";
//mport Womens from "./pages/womens";
import Perfume from "./pages/perfume";
import Hotoffers from "./pages/hotoffers";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./pages/CartContext";
import { ProductProvider } from "./pages/productcontext";
import AdminPage from "./pages/adminpage";
import Policy from "./pages/policy";
function App() {
  return (
   
  <CartProvider>
     <ProductProvider>
    
    <Router>
      <div className="">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/hotoffers" element={<Hotoffers />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </div>
    </Router>
    </ProductProvider>
    </CartProvider>

    
  );
}

export default App;
