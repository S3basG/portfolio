import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "../components/layout/Navigation";
import { NoiseOverlay } from "../components/ui/NoiseOverlay";
import { projects } from "../data/content";

export default function ProjectPage() {
  const { slug } = useParams();
  
  // Check system preference or localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  // Find project by ID (slug is the project ID)
  const project = projects.find(p => p.id === Number(slug));

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (!project) {
    return (
      <div className="bg-[#FDFCF8] dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100">
        <NoiseOverlay />
        <Navigation darkMode={darkMode} toggleTheme={toggleTheme} />
        <div className="pt-32 px-6 max-w-4xl mx-auto">
          <Link to="/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-serif mt-8">Project not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFCF8] dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
      <NoiseOverlay />
      <Navigation darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto relative z-10">
          <Link to="/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 inline-block font-mono text-sm">
            ← Back to home
          </Link>

          {/* Hero Image */}
          <div className="w-full aspect-[16/9] rounded-sm overflow-hidden mb-12">
            <div className={`w-full h-full bg-gradient-to-br ${project.image}`}></div>
          </div>

          {/* Project Header */}
          <div className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-full border border-purple-300 dark:border-purple-700">
                {project.category}
              </span>
              <span className="font-mono text-xs text-zinc-500">
                {project.year}
              </span>
              <span className="font-mono text-xs text-zinc-500">
                {project.size}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">{project.title}</h1>
            <p className="text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">{project.shortDescription}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Abstract/Overview Section - Research Paper Style */}
          <div className="mb-16 bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-sm font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4">Abstract</h2>
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Project Details - Two Column Research Style */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-zinc-300 dark:bg-zinc-700"></span>
                  Problem Statement
                </h2>
                <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed pl-10">{project.challenge}</p>
              </div>
              
              <div>
                <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-zinc-300 dark:bg-zinc-700"></span>
                  Technical Stack
                </h2>
                <div className="pl-10">
                  <div className="grid grid-cols-2 gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-zinc-300 dark:bg-zinc-700"></span>
                Solution Approach
              </h2>
              <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed pl-10">{project.solution}</p>
            </div>
          </div>

          {/* Key Metrics/Results Section */}
          <div className="mb-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-2">Project Type</h3>
              <p className="text-2xl font-serif text-zinc-900 dark:text-white">{project.category}</p>
            </div>
            <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-2">Timeline</h3>
              <p className="text-2xl font-serif text-zinc-900 dark:text-white">{project.year}</p>
            </div>
            <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-2">Scope</h3>
              <p className="text-2xl font-serif text-zinc-900 dark:text-white">{project.size}</p>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-serif mb-8">Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-[4/3] rounded-sm overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${img}`}></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process */}
          {project.process && project.process.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-serif mb-8">Process</h2>
              <div className="space-y-8">
                {project.process.map((item, idx) => (
                  <div key={idx}>
                    {typeof item === 'string' ? (
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{item}</p>
                    ) : (
                      <div>
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">{item.text}</p>
                        {item.images && item.images.length > 0 && (
                          <div className="grid md:grid-cols-2 gap-4">
                            {item.images.map((img, imgIdx) => (
                              <div key={imgIdx} className="aspect-[4/3] rounded-sm overflow-hidden">
                                <div className={`w-full h-full bg-gradient-to-br ${img}`}></div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Community/Mentors */}
          {project.community && (
            <div className="border-t border-zinc-300 dark:border-zinc-800 pt-12">
              <h2 className="text-2xl font-serif mb-4">Community</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">{project.community.text}</p>
              {project.community.mentors && project.community.mentors.length > 0 && (
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-zinc-500 mb-3">Mentors</h3>
                  <div className="flex flex-wrap gap-4">
                    {project.community.mentors.map((mentor, idx) => (
                      <a 
                        key={idx}
                        href={mentor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {mentor.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
  );
}