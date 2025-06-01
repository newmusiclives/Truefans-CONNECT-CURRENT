import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'

const features = [
  "Get paid instantly at shows",
  "Build direct fan relationships",
  "Keep 80% of all donations",
  "Access detailed fan analytics",
  "Create custom QR codes for events",
  "Receive next-day deposits"
]

const CallToAction = () => {
  return (
    <CTAWrapper>
      <Container>
        <CTAContent>
          <CTATextContent>
            <CTATitle>Ready To Transform Your Music Career?</CTATitle>
            <CTADescription>
              Join thousands of independent artists who are taking control of their careers and building sustainable income streams with TrueFans CONNECT™.
            </CTADescription>
            
            <FeaturesList>
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index}
                  as={motion.li}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FeatureIcon><FaCheckCircle /></FeatureIcon>
                  <FeatureText>{feature}</FeatureText>
                </FeatureItem>
              ))}
            </FeaturesList>
          </CTATextContent>
          
          <CTAActions>
            <CTAButton 
              as={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CTALink to="/artist-signup">
                <span>Join as an Artist</span>
                <CTAButtonIcon><FaArrowRight /></CTAButtonIcon>
              </CTALink>
            </CTAButton>
            <CTASecondary>
              Already have an account? <CTASecondaryLink to="/login">Log in</CTASecondaryLink>
            </CTASecondary>
          </CTAActions>
        </CTAContent>
      </Container>
    </CTAWrapper>
  )
}

const CTAWrapper = styled.section`
  padding: ${({ theme }) => theme.space['4xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.passionateCrimson}15 0%, ${({ theme }) => theme.colors.secondary}25 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.revolutionaryGold};
    border-radius: 50%;
    opacity: 0.05;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.passionateCrimson};
    border-radius: 50%;
    opacity: 0.05;
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

const CTAContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['3xl']};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.space['3xl']};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.space.xl};
  }
`

const CTATextContent = styled.div`
  flex: 2;
`

const CTATitle = styled.h2`
  font-size: clamp(1.75rem, 3vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.2;
`

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xl};
  line-height: 1.6;
`

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 500px;
    margin: 0 auto;
  }
`

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: flex-start;
    text-align: left;
  }
`

const FeatureIcon = styled.span`
  color: ${({ theme }) => theme.colors.successGreen};
  font-size: ${({ theme }) => theme.fontSizes.md};
  flex-shrink: 0;
`

const FeatureText = styled.span`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes.md};
`

const CTAActions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CTAButton = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CTALink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.xl};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const CTAButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  ${CTALink}:hover & {
    transform: translateX(4px);
  }
`

const CTASecondary = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const CTASecondaryLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: underline;
  }
`

export default CallToAction
