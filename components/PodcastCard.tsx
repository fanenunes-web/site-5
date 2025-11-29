import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import { Podcast } from '../types';
import { Link } from 'react-router-dom';

interface PodcastCardProps {
  podcast: Podcast;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <Link to={`/podcast/${podcast.id}`} className="group relative block h-[320px] rounded-2xl overflow-hidden bg-dark-800 border border-white/5 hover:border-white/20 transition-all duration-500">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent z-10" />
      
      {/* Fallback pattern if no image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out"
        style={{ backgroundColor: podcast.themeColor }}
      >
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase bg-white/10 backdrop-blur-sm rounded text-white">
            {podcast.category}
          </span>
          <h3 className="font-display font-bold text-2xl text-white mb-1 leading-tight group-hover:text-neon-cyan transition-colors">
            {podcast.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {podcast.description}
          </p>
          
          <div className="flex items-center text-xs font-medium text-white space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
             <span className="flex items-center text-neon-cyan">
               <Play size={12} className="mr-1 fill-neon-cyan" /> Assistir Recentes
             </span>
             <span className="w-1 h-1 rounded-full bg-gray-600" />
             <span className="text-gray-400">{podcast.handle}</span>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
    </Link>
  );
};

export default PodcastCard;