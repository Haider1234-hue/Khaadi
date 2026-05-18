import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const heroSlides = [
  {
    id: 1,
    img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwad4c8718/images/homepage/0.0-BLOOM-desktop-banner-1920x700.jpg',
    link: '/products'
  },
  {
    id: 2,
    img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw1d664878/images/0.0.0-05-11-2026-desktop-banner-1920x700.jpg',
    link: '/products'
  },
  {
    id: 3,
    img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw6e728102/0.0-0.0-0.0-0.0-0.0-0.01-5-26-desktop-banner-1920x700.jpg',
    link: '/products'
  },
  {
    id: 4,
    img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw858baa20/images/homepage/0.0-B8-desktop-banner-1920x700.jpg',
    link: '/products'
  },
]

const topPicks = [
  { id: 1, img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw471c65d8/0.0-0.0-0.0-0.0-0.0-0.0-0.012-5-26-Top-picks-secondary-Desktop-banner-2.jpg', link: '/products' },
]

const topPickProducts = [
  {
    id: 1,
    category: 'Printed | Ripple Crinkle',
    name: 'Abstract Cotton Kurta',
    price: 1200,
    oldPrice: 4000,
    sale: '70% OFF',
    tag: 'Exclusively Online',
    img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwfbc1ac4f/images/hi-res/25-11-12s1-02ta_multi_1.jpg?sw=400&sh=600',
  },
  {
    id: 2,
    category: 'Embroidered | Cotton Dobby',
    name: 'Floral V-Neck Kurta',
    price: 3480,
    oldPrice: 5800,
    sale: '40% OFF',
    tag: 'Just In',
    img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw53c40bcb/images/hi-res/1-26-117-a-e_multi_1.jpg?sw=400&sh=600',
  },
  {
    id: 3,
    category: 'Embroidered | Textured Cotton',
    name: 'Floral Longline Kurta',
    price: 7500,
    oldPrice: null,
    sale: null,
    tag: null,
    img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw5a4534e8/images/hi-res/1-26-146-a-c_multi_1.jpg?sw=400&sh=600',
  },
  {
    id: 4,
    category: 'Embroidered | Lawn',
    name: 'Longline Lawn Kurta',
    price: 6000,
    oldPrice: null,
    sale: null,
    tag: 'New',
    img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw2a5d1f31/images/hi-res/1-26-114-a-f_multi_1.jpg?sw=400&sh=600',
  },
  {
    id: 5,
    category: 'Printed | Khaddar',
    name: 'Fabrics 3 Piece',
    price: 2700,
    oldPrice: 4500,
    sale: '40% OFF',
    tag: 'Exclusively Online',
    img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw29feed75/images/hi-res/1-26-112-a-d_multi_1.jpg?sw=400&sh=600',
  },
  {
    id: 6,
    category: 'Printed | Raw Silk',
    name: '2 Piece Co-ord Set',
    price: 17500,
    oldPrice: 25000,
    sale: '30% OFF',
    tag: 'Just In',
    img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwd165929e/images/hi-res/25-04e48-07ta_multi_1.jpg?sw=400&sh=600',
  },
]

const bestsellers = [
  { id: 1, img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw7af8c84b/0.0-0.0-0.0-0.0-0.0-0.0-0.012-5-26-secondary-Desktop-banner-1.jpg', link: '/products' },
]

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="group cursor-pointer block">
      <div className="relative overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ height: '320px' }}
        />
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
          </svg>
        </button>
      </div>
      <div className="p-2">
        <p className="text-xs text-gray-400 mt-1">{product.category}</p>
        <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
        <div className="flex items-center gap-2 mt-1">
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">PKR {product.oldPrice.toLocaleString()}</span>
          )}
          <span className="text-sm font-semibold text-gray-900">PKR {product.price.toLocaleString()}</span>
        </div>
        <div className="flex gap-1 mt-1 flex-wrap">
          {product.sale && (
            <span className="text-xs bg-[#E8693A] text-white px-2 py-0.5 rounded-full">{product.sale}</span>
          )}
          {product.tag && product.tag !== 'New' && (
            <span className="text-xs border border-gray-400 text-gray-600 px-2 py-0.5 rounded-full">{product.tag}</span>
          )}
          {product.tag === 'New' && (
            <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full">New</span>
          )}
        </div>
      </div>
    </Link>
  )
}


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white">

      {/* ===== HERO SLIDER ===== */}
      <div className="relative w-full overflow-hidden" style={{ height: '80vh' }}>
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <Link key={slide.id} to={slide.link} className="min-w-full h-full relative flex-shrink-0 block">
              <img
                src={slide.img}
                alt="slide"
                className="w-full h-full object-cover object-top"
              />
            </Link>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentSlide ? 'bg-black scale-125' : 'bg-black/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===== TOP PICKS ===== */}
      <div className="py-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold pb-5 text-black">Top Picks for You</h2>
          <p className="text-black mt-2">We've handpicked the styles we know you'll love. Explore what's trending now.</p>
        </div>

        {/* Wide images */}
        <div className="flex w-full gap-2" style={{ height: '80vh' }}>
          {topPicks.map((pick) => (
            <Link key={pick.id} to={pick.link} className="flex-1 overflow-hidden">
              <img
                src={pick.img}
                alt="pick"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </Link>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-6 gap-2 mt-10 px-4">
          {topPickProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* ===== BESTSELLERS ===== */}
      <div className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-black">Bestsellers</h2>
          <p className="text-black mt-7">Discover this season's favorites and refresh your style with looks you'll wear on repeat.</p>
        </div>

        <div className="flex w-full" style={{ height: '65vh' }}>
          {bestsellers.map((item) => (
            <Link key={item.id} to={item.link} className="flex-1 overflow-hidden">
              <img
                src={item.img}
                alt="bestseller"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </Link>
          ))}
        </div>

        {/* Bestseller Product Cards */}
        <div className="grid grid-cols-6 gap-2 mt-10 px-4">
          {topPickProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      
      
    </div>
  )
}