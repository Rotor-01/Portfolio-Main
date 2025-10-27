interface SkillBadgeProps {
  name: string;
  icon?: string;
  delay?: number;
}

const SkillBadge = ({ name, delay = 0 }: SkillBadgeProps) => {
  return (
    <div
      className="glass-panel px-6 py-4 rounded-xl hover:scale-110 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in-up group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform">
          {getSkillEmoji(name)}
        </span>
        <span className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
      </div>
    </div>
  );
};

const getSkillEmoji = (skill: string): string => {
  const emojiMap: Record<string, string> = {
    HTML5: '📄',
    CSS3: '🎨',
    JavaScript: '⚡',
    Python: '🐍',
    Lua: '🌙',
    React: '⚛️',
    TypeScript: '💠',
  };
  return emojiMap[skill] || '💻';
};

export default SkillBadge;
