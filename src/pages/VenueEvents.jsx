import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const VenueEvents = () => {
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
            <HeroTitle>Venue Events</HeroTitle>
            <HeroSubtitle>Manage your upcoming and past events</HeroSubtitle>
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
                <NavItem active>
                  <NavLink to="/venue-portal/events">Events</NavLink>
                </NavItem>
                <NavItem>
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
                  <SearchInput type="text" placeholder="Search events..." />
                  <SearchButton>Search</SearchButton>
                </SearchBar>
                <ActionButtons>
                  <CreateButton>+ Create Event</CreateButton>
                  <FilterButton>Filter</FilterButton>
                </ActionButtons>
              </ActionBar>
              
              <TabsContainer>
                <TabButton active>Upcoming (12)</TabButton>
                <TabButton>Past (24)</TabButton>
                <TabButton>Drafts (3)</TabButton>
              </TabsContainer>
              
              <EventsGrid>
                {[1, 2, 3, 4, 5, 6].map((event) => (
                  <EventCard key={event}>
                    <EventHeader>
                      <EventStatus status={event % 3 === 0 ? 'draft' : event % 2 === 0 ? 'published' : 'sold-out'}>
                        {event % 3 === 0 ? 'Draft' : event % 2 === 0 ? 'Published' : 'Sold Out'}
                      </EventStatus>
                      <EventActions>
                        <EventActionButton>⋮</EventActionButton>
                      </EventActions>
                    </EventHeader>
                    
                    <EventImage src={`https://images.pexels.com/photos/${1699159 + event * 100}/pexels-photo-${1699159 + event * 100}.jpeg?auto=compress&cs=tinysrgb&w=600`} alt={`Event ${event}`} />
                    
                    <EventContent>
                      <EventDate>
                        <EventMonth>JUN</EventMonth>
                        <EventDay>{10 + event}</EventDay>
                      </EventDate>
                      
                      <EventInfo>
                        <EventTitle>
                          {['Jazz Night', 'Rock Concert', 'Acoustic Session', 'EDM Party', 'Classical Evening', 'Hip Hop Showcase'][event % 6]}
                        </EventTitle>
                        <EventDetails>
                          <EventTime>8:00 PM - 11:00 PM</EventTime>
                          <EventLocation>Main Stage</EventLocation>
                        </EventDetails>
                      </EventInfo>
                    </EventContent>
                    
                    <EventStats>
                      <StatItem>
                        <StatLabel>Tickets Sold</StatLabel>
                        <StatValue>{event * 15 + 45}/{event * 5 + 100}</StatValue>
                      </StatItem>
                      <StatItem>
                        <StatLabel>Revenue</StatLabel>
                        <StatValue>${event * 450 + 1200}</StatValue>
                      </StatItem>
                    </EventStats>
                    
                    <EventFooter>
                      <EventButton variant="secondary">Edit</EventButton>
                      <EventButton>Manage</EventButton>
                    </EventFooter>
                  </EventCard>
                ))}
              </EventsGrid>
              
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

const CreateButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1;
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

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const EventCard = styled.div`
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

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const EventStatus = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  ${({ status, theme }) => {
    if (status === 'draft') {
      return `
        background-color: ${theme.colors.lightGray};
        color: ${theme.colors.darkGray};
      `;
    } else if (status === 'published') {
      return `
        background-color: ${theme.colors.success}20;
        color: ${theme.colors.success};
      `;
    } else if (status === 'sold-out') {
      return `
        background-color: ${theme.colors.secondary}20;
        color: ${theme.colors.secondary};
      `;
    }
  }}
`

const EventActions = styled.div``

const EventActionButton = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.darkGray};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.darkText};
  }
`

const EventImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

const EventContent = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space.md};
`

const EventDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-right: ${({ theme }) => theme.space.md};
`

const EventMonth = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const EventDay = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const EventInfo = styled.div`
  flex: 1;
`

const EventTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const EventDetails = styled.div``

const EventTime = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const EventLocation = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const EventStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.md};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const StatItem = styled.div``

const StatLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatValue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const EventFooter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md};
`

const EventButton = styled(Button)`
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

export default VenueEvents
