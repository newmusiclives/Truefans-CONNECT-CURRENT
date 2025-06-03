import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const TechnologyPartners = () => {
  return (
    <TechnologyPartnersContainer>
      <TechnologyPartnersHeader>
        <TechnologyPartnersTitle>TrueFans Connect – Enhanced by Leading Tech Partnerships</TechnologyPartnersTitle>
        <TechnologyPartnersDescription>
          At TrueFans Connect, we're building the future of fan engagement—powered by best-in-class technology. 
          Our parent company, New Music Lives, has partnered with top innovators to provide a seamless, secure, 
          and immersive experience.
        </TechnologyPartnersDescription>
      </TechnologyPartnersHeader>
      
      <PartnersSubheading>Our Technology Partners</PartnersSubheading>
      
      <PartnersGrid>
        <PartnerCard
          as={motion.div}
          whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.2)' }}
          transition={{ duration: 0.3 }}
        >
          <PartnerLogo>
            <img src="https://via.placeholder.com/150x60?text=SET.Tools" alt="SET.Tools Logo" />
          </PartnerLogo>
          <PartnerTitle>SET.Tools</PartnerTitle>
          <PartnerDescription>
            Enables location-based donations, letting fans support artists in real time at live events, 
            virtual shows, and exclusive experiences through geofencing technology.
          </PartnerDescription>
        </PartnerCard>
        
        <PartnerCard
          as={motion.div}
          whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.2)' }}
          transition={{ duration: 0.3 }}
        >
          <PartnerLogo>
            <img src="https://via.placeholder.com/150x60?text=Manifest" alt="Manifest Financial Logo" />
          </PartnerLogo>
          <PartnerTitle>Manifest Financial</PartnerTitle>
          <PartnerDescription>
            Handles secure transactions and fast payouts, ensuring artists receive earnings reliably 
            while protecting every payment.
          </PartnerDescription>
        </PartnerCard>
      </PartnersGrid>
      
      <ClosingSection>
        <ClosingTitle>A Smarter Way to Connect</ClosingTitle>
        <ClosingDescription>
          By integrating these solutions, TrueFans Connect delivers a platform where artists thrive 
          and fans engage like never before.
        </ClosingDescription>
        <ClosingCta>
          Join us and be part of the next era of music fandom.
        </ClosingCta>
      </ClosingSection>
    </TechnologyPartnersContainer>
  )
}

const TechnologyPartnersContainer = styled.section`
  padding: ${({ theme }) => theme.space['4xl']} ${({ theme }) => theme.space.lg};
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space['3xl']} ${({ theme }) => theme.space.md};
  }
`

const TechnologyPartnersHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space['2xl']};
`

const TechnologyPartnersTitle = styled.h2`
  font-size: clamp(1.875rem, 3vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: white;
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    
    &::after {
      width: 60px;
      height: 2px;
    }
  }
`

const TechnologyPartnersDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.warmCream || 'rgba(255, 255, 255, 0.9)'};
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`

const PartnersSubheading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.revolutionaryGold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: ${({ theme }) => theme.space.lg};
  }
`

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.space.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.md};
  }
`

const PartnerCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space.lg};
  }
`

const PartnerLogo = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.md};
  
  img {
    max-height: 100%;
    max-width: 100%;
  }
`

const PartnerTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

const PartnerDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`

const ClosingSection = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`

const ClosingTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: white;
  margin-bottom: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

const ClosingDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.warmCream || 'rgba(255, 255, 255, 0.9)'};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`

const ClosingCta = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.revolutionaryGold};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`

export default TechnologyPartners
