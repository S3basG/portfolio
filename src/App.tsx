import { useState, useEffect } from 'react';
//import { Analytics } from '@vercel/analytics/react';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Work } from './components/sections/Work';
import { Journey } from './components/sections/Journey';
import { Contact } from './components/sections/Contact';
import { ProjectModal } from './components/ui/ProjectModal';
import { NoiseOverlay } from './components/ui/NoiseOverlay';
import type { Project } from './types';

const App = () => {
  // Check system preference or localStorage
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    console.log('Dark mode:', darkMode, 'Classes:', root.className);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev: boolean) => !prev);
  };

  return (
    <div className="bg-[#FDFCF8] dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100 selection:bg-purple-500/30 dark:selection:bg-purple-500/90 selection:text-purple-900 dark:selection:text-white transition-colors duration-500">
      <NoiseOverlay />
      <Navigation darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <Work onSelectProject={setSelectedProject} />
        <Journey />
      </main>
      
      <Contact />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

     {/* <Analytics /> */}
    </div>
  );
};

export default App;