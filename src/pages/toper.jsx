import { FaFacebook, FaInstagram, FaTwitter,  FaTelegram } from "react-icons/fa";

function Toper() {
  return (
    <div className="flex flex-wrap items-center justify-between py-2 px-4 border-b-2 border-gray-200 text-sm sm:text-base">
      {/* Social Media Icons */}
      <div className="flex gap-3 text-lg sm:text-xl cursor-pointer">
       <a href="https://web.facebook.com/ujee.man"> <FaFacebook color="#1877F2"  /></a>
        <a href="https://www.instagram.com/fira_16____/" ><FaInstagram color="#E4405F" /></a>
        <a href="https://x.com/MilkiKi171700"><FaTwitter color="#1DA1F2" /></a>
        <a href="https://t.me/@Fl16f16"><FaTelegram color="#1877F2" /></a>
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
