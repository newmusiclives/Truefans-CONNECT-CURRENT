import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const ArtistsDirectory = () => {
  const [activeTab, setActiveTab] = useState('featured')
  const [searchQuery, setSearchQuery] = useState('')
  const [genreFilter, setGenreFilter] = useState('all')
  
  // Mock data for artists
  const artists = [
    {
      id: 1,
      name: 'Sarah Johnson',
      genre: 'Folk',
      location: 'Nashville, TN',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      supporters: 87,
      totalDonations: '$1,245.00',
      featured: true,
      bio: 'Indie folk artist with a passion for storytelling through music.'
    },
    {
      id: 2,
      name: 'Marcus Rivera',
      genre: 'Hip Hop',
      location: 'Atlanta, GA',
      image: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg',
      supporters: 124,
      totalDonations: '$2,180.50',
      featured: true,
      bio: 'Urban poet and producer creating authentic hip hop with a message.'
    },
    {
      id: 3,
      name: 'Emily Chen',
      genre: 'Electronic',
      location: 'Los Angeles, CA',
      image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
      supporters: 56,
      totalDonations: '$895.25',
      featured: false,
      bio: 'Electronic music producer pushing boundaries with innovative sounds.'
    },
    {
      id: 4,
      name: 'David Williams',
      genre: 'Rock',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      supporters: 92,
      totalDonations: '$1,567.75',
      featured: true,
      bio: 'Rock guitarist and vocalist with a classic sound and modern edge.'
    },
    {
      id: 5,
      name: 'Sophia Martinez',
      genre: 'Jazz',
      location: 'New Orleans, LA',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      supporters: 43,
      totalDonations: '$720.00',
      featured: false,
      bio: 'Jazz vocalist and composer blending traditional and contemporary styles.'
    },
    {
      id: 6,
      name: 'James Wilson',
      genre: 'Country',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      supporters: 78,
      totalDonations: '$1,120.50',
      featured: false,
      bio: 'Country singer-songwriter with authentic roots and modern appeal.'
    },
    {
      id: 7,
      name: 'Olivia Taylor',
      genre: 'Pop',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      supporters: 112,
      totalDonations: '$1,890.25',
      featured: true,
      bio: 'Pop vocalist and songwriter crafting catchy melodies with depth.'
    },
    {
      id: 8,
      name: 'Michael Brown',
      genre: 'R&B',
      location: 'Philadelphia, PA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      supporters: 67,
      totalDonations: '$950.75',
      featured: false,
      bio: 'R&B artist with soulful vocals and heartfelt lyrics.'
    }
  ]
  
  // Filter artists based on search query, genre, and active tab
  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          artist.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          artist.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          artist.bio.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesGenre = genreFilter === 'all' || artist.genre.toLowerCase() === genreFilter.toLowerCase()
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'featured' && artist.featured)
    
    return matchesSearch && matchesGenre && matchesTab
  })
  
  // Get unique genres for filter dropdown
  const genres = ['all', ...new Set(artists.map(artist => artist.genre.toLowerCase()))]
  
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
          <HeroContent>
            <HeroTitle>Discover Independent Artists</HeroTitle>
            <HeroSubtitle>Support talented creators directly and help them thrive</HeroSubtitle>
            <SearchBar>
              <SearchInput 
                type="text" 
                placeholder="Search by name, genre, or location..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <GenreSelect 
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre.charAt(0).toUpperCase() + genre.slice(1)}
                  </option>
                ))}
              </GenreSelect>
            </SearchBar>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TabsContainer>
            <Tab 
              active={activeTab === 'featured'} 
              onClick={() => setActiveTab('featured')}
            >
              Featured Artists
            </Tab>
            <Tab 
              active={activeTab === 'all'} 
              onClick={() => setActiveTab('all')}
            >
              All Artists
            </Tab>
          </TabsContainer>
          
          {filteredArtists.length > 0 ? (
            <ArtistsGrid>
              {filteredArtists.map(artist => (
                <ArtistCard key={artist.id}>
                  <ArtistImageContainer>
                    <ArtistImage src={artist.image} alt={artist.name} />
                    {artist.featured && <FeaturedBadge>Featured</FeaturedBadge>}
                  </ArtistImageContainer>
                  <ArtistInfo>
                    <ArtistName>{artist.name}</ArtistName>
                    <ArtistDetails>
                      <ArtistGenre>{artist.genre}</ArtistGenre>
                      <ArtistLocation>{artist.location}</ArtistLocation>
                    </ArtistDetails>
                    <ArtistBio>{artist.bio}</ArtistBio>
                    <ArtistStats>
                      <StatItem>
                        <StatValue>{artist.supporters}</StatValue>
                        <StatLabel>Supporters</StatLabel>
                      </StatItem>
                      <StatItem>
                        <StatValue>{artist.totalDonations}</StatValue>
                        <StatLabel>Total Donations</StatLabel>
                      </StatItem>
                    </ArtistStats>
                    <ArtistActions>
                      <SupportButton>Support Artist</SupportButton>
                      <ViewProfileButton as={Link} to="/artist-profile">View Profile</ViewProfileButton>
                    </ArtistActions>
                  </ArtistInfo>
                </ArtistCard>
              ))}
            </ArtistsGrid>
          ) : (
            <NoResults>
              <NoResultsIcon>🔍</NoResultsIcon>
              <NoResultsText>No artists found matching your search criteria.</NoResultsText>
              <NoResultsButton onClick={() => {
                setSearchQuery('')
                setGenreFilter('all')
                setActiveTab('featured')
              }}>
                Clear Filters
              </NoResultsButton>
            </NoResults>
          )}
        </Container>
      </ContentSection>
      
      <BenefitsSection>
        <Container>
          <BenefitsSectionTitle>Why Join TrueFans CONNECT™ as an Artist?</BenefitsSectionTitle>
          <BenefitsSectionSubtitle>Unlock your potential with our artist-first platform</BenefitsSectionSubtitle>
          
          <BenefitsGrid>
            <BenefitCard>
              <BenefitIcon>💰</BenefitIcon>
              <BenefitTitle>Keep 80% of Your Earnings</BenefitTitle>
              <BenefitDescription>
                Our industry-leading 80/20 revenue split ensures you keep the majority of what you earn, putting more money in your pocket.
              </BenefitDescription>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>🔄</BenefitIcon>
              <BenefitTitle>Two-Tier Affiliate Program</BenefitTitle>
              <BenefitDescription>
                Earn 2.5% of donations received by artists you refer, plus another 2.5% from artists they refer, creating passive income.
              </BenefitDescription>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>🎯</BenefitIcon>
              <BenefitTitle>Multiple Donation Methods</BenefitTitle>
              <BenefitDescription>
                Receive support through embed codes, QR codes, and direct donation links, maximizing your earning potential.
              </BenefitDescription>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>🏢</BenefitIcon>
              <BenefitTitle>Venue Connections</BenefitTitle>
              <BenefitDescription>
                Get discovered by venues looking for talent, creating opportunities for live performances and expanding your audience.
              </BenefitDescription>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>📊</BenefitIcon>
              <BenefitTitle>Detailed Analytics</BenefitTitle>
              <BenefitDescription>
                Track your performance with comprehensive analytics, helping you understand your audience and optimize your strategy.
              </BenefitDescription>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>🛠️</BenefitIcon>
              <BenefitTitle>Powerful Tools</BenefitTitle>
              <BenefitDescription>
                Access a suite of tools designed to help you manage your career, connect with fans, and grow your income.
              </BenefitDescription>
            </BenefitCard>
          </BenefitsGrid>
          
          <CTAContainer>
            <CTAText>Ready to take your music career to the next level?</CTAText>
            <CTAButton as={Link} to="/artist-signup">Sign Up as an Artist</CTAButton>
          </CTAContainer>
        </Container>
      </BenefitsSection>
      
      <TestimonialsSection>
        <Container>
          <TestimonialsSectionTitle>Success Stories</TestimonialsSectionTitle>
          <TestimonialsSectionSubtitle>Hear from artists who are thriving on our platform</TestimonialsSectionSubtitle>
          
          <TestimonialsGrid>
            <TestimonialCard>
              <TestimonialContent>
                "TrueFans CONNECT™ has completely transformed my career as an independent artist. The direct support from fans and the venue connections have allowed me to focus on creating music full-time."
              </TestimonialContent>
              <TestimonialAuthor>
                <TestimonialAvatar src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg" alt="Marcus Rivera" />
                <TestimonialInfo>
                  <TestimonialName>Marcus Rivera</TestimonialName>
                  <TestimonialRole>Hip Hop Artist</TestimonialRole>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialContent>
                "The affiliate program has been a game-changer for me. Not only am I earning from my music, but I'm also generating passive income by referring other artists to the platform."
              </TestimonialContent>
              <TestimonialAuthor>
                <TestimonialAvatar src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" alt="Sophia Martinez" />
                <TestimonialInfo>
                  <TestimonialName>Sophia Martinez</TestimonialName>
                  <TestimonialRole>Jazz Vocalist</TestimonialRole>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialContent>
                "The multiple donation methods have made it so easy for my fans to support me. I've seen a significant increase in my income since joining TrueFans CONNECT™."
              </TestimonialContent>
              <TestimonialAuthor>
                <TestimonialAvatar src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="David Williams" />
                <TestimonialInfo>
                  <TestimonialName>David Williams</TestimonialName>
                  <TestimonialRole>Rock Guitarist</TestimonialRole>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsGrid>
        </Container>
      </TestimonialsSection>
      
      <FAQSection>
        <Container>
          <FAQSectionTitle>Frequently Asked Questions</FAQSectionTitle>
          <FAQList>
            <FAQItem>
              <FAQQuestion>How does the 80/20 revenue split work?</FAQQuestion>
              <FAQAnswer>
                When you receive donations through our platform, you keep 80% of the amount, while TrueFans CONNECT™ retains 20% to cover operating costs and platform development. This split applies to all donation methods, including direct donations, QR codes, and embed widgets.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>How do I get started as an artist?</FAQQuestion>
              <FAQAnswer>
                Getting started is simple! Just sign up for an artist account, complete your profile with your bio, music samples, and photos, set up your donation methods, and start sharing your profile with your fans. You can also connect with venues and participate in the affiliate program to maximize your earnings.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>How does the affiliate program work?</FAQQuestion>
              <FAQAnswer>
                Our two-tier affiliate program allows you to earn 2.5% of all donations received by artists you refer to the platform. Additionally, you earn 2.5% from artists referred by your referrals, creating a passive income stream. You'll receive a unique referral link to share, and earnings are automatically tracked and added to your account.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>When and how do I get paid?</FAQQuestion>
              <FAQAnswer>
                Payments are processed on a weekly basis. You can choose to receive your earnings via direct deposit, PayPal, or other supported payment methods. There's a minimum payout threshold of $20, and you can track all your earnings and pending payments in your dashboard.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>How do I connect with venues?</FAQQuestion>
              <FAQAnswer>
                Venues on our platform can discover artists through our directory and send performance opportunities directly to you. You can also proactively submit your profile to venues using our venue submission system. All communication and booking arrangements are handled securely through our platform.
              </FAQAnswer>
            </FAQItem>
          </FAQList>
        </Container>
      </FAQSection>
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
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SearchBar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

const GenreSelect = styled.select`
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: white;
  min-width: 150px;
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.space.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
`

const Tab = styled.button`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.lightText};
  position: relative;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: ${({ active }) => active ? 'scaleX(1)' : 'scaleX(0)'};
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const ArtistCard = styled.div`
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

const ArtistImageContainer = styled.div`
  position: relative;
  height: 200px;
`

const ArtistImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const FeaturedBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.space.md};
  right: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const ArtistInfo = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const ArtistName = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ArtistDetails = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ArtistGenre = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const ArtistLocation = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const ArtistBio = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.5;
`

const ArtistStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const StatItem = styled.div``

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ArtistActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
  }
`

const SupportButton = styled(Button)`
  flex: 1;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const ViewProfileButton = styled(Button)`
  flex: 1;
  padding: ${({ theme }) => theme.space.md};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space.xl} 0;
`

const NoResultsIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const NoResultsText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const NoResultsButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

// Benefits Section
const BenefitsSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const BenefitsSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const BenefitsSectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const BenefitCard = styled.div`
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

const BenefitIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const BenefitDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

const CTAContainer = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CTAButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const TestimonialsSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const TestimonialsSectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const TestimonialContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-style: italic;
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`

const TestimonialAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.md};
`

const TestimonialInfo = styled.div``

const TestimonialName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TestimonialRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

// FAQ Section
const FAQSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const FAQSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const FAQItem = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const FAQQuestion = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FAQAnswer = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

export default ArtistsDirectory
