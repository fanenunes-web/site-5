import React from 'react';
import { Instagram } from 'lucide-react';

const Founder: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image mockup */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/marcos1615/600/800" 
              alt="Marcos 16.15" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h2 className="font-display font-bold text-3xl text-white">Marcos 16.15</h2>
              <p className="text-neon-cyan text-sm tracking-widest uppercase">@rsoares16.15</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
           <h1 className="font-display font-bold text-5xl text-white mb-8">O Visionário</h1>
           <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
             <p>
               Empreendedor, comunicador e, acima de tudo, um homem de fé. Marcos 16.15 (R. Soares) fundou o PO Labs com uma visão clara: utilizar as ferramentas mais avançadas da tecnologia moderna para propagar mensagens eternas.
             </p>
             <p>
               Sua trajetória é marcada pela união improvável entre o ambiente corporativo high-tech e a profundidade da espiritualidade cristã. Ele acredita que a internet é o novo areópago, e que a excelência técnica é uma forma de adoração.
             </p>
             <p>
               Como host do 16.15 Podcast e mentor de diversos outros projetos do estúdio, ele lidera uma equipe apaixonada por contar histórias que transformam vidas.
             </p>
             
             <div className="pt-8">
               <a 
                 href="https://instagram.com/rsoares16.15" 
                 target="_blank" 
                 rel="noreferrer"
                 className="inline-flex items-center space-x-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
               >
                 <Instagram size={20} />
                 <span>Siga no Instagram</span>
               </a>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;