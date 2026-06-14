import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import api from '../../lib/api'

export default function AdminPanel() {
  const { user, token } = useAuth()
  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('products')
  const [showForm, setShowForm] = useState(false)
  const [editProduct, setEditProduct] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const emptyForm = {
    name: '', description: '', price: '', category: 'women',
    image: '', sizes: '', stock: '', featured: false
  }
  const [form, setForm] = useState(emptyForm)

  // Admin check
  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/home')
    }
  }, [user, navigate])

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true)
      const res = await api.get('/products')
      setProducts(res.data)
    } catch {
      setError('Products load nahi hue')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts()
  }, [])

  // Form submit — Add or Edit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const data = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      sizes: form.sizes.split(',').map(s => s.trim()).filter(Boolean)
    }

    try {
      if (editProduct) {
        await api.put(
          `/products/${editProduct._id}`,
          data,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        setSuccess('Product update ho gaya!')
      } else {
        await api.post(
          '/products',
          data,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        setSuccess('Product add ho gaya!')
      }
      setForm(emptyForm)
      setShowForm(false)
      setEditProduct(null)
      fetchProducts()
    } catch (err) {
      setError(err.response?.data?.message || 'Error aaya')
    }
  }

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm('Product delete karna chahte hain?')) return
    try {
      await api.delete(
        `/products/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setSuccess('Product delete ho gaya!')
      fetchProducts()
    } catch {
      setError('Delete nahi hua')
    }
  }

  // Edit — open form with data
  const handleEdit = (product) => {
    setEditProduct(product)
    setForm({
      name: product.name,
      description: product.description || '',
      price: product.price,
      category: product.category,
      image: product.image || '',
      sizes: product.sizes?.join(', ') || '',
      stock: product.stock,
      featured: product.featured || false
    })
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!user?.isAdmin) return null

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Admin Header */}
      <div className="bg-black text-white px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/khaadi-logo.svg" alt="Khaadi" className="h-8" />
          <span className="text-sm font-bold tracking-widest">ADMIN PANEL</span>
        </div>
        <span className="text-xs text-gray-400">Welcome, {user.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {['products', 'orders', 'users'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 text-sm font-semibold tracking-wider capitalize transition border-b-2 ${
                activeTab === tab
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Success/Error messages */}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4 text-sm">
            ✓ {success}
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4 text-sm">
            ✗ {error}
          </div>
        )}

        {/* PRODUCTS TAB */}
        {activeTab === 'products' && (
          <div>

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Products ({products.length})
              </h2>
              <button
                onClick={() => {
                  setShowForm(!showForm)
                  setEditProduct(null)
                  setForm(emptyForm)
                }}
                className="bg-black text-white px-6 py-2.5 text-sm font-semibold tracking-wider hover:bg-gray-800 transition"
              >
                {showForm ? '✕ CANCEL' : '+ ADD PRODUCT'}
              </button>
            </div>

            {/* Add/Edit Form */}
            {showForm && (
              <div className="bg-white border border-gray-200 rounded p-6 mb-8 shadow-sm">
                <h3 className="text-lg font-bold mb-6 text-gray-900">
                  {editProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">

                    {/* Name */}
                    <div className="col-span-2">
                      <label className="text-xs font-semibold text-gray-600 mb-1 block tracking-wider">PRODUCT NAME *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                        placeholder="e.g. Floral Lawn Kurta"
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
                      />
                    </div>

                    {/* Description */}
                    <div className="col-span-2">
                      <label className="text-xs font-semibold text-gray-600 mb-1 block tracking-wider">DESCRIPTION</label>
                      <textarea
                        value={form.description}
                        onChange={e => setForm({ ...form, description: e.target.value })}
                        rows={3}
                        placeholder="Product description..."
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition resize-none"
                      />
                    </div>

                    {/* Price */}
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1 block tracking-wider">PRICE (PKR) *</label>
                      <input
                        type="number"
                        value={form.price}
                        onChange={e => setForm({ ...form, price: e.target.value })}
                        required
                        placeholder="e.g. 5000"
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1 block tracking-wider">CATEGORY *</label>
                      <select
                        value={form.category}
                        onChange={e => setForm({ ...form, category: e.target.value })}
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
                      >
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="kids">Kids</option>
                        <option value="home">Home</option>
                      </select>
                    </div>

                    {/* Image URL */}
                    <div className="col-span-2">
                      <label className="text-xs font-semibold text-gray-600 mb-1 block tracking-wider">IMAGE URL</label>
                      <input
                        type="text"
                        value={form.image}
                        onChange={e => setForm({ ...form, image: e.target.value })}
                        placeholder="https://..."
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
                      />
                    </div>

                    {/* Sizes */}
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1 block tracking-wider">SIZES (comma separated)</label>
                      <input
                        type="text"
                        value={form.sizes}
                        onChange={e => setForm({ ...form, sizes: e.target.value })}
                        placeholder="XS, S, M, L, XL"
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
                      />
                    </div>

                    {/* Stock */}
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1 block tracking-wider">STOCK</label>
                      <input
                        type="number"
                        value={form.stock}
                        onChange={e => setForm({ ...form, stock: e.target.value })}
                        placeholder="e.g. 100"
                        className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
                      />
                    </div>

                    {/* Featured */}
                    <div className="col-span-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.featured}
                          onChange={e => setForm({ ...form, featured: e.target.checked })}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-700">Featured product (Home page pe dikhao)</span>
                      </label>
                    </div>

                  </div>

                  {/* Image Preview */}
                  {form.image && (
                    <div className="mt-4">
                      <p className="text-xs text-gray-500 mb-2">Image Preview:</p>
                      <img
                        src={form.image}
                        alt="preview"
                        className="h-32 w-24 object-cover object-top border border-gray-200"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    </div>
                  )}

                  <div className="flex gap-3 mt-6">
                    <button
                      type="submit"
                      className="bg-black text-white px-8 py-3 text-sm font-bold tracking-wider hover:bg-gray-800 transition"
                    >
                      {editProduct ? 'UPDATE PRODUCT' : 'ADD PRODUCT'}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setShowForm(false); setEditProduct(null); setForm(emptyForm) }}
                      className="border border-gray-300 px-8 py-3 text-sm font-bold tracking-wider hover:bg-gray-50 transition"
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Products Table */}
            {loading ? (
              <div className="text-center py-16 text-gray-400">Loading...</div>
            ) : products.length === 0 ? (
              <div className="text-center py-16 bg-white border border-gray-200 rounded">
                <p className="text-gray-400 text-sm">Koi product nahi hai abhi</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="mt-4 bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition"
                >
                  + Pehla Product Add Karo
                </button>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 tracking-wider">IMAGE</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 tracking-wider">NAME</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 tracking-wider">CATEGORY</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 tracking-wider">PRICE</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 tracking-wider">STOCK</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 tracking-wider">FEATURED</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 tracking-wider">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {products.map((product) => (
                      <tr key={product._id} className="hover:bg-gray-50 transition">
                        <td className="px-4 py-3">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-16 object-cover object-top border border-gray-100"
                            />
                          ) : (
                            <div className="w-12 h-16 bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                              No img
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-400 truncate max-w-xs">{product.description}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded capitalize">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                          PKR {product.price?.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {product.stock}
                        </td>
                        <td className="px-4 py-3">
                          {product.featured ? (
                            <span className="text-xs bg-[#E8693A] text-white px-2 py-1 rounded">Yes</span>
                          ) : (
                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">No</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(product)}
                              className="text-xs bg-black text-white px-3 py-1.5 hover:bg-gray-700 transition"
                            >
                              EDIT
                            </button>
                            <button
                              onClick={() => handleDelete(product._id)}
                              className="text-xs bg-red-500 text-white px-3 py-1.5 hover:bg-red-600 transition"
                            >
                              DELETE
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
          <div className="bg-white border border-gray-200 rounded p-8 text-center">
            <p className="text-gray-400 text-sm">Orders feature coming soon...</p>
          </div>
        )}

        {/* USERS TAB */}
        {activeTab === 'users' && (
          <div className="bg-white border border-gray-200 rounded p-8 text-center">
            <p className="text-gray-400 text-sm">Users feature coming soon...</p>
          </div>
        )}

      </div>
    </div>
  )
}
