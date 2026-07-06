import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CalendarDays, Moon, Sun } from 'lucide-react';
import { format } from 'date-fns';

const Header = ({ progress, isDark, toggleTheme }) => {
  return (
    <div className="p-8 pb-6 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-start justify-between mb-8">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 mb-2"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold tracking-wider text-sm uppercase">Focus Hub</span>
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            My Tasks
          </h1>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full text-sm font-medium">
            <CalendarDays className="w-4 h-4" />
            {format(new Date(), 'MMM dd, yyyy')}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium text-slate-500 dark:text-slate-400">
          <span>Daily Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
