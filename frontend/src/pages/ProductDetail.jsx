import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Sample product data
const products = [
  {
    id: '1',
    category: 'Embroidered | Cambric',
    name: 'Short Cambric Kurta',
    price: 5000,
    sku: '1-26-231-B-G1',
    tag: 'New',
    images: [
      'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwfbc1ac4f/images/hi-res/25-11-12s1-02ta_multi_1.jpg?sw=400&sh=600',
      'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw53c40bcb/images/hi-res/1-26-117-a-e_multi_1.jpg?sw=400&sh=600',
    ],
    details: {
      fit: 'Relaxed',
      fabric: '100% Cotton',
      material: 'Cambric',
      description: 'Navy cambric kurta with elegant embroidery. Perfect for casual and semi-formal occasions.'
    },
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat.'
  },
  {
    id: '2',
    category: 'Embroidered | Raw Silk',
    name: 'Short Silk Kurta',
    price: 7000,
    sku: '1-26-117-A-E',
    tag: 'New',
    images: [
      'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw53c40bcb/images/hi-res/1-26-117-a-e_multi_1.jpg?sw=400&sh=600',
      'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw5a4534e8/images/hi-res/1-26-146-a-c_multi_1.jpg?sw=400&sh=600',
    ],
    details: {
      fit: 'Smart',
      fabric: '100% Raw Silk',
      material: 'Raw Silk',
      description: 'Elegant raw silk kurta with intricate embroidery. Perfect for formal occasions.'
    },
    care: 'Dry clean only. Do not wash. Store in cool dry place.'
  },
  {
    id: '3',
    category: 'Printed | Cambric',
    name: 'V-Neck Longline Kurta',
    price: 4000,
    sku: '1-26-146-A-C',
    tag: 'New',
    images: [
      'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw5a4534e8/images/hi-res/1-26-146-a-c_multi_1.jpg?sw=400&sh=600',
      'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw2a5d1f31/images/hi-res/1-26-114-a-f_multi_1.jpg?sw=400&sh=600',
    ],
    details: {
      fit: 'Relaxed',
      fabric: '100% Cotton',
      material: 'Cambric',
      description: 'Printed cambric longline kurta with v-neck. Comfortable and stylish for everyday wear.'
    },
    care: 'Machine wash cold. Iron on medium heat.'
  },
]

const relatedProducts = [
  { id: '4', category: 'Embroidered | Mesuri', name: 'Solid Mint Pants', price: 4000, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw2a5d1f31/images/hi-res/1-26-114-a-f_multi_1.jpg?sw=400&sh=600' },
  { id: '5', category: 'Printed | Viscose Crepe', name: 'Gray Viscose Blouse', price: 4500, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw29feed75/images/hi-res/1-26-112-a-d_multi_1.jpg?sw=400&sh=600' },
  { id: '6', category: 'Dyed | Cambric', name: 'Solid Navy Pants', price: 3000, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwd165929e/images/hi-res/25-04e48-07ta_multi_1.jpg?sw=400&sh=600' },
  { id: '7', category: 'Embroidered | Cambric', name: 'Teal Solid Shalwar', price: 3000, tag: 'New', img: 'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwfbc1ac4f/images/hi-res/25-11-12s1-02ta_multi_1.jpg?sw=400&sh=600' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id) || products[0]

  const [activeImg, setActiveImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [wishlist, setWishlist] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(true)
  const [careOpen, setCareOpen] = useState(false)
  const [tagsOpen, setTagsOpen] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAddToBag = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-4 text-sm text-gray-500">
          <Link to="/home" className="hover:text-black transition">Home</Link>
          <span>›</span>
          <Link to="/products" className="hover:text-black transition">Ready To Wear</Link>
          <span>›</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-12 pb-16">

          {/* LEFT — Images */}
          <div className="flex gap-4">

            {/* Thumbnails */}
            <div className="flex flex-col gap-2">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-28 overflow-hidden cursor-pointer border-2 transition ${
                    activeImg === i ? 'border-black' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 overflow-hidden">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full object-cover object-top"
                style={{ height: '600px' }}
              />
              {/* Wishlist */}
              <button
                onClick={() => setWishlist(!wishlist)}
                className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={wishlist ? '#E8693A' : 'none'} viewBox="0 0 24 24" stroke={wishlist ? '#E8693A' : 'currentColor'}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT — Product Info */}
          <div>
            <p className="text-xs text-gray-400 mb-1">{product.category}</p>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-900 mb-1">PKR {product.price.toLocaleString()}</p>
            <p className="text-xs text-gray-400 mb-6">SKU: {product.sku}</p>

            {/* Add to Bag */}
            <button
              onClick={handleAddToBag}
              className={`w-full py-4 text-sm font-bold tracking-widest transition mb-8 ${
                added ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {added ? '✓ ADDED TO BAG' : 'ADD TO BAG'}
            </button>

            {/* Details Accordion */}
            <div className="border-t border-gray-200">
              <button
                onClick={() => setDetailsOpen(!detailsOpen)}
                className="w-full flex items-center justify-between py-4 text-sm font-semibold text-gray-900 hover:text-gray-600 transition"
              >
                <span>Details</span>
                <span className="text-xl">{detailsOpen ? '−' : '+'}</span>
              </button>
              {detailsOpen && (
                <div className="pb-4 text-sm text-gray-600 space-y-1">
                  <p><span className="font-semibold">Fit:</span> {product.details.fit}</p>
                  <p><span className="font-semibold">Fabric Composition:</span> {product.details.fabric}</p>
                  <p><span className="font-semibold">Material:</span> {product.details.material}</p>
                  <p><span className="font-semibold">Description:</span> {product.details.description}</p>
                </div>
              )}
            </div>

            {/* Care Instructions Accordion */}
            <div className="border-t border-gray-200">
              <button
                onClick={() => setCareOpen(!careOpen)}
                className="w-full flex items-center justify-between py-4 text-sm font-semibold text-gray-900 hover:text-gray-600 transition"
              >
                <span>Care Instructions</span>
                <span className="text-xl">{careOpen ? '−' : '+'}</span>
              </button>
              {careOpen && (
                <div className="pb-4 text-sm text-gray-600">
                  <p>{product.care}</p>
                </div>
              )}
            </div>

            {/* Product Tags Accordion */}
            <div className="border-t border-gray-200">
              <button
                onClick={() => setTagsOpen(!tagsOpen)}
                className="w-full flex items-center justify-between py-4 text-sm font-semibold text-gray-900 hover:text-gray-600 transition"
              >
                <span>Product Tags</span>
                <span className="text-xl">{tagsOpen ? '−' : '+'}</span>
              </button>
              {tagsOpen && (
                <div className="pb-4">
                  {/* Mini cart item */}
                  <div className="flex items-center gap-4 border border-gray-200 p-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-20 object-cover object-top"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{product.name}</p>
                      <p className="text-xs text-gray-400">SKU: {product.sku}</p>
                      <p className="text-xs text-gray-500 mt-1">Quantity</p>
                      <div className="flex items-center gap-3 mt-1">
                        <button
                          onClick={() => setQuantity(q => Math.max(1, q - 1))}
                          className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition text-lg"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium">{quantity}</span>
                        <button
                          onClick={() => setQuantity(q => q + 1)}
                          className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">PKR {product.price.toLocaleString()}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        <div className="py-12 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-center tracking-widest text-gray-900 mb-8">YOU MAY ALSO LIKE</h2>

          <div className="relative">
            {/* Left arrow */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow flex items-center justify-center hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="grid grid-cols-4 gap-4 px-10">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/products/${item.id}`} className="group block">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      style={{ height: '380px' }}
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
                      </svg>
                    </button>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-gray-400">{item.category}</p>
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm font-semibold mt-0.5">PKR {item.price.toLocaleString()}</p>
                    {item.tag && (
                      <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full mt-1 inline-block">{item.tag}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Right arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow flex items-center justify-center hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}