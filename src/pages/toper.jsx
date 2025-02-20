import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Toper() {
  return (
    <div className="flex flex-wrap items-center justify-between py-2 px-4 border-b-2 border-gray-200 text-sm sm:text-base">
      {/* Social Media Icons */}
      <div className="flex gap-3 text-lg sm:text-xl cursor-pointer">
        <FaFacebook color="#1877F2" />
        <FaInstagram color="#E4405F" />
        <FaTwitter color="#1DA1F2" />
        <FaLinkedin color="#0077B5" />
        <FaYoutube color="#FF0000" />
      </div>

      {/* Free Shipping */}
      <div className="text-center text-xs sm:text-sm font-medium py-2">
        <h1>FREE SHIPPING THIS WEEK - ORDER OVER $55</h1>
      </div>

      {/* Currency & Language Selection */}
      <div className="flex gap-2">
        <select className="  px-2 py-1">
          <option>USD</option>
          <option>BIRR</option>
        </select>
        <select className=" px-2 py-1">
          <option>ENG</option>
          <option>አማርኛ</option>
        </select>
      </div>
    </div>
  );
}

export default Toper;
