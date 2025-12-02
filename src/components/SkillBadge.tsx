interface SkillBadgeProps {
  name: string;
  delay?: number;
}

const SkillBadge = ({ name, delay = 0 }: SkillBadgeProps) => {
  return (
    <div
      className="group relative inline-block animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
      <div className="relative bg-white border border-black px-4 py-2 flex items-center justify-center transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5">
        <span className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
          {name}
        </span>
      </div>
    </div>
  );
};

export default SkillBadge;
