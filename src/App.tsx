import React from 'react';
import { ProfileSection } from './components/ProfileSection';
import { LinkCard } from './components/LinkCard';
import { CustomCursor } from './components/CustomCursor';
import { socialLinks } from './data/socialLinks';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
      text-white animate-gradient relative">
      <CustomCursor />
      <div className="max-w-2xl mx-auto px-4 py-16">
        <ProfileSection
          name="Shashank Kotagi"
          role="Sophomore at M S Ramaiah Institute of Technology"
          imageUrl="https://i.postimg.cc/tTLJ24Dr/enhanced-1-1.png"
        />

        <div className="space-y-4 transform hover:scale-[1.01] transition-transform duration-700">
          {socialLinks.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;