import React from 'react';
import { Mail, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="font-display font-bold text-3xl text-white">PO<span className="text-neon-cyan">.</span></span>
              <span className="font-display font-bold text-xl text-gray-400">LABS 16.15</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              O futuro do conteúdo digital. Vozes que ecoam, histórias que transformam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-purple hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#/studio" className="hover:text-neon-cyan transition-colors">Sobre o Estúdio</a></li>
              <li><a href="#/awards" className="hover:text-neon-cyan transition-colors">Prêmios</a></li>
              <li><a href="#/founder" className="hover:text-neon-cyan transition-colors">O Fundador</a></li>
              <li><a href="#/social" className="hover:text-neon-cyan transition-colors">Instituto 16.15</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-neon-cyan" />
                <a href="mailto:podcast1615@gmail.com" className="hover:text-white transition-colors">podcast1615@gmail.com</a>
              </li>
              <li className="text-xs text-gray-600 uppercase tracking-widest mt-4">
                São Paulo, Brasil
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-display font-bold text-white mb-4">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4">Receba atualizações do universo PO Labs.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full bg-black/30 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-neon-purple transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 p-1.5 bg-neon-purple/20 text-neon-purple rounded-md hover:bg-neon-purple hover:text-white transition-all"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} PO Labs / 16.15 Studios. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 font-display">DESIGNED BY <span className="text-neon-cyan">AI GENERATED</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;