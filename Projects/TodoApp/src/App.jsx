import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const API_URL = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [serverError, setServerError] = useState(false);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const saveToLocalFallback = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('fallback_todos', JSON.stringify(newTodos));
  };

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTodos(response.data);
      setServerError(false);
    } catch (error) {
      console.warn('Backend unavailable. Using local storage fallback.');
      setServerError(true);
      const localTodos = JSON.parse(localStorage.getItem('fallback_todos') || '[]');
      setTodos(localTodos);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (text, priority) => {
    try {
      setAdding(true);
      const response = await axios.post(API_URL, { text, priority });
      setTodos([response.data, ...todos]);
      setServerError(false);
    } catch (error) {
      console.warn('Backend unavailable. Saving locally.');
      setServerError(true);
      const newTodo = {
        _id: Date.now().toString(),
        text,
        priority,
        completed: false,
        createdAt: new Date().toISOString()
      };
      saveToLocalFallback([newTodo, ...todos]);
    } finally {
      setAdding(false);
    }
  };

  const handleToggle = async (id, currentStatus) => {
    const updatedTodos = todos.map(t => t._id === id ? { ...t, completed: !currentStatus } : t);
    setTodos(updatedTodos);
    
    try {
      await axios.put(`${API_URL}/${id}`, { completed: !currentStatus });
      setServerError(false);
    } catch (error) {
      console.warn('Backend unavailable. Saving toggle locally.');
      setServerError(true);
      localStorage.setItem('fallback_todos', JSON.stringify(updatedTodos));
    }
  };

  const handleDelete = async (id) => {
    const updatedTodos = todos.filter(t => t._id !== id);
    setTodos(updatedTodos);

    try {
      await axios.delete(`${API_URL}/${id}`);
      setServerError(false);
    } catch (error) {
      console.warn('Backend unavailable. Saving delete locally.');
      setServerError(true);
      localStorage.setItem('fallback_todos', JSON.stringify(updatedTodos));
    }
  };

  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex items-center justify-center p-4 sm:p-8 font-sans transition-colors duration-300 selection:bg-indigo-500/30">
      
      {/* Background ambient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-50 dark:opacity-100">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-2xl bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl dark:shadow-indigo-900/10 overflow-hidden relative z-10 flex flex-col"
      >
        <Header progress={progress} isDark={isDark} toggleTheme={toggleTheme} />
        
        {serverError && (
          <div className="px-6 py-2 bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-900/30 flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400">
            <AlertCircle className="w-4 h-4" />
            Server disconnected. Changes are being saved locally to your browser.
          </div>
        )}

        <TodoInput onAdd={handleAddTodo} adding={adding} />
        <TodoList 
          todos={todos} 
          loading={loading} 
          onToggle={handleToggle} 
          onDelete={handleDelete} 
        />
      </motion.div>
    </div>
  );
}

export default App;