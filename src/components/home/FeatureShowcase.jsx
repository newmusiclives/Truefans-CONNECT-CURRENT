import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const FeatureShowcase = () => {
  const features = [
    {
      id: 1,
      title: "Instant QR Code Donations",
      description: "Generate custom QR codes that fans can scan to donate directly to you at shows, on merch, or anywhere you perform.",
      icon: "💸",
    },
    {
      id: 2,
      title: "Fan Relationship Management",
      description: "Build a database of your most supportive fans and communicate with them directly through our platform.",
      icon: "❤️",
    },
    {
      id: 3,
      title: "Next-Day Deposits",
      description: "Get paid quickly with deposits hitting your account the next business day, not weeks or months later.",
      icon: "🏦",
    },
    {
      id: 4,
      title: "Performance Analytics",
      description: "Track your earnings, fan growth, and donation patterns to optimize your performance strategy.",
      icon: "📊",
    },
    {
      id: 5,
      title: "Venue Integration",
      description: "Partner with venues in our network for seamless promotion and additional earning opportunities.",
      icon: "🏟️",
    },
    {
      id: 6,
      title: "Customizable Artist Profile",
      description: "Create a beautiful profile that showcases your music, upcoming shows, and makes it easy for fans to support you.",
      icon: "🎵",
    }
  ]

  return (
    <FeatureShowcaseContainer>
      <FeatureShowcaseHeader>
        <FeatureShowcaseTitle>Powerful Tools for Independent Artists</FeatureShowcaseTitle>
        <FeatureShowcaseSubtitle>Everything you need to monetize your music career and build lasting fan relationships</FeatureShowcaseSubtitle>
      </FeatureShowcaseHeader>
      
      <FeatureGrid>
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            as={motion.div}
            whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeatureShowcaseContainer>
  )
}

const FeatureShowcaseContainer = styled.section`
  padding: ${({ theme }) => theme.space['4xl']} ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space['3xl']} ${({ theme }) => theme.space.md};
  }
`

const FeatureShowcaseHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space['3xl']};
`

const FeatureShowcaseTitle = styled.h2`
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

const FeatureShowcaseSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.background};
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

export default FeatureShowcase
