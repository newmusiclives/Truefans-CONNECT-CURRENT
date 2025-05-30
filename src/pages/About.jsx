import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const About = () => {
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>About TrueFans CONNECT™</HeroTitle>
            <HeroSubtitle>Revolutionizing the way independent artists connect with fans and venues</HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <MainContent>
            <VisionSection>
              <SectionTitle>Our Vision</SectionTitle>
              <VisionContent>
                <VisionImage src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Artist performing" />
                <VisionText>
                  <p>
                    At TrueFans CONNECT™, we believe that talented artists deserve to be supported directly by their fans, without intermediaries taking the majority of their earnings. Our platform is built on the principle that the relationship between artists and their supporters should be direct, transparent, and mutually beneficial.
                  </p>
                  <p>
                    We're creating a revolutionary ecosystem where independent artists can thrive, venues can discover new talent, and fans can directly support the creators they love. Our mission is to democratize the music industry by putting the power back in the hands of those who create and appreciate art.
                  </p>
                </VisionText>
              </VisionContent>
            </VisionSection>
            
            <StorySection>
              <SectionTitle>Our Story</SectionTitle>
              <StoryContent>
                <StoryImage src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team collaboration" />
                <StoryText>
                  <p>
                    TrueFans CONNECT™ was born from a simple observation: talented independent artists struggle to make a living from their art, while large platforms and intermediaries profit from their work. Our founders, themselves musicians and industry professionals, experienced these challenges firsthand.
                  </p>
                  <p>
                    In 2023, we set out to create a solution that would address these inequities. We built TrueFans CONNECT™ as a platform that prioritizes fair compensation, direct connections, and sustainable growth for artists. Since then, we've been on a mission to transform how independent artists build their careers and connect with their supporters.
                  </p>
                </StoryText>
              </StoryContent>
            </StorySection>
            
            <FeaturesSection>
              <SectionTitle>What Makes Us Different</SectionTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureIcon>💰</FeatureIcon>
                  <FeatureTitle>Artist-First Revenue Split</FeatureTitle>
                  <FeatureDescription>
                    We offer an industry-leading 80/20 revenue split in favor of artists, ensuring they keep the majority of what they earn.
                  </FeatureDescription>
                </FeatureCard>
                
                <FeatureCard>
                  <FeatureIcon>🔄</FeatureIcon>
                  <FeatureTitle>Two-Tier Affiliate Program</FeatureTitle>
                  <FeatureDescription>
                    Artists and venues earn 2.5% from direct referrals and another 2.5% from second-level referrals, creating passive income opportunities.
                  </FeatureDescription>
                </FeatureCard>
                
                <FeatureCard>
                  <FeatureIcon>🏢</FeatureIcon>
                  <FeatureTitle>Venue Integration</FeatureTitle>
                  <FeatureDescription>
                    We connect artists with venues through customizable submission forms, creating opportunities for live performances.
                  </FeatureDescription>
                </FeatureCard>
                
                <FeatureCard>
                  <FeatureIcon>🎯</FeatureIcon>
                  <FeatureTitle>Multiple Donation Methods</FeatureTitle>
                  <FeatureDescription>
                    Artists can receive support through embed codes, QR codes, and direct donation links, maximizing their earning potential.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeaturesSection>
            
            <ValuesSection>
              <SectionTitle>Our Values</SectionTitle>
              <ValuesList>
                <ValueItem>
                  <ValueIcon>⚖️</ValueIcon>
                  <ValueContent>
                    <ValueTitle>Fairness</ValueTitle>
                    <ValueDescription>
                      We believe in fair compensation for artists and transparent business practices.
                    </ValueDescription>
                  </ValueContent>
                </ValueItem>
                
                <ValueItem>
                  <ValueIcon>🤝</ValueIcon>
                  <ValueContent>
                    <ValueTitle>Community</ValueTitle>
                    <ValueDescription>
                      We foster meaningful connections between artists, fans, and venues.
                    </ValueDescription>
                  </ValueContent>
                </ValueItem>
                
                <ValueItem>
                  <ValueIcon>🚀</ValueIcon>
                  <ValueContent>
                    <ValueTitle>Innovation</ValueTitle>
                    <ValueDescription>
                      We continuously evolve our platform to better serve the needs of independent artists.
                    </ValueDescription>
                  </ValueContent>
                </ValueItem>
                
                <ValueItem>
                  <ValueIcon>🔒</ValueIcon>
                  <ValueContent>
                    <ValueTitle>Trust</ValueTitle>
                    <ValueDescription>
                      We build trust through reliability, security, and consistent delivery on our promises.
                    </ValueDescription>
                  </ValueContent>
                </ValueItem>
              </ValuesList>
            </ValuesSection>
            
            <TeamSection>
              <SectionTitle>Leadership Team</SectionTitle>
              <TeamGrid>
                <TeamMember>
                  <TeamMemberImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="John Smith" />
                  <TeamMemberInfo>
                    <TeamMemberName>John Smith</TeamMemberName>
                    <TeamMemberRole>Co-Founder & CEO</TeamMemberRole>
                  </TeamMemberInfo>
                </TeamMember>
                
                <TeamMember>
                  <TeamMemberImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="Sarah Johnson" />
                  <TeamMemberInfo>
                    <TeamMemberName>Sarah Johnson</TeamMemberName>
                    <TeamMemberRole>Co-Founder & CTO</TeamMemberRole>
                  </TeamMemberInfo>
                </TeamMember>
                
                <TeamMember>
                  <TeamMemberImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="Michael Chen" />
                  <TeamMemberInfo>
                    <TeamMemberName>Michael Chen</TeamMemberName>
                    <TeamMemberRole>Head of Artist Relations</TeamMemberRole>
                  </TeamMemberInfo>
                </TeamMember>
                
                <TeamMember>
                  <TeamMemberImage src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" alt="Emily Rodriguez" />
                  <TeamMemberInfo>
                    <TeamMemberName>Emily Rodriguez</TeamMemberName>
                    <TeamMemberRole>Head of Venue Partnerships</TeamMemberRole>
                  </TeamMemberInfo>
                </TeamMember>
              </TeamGrid>
            </TeamSection>
            
            <StatsSection>
              <SectionTitle>TrueFans CONNECT™ Impact</SectionTitle>
              <StatsGrid>
                <StatItem>
                  <StatNumber>10,000+</StatNumber>
                  <StatLabel>Artists on the platform</StatLabel>
                </StatItem>
                
                <StatItem>
                  <StatNumber>500+</StatNumber>
                  <StatLabel>Venue partners</StatLabel>
                </StatItem>
                
                <StatItem>
                  <StatNumber>$2M+</StatNumber>
                  <StatLabel>Paid to artists</StatLabel>
                </StatItem>
                
                <StatItem>
                  <StatNumber>80%</StatNumber>
                  <StatLabel>Revenue to artists</StatLabel>
                </StatItem>
              </StatsGrid>
            </StatsSection>
            
            <TestimonialSection>
              <SectionTitle>What Artists Say</SectionTitle>
              <TestimonialCard>
                <TestimonialContent>
                  "TrueFans CONNECT™ has completely transformed my career as an independent artist. The direct support from fans and the venue connections have allowed me to focus on creating music full-time."
                </TestimonialContent>
                <TestimonialAuthor>
                  <TestimonialAvatar src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg" alt="Marcus Rivera" />
                  <TestimonialInfo>
                    <TestimonialName>Marcus Rivera</TestimonialName>
                    <TestimonialRole>Independent Artist</TestimonialRole>
                  </TestimonialInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            </TestimonialSection>
            
            <ContactSection>
              <SectionTitle>Get in Touch</SectionTitle>
              <ContactInfo>
                <ContactItem>
                  <ContactIcon>📧</ContactIcon>
                  <ContactText>info@truefans.connect</ContactText>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>📞</ContactIcon>
                  <ContactText>(555) 123-4567</ContactText>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>📍</ContactIcon>
                  <ContactText>123 Music Avenue, Nashville, TN 37203</ContactText>
                </ContactItem>
              </ContactInfo>
              <ContactButton as={Link} to="/contact">Contact Us</ContactButton>
            </ContactSection>
            
            <JoinSection>
              <SectionTitle>Join Our Movement</SectionTitle>
              <JoinContent>
                <JoinText>
                  <p>
                    Whether you're an artist looking to connect with fans, a venue seeking fresh talent, or a music lover wanting to support independent creators, TrueFans CONNECT™ offers a platform where everyone benefits.
                  </p>
                  <p>
                    Join us in revolutionizing the music industry and creating a more sustainable future for independent artists.
                  </p>
                </JoinText>
                <JoinActions>
                  <JoinButton as={Link} to="/artist-signup">Sign Up as an Artist</JoinButton>
                  <JoinButton as={Link} to="/venue-signup" variant="secondary">Register Your Venue</JoinButton>
                </JoinActions>
              </JoinContent>
            </JoinSection>
          </MainContent>
        </Container>
      </ContentSection>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

// Hero Section
const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space['2xl']} 0;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${({ theme }) => theme.colors.primary};
  }
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.xl} 0;
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.md};
  letter-spacing: -0.5px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  opacity: 0.9;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space['2xl']} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['2xl']};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  position: relative;
  padding-bottom: ${({ theme }) => theme.space.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

// Vision Section
const VisionSection = styled.section`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const VisionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const VisionText = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.lightText};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const VisionImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

// Story Section
const StorySection = styled.section`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const StoryText = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.lightText};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const StoryImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

// Features Section
const FeaturesSection = styled.section`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const FeatureIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

// Values Section
const ValuesSection = styled.section`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const ValuesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const ValueItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateX(5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const ValueIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 50%;
`

const ValueContent = styled.div`
  flex: 1;
`

const ValueTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ValueDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

// Team Section
const TeamSection = styled.section`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const TeamMember = styled.div`
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
  }
`

const TeamMemberImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  margin: 0 auto ${({ theme }) => theme.space.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const TeamMemberInfo = styled.div``

const TeamMemberName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TeamMemberRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

// Stats Section
const StatsSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.trustworthyNavy} 0%, ${({ theme }) => theme.colors.trustworthyNavyLight} 100%);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  color: white;
  
  ${SectionTitle} {
    color: white;
    
    &::after {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const StatItem = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15);
  }
`

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  opacity: 0.9;
`

// Testimonial Section
const TestimonialSection = styled.section`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 60px;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-family: Georgia, serif;
    opacity: 0.5;
  }
`

const TestimonialContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-style: italic;
  position: relative;
  z-index: 1;
  padding-top: ${({ theme }) => theme.space.md};
  text-align: center;
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: ${({ theme }) => theme.space.md};
`

const TestimonialAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.md};
  border: 2px solid ${({ theme }) => theme.colors.primary};
`

const TestimonialInfo = styled.div``

const TestimonialName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TestimonialRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

// Contact Section
const ContactSection = styled.section`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: ${({ theme }) => theme.transitions.default};
  background-color: ${({ theme }) => theme.colors.background};
  
  &:hover {
    transform: translateX(5px);
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const ContactIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 50%;
  flex-shrink: 0;
`

const ContactText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: left;
`

const ContactButton = styled(Button)`
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.xl};
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.trustworthyNavyLight};
  }
`

// Join Section
const JoinSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.trustworthyNavy} 0%, ${({ theme }) => theme.colors.trustworthyNavyLight} 100%);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  ${SectionTitle} {
    color: white;
    
    &::after {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const JoinContent = styled.div`
  text-align: center;
`

const JoinText = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: white;
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const JoinActions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`

const JoinButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  
  &:first-child {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.trustworthyNavy};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
  
  &:last-child {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`

export default About
