import { useState, useEffect, useRef } from 'react';

// Sound Engine using Web Audio API for interactive feedback
const playSound = (type) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    if (type === 'inc') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'dec') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'reset') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.setValueAtTime(600, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(800, ctx.currentTime + 0.2);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    }
  } catch (e) {
    console.error("Audio not supported or interaction required first", e);
  }
};

function App() {
  // LocalStorage Persistence State Initialization
  const [count, setCount] = useState(() => parseInt(localStorage.getItem('tracker_count')) || 0);
  const [goal, setGoal] = useState(() => parseInt(localStorage.getItem('tracker_goal')) || 3600);
  const [theme, setTheme] = useState(() => localStorage.getItem('tracker_theme') || 'dark');
  
  // App States
  const [step, setStep] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [clicks, setClicks] = useState(0);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('tracker_count', count);
    localStorage.setItem('tracker_goal', goal);
    localStorage.setItem('tracker_theme', theme);
  }, [count, goal, theme]);

  // Apply Theme to Document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Session Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const inc = (amount = step) => {
    setCount(prev => {
      const next = Math.min(goal, prev + amount);
      if (next !== prev) {
        playSound(next === goal ? 'success' : 'inc');
        setClicks(c => c + 1);
      }
      return next;
    });
  };

  const dec = (amount = step) => {
    setCount(prev => {
      const next = Math.max(0, prev - amount);
      if (next !== prev) {
        playSound('dec');
        setClicks(c => c + 1);
      }
      return next;
    });
  };

  const reset = () => {
    if (count !== 0) {
      setCount(0);
      setAutoPlay(false);
      playSound('reset');
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') { e.preventDefault(); inc(step); }
      if (e.key === 'ArrowDown') { e.preventDefault(); dec(step); }
      if (e.key === 'r' || e.key === 'R') reset();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, count, goal]); 

  // AutoPlay logic
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCount(prev => {
          if (prev >= goal) {
            setAutoPlay(false);
            playSound('success');
            return prev;
          }
          playSound('inc');
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, goal]);

  const progress = (count / goal) * 100;

  // Achievement Tiers Logic
  const getTier = () => {
    if (progress >= 100) return { name: 'Master', color: 'text-success', border: 'border-success', badge: 'badge-success' };
    if (progress >= 75) return { name: 'Diamond', color: 'text-info', border: 'border-info', badge: 'badge-info' };
    if (progress >= 50) return { name: 'Gold', color: 'text-warning', border: 'border-warning', badge: 'badge-warning' };
    if (progress >= 25) return { name: 'Silver', color: 'text-neutral-content', border: 'border-neutral', badge: 'badge-neutral' };
    return { name: 'Bronze', color: 'text-error', border: 'border-error', badge: 'badge-error' };
  };
  
  const tier = getTier();
  const cpm = elapsed > 0 ? Math.round((clicks / elapsed) * 60) : 0;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 lg:p-8 transition-colors duration-300 font-sans">
      {/* Header & Theme Toggle */}
      <div className="flex justify-between items-center mb-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-content shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tracker<span className="font-light text-base-content">Pro</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs opacity-60 bg-base-100 px-3 py-1.5 rounded-lg shadow-sm border border-base-300">
            <kbd className="kbd kbd-xs">▲</kbd> <kbd className="kbd kbd-xs">▼</kbd> count
            <kbd className="kbd kbd-xs ml-1">R</kbd> reset
          </div>
          <button onClick={toggleTheme} className="btn btn-circle btn-ghost bg-base-100 shadow-sm border border-base-300">
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* Main Counter Card */}
        <div className="lg:col-span-2 card bg-base-100 shadow-xl border border-base-300 relative overflow-hidden">
          {/* Progress Background */}
          <div 
            className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-700 ease-out z-0"
            style={{ width: `${progress}%` }}
          ></div>
          
          <div className="card-body p-8 relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-sm font-bold text-base-content/60 uppercase tracking-widest mb-1">Current Progress</h2>
                <div className={`badge ${tier.badge} badge-outline gap-1 shadow-sm font-bold`}>
                  Tier: {tier.name}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-base-content/60 uppercase tracking-widest mb-1">Goal</div>
                <div className="text-2xl font-black">{goal}</div>
              </div>
            </div>

            <div className="flex justify-center items-center py-8 lg:py-12">
              <div className="text-[8rem] lg:text-[10rem] font-black tabular-nums tracking-tighter leading-none text-base-content drop-shadow-xl relative">
                {count}
                {count === goal && (
                  <div className="absolute -top-4 -right-8 text-4xl animate-bounce">🏆</div>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-auto">
              <button
                onClick={() => dec()}
                disabled={count === 0}
                className="btn btn-secondary btn-circle btn-lg h-20 w-20 text-4xl shadow-lg hover:scale-105 transition-transform"
              >
                -
              </button>
              
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                disabled={count === goal}
                className={`btn btn-circle btn-lg h-16 w-16 shadow-inner transition-transform ${autoPlay ? 'btn-error animate-pulse' : 'btn-neutral'}`}
                data-tip={autoPlay ? 'Pause' : 'Auto Play'}
              >
                {autoPlay ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                )}
              </button>

              <button
                onClick={reset}
                className="btn btn-circle btn-ghost h-16 w-16 opacity-70 hover:opacity-100 hover:bg-base-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </button>

              <button
                onClick={() => inc()}
                disabled={count === goal}
                className="btn btn-primary btn-circle btn-lg h-20 w-20 text-4xl shadow-lg hover:scale-105 transition-transform"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          
          {/* Stats Card */}
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body p-6">
              <h3 className="font-bold text-base-content/80 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                Session Analytics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-base-200 p-3 rounded-xl border border-base-300">
                  <div className="text-xs text-base-content/60 font-semibold mb-1">Time Elapsed</div>
                  <div className="text-xl font-black font-mono">{formatTime(elapsed)}</div>
                </div>
                <div className="bg-base-200 p-3 rounded-xl border border-base-300">
                  <div className="text-xs text-base-content/60 font-semibold mb-1">Pace (CPM)</div>
                  <div className="text-xl font-black font-mono">{cpm}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Card */}
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body p-6">
              <h3 className="font-bold text-base-content/80 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                Configuration
              </h3>
              
              <div className="form-control w-full mb-4">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs">Target Goal</span>
                  <span className="label-text-alt font-mono bg-base-200 px-2 py-0.5 rounded">{goal}</span>
                </label>
                <input 
                  type="range" min="10" max="3600" step="10" value={goal} 
                  onChange={(e) => setGoal(parseInt(e.target.value))}
                  className="range range-xs range-secondary" 
                />
              </div>

              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs">Step Multiplier</span>
                  <span className="label-text-alt font-mono bg-base-200 px-2 py-0.5 rounded">x{step}</span>
                </label>
                <input 
                  type="range" min="1" max="10" value={step} 
                  onChange={(e) => setStep(parseInt(e.target.value))}
                  className="range range-xs range-accent" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast notifications */}
      {(count === goal) && (
        <div className="toast toast-top toast-center mt-4 z-50">
          <div className="alert alert-success shadow-xl font-bold animate-bounce text-success-content flex gap-2">
            <span className="text-xl">🎉</span> Target Goal Reached!
          </div>
        </div>
      )}
    </div>
  );
}

export default App;