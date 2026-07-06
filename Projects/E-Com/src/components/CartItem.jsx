import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 bg-bg-secondary p-4 rounded-xl border border-slate-700 transition-all hover:border-slate-500">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
      
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-text-primary mb-1">{item.name}</h3>
        <p className="text-text-secondary">₹{item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center justify-between gap-6 md:w-72">
        <div className="flex items-center gap-3 bg-bg-primary p-1 rounded-full border border-slate-700">
          <button 
            className="w-8 h-8 rounded-full bg-bg-tertiary text-white flex items-center justify-center hover:bg-accent disabled:opacity-50 disabled:hover:bg-bg-tertiary transition-colors" 
            onClick={() => updateQuantity(item.id, -1)}
            disabled={item.quantity <= 1}
          >
            <Minus size={16} />
          </button>
          <span className="font-semibold min-w-[20px] text-center">{item.quantity}</span>
          <button 
            className="w-8 h-8 rounded-full bg-bg-tertiary text-white flex items-center justify-center hover:bg-accent transition-colors" 
            onClick={() => updateQuantity(item.id, 1)}
          >
            <Plus size={16} />
          </button>
        </div>
        
        <p className="font-bold text-accent text-lg">₹{(item.price * item.quantity).toFixed(2)}</p>
        
        <button 
          className="text-text-secondary hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-500/10" 
          onClick={() => removeFromCart(item.id)}
          title="Remove item"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
