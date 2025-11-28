import { Podcast, Award } from './types';

// Helper to generate placeholder images
const getThumb = (id: number) => `https://picsum.photos/seed/${id}/800/450`;
const getPortrait = (id: string) => `https://picsum.photos/seed/${id}/400/400`;

export const PODCASTS: Podcast[] = [
  {
    id: '16-15-podcast',
    title: '16.15 Podcast',
    handle: '@1615PODCAST',
    description: 'Espiritualidade, reflexão e fé. Conectando o propósito divino com a vida cotidiana.',
    category: 'Espiritualidade',
    themeColor: '#bc13fe',
    socialUrl: 'https://youtube.com/@1615PODCAST',
    hosts: [
      { name: 'Marcos 16.15', role: 'Host Principal', columnTitle: 'A Palavra da Semana', photoUrl: getPortrait('marcos') }
    ],
    episodes: [
      { id: 'ep1', title: 'O Poder da Fé em Tempos Difíceis', date: '2024-05-20', url: '#', thumbnail: getThumb(101), aiSummary: 'Neste episódio, exploramos como a fé resiliente pode transformar adversidades em oportunidades de crescimento espiritual, com base em Marcos 16:15.' },
      { id: 'ep2', title: 'Conectando Gerações', date: '2024-05-13', url: '#', thumbnail: getThumb(102), aiSummary: 'Discussão sobre como a tecnologia pode servir como ponte para evangelização moderna sem perder a essência da mensagem.' },
    ]
  },
  {
    id: 'cicatrizes-que-viram-asas',
    title: 'Cicatrizes que Viram Asas',
    handle: '@cicatrizesqueviramasas',
    description: 'Histórias reais de superação, autocuidado e transformação de dor em propósito.',
    category: 'Autocuidado',
    themeColor: '#ff00ff',
    socialUrl: 'https://youtube.com/@cicatrizesqueviramasas',
    hosts: [
      { name: 'Ana Silva', role: 'Host', columnTitle: 'Momento de Cura', photoUrl: getPortrait('ana') }
    ],
    episodes: [
      { id: 'ep3', title: 'Renascer das Cinzas', date: '2024-05-18', url: '#', thumbnail: getThumb(201), aiSummary: 'Uma conversa emocionante sobre resiliência emocional e os passos práticos para reconstruir a autoestima após traumas.' }
    ]
  },
  {
    id: 'parada-obrigatoria',
    title: 'Parada Obrigatória',
    handle: '@paradaobrigatoria16.15',
    description: 'O pit stop definitivo para amantes de Automobilismo, Fórmula 1 e velocidade.',
    category: 'Automobilismo',
    themeColor: '#ff0000',
    socialUrl: 'https://youtube.com/@paradaobrigatoria16.15',
    hosts: [
      { name: 'Carlos Pace', role: 'Analista', columnTitle: 'Volta Rápida', photoUrl: getPortrait('carlos') }
    ],
    episodes: [
      { id: 'ep4', title: 'Análise do GP de Mônaco', date: '2024-05-26', url: '#', thumbnail: getThumb(301), aiSummary: 'Debate técnico sobre as estratégias de pneus e a polêmica classificação que definiu o pódio deste fim de semana.' }
    ]
  },
  {
    id: 'ubuntu-cast',
    title: 'UbuntuCast',
    handle: '@UbuntuCast16.15',
    description: 'Eu sou porque nós somos. Comunicação, sociedade e conexões humanas profundas.',
    category: 'Sociedade',
    themeColor: '#eba434',
    socialUrl: 'https://youtube.com/@UbuntuCast16.15',
    hosts: [
      { name: 'Mariana Costa', role: 'Host', columnTitle: 'Nós Por Nós', photoUrl: getPortrait('mariana') }
    ],
    episodes: [
      { id: 'ep5', title: 'A Força da Comunidade', date: '2024-05-22', url: '#', thumbnail: getThumb(401), aiSummary: 'Como iniciativas locais estão transformando bairros inteiros através do conceito de Ubuntu e colaboração coletiva.' }
    ]
  },
  {
    id: 'podcofrinho',
    title: 'PodCofrinho',
    handle: '@podcofrinho',
    description: 'Educação financeira descomplicada. Economia pessoal e investimentos para todos.',
    category: 'Finanças',
    themeColor: '#00ff00',
    socialUrl: 'https://youtube.com/@podcofrinho',
    hosts: [
      { name: 'Beto Saver', role: 'Consultor', columnTitle: 'Dica de Ouro', photoUrl: getPortrait('beto') }
    ],
    episodes: [
      { id: 'ep6', title: 'Investindo com Pouco', date: '2024-05-15', url: '#', thumbnail: getThumb(501), aiSummary: 'Estratégias para começar a investir com menos de R$50,00 e a importância dos juros compostos a longo prazo.' }
    ]
  },
  {
    id: 'excelentissimo-podcast',
    title: 'Excelentíssimo Podcast',
    handle: '@ExcelentissimoPodcast',
    description: 'Debates jurídicos de alto nível, leis e o impacto do direito na sociedade.',
    category: 'Direito',
    themeColor: '#0000ff',
    socialUrl: 'https://youtube.com/@ExcelentissimoPodcast',
    hosts: [
      { name: 'Dr. Roberto', role: 'Advogado', columnTitle: 'Juridiquês Traduzido', photoUrl: getPortrait('roberto') }
    ],
    episodes: [
      { id: 'ep7', title: 'Novas Leis Trabalhistas', date: '2024-05-10', url: '#', thumbnail: getThumb(601), aiSummary: 'Análise detalhada das recentes alterações na CLT e o que muda para empregadores e empregados em 2024.' }
    ]
  },
  {
    id: 'nacativa-cast',
    title: 'Na Cativa Cast',
    handle: '@NaCativaCast',
    description: 'Bastidores do esporte, desempenho físico e entrevistas com atletas de elite.',
    category: 'Esportes',
    themeColor: '#00f3ff',
    socialUrl: 'https://youtube.com/@NaCativaCast',
    hosts: [
      { name: 'Júlia Sports', role: 'Comentarista', columnTitle: 'Visão de Jogo', photoUrl: getPortrait('julia') }
    ],
    episodes: [
      { id: 'ep8', title: 'A Mente do Atleta', date: '2024-05-28', url: '#', thumbnail: getThumb(701), aiSummary: 'Psicologia esportiva: como a preparação mental define campeões em momentos de alta pressão.' }
    ]
  },
];

export const AWARDS: Award[] = [
  { year: 2024, category: 'Automobilismo', podcastId: 'parada-obrigatoria', count: 1 },
  { year: 2024, category: 'Direito', podcastId: 'excelentissimo-podcast', count: 2 },
  { year: 2024, category: 'Espiritualidade', podcastId: '16-15-podcast', count: 1 },
  { year: 2024, category: 'Esporte', podcastId: 'nacativa-cast', count: 2 },
  { year: 2025, category: 'Automobilismo', podcastId: 'parada-obrigatoria', count: 1 },
  { year: 2025, category: 'Direito', podcastId: 'excelentissimo-podcast', count: 2 },
  { year: 2025, category: 'Espiritualidade', podcastId: '16-15-podcast', count: 3 },
  { year: 2025, category: 'Esporte', podcastId: 'nacativa-cast', count: 3 },
  { year: 2025, category: 'Autocuidado', podcastId: 'cicatrizes-que-viram-asas', count: 3 }, // Mapped from 'Inspiracats' in prompt to existing
  { year: 2025, category: 'Diversidade', podcastId: 'ubuntu-cast', count: 2 }, // Mapped Entre Lábios to closest match or simulated
  { year: 2025, category: 'Comunicação', podcastId: 'ubuntu-cast', count: 3 },
];