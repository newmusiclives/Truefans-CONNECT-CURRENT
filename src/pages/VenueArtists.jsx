import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const VenueArtists = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  
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
            <HeroTitle>Artist Network</HeroTitle>
            <HeroSubtitle>Connect with talented artists for your venue</HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <DashboardLayout>
            <Sidebar>
              <SidebarNav>
                <NavItem>
                  <NavLink to="/venue-portal">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/venue-portal/events">Events</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink to="/venue-portal/artists">Artists</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/venue-portal/analytics">Analytics</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/venue-portal/settings">Settings</NavLink>
                </NavItem>
              </SidebarNav>
            </Sidebar>
            
            <MainContent>
              <ActionBar>
                <SearchBar>
                  <SearchInput 
                    type="text" 
                    placeholder="Search artists..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <SearchButton>Search</SearchButton>
                </SearchBar>
                <ActionButtons>
                  <FilterButton>Filter</FilterButton>
                </ActionButtons>
              </ActionBar>
              
              <TabsContainer>
                <TabButton 
                  active={activeTab === 'all'} 
                  onClick={() => setActiveTab('all')}
                >
                  All Artists (48)
                </TabButton>
                <TabButton 
                  active={activeTab === 'booked'} 
                  onClick={() => setActiveTab('booked')}
                >
                  Booked (12)
                </TabButton>
                <TabButton 
                  active={activeTab === 'favorites'} 
                  onClick={() => setActiveTab('favorites')}
                >
                  Favorites (8)
                </TabButton>
                <TabButton 
                  active={activeTab === 'contacted'} 
                  onClick={() => setActiveTab('contacted')}
                >
                  Contacted (5)
                </TabButton>
              </TabsContainer>
              
              <ArtistsGrid>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((artist) => (
                  <ArtistCard key={artist}>
                    <ArtistHeader>
                      <ArtistGenre>
                        {['Jazz', 'Rock', 'Pop', 'Classical', 'Hip Hop', 'Electronic', 'Folk', 'R&B'][artist % 8]}
                      </ArtistGenre>
                      <ArtistActions>
                        <ArtistActionButton>
                          <HeartIcon filled={artist % 3 === 0} />
                        </ArtistActionButton>
                      </ArtistActions>
                    </ArtistHeader>
                    
                    <ArtistImageContainer>
                      <ArtistImage 
                        src={`https://images.pexels.com/photos/${1000000 + artist * 127}/pexels-photo-${1000000 + artist * 127}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                        alt={`Artist ${artist}`} 
                      />
                      {artist % 4 === 0 && <VerifiedBadge>✓</VerifiedBadge>}
                    </ArtistImageContainer>
                    
                    <ArtistContent>
                      <ArtistName>
                        {['Emma Johnson', 'Marcus Lee', 'Sophia Williams', 'James Chen', 
                          'Olivia Rodriguez', 'Noah Kim', 'Ava Patel', 'Ethan Davis'][artist % 8]}
                      </ArtistName>
                      <ArtistLocation>
                        {['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Austin, TX', 
                          'Nashville, TN', 'Seattle, WA', 'Miami, FL', 'Portland, OR'][artist % 8]}
                      </ArtistLocation>
                      
                      <ArtistBio>
                        {artist % 2 === 0 
                          ? 'Award-winning performer with over 10 years of experience in live venues across the country.'
                          : 'Innovative artist blending traditional and contemporary styles to create unique performances.'}
                      </ArtistBio>
                      
                      <ArtistTags>
                        {['Live Performance', 'Original Music', 'Covers', 'Family Friendly', 
                          'Late Night', 'Acoustic', 'Full Band', 'Solo Artist'][artist % 8]}
                        {artist % 3 === 0 && ' • Touring'}
                      </ArtistTags>
                    </ArtistContent>
                    
                    <ArtistStats>
                      <StatItem>
                        <StatValue>{artist * 5 + 15}</StatValue>
                        <StatLabel>Shows</StatLabel>
                      </StatItem>
                      <StatItem>
                        <StatValue>{artist * 2 + 3}</StatValue>
                        <StatLabel>Years</StatLabel>
                      </StatItem>
                      <StatItem>
                        <StatValue>${(artist * 50 + 150)}</StatValue>
                        <StatLabel>Avg Rate</StatLabel>
                      </StatItem>
                    </ArtistStats>
                    
                    <ArtistFooter>
                      <ArtistButton variant="secondary">View Profile</ArtistButton>
                      <ArtistButton>Contact</ArtistButton>
                    </ArtistFooter>
                  </ArtistCard>
                ))}
              </ArtistsGrid>
              
              <Pagination>
                <PaginationButton disabled>{"<"}</PaginationButton>
                <PaginationButton active>1</PaginationButton>
                <PaginationButton>2</PaginationButton>
                <PaginationButton>3</PaginationButton>
                <PaginationButton>{">"}</PaginationButton>
              </Pagination>
            </MainContent>
          </DashboardLayout>
        </Container>
      </ContentSection>
    </PageWrapper>
  )
}

const HeartIcon = ({ filled }) => (
  <svg 
    width="20" 
    height="18" 
    viewBox="0 0 20 18" 
    fill={filled ? "#e74c3c" : "none"} 
    stroke={filled ? "#e74c3c" : "#666"}
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.612 2.388a4.5 4.5 0 00-6.364 0L10 3.636l-1.248-1.248a4.5 4.5 0 00-6.364 6.364L10 16.364l7.612-7.612a4.5 4.5 0 000-6.364z" />
  </svg>
)

const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

// Hero Section
const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space.lg} 0;
  color: white;
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
`

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
`

const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

// Sidebar
const Sidebar = styled.aside`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const NavItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ active, theme }) => active ? theme.colors.lightGray : 'transparent'};
  
  &:last-child {
    border-bottom: none;
  }
`

const NavLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.darkText};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

// Main Content
const MainContent = styled.div``

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
  }
`

const SearchBar = styled.div`
  display: flex;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

const SearchInput = styled.input`
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-right: none;
  border-radius: ${({ theme }) => theme.radii.md} 0 0 ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  width: 300px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

const SearchButton = styled.button`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0 ${({ theme }) => theme.radii.md} ${({ theme }) => theme.radii.md} 0;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

const FilterButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background-color: white;
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1;
  }
`

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const TabButton = styled.button`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background-color: transparent;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-bottom: 2px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
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

const ArtistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const ArtistGenre = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
`

const ArtistActions = styled.div``

const ArtistActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover svg {
    transform: scale(1.1);
  }
  
  svg {
    transition: transform 0.2s ease;
  }
`

const ArtistImageContainer = styled.div`
  position: relative;
`

const ArtistImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`

const VerifiedBadge = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const ArtistContent = styled.div`
  padding: ${({ theme }) => theme.space.md};
`

const ArtistName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ArtistLocation = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ArtistBio = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.5;
`

const ArtistTags = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const ArtistStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.md};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const StatItem = styled.div`
  text-align: center;
  flex: 1;
`

const StatValue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightText};
`

const ArtistFooter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md};
`

const ArtistButton = styled(Button)`
  flex: 1;
  padding: ${({ theme }) => theme.space.sm};
  background-color: ${({ theme, variant }) => 
    variant === 'secondary' ? 'transparent' : theme.colors.primary
  };
  color: ${({ theme, variant }) => 
    variant === 'secondary' ? theme.colors.darkText : theme.colors.trustworthyNavy
  };
  border: ${({ theme, variant }) => 
    variant === 'secondary' ? `1px solid ${theme.colors.mediumGray}` : 'none'
  };
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme, variant }) => 
      variant === 'secondary' ? theme.colors.lightGray : theme.colors.primaryDark
    };
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
`

const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active, theme }) => active ? theme.colors.primary : 'white'};
  color: ${({ active, theme }) => active ? theme.colors.trustworthyNavy : theme.colors.darkText};
  border: 1px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover:not(:disabled) {
    background-color: ${({ active, theme }) => active ? theme.colors.primaryDark : theme.colors.lightGray};
  }
`

export default VenueArtists
