import { Link } from "react-router-dom";
import { Search, Heart, User, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="top-black-bar"></div>
      <div className="promo-bar">
        <p>
          Discover what's new this season with our latest styles
          <span> right here.</span>
        </p>
        <h4>TRACK</h4>
      </div>

      <div className="navbar">
        <div className="nav-logo">KHAADI</div>

        <div className="nav-center">
          {/* Yahan path change kiya hai */}
          <Link to="/new-in">NEW IN</Link>
         {/* <Link to="/shop">NEW IN</Link> */}
          <Link to="/">EID. EAT. REPEAT.</Link>
          <Link to="/">READY TO WEAR</Link>
          <Link to="/">FABRICS</Link>
          <Link to="/">FRAGRANCES</Link>
          <Link to="/">SALE</Link>
          <Link to="/">NOW HAPPENING</Link>
        </div>

        <div className="nav-icons">
          <Search size={24} strokeWidth={1.7} />
          <Heart size={24} strokeWidth={1.7} />
          <User size={24} strokeWidth={1.7} />
          <ShoppingBag size={24} strokeWidth={1.7} />
        </div>
      </div>
    </>
  );
};

export default Navbar;