import React from 'react';
import * as Icons from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = 'w-5 h-5', size = 20 }) => {
  // Lookup Lucide icon by name safely
  const LucideIcon = (Icons as Record<string, any>)[name] || Icons.MessageSquare;
  return <LucideIcon className={className} size={size} aria-hidden="true" />;
};
