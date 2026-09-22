import React, { useState, useRef, useEffect } from 'react';
import { useTheme, ThemeMode } from '../context/ThemeContext';
import { Sun, Moon, Laptop, ChevronDown, Check } from 'lucide-react';

interface ThemeToggleProps {
  variant?: 'compact' | 'dropdown' | 'segmented';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'dropdown', className = '' }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'segmented') {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 text-xs ${className}`}
        role="group"
        aria-label="Theme selection"
      >
        <button
          onClick={() => setTheme('system')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
            theme === 'system'
              ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          title="Automatically adapt to browser / system theme"
        >
          <Laptop className="w-3.5 h-3.5" />
          <span>Auto</span>
          {theme === 'system' && (
            <span className="text-[10px] opacity-75 font-mono">({resolvedTheme})</span>
          )}
        </button>

        <button
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
            theme === 'light'
              ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-300 shadow-sm font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          title="Force light theme"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Light</span>
        </button>

        <button
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
            theme === 'dark'
              ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          title="Force dark theme"
        >
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
          <span>Dark</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700 transition-colors cursor-pointer"
        id="theme-selector-btn"
        title={`Current theme: ${theme === 'system' ? `Auto (Browser ${resolvedTheme})` : theme}. Click to change`}
      >
        {theme === 'system' ? (
          <Laptop className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
        ) : theme === 'light' ? (
          <Sun className="w-3.5 h-3.5 text-amber-500" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
        )}

        <span className="capitalize hidden sm:inline">
          {theme === 'system' ? `Auto (${resolvedTheme})` : theme}
        </span>
        <ChevronDown className="w-3 h-3 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl py-1.5 z-50 text-xs text-slate-700 dark:text-slate-200 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800 mb-1">
            Browser Theme Sync
          </div>

          <button
            onClick={() => {
              setTheme('system');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-left flex items-center justify-between transition-colors ${
              theme === 'system'
                ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-300 font-semibold'
                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <Laptop className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
              <div>
                <p className="leading-none">System Auto</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                  Follows browser ({resolvedTheme})
                </p>
              </div>
            </div>
            {theme === 'system' && <Check className="w-3.5 h-3.5 text-sky-500" />}
          </button>

          <button
            onClick={() => {
              setTheme('light');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-left flex items-center justify-between transition-colors ${
              theme === 'light'
                ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-300 font-semibold'
                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Light Mode</span>
            </div>
            {theme === 'light' && <Check className="w-3.5 h-3.5 text-amber-500" />}
          </button>

          <button
            onClick={() => {
              setTheme('dark');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-left flex items-center justify-between transition-colors ${
              theme === 'dark'
                ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 font-semibold'
                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Dark Mode</span>
            </div>
            {theme === 'dark' && <Check className="w-3.5 h-3.5 text-indigo-400" />}
          </button>
        </div>
      )}
    </div>
  );
};
