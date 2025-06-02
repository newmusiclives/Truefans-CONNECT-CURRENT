import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create your artist profile in minutes. Connect your payment account to start receiving donations.",
      icon: "📝",
    },
    {
      id: 2,
      title: "Generate QR Codes",
      description: "Create custom QR codes for your shows, merch table, or anywhere fans might want to support you.",
      icon: "📱",
    },
    {
      id: 3,
      title: "Display at Shows",
      description: "Print your QR codes or display them digitally at your performances and on merchandise.",
      icon: "🎭",
    },
    {
      id: 4,
      title: "Collect Donations",
      description: "Fans scan your code and donate directly to you. They can also follow you for updates.",
      icon: "💰",
    },
    {
      id: 5,
      title: "Get Paid Fast",
      description: "Receive your earnings the next business day directly to your connected account.",
      icon: "💳",
    },
    {
      id: 6,
      title: "Build Relationships",
      description: "Connect with your supporters, share updates, and turn one-time donors into lifelong fans.",
      icon: "🤝",
    }
  ]

  return (
    <HowItWorksContainer>
      <HowItWorksHeader>
        <HowItWorksTitle>How TrueFans CONNECT™ Works</HowItWorksTitle>
        <HowItWorksSubtitle>Get started in minutes and start earning at your very next show</HowItWorksSubtitle>
      </HowItWorksHeader>
      
      <StepsContainer>
        {steps.map((step) => (
          <StepCard
            key={step.id}
            as={motion.div}
            whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <StepNumber>{step.id}</StepNumber>
            <StepIcon>{step.icon}</StepIcon>
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </StepCard>
        ))}
      </StepsContainer>
    </HowItWorksContainer>
  )
}

const HowItWorksContainer = styled.section`
  padding: ${({ theme }) => theme.space['4xl']} ${({ theme }) => theme.space.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.lightBackground} 100%);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space['3xl']} ${({ theme }) => theme.space.md};
  }
`

const HowItWorksHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space['3xl']};
`

const HowItWorksTitle = styled.h2`
  font-size: clamp(1.875rem, 3vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
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

const HowItWorksSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const StepCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

const StepNumber = styled.div`
  position: absolute;
  top: -5px;
  right: 10px;
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.lightGray};
  opacity: 0.3;
  z-index: 0;
`

const StepIcon = styled.div`
  font-size: 2rem;
  margin-right: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.background};
  width: 60px;
  height: 60px;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1;
`

const StepContent = styled.div`
  z-index: 1;
`

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const StepDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

export default HowItWorks
