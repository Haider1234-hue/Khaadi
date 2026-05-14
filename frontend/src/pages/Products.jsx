import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const collections = [
  { id: 1, label: 'Basics:\nBloomscape', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw471c65d8/0.0-0.0-0.0-0.0-0.0-0.0-0.012-5-26-Top-picks-secondary-Desktop-banner-2.jpg' },
  { id: 2, label: 'Studio: Styled\n& Spotted', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw53c40bcb/images/hi-res/1-26-117-a-e_multi_1.jpg?sw=400&sh=600' },
  { id: 3, label: 'Studio: Peek\nand Slay', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw5a4534e8/images/hi-res/1-26-146-a-c_multi_1.jpg?sw=400&sh=600' },
  { id: 4, label: 'Studio:\nServing Looks', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw2a5d1f31/images/hi-res/1-26-114-a-f_multi_1.jpg?sw=400&sh=600' },
  { id: 5, label: 'Basics: Sunny\nTides', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw29feed75/images/hi-res/1-26-112-a-d_multi_1.jpg?sw=400&sh=600' },
  { id: 6, label: 'Best Sellers', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwd165929e/images/hi-res/25-04e48-07ta_multi_1.jpg?sw=400&sh=600' },
]

const staticProducts = [
  { id: 1, category: 'Embroidered | Cambric', name: 'Short Cambric Kurta', price: 5000, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwfbc1ac4f/images/hi-res/25-11-12s1-02ta_multi_1.jpg?sw=400&sh=600' },
  { id: 2, category: 'Embroidered | Raw Silk', name: 'Short Silk Kurta', price: 7000, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw53c40bcb/images/hi-res/1-26-117-a-e_multi_1.jpg?sw=400&sh=600' },
  { id: 3, category: 'Printed | Cambric', name: 'V-Neck Longline Kurta', price: 4000, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw5a4534e8/images/hi-res/1-26-146-a-c_multi_1.jpg?sw=400&sh=600' },
  { id: 4, category: 'Printed | Lawn', name: 'Lawn 2-Piece Tailored', price: 6000, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw2a5d1f31/images/hi-res/1-26-114-a-f_multi_1.jpg?sw=400&sh=600' },
  { id: 5, category: 'Embroidered | Cambric', name: 'Long Floral Kurta', price: 5500, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw29feed75/images/hi-res/1-26-112-a-d_multi_1.jpg?sw=400&sh=600' },
  { id: 6, category: 'Embroidered | Cambric', name: 'Floral Threadwork Kurta', price: 5500, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwd165929e/images/hi-res/25-04e48-07ta_multi_1.jpg?sw=400&sh=600' },
  { id: 7, category: 'Printed | Cambric', name: 'Floral Cambric Kurta', price: 4000, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwfbc1ac4f/images/hi-res/25-11-12s1-02ta_multi_1.jpg?sw=400&sh=600' },
  { id: 8, category: 'Embroidered | Mesuri', name: 'Short Sleeveless Kurta', price: 4500, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw53c40bcb/images/hi-res/1-26-117-a-e_multi_1.jpg?sw=400&sh=600' },
  { id: 9, category: 'Printed | Lawn', name: 'Abstract Lawn Kurta', price: 3500, tag: null, sale: '30% OFF', oldPrice: 5000, img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw5a4534e8/images/hi-res/1-26-146-a-c_multi_1.jpg?sw=400&sh=600' },
  { id: 10, category: 'Embroidered | Khaddar', name: 'Khaddar Embroidered Set', price: 8000, tag: null, img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw2a5d1f31/images/hi-res/1-26-114-a-f_multi_1.jpg?sw=400&sh=600' },
  { id: 11, category: 'Printed | Cotton', name: 'Cotton Printed Kurta', price: 2800, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw29feed75/images/hi-res/1-26-112-a-d_multi_1.jpg?sw=400&sh=600' },
  { id: 12, category: 'Embroidered | Lawn', name: 'Lawn Tailored 3 Piece', price: 10000, tag: null, img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwd165929e/images/hi-res/25-04e48-07ta_multi_1.jpg?sw=400&sh=600' },
]

const sortOptions = ['New Arrival', 'Price: Low to High', 'Price: High to Low', 'Best Sellers']

export default function Products() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || 'Ready To Wear'
  const [sortBy, setSortBy] = useState('New Arrival')
  const [gridCols, setGridCols] = useState(4)
  const [wishlist, setWishlist] = useState([])
  const [apiProducts, setApiProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryParam = searchParams.get('category')
        const url = categoryParam
          ? `http://localhost:5000/api/products?category=${categoryParam}`
          : 'http://localhost:5000/api/products'
        const res = await axios.get(url)
        setApiProducts(res.data)
      } catch (err) {
        console.log('Products load nahi hue:', err)
      } finally {
        setLoadingProducts(false)
      }
    }
    fetchProducts()
  }, [searchParams])

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id])
  }

const allProducts = [...apiProducts, ...staticProducts]
  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price
    if (sortBy === 'Price: High to Low') return b.price - a.price
    return 0
  })

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-4 text-sm text-gray-500">
          <Link to="/home" className="hover:text-black transition">Home</Link>
          <span>›</span>
          <span className="font-semibold text-black capitalize">{category}</span>
        </div>

        {/* Circle Collections */}
        <div className="flex justify-center gap-8 py-6">
          {collections.map((col) => (
            <div key={col.id} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-gray-300 transition">
                <img src={col.img} alt={col.label} className="w-full h-full object-cover object-top" />
              </div>
              <p className="text-xs text-center text-gray-600 whitespace-pre-line leading-tight">{col.label}</p>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between py-4 border-t border-b border-gray-200 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 cursor-pointer hover:border-black transition min-w-[160px] justify-between">
              <span className="text-sm text-gray-700">Filter by</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none border border-gray-300 px-4 py-2 pr-8 text-sm text-gray-700 cursor-pointer hover:border-black transition outline-none min-w-[160px]"
              >
                {sortOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <span className="text-sm text-gray-500 font-semibold">{sortedProducts.length} items</span>
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((cols) => (
              <button
                key={cols}
                onClick={() => setGridCols(cols)}
                className={`p-1.5 border transition ${gridCols === cols ? 'border-black' : 'border-gray-300 hover:border-gray-500'}`}
              >
                <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${cols}, 6px)` }}>
                  {Array.from({ length: cols * 2 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-current" />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loadingProducts && (
          <div className="text-center py-16 text-gray-400 text-sm">Loading products...</div>
        )}

        {/* Product Grid */}
        {!loadingProducts && (
          <div
            className="grid gap-4 mb-16"
            style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}
          >
            {sortedProducts.map((product) => (
              <Link
                key={product._id || product.id}
                to={`/products/${product._id || product.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden bg-gray-50">
                  <img
                    src={product.image || product.img}
                    alt={product.name}
                    className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    style={{ height: gridCols <= 2 ? '600px' : '420px' }}
                  />

                  <button
                    onClick={(e) => { e.preventDefault(); toggleWishlist(product._id || product.id) }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={wishlist.includes(product._id || product.id) ? '#E8693A' : 'none'} viewBox="0 0 24 24" stroke={wishlist.includes(product._id || product.id) ? '#E8693A' : 'currentColor'}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
                    </svg>
                  </button>

                  <button
                    onClick={(e) => e.preventDefault()}
                    className="absolute bottom-3 left-3 w-9 h-9 bg-white rounded-full flex flex-col items-center justify-center shadow hover:bg-gray-50 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="text-xs font-bold leading-none">ADD</span>
                  </button>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-gray-400">{product.category}</p>
                  <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">PKR {product.oldPrice.toLocaleString()}</span>
                    )}
                    <span className="text-sm font-semibold">PKR {product.price.toLocaleString()}</span>
                  </div>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {product.sale && (
                      <span className="text-xs bg-[#E8693A] text-white px-2 py-0.5 rounded-full">{product.sale}</span>
                    )}
                    {product.tag && (
                      <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full">{product.tag}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}