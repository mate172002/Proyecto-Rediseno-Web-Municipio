export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
}

export interface Procedure {
  id: string;
  title: string;
  description: string;
  institution: string;
  requirements: string[];
  steps: string[];
  cost: string;
  time: string;
  modality: 'Presencial' | 'En línea' | 'Mixta';
  documents: string[];
  category: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  imageUrl?: string;
}

export interface Authority {
  id: string;
  name: string;
  position: string;
  imageUrl?: string;
  description: string;
}

export interface TransparencyDoc {
  id: string;
  title: string;
  category: string;
  date: string;
  size: string;
}
