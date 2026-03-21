import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-black h-14 flex items-center justify-between px-4 sm:px-6 shadow-sm">
        {/* Left: Logo / Brand */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary flex items-center justify-center border border-black shadow-retro-sm group-hover:translate-y-0.5 group-hover:translate-x-0.5 group-hover:shadow-none transition-all">
              <span className="text-primary-foreground font-serif italic font-bold text-xl">R</span>
            </div>
            <span className="font-serif font-bold text-xl tracking-tight hidden sm:block">
              Roshan<span className="italic text-primary">.TR</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-1.5 font-mono text-sm uppercase tracking-wider border border-transparent hover:border-black hover:bg-pool-cream hover:text-black transition-all ${location.pathname === link.path ? 'bg-black text-white border-black' : 'text-foreground'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Utilities / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-pool-cream border border-black font-mono text-xs">
            <Sun className="w-3 h-3" />
            <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden border border-black rounded-none hover:bg-pool-cream"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden pt-16">
          <nav className="mx-4 mt-4 bg-card border border-black shadow-retro p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 font-mono text-lg uppercase border border-transparent hover:border-black hover:bg-pool-cream hover:text-black transition-all ${location.pathname === link.path ? 'bg-primary text-primary-foreground border-black' : ''
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
