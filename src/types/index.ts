export type ProficiencyLevel = 'Proficient' | 'Developing';

export type SkillCategory = 'Programming' | 'Data Analytics' | 'Computer Science' | 'Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiency: ProficiencyLevel;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Planned Placeholder';
  highlights: string[];
  architectureOverview?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  skillsLearned: string[];
  credentialUrl: string; // Placeholder URL
  status: 'Completed' | 'In Progress';
  iconType: 'database' | 'code' | 'analytics' | 'ai';
}

export interface CodeSnippetItem {
  id: string;
  title: string;
  language: string;
  description: string;
  useCase: string;
  code: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  currentYear: string; // Configurable field
  duration: string;
  location: string;
  statusText: string;
  coursework: string[];
  keyFocusAreas: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  location: string;
  kaggle?: string;
  leetcode?: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  headline: string;
  careerFocus: string;
  shortBio: string;
  fullBio: string[];
  statusBadge: string;
  photoUrl?: string;
}
