import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: 'Create Your Artist Profile',
    description: 'Sign up and build your artist profile in minutes. Connect your payment account for same-day deposits.',
    image: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg',
  },
  {
    id: 2,
    title: 'Generate Your QR Codes',
    description: 'Create custom QR codes for each show, merch item, or special offer. Each code is tracked for analytics.',
    image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg',
  },
  {
    id: 3,
    title: 'Display at Shows & Online',
    description: 'Show your QR code on stage, merch table, or share digitally. Fans scan to support you instantly.',
    image: 'https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg',
  },
  {
    id: 4,
    title: 'Build Lasting Fan Relationships',
    description: "Use our tools to nurture relationships with fans who've supported you. Send exclusive content and offers.",
    image: 'https://images.pexels.com/photos/3984827/pexels-photo-3984827.jpeg',
  },
]

const HowItWorks = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <SectionTitle>How It Works</SectionTitle>
          <SectionDescription>
            Get started in minutes and start receiving direct fan support at your very next show.
          </SectionDescription>
        </SectionHeader>
        
        <StepsContainer>
          {steps.map((step, index) => (
            <StepItem
              key={step.id}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <StepNumberContainer>
                <StepNumber>{step.id}</StepNumber>
                {index < steps.length - 1 && <StepConnector />}
              </StepNumberContainer>
              <StepContent>
                <StepImageWrapper>
                  <StepImage src={step.image} alt={step.title} />
                  <StepImageOverlay />
                </StepImageWrapper>
                <StepInfo>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepInfo>
              </StepContent>
            </StepItem>
          ))}
        </StepsContainer>
      </Container>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.space['6xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.trustworthyNavy || '#1E3A8A'} 0%, #0A1A2F 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.space.md};
  }
`

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space['3xl']};
`

const SectionTitle = styled.h2`
  color: white;
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-size: clamp(2rem, 4vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
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
    background-color: ${({ theme }) => theme.colors.revolutionaryGold || '#FFD700'};
  }
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.warmCream || '#F5F5DC'};
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['4xl']};
  max-width: 900px;
  margin: 0 auto;
`

const StepItem = styled.div`
  display: flex;
  align-items: flex-start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

const StepNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${({ theme }) => theme.space.lg};
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.space.md};
    margin-right: 0;
    flex-direction: row;
    width: 100%;
  }
`

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.revolutionaryGold || '#FFD700'};
  color: ${({ theme }) => theme.colors.trustworthyNavy || '#1E3A8A'};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.revolutionaryGold || '#FFD700'};
    opacity: 0.3;
    z-index: -1;
  }
`

const StepConnector = styled.div`
  width: 3px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 10px;
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`

const StepContent = styled.div`
  flex: 1;
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const StepImageWrapper = styled.div`
  width: 200px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 200px;
  }
`

const StepImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${StepImageWrapper}:hover & {
    transform: scale(1.05);
  }
`

const StepImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
  }
`

const StepInfo = styled.div`
  padding: ${({ theme }) => theme.space.xl};
  flex: 1;
`

const StepTitle = styled.h3`
  color: ${({ theme }) => theme.colors.revolutionaryGold || '#FFD700'};
  margin-bottom: ${({ theme }) => theme.space.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.warmCream || '#F5F5DC'};
  line-height: 1.6;
  font-size: ${({ theme }) => theme.fontSizes.md};
`

export default HowItWorks
