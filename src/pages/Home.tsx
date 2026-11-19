import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Mail, FileText, Terminal, Palette, Check, Instagram } from 'lucide-react';
import SEO from '@/components/SEO';
import { useEffect, useState } from 'react';
import BentoCard from '@/components/BentoCard';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import { useTheme, Theme } from '@/components/ThemeProvider';
import { useToast } from '@/hooks/use-toast';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Focus: embedded systems';
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const [isHoveringTom, setIsHoveringTom] = useState(false);
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const [isRetreating, setIsRetreating] = useState(false);

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

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  const featuredProjects = projects.slice(0, 2);

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
          title="Profile.sys"
          icon={<Terminal className="w-4 h-4" />} 
          className="md:col-span-2 lg:col-span-3 min-h-[300px]"
        >
          <div className="p-8 sm:p-10 flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 italic text-foreground leading-tight">
              I’m Roshan{' '}
              <span className="whitespace-nowrap sm:whitespace-normal">
                <span 
                  className="relative inline-block cursor-help z-10"
                  onMouseEnter={() => setIsHoveringTom(true)}
                  onMouseLeave={() => setIsHoveringTom(false)}
                  onClick={() => {
                    if (isEasterEggActive || isRetreating) return;
                    setIsEasterEggActive(true);
                    setTimeout(() => {
                      setIsRetreating(true);
                      setTimeout(() => {
                        setIsEasterEggActive(false);
                        setIsRetreating(false);
                        setIsHoveringTom(false);
                      }, 500);
                    }, 1500);
                  }}
                >
                  {/* Tom Cat Image */}
                  <img 
                    src="/images/tom.png" 
                    alt="" 
                    className={`absolute left-[20%] bottom-0 w-auto h-16 md:h-20 max-w-none object-contain transition-all duration-500 z-0 select-none pointer-events-none drop-shadow-2xl origin-bottom
                      ${(isHoveringTom || isEasterEggActive) && !isRetreating ? '-translate-y-[90%] -translate-x-1/2 opacity-100 -rotate-12 scale-100' : 'translate-y-0 -translate-x-1/2 opacity-0 rotate-0 scale-50'}
                    `}
                  />
                  
                  {/* Jerry Mouse Image */}
                  <img 
                    src="/images/jerry.png" 
                    alt="" 
                    className={`absolute left-[80%] bottom-0 w-auto h-16 md:h-20 max-w-none object-contain transition-all duration-500 z-0 select-none pointer-events-none drop-shadow-2xl origin-bottom
                      ${isEasterEggActive && !isRetreating ? '-translate-y-[85%] -translate-x-1/3 opacity-100 rotate-12 scale-100' : 'translate-y-0 -translate-x-1/2 opacity-0 rotate-0 scale-50 delay-100'}
                    `}
                  />

                  <span className="relative z-20 px-1 transition-colors hover:text-pool-orange">Tom</span>
                </span>
                <span className="sm:hidden">&nbsp;</span>
                <br className="hidden sm:block" />
                <span className="text-primary not-italic inline-block sm:inline mt-1 sm:mt-0">Robinson</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-mono text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I plan to study computer engineering, with a focus on embedded systems, data centers, and networking.
              I want to follow a sensor reading all the way from a pin on a chip to a server across the network.
            </p>
            
            <div className="h-6 mb-8 font-mono text-sm text-primary flex items-center">
              <span className="mr-2 font-bold">&gt;</span> {typedText}<span className="animate-pulse">_</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center pt-6 border-t border-black/10 w-full">
              <Button asChild size="sm" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 border border-black rounded-none shadow-retro hover:translate-y-0.5 hover:shadow-none transition-all">
                <Link to="/about">Why engineering? <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <div className="flex flex-wrap gap-2 sm:ml-auto w-full sm:w-auto justify-center sm:justify-end">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('roshantomrobinson@gmail.com');
                    toast({ title: 'Email address copied', description: 'roshantomrobinson@gmail.com' });
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 border border-black/20 hover:border-black hover:bg-pool-cream transition-all text-xs font-mono bg-card"
                >
                  <Mail className="w-3.5 h-3.5 text-pool-orange shrink-0" />
                  <span className="truncate hidden sm:inline">roshantomrobinson [at] gmail [dot] com</span>
                </button>
                
                <a 
                  href="https://instagram.com/roshan.tom.robinson" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 border border-black/20 hover:border-black hover:bg-pool-cream transition-all text-xs font-mono bg-card"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E1306C] shrink-0" />
                  <span className="truncate hidden sm:inline">Instagram</span>
                </a>

                <a
                  href="https://github.com/Rotor-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 border border-black/20 hover:border-black hover:bg-pool-cream transition-all text-xs font-mono bg-card"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <span className="truncate hidden sm:inline">GitHub</span>
                </a>
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
            <h3 className="font-serif text-2xl font-bold italic">Compare notes</h3>
            <p className="text-sm text-muted-foreground font-mono">Working with a dev board or setting up a home lab? I’d love to hear what you’re trying.</p>
            <Button asChild size="sm" variant="outline" className="w-full mt-auto bg-card hover:bg-pool-cream border border-black rounded-none shadow-retro hover:translate-y-0.5 hover:shadow-none transition-all text-foreground">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </BentoCard>

        {/* Section 2: Featured Projects Title Header */}
        <div className="md:col-span-3 lg:col-span-4 mt-8 flex justify-between items-end border-b border-black/20 pb-2">
           <h2 className="text-3xl font-serif font-bold italic">From my project archive</h2>
           <Link to="/projects" className="font-mono text-sm text-pool-orange hover:text-black hover:underline transition-all">View all projects</Link>
        </div>

        {/* Featured Projects Content */}
        {featuredProjects.map((project, idx) => (
          <div key={project.title} className="md:col-span-3 lg:col-span-2 relative animate-fade-in-up" style={{ animationDelay: `${200 + (idx * 100)}ms` }}>
            <ProjectCard {...project} />
          </div>
        ))}

        {/* Placeholder for 2nd project if it doesn't exist to balance grid layout */}
        {featuredProjects.length === 1 && (
          <div className="md:col-span-3 lg:col-span-2 hidden lg:block">
             <BentoCard title="Lab_plan.txt" icon={<Terminal className="w-4 h-4"/>} className="h-full border-dashed" delay={300}>
               <div className="flex flex-col items-start justify-center h-full p-8 gap-4">
                 <h3 className="font-serif text-2xl font-bold italic">A temperature logger</h3>
                 <p className="text-sm text-muted-foreground">One build I’d like to try is a sensor that reports the temperature beside a server. I want to see how the readings change under load.</p>
                 <Link to="/skills" className="font-mono text-sm underline">Explore my learning plan</Link>
               </div>
             </BentoCard>
          </div>
        )}

        {/* Section 3: Dashboard Highlights Title Header */}
        <div className="md:col-span-3 lg:col-span-4 mt-8 flex justify-between items-end border-b border-black/20 pb-2">
           <h2 className="text-3xl font-serif font-bold italic">My workspace</h2>
        </div>

        {/* Theme Settings Highlight */}
        <BentoCard title="Theme_Config.sys" icon={<Palette className="w-4 h-4"/>} className="md:col-span-1 lg:col-span-2" delay={400}>
           <div className="p-6 h-full flex flex-col">
             <h3 className="font-bold text-xl mb-3 font-serif italic text-primary">Display theme</h3>
             <p className="text-sm text-muted-foreground mb-6 font-mono leading-relaxed">
               Choose a color palette for this portfolio.
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

        <BentoCard title="Study_notes.txt" icon={<Terminal className="w-4 h-4"/>} className="md:col-span-1 lg:col-span-1" delay={500}>
          <div className="p-5 flex flex-col h-full bg-[#1a1a1a] text-[#4a90e2] font-mono text-xs">
            <h3 className="text-white mb-4 border-b border-white/20 pb-2 uppercase tracking-wider">Experiments to try</h3>
            <ul className="space-y-3 flex-grow list-disc pl-4">
              <li>Read a sensor over I²C.</li>
              <li>Trace a DNS lookup in Wireshark.</li>
              <li>Run a service in a Linux VM.</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
               <Link to="/skills" className="text-pool-orange hover:text-white hover:underline tracking-widest text-[10px] uppercase">Skills to build</Link>
               <span className="animate-pulse w-2 h-4 bg-pool-orange inline-block"></span>
            </div>
          </div>
        </BentoCard>

        {/* Ideas / Notepad */}
        <BentoCard title="ideas.txt" icon={<FileText className="w-4 h-4"/>} className="md:col-span-1 lg:col-span-1" delay={600}>
           <div className="p-6 font-mono text-xs text-foreground leading-relaxed h-full bg-card relative">
             {/* Note lines background pattern */}
             <div className="absolute inset-0 pointers-events-none opacity-5" style={{ backgroundImage: 'linear-gradient(transparent 95%, #000 100%)', backgroundSize: '100% 24px' }}></div>
             <p className="text-muted-foreground italic mb-6 relative z-10">Embedded project ideas</p>
             <div className="space-y-6 relative pl-4 z-10">
                <div className="absolute left-0 top-1 bottom-1 w-px bg-pool-orange/30"></div>
                <div className="group">
                  <h4 className="font-bold mb-1 group-hover:text-primary transition-colors text-sm">Smart Beyblade</h4>
                  <p className="text-muted-foreground">Could a spinning top measure its speed and send each hit to a phone over Bluetooth?</p>
                </div>
                <div className="group">
                  <h4 className="font-bold mb-1 group-hover:text-primary transition-colors text-sm">Y2K Car Radio</h4>
                  <p className="text-muted-foreground">I’d like to pair a ’90s-style dashboard and physical controls with wireless CarPlay.</p>
                </div>
             </div>
           </div>
        </BentoCard>

      </div>
    </main>
  );
};

export default Home;
