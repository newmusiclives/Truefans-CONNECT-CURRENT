import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import heroImage from '../../assets/images/hero-image.jpg'

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroContent>
          <HeroTextContent>
            <HeroTagline>The Music Platform That Puts Artists First</HeroTagline>
            <HeroTitle>
              Connect Directly With Your True Fans
            </HeroTitle>
            <HeroDescription>
              TrueFans CONNECT™ helps independent artists build sustainable careers through direct fan relationships. Get paid instantly at shows, keep 80% of all donations, and access powerful tools to grow your fanbase.
            </HeroDescription>
            <HeroActions>
              <PrimaryButton 
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonLink to="/artist-signup">
                  <span>Artist SignUp</span>
                  <ButtonIcon><FaArrowRight /></ButtonIcon>
                </ButtonLink>
              </PrimaryButton>
              <SecondaryButton 
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonLink to="/venue-signup">
                  <span>Venue SignUp</span>
                  <ButtonIcon><FaArrowRight /></ButtonIcon>
                </ButtonLink>
              </SecondaryButton>
            </HeroActions>
            <HeroStats>
              <StatItem>
                <StatValue>10,000+</StatValue>
                <StatLabel>Artists</StatLabel>
              </StatItem>
              <StatDivider />
              <StatItem>
                <StatValue>$2.5M+</StatValue>
                <StatLabel>Paid to Artists</StatLabel>
              </StatItem>
              <StatDivider />
              <StatItem>
                <StatValue>500,000+</StatValue>
                <StatLabel>Fan Transactions</StatLabel>
              </StatItem>
            </HeroStats>
          </HeroTextContent>
          
          <HeroImageContainer
            as={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroImg src={heroImage} alt="Artist connecting with fans" />
            <ImageOverlay />
            <ImageAccent />
          </HeroImageContainer>
        </HeroContent>
      </HeroContainer>
      <HeroBackground />
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.space['5xl']} 0;
  background-color: ${({ theme }) => theme.colors.background};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space['3xl']} 0;
  }
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.background} 100%);
  z-index: -1;
  
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -5%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.primary}15 0%, transparent 70%);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.secondary}15 0%, transparent 70%);
  }
`

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.space.md};
  }
`

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`

const HeroTextContent = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
  }
`

const HeroTagline = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.full};
  margin-bottom: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, ${({ theme }) => theme.fontSizes['4xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`

const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.xl};
  color: ${({ theme }) => theme.colors.lightText};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`

const HeroActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

const PrimaryButton = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const SecondaryButton = styled.div`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.xl};
  color: ${({ theme }) => props => props.secondary ? 'white' : theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-decoration: none;
  white-space: nowrap;
`

const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  ${ButtonLink}:hover & {
    transform: translateX(4px);
  }
`

const HeroStats = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
  }
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`

const StatValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
`

const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin: 0 ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80px;
    height: 1px;
    margin: ${({ theme }) => theme.space.xs} 0;
  }
`

const HeroImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 400px;
    width: 100%;
  }
`

const HeroImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  position: relative;
  z-index: 1;
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.3) 100%);
  border-radius: ${({ theme }) => theme.radii.lg};
  z-index: 2;
`

const ImageAccent = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 80%;
  height: 80%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.lg};
  z-index: 0;
`

export default Hero
