
export interface MemoryMoment {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
}

export interface LoveNote {
  id: number;
  text: string;
  category: 'cute' | 'funny' | 'deep';
}
