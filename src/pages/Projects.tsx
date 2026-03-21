import ProjectCard from '@/components/ProjectCard';
import SEO from '@/components/SEO';

const Projects = () => {
  const projects = [
    {
      title: 'Meme Memorial',
      description:
        'A digital memorial for beloved internet memes. Browse through internet history and pay respects to the classics.',
      technologies: ['React', 'Next.js', 'Tailwind'],
      tag: 'Live',
      liveUrl: 'https://meme-memorial.vercel.app',
      imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y0ZjFlYSIvPjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzJkNWEyNyI+TUVNRSBNRU1PUklBTDwvdGV4dD48L3N2Zz4=',
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-pool-cream">
      <SEO
        title="Projects"
        description="Explore my portfolio of web development projects including PC Part Picker, ChatBot AI, and more."
      />
      <div className="grain-overlay" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 italic text-foreground">
            Selected Works
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
            // A curated collection of digital experiences and applications.
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
