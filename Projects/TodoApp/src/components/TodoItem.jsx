import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';

const priorityColors = {
  low: 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-400/10 dark:border-blue-400/20',
  medium: 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-400/10 dark:border-amber-400/20',
  high: 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-400/10 dark:border-red-400/20'
};

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: -20 }}
      transition={{ duration: 0.2 }}
      className={`group flex items-center justify-between p-4 mb-3 rounded-2xl border transition-all duration-300 ${
        todo.completed 
          ? 'bg-slate-50 border-slate-100 dark:bg-slate-800/30 dark:border-transparent text-slate-400 dark:text-slate-500' 
          : 'bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-800 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-sm'
      }`}
    >
      <div className="flex items-center gap-4 flex-1 cursor-pointer" onClick={() => onToggle(todo._id, todo.completed)}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex-shrink-0 transition-colors ${todo.completed ? 'text-indigo-500' : 'text-slate-300 dark:text-slate-600 group-hover:text-indigo-400'}`}
        >
          {todo.completed ? (
            <CheckCircle2 className="w-6 h-6" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </motion.button>
        <div className="flex flex-col">
          <span className={`text-lg transition-all duration-300 ${todo.completed ? 'line-through decoration-slate-300 dark:decoration-slate-600' : 'text-slate-700 dark:text-slate-200'}`}>
            {todo.text}
          </span>
          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full w-max mt-1 ${todo.completed ? 'opacity-50 grayscale bg-slate-100 text-slate-500 dark:bg-slate-800' : priorityColors[todo.priority || 'medium']}`}>
            {todo.priority || 'medium'}
          </span>
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo._id);
        }}
        className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all"
      >
        <Trash2 className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default TodoItem;
