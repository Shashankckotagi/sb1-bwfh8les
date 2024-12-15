import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Music2,
  Mail,
  Globe,
  Cloud
} from 'lucide-react';
import type { SocialLink } from '../types/link';

export const socialLinks: SocialLink[] = [
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    href: 'https://github.com/Shashankckotagi',
    color: 'hover:bg-gray-800'
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shashank-kotagi-546655295/',
    color: 'hover:bg-blue-600'
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    label: 'Twitter',
    href: 'https://x.com/ShashankKo14323',
    color: 'hover:bg-sky-500'
  },
  {
    icon: <Music2 className="w-5 h-5" />,
    label: 'Spotify',
    href: 'https://open.spotify.com/user/i61mivuzbno84gr1gpxx2czek?nd=1&dlsi=fc8e6d3efd2440be',
    color: 'hover:bg-green-600'
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    href: 'mailto:shashankckotagi@example.com',
    color: 'hover:bg-red-600'
  },
  {
    icon: <Globe className="w-5 h-5" />,
    label: 'Portfolio',
    href: 'https://drive.google.com/file/d/1ly3E659By5LbohscpUN4zP0OYsmXvDpV/view?usp=sharing',
    color: 'hover:bg-purple-600'
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    label: 'Google Cloud Skills',
    href: 'https://www.cloudskillsboost.google/public_profiles/af6d6ebd-a7b2-49e3-9fb9-7c564c6c969d',
    color: 'hover:bg-blue-500'
  }
];