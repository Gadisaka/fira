import image1 from "../assets/inno11.jpg";
import image2 from "../assets/inno14.jpg";
import image3 from "../assets/inno17.jpg";
import image4 from "../assets/inno9.jpg";

import { useNavigate } from "react-router-dom";


export default function AboutUs() {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gray-100">
        
        {/* Left Side - Image Collection */}
        <div className="w-1/2 md:w-1/2 grid grid-cols-2 gap-4 p-4">
          <img src={image1} alt= "Gallery 1" className="rounded-lg shadow-md w-[300px]" />
          <img src={image2} alt="Gallery 2" className="rounded-lg shadow-md w-[300px] " />
          <img src={image3} alt="Gallery 3" className="rounded-lg shadow-md w-[300px]" />
          <img src={image4} alt="Gallery 4" className="rounded-lg shadow-md w-[300px]" />
        </div>
  
        {/* Right Side - About / Marketing */}
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-pink-500">Why Choose Us?</h2>
          <p className="mt-4 text-gray-700">
            INNOO is committed to providing high-quality fashion and beauty products. We stand out by offering:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔ Premium materials & craftsmanship</li>
            <li>✔ Fast & reliable shipping worldwide</li>
            <li>✔ 24/7 customer support</li>
            <li>✔ Exclusive deals & discounts</li>
            <li>✔ Eco-friendly & sustainable products</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-black cursor-pointer" onClick={() => navigate("/womens")}>
            Shop Now
          </button>
        </div>
  
      </div>
    );
  }
  