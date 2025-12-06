export interface Project {
  name: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl: string;
  webUrl?: string; // Optional property
}
