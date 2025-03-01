import Products from './products3'
import Footer from './footer'
import Navbar from './navbar'
function Hotoffer() {
  return (
    <div>
    <Navbar />
    <h1 className='text-4xl text-pink-500 font-bold text-center p-10'>HOT <span className='text-black'>OFFERS</span></h1>
      <Products />
      <Footer />
    </div>
  )
}

export default Hotoffer
