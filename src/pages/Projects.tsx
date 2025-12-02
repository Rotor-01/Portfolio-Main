import ProjectCard from '@/components/ProjectCard';
import SEO from '@/components/SEO';
import { placeholderImages } from '@/lib/placeholderImages';

const Projects = () => {
  const projects = [
    {
      title: 'PC Part Picker',
      description:
        'A comprehensive web application designed to help users find compatible PC components for their custom builds. Features real-time compatibility checking, price comparisons, and a user-friendly interface.',
      technologies: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Prisma'],
      tag: 'Featured',
      liveUrl: 'https://part-picker-theta.vercel.app',
      githubUrl: 'https://github.com/RoshanTomRobin/part-picker',
      imageUrl: placeholderImages.pcPartPicker,
    },
    {
      title: 'ChatBot AI',
      description:
        'An intelligent conversational AI chatbot built with advanced natural language processing capabilities. Provides contextual responses and learns from user interactions.',
      technologies: ['Python', 'AI/ML', 'NLP', 'TensorFlow'],
      tag: 'AI/ML',
      githubUrl: 'https://github.com/RoshanTomRobin/chatbot-ai',
      imageUrl: placeholderImages.chatbotAi,
    },
    {
      title: 'Interactive Dashboard',
      description:
        'A dynamic data visualization dashboard featuring real-time analytics, interactive charts, and comprehensive reporting tools for business intelligence.',
      technologies: ['JavaScript', 'D3.js', 'Chart.js', 'React'],
      tag: 'Data Viz',
      liveUrl: 'https://dashboard-demo.vercel.app',
      imageUrl: placeholderImages.dashboard,
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing projects and skills with smooth animations, optimized performance, and excellent accessibility.',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      tag: 'Web',
      githubUrl: 'https://github.com/RoshanTomRobin/Portfolio',
      imageUrl: placeholderImages.portfolio,
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
