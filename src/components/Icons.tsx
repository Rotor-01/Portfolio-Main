import sprite from '@/assets/icons.svg?no-inline';

function icon(id: string) {
  return function Icon({ className }: { className?: string }) {
    return (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <use href={`${sprite}#${id}`} />
      </svg>
    );
  };
}

export const ArrowLeft = icon('ArrowLeft');
export const ArrowRight = icon('ArrowRight');
export const Check = icon('Check');
export const Clock = icon('Clock');
export const Download = icon('Download');
export const ExternalLink = icon('ExternalLink');
export const Eye = icon('Eye');
export const FileText = icon('FileText');
export const Folder = icon('Folder');
export const GitBranch = icon('GitBranch');
export const GitCommit = icon('GitCommit');
export const Github = icon('Github');
export const Home = icon('Home');
export const Instagram = icon('Instagram');
export const Linkedin = icon('Linkedin');
export const Mail = icon('Mail');
export const MapPin = icon('MapPin');
export const Maximize2 = icon('Maximize2');
export const Menu = icon('Menu');
export const Minus = icon('Minus');
export const Palette = icon('Palette');
export const Phone = icon('Phone');
export const Send = icon('Send');
export const Sun = icon('Sun');
export const Terminal = icon('Terminal');
export const User = icon('User');
export const X = icon('X');
