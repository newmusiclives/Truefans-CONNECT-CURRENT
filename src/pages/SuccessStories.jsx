import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const SuccessStories = () => {
  // Mock data for success stories
  const featuredStories = [
    {
      id: 1,
      artist: "Marcus Rivera",
      genre: "Hip Hop",
      location: "Atlanta, GA",
      image: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",
      artistImage: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg",
      title: "From Local Gigs to National Tours",
      quote: "TrueFans CONNECT™ has completely transformed my career as an independent artist. The direct support from fans and the venue connections have allowed me to focus on creating music full-time.",
      story: "Marcus was performing at small local venues and struggling to make ends meet when he joined TrueFans CONNECT™ in 2022. Within six months, he had built a dedicated supporter base that provided him with a stable monthly income. The platform's venue connections helped him book shows in cities across the country, and the affiliate program created an additional revenue stream. Today, Marcus is a full-time artist with a growing national fanbase.",
      stats: {
        monthlySupport: "$3,200",
        supporters: 124,
        venueBookings: 18,
        affiliateEarnings: "$580/month"
      }
    },
    {
      id: 2,
      artist: "Sophia Martinez",
      genre: "Jazz",
      location: "New Orleans, LA",
      image: "https://images.pexels.com/photos/3984827/pexels-photo-3984827.jpeg",
      artistImage: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      title: "Building a Sustainable Jazz Career",
      quote: "The affiliate program has been a game-changer for me. Not only am I earning from my music, but I'm also generating passive income by referring other artists to the platform.",
      story: "As a jazz vocalist in New Orleans, Sophia was finding it difficult to monetize her talent beyond live performances. After joining TrueFans CONNECT™, she set up multiple donation methods that allowed her fans to support her work directly. The platform's affiliate program became a significant source of additional income as she referred other musicians from her network. With the financial stability provided by the platform, Sophia was able to record and release her debut album independently.",
      stats: {
        monthlySupport: "$2,800",
        supporters: 95,
        albumSales: 350,
        affiliateEarnings: "$750/month"
      }
    },
    {
      id: 3,
      artist: "David Williams",
      genre: "Rock",
      location: "Chicago, IL",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      artistImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      title: "From Garage Band to Festival Stage",
      quote: "The multiple donation methods have made it so easy for my fans to support me. I've seen a significant increase in my income since joining TrueFans CONNECT™.",
      story: "David's rock band had a small but dedicated following in Chicago, but they were struggling to break through to larger venues and festivals. After setting up their profile on TrueFans CONNECT™, they implemented QR codes at their merchandise table and embedded donation widgets on their website. The increased visibility through the platform's artist directory led to connections with festival organizers, resulting in their first major festival appearance. The band now tours regularly and has a sustainable income from their music.",
      stats: {
        monthlySupport: "$4,100",
        supporters: 178,
        festivalAppearances: 5,
        merchandiseSales: "300% increase"
      }
    }
  ]
  
  const regularStories = [
    {
      id: 4,
      artist: "Emily Chen",
      genre: "Electronic",
      location: "Los Angeles, CA",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
      title: "From Bedroom Producer to Club Headliner",
      quote: "TrueFans CONNECT™ gave me the financial freedom to invest in better equipment and focus on my craft. Now I'm headlining clubs across the West Coast.",
      stats: {
        monthlySupport: "$2,400",
        supporters: 87
      }
    },
    {
      id: 5,
      artist: "James Wilson",
      genre: "Country",
      location: "Austin, TX",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      title: "Building a Country Music Career on My Own Terms",
      quote: "I turned down a record deal because TrueFans CONNECT™ showed me I could make more money and keep creative control by going independent.",
      stats: {
        monthlySupport: "$3,800",
        supporters: 142
      }
    },
    {
      id: 6,
      artist: "Olivia Taylor",
      genre: "Pop",
      location: "New York, NY",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      title: "From Teaching Music to Making It Full-Time",
      quote: "I was teaching piano lessons to pay the bills while trying to launch my pop career. TrueFans CONNECT™ allowed me to quit my day job and focus on my music.",
      stats: {
        monthlySupport: "$3,100",
        supporters: 115
      }
    },
    {
      id: 7,
      artist: "Michael Brown",
      genre: "R&B",
      location: "Philadelphia, PA",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      title: "From Church Choir to Soul Sensation",
      quote: "The venue connections through TrueFans CONNECT™ helped me book my first tour. Now I'm performing at sold-out venues across the East Coast.",
      stats: {
        monthlySupport: "$2,900",
        supporters: 103
      }
    }
  ]
  
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Success Stories</HeroTitle>
            <HeroSubtitle>Real artists achieving real success with TrueFans CONNECT™</HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <IntroSection>
        <Container>
          <IntroContent>
            <IntroText>
              <IntroHeading>Empowering Independent Artists</IntroHeading>
              <IntroParagraph>
                At TrueFans CONNECT™, we're proud to help independent artists build sustainable careers on their own terms. Our platform provides the tools, connections, and support system that artists need to thrive in today's music industry.
              </IntroParagraph>
              <IntroParagraph>
                The stories featured here represent just a small sample of the thousands of artists who have transformed their careers using our platform. From full-time musicians to emerging talents, TrueFans CONNECT™ is helping artists at every stage of their journey.
              </IntroParagraph>
            </IntroText>
            <IntroStats>
              <StatItem>
                <StatNumber>10,000+</StatNumber>
                <StatLabel>Artists on the platform</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>$2M+</StatNumber>
                <StatLabel>Paid to artists</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>80%</StatNumber>
                <StatLabel>Revenue to artists</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>500+</StatNumber>
                <StatLabel>Venue partners</StatLabel>
              </StatItem>
            </IntroStats>
          </IntroContent>
        </Container>
      </IntroSection>
      
      <FeaturedStoriesSection>
        <Container>
          <SectionTitle>Featured Success Stories</SectionTitle>
          
          {featuredStories.map((story, index) => (
            <FeaturedStory key={story.id}>
              <FeaturedStoryContent order={index % 2}>
                <FeaturedStoryText>
                  <FeaturedStoryArtist>
                    <FeaturedStoryArtistImage src={story.artistImage} alt={story.artist} />
                    <FeaturedStoryArtistInfo>
                      <FeaturedStoryArtistName>{story.artist}</FeaturedStoryArtistName>
                      <FeaturedStoryArtistDetails>{story.genre} • {story.location}</FeaturedStoryArtistDetails>
                    </FeaturedStoryArtistInfo>
                  </FeaturedStoryArtist>
                  <FeaturedStoryTitle>{story.title}</FeaturedStoryTitle>
                  <FeaturedStoryQuote>"{story.quote}"</FeaturedStoryQuote>
                  <FeaturedStoryDescription>{story.story}</FeaturedStoryDescription>
                  <FeaturedStoryStats>
                    {Object.entries(story.stats).map(([key, value]) => (
                      <FeaturedStoryStat key={key}>
                        <FeaturedStoryStatValue>{value}</FeaturedStoryStatValue>
                        <FeaturedStoryStatLabel>
                          {key
                            .replace(/([A-Z])/g, ' $1')
                            .replace(/^./, str => str.toUpperCase())}
                        </FeaturedStoryStatLabel>
                      </FeaturedStoryStat>
                    ))}
                  </FeaturedStoryStats>
                  <FeaturedStoryButton as={Link} to="/artist-profile">View Artist Profile</FeaturedStoryButton>
                </FeaturedStoryText>
                <FeaturedStoryImage src={story.image} alt={story.title} />
              </FeaturedStoryContent>
            </FeaturedStory>
          ))}
        </Container>
      </FeaturedStoriesSection>
      
      <MoreStoriesSection>
        <Container>
          <SectionTitle>More Success Stories</SectionTitle>
          <StoriesGrid>
            {regularStories.map(story => (
              <StoryCard key={story.id}>
                <StoryCardImage src={story.image} alt={story.artist} />
                <StoryCardContent>
                  <StoryCardArtist>{story.artist}</StoryCardArtist>
                  <StoryCardTitle>{story.title}</StoryCardTitle>
                  <StoryCardQuote>"{story.quote}"</StoryCardQuote>
                  <StoryCardStats>
                    {Object.entries(story.stats).map(([key, value]) => (
                      <StoryCardStat key={key}>
                        <StoryCardStatValue>{value}</StoryCardStatValue>
                        <StoryCardStatLabel>
                          {key
                            .replace(/([A-Z])/g, ' $1')
                            .replace(/^./, str => str.toUpperCase())}
                        </StoryCardStatLabel>
                      </StoryCardStat>
                    ))}
                  </StoryCardStats>
                  <StoryCardButton as={Link} to="/artist-profile">View Profile</StoryCardButton>
                </StoryCardContent>
              </StoryCard>
            ))}
          </StoriesGrid>
        </Container>
      </MoreStoriesSection>
      
      <TestimonialsSection>
        <Container>
          <TestimonialsTitle>What Artists Are Saying</TestimonialsTitle>
          <TestimonialsGrid>
            <TestimonialCard>
              <TestimonialContent>
                "TrueFans CONNECT™ has been the single most important factor in my ability to make music full-time. The direct support from fans has changed everything."
              </TestimonialContent>
              <TestimonialAuthor>
                <TestimonialAuthorName>Alex Johnson</TestimonialAuthorName>
                <TestimonialAuthorRole>Folk Singer-Songwriter</TestimonialAuthorRole>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialContent>
                "The venue connections through this platform helped me book my first national tour. I'm now playing shows I never thought possible at this stage of my career."
              </TestimonialContent>
              <TestimonialAuthor>
                <TestimonialAuthorName>Maria Garcia</TestimonialAuthorName>
                <TestimonialAuthorRole>Indie Rock Vocalist</TestimonialAuthorRole>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialContent>
                "As a hip hop producer, I was struggling to monetize my beats. TrueFans CONNECT™ gave me a platform to build a community that supports my work directly."
              </TestimonialContent>
              <TestimonialAuthor>
                <TestimonialAuthorName>Jamal Williams</TestimonialAuthorName>
                <TestimonialAuthorRole>Hip Hop Producer</TestimonialAuthorRole>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialContent>
                "The affiliate program has created a whole new revenue stream for me. I'm earning passive income while helping other artists succeed too."
              </TestimonialContent>
              <TestimonialAuthor>
                <TestimonialAuthorName>Sarah Miller</TestimonialAuthorName>
                <TestimonialAuthorRole>Classical Pianist</TestimonialAuthorRole>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsGrid>
        </Container>
      </TestimonialsSection>
      
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle>Ready to Write Your Success Story?</CTATitle>
            <CTASubtitle>Join thousands of independent artists who are building sustainable careers with TrueFans CONNECT™</CTASubtitle>
            <CTAButtons>
              <PrimaryCTAButton as={Link} to="/artist-signup">Sign Up as an Artist</PrimaryCTAButton>
              <SecondaryCTAButton as={Link} to="/about">Learn More</SecondaryCTAButton>
            </CTAButtons>
          </CTAContent>
        </Container>
      </CTASection>
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

// Intro Section
const IntroSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const IntroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const IntroText = styled.div``

const IntroHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const IntroParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const IntroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const StatItem = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
`

// Featured Stories Section
const FeaturedStoriesSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`

const FeaturedStory = styled.article`
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const FeaturedStoryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  
  ${({ order }) => order === 1 && `
    direction: rtl;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      direction: ltr;
    }
  `}
`

const FeaturedStoryText = styled.div`
  direction: ltr;
`

const FeaturedStoryArtist = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeaturedStoryArtistImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.md};
`

const FeaturedStoryArtistInfo = styled.div``

const FeaturedStoryArtistName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const FeaturedStoryArtistDetails = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const FeaturedStoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeaturedStoryQuote = styled.blockquote`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-style: italic;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  padding-left: ${({ theme }) => theme.space.md};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
`

const FeaturedStoryDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const FeaturedStoryStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const FeaturedStoryStat = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const FeaturedStoryStatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const FeaturedStoryStatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const FeaturedStoryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
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

const FeaturedStoryImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  direction: ltr;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.space.lg};
    order: -1;
  }
`

// More Stories Section
const MoreStoriesSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const StoryCard = styled.article`
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

const StoryCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const StoryCardContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const StoryCardArtist = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StoryCardTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const StoryCardQuote = styled.blockquote`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-style: italic;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  line-height: 1.5;
`

const StoryCardStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const StoryCardStat = styled.div`
  text-align: center;
`

const StoryCardStatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StoryCardStatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const StoryCardButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space.md};
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

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const TestimonialsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const TestimonialContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-style: italic;
`

const TestimonialAuthor = styled.div``

const TestimonialAuthorName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TestimonialAuthorRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
`

const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CTASubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`

const PrimaryCTAButton = styled(Button)`
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

const SecondaryCTAButton = styled(Button)`
  background-color: transparent;
  color: white;
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: 2px solid white;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }
`

export default SuccessStories
