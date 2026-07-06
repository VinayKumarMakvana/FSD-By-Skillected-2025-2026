import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-700/50 h-[70px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-2 font-bold text-2xl text-text-primary group">
            <Package size={28} className="text-accent transition-transform duration-300 group-hover:scale-110" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">TechNova</span>
          </div>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="font-medium text-text-secondary hover:text-text-primary transition-colors">
            Home
          </Link>
          <Link to="/cart" className="relative flex items-center text-text-primary hover:scale-110 transition-transform duration-300">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2.5 bg-accent text-white text-xs font-bold h-5 min-w-[20px] rounded-full flex items-center justify-center px-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
