import {  Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
    
  

        <nav className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 text-xl font-semibold  shadow-md">
          <Link to="/" className="hover:text-pink-500 hover:border-b-2 border-pink-500">Home</Link>
          <Link to="/womens" className="hover:text-pink-500 hover:border-b-2 border-pink-500">Womens</Link>
         {/* <Link to="/womens" className="hover:text-pink-500 hover:border-b-2 border-pink-500">Womens</Link> */}
          <Link to="/perfume" className="hover:text-pink-500 hover:border-b-2 border-pink-500">Perfume</Link>
          <Link to="/hotoffers" className="hover:text-pink-500 hover:border-b-2 border-pink-500">Hot Offers</Link>
        </nav>

       
        
    </div>
  );
}

export default Navbar;
