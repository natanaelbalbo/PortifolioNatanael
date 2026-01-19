import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaCode,
  FaServer,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiDjango,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiStyledcomponents,
} from 'react-icons/si';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { skillCategories } from '../data/skills';

/**
 * Seção de Habilidades com Grid visual com ícones e categorias
 */

const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['5xl']}
    ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.backgroundLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['3xl']}
      ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing['2xl']}
      ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing['2xl']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CategoryIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillTag = styled(motion.span)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TechStackSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['4xl']};
`;

const TechStackTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const TechIconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const TechIcon = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all ${({ theme }) => theme.transitions.base};

  svg {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};

    svg {
      color: ${({ theme }) => theme.colors.primaryLight};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.sm};
    gap: ${({ theme }) => theme.spacing.xs};

    svg {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }
`;

const TechName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.65rem;
  }
`;

// Ícones das principais tecnologias
const techStack = [
  { name: 'React', icon: FaReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: FaPython },
  { name: 'Django', icon: SiDjango },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: FaDocker },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Redis', icon: SiRedis },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Styled', icon: SiStyledcomponents },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'Figma', icon: FaFigma },
  { name: 'Database', icon: FaDatabase },
];

// Mapear ícones para cada categoria
const getCategoryIcon = (title: string) => {
  const icons: Record<string, JSX.Element> = {
    Frontend: <FaCode />,
    Backend: <FaServer />,
    Database: <FaDatabase />,
    DevOps: <FaDocker />,
  };
  return icons[title] || <FaCode />;
};

export const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Habilidades Técnicas</SectionTitle>

        <CategoryGrid>
          {skillCategories.map((category, idx) => (
            <CategoryCard
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <CategoryHeader>
                <CategoryIcon>{getCategoryIcon(category.title)}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>

              <SkillsList>
                {category.skills.map((skill, skillIdx) => (
                  <SkillTag
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + skillIdx * 0.03 }}
                  >
                    {skill.name}
                  </SkillTag>
                ))}
              </SkillsList>
            </CategoryCard>
          ))}
        </CategoryGrid>

        <TechStackSection>
          <TechStackTitle>Stack Tecnológico</TechStackTitle>
          <TechIconsGrid>
            {techStack.map((tech, idx) => (
              <TechIcon
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <tech.icon />
                <TechName>{tech.name}</TechName>
              </TechIcon>
            ))}
          </TechIconsGrid>
        </TechStackSection>
      </Container>
    </SkillsSection>
  );
};
