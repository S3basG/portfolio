import { Linkedin, Github, FileText } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-purple-600 dark:text-purple-400 tracking-[0.3em] uppercase">
              03
            </span>
            <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-zinc-900 dark:text-white">
            Let's Connect
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Column - Message */}
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Interested in <span className="text-purple-600 dark:text-purple-400 font-serif italic">computer engineering</span>, embedded systems, or need advice on projects?
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:segarcia@ufl.edu" 
                className="block text-xl font-mono text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors border-b-2 border-zinc-300 dark:border-zinc-700 hover:border-purple-600 dark:hover:border-purple-400 pb-2"
              >
                segarcia@ufl.edu
              </a>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/sebastian-garcia100/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/S3basG" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Resume Download */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 dark:bg-purple-500 translate-x-2 translate-y-2"></div>
              <a 
                href="/Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-12 hover:-translate-x-1 hover:-translate-y-1 transition-transform group"
              >
                <FileText size={48} className="text-zinc-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                <p className="font-mono text-sm uppercase tracking-wider text-zinc-900 dark:text-white mb-2">Download</p>
                <p className="text-2xl font-serif text-zinc-900 dark:text-white">Resume</p>
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Footer */}
        <footer className="mt-24 pt-8 border-t-2 border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between gap-4 font-mono text-xs text-zinc-500 uppercase tracking-wider">
          <div>
            <p>&copy; 2025 Sebastian Garcia</p>
          </div>
          <div className="text-right">
            <p>Computer Engineering Student</p>
            <p>University of Florida</p>
          </div>
        </footer>
        
      </div>
    </section>
  );
};