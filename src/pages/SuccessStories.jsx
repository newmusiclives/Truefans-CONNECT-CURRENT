import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const SuccessStories = () => {
  // State to track which story is expanded
  const [expandedStory, setExpandedStory] = useState(null)
  
  // Mock data for success stories
  const successStories = [
    {
      id: 1,
      artist: "Sarah James",
      title: "From Local Gigs to National Tour",
      excerpt: "How Sarah James used TrueFans CONNECT™ to build a dedicated fan base and fund her first national tour.",
      image: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",
      category: "touring",
      results: [
        "Grew fan base from 500 to 15,000 in 18 months",
        "Raised $25,000 for tour expenses through fan contributions",
        "Booked 32 venues across the country through the platform"
      ],
      quote: "TrueFans CONNECT™ changed everything for me. I went from playing small local venues to touring nationally, all while maintaining complete creative control of my music and career.",
      fullStory: "Sarah James was playing in coffee shops and small bars in her hometown when she discovered TrueFans CONNECT™. With a handful of original songs and a small but dedicated local following, she decided to take a chance on the platform. \"I was skeptical at first,\" Sarah admits. \"There are so many platforms promising to help independent artists, but most of them just want your money without delivering results.\"\n\nWithin three months of joining, Sarah had connected with fans across the country who discovered her music through the platform's recommendation algorithm. \"The platform matched me with listeners who enjoyed similar artists, and I started seeing my follower count grow every day,\" she explains.\n\nSarah used the platform's direct support feature to fund her first EP, raising $8,000 from fans eager to hear more of her music. The success of the EP led to more followers, and when she announced her intention to tour, her fans rallied behind her.\n\n\"I was able to map out a tour based on where my most engaged listeners were located,\" Sarah says. \"The venue connection feature made it easy to book shows in cities I'd never played before, because venue owners could see my fan metrics in their area.\"\n\nToday, Sarah is planning her second national tour and working on her first full-length album, all funded through fan support on TrueFans CONNECT™. \"The best part is that I own all my music and maintain complete creative control,\" she says. \"This platform has made it possible for me to build a sustainable career on my own terms.\""
    },
    {
      id: 2,
      artist: "The Midnight Echo",
      title: "Indie Band Funds Album Without Label Support",
      excerpt: "How this four-piece indie rock band used direct fan support to record and release their breakthrough album.",
      image: "https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg",
      category: "recording",
      results: [
        "Raised $18,000 for professional studio recording",
        "Pre-sold 1,200 album copies to dedicated fans",
        "Album reached #3 on indie charts"
      ],
      quote: "We were turned down by several labels, but our fans believed in us. Through TrueFans CONNECT™, we not only funded our album but built a community that continues to support our journey.",
      fullStory: "The Midnight Echo had been together for three years, building a local following in their hometown of Portland, Oregon. Despite positive reviews of their self-produced EP, multiple record labels had passed on signing them. \"We were told our sound wasn't commercial enough,\" says lead vocalist Maya Chen. \"One label even suggested we change our style to be more mainstream.\"\n\nUnwilling to compromise their artistic vision but lacking the funds to produce a professional-quality album, the band turned to TrueFans CONNECT™. \"We had about 2,000 followers across our social media platforms, but we weren't sure how many would actually contribute financially,\" explains guitarist Tom Rodriguez.\n\nThe band created a detailed campaign on the platform, offering various tiers of support with different rewards, from digital downloads to private concerts. They set an initial goal of $12,000 to cover basic recording costs.\n\n\"We were shocked when we hit that target in just two weeks,\" says drummer Liam Johnson. \"We ended up raising $18,000, which allowed us to work with a producer we really admired and spend more time in the studio perfecting the sound.\"\n\nBeyond the financial support, The Midnight Echo found that the platform helped them build deeper connections with their audience. \"We used the update feature to share demos and behind-the-scenes content during the recording process,\" says bassist Olivia Kim. \"The feedback we got actually influenced some of our creative decisions in a really positive way.\"\n\nWhen the album was released, it debuted at #3 on the indie charts, leading to opportunities the band had previously been denied. \"We've been approached by labels that rejected us before,\" says Maya, \"but we're actually considering staying independent. TrueFans CONNECT™ has shown us there's a sustainable path forward without giving up control of our music.\""
    },
    {
      id: 3,
      artist: "DJ Pulse",
      title: "Electronic Artist Builds Global Following",
      excerpt: "How DJ Pulse leveraged the platform to connect with fans worldwide and book international gigs.",
      image: "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg",
      category: "international",
      results: [
        "Connected with fans across 45 countries",
        "Secured bookings at 5 international festivals",
        "Increased monthly income by 300%"
      ],
      quote: "As an electronic artist, I was struggling to stand out. TrueFans CONNECT™ helped me find my audience and turn my passion into a sustainable career that takes me around the world.",
      fullStory: "Marcus Lee, known professionally as DJ Pulse, was creating electronic music in his bedroom studio in Chicago while working a day job as an IT specialist. \"The electronic music scene is incredibly saturated,\" Marcus explains. \"I was posting my mixes online, but it felt like shouting into the void.\"\n\nAfter joining TrueFans CONNECT™, Marcus was surprised to discover that his music resonated particularly well with listeners in Europe and Asia. \"The platform's analytics showed me that my biggest supporters were in places like Berlin, Tokyo, and Seoul—cities with vibrant electronic music scenes that I had never reached before.\"\n\nUsing this information, Marcus began tailoring his release schedule to accommodate different time zones and creating content that appealed to his international audience. \"I started doing livestream sessions at times when my European and Asian fans could tune in, and the engagement skyrocketed.\"\n\nAs his following grew, Marcus caught the attention of event promoters who used the platform to discover new talent. \"A promoter from Berlin reached out about an opening slot at a club night. That first international gig led to connections with other promoters, and within a year, I was getting booked for festivals.\"\n\nThe consistent income from fan support on the platform allowed Marcus to quit his day job and focus on music full-time. \"The subscription model means I have a predictable monthly income from my core supporters, which gives me the financial stability to take creative risks and invest in better equipment.\"\n\nToday, DJ Pulse performs at clubs and festivals around the world and has collaborated with several established artists in the electronic music scene. \"What's amazing is that I've built this career while remaining completely independent. I don't have a manager or a label—just a direct connection with my fans through TrueFans CONNECT™.\""
    },
    {
      id: 4,
      artist: "Elena Rivera",
      title: "Classical Violinist Finds New Audience",
      excerpt: "How a classically trained violinist expanded beyond traditional venues to reach new listeners.",
      image: "https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg",
      category: "crossover",
      results: [
        "Attracted 8,000 new fans outside the classical music scene",
        "Funded a crossover album featuring classical and contemporary pieces",
        "Booked 15 unconventional venues for intimate performances"
      ],
      quote: "I was confined to the traditional classical music world until TrueFans CONNECT™ helped me reach listeners who might never attend a symphony but love my violin interpretations of popular music.",
      fullStory: "Elena Rivera began studying violin at age four and graduated from Juilliard with high honors. Despite her technical proficiency and passion, she found the classical music world increasingly restrictive. \"There's this perception that classical music is elitist or inaccessible,\" Elena says. \"I wanted to break down those barriers and share the beauty of the violin with a broader audience.\"\n\nElena began experimenting with contemporary arrangements, blending classical techniques with popular music. \"I started posting videos of me playing violin covers of pop and rock songs, but I was struggling to find the right audience.\"\n\nAfter joining TrueFans CONNECT™, Elena discovered a surprising interest in her crossover approach. \"The platform connected me with people who wouldn't typically seek out classical music but were intrigued by my modern interpretations. Suddenly, I was reaching listeners who had never been to a symphony hall.\"\n\nEncouraged by the positive response, Elena launched a campaign to fund a crossover album. \"I raised over $12,000 from supporters on the platform, which allowed me to record in a professional studio and work with a producer who understood both classical and contemporary music.\"\n\nBeyond funding, the platform helped Elena identify where her fans were located, allowing her to plan a tour of unconventional venues. \"Instead of concert halls, I performed in art galleries, boutique hotels, and even breweries. These intimate spaces created a different kind of connection with the audience.\"\n\nElena's approach has revitalized her relationship with classical music as well. \"I still perform traditional classical pieces, but now I have the freedom to explore other styles without worrying about alienating the classical establishment. My audience appreciates the diversity, and I've found a sustainable way to make a living as a violinist on my own terms.\"\n\nToday, Elena continues to build bridges between musical worlds, with a growing following of over 15,000 supporters on TrueFans CONNECT™. \"The platform didn't just help me find an audience—it helped me find my authentic voice as an artist.\""
    }
  ]
  
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Venue Owner, The Sound Garden",
      quote: "Since joining TrueFans CONNECT™, we've discovered amazing talent that our audiences love. The platform makes it easy to find artists with proven fan bases in our area, reducing the risk of poorly attended shows.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      id: 2,
      name: "Lisa Johnson",
      role: "Fan",
      quote: "I love being able to directly support the artists I care about. It's amazing to see how my contributions help them create new music and tour to cities they couldn't reach before.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      id: 3,
      name: "David Williams",
      role: "Artist Manager",
      quote: "As a manager, I've seen firsthand how TrueFans CONNECT™ has transformed the careers of my clients. The direct fan support model creates sustainable income streams that weren't possible before.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    }
  ]
  
  // Mock data for statistics
  const statistics = [
    {
      value: "$4.2M+",
      label: "Contributed to Artists"
    },
    {
      value: "15,000+",
      label: "Artists on Platform"
    },
    {
      value: "2,500+",
      label: "Venue Partners"
    },
    {
      value: "250,000+",
      label: "Active Fans"
    }
  ]
  
  // Function to toggle story expansion
  const toggleStory = (id) => {
    if (expandedStory === id) {
      setExpandedStory(null)
    } else {
      setExpandedStory(id)
      // Scroll to the expanded story
      setTimeout(() => {
        document.getElementById(`story-${id}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }
  
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
      
      <StatsSection>
        <Container>
          <StatsGrid>
            {statistics.map(stat => (
              <StatItem key={stat.value}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>
      
      <StoriesSection>
        <Container>
          <SectionTitle>Featured Success Stories</SectionTitle>
          <StoriesGrid>
            {successStories.map(story => (
              <StoryCard key={story.id} id={`story-${story.id}`}>
                <StoryImage src={story.image} alt={story.artist} />
                <StoryContent>
                  <StoryCategory>{story.category.charAt(0).toUpperCase() + story.category.slice(1)}</StoryCategory>
                  <StoryTitle>{story.title}</StoryTitle>
                  <StoryArtist>{story.artist}</StoryArtist>
                  <StoryExcerpt>{story.excerpt}</StoryExcerpt>
                  <StoryResults>
                    <ResultsTitle>Results:</ResultsTitle>
                    <ResultsList>
                      {story.results.map((result, index) => (
                        <ResultItem key={index}>{result}</ResultItem>
                      ))}
                    </ResultsList>
                  </StoryResults>
                  <StoryQuote>"{story.quote}"</StoryQuote>
                  
                  {expandedStory === story.id && (
                    <FullStory>
                      {story.fullStory.split('\n\n').map((paragraph, index) => (
                        <StoryParagraph key={index}>{paragraph}</StoryParagraph>
                      ))}
                    </FullStory>
                  )}
                  
                  <ReadMoreButton onClick={() => toggleStory(story.id)}>
                    {expandedStory === story.id ? 'Show Less' : 'Read Full Story'}
                  </ReadMoreButton>
                </StoryContent>
              </StoryCard>
            ))}
          </StoriesGrid>
        </Container>
      </StoriesSection>
      
      <TestimonialsSection>
        <Container>
          <SectionTitle>What Our Community Says</SectionTitle>
          <TestimonialsGrid>
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id}>
                <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
                <TestimonialAuthor>
                  <TestimonialImage src={testimonial.image} alt={testimonial.name} />
                  <TestimonialInfo>
                    <TestimonialName>{testimonial.name}</TestimonialName>
                    <TestimonialRole>{testimonial.role}</TestimonialRole>
                  </TestimonialInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </Container>
      </TestimonialsSection>
      
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle>Ready to Write Your Success Story?</CTATitle>
            <CTAText>
              Join thousands of artists who are building sustainable careers through direct fan support and venue connections.
            </CTAText>
            <CTAButtons>
              <CTAButton as={Link} to="/artist-signup">Sign Up as an Artist</CTAButton>
              <CTASecondaryButton as={Link} to="/venue-signup">Register Your Venue</CTASecondaryButton>
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

// Stats Section
const StatsSection = styled.section`
  padding: ${({ theme }) => theme.space.lg} 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space.md};
`

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

// Stories Section
const StoriesSection = styled.section`
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

const StoriesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const StoryCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.space.xl};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`

const StoryContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const StoryCategory = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkText};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const StoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StoryArtist = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const StoryExcerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const StoryResults = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ResultsTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ResultsList = styled.ul`
  padding-left: ${({ theme }) => theme.space.lg};
`

const ResultItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.xs};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const StoryQuote = styled.blockquote`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-style: italic;
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.lg};
  padding-left: ${({ theme }) => theme.space.md};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
`

const FullStory = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
  animation: fadeIn 0.5s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

const StoryParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:last-child {
    margin-bottom: 0;
  }
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

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const TestimonialQuote = styled.blockquote`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-style: italic;
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`

const TestimonialImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.space.md};
  object-fit: cover;
`

const TestimonialInfo = styled.div``

const TestimonialName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const TestimonialRole = styled.div`
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
  max-width: 700px;
  margin: 0 auto;
`

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`

const CTAButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

const CTASecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: 1px solid white;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }
`

export default SuccessStories
