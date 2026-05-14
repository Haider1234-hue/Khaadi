import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../context/useAuth'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  // Login form state
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)
  const [showLoginPass, setShowLoginPass] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  // Register form state
  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    newsletter: false
  })
  const [regError, setRegError] = useState('')
  const [regLoading, setRegLoading] = useState(false)
  const [showRegPass, setShowRegPass] = useState(false)
  const [showRegConfirmPass, setShowRegConfirmPass] = useState(false)

  // Login submit
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError('')
    setLoginLoading(true)
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', loginData)
      login(res.data.user, res.data.token)
      navigate('/home')
    } catch (err) {
      setLoginError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoginLoading(false)
    }
  }

  // Register submit
  const handleRegister = async (e) => {
    e.preventDefault()
    setRegError('')

    if (regData.email !== regData.confirmEmail) {
      return setRegError('Emails do not match')
    }
    if (regData.password !== regData.confirmPassword) {
      return setRegError('Passwords do not match')
    }

    setRegLoading(true)
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name: `${regData.firstName} ${regData.lastName}`,
        email: regData.email,
        password: regData.password
      })
      login(res.data.user, res.data.token)
      navigate('/home')
    } catch (err) {
      setRegError(err.response?.data?.message || 'Registration failed')
    } finally {
      setRegLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-2 gap-16">

        {/* ===== LOGIN SECTION ===== */}
        <div className="border-r border-gray-200 pr-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome</h2>
          <p className="text-sm text-gray-500 mb-8">Sign in to your account</p>

          {loginError && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 mb-4 rounded">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={loginData.email}
                onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                required
                className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Password</label>
              <div className="relative">
                <input
                  type={showLoginPass ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPass(!showLoginPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showLoginPass ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0 1 12 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 0 1 1.563-3.029m5.858.908a3 3 0 1 1 4.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532 3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0 1 12 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 0 1-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember me + Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="w-4 h-4"
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-black transition">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-black text-white py-3 text-sm font-semibold tracking-widest hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loginLoading ? 'LOGGING IN...' : 'LOGIN'}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-3">or login with</p>
            <div className="flex gap-3">
              {/* Google */}
              <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded hover:bg-gray-50 transition">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>

              {/* Facebook */}
              <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded hover:bg-gray-50 transition">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ===== REGISTER SECTION ===== */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome</h2>
          <p className="text-sm text-gray-500 mb-8">Create your account</p>

          {regError && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 mb-4 rounded">
              {regError}
            </div>
          )}

          <form onSubmit={handleRegister} className="flex flex-col gap-4">

            {/* First Name */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={regData.firstName}
                onChange={e => setRegData({ ...regData, firstName: e.target.value })}
                required
                className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={regData.lastName}
                onChange={e => setRegData({ ...regData, lastName: e.target.value })}
                required
                className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={regData.email}
                onChange={e => setRegData({ ...regData, email: e.target.value })}
                required
                className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
              />
            </div>

            {/* Confirm Email */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Confirm Email</label>
              <input
                type="email"
                placeholder="Confirm Email"
                value={regData.confirmEmail}
                onChange={e => setRegData({ ...regData, confirmEmail: e.target.value })}
                required
                className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Password</label>
              <div className="relative">
                <input
                  type={showRegPass ? 'text' : 'password'}
                  value={regData.password}
                  onChange={e => setRegData({ ...regData, password: e.target.value })}
                  required
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowRegPass(!showRegPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Confirm Password</label>
              <div className="relative">
                <input
                  type={showRegConfirmPass ? 'text' : 'password'}
                  value={regData.confirmPassword}
                  onChange={e => setRegData({ ...regData, confirmPassword: e.target.value })}
                  required
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black transition pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowRegConfirmPass(!showRegConfirmPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={regData.newsletter}
                onChange={e => setRegData({ ...regData, newsletter: e.target.checked })}
                className="w-4 h-4"
              />
              Sign Up for Newsletter
            </label>

            {/* Register Button */}
            <button
              type="submit"
              disabled={regLoading}
              className="w-full bg-black text-white py-3 text-sm font-semibold tracking-widest hover:bg-gray-800 transition disabled:opacity-50"
            >
              {regLoading ? 'SIGNING UP...' : 'SIGN UP'}
            </button>

            <p className="text-xs text-gray-400 mt-2">
              By clicking "Sign Up" you agree to the Khaadi{' '}
              <Link to="/terms" className="underline hover:text-black">terms and conditions</Link>.
              To see how we may use your information, take a look at our{' '}
              <Link to="/privacy" className="underline hover:text-black">privacy policy</Link>.
            </p>
          </form>
        </div>

      </div>
    </div>
  )
}