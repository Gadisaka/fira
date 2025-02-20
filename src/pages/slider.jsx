import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/inno1.jpg";
import image2 from "../assets/inno2.jpg";
import image3 from "../assets/inno3.jpg";
import image4 from "../assets/inno4.jpg";
import image5 from "../assets/inno5.jpg";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      {/* Title */}
      <h1 className="text-center font-bold text-2xl sm:text-3xl mb-6">
        <span className="text-pink-500">INNOO</span> COLLECTION
      </h1>

      {/* Slider */}
      <div className="w-11/12 sm:w-3/4 mx-auto">
        <Slider {...settings}>
          {[image1, image2, image3, image4, image5].map((image, index) => (
            <div key={index} className="p-4">
              <img src={image} alt={`image ${index + 1}`} className="w-full rounded-lg shadow-md" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
