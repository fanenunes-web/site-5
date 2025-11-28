export interface Episode {
  id: string;
  title: string;
  thumbnail: string;
  date: string;
  aiSummary: string; // The simulated AI summary
  url: string;
}

export interface Host {
  name: string;
  role: string;
  columnTitle?: string;
  photoUrl: string;
}

export interface Podcast {
  id: string;
  title: string;
  handle: string; // e.g., @1615PODCAST
  description: string;
  category: 'Espiritualidade' | 'Autocuidado' | 'Automobilismo' | 'Sociedade' | 'Finanças' | 'Direito' | 'Esportes';
  themeColor: string;
  hosts: Host[];
  episodes: Episode[];
  socialUrl: string;
}

export interface Award {
  year: number;
  category: string;
  podcastId: string;
  count: number;
}
