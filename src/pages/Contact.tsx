import { Phone, MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <main className="min-h-screen pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            Reach Out To Me
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a project in mind or want to collaborate? Feel free to reach out through any of
            the contact methods listed below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Phone */}
          <div className="glass-panel p-6 rounded-2xl hover:scale-105 transition-all animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                <a
                  href="tel:+916282371583"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 62823 71583
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="glass-panel p-6 rounded-2xl hover:scale-105 transition-all animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:roshantomrobinson@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  roshantomrobinson@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="glass-panel p-6 rounded-2xl hover:scale-105 transition-all animate-fade-in-up md:col-span-2" style={{ animationDelay: '200ms' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">
                  142, Kochukarottu House, Poovathilappu, Manalumkal PO,
                  <br />
                  Kottayam, Kerala, India - 686503
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="glass-panel p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:roshantomrobinson@gmail.com"
              className="flex items-center gap-3 px-6 py-3 glass-panel rounded-lg hover:scale-105 hover:bg-primary/20 transition-all group"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-medium group-hover:text-primary transition-colors">Gmail</span>
            </a>
            <a
              href="https://github.com/RoshanTomRobin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 glass-panel rounded-lg hover:scale-105 hover:bg-primary/20 transition-all group"
            >
              <Github className="h-5 w-5 text-primary" />
              <span className="font-medium group-hover:text-primary transition-colors">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/roshan-tom-robinson-31b47b295"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 glass-panel rounded-lg hover:scale-105 hover:bg-primary/20 transition-all group"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="font-medium group-hover:text-primary transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 glass-panel rounded-lg hover:scale-105 hover:bg-primary/20 transition-all group"
            >
              <Twitter className="h-5 w-5 text-primary" />
              <span className="font-medium group-hover:text-primary transition-colors">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
