import { Routes, Route } from 'react-router-dom'
import CountrySelect from './pages/CountrySelect'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminPanel from './pages/admin/AdminPanel'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountrySelect />} />
      <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/products" element={<><Navbar /><Products /><Footer /></>} />
      <Route path="/products/:id" element={<><Navbar /><ProductDetail /><Footer /></>} />
      <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
      <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />
      <Route path="/admin" element={<><Navbar /><AdminPanel /><Footer /></>} />
    </Routes>
  )
}

export default App