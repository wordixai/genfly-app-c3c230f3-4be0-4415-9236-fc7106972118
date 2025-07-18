import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface PopButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  bounce?: boolean;
}

export const PopButton = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  bounce = true,
  ...props 
}: PopButtonProps) => {
  const variants = {
    primary: 'bg-gradient-to-r from-pop-orange to-pop-pink hover:from-pop-pink hover:to-pop-orange border-pop-orange',
    secondary: 'bg-gradient-to-r from-pop-yellow to-pop-orange hover:from-pop-orange hover:to-pop-yellow border-pop-yellow',
    accent: 'bg-gradient-to-r from-pop-purple to-pop-blue hover:from-pop-blue hover:to-pop-purple border-pop-purple'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm border-2',
    md: 'px-6 py-3 text-lg border-3',
    lg: 'px-8 py-4 text-xl border-4'
  };

  return (
    <button
      className={cn(
        'font-handwritten font-bold text-white rounded-full transform transition-all duration-200',
        'hover:scale-110 hover:rotate-2 active:scale-95 shadow-lg hover:shadow-2xl',
        'relative overflow-hidden',
        bounce && 'animate-pop-bounce hover:animate-wiggle',
        variants[variant],
        sizes[size],
        'before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-200',
        'hover:before:opacity-20',
        className
      )}
      {...props}
    >
      <span className="relative z-10 drop-shadow-lg">{children}</span>
    </button>
  );
};