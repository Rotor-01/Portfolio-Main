import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'PC Part Picker',
      description:
        'A comprehensive web application designed to help users find compatible PC components for their custom builds. Features real-time compatibility checking and price comparisons.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      tag: 'Web App',
    },
    {
      title: 'ChatBot AI',
      description:
        'An intelligent conversational AI chatbot built with advanced natural language processing capabilities. Provides contextual responses and learns from user interactions.',
      technologies: ['Python', 'AI/ML', 'NLP'],
      tag: 'AI/ML',
    },
    {
      title: 'Interactive Dashboard',
      description:
        'A dynamic data visualization dashboard featuring real-time analytics, interactive charts, and comprehensive reporting tools for business intelligence.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Charts'],
      tag: 'Dashboard',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing projects and skills with smooth animations, optimized performance, and excellent accessibility.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      tag: 'Web Design',
    },
  ];

  return (
    <main className="min-h-screen pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in-up mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            My Projects
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Here are some of the projects I've worked on, showcasing my skills in web development,
            AI, and API integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in-up"
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
