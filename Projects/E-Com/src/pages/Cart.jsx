import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-bg-secondary rounded-2xl border border-slate-700 mt-8 min-h-[60vh]">
        <div className="bg-bg-tertiary p-6 rounded-full mb-6">
          <ShoppingBag size={64} className="text-text-secondary opacity-50" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Your cart is empty</h2>
        <p className="text-text-secondary mb-8 max-w-md">
          Looks like you haven't added anything to your cart yet. Explore our products and find something you love.
        </p>
        <Link to="/" className="premium-button px-8 py-3 text-lg">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold border-b border-slate-700 pb-4">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_0.5fr] px-6 text-sm font-bold text-text-secondary uppercase tracking-wider">
            <span>Product</span>
            <span>Quantity</span>
            <span>Total</span>
            <span></span>
          </div>
          
          <div className="flex flex-col gap-4">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-4 pt-6 border-t border-slate-700">
            <button className="secondary-button" onClick={clearCart}>
              Clear Cart
            </button>
            <Link to="/" className="text-accent font-medium hover:underline flex items-center gap-2">
              Continue Shopping <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-bg-secondary rounded-2xl p-6 border border-slate-700 sticky top-[100px]">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex justify-between text-text-secondary">
                <span>Subtotal</span>
                <span className="font-medium text-text-primary">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>Shipping</span>
                <span className="font-medium text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>GST (Estimated 18%)</span>
                <span className="font-medium text-text-primary">₹{(cartTotal * 0.18).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="h-px bg-slate-700 my-6"></div>
            
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold">Total</span>
              <span className="text-2xl font-bold text-accent">₹{(cartTotal * 1.18).toFixed(2)}</span>
            </div>
            
            <button className="premium-button w-full py-4 text-lg justify-center">
              <span>Proceed to Checkout</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
