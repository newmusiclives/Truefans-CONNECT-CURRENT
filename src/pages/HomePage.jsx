import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const HomePage = () => {
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
            <HeroTitle>Support Your Favorite Artists Directly</HeroTitle>
            <HeroSubtitle>TrueFans CONNECT™ helps independent musicians receive financial support from their fans through a simple, transparent donation system.</HeroSubtitle>
            <HeroButtons>
              <PrimaryButton as={Link} to="/artist-signup">Join as an Artist</PrimaryButton>
              <SecondaryButton as={Link} to="/artist-profile">View Demo Artist</SecondaryButton>
            </HeroButtons>
          </HeroContent>
          <HeroImageContainer>
            <HeroImage src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg" alt="Artist performing" />
          </HeroImageContainer>
        </Container>
      </HeroSection>
      
      <FeaturesSection>
        <Container>
          <SectionTitle>How It Works</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>🎵</FeatureIcon>
              <FeatureTitle>Artists Sign Up</FeatureTitle>
              <FeatureDescription>Musicians create their profile and get a personalized donation page</FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🔗</FeatureIcon>
              <FeatureTitle>Share With Fans</FeatureTitle>
              <FeatureDescription>Artists share their donation link, QR code, or embed widget</FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>💰</FeatureIcon>
              <FeatureTitle>Fans Donate</FeatureTitle>
              <FeatureDescription>Supporters make one-time donations to help fund their favorite artists</FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>💸</FeatureIcon>
              <FeatureTitle>Artists Get Paid</FeatureTitle>
              <FeatureDescription>80% of donations go directly to artists, 20% supports our platform</FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
      
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle>Ready to Start Receiving Support?</CTATitle>
            <CTADescription>Join thousands of independent musicians who are funding their art through fan donations.</CTADescription>
            <CTAButton as={Link} to="/artist-signup">Create Your Artist Account</CTAButton>
          </CTAContent>
        </Container>
      </CTASection>
      
      <TestimonialsSection>
        <Container>
          <SectionTitle>What Artists Are Saying</SectionTitle>
          <TestimonialsGrid>
            <TestimonialCard>
              <TestimonialQuote>"TrueFans CONNECT has been a game-changer for my music career. The direct support from fans has allowed me to record my new EP without label backing."</TestimonialQuote>
              <TestimonialAuthor>
                <TestimonialAvatar src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg" />
                <TestimonialInfo>
                  <TestimonialName>Sarah Johnson</TestimonialName>
                  <TestimonialRole>Jazz Vocalist</TestimonialRole>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialQuote>"The donation QR codes are perfect for live shows. I've seen a significant increase in support since I started displaying them at my merch table."</TestimonialQuote>
              <TestimonialAuthor>
                <TestimonialAvatar src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" />
                <TestimonialInfo>
                  <TestimonialName>Marcus Rivera</TestimonialName>
                  <TestimonialRole>Indie Rock Artist</TestimonialRole>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialQuote>"As a small band, we appreciate the 80/20 split. It's much more fair than other platforms, and the donation system is incredibly easy to use."</TestimonialQuote>
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
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

// Hero Section
const HeroSection = styled.section`
  padding: ${({ theme }) => theme.space['2xl']} 0;
  background-color: ${({ theme }) => theme.colors.background};
  
  ${Container} {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space.xl};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      flex-direction: column;
    }
  }
`

const HeroContent = styled.div`
  flex: 1;
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.2;
`

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  line-height: 1.5;
`

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  flex-wrap: wrap;
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
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`

const SecondaryButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`

// Features Section
const FeaturesSection = styled.section`
  padding: ${({ theme }) => theme.space['2xl']} 0;
  background-color: white;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const FeatureIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
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

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.space['2xl']} 0;
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
`

const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
  opacity: 0.9;
`

const CTAButton = styled(Button)`
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
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: ${({ theme }) => theme.space['2xl']} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const TestimonialQuote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-style: italic;
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`

const TestimonialAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.md};
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

export default HomePage
