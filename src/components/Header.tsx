import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Home, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Package className="mr-2" /> React Shop
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200 flex items-center">
                <Home className="mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-200 flex items-center">
                <Package className="mr-1" /> Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-200 flex items-center">
                <ShoppingCart className="mr-1" /> Cart
                {cartItemCount > 0 && (
                  <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;