export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Info Bar */}
      <div className="border-b border-gray-200 py-6 bg-[#fdf8f5]">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-gray-200">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#E8693A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 8h14M5 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8m-9 4h4"
                  />
                </svg>
              ),
              title: "SHIPPING CHARGES",
              desc: "Starting from Rs. 130",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#E8693A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"
                  />
                </svg>
              ),
              title: "TRACK YOUR ORDER",
              desc: "Check status of your order.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#E8693A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                  />
                </svg>
              ),
              title: "FIND STORES",
              desc: "Stores countrywide across Pakistan, UK, UAE, US.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 px-8">
              <div className="border-2 border-[#E8693A] border-dashed rounded-full p-2">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 tracking-wide">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Need Help */}
      <div className="py-6 px-8 flex items-center justify-between border-b border-gray-200 max-w-5xl mx-auto">
        <h3 className="text-xl font-bold tracking-widest text-gray-900">
          NEED HELP?
        </h3>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"
            />
          </svg>
          <span className="text-sm font-semibold tracking-widest">FAQS</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-8 pt-10 pb-6 grid grid-cols-3 gap-8 mb-6">
        <div>
          <h4 className="text-sm font-bold tracking-widest mb-4 text-gray-900">
            HELP
          </h4>
          {[
            "Frequently Asked Questions",
            "Terms & Conditions",
            "Privacy Policy",
            "Disclaimer",
          ].map((item) => (
            <p
              key={item}
              className="text-sm text-gray-500 mb-2 cursor-pointer hover:text-black transition"
            >
              {item}
            </p>
          ))}
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest mb-4 text-gray-900">
            MORE FROM KHAADI
          </h4>
          {["About Us", "Blogs", "Cloth Care"].map((item) => (
            <p
              key={item}
              className="text-sm text-gray-500 mb-2 cursor-pointer hover:text-black transition"
            >
              {item}
            </p>
          ))}
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest mb-4 text-gray-900">
            OUR SOCIALS
          </h4>
          <div className="flex gap-3 mb-6">
            {/* TikTok */}
            <a
              href="#"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-75 transition"
            >
              <svg
                className="w-5 h-5 fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:opacity-75 transition"
            >
              <svg
                className="w-5 h-5 fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:opacity-75 transition"
            >
              <svg
                className="w-5 h-5 fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-75 transition"
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            >
              <svg
                className="w-5 h-5 fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <h4 className="text-sm font-bold tracking-widest mb-3 text-gray-900">
            GET THE LATEST NEWS
          </h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 border border-gray-300 px-3 py-2 text-sm outline-none"
            />
            <button className="bg-black text-white px-4 py-2 text-xs font-bold tracking-wider hover:bg-gray-800 transition">
              CONFIRM
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 pt-6 pb-4 px-8 max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500 mb-2">100% Safe Checkout</p>
          <div className="flex gap-3 items-center">
            <img
              src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw568e0aba/images/FooterImages/0.0-0.0-0.0-0.0-PK-2024-08-20-updated-1.svg"
              alt="Mastercard"
              className="h-12"
            />
          </div>
        </div>
        <img src="/khaadi-logo.svg" alt="Khaadi" className="h-10" />
        <div className="text-right">
          <p className="text-xs text-gray-500 mb-2">Secured by</p>
          <div className="border border-green-600 px-2 py-1 text-xs text-green-700 font-bold">
            ✓ GODADDY VERIFIED & SECURED
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 py-4">
        Copyright © 2026 Weaves Corporation Limited. All Rights Reserved.
      </p>
    </footer>
  );
}
