export type Category = 'All' | 'Data' | 'Engineering' | 'Art' | 'Design';

export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  year: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  
  // Process can be either a simple string or an object with text and images
  process?: (string | {
    text: string;
    images?: string[];
  })[];
  
  image: string;
  size: string;
  gallery?: string[];
  
  // Optional: Detailed nested projects (if you want to keep this structure)
  projects?: {
    name: string;
    fullName: string;
    type: string;
    role?: string;
    hmw?: string;
    problem: string;
    solution: string;
    process?: string;
    skills: string;
    images: string[];
  }[];
  
  community?: {
    text: string;
    mentors: {
      name: string;
      url: string;
    }[];
  };
}

export interface TimelineItem {
  id: number;
  year: string;
  role: string;
  organization: string;
  description: string;
  type: 'education' | 'extracurricular';
}
