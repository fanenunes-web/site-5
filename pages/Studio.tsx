import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Zap, Globe, Users } from 'lucide-react';

const Studio: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-900 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent opacity-50" />
          {/* Grid effect */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-display font-black text-7xl md:text-9xl text-white tracking-tighter mb-4"
          >
            PO LABS
          </motion.h1>
          <p className="font-mono text-neon-cyan tracking-[0.5em] text-sm md:text-base">PRODUCTION OPERATIONS LABORATORY</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl text-white mb-6">16.15: A Missão</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              "Ide por todo o mundo, pregai o evangelho a toda criatura." (Marcos 16:15).
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              O PO Labs nasce da fusão entre propósito divino e excelência técnica. Somos mais que um estúdio; somos um hub de criatividade onde a letra P (16ª) e a letra O (15ª) convergem para formar a base de nossa identidade.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Com infraestrutura de ponta, produzimos experiências audiovisuais que engajam, educam e inspiram milhões de pessoas através das plataformas digitais.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-dark-800 p-6 rounded-xl border border-white/5">
                <Mic2 className="text-neon-purple mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Áudio 8D</h3>
                <p className="text-sm text-gray-500">Captação imersiva de última geração.</p>
             </div>
             <div className="bg-dark-800 p-6 rounded-xl border border-white/5">
                <Zap className="text-neon-cyan mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Tech-First</h3>
                <p className="text-sm text-gray-500">Integração com IA e automação.</p>
             </div>
             <div className="bg-dark-800 p-6 rounded-xl border border-white/5">
                <Globe className="text-blue-500 mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Alcance Global</h3>
                <p className="text-sm text-gray-500">Conteúdo sem fronteiras.</p>
             </div>
             <div className="bg-dark-800 p-6 rounded-xl border border-white/5">
                <Users className="text-green-500 mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Comunidade</h3>
                <p className="text-sm text-gray-500">Mais de 7 verticais de conteúdo.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;