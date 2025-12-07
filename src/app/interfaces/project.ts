export interface Project {
  name: string;
  type: string[];
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl: string;
  webUrl?: string; // Optional property
}
