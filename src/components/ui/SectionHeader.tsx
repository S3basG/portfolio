interface SectionHeaderProps {
  title: string;
  number: string;
}

export const SectionHeader = ({ title, number }: SectionHeaderProps) => (
  <div className="flex items-baseline gap-4 mb-16 border-b border-zinc-300 dark:border-white/20 pb-4 transition-colors duration-500">
    <span className="font-mono text-sm text-purple-600 dark:text-purple-400">({number})</span>
    <h2 className="text-4xl md:text-5xl font-serif italic text-zinc-900 dark:text-white transition-colors duration-500">{title}</h2>
  </div>
);