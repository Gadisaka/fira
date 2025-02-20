import bgImage from "../assets/footer.jpg";

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-[50vh] flex flex-col justify-between p-8 sm:p-12 md:p-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-center text-white text-lg sm:text-xl font-light cursor-pointer gap-8">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-pink-500">INNOO COLLECTION</h1>
          <h1>Mens</h1>
          <h1>Womens</h1>
          <h1>Perfume</h1>
          <h1>Hot Offers</h1>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-bold text-pink-500">About INNOO</h1>
          <h1>Privacy Policy</h1>
          <h1>Terms and Conditions</h1>
          <h1>Return Policy</h1>
          <h1>Shipping Policy</h1>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-bold text-pink-500">Follow Us</h1>
          <h1>Facebook</h1>
          <h1>Instagram</h1>
          <h1>Twitter</h1>
          <h1>YouTube</h1>
        </div>
      </div>
      <h1 className="text-white text-center text-sm sm:text-base pt-6">
        © 2025 Collect My Clothes - the clothes collection service provided by Firafis Recycling Ltd | Privacy
      </h1>
    </div>
  );
}
