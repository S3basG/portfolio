import { GraduationCap } from 'lucide-react';
import { timeline } from '../../data/content';

export const Journey = () => {
  return (
    <section id="journey" className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-purple-600 dark:text-purple-400 tracking-[0.3em] uppercase">
              02
            </span>
            <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-zinc-900 dark:text-white">
            Background
          </h2>
        </div>

        {/* Education Card - Full Width */}
        <div className="mb-12">
          <div className="bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-zinc-900 dark:text-white mb-1">
                  University of Florida
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-mono text-sm">
                  Herbert Wertheim College of Engineering
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-purple-600 dark:text-purple-400 uppercase tracking-wider">Degree</span>
                  <span className="text-lg font-serif text-zinc-900 dark:text-white">B.S. in Computer Engineering</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-purple-600 dark:text-purple-400 uppercase tracking-wider">Expected</span>
                  <span className="text-lg font-serif text-zinc-900 dark:text-white">December 2026</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Computer Engineering student exploring the convergence of hardware and software. Building embedded systems, full-stack applications, and investigating how computing fundamentally shapes our world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline - Full Width Grid */}
        <div>
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-8">Experience Timeline</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.filter(t => t.type === 'extracurricular').map((item) => (
              <div key={item.id} className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-purple-600 dark:border-purple-400 p-6">
                <p className="font-mono text-xs text-zinc-500 mb-3">{item.year}</p>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{item.role}</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-3">{item.organization}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};