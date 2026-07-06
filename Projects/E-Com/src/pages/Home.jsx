import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Search } from 'lucide-react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-12">
      <section className="text-center py-16 px-4 bg-gradient-to-br from-blue-500/10 to-slate-900 rounded-2xl border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.1)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-50 blur-2xl"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Elevate Your Lifestyle
          </h1>
          <p className="text-lg md:text-xl text-text-secondary">
            Discover premium products curated for modern living.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-bg-secondary p-4 rounded-xl border border-slate-700/50">
          <div className="relative w-full md:w-96">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-bg-primary border border-slate-700 text-text-primary pl-12 pr-4 py-3 rounded-full focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(category => (
              <button 
                key={category}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 border ${
                  selectedCategory === category 
                    ? 'bg-accent text-white border-accent shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                    : 'bg-bg-primary text-text-secondary border-slate-700 hover:border-accent hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-bg-secondary rounded-2xl border border-slate-700">
            <h2 className="text-2xl font-bold mb-2">No products found</h2>
            <p className="text-text-secondary">Try adjusting your search or category filters.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
