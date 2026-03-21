import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, FileText, Terminal, MousePointerClick, Clock, GitCommit } from 'lucide-react';
import SEO from '@/components/SEO';
import { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building_modern_web_experiences...';

  const [timeElapsed, setTimeElapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_time_elapsed');
      if (saved) return parseInt(saved, 10);
    }
    return 0;
  });
  const [localClicks, setLocalClicks] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_local_clicks');
      if (saved) return parseInt(saved, 10);
    }
    return 0;
  });
  const [globalClicks, setGlobalClicks] = useState<number | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_global_clicks');
      if (saved) return parseInt(saved, 10);
    }
    return null;
  });
  const pendingClicks = useRef(0);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const timeInterval = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    // Fetch initial global clicks
    fetch('https://api.counterapi.dev/v1/roshantomrobinson/portfolio_clicks', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === 'number') {
          setGlobalClicks(prev => {
            const current = prev !== null ? prev : 0;
            if (current > data.count) {
              // Server missed some clicks (probably refreshed before queue emptied). 
              // Force server to catch up to our known state!
              fetch(`https://api.counterapi.dev/v1/roshantomrobinson/portfolio_clicks/set?count=${current}`, { cache: 'no-store' }).catch(() => {});
              return current;
            }
            return data.count; // Server is ahead or equal, sync to server
          });
        } else {
          setGlobalClicks(prev => prev !== null ? prev : 1420069);
        }
      })
      .catch((err) => {
        console.error('Counter API Initial Fetch Error:', err);
        setGlobalClicks(prev => prev !== null ? prev : 1420069);
      });

    // Poll for global updates from others every 10 seconds
    const pollInterval = setInterval(() => {
      fetch('https://api.counterapi.dev/v1/roshantomrobinson/portfolio_clicks', { cache: 'no-store' })
        .then(res => res.json())
        .then(data => {
          if (data && typeof data.count === 'number') {
            setGlobalClicks(prev => Math.max(prev || 0, data.count));
          }
        })
        .catch(() => {});
    }, 10000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(timeInterval);
      clearInterval(pollInterval);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_local_clicks', localClicks.toString());
      localStorage.setItem('portfolio_time_elapsed', timeElapsed.toString());
      if (globalClicks !== null) {
        localStorage.setItem('portfolio_global_clicks', globalClicks.toString());
      }
    }
  }, [localClicks, timeElapsed, globalClicks]);

  // Process queued clicks to the API without rate limiting the browser
  useEffect(() => {
    const processQueue = setInterval(() => {
      if (pendingClicks.current > 0) {
        pendingClicks.current -= 1;
        fetch('https://api.counterapi.dev/v1/roshantomrobinson/portfolio_clicks/up', { cache: 'no-store' })
          .catch((err) => {
            console.error('Counter API Up Error:', err);
          });
      }
    }, 500);

    return () => clearInterval(processQueue);
  }, []);

  useEffect(() => {
    const handleClick = () => {
      setLocalClicks(prev => prev + 1);
      setGlobalClicks(prev => (prev || 0) + 1);
      pendingClicks.current += 1;
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <main className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-pool-cream relative overflow-hidden">
      <SEO />
      <div className="grain-overlay" />

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-black opacity-20 rotate-12 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-black opacity-20 hidden lg:block" />

      {/* Main Content Window */}
      <div className="max-w-4xl mx-auto relative z-10 mt-10 sm:mt-20">
        <div className="bg-card border border-black shadow-retro-lg animate-fade-in-up">
          {/* Window Header */}
          <div className="bg-primary text-primary-foreground px-4 py-2 border-b border-black flex items-center justify-between">
            <span className="font-mono text-sm uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Welcome.sys
            </span>
            <div className="flex gap-1">
              <div className="w-3 h-3 border border-black bg-white" />
              <div className="w-3 h-3 border border-black bg-white" />
            </div>
          </div>

          {/* Window Body */}
          <div className="p-8 sm:p-12 md:p-16 text-center">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight italic text-foreground">
              Roshan Tom <br className="hidden sm:block" />
              <span className="text-primary not-italic">Robinson</span>
            </h1>

            <p className="text-xl sm:text-2xl font-mono text-muted-foreground mb-8">
              Full Stack Software Developer
            </p>

            <div className="h-8 mb-8 font-mono text-sm sm:text-base text-primary">
              {typedText}<span className="animate-pulse">_</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border border-black rounded-none shadow-retro hover:translate-y-0.5 hover:shadow-none transition-all min-w-[160px]">
                <Link to="/projects">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-pool-cream border border-black rounded-none shadow-retro hover:translate-y-0.5 hover:shadow-none transition-all min-w-[160px]">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>

            {/* Social Links Bar */}
            <div className="flex justify-center gap-4 pt-8 border-t border-black/10">
              {[
                { icon: Github, href: "https://github.com/RoshanTomRobin", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/roshan-tom-robinson-31b47b295", label: "LinkedIn" },
                { icon: Mail, href: "mailto:roshantomrobinson@gmail.com", label: "Email" },
                { icon: FileText, href: "/resume/roshan-tom-robinson-resume.pdf", label: "Resume" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-transparent hover:border-black hover:bg-pool-cream transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notepad Projects Window */}
      <div className="max-w-4xl mx-auto relative z-10 mt-12 mb-20">
        <div className="bg-[#fdfbf7] border border-black shadow-retro-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {/* Notepad Header */}
          <div className="bg-pool-cream text-foreground px-4 py-2 border-b border-black flex items-center justify-between">
            <span className="font-mono text-sm uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4" />
              ideas.txt
            </span>
            <div className="flex gap-1">
              <div className="w-3 h-3 border border-black bg-white" />
              <div className="w-3 h-3 border border-black bg-white" />
            </div>
          </div>

          {/* Notepad Body */}
          <div className="p-8 sm:p-10 font-mono text-sm sm:text-base text-foreground leading-relaxed relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-pool-orange/30 hidden sm:block"></div>
            <div className="sm:pl-8 space-y-6">
              <p className="text-muted-foreground italic mb-6">// Hardware & Software Projects in the Pipeline</p>
              
              <div className="group flex items-start gap-4">
                <span className="text-pool-orange mt-1 hidden sm:block">]</span>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Smart Beyblade</h3>
                  <p className="text-muted-foreground text-sm">Integrating real-time RPM tracking, impact forces, and Bluetooth telemetry into a custom chassis for data-driven battles.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <span className="text-pool-orange mt-1 hidden sm:block">]</span>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Y2K Car Radio Restomod</h3>
                  <p className="text-muted-foreground text-sm">A 90s/00s themed automotive head unit built from scratch. Features tactile retro buttons alongside modern CarPlay/Android Auto integration over wireless.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <span className="text-pool-orange mt-1 hidden sm:block">]</span>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Winamp-Style Spotify Desktop Client</h3>
                  <p className="text-muted-foreground text-sm">A fully functional, lightweight music player connecting to Spotify APIs, featuring modular nostalgic skins inspired by early 2000s software aesthetics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* InfoShower Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground border-t border-black py-2 px-4 lg:px-8 z-20 flex flex-wrap items-center justify-between font-mono text-xs uppercase tracking-widest">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2" title="Session Time Elapsed">
            <Clock className="w-4 h-4 text-pool-orange" />
            <span>SESSION: {formatTime(timeElapsed)}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2" title="Latest Commit">
            <GitCommit className="w-4 h-4 text-pool-orange" />
            <a href="https://github.com/RoshanTomRobin/Portfolio" target="_blank" rel="noreferrer" className="hover:text-pool-cream hover:underline transition-all">
              b5f95e5
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 select-none" title="Click anywhere to increase!">
            <MousePointerClick className="w-4 h-4 text-pool-orange" />
            <span>CLICKS: {globalClicks !== null ? globalClicks.toLocaleString() : '...'} <span className="text-pool-orange/80">({localClicks})</span></span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-pool-orange animate-pulse">●</span> SYSTEM ONLINE
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
