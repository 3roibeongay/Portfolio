export interface Project {
  id: string;
  title: string;
  description: string;
  href?: string;
  demoLink?: string;
  githubLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
