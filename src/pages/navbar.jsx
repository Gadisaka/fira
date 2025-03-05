import {  Link,useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
    
  

        <nav className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 text-xl font-semibold  shadow-md">
          <Link to="/" className="hover:text-pink-500 hover:border-b-2 border-pink-500">Home</Link>
          <Link to="/womens" className="hover:text-pink-500 hover:border-b-2 border-pink-500">Womens</Link>
          <Link to="/perfume" className="hover:text-pink-500 hover:border-b-2 border-pink-500">Perfume</Link>
          <Link to="/hotoffers" className="hover:text-pink-500 hover:border-b-2 border-pink-500">Hot Offers</Link>
          <button
          onClick={() => navigate("/cart")}
          className="w-1/10 bg-pink-700 text-white mt-6 py-3 rounded-lg cursor-pointer hover:bg-pink-900" >
        View Cart
      </button>
        </nav>

       
        
    </div>
  );
}

export default Navbar;
