import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PopFrameProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

export const PopFrame = ({ children, className, variant = 'primary', size = 'md' }: PopFrameProps) => {
  const variants = {
    primary: 'border-pop-orange bg-gradient-to-br from-pop-pink to-pop-orange',
    secondary: 'border-pop-pink bg-gradient-to-br from-pop-yellow to-pop-pink',
    accent: 'border-pop-blue bg-gradient-to-br from-pop-purple to-pop-blue'
  };

  const sizes = {
    sm: 'border-4 rounded-xl p-3',
    md: 'border-6 rounded-2xl p-4', 
    lg: 'border-8 rounded-3xl p-6'
  };

  return (
    <div className={cn(
      'relative transform transition-all duration-300 hover:scale-105 hover:rotate-1 shadow-2xl',
      variants[variant],
      sizes[size],
      'before:absolute before:inset-0 before:rounded-inherit before:border-4 before:border-white before:shadow-inner',
      className
    )}>
      <div className="relative bg-white rounded-lg overflow-hidden shadow-inner border-4 border-comic-black">
        {children}
      </div>
    </div>
  );
};