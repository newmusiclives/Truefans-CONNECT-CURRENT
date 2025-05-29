import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const Press = () => {
  // Mock data for press releases
  const pressReleases = [
    {
      id: 1,
      title: "TrueFans CONNECT™ Raises $5M to Revolutionize Artist Support",
      date: "June 15, 2023",
      excerpt: "Funding will accelerate platform growth and expand venue partnerships across North America.",
      image: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg"
    },
    {
      id: 2,
      title: "TrueFans CONNECT™ Surpasses 10,000 Artists on Platform",
      date: "May 2, 2023",
      excerpt: "Milestone highlights growing adoption of direct fan support model among independent musicians.",
      image: "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg"
    },
    {
      id: 3,
      title: "TrueFans CONNECT™ Launches Two-Tier Affiliate Program",
      date: "April 10, 2023",
      excerpt: "New program allows artists to earn passive income through platform referrals.",
      image: "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg"
    },
    {
      id: 4,
      title: "TrueFans CONNECT™ Partners with Major Venue Network",
      date: "March 5, 2023",
      excerpt: "Partnership connects independent artists with 200+ performance venues across the country.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
    }
  ]
  
  // Mock data for media coverage
  const mediaCoverage = [
    {
      id: 1,
      outlet: "Music Industry Today",
      title: "How TrueFans CONNECT™ Is Changing the Game for Independent Artists",
      date: "May 28, 2023",
      link: "#"
    },
    {
      id: 2,
      outlet: "Tech Innovators",
      title: "TrueFans CONNECT™: The Platform Disrupting Traditional Music Revenue Models",
      date: "April 15, 2023",
      link: "#"
    },
    {
      id: 3,
      outlet: "Entrepreneur Weekly",
      title: "TrueFans CONNECT™ Founders on Building a More Equitable Music Industry",
      date: "March 22, 2023",
      link: "#"
    },
    {
      id: 4,
      outlet: "Digital Music News",
      title: "Artist-First Platforms: TrueFans CONNECT™ Leads the Way with 80/20 Revenue Split",
      date: "February 10, 2023",
      link: "#"
    },
    {
      id: 5,
      outlet: "Startup Spotlight",
      title: "TrueFans CONNECT™: From Idea to Industry Disruptor in 12 Months",
      date: "January 5, 2023",
      link: "#"
    }
  ]
  
  // Mock data for press kit resources
  const pressKitResources = [
    {
      id: 1,
      title: "Company Fact Sheet",
      description: "Key information about TrueFans CONNECT™, our mission, and our impact.",
      icon: "📄",
      link: "#"
    },
    {
      id: 2,
      title: "Brand Assets",
      description: "Logos, color palette, and brand guidelines for media use.",
      icon: "🎨",
      link: "#"
    },
    {
      id: 3,
      title: "Executive Bios",
      description: "Biographies and headshots of our leadership team.",
      icon: "👥",
      link: "#"
    },
    {
      id: 4,
      title: "Platform Screenshots",
      description: "High-resolution images of the TrueFans CONNECT™ platform.",
      icon: "📱",
      link: "#"
    },
    {
      id: 5,
      title: "Case Studies",
      description: "Detailed success stories of artists using our platform.",
      icon: "📊",
      link: "#"
    }
  ]
  
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Press & Media</HeroTitle>
            <HeroSubtitle>News, resources, and media information about TrueFans CONNECT™</HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <PressReleasesSection>
        <Container>
          <SectionTitle>Press Releases</SectionTitle>
          <PressReleaseGrid>
            {pressReleases.map(release => (
              <PressReleaseCard key={release.id}>
                <PressReleaseImage src={release.image} alt={release.title} />
                <PressReleaseContent>
                  <PressReleaseDate>{release.date}</PressReleaseDate>
                  <PressReleaseTitle>{release.title}</PressReleaseTitle>
                  <PressReleaseExcerpt>{release.excerpt}</PressReleaseExcerpt>
                  <ReadMoreButton>Read Full Release</ReadMoreButton>
                </PressReleaseContent>
              </PressReleaseCard>
            ))}
          </PressReleaseGrid>
          <ViewAllButton>View All Press Releases</ViewAllButton>
        </Container>
      </PressReleasesSection>
      
      <MediaCoverageSection>
        <Container>
          <SectionTitle>Media Coverage</SectionTitle>
          <MediaCoverageList>
            {mediaCoverage.map(coverage => (
              <MediaCoverageItem key={coverage.id}>
                <MediaCoverageOutlet>{coverage.outlet}</MediaCoverageOutlet>
                <MediaCoverageTitle>{coverage.title}</MediaCoverageTitle>
                <MediaCoverageDate>{coverage.date}</MediaCoverageDate>
                <MediaCoverageLink href={coverage.link}>Read Article →</MediaCoverageLink>
              </MediaCoverageItem>
            ))}
          </MediaCoverageList>
        </Container>
      </MediaCoverageSection>
      
      <PressKitSection>
        <Container>
          <SectionTitle>Press Kit</SectionTitle>
          <PressKitDescription>
            Access resources for media coverage of TrueFans CONNECT™. For additional materials or interview requests, please contact our press team.
          </PressKitDescription>
          <PressKitGrid>
            {pressKitResources.map(resource => (
              <PressKitCard key={resource.id}>
                <PressKitIcon>{resource.icon}</PressKitIcon>
                <PressKitContent>
                  <PressKitTitle>{resource.title}</PressKitTitle>
                  <PressKitText>{resource.description}</PressKitText>
                  <PressKitDownload href={resource.link}>Download</PressKitDownload>
                </PressKitContent>
              </PressKitCard>
            ))}
          </PressKitGrid>
        </Container>
      </PressKitSection>
      
      <ContactSection>
        <Container>
          <ContactContent>
            <ContactTitle>Media Inquiries</ContactTitle>
            <ContactText>
              For press inquiries, interview requests, or additional information, please contact our press team.
            </ContactText>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>📧</ContactIcon>
                <ContactText>press@truefans.connect</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <ContactText>(555) 123-4567</ContactText>
              </ContactItem>
            </ContactInfo>
            <ContactButton as={Link} to="/contact">Contact Press Team</ContactButton>
          </ContactContent>
        </Container>
      </ContactSection>
    </PageTransition>
  )
}

const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space.xl} 0;
  color: white;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  opacity: 0.9;
  line-height: 1.5;
`

// Press Releases Section
const PressReleasesSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`

const PressReleaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const PressReleaseCard = styled.article`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const PressReleaseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const PressReleaseContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const PressReleaseDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const PressReleaseTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.3;
`

const PressReleaseExcerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ReadMoreButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

const ViewAllButton = styled(Button)`
  display: block;
  margin: 0 auto;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkText};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    text-decoration: none;
  }
`

// Media Coverage Section
const MediaCoverageSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const MediaCoverageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  max-width: 900px;
  margin: 0 auto;
`

const MediaCoverageItem = styled.article`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const MediaCoverageOutlet = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  flex-shrink: 0;
`

const MediaCoverageTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  flex: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

const MediaCoverageDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 3;
  }
`

const MediaCoverageLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  flex-shrink: 0;
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 4;
  }
`

// Press Kit Section
const PressKitSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const PressKitDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space.xl};
`

const PressKitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const PressKitCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const PressKitIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-right: ${({ theme }) => theme.space.lg};
  flex-shrink: 0;
`

const PressKitContent = styled.div`
  flex: 1;
`

const PressKitTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const PressKitText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const PressKitDownload = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

// Contact Section
const ContactSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
`

const ContactContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`

const ContactTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ContactText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
`

const ContactIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`

const ContactButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

export default Press
