import React, { useState } from 'react';
import { Plus, Loader2, Flag } from 'lucide-react';

const TodoInput = ({ onAdd, adding }) => {
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAdd(inputValue, priority);
    setInputValue('');
  };

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            <Plus className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-16 text-slate-900 dark:text-slate-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all shadow-sm"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || adding}
            className="absolute inset-y-2 right-2 px-4 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/30 disabled:opacity-50 rounded-xl transition-colors flex items-center justify-center text-sm font-medium"
          >
            {adding ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Add'}
          </button>
        </div>
        
        {/* Priority Selector */}
        <div className="flex items-center gap-2 px-2">
          <Flag className="w-4 h-4 text-slate-400" />
          <span className="text-sm text-slate-500 dark:text-slate-400">Priority:</span>
          <div className="flex gap-2">
            {['low', 'medium', 'high'].map(p => (
              <button
                key={p}
                type="button"
                onClick={() => setPriority(p)}
                className={`text-xs px-3 py-1 rounded-md capitalize font-medium transition-colors ${
                  priority === p 
                    ? (p === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400' 
                       : p === 'medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' 
                       : 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400')
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
