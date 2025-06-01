import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import FeatureShowcase from '../components/home/FeatureShowcase'
import HowItWorks from '../components/home/HowItWorks'
import CallToAction from '../components/home/CallToAction'
import TransformationSection from '../components/home/TransformationSection'

const HomePage = () => {
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionSpacer size="xl" />
      
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Right Now Money and Fans Forever</HeroTitle>
            <HeroSubtitle>TrueFans CONNECT™ helps independent musicians get paid instantly at shows and build lasting relationships with their most supportive fans. Stop waiting for streaming pennies and start earning what you deserve.</HeroSubtitle>
            <HeroButtons>
              <PrimaryButton as={Link} to="/artist-signup">Join as an Artist</PrimaryButton>
              <SecondaryButton as={Link} to="/artist-profile">View Demo Artist</SecondaryButton>
            </HeroButtons>
          </HeroContent>
          <HeroImageContainer>
            <HeroImage src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg" alt="Artist performing" />
            <HeroImageOverlay />
          </HeroImageContainer>
        </Container>
      </HeroSection>
      
      <SectionSpacer size="xxl" />
      
      <ValuePropositionSection>
        <Container>
          <ValuePropositionTitle>The Music Industry Is Broken. We're Fixing It.</ValuePropositionTitle>
          <ValuePropositionGrid>
            <ValuePropositionItem>
              <ValuePropositionStat>$0.004</ValuePropositionStat>
              <ValuePropositionLabel>Average streaming payout per play</ValuePropositionLabel>
            </ValuePropositionItem>
            <ValuePropositionItem>
              <ValuePropositionStat>250,000</ValuePropositionStat>
              <ValuePropositionLabel>Streams needed to earn minimum wage</ValuePropositionLabel>
            </ValuePropositionItem>
            <ValuePropositionItem>
              <ValuePropositionStat>80%</ValuePropositionStat>
              <ValuePropositionLabel>Of your donation goes directly to artists</ValuePropositionLabel>
            </ValuePropositionItem>
          </ValuePropositionGrid>
          <ValuePropositionText>
            TrueFans CONNECT™ puts the power back in your hands. Get paid instantly at shows, build direct relationships with your supporters, and create a sustainable income stream that doesn't depend on algorithms or gatekeepers.
          </ValuePropositionText>
        </Container>
      </ValuePropositionSection>
      
      <SectionSpacer size="xxl" />
      
      <Container>
        <FeatureShowcaseWrapper>
          <FeatureShowcase />
        </FeatureShowcaseWrapper>
      </Container>
      
      <SectionSpacer size="xxl" />
      
      <Container>
        <HowItWorksWrapper>
          <HowItWorks />
        </HowItWorksWrapper>
      </Container>
      
      <SectionSpacer size="xxl" />
      
      <Container>
        <TransformationSectionWrapper>
          <TransformationSection />
        </TransformationSectionWrapper>
      </Container>
      
      <SectionSpacer size="xxl" />
      
      <TestimonialsSection>
        <Container>
          <SectionTitle>What Artists Are Saying</SectionTitle>
          <TestimonialsGrid>
            <TestimonialCard
              as={motion.div}
              whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialQuote>"TrueFans CONNECT has been a game-changer for my music career. The direct support from fans has allowed me to record my new EP without label backing. The QR codes at my merch table bring in an extra $200-300 per show!"</TestimonialQuote>
              <TestimonialAuthor>
                <TestimonialAvatar src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg" />
                <TestimonialInfo>
                  <TestimonialName>Sarah Johnson</TestimonialName>
                  <TestimonialRole>Jazz Vocalist</TestimonialRole>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard
              as={motion.div}
              whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialQuote>"The donation QR codes are perfect for live shows. I've seen a significant increase in support since I started displaying them at my merch table. The best part is getting paid the same day - no more waiting weeks for payment processing."</TestimonialQuote>
              <TestimonialAuthor>
                <TestimonialAvatar src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" />
                <TestimonialInfo>
                  <TestimonialName>Marcus Rivera</TestimonialName>
                  <TestimonialRole>Indie Rock Artist</TestimonialRole>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard
              as={motion.div}
              whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialQuote>"As a small band, we appreciate the 80/20 split. It's much more fair than other platforms, and the donation system is incredibly easy to use. The fan relationship tools have helped us build a dedicated community that supports us consistently."</TestimonialQuote>
              <TestimonialAuthor>
                <TestimonialAvatar src="https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg" />
                <TestimonialInfo>
                  <TestimonialName>Emily Chen</TestimonialName>
                  <TestimonialRole>Folk Band Lead</TestimonialRole>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsGrid>
        </Container>
      </TestimonialsSection>
      
      <SectionSpacer size="xxl" />
      
      <Container>
        <ComparisonSection>
          <ComparisonTitle>How We Compare</ComparisonTitle>
          <ComparisonTableWrapper>
            <ComparisonTable>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>TrueFans CONNECT™</th>
                  <th>Streaming Platforms</th>
                  <th>Traditional Tipping</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Artist Payout</td>
                  <td>80% of all donations</td>
                  <td>$0.003-$0.005 per stream</td>
                  <td>Variable, often shared with venue</td>
                </tr>
                <tr>
                  <td>Payment Speed</td>
                  <td>Next day deposits</td>
                  <td>30-90 days</td>
                  <td>Immediate but cash only</td>
                </tr>
                <tr>
                  <td>Fan Data</td>
                  <td>Detailed analytics</td>
                  <td>Limited or none</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>Relationship Building</td>
                  <td>Direct communication tools</td>
                  <td>None or algorithm-dependent</td>
                  <td>In-person only</td>
                </tr>
                <tr>
                  <td>Setup Difficulty</td>
                  <td>Simple, smooth and one-time</td>
                  <td>Complex distribution required</td>
                  <td>No setup, no tracking</td>
                </tr>
              </tbody>
            </ComparisonTable>
          </ComparisonTableWrapper>
        </ComparisonSection>
      </Container>
      
      <SectionSpacer size="xxl" />
      
      <Container>
        <CallToActionWrapper>
          <CallToAction />
        </CallToActionWrapper>
      </Container>
      
      <SectionSpacer size="xl" />
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.space.md};
  }
`

// Section Spacer
const SectionSpacer = styled.div`
  height: ${({ size, theme }) => 
    size === 'xxl' ? '160px' : 
    size === 'xl' ? '120px' : 
    size === 'lg' ? '80px' : 
    '60px'};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: ${({ size }) => 
    size === 'xxl' ? '120px' :
    size === 'xl' ? '100px' : 
    size === 'lg' ? '60px' : 
    '40px'};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ size }) => 
    size === 'xxl' ? '100px' :
    size === 'xl' ? '80px' : 
    size === 'lg' ? '40px' : 
    '30px'};
  }
`

// Hero Section
const HeroSection = styled.section`
  padding: ${({ theme }) => theme.space['5xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.lightBackground} 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 30%, rgba(26, 115, 232, 0.05) 0%, transparent 40%);
    z-index: 0;
  }
  
  ${Container} {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space.xl};
    position: relative;
    z-index: 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      flex-direction: column;
    }
  }
`

const HeroContent = styled.div`
  flex: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space.xl};
  }
`

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, ${({ theme }) => theme.fontSizes['5xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.2;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.revolutionaryGold};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  line-height: 1.6;
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: auto;
    margin-right: auto;
  }
`

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.sm};
  }
`

const PrimaryButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const SecondaryButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: 2px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.revolutionaryGold};
    border-radius: 50%;
    opacity: 0.1;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 150px;
    height: 150px;
    background-color: ${({ theme }) => theme.colors.passionateCrimson};
    border-radius: 50%;
    opacity: 0.1;
    z-index: 1;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${HeroImageContainer}:hover & {
    transform: scale(1.05);
  }
`

const HeroImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 50%);
  z-index: 2;
`

// Value Proposition Section
const ValuePropositionSection = styled.section`
  padding: ${({ theme }) => theme.space['6xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.trustworthyNavy} 0%, #0A1A2F 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.02);
    border-radius: 50%;
  }
`

const ValuePropositionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  color: white;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.revolutionaryGold};
  }
`

const ValuePropositionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.lg};
  }
`

const ValuePropositionItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space.xl};
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`

const ValuePropositionStat = styled.div`
  font-size: clamp(2rem, 4vw, ${({ theme }) => theme.fontSizes['4xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.revolutionaryGold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ValuePropositionLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.warmCream};
  line-height: 1.4;
`

const ValuePropositionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.warmCream};
`

// Feature Showcase Wrapper
const FeatureShowcaseWrapper = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
  padding: ${({ theme }) => theme.space['4xl']} 0;
`

// How It Works Wrapper
const HowItWorksWrapper = styled.div`
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.space['4xl']} 0;
`

// Transformation Section Wrapper
const TransformationSectionWrapper = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
  padding: ${({ theme }) => theme.space['4xl']} 0;
`

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: ${({ theme }) => theme.space['6xl']} 0;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 80% 20%, rgba(26, 115, 232, 0.03) 0%, transparent 50%);
    z-index: 0;
  }
`

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.revolutionaryGold};
  }
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
`

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 80px;
    color: ${({ theme }) => theme.colors.lightGray};
    font-family: Georgia, serif;
    line-height: 0;
    opacity: 0.3;
  }
`

const TestimonialQuote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-style: italic;
  flex: 1;
  position: relative;
  z-index: 1;
  padding-top: ${({ theme }) => theme.space.md};
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: ${({ theme }) => theme.space.md};
`

const TestimonialAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.md};
  border: 3px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const TestimonialInfo = styled.div``

const TestimonialName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TestimonialRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

// Comparison Section
const ComparisonSection = styled.section`
  padding: ${({ theme }) => theme.space['6xl']} 0;
  background-color: white;
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 80%, rgba(26, 115, 232, 0.03) 0%, transparent 50%);
    z-index: 0;
  }
`

const ComparisonTitle = styled.h2`
  font-size: clamp(2rem, 4vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.revolutionaryGold};
  }
`

const ComparisonTableWrapper = styled.div`
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: ${({ theme }) => theme.space.lg};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
  
  th {
    background-color: ${({ theme }) => theme.colors.trustworthyNavy};
    color: white;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    position: relative;
    
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: 0;
      top: 25%;
      height: 50%;
      width: 1px;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  
  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.background};
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  td:first-child {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${({ theme }) => theme.colors.trustworthyNavy};
  }
  
  td:nth-child(2) {
    color: ${({ theme }) => theme.colors.successGreen};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
  
  tr:hover {
    background-color: rgba(26, 115, 232, 0.05);
  }
`

const CallToActionWrapper = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.passionateCrimson}10 0%, ${({ theme }) => theme.colors.secondary}20 100%);
  padding: ${({ theme }) => theme.space['4xl']} 0;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
`

export default HomePage
