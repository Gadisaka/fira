import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Womens from "./pages/womens";
//mport Womens from "./pages/womens";
import Perfume from "./pages/perfume";
import Hotoffers from "./pages/hotoffers";
import Register from './pages/register';
import Login from "./pages/login";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./pages/CartContext";

function App() {
  return (
   
  <CartProvider>
    
    <Router>
      <div className="">
      
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/hotoffers" element={<Hotoffers />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>

    </CartProvider>

    
  );
}

export default App;
