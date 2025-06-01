import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const TransformationSection = () => {
  // Function to handle button click and scroll to top
  const handleNavigateToSignup = () => {
    // This will ensure the page scrolls to the top when navigating
    window.scrollTo(0, 0);
  }

  return (
    <SectionWrapper>
      <Container>
        <ContentGrid>
          <TextContent>
            <SectionTitle>Choose Your Future</SectionTitle>
            <SectionDescription>
              The music industry doesn't have to be a struggle. With TrueFans CONNECT™, you can build a sustainable career on your own terms. Our platform gives you the tools to connect directly with your fans, get paid what you deserve, and focus on what matters most—creating amazing music.
            </SectionDescription>
            <FeatureList>
              <FeatureItem>
                <FeatureBullet />
                <FeatureText>Instant payments at shows via custom QR codes</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureBullet />
                <FeatureText>Direct fan communication without algorithm interference</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureBullet />
                <FeatureText>Detailed analytics to understand your audience</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureBullet />
                <FeatureText>Next-day deposits to your bank account</FeatureText>
              </FeatureItem>
            </FeatureList>
            <ActionButton 
              as={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ActionLink 
                to="/artist-signup" 
                onClick={handleNavigateToSignup}
              >
                <span>Choose Your Future</span>
                <ActionIcon><FaArrowRight /></ActionIcon>
              </ActionLink>
            </ActionButton>
          </TextContent>
          
          <ImageContent>
            <TransformationImage src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg" alt="Artist performing on stage" />
            <ImageOverlay />
            <ImageCaption>
              "TrueFans CONNECT™ helped me quit my day job and focus on music full-time."
              <CaptionAuthor>— Jamie Chen, Indie Artist</CaptionAuthor>
            </ImageCaption>
          </ImageContent>
        </ContentGrid>
      </Container>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.space['5xl']} 0;
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
    background-image: radial-gradient(circle at 80% 20%, rgba(26, 115, 232, 0.03) 0%, transparent 50%);
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space['3xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.xl};
  }
`

const TextContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.revolutionaryGold};
  }
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xl};
  line-height: 1.6;
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.space.xl};
`

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeatureBullet = styled.span`
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  margin-top: 6px;
  margin-right: ${({ theme }) => theme.space.md};
  flex-shrink: 0;
`

const FeatureText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.5;
`

const ActionButton = styled.div`
  display: inline-block;
`

const ActionLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.xl};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const ActionIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  ${ActionLink}:hover & {
    transform: translateX(4px);
  }
`

const ImageContent = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }
`

const TransformationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ImageContent}:hover & {
    transform: scale(1.05);
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  z-index: 2;
`

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.space.xl};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-style: italic;
  line-height: 1.4;
  z-index: 3;
`

const CaptionAuthor = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-style: normal;
  margin-top: ${({ theme }) => theme.space.xs};
  opacity: 0.8;
`

export default TransformationSection
