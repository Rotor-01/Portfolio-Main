import { Button } from '@/components/ui/button';
import { Download, User } from 'lucide-react';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-pool-cream">
      <SEO title="About Me" />
      <div className="grain-overlay" />

      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-black shadow-retro-lg animate-fade-in-up overflow-hidden">
          {/* Window Header */}
          <div className="bg-pool-blue text-white px-4 py-2 border-b border-black flex items-center justify-between">
            <span className="font-mono text-sm uppercase tracking-wider flex items-center gap-2">
              <User className="w-4 h-4" />
              UserProfile.dat
            </span>
            <div className="flex gap-1">
              <div className="w-3 h-3 border border-black bg-white" />
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* "Photo" Placeholder */}
              <div className="w-full md:w-1/3 aspect-square bg-pool-cream border border-black flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                <User className="w-24 h-24 text-black/20" />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-1 font-mono text-xs uppercase">
                  Roshan_TR.jpg
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <h1 className="text-4xl sm:text-5xl font-serif font-bold italic text-foreground">
                  About Me
                </h1>

                <div className="space-y-4 font-sans text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Hello! I'm <span className="font-bold text-primary">Roshan Tom Robinson</span>,
                    a front-end software developer with a passion for retro aesthetics and modern performance.
                  </p>
                  <p>
                    I specialize in building accessible, pixel-perfect web applications using
                    <span className="font-mono text-sm bg-pool-cream px-1 mx-1 border border-black/20">React</span>
                    and
                    <span className="font-mono text-sm bg-pool-cream px-1 mx-1 border border-black/20">TypeScript</span>.
                    My goal is to bridge the gap between nostalgic design languages and contemporary user experiences.
                  </p>
                  <p>
                    When I'm not coding, I'm likely exploring old operating systems, listening to synthwave,
                    or optimizing my development workflow.
                  </p>
                </div>

                <div className="pt-6">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border border-black rounded-none shadow-retro hover:translate-y-0.5 hover:shadow-none transition-all gap-2">
                    <a href="/resume/roshan-tom-robinson-resume.pdf" target="_blank" rel="noopener noreferrer" download>
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-black/10">
              <h3 className="font-mono text-xl font-bold uppercase mb-6">Core Services</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Responsive Web Design',
                  'UI/UX Implementation',
                  'Frontend Architecture',
                  'Performance Optimization',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 border border-black/10 bg-pool-cream/30 hover:bg-pool-cream hover:border-black transition-all"
                  >
                    <div className="w-2 h-2 bg-primary" />
                    <span className="font-mono text-sm font-bold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
