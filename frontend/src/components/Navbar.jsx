import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [userDropdown, setUserDropdown] = useState(false); 

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const megaMenuData = {
    "NEW IN": {
      items: [
        {
          label: "New Arrivals",
          img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=300&q=80",
        },
        {
          label: "Best Sellers",
          img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80",
        },
        {
          label: "Featured",
          img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&q=80",
        },
      ],
    },
    "EID. EAT. REPEAT.": {
      items: [
        {
          label: "Fabrics",
          img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
        },
        {
          label: "Ready to Wear",
          img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&q=80",
        },
        {
          label: "Tailored",
          img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&q=80",
        },
      ],
    },
    "READY TO WEAR": {
      items: [
        {
          label: "Kurtas",
          img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80",
        },
        {
          label: "Co-ords",
          img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=300&q=80",
        },
        {
          label: "Accessories",
          img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&q=80",
        },
      ],
    },
    FABRICS: {
      items: [
        {
          label: "Lawn",
          img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
        },
        {
          label: "Khaddar",
          img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&q=80",
        },
        {
          label: "Silk",
          img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&q=80",
        },
      ],
    },
    FRAGRANCES: {
      items: [
        {
          label: "Perfumes",
          img: "https://images.unsplash.com/photo-1592945403407-9caf930a5b1f?w=300&q=80",
        },
        {
          label: "Body Mist",
          img: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=300&q=80",
        },
        {
          label: "Gift Sets",
          img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&q=80",
        },
      ],
    },
    "NOW HAPPENING": {
      items: [
        {
          label: "Sale",
          img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80",
        },
        {
          label: "New Drops",
          img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
        },
        {
          label: "Limited Edition",
          img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&q=80",
        },
      ],
    },
  };

  return (
    <header className="w-full z-50 sticky top-0 bg-white">
      {/* Pink announcement bar */}
      <div className="bg-[#f4a0a0] text-black text-center text-xs py-2 px-4 flex items-center justify-between">
        <span></span>
        <span>
          Discover what's new this season with our latest styles{" "}
          <Link to="/products" className="font-bold underline">
            right here.
          </Link>
        </span>
        <span className="text-xs font-semibold tracking-widest cursor-pointer hover:underline pr-4">
          TRACK
        </span>
      </div>

      {/* Main navbar */}
      <div
        className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between border-b border-gray-100"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src="/khaadi-logo.svg"
            alt="Khaadi"
            style={{ height: "48px", width: "auto" }}
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {Object.keys(megaMenuData).map((category) => (
            <div
              key={category}
              className="relative py-4"
              onMouseEnter={() => setActiveMenu(category)}
            >
              <span
                className={`text-xs font-semibold tracking-wider cursor-pointer transition whitespace-nowrap
                  ${
                    category === "EID. EAT. REPEAT."
                      ? "text-[#c8a040]"
                      : category === "SALE"
                        ? "text-[#c8a040]"
                        : category === "NOW HAPPENING"
                          ? "font-black text-black"
                          : "text-black hover:text-gray-500"
                  }`}
              >
                {category}
              </span>
            </div>
          ))}

          <Link
            to="/products?category=sale"
            className="text-xs font-semibold tracking-wider text-[#E8693A] hover:opacity-75 transition"
            onMouseEnter={() => setActiveMenu(null)}
          >
            SALE
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <button className="hover:text-gray-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </button>

          {/* Wishlist */}
          <button className="hover:text-gray-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z"
              />
            </svg>
          </button>

          {/* User */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="hover:text-gray-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {userDropdown && (
                <div className="absolute right-0 top-8 bg-white shadow-lg border w-44 z-50">
                  <div className="px-4 py-3 border-b">
                    <p className="text-xs font-bold tracking-wider">
                      {user.name.toUpperCase()}
                    </p>
                  </div>
                  {user.isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setUserDropdown(false)}
                      className="block px-4 py-3 text-xs tracking-wider hover:bg-gray-50 font-semibold border-b"
                    >
                      ADMIN PANEL
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 text-xs tracking-wider hover:bg-gray-50 text-gray-600"
                  >
                    LOGOUT
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="hover:text-gray-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </Link>
          )}

          {/* Cart */}
          <button className="hover:text-gray-500 transition relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
      </div>

      {/* MEGA MENU DROPDOWN */}
      {activeMenu && megaMenuData[activeMenu] && (
        <div
          className="absolute left-0 w-full bg-white shadow-xl z-40 border-t border-gray-100"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-screen-xl mx-auto px-6 py-6">
            <div className="grid grid-cols-3 gap-4">
              {megaMenuData[activeMenu].items.map((item) => (
                <Link
                  key={item.label}
                  to={`/products?type=${item.label.toLowerCase().replace(/ /g, "-")}`}
                  className="group"
                  onClick={() => setActiveMenu(null)}
                >
                  {/* Image — fixed height */}
                  <div className="overflow-hidden bg-gray-100 h-48">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) =>
                        (e.target.src =
                          "https://placehold.co/300x400/f5f5f5/999?text=" +
                          item.label)
                      }
                    />
                  </div>
                  {/* Label */}
                  <p className="mt-2 text-center text-xs font-bold tracking-widest text-black group-hover:text-gray-500 transition">
                    {item.label.toUpperCase()}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
