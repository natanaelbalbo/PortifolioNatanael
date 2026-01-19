/**
 * Habilidades técnicas organizadas por categoria
 */

export interface Skill {
  name: string;
  category: string;
}

export const skills = [
  // Front-End
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'Styled Components', category: 'Frontend' },
  { name: 'Sass', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'Figma', category: 'Frontend' },

  // Back-End
  { name: 'Python', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'Django REST Framework', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'APIs RESTful', category: 'Backend' },

  // Banco de Dados
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'SQL Server', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Firebase', category: 'Database' },

  // DevOps e Ferramentas
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'DevOps' },
  { name: 'GitHub', category: 'DevOps' },
  { name: 'Linux', category: 'DevOps' },
  { name: 'NGINX', category: 'DevOps' },
];

// Categorias de skills para exibição organizada
export const skillCategories = [
  {
    title: 'Frontend',
    skills: skills.filter((s) => s.category === 'Frontend'),
  },
  {
    title: 'Backend',
    skills: skills.filter((s) => s.category === 'Backend'),
  },
  {
    title: 'Database',
    skills: skills.filter((s) => s.category === 'Database'),
  },
  {
    title: 'DevOps',
    skills: skills.filter((s) => s.category === 'DevOps'),
  },
];
