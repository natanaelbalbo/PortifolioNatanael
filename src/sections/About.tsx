import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendar,
} from 'react-icons/fa';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { personalInfo } from '../data/personalInfo';
import { experiences } from '../data/experiences';

/**
 * Seção Sobre Mim - Apresentação detalhada e experiências
 */

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing['5xl']}
    ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};

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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const AboutText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const AboutParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    text-align: left;
  }
`;

const InfoList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing['2xl']};
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const InfoLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const InfoValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const ExperiencesTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ExperienceCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing['2xl']};
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ExperienceInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Position = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ExperienceMeta = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.7;
`;

const ResponsibilitiesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ResponsibilityItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const calculateAge = (birthDate: string) => {
  const [day, month, year] = birthDate.split('/').map(Number);
  const birth = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

export const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>Sobre Mim</SectionTitle>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutParagraph>{personalInfo.summary}</AboutParagraph>

            <AboutParagraph>
              Tenho sólida experiência no desenvolvimento de aplicações
              completas, desde a concepção até o deploy em produção. Minha
              trajetória profissional inclui passagem pela NCS Sistemas, onde
              trabalhei com sistemas ERP e módulos fiscais, e atualmente atuo na
              ROQT Data & IA, desenvolvendo soluções modernas e escaláveis.
            </AboutParagraph>

            <AboutParagraph>
              Busco constantemente aprimorar minhas habilidades e me manter
              atualizado com as mais recentes tecnologias do mercado. Tenho
              facilidade de aprendizado, trabalho bem em equipe e valorizo
              código limpo e boas práticas de desenvolvimento.
            </AboutParagraph>
          </AboutText>

          <InfoList
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <InfoItem>
              <FaMapMarkerAlt />
              <InfoText>
                <InfoLabel>Localização</InfoLabel>
                <InfoValue>{personalInfo.location}</InfoValue>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <FaCalendar />
              <InfoText>
                <InfoLabel>Idade</InfoLabel>
                <InfoValue>
                  {calculateAge(personalInfo.birthDate)} anos
                </InfoValue>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <FaGraduationCap />
              <InfoText>
                <InfoLabel>Formação</InfoLabel>
                <InfoValue>Eng. de Software + Front-End (EBAC)</InfoValue>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <FaBriefcase />
              <InfoText>
                <InfoLabel>Experiência</InfoLabel>
                <InfoValue>2+ anos</InfoValue>
              </InfoText>
            </InfoItem>
          </InfoList>
        </AboutContent>

        <ExperiencesTitle>Experiência Profissional</ExperiencesTitle>

        <ExperienceGrid>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ExperienceHeader>
                <ExperienceInfo>
                  <CompanyName>{exp.company}</CompanyName>
                  <Position>{exp.position}</Position>
                  <ExperienceMeta>
                    <MetaItem>
                      <FaCalendar />
                      {exp.period}
                    </MetaItem>
                    <MetaItem>
                      <FaMapMarkerAlt />
                      {exp.location}
                    </MetaItem>
                  </ExperienceMeta>
                </ExperienceInfo>
                {exp.current && <CurrentBadge>Atual</CurrentBadge>}
              </ExperienceHeader>

              <Description>{exp.description}</Description>

              <ResponsibilitiesList>
                {exp.responsibilities.map((resp, idx) => (
                  <ResponsibilityItem key={idx}>{resp}</ResponsibilityItem>
                ))}
              </ResponsibilitiesList>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </AboutSection>
  );
};
