export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* New Split Layout Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="font-mono text-xs text-purple-600 dark:text-purple-400 tracking-[0.3em] uppercase">
                Portfolio 2025-2026
              </div>
              
              <h1 className="text-7xl md:text-8xl font-serif leading-none">
                <span className="block text-zinc-900 dark:text-white">Sebastian</span>
                <span className="block text-zinc-900 dark:text-white">Garcia</span>
              </h1>
              
              <div className="flex items-center gap-3 pt-4">
                <div className="h-px w-12 bg-purple-600 dark:bg-purple-400"></div>
                <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                  Computer Engineering
                </p>
              </div>
            </div>
            
            <div className="space-y-6 pl-0 md:pl-12 border-l-0 md:border-l-2 border-zinc-200 dark:border-zinc-800">
              <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Bridging the gap between <span className="text-purple-600 dark:text-purple-400 font-semibold">hardware and software</span> to build embedded systems, full-stack applications, and innovative solutions.
              </p>
              
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-zinc-600 dark:text-zinc-400">University of Florida · Class of 2026</span>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href="#work" 
                  className="px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white font-mono text-sm uppercase tracking-wider hover:bg-purple-700 dark:hover:bg-purple-600 transition-all shadow-lg hover:shadow-xl"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-mono text-sm uppercase tracking-wider hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-600 dark:border-purple-400"></div>
              <div className="relative aspect-[4/5] w-full max-w-md bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                <img 
                  src="/SebastianGarcia.jpeg" 
                  alt="Sebastian Garcia" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Bottom Right Accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600 dark:bg-purple-500 -z-10"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};