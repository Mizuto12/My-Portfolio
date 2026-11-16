export type Theme = 'green' | 'gengar';

export interface SkillCategory {
  id: string;
  title: string;
  icon: string; // lucide-react icon name, resolved in Skills.tsx
  skills: string[];
}

export interface ProjectModule {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectCaseStudy {
  slug: string;
  tag: string;
  tagVariant: 'primary' | 'secondary';
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  role: string;
  team: string;
  status: string;
  techStackSummary: string;
  overview: string[];
  problem: string;
  contributions: string[];
  techStack: string[];
  modules: ProjectModule[];
  features: string[];
  uiuxNote?: string;
  testingNote?: string;
  lessons: string[];
  screenshot?: { src: string; alt: string };
}

export interface TimelineEntry {
  when: string;
  title: string;
  org?: string;
  result?: string;
}

export interface InvolvementGroup {
  title: string;
  note?: string;
  entries: TimelineEntry[];
}
