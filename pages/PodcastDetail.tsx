import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PODCASTS } from '../data';
import { Youtube, User, MessageCircle, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const PodcastDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const podcast = PODCASTS.find((p) => p.id === id);

  if (!podcast) {
    return <Navigate to="/" />;
  }

  const is1615 = podcast.id === '16-15-podcast';

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900" />
        <div 
          className="absolute inset-0 opacity-10 bg-[size:50px_50px]"
          style={{ backgroundImage: `linear-gradient(to right, ${podcast.themeColor} 1px, transparent 1px), linear-gradient(to bottom, ${podcast.themeColor} 1px, transparent 1px)` }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            {/* Logo Placeholder */}
            <div 
              className="w-40 h-40 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10"
              style={{ backgroundColor: podcast.themeColor }}
            >
              <span className="font-display font-bold text-4xl text-white opacity-50">{podcast.title.substring(0, 2)}</span>
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-white/10 rounded-full text-white border border-white/10">
                {podcast.category}
              </span>
              <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-4">
                {podcast.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-6">
                {podcast.description}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a 
                  href={podcast.socialUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#FF0000] hover:bg-[#cc0000] text-white font-bold rounded-lg transition-colors shadow-lg shadow-red-900/20"
                >
                  <Youtube className="mr-2" size={20} />
                  Inscrever-se no Canal
                </a>
                <div className="flex items-center text-gray-400 bg-dark-800 px-4 py-3 rounded-lg border border-white/5">
                  <User className="mr-2" size={16} />
                  <span className="text-sm">Host: {podcast.hosts[0].name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Episodes */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="font-display font-bold text-2xl text-white flex items-center">
              <span className="w-1 h-8 bg-neon-cyan mr-4 rounded-full" />
              Últimos Episódios
            </h2>
            
            <div className="space-y-6">
              {podcast.episodes.map((ep) => (
                <div key={ep.id} className="bg-dark-800 rounded-xl p-4 flex flex-col sm:flex-row gap-6 border border-white/5 hover:border-white/20 transition-all">
                  <div className="sm:w-40 sm:h-24 bg-gray-800 rounded-lg overflow-hidden shrink-0">
                    <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-2">{ep.title}</h3>
                    <div className="bg-black/30 p-3 rounded-lg border border-white/5 mb-3">
                      <p className="text-xs text-gray-400 italic">"{ep.aiSummary}"</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{ep.date}</span>
                      <button className="text-sm text-neon-cyan font-bold hover:underline">Assistir Agora</button>
                    </div>
                  </div>
                </div>
              ))}
              {podcast.episodes.length === 0 && (
                <p className="text-gray-500">Nenhum episódio recente encontrado.</p>
              )}
            </div>
          </div>

          {/* Right Column: Host & Interactive */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Host Column */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-white/5">
              <div className="flex items-center space-x-4 mb-6">
                <img src={podcast.hosts[0].photoUrl} alt={podcast.hosts[0].name} className="w-16 h-16 rounded-full border-2 border-neon-cyan object-cover" />
                <div>
                  <h3 className="font-display font-bold text-white text-lg">{podcast.hosts[0].name}</h3>
                  <p className="text-neon-cyan text-sm uppercase tracking-wider">{podcast.hosts[0].columnTitle || 'Coluna do Host'}</p>
                </div>
              </div>
              <div className="prose prose-invert prose-sm">
                <p className="text-gray-400">
                  Bem-vindo ao espaço oficial do {podcast.title}. Aqui compartilhamos insights exclusivos que complementam nossos episódios semanais.
                </p>
                <div className="mt-4 p-4 bg-white/5 rounded-lg border-l-2 border-neon-cyan italic text-gray-300">
                  "A persistência é o caminho do êxito."
                </div>
              </div>
            </div>

            {/* 16.15 Exclusive Prayer Form */}
            {is1615 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-neon-purple/20 to-dark-800 rounded-2xl p-6 border border-neon-purple/30"
              >
                <div className="flex items-center space-x-3 mb-4 text-neon-purple">
                  <HeartHandshake size={24} />
                  <h3 className="font-display font-bold text-xl text-white">Pedido de Oração</h3>
                </div>
                <p className="text-sm text-gray-300 mb-6">
                  Deixe seu pedido abaixo. Nossa equipe estará orando por você nesta semana.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input type="text" placeholder="Seu Nome" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-neon-purple outline-none" />
                  </div>
                  <div>
                    <input type="email" placeholder="Seu E-mail" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-neon-purple outline-none" />
                  </div>
                  <div>
                    <textarea placeholder="Seu Pedido..." rows={3} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-neon-purple outline-none resize-none"></textarea>
                  </div>
                  <button className="w-full bg-neon-purple text-white font-bold py-3 rounded-lg hover:bg-purple-600 transition-colors">
                    Enviar Pedido
                  </button>
                </form>
              </motion.div>
            )}

            {/* General Contact for other podcasts */}
            {!is1615 && (
              <div className="bg-dark-800 rounded-2xl p-6 border border-white/5">
                <h3 className="font-display font-bold text-white mb-4 flex items-center">
                  <MessageCircle className="mr-2" size={18} />
                  Fale com a gente
                </h3>
                <p className="text-sm text-gray-400 mb-4">Tem sugestões de pauta ou quer anunciar?</p>
                <a href="mailto:podcast1615@gmail.com" className="block w-full text-center border border-white/20 text-white py-2 rounded-lg hover:bg-white/5 transition-colors text-sm">
                  Enviar E-mail
                </a>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;