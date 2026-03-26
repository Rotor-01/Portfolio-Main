import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface BentoCardProps {
  title: string;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  delay?: number;
}

const BentoCard = ({ title, className, children, icon, delay = 0 }: BentoCardProps) => {
  return (
    <div 
      className={cn(
        "bg-card border border-black shadow-retro-lg flex flex-col overflow-hidden animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Window Header */}
      <div className="bg-primary text-primary-foreground px-4 py-2 border-b border-black flex items-center justify-between shrink-0">
        <span className="font-mono text-sm uppercase tracking-wider flex items-center gap-2">
          {icon}
          {title}
        </span>
        <div className="flex gap-1 shrink-0 ml-4">
          <div className="w-3 h-3 border border-black bg-white" />
          <div className="w-3 h-3 border border-black bg-white" />
        </div>
      </div>

      {/* Window Body */}
      <div className="flex-grow flex flex-col relative bg-card">
        {children}
      </div>
    </div>
  );
};

export default BentoCard;
