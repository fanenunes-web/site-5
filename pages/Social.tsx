import React from 'react';
import { Heart, Smile, Share2 } from 'lucide-react';

const Social: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block p-4 rounded-full bg-yellow-400 mb-6">
            <Smile size={48} className="text-black" />
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl mb-6">INSTITUTO 16.15</h1>
          <p className="font-display text-2xl font-bold tracking-widest uppercase mb-12">Compartilhadores de Sorriso</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="bg-dark-800 p-8 rounded-2xl border border-white/10 text-center">
             <Heart className="mx-auto text-red-500 mb-4" size={40} />
             <h3 className="text-xl font-bold text-white mb-2">Amor em Ação</h3>
             <p className="text-gray-400">Levamos dignidade e esperança para comunidades carentes através de ações práticas.</p>
           </div>
           <div className="bg-dark-800 p-8 rounded-2xl border border-white/10 text-center">
             <Share2 className="mx-auto text-blue-500 mb-4" size={40} />
             <h3 className="text-xl font-bold text-white mb-2">Distribuição</h3>
             <p className="text-gray-400">Arrecadação e distribuição de alimentos, roupas e recursos essenciais.</p>
           </div>
           <div className="bg-dark-800 p-8 rounded-2xl border border-white/10 text-center">
             <Smile className="mx-auto text-yellow-400 mb-4" size={40} />
             <h3 className="text-xl font-bold text-white mb-2">Alegria</h3>
             <p className="text-gray-400">Restaurando a autoestima e a alegria de viver em quem mais precisa.</p>
           </div>
        </div>

        <div className="bg-gradient-to-r from-dark-800 to-dark-900 rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl text-white mb-4">Faça parte desta corrente</h2>
            <p className="text-gray-300 mb-6">
              Siga o Instituto no Instagram e acompanhe nossas próximas ações, prestação de contas e formas de doar.
            </p>
          </div>
          <a 
            href="https://www.instagram.com/instituto16.15?igsh=NnQ2NThsOWU4bmU1" 
            target="_blank" 
            rel="noreferrer"
            className="whitespace-nowrap px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Acessar Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;