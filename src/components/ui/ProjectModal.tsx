import { useEffect, useState } from 'react';
import { X, Calendar, Tag, Github, ArrowUpRight, Terminal, Layers } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="absolute inset-0 z-50 flex items-center justify-center p-8 bg-black/90"
          onClick={() => setExpandedImage(null)}
        >
          <button 
            onClick={() => setExpandedImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors z-10"
          >
            <X size={24} />
          </button>
          <img 
            src={expandedImage} 
            alt="Expanded view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      <div className="relative w-full max-w-6xl h-full md:h-[90vh] bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-2xl overflow-y-auto flex flex-col transition-colors duration-500">
        
        {/* Modal Header Image */}
        <div className={`w-full h-64 md:h-96 shrink-0 bg-gradient-to-br ${project.image} relative`}>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors z-10"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-2">{project.title}</h2>
            <div className="flex gap-4 text-white/80 font-mono text-sm">
              <span className="flex items-center gap-2"><Calendar size={14}/> {project.year}</span>
              <span className="flex items-center gap-2"><Tag size={14}/> {project.category}</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8 md:p-12 space-y-12">
          
          {/* Hero Description - Full Width */}
          <div className="max-w-full">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-zinc-800 dark:text-zinc-300 border-l-4 border-purple-500 pl-6">
              {project.fullDescription}
            </p>
          </div>

          {/* Challenge & Solution - Prominent Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 p-8 rounded-xl border-2 border-purple-200 dark:border-purple-800/50 shadow-lg">
              <h3 className="font-bold text-xl mb-4 text-zinc-900 dark:text-white flex items-center gap-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Terminal size={20} className="text-white"/>
                </div>
                The Challenge
              </h3>
              <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{project.challenge}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 p-8 rounded-xl border-2 border-blue-200 dark:border-blue-800/50 shadow-lg">
              <h3 className="font-bold text-xl mb-4 text-zinc-900 dark:text-white flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Layers size={20} className="text-white"/>
                </div>
                The Solution
              </h3>
              <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack & Links - Horizontal Layout */}
          <div className="grid md:grid-cols-2 gap-8 border-t border-b border-zinc-200 dark:border-zinc-800 py-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
                <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700"></div>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-zinc-200 dark:bg-white/5 text-zinc-800 dark:text-zinc-300 text-xs font-mono rounded-full border border-zinc-300 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
                <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700"></div>
                Links
              </h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group">
                  <Github size={18} className="group-hover:scale-110 transition-transform" /> 
                  <span className="group-hover:underline">View Source Code</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group">
                  <ArrowUpRight size={18} className="group-hover:scale-110 transition-transform" /> 
                  <span className="group-hover:underline">Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Content - Full Width Process */}
          <div className="space-y-10 text-zinc-800 dark:text-zinc-300">
            {project.process && (
              <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6 flex items-center gap-2">
                  <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
                  The Process
                </h3>
                <div className="space-y-8">
                  {project.process.map((step, idx) => {
                    // Check if step is a string or object
                    const isString = typeof step === 'string';
                    const stepText = isString ? step : step.text;
                    const stepImages = isString ? null : step.images;
                    
                    return (
                      <div key={idx} className="space-y-4">
                        <div className="flex gap-4 group">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-mono text-sm font-bold group-hover:scale-110 transition-transform">
                            {idx + 1}
                          </div>
                          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 pt-1">
                            {stepText}
                          </p>
                        </div>
                        
                        {/* Render clickable images if they exist */}
                        {stepImages && stepImages.length > 0 && (
                          <div className="ml-12 grid grid-cols-2 md:grid-cols-3 gap-3">
                            {stepImages.map((imgPath, imgIdx) => (
                              <div 
                                key={imgIdx}
                                className="aspect-video bg-zinc-200 dark:bg-white/5 rounded-lg overflow-hidden border border-zinc-300 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-600 transition-all cursor-zoom-in group"
                                onClick={() => setExpandedImage(imgPath)}
                              >
                                <img 
                                  src={imgPath}
                                  alt={`Step ${idx + 1} - Image ${imgIdx + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                  <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
                  Project Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((imgPath, idx) => (
                    <div 
                      key={idx} 
                      className="aspect-video bg-zinc-200 dark:bg-white/5 rounded-lg overflow-hidden border border-zinc-300 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-600 transition-all cursor-zoom-in group"
                      onClick={() => setExpandedImage(imgPath)}
                    >
                      <img 
                        src={imgPath} 
                        alt={`${project.title} - Image ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
