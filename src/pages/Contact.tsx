import { Phone, MapPin, Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import SEO from '@/components/SEO';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-pool-cream">
      <SEO title="Contact" />
      <div className="grain-overlay" />

      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-black shadow-retro-lg animate-fade-in-up">
          {/* Window Header */}
          <div className="bg-pool-orange text-white px-4 py-2 border-b border-black flex items-center justify-between">
            <span className="font-mono text-sm uppercase tracking-wider flex items-center gap-2">
              <Send className="w-4 h-4" />
              Comms_Link.exe
            </span>
            <div className="flex gap-1">
              <div className="w-3 h-3 border border-black bg-white" />
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold italic mb-4">
                Get In Touch
              </h1>
              <p className="font-mono text-muted-foreground">
                // Initiating communication protocols...
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="bg-card border border-black p-6 hover:shadow-retro transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pool-cream border border-black group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold uppercase mb-1">Phone</h3>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText('+916282371583');
                          toast({ title: 'Copied to clipboard', description: '+91 62823 71583' });
                        }}
                        className="text-sm hover:underline text-left transition-colors hover:text-pool-orange"
                        title="Copy to clipboard"
                      >
                        +91 62823 71583
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-black p-6 hover:shadow-retro transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pool-cream border border-black group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold uppercase mb-1">Email</h3>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText('roshantomrobinson@gmail.com');
                          toast({ title: 'Copied to clipboard', description: 'roshantomrobinson@gmail.com' });
                        }}
                        className="text-sm hover:underline text-left transition-colors hover:text-pool-orange"
                        title="Copy to clipboard"
                      >
                        roshantomrobinson [at] gmail [dot] com
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-black p-6 hover:shadow-retro transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pool-cream border border-black group-hover:bg-primary group-hover:text-white transition-colors">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold uppercase mb-1">Location</h3>
                      <p className="text-sm">
                        Kottayam, Kerala, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Grid */}
              <div className="bg-card border border-black p-8 flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-bold italic mb-6 text-center">
                  Social Channels
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Github, label: 'GitHub', href: 'https://github.com/RoshanTomRobin' },
                    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/roshan-tom-robinson-31b47b295' },
                    { icon: Mail, label: 'Gmail', href: 'mailto:roshantomrobinson@gmail.com' },
                    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 bg-card border border-black hover:shadow-retro hover:-translate-y-1 transition-all"
                    >
                      <social.icon className="h-6 w-6 mb-2" />
                      <span className="font-mono text-xs uppercase">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
