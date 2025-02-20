import Toper from "./toper";
import Toper2 from "./toper2";
import Footer from "./footer";
import Slider from "./slider";
import Navbar from "./navbar";
import Detail from "./detail";

function home() {
  return (
    <div>
      <Toper />
      <Toper2 />
      <Navbar />
      <Slider />
      <Detail />
      <Footer />
    </div>
  )
}

export default home
