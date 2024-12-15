import React from 'react';

interface ProfileSectionProps {
  name: string;
  role: string;
  imageUrl: string;
}

export function ProfileSection({ name, role, imageUrl }: ProfileSectionProps) {
  return (
    <div className="text-center mb-8 transform hover:scale-105 transition-transform duration-300">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/10 
        hover:border-white/30 transition-all duration-500 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover transform transition-transform duration-700 
            group-hover:scale-110"
        />
      </div>
      <h1 className="text-2xl font-bold mb-2 hover:text-transparent hover:bg-clip-text 
        hover:bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300">
        {name}
      </h1>
      <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">{role}</p>
    </div>
  );
}