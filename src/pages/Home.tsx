import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, FileText, Terminal, Palette, Clock, GitCommit, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import { useEffect, useState } from 'react';
import BentoCard from '@/components/BentoCard';
import ProjectCard from '@/components/ProjectCard';
import { useTheme, Theme } from '@/components/ThemeProvider';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building_AI_infrastructure...';
  const { theme, setTheme } = useTheme();

  const [timeElapsed, setTimeElapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_time_elapsed');
      if (saved) return parseInt(saved, 10);
    }
    return 0;
  });

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

    return () => {
      clearInterval(typingInterval);
      clearInterval(timeInterval);
    };
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

  const featuredProjects = [
    {
      title: 'Meme Memorial',
      description: 'A digital memorial for beloved internet memes. Browse through internet history and pay respects to the classics.',
      technologies: ['React', 'Next.js', 'Tailwind'],
      tag: 'Live',
      liveUrl: 'https://meme-memorial.vercel.app',
      imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y0ZjFlYSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzJkNWEyNyI+TUVNRSBNRU1PUklBTDwvdGV4dD48L3N2Zz4=',
    }
  ];

  const availableThemes: { id: Theme; name: string; color: string }[] = [
    { id: 'theme-vintage', name: 'Vintage', color: 'bg-[#f4f1ea]' },
    { id: 'theme-bubblegum', name: 'Bubblegum', color: 'bg-[#fbe8ef]' },
    { id: 'theme-midnight', name: 'Midnight', color: 'bg-[#1a1a1c]' },
    { id: 'dark', name: 'Deep Sea', color: 'bg-[#1a1a2e]' },
  ];

  return (
    <main className="min-h-screen pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-pool-cream relative overflow-hidden transition-colors duration-500">
      <SEO />
      <div className="grain-overlay" />

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-black opacity-20 rotate-12 hidden lg:block pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-black opacity-20 hidden lg:block pointer-events-none" />

      {/* Bento Grid layout */}
      <div className="max-w-6xl mx-auto relative z-10 mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Section 1: Hero / Bio (Spans 3 cols on large) */}
        <BentoCard 
          title="Welcome.sys" 
          icon={<Terminal className="w-4 h-4" />} 
          className="md:col-span-2 lg:col-span-3 min-h-[300px]"
        >
          <div className="p-8 sm:p-10 flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 italic text-foreground leading-tight">
              Hey! I'm Roshan Tom <br className="hidden sm:block" />
              <span className="text-primary not-italic block sm:inline mt-2 sm:mt-0">Robinson</span>
            </h1>
            <p className="text-lg sm:text-xl font-mono text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I'm transitioning into Computer Engineering with a focus on AI hardware and networking. 
              Scaling infrastructure and maintaining ML systems is what keeps me building.
            </p>
            
            <div className="h-6 mb-8 font-mono text-sm text-primary flex items-center">
              <span className="mr-2 font-bold">&gt;</span> {typedText}<span className="animate-pulse">_</span>
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-6 border-t border-black/10">
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 border border-black rounded-none shadow-retro hover:translate-y-0.5 hover:shadow-none transition-all">
                <Link to="/about">More about me <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <div className="flex gap-2 ml-auto sm:ml-4">
                {[
                  { icon: Github, href: "https://github.com/RoshanTomRobin", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/roshan-tom-robinson-31b47b295", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:roshantomrobinson@gmail.com", label: "Email" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-black/20 hover:border-black hover:bg-pool-cream transition-all group bg-card"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Let's Connect (Spans 1 col) */}
        <BentoCard 
          title="Comms_Link.exe" 
          icon={<Mail className="w-4 h-4" />}
          className="md:col-span-1 lg:col-span-1"
          delay={100}
        >
          <div className="p-6 flex flex-col items-center justify-center text-center h-full gap-4">
            <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center bg-pool-orange/10 mb-2 group hover:bg-pool-orange/20 transition-all">
              <Mail className="w-8 h-8 text-pool-orange group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif text-2xl font-bold italic">Let's Connect</h3>
            <p className="text-sm text-muted-foreground font-mono">Always open to interesting projects and conversations.</p>
            <Button asChild size="sm" variant="outline" className="w-full mt-auto bg-card hover:bg-pool-cream border border-black rounded-none shadow-retro hover:translate-y-0.5 hover:shadow-none transition-all text-foreground">
              <Link to="/contact">Book a Chat</Link>
            </Button>
          </div>
        </BentoCard>

        {/* Section 2: Featured Projects Title Header */}
        <div className="md:col-span-3 lg:col-span-4 mt-8 flex justify-between items-end border-b border-black/20 pb-2">
           <h2 className="text-3xl font-serif font-bold italic">Featured Projects</h2>
           <Link to="/projects" className="font-mono text-sm text-pool-orange hover:text-black hover:underline transition-all">View all projects</Link>
        </div>

        {/* Featured Projects Content */}
        {featuredProjects.map((project, idx) => (
          <div key={idx} className="md:col-span-3 lg:col-span-2 relative animate-fade-in-up" style={{ animationDelay: `${200 + (idx * 100)}ms` }}>
            <ProjectCard {...project} />
          </div>
        ))}

        {/* Placeholder for 2nd project if it doesn't exist to balance grid layout */}
        {featuredProjects.length === 1 && (
          <div className="md:col-span-3 lg:col-span-2 hidden lg:block opacity-60">
             <BentoCard title="Empty_Slot.sys" icon={<Terminal className="w-4 h-4"/>} className="h-full border-dashed" delay={300}>
                <div className="flex flex-col items-center justify-center h-full min-h-[300px] font-mono text-muted-foreground text-sm uppercase">
                   <div className="w-8 h-8 border border-muted-foreground/50 rounded-full animate-ping mb-4"></div>
                   <p>Awaiting_Deployment</p>
                </div>
             </BentoCard>
          </div>
        )}

        {/* Section 3: Dashboard Highlights Title Header */}
        <div className="md:col-span-3 lg:col-span-4 mt-8 flex justify-between items-end border-b border-black/20 pb-2">
           <h2 className="text-3xl font-serif font-bold italic">Dashboard / Highlights</h2>
        </div>

        {/* Theme Settings Highlight */}
        <BentoCard title="Theme_Config.sys" icon={<Palette className="w-4 h-4"/>} className="md:col-span-1 lg:col-span-2" delay={400}>
           <div className="p-6 h-full flex flex-col">
             <h3 className="font-bold text-xl mb-3 font-serif italic text-primary">System Appearance</h3>
             <p className="text-sm text-muted-foreground mb-6 font-mono leading-relaxed">
               Select an environment theme. Accent colors and backgrounds will recalibrate accordingly.
             </p>
             <div className="mt-auto grid grid-cols-2 gap-3">
                {availableThemes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`flex items-center gap-3 p-3 border font-mono text-xs uppercase text-left transition-all ${theme === t.id ? 'border-primary bg-primary/10' : 'border-black/20 hover:border-black bg-card'}`}
                  >
                    <div className={`w-4 h-4 rounded-full border border-black/50 ${t.color}`} />
                    <span className="flex-1 truncate">{t.name}</span>
                    {theme === t.id && <Check className="w-4 h-4 text-primary shrink-0" />}
                  </button>
                ))}
             </div>
           </div>
        </BentoCard>

        {/* Recent Commits (Mock Terminal styling) */}
        <BentoCard title="Terminal_Log" icon={<GitCommit className="w-4 h-4"/>} className="md:col-span-1 lg:col-span-1" delay={500}>
          <div className="p-5 flex flex-col h-full bg-[#1a1a1a] text-[#4a90e2] font-mono text-xs">
            <h3 className="text-pool-cream mb-4 border-b border-white/20 pb-2 uppercase tracking-wider flex items-center justify-between">
              <span>Recent Commits</span>
              <span className="text-[10px] text-white/50">[[info]]</span>
            </h3>
            <ul className="space-y-3 flex-grow opacity-90 overflow-hidden">
              <li className="flex gap-2">
                <span className="text-pool-orange shrink-0">~</span>
                <span className="truncate hover:text-white transition-colors cursor-pointer">feat(ui): add bento dashboard</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pool-orange shrink-0">~</span>
                <span className="truncate hover:text-white transition-colors cursor-pointer">refactor(home): migrate to grid</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pool-orange shrink-0">~</span>
                <span className="truncate hover:text-white transition-colors cursor-pointer">fix(counter): sync global state</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pool-orange shrink-0">~</span>
                <span className="truncate hover:text-white transition-colors cursor-pointer">docs: update readme goals</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
               <a href="https://github.com/Rotor-01/Portfolio-Main" target="_blank" rel="noreferrer" className="text-pool-orange hover:text-white hover:underline tracking-widest text-[10px] uppercase">
                 [View on GitHub]
               </a>
               <span className="animate-pulse w-2 h-4 bg-pool-orange inline-block"></span>
            </div>
          </div>
        </BentoCard>

        {/* Ideas / Notepad */}
        <BentoCard title="ideas.txt" icon={<FileText className="w-4 h-4"/>} className="md:col-span-1 lg:col-span-1" delay={600}>
           <div className="p-6 font-mono text-xs text-foreground leading-relaxed h-full bg-card relative">
             {/* Note lines background pattern */}
             <div className="absolute inset-0 pointers-events-none opacity-5" style={{ backgroundImage: 'linear-gradient(transparent 95%, #000 100%)', backgroundSize: '100% 24px' }}></div>
             <p className="text-muted-foreground italic mb-6 relative z-10">// Hardware & Software pipelined</p>
             <div className="space-y-6 relative pl-4 z-10">
                <div className="absolute left-0 top-1 bottom-1 w-px bg-pool-orange/30"></div>
                <div className="group">
                  <h4 className="font-bold mb-1 group-hover:text-primary transition-colors text-sm">Smart Beyblade</h4>
                  <p className="text-muted-foreground">RPM tracking, impact forces via Bluetooth.</p>
                </div>
                <div className="group">
                  <h4 className="font-bold mb-1 group-hover:text-primary transition-colors text-sm">Y2K Car Radio</h4>
                  <p className="text-muted-foreground">90s themed head unit with CarPlay integration over wireless.</p>
                </div>
             </div>
           </div>
        </BentoCard>

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
    </main>
  );
};

export default Home;
