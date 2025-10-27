import SkillBadge from '@/components/SkillBadge';

const Skills = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Lua', 'React', 'TypeScript'];

  return (
    <main className="min-h-screen pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="animate-fade-in-up mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            Technologies I Work With
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of technologies and tools I use to build modern, performant web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <SkillBadge key={skill} name={skill} delay={index * 100} />
          ))}
        </div>

        <div className="mt-16 glass-panel p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <h2 className="text-2xl font-bold text-foreground mb-4">Always Learning</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm constantly expanding my skill set and staying up-to-date with the latest web
            technologies and best practices. Currently exploring modern frameworks, performance
            optimization techniques, and advanced JavaScript patterns.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Skills;
