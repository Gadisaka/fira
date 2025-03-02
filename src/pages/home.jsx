import Toper from "./toper";

import Footer from "./footer";
import Slider from "./slider";
import Navbar from "./navbar";
import Detail from "./detail";

function home() {
  return (
    <div>
      <Toper />
    
      <Navbar />
      <Slider />
      <Detail />
      <Footer />
    </div>
  )
}

export default home
