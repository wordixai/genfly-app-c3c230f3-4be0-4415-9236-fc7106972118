import { cn } from '@/lib/utils';

interface ComicDotsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'orange' | 'pink' | 'blue' | 'purple' | 'yellow';
}

export const ComicDots = ({ className, size = 'md', color = 'pink' }: ComicDotsProps) => {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const colors = {
    orange: 'bg-pop-orange',
    pink: 'bg-pop-pink',
    blue: 'bg-pop-blue',
    purple: 'bg-pop-purple',
    yellow: 'bg-pop-yellow'
  };

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'absolute rounded-full animate-pulse',
            sizes[size],
            colors[color]
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};