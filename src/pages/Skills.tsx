import SkillBadge from '@/components/SkillBadge';
import SEO from '@/components/SEO';
import { Folder } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Core",
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript']
    },
    {
      name: "Frameworks & Libs",
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux']
    },
    {
      name: "Backend & Tools",
      skills: ['Python', 'Node.js', 'Git', 'Vite', 'Lua']
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-pool-cream">
      <SEO title="Skills" />
      <div className="grain-overlay" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 italic text-foreground">
            Technical Arsenal
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
            // Tools and technologies I use to build digital products.
          </p>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className="bg-card border border-black shadow-retro p-6 animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6 border-b border-black/10 pb-4">
                <Folder className="w-6 h-6 text-primary fill-primary/20" />
                <h2 className="font-mono text-xl font-bold uppercase tracking-wider">
                  {category.name}
                </h2>
              </div>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => (
                  <SkillBadge
                    key={skill}
                    name={skill}
                    delay={(catIndex * 100) + (index * 50)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-primary-foreground border border-black shadow-retro p-8 text-center animate-fade-in-up">
          <h2 className="font-serif text-2xl font-bold mb-4 italic">Always Evolving</h2>
          <p className="font-sans text-lg opacity-90 max-w-2xl mx-auto">
            Currently exploring advanced performance optimization techniques and WebGL interactions.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Skills;
