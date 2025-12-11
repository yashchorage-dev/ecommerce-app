import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-white shadow flex items-center justify-between px-6 py-3 sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        E-Shop
      </Link>

      {/* Search Bar */}
      <div className="mx-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full border rounded px-3 py-2.5 shadow-sm focus:outline-none"
        />
      </div>

      {/* Links + Icons */}
      <div className="flex items-center gap-8 text-sm font-medium">
        <Link to="/products" className="font-medium">
          Products
        </Link>

        <Link to="/wishlist" className="font-medium">
          Wishlist
        </Link>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <span className="font-medium">Cart</span>

          {/* Badge */}
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
