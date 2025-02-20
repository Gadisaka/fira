import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Womens from "./pages/womens";
//mport Womens from "./pages/womens";
import Perfume from "./pages/perfume";
import Hotoffers from "./pages/hotoffers";

function App() {
  return (
   
  
    
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womens" element={<Womens />} />
          {/* <Route path="/womens" element={<Womens />} /> */}
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/hotoffers" element={<Hotoffers />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;
