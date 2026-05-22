import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, loading, onToggle, onDelete }) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="p-6 flex flex-col min-h-[300px] max-h-[500px]">
      <div className="flex justify-center gap-2 mb-4">
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 text-sm rounded-full capitalize font-medium transition-colors ${
              filter === f 
                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        {loading ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-4 py-10">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-500/50" />
            <p>Loading your tasks...</p>
          </div>
        ) : filteredTodos.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-4 py-10"
          >
            <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-slate-300 dark:text-slate-600" />
            </div>
            <p className="text-lg">No {filter !== 'all' ? filter : ''} tasks found!</p>
          </motion.div>
        ) : (
          <AnimatePresence mode="popLayout">
            {filteredTodos.map((todo) => (
              <TodoItem 
                key={todo._id} 
                todo={todo} 
                onToggle={onToggle} 
                onDelete={onDelete} 
              />
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default TodoList;
