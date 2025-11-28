import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';
import PodcastCard from '../components/PodcastCard';
import { PODCASTS } from '../data';
import { ArrowDown, Cpu, Globe, Mic2, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  // Get latest episodes from all podcasts for the "Feed"
  const recentEpisodes = PODCASTS.flatMap(p => 
    p.episodes.map(e => ({ ...e, podcastTitle: p.title, themeColor: p.themeColor }))
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <Hero3D />
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse mr-2" />
            <span className="text-neon-cyan text-xs font-bold tracking-widest uppercase">Transmissão Global • 16.15</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6"
          >
            PO LABS
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Vozes que emanam pelo mundo. Onde a fé encontra a tecnologia, e histórias reais ganham vida através da inovação.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-gray-500"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* LIVE FEED SECTION (Simulated) */}
      <section className="relative py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12 space-x-4">
            <div className="p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/20">
              <Cpu className="text-neon-purple" size={24} />
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl text-white">AI Content Feed</h2>
              <p className="text-gray-400 text-sm">Atualizações em tempo real processadas por IA.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentEpisodes.map((episode) => (
              <div key={episode.id} className="flex flex-col md:flex-row bg-dark-800 rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors group">
                <div className="md:w-48 h-48 md:h-auto relative shrink-0">
                  <img src={episode.thumbnail} alt={episode.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur text-xs font-bold text-white rounded">
                    NOVO
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between w-full">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: episode.themeColor }}>
                      {episode.podcastTitle}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-neon-cyan transition-colors">
                      {episode.title}
                    </h3>
                    {/* Simulated AI Summary */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles size={12} className="text-yellow-400" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Resumo IA</span>
                      </div>
                      <p className="text-sm text-gray-400 leading-snug">
                        {episode.aiSummary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PODCASTS GRID */}
      <section className="py-24 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Nossos Canais</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Uma rede diversificada de conteúdo cobrindo espiritualidade, direito, esportes e sociedade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PODCASTS.map((podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;