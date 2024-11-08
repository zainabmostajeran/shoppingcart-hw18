import { FaShoppingCart } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { useAppSelector } from "../redux/Hook";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const Navbar: React.FC = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const cartItemCount = useAppSelector((state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <nav className="bg-slate-900 text-white py-4 px-8">
      <div className="flex items-center justify-between">
        <Link to="/">
          <p className="font-bold text-xl">Shopping Cart</p>
        </Link>
        <input
          placeholder="Search a product"
          className="bg-white rounded-lg w-96 h-10 px-2 text-gray-600 outline-none"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/shoppingcart">
          <button className="bg-green-600 px-4 py-2 rounded-lg flex items-center gap-2">
            <FaShoppingCart />
            {cartItemCount}
            <GoTriangleDown />
          </button>
        </Link>
      </div>
    </nav>
  );
};
