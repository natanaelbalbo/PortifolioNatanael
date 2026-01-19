import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { SectionTitle } from '../components/SectionTitle';
import { personalInfo } from '../data/personalInfo';

/**
 * Seção de Contato - Informações de contato
 */

const ContactSection = styled.section`
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

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ContactInfoCentered = styled(ContactInfo)`
  max-width: 800px;
  margin: 0 auto;
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all ${({ theme }) => theme.transitions.base};
  color: ${({ theme }) => theme.colors.text};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
    background: ${({ theme }) => theme.colors.background};
  }
`;

const InfoItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const InfoLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const InfoValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  transition: all ${({ theme }) => theme.transitions.base};
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Entre em Contato</SectionTitle>

        <ContactInfoCentered
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <InfoTitle>Vamos Conversar!</InfoTitle>
            <InfoText>
              Estou sempre aberto a novas oportunidades e projetos
              interessantes. Seja para discutir uma vaga, colaborar em um
              projeto ou apenas trocar ideias sobre tecnologia, sinta-se à
              vontade para entrar em contato!
            </InfoText>
          </div>

          <InfoList>
            <InfoItem href={`mailto:${personalInfo.email}`}>
              <FaEnvelope />
              <InfoItemText>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>{personalInfo.email}</InfoValue>
              </InfoItemText>
            </InfoItem>

            <InfoItem href={`tel:${personalInfo.phone.replace(/\D/g, '')}`}>
              <FaPhone />
              <InfoItemText>
                <InfoLabel>Telefone</InfoLabel>
                <InfoValue>{personalInfo.phone}</InfoValue>
              </InfoItemText>
            </InfoItem>

            <InfoItem as="div" style={{ cursor: 'default' }}>
              <FaMapMarkerAlt />
              <InfoItemText>
                <InfoLabel>Localização</InfoLabel>
                <InfoValue>{personalInfo.location}</InfoValue>
              </InfoItemText>
            </InfoItem>
          </InfoList>

          <div>
            <InfoLabel style={{ display: 'block', marginBottom: '12px' }}>
              Redes Sociais
            </InfoLabel>
            <SocialLinksContainer>
              <SocialLink
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </SocialLink>
            </SocialLinksContainer>
          </div>
        </ContactInfoCentered>
      </Container>
    </ContactSection>
  );
};
