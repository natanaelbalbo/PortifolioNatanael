/**
 * Experiências profissionais
 */

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'ROQT Data & IA',
    position: 'Desenvolvedor Full Stack Jr',
    period: '02/2025 - Presente',
    location: 'Maringá, Paraná',
    current: true,
    description:
      'Desenvolvimento de sistemas ERP personalizados e aplicações web completas.',
    responsibilities: [
      'Desenvolvimento de sistemas ERP personalizados para representantes comerciais e vendas de implementos agrícolas',
      'Integração com APIs REST e serviços SOAP/XML para comunicação com sistemas externos',
      'Responsável por todo o ciclo de desenvolvimento: requisitos, prototipação, codificação e testes',
      'Deploy e gerenciamento de ambientes de produção em servidores Linux com Docker',
      'Aplicação de conceitos de IA, incluindo agentes inteligentes e Model Context Protocol (MCP)',
    ],
  },
  {
    id: 2,
    company: 'NCS SISTEMAS',
    position: 'Desenvolvedor de Software',
    period: '04/2023 - 03/2024',
    location: 'Maringá, Paraná',
    current: false,
    description: 'Desenvolvimento e manutenção de sistemas ERP.',
    responsibilities: [
      'Desenvolvimento e manutenção de sistemas ERP utilizando Delphi e PostgreSQL',
      'Criação e atualização de módulos fiscais, com foco na emissão de NF-e seguindo regras da Sefaz',
      'Desenvolvimento de rotinas automatizadas para gestão de títulos e controle de estoque',
      'Integração com sistemas externos e automatização da exportação de NF-e',
      'Otimização de queries SQL e análise de performance do sistema',
    ],
  },
];
