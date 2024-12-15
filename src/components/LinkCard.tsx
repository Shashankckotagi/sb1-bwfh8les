import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { SocialLink } from '../types/link';

export function LinkCard({ icon, label, href, color }: SocialLink) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between p-4 rounded-lg bg-white/10 backdrop-blur-sm 
        transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-white/10 
        ${color} group relative overflow-hidden`}
    >
      <div className="flex items-center gap-3 relative z-10">
        <span className="transform transition-transform duration-300 group-hover:rotate-12">
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </div>
      <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 
        transform group-hover:translate-x-0 translate-x-4" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 
        transition-opacity duration-300 bg-gradient-to-r from-white via-transparent to-transparent" />
    </a>
  );
}