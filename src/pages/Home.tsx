import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, FileText, Terminal } from 'lucide-react';
import SEO from '@/components/SEO';
import { useEffect, useState } from 'react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building_modern_web_experiences...';

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
    return () => clearInterval(typingInterval);
  }, []);

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
            <div className="inline-block mb-6 px-4 py-1 border border-black rounded-full bg-pool-orange/20 text-pool-orange font-mono text-xs uppercase tracking-widest">
              Available for hire
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight italic text-foreground">
              Roshan Tom <br className="hidden sm:block" />
              <span className="text-primary not-italic">Robinson</span>
            </h1>

            <p className="text-xl sm:text-2xl font-mono text-muted-foreground mb-8">
              Front-End Software Developer
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

      {/* Marquee Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground border-t border-black py-2 overflow-hidden z-20">
        <div className="animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-widest flex gap-8">
          <span>*** REACT *** TYPESCRIPT *** TAILWIND *** NEXT.JS *** UI/UX ***</span>
          <span>*** OPEN TO WORK *** CONTACT ME TODAY ***</span>
          <span>*** REACT *** TYPESCRIPT *** TAILWIND *** NEXT.JS *** UI/UX ***</span>
          <span>*** OPEN TO WORK *** CONTACT ME TODAY ***</span>
          <span>*** REACT *** TYPESCRIPT *** TAILWIND *** NEXT.JS *** UI/UX ***</span>
          <span>*** OPEN TO WORK *** CONTACT ME TODAY ***</span>
        </div>
      </div>
    </main>
  );
};

export default Home;
