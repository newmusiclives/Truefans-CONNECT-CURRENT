import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const ArtistProfile = () => {
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
          <ArtistHeader>
            <ArtistAvatar src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg" alt="Sarah Johnson" />
            <ArtistInfo>
              <ArtistName>Sarah Johnson</ArtistName>
              <ArtistGenre>Jazz Vocalist</ArtistGenre>
              <ArtistLocation>New Orleans, LA</ArtistLocation>
              <ArtistSocial>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <SocialIcon>🌐</SocialIcon>
                  <span>Website</span>
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <SocialIcon>📸</SocialIcon>
                  <span>Instagram</span>
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <SocialIcon>🎵</SocialIcon>
                  <span>Spotify</span>
                </SocialLink>
              </ArtistSocial>
            </ArtistInfo>
          </ArtistHeader>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnLayout>
            <MainContent>
              <Section>
                <SectionTitle>About</SectionTitle>
                <Biography>
                  <p>Sarah Johnson is a jazz vocalist based in New Orleans, known for her soulful interpretations of classic jazz standards and her own original compositions that blend traditional jazz with contemporary influences.</p>
                  <p>With over a decade of experience performing in venues across the United States and Europe, Sarah has established herself as a respected voice in the jazz community. Her warm tone and improvisational skills have earned her critical acclaim and a dedicated following of jazz enthusiasts.</p>
                  <p>Sarah's latest project, "Midnight in New Orleans," is a collection of original compositions inspired by the rich musical heritage of her hometown. The album features collaborations with some of the city's finest musicians and showcases Sarah's growth as both a vocalist and a composer.</p>
                </Biography>
              </Section>
              
              <Section>
                <SectionTitle>Upcoming Shows</SectionTitle>
                {[1, 2, 3].map((show) => (
                  <ShowCard key={show}>
                    <ShowDate>
                      <ShowMonth>JUN</ShowMonth>
                      <ShowDay>{10 + show}</ShowDay>
                    </ShowDate>
                    <ShowInfo>
                      <ShowTitle>Jazz at the Blue Note</ShowTitle>
                      <ShowLocation>Blue Note Jazz Club, New Orleans</ShowLocation>
                      <ShowTime>8:00 PM - 10:00 PM</ShowTime>
                    </ShowInfo>
                    <ShowAction>
                      <ShowButton>Get Tickets</ShowButton>
                    </ShowAction>
                  </ShowCard>
                ))}
              </Section>
              
              <Section>
                <SectionTitle>Music</SectionTitle>
                <MusicGrid>
                  {[1, 2, 3, 4].map((album) => (
                    <AlbumCard key={album}>
                      <AlbumCover src={`https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=600`} alt={`Album ${album}`} />
                      <AlbumTitle>Midnight in New Orleans</AlbumTitle>
                      <AlbumYear>2023</AlbumYear>
                      <AlbumButton>Listen</AlbumButton>
                    </AlbumCard>
                  ))}
                </MusicGrid>
              </Section>
            </MainContent>
            
            <Sidebar>
              <DonationWidget>
                <DonationHeader>Support Sarah's Music</DonationHeader>
                <DonationDescription>Your contribution helps fund new recordings, tours, and creative projects.</DonationDescription>
                
                <DonationOptions>
                  {[5, 10, 25, 50].map((amount) => (
                    <DonationOption key={amount}>
                      <DonationAmount>${amount}</DonationAmount>
                    </DonationOption>
                  ))}
                  <DonationOption>
                    <DonationAmount>Custom</DonationAmount>
                  </DonationOption>
                </DonationOptions>
                
                <DonationInput
                  type="number"
                  placeholder="Enter amount"
                  min="1"
                />
                
                <DonationButton>Support Now</DonationButton>
                
                <DonationFooter>
                  <DonationSecure>🔒 Secure payment</DonationSecure>
                  <DonationSplit>80% goes directly to the artist</DonationSplit>
                </DonationFooter>
              </DonationWidget>
              
              <NewsletterWidget>
                <NewsletterHeader>Stay Updated</NewsletterHeader>
                <NewsletterDescription>Subscribe to Sarah's newsletter for tour dates, new releases, and exclusive content.</NewsletterDescription>
                <NewsletterInput
                  type="email"
                  placeholder="Your email address"
                />
                <NewsletterButton>Subscribe</NewsletterButton>
              </NewsletterWidget>
            </Sidebar>
          </TwoColumnLayout>
        </Container>
      </ContentSection>
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
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space.xl} 0;
  color: white;
`

const ArtistHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`

const ArtistAvatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.primary};
`

const ArtistInfo = styled.div``

const ArtistName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ArtistGenre = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.xs};
  opacity: 0.9;
`

const ArtistLocation = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space.md};
  opacity: 0.8;
`

const ArtistSocial = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    opacity: 1;
    text-decoration: none;
  }
`

const SocialIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const MainContent = styled.div``

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  padding-bottom: ${({ theme }) => theme.space.xs};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`

const Biography = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  
  p {
    margin-bottom: ${({ theme }) => theme.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

// Shows
const ShowCard = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`

const ShowDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-right: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.space.md};
  }
`

const ShowMonth = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const ShowDay = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const ShowInfo = styled.div`
  flex: 1;
`

const ShowTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ShowLocation = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ShowTime = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`

const ShowAction = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: ${({ theme }) => theme.space.md};
  }
`

const ShowButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`

// Music
const MusicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const AlbumCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const AlbumCover = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`

const AlbumTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.sm} 0`};
`

const AlbumYear = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  padding: ${({ theme }) => `0 ${theme.space.sm} ${theme.space.sm}`};
`

const AlbumButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

// Sidebar
const Sidebar = styled.aside`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: -1;
  }
`

const DonationWidget = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const DonationHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const DonationDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const DonationOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const DonationOption = styled.button`
  padding: ${({ theme }) => theme.space.sm};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const DonationAmount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const DonationInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const DonationButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`

const DonationFooter = styled.div`
  text-align: center;
`

const DonationSecure = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const DonationSplit = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const NewsletterWidget = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const NewsletterHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const NewsletterDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const NewsletterInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const NewsletterButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

export default ArtistProfile
