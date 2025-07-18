import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PopButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const PopButton = ({ children, onClick, variant = 'primary', size = 'md', className = '' }: PopButtonProps) => {
  const baseClasses = "handwritten font-bold border-4 border-black transform transition-all duration-200 cursor-pointer shadow-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:from-orange-500 hover:to-pink-600",
    secondary: "bg-gradient-to-r from-pink-400 to-orange-500 text-white hover:from-pink-500 hover:to-orange-600"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05, 
        rotate: [-1, 1, -1], 
        boxShadow: "8px 8px 0px rgba(0,0,0,0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        y: [0, -2, 0],
        transition: { 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }
      }}
    >
      {children}
    </motion.button>
  );
};

export default PopButton;