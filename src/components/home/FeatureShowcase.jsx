import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaQrcode, FaChartLine, FaUsers, FaMoneyBillWave, FaCalendarAlt, FaLock } from 'react-icons/fa'

const features = [
  {
    id: 1,
    icon: <FaQrcode />,
    title: 'Custom QR Codes',
    description: 'Generate unique QR codes for shows, merch, or special offers. Fans can scan and support you instantly.'
  },
  {
    id: 2,
    icon: <FaMoneyBillWave />,
    title: 'Next-Day Deposits',
    description: 'Get paid quickly with deposits to your account the next business day. No more waiting for payouts.'
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: 'Fan Relationship Tools',
    description: 'Build lasting connections with supporters through personalized messaging and exclusive content.'
  },
  {
    id: 4,
    icon: <FaChartLine />,
    title: 'Performance Analytics',
    description: 'Track support patterns, fan demographics, and engagement metrics to optimize your strategy.'
  },
  {
    id: 5,
    icon: <FaCalendarAlt />,
    title: 'Event Management',
    description: 'Create and promote your shows, track attendance, and measure performance all in one place.'
  },
  {
    id: 6,
    icon: <FaLock />,
    title: 'Secure Transactions',
    description: 'Bank-level security ensures all transactions are protected, giving you and your fans peace of mind.'
  }
]

const FeatureShowcase = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <SectionHeader>
            <SectionTitle>Everything You Need to Succeed</SectionTitle>
            <SectionDescription>
              TrueFans CONNECT™ provides all the tools independent artists need to build sustainable careers through direct fan support.
            </SectionDescription>
          </SectionHeader>
          
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                }}
              >
                <FeatureIconWrapper>
                  {feature.icon}
                </FeatureIconWrapper>
                <FeatureContent>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureContent>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  background-color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 70% 30%, rgba(26, 115, 232, 0.03) 0%, transparent 50%);
    z-index: 0;
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

const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.space['5xl']} 0;
`

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space['3xl']};
`

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.trustworthyNavy};
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
    background-color: ${({ theme }) => theme.colors.revolutionaryGold};
  }
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`

const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start;
  padding: ${({ theme }) => theme.space.xl};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const FeatureIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}10, ${({ theme }) => theme.colors.primary}20);
  margin-right: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  flex-shrink: 0;
  transition: all 0.3s ease;
  
  ${FeatureCard}:hover & {
    transform: scale(1.1);
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}20, ${({ theme }) => theme.colors.primary}30);
  }
`

const FeatureContent = styled.div`
  flex: 1;
`

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  font-size: ${({ theme }) => theme.fontSizes.md};
`

export default FeatureShowcase
