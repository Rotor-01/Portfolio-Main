import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye, Maximize2, Minus, X } from 'lucide-react';

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
    <article className="group h-full flex flex-col bg-card border border-black shadow-retro hover:shadow-retro-lg transition-all duration-300 transform hover:-translate-y-1">
      {/* Window Header */}
      <div className="bg-pool-cream border-b border-black px-3 py-2 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full border border-black bg-white" />
            <div className="w-3 h-3 rounded-full border border-black bg-white" />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider truncate max-w-[150px] sm:max-w-none">
            {title}.exe
          </span>
        </div>
        <div className="flex items-center gap-1 opacity-50">
          <Minus className="w-3 h-3" />
          <Maximize2 className="w-3 h-3" />
          <X className="w-3 h-3" />
        </div>
      </div>

      {/* Window Content */}
      <div className="p-4 flex flex-col flex-grow bg-white">
        {/* Image Container */}
        <div className="relative mb-4 border border-black overflow-hidden bg-pool-cream group-hover:border-primary transition-colors">
          <div className="absolute inset-0 bg-black/5 pointer-events-none z-10" /> {/* Dither/Grain simulation */}
          {imageUrl ? (
            <div className="aspect-video relative">
              <img
                src={imageUrl}
                alt={`${title} preview`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-pool-cream/50 text-xs font-mono text-muted-foreground" style={{ display: imageUrl ? 'none' : 'flex' }}>
                IMAGE_NOT_FOUND
              </div>
            </div>
          ) : (
            <div className="aspect-video flex items-center justify-center bg-pool-cream text-xs font-mono text-muted-foreground">
              NO_PREVIEW_AVAILABLE
            </div>
          )}

          {/* Tag Overlay */}
          <div className="absolute top-2 right-2 z-20">
            <Badge variant="secondary" className="bg-white border border-black text-black rounded-none shadow-retro-sm font-mono text-[10px] uppercase">
              {tag}
            </Badge>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-grow">
          <h3 className="font-serif text-2xl font-bold mb-2 italic">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-sans">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono uppercase border border-black/20 bg-pool-cream/50 text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-black/10">
          {liveUrl && (
            <Button asChild size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 border border-black rounded-none shadow-retro-sm hover:translate-y-0.5 hover:shadow-none transition-all">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                <Eye className="h-4 w-4" />
                <span className="font-mono uppercase text-xs">Run</span>
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild size="sm" variant="outline" className="flex-1 bg-white hover:bg-pool-cream border border-black rounded-none shadow-retro-sm hover:translate-y-0.5 hover:shadow-none transition-all">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                <span className="font-mono uppercase text-xs">Source</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
