import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import SEO from '@/components/SEO';
import { useEffect, useState } from 'react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building modern web experiences.';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Reset after a pause
        setTimeout(() => {
          currentIndex = 0;
          const resetInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setTypedText(fullText.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(resetInterval);
            }
          }, 100);
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);
  return (
    <main className="min-h-screen">
      <SEO />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">
                Roshan Tom Robinson
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4">
              Front-End Software Developer
            </p>
            <div className="h-8 mb-2">
              <p className="text-xl sm:text-2xl text-primary font-medium">
                {typedText}<span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating user-friendly and visually appealing interfaces
              with modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="hero-gradient text-white font-semibold hover:scale-105 transition-transform group">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border/50 hover:bg-primary/10 hover:border-primary/50 gap-2">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <a href="/resume/roshan-tom-robinson-resume.pdf" target="_blank" rel="noopener noreferrer" download>
                  <FileText className="h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/RoshanTomRobin"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-3 rounded-lg hover:scale-110 hover:bg-primary/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/roshan-tom-robinson-31b47b295"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-3 rounded-lg hover:scale-110 hover:bg-primary/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:roshantomrobinson@gmail.com"
                className="glass-panel p-3 rounded-lg hover:scale-110 hover:bg-primary/20 transition-all"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
