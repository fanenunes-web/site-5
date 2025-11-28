import React from 'react';
import { AWARDS, PODCASTS } from '../data';
import { Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Awards: React.FC = () => {
  const awards2024 = AWARDS.filter(a => a.year === 2024);
  const awards2025 = AWARDS.filter(a => a.year === 2025);

  const renderAwardSection = (year: number, awards: typeof AWARDS) => (
    <div className="mb-20">
      <h2 className="font-display font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 mb-12 border-l-4 border-neon-cyan pl-6">
        {year}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award, index) => {
          const podcast = PODCASTS.find(p => p.id === award.podcastId);
          return (
            <motion.div 
              key={`${year}-${award.category}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-neon-cyan/50 transition-colors"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy size={64} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-neon-cyan mb-2">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold text-sm tracking-widest uppercase">{award.category}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">{podcast?.title || 'Unknown Podcast'}</h3>
                <div className="flex items-end">
                  <span className="text-4xl font-black text-gray-200">{award.count}</span>
                  <span className="text-sm text-gray-500 mb-2 ml-2">Prêmios</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="font-display font-black text-6xl text-white mb-6">Galeria de Troféus</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          O reconhecimento do nosso compromisso com a excelência em conteúdo, inovação e impacto social.
        </p>
      </div>

      {renderAwardSection(2025, awards2025)}
      {renderAwardSection(2024, awards2024)}
    </div>
  );
};

export default Awards;