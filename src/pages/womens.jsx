import Products from './products'
import Footer from './footer'
import Navbar from './navbar'
function womens() {
  return (
    <div>
    <Navbar />
    <h1 className='text-3xl text-pink-500 font-bold text-center p-10'><span className='text-black'>WOMENS</span> COLLECTION</h1>
      <Products />
      <Footer />
    </div>
  )
}

export default womens
