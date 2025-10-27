import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  tag: string;
}

const ProjectCard = ({ title, description, technologies, tag }: ProjectCardProps) => {
  return (
    <article className="glass-panel p-6 rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-gradient transition-all">
          {title}
        </h3>
        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
          {tag}
        </Badge>
      </div>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="border-border/50 bg-secondary/50 hover:bg-primary/10 hover:border-primary/50 transition-all"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
