
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl',
  };

  return (
    <div className={cn('flex items-center', className)}>
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-2 mr-2 shadow-sm">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn('text-white', {
            'w-4 h-4': size === 'sm',
            'w-6 h-6': size === 'md',
            'w-8 h-8': size === 'lg',
          })}
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <h1 className={cn('font-poppins font-bold', sizeClasses[size])}>
        Reflec<span className="text-blue-500">Score</span>
      </h1>
    </div>
  );
};

export default Logo;
