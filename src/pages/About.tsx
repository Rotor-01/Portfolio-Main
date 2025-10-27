const About = () => {
  return (
    <main className="min-h-screen pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            About Me
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
          
          <div className="glass-panel p-8 sm:p-10 rounded-2xl space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Front-End Software Developer
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  Hello! I'm <span className="text-primary font-semibold">Roshan Tom Robinson</span>, 
                  a front-end software developer passionate about building impactful and efficient solutions. 
                  I enjoy learning new technologies and working on creative projects that push the boundaries 
                  of what's possible on the web.
                </p>
                <p>
                  With a strong foundation in <span className="text-accent font-semibold">HTML</span>, {' '}
                  <span className="text-accent font-semibold">CSS</span>, {' '}
                  <span className="text-accent font-semibold">JavaScript</span>, {' '}
                  <span className="text-accent font-semibold">Python</span>, and {' '}
                  <span className="text-accent font-semibold">Lua</span>, I strive to create user-friendly 
                  and visually appealing interfaces that provide exceptional user experiences.
                </p>
                <p>
                  I constantly seek to improve my skills and stay updated with the latest industry trends, 
                  ensuring that I can deliver modern, performant, and accessible web applications.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">What I Do</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Responsive Web Design',
                  'Interactive UI/UX',
                  'Frontend Development',
                  'Performance Optimization',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">{item}</span>
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
