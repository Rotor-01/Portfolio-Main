import { useState, useEffect, useRef } from 'react';
import { Clock, GitCommit, Palette } from '@/components/Icons';
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

  const elapsed = useRef(timeElapsed);

  useEffect(() => {
    const saveTime = () => localStorage.setItem('portfolio_time_elapsed', String(elapsed.current));
    const saveWhenHidden = () => {
      if (document.visibilityState === 'hidden') saveTime();
    };
    const timeInterval = setInterval(() => {
      elapsed.current += 1;
      setTimeElapsed(elapsed.current);
    }, 1000);
    window.addEventListener('pagehide', saveTime);
    document.addEventListener('visibilitychange', saveWhenHidden);
    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('pagehide', saveTime);
      document.removeEventListener('visibilitychange', saveWhenHidden);
      saveTime();
    };
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground border-t border-black py-2 px-4 lg:px-8 z-20 flex flex-wrap items-center justify-between font-mono text-xs uppercase tracking-widest">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2" title="Total time visiting this portfolio">
          <Clock className="w-4 h-4 text-pool-orange" />
          <span>TIME HERE {formatTime(timeElapsed)}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2" title="Portfolio source code">
          <GitCommit className="w-4 h-4 text-pool-orange" />
          <a href="https://github.com/Rotor-01/Portfolio-Main" target="_blank" rel="noreferrer" className="hover:text-pool-cream hover:underline transition-all">
            Site source
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
