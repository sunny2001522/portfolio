
export interface ProjectLink {
  type: "GitHub" | "Vercel";
  url: string;
}

export interface Project {
  id: string;
  year: string;
  thumbnail: string;
  links: ProjectLink[];
  skills: string[];
  description?: {
    zh?: {
      fe?: string;
      pm?: string;
      ui?: string;
    };
    en?: {
      fe?: string;
      pm?: string;
      ui?: string;
    };
  };
}

export interface Skill {
  name: string;
  icon: string;
}

export type Skills = Record<string, Skill[]>;

export interface Contact {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface Resume {
  en: string;
  zh: string;
}

export interface RoleData {
  projects: Project[];
  skills: Skills;
  contact: Contact[];
  resume: Resume;
}
