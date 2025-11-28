import React from 'react';
import { ShoppingBag, Lock } from 'lucide-react';

const Shop: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px]" />

      <ShoppingBag size={64} className="text-white mb-6" />
      <h1 className="font-display font-black text-5xl md:text-7xl text-white mb-4">PO STORE</h1>
      <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 mb-8">
        <Lock size={16} className="text-neon-cyan" />
        <span className="text-gray-300 font-mono text-sm uppercase">Acesso Restrito // Em Desenvolvimento</span>
      </div>
      <p className="text-gray-400 max-w-lg mb-8">
        A coleção oficial de vestuário e acessórios do PO Labs e 16.15 Studios está sendo confeccionada. O futuro da moda street-wear cristã está chegando.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl opacity-50 pointer-events-none">
        {[1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-square bg-dark-800 rounded-xl border border-white/5 flex items-center justify-center">
                <span className="text-xs text-gray-600 font-mono">PRODUTO_00{i}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;