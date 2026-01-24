/**
 * Projetos desenvolvidos - Portfolio EBAC
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Blog Completo com Next.js',
    description:
      'PWA de blog moderno com Next.js 15, SSG e Server Components para máxima performance e SEO otimizado.',
    longDescription: `Blog desenvolvido durante o curso da EBAC utilizando Next.js 15 com App Router.
      A aplicação utiliza Server Components e Static Site Generation (SSG) para pré-renderizar todas
      as páginas em build time, resultando em carregamento instantâneo. Implementa metadados dinâmicos
      para cada artigo, melhorando significativamente a indexação em buscadores e visibilidade orgânica.
      Aplica práticas modernas de CI/CD com pipeline automatizado via GitHub Actions, incluindo testes,
      build e deploy contínuo na Vercel.
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'App Router',
      'Server Components',
    ],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
    githubLink: 'https://github.com/natanaelbalbo/BlogEbac',
    liveLink: 'https://blog-ebac.vercel.app/',
    highlights: [
      'SSG para carregamento instantâneo',
      'Server Components reduzindo JavaScript no cliente',
      'SEO otimizado com Metadata API',
      'Rotas dinâmicas com generateStaticParams',
      'Pipeline CI/CD completo com GitHub Actions',
      'Versionamento semântico e Git Flow',
      'Deploy contínuo na Vercel',
      'Dark mode automático',
    ],
  },
  {
    id: 2,
    title: 'Diário de Bordo PWA',
    description:
      'Progressive Web App para registro de atividades diárias com funcionamento offline completo e instalabilidade.',
    longDescription: `PWA desenvolvido com JavaScript puro durante o curso da EBAC. Aplicação instalável
      que funciona 100% offline através de Service Workers e estratégia Cache First. Implementa
      persistência de dados com LocalStorage, garantindo que nenhuma entrada seja perdida. Pode ser
      instalado na tela inicial como aplicativo nativo, oferecendo experiência equivalente a apps nativos.`,
    technologies: [
      'JavaScript Vanilla',
      'HTML5',
      'CSS3',
      'Service Worker',
      'PWA APIs',
      'LocalStorage',
    ],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    githubLink: 'https://github.com/natanaelbalbo/DiarioBordoEbac',
    liveLink: 'https://diario-bordo-ebac.vercel.app/',
    highlights: [
      'Funcionamento 100% offline com Service Worker',
      'Instalável como app nativo',
      'Cache First strategy para performance',
      'Persistência local com LocalStorage',
      'Interface responsiva e touch-friendly',
      'BeforeInstallPrompt implementado',
    ],
  },
  {
    id: 3,
    title: 'Todo List com Context API',
    description:
      'Gerenciador de tarefas com React avançado, Context API, custom hooks e otimização de performance.',
    longDescription: `Aplicação de gerenciamento de tarefas desenvolvida durante o curso da EBAC aplicando
      conceitos avançados do React. Utiliza Context API para gerenciamento de estado global, custom hooks
      reutilizáveis (useLocalStorage, useInput) e técnicas de memoization (React.memo, useMemo, useCallback)
      para otimização de performance. Persistência automática através de hook customizado integrado ao localStorage.`,
    technologies: [
      'React 18.2',
      'Vite',
      'Context API',
      'JavaScript ES6+',
      'CSS3',
      'Custom Hooks',
    ],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
    githubLink: 'https://github.com/natanaelbalbo/TodoList-EBAC',
    liveLink: 'https://todo-list-ebac.vercel.app/',
    highlights: [
      'Context API para estado global',
      'Custom Hooks (useLocalStorage, useInput)',
      'Memoization com React.memo e useMemo',
      'Filtros por status em tempo real',
      'Estatísticas e progresso calculados',
      'Performance otimizada sem re-renders desnecessários',
    ],
  },
];
