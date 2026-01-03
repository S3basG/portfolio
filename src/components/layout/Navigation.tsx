import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Navigation = ({ darkMode, toggleTheme }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-500 border-b border-zinc-200 dark:border-zinc-800">
      <a href="/" className="text-xl font-bold tracking-tighter hover:italic transition-all text-zinc-900 dark:text-white">
        Sebastian's <span className="font-serif font-normal text-purple-600 dark:text-purple-400">.Archive</span>
      </a>
      
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-300">
          <a href="#work" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">[ Work ]</a>
          <a href="#journey" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">[ About ]</a>
          <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">[ Contact ]</a>
        </div>

        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors text-zinc-900 dark:text-white"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="md:hidden text-zinc-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "[ Close ]" : "[ Menu ]"}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[80px] bg-zinc-50 dark:bg-zinc-950 z-[-1] flex flex-col items-center justify-center gap-8 transition-colors duration-500">
          <a href="#work" onClick={() => setIsOpen(false)} className="text-4xl font-serif italic text-zinc-900 dark:text-white">Work</a>
          <a href="#journey" onClick={() => setIsOpen(false)} className="text-4xl font-serif italic text-zinc-900 dark:text-white">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl font-serif italic text-zinc-900 dark:text-white">Contact</a>
        </div>
      )}
    </nav>
  );
};