import Product from './products2'
import Footer from './footer'
import Navbar from './navbar'

function perfume() {
  return (
    <div>
       <Navbar />
      <h1 className="text-pink-500 text-3xl font-bold text-center p-10">PERFUME <span className='text-black'>COLLECTION</span></h1>
      <Product />
      <Footer />
    </div>
  )
}

export default perfume
