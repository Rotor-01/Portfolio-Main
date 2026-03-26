import { useState, useEffect } from 'react';
import { Clock, GitCommit, Palette } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();

  const [timeElapsed, setTimeElapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_time_elapsed');
      if (saved) return parseInt(saved, 10);
    }
    return 0;
  });

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_time_elapsed', timeElapsed.toString());
    }
  }, [timeElapsed]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground border-t border-black py-2 px-4 lg:px-8 z-20 flex flex-wrap items-center justify-between font-mono text-xs uppercase tracking-widest">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2" title="Session Time Elapsed">
          <Clock className="w-4 h-4 text-pool-orange" />
          <span>SESSION: {formatTime(timeElapsed)}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2" title="Latest Commit">
          <GitCommit className="w-4 h-4 text-pool-orange" />
          <a href="https://github.com/Rotor-01/Portfolio-Main" target="_blank" rel="noreferrer" className="hover:text-pool-cream hover:underline transition-all">
            b5f95e5
          </a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2" title="Current Active Theme">
          <Palette className="w-4 h-4 text-pool-orange" />
          <span>THEME: {theme.replace('theme-', '').toUpperCase()}</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-pool-orange animate-pulse">●</span> SYSTEM ONLINE
        </div>
      </div>
    </div>
  );
};

export default Footer;
