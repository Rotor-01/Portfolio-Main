import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  tag: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({ title, description, technologies, tag, liveUrl, githubUrl, imageUrl }: ProjectCardProps) => {
  return (
    <article className="glass-panel p-6 rounded-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-gradient transition-all">
          {title}
        </h3>
        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
          {tag}
        </Badge>
      </div>
      {imageUrl ? (
        <div className="mb-4 overflow-hidden rounded-lg border border-border/50 bg-secondary/20">
          <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="absolute inset-0 flex items-center justify-center text-primary/30">
              <span className="text-sm">{title} Preview</span>
            </div>
            <img 
              src={imageUrl} 
              alt={`${title} preview`} 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
              onError={(e) => {
                // If image fails to load, add a class to show placeholder
                e.currentTarget.classList.add('opacity-0');
              }}
            />
          </div>
        </div>
      ) : null}
      <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
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
      {(liveUrl || githubUrl) && (
        <div className="flex flex-wrap gap-3 mt-4 justify-start w-full">
          {liveUrl && (
            <Button asChild size="sm" variant="default" className="gap-1">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="h-4 w-4" />
                Live Preview
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild size="sm" variant="outline" className="gap-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
