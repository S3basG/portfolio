import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/content';
import type { Project, Category } from '../../types';

interface WorkProps {
  onSelectProject?: (p: Project) => void;
}

export const Work = ({ onSelectProject }: WorkProps) => {
  const [filter, setFilter] = useState<Category>('All');
  
  const filteredProjects = projects.filter(p => 
    filter === 'All' ? true : p.category === filter
  );

  return (
    <section id="work" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - New Style */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-purple-600 dark:text-purple-400 tracking-[0.3em] uppercase">
              01
            </span>
            <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-zinc-900 dark:text-white mb-6">
            Selected Projects
          </h2>
          
          {/* Filters - Redesigned */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Data', 'Engineering', 'Design'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as Category)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                  filter === cat 
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900' 
                    : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Completely New Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              onClick={() => onSelectProject?.(project)}
              className="group block"
            >
              <article className="h-full flex flex-col bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-300 overflow-hidden">
                
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${project.image} group-hover:scale-110 transition-transform duration-700`}></div>
                  
                  {/* Project Number Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white dark:bg-zinc-900 flex items-center justify-center font-mono font-bold text-lg border-2 border-zinc-900 dark:border-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-zinc-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700/50 px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-700">
                    <span className="text-xs font-mono text-zinc-500">{project.year}</span>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex items-center gap-2">
                      View Project
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
                
              </article>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};