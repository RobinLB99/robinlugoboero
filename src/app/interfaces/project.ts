export interface Repositorio {
  type: string;
  url: string;
}

export interface Project {
  name: string;
  type: string[];
  description: string;
  tags: string[];
  imageUrl: string;
  repo: Repositorio;
  webUrl?: string;
  demoUrl?: string;
  status?: string;
}

