import ProjectCard from '@/components/ProjectCard';
import SEO from '@/components/SEO';

import { projects } from '@/lib/projects';

const Projects = () => {

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-pool-cream">
      <SEO
        title="Projects"
        description="Explore my earlier web work, including Meme Memorial, as I prepare to study computer engineering."
      />
      <div className="grain-overlay" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 italic text-foreground">
            Project archive
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
            Before turning my attention to firmware and networks, I built for the web. Meme Memorial is one of those projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
