import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const TechnologyPartners = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <SectionTitle>TrueFans CONNECT™ – Enhanced by Leading Tech Partnerships</SectionTitle>
          <SectionDescription>
            At TrueFans CONNECT™, we're building the future of fan engagement—powered by best-in-class technology. 
            Our parent company, New Music Lives, has partnered with top innovators to provide a seamless, secure, 
            and immersive experience.
          </SectionDescription>
        </SectionHeader>
        
        <PartnersSubheading>Our Technology Partners</PartnersSubheading>
        
        <PartnersGrid>
          <PartnerCard
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <PartnerName>SET.Tools</PartnerName>
            <PartnerDescription>
              Enables location-based donations, letting fans support artists in real time at live events, 
              virtual shows, and exclusive experiences through geofencing technology.
            </PartnerDescription>
          </PartnerCard>
          
          <PartnerCard
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PartnerName>Manifest Financial</PartnerName>
            <PartnerDescription>
              Handles secure transactions and fast payouts, ensuring artists receive earnings reliably 
              while protecting every payment.
            </PartnerDescription>
          </PartnerCard>
        </PartnersGrid>
        
        <OtherPartnersSection>
          <OtherPartnersTitle>Other Partners</OtherPartnersTitle>
          <OtherPartnersText>
            We will be adding other partners to enhance and expand the services and resources in the 
            TrueFans ecosystem over time - watch this space for me details...
          </OtherPartnersText>
        </OtherPartnersSection>
        
        <ClosingSection>
          <ClosingTitle>A Smarter Way to Connect</ClosingTitle>
          <ClosingText>
            By integrating these solutions, TrueFans Connect delivers a platform where artists thrive 
            and fans engage like never before.
          </ClosingText>
          <ClosingText>
            Join us and be part of the next era of music fandom.
          </ClosingText>
        </ClosingSection>
      </Container>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.space['4xl']} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const SectionHeader = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.space['2xl']};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

const PartnersSubheading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin: ${({ theme }) => theme.space.xl} 0;
`

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space['2xl']};
`

const PartnerCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const PartnerName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const PartnerDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

const OtherPartnersSection = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space['2xl']};
  text-align: center;
`

const OtherPartnersTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const OtherPartnersText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

const ClosingSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const ClosingTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ClosingText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.md};
`

export default TechnologyPartners
