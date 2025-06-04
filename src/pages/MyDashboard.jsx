import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const MyDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <DashboardHeader>
          <WelcomeSection>
            <WelcomeTitle>My Dashboard</WelcomeTitle>
            <WelcomeSubtitle>Manage your TrueFans CONNECT™ account</WelcomeSubtitle>
          </WelcomeSection>
          <ActionButtons>
            <ActionButton>Edit Profile</ActionButton>
            <ActionButton variant="secondary">View Public Profile</ActionButton>
          </ActionButtons>
        </DashboardHeader>
        
        <TabsContainer>
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </TabButton>
          <TabButton 
            active={activeTab === 'artist'} 
            onClick={() => setActiveTab('artist')}
          >
            Artist Dashboard
          </TabButton>
          <TabButton 
            active={activeTab === 'venue'} 
            onClick={() => setActiveTab('venue')}
          >
            Venue Portal
          </TabButton>
          <TabButton 
            active={activeTab === 'donations'} 
            onClick={() => setActiveTab('donations')}
          >
            Donations
          </TabButton>
          <TabButton 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </TabButton>
        </TabsContainer>
        
        <DashboardContent>
          {activeTab === 'overview' && (
            <OverviewTab>
              <Section>
                <SectionTitle>Account Summary</SectionTitle>
                <StatsCards>
                  <StatCard>
                    <StatIcon>👤</StatIcon>
                    <StatInfo>
                      <StatValue>Artist</StatValue>
                      <StatLabel>Account Type</StatLabel>
                    </StatInfo>
                  </StatCard>
                  
                  <StatCard>
                    <StatIcon>📅</StatIcon>
                    <StatInfo>
                      <StatValue>May 15, 2023</StatValue>
                      <StatLabel>Member Since</StatLabel>
                    </StatInfo>
                  </StatCard>
                  
                  <StatCard>
                    <StatIcon>💰</StatIcon>
                    <StatInfo>
                      <StatValue>$1,245.00</StatValue>
                      <StatLabel>Total Earnings</StatLabel>
                    </StatInfo>
                  </StatCard>
                  
                  <StatCard>
                    <StatIcon>🎵</StatIcon>
                    <StatInfo>
                      <StatValue>12</StatValue>
                      <StatLabel>Performances</StatLabel>
                    </StatInfo>
                  </StatCard>
                </StatsCards>
              </Section>
              
              <Section>
                <SectionHeader>
                  <SectionTitle>Recent Activity</SectionTitle>
                  <ViewAllButton>View All</ViewAllButton>
                </SectionHeader>
                
                <ActivityList>
                  {[1, 2, 3, 4, 5].map((activity) => (
                    <ActivityItem key={activity}>
                      <ActivityIcon type={['donation', 'booking', 'message', 'review', 'payout'][activity % 5]}>
                        {['💰', '📅', '✉️', '⭐', '💸'][activity % 5]}
                      </ActivityIcon>
                      <ActivityInfo>
                        <ActivityTitle>
                          {[
                            'New donation received ($25.00)',
                            'Booking confirmed at Blue Note',
                            'New message from Harmony Hall',
                            'New 5-star review from fan',
                            'Payout processed ($245.60)'
                          ][activity % 5]}
                        </ActivityTitle>
                        <ActivityTime>{activity * 2} hours ago</ActivityTime>
                      </ActivityInfo>
                      <ActivityAction>
                        <ActivityButton>View</ActivityButton>
                      </ActivityAction>
                    </ActivityItem>
                  ))}
                </ActivityList>
              </Section>
              
              <TwoColumnSection>
                <LeftColumn>
                  <Section>
                    <SectionTitle>Quick Links</SectionTitle>
                    <QuickLinksGrid>
                      <QuickLinkCard as={Link} to="/artist-dashboard">
                        <QuickLinkIcon>🎵</QuickLinkIcon>
                        <QuickLinkText>Artist Dashboard</QuickLinkText>
                      </QuickLinkCard>
                      
                      <QuickLinkCard as={Link} to="/venue-portal">
                        <QuickLinkIcon>🏢</QuickLinkIcon>
                        <QuickLinkText>Venue Portal</QuickLinkText>
                      </QuickLinkCard>
                      
                      <QuickLinkCard as={Link} to="/donation-system">
                        <QuickLinkIcon>💰</QuickLinkIcon>
                        <QuickLinkText>Donation System</QuickLinkText>
                      </QuickLinkCard>
                      
                      <QuickLinkCard as={Link} to="/affiliate-program">
                        <QuickLinkIcon>🔄</QuickLinkIcon>
                        <QuickLinkText>Affiliate Program</QuickLinkText>
                      </QuickLinkCard>
                    </QuickLinksGrid>
                  </Section>
                </LeftColumn>
                
                <RightColumn>
                  <Section>
                    <SectionTitle>Upcoming Events</SectionTitle>
                    {[1, 2].map((event) => (
                      <EventCard key={event}>
                        <EventDate>
                          <EventMonth>JUN</EventMonth>
                          <EventDay>{10 + event}</EventDay>
                        </EventDate>
                        <EventInfo>
                          <EventTitle>Jazz Night at Blue Note</EventTitle>
                          <EventDetails>
                            <EventTime>8:00 PM - 11:00 PM</EventTime>
                            <EventLocation>New Orleans, LA</EventLocation>
                          </EventDetails>
                        </EventInfo>
                      </EventCard>
                    ))}
                    <MoreEventsButton as={Link} to="/artist-dashboard">View All Events</MoreEventsButton>
                  </Section>
                </RightColumn>
              </TwoColumnSection>
            </OverviewTab>
          )}
          
          {activeTab === 'artist' && (
            <TabContent>
              <RedirectMessage>
                <RedirectIcon>🎵</RedirectIcon>
                <RedirectText>
                  <RedirectTitle>Artist Dashboard</RedirectTitle>
                  <RedirectDescription>Manage your artist profile, donations, and performances</RedirectDescription>
                </RedirectText>
                <RedirectButton as={Link} to="/artist-dashboard">Go to Artist Dashboard</RedirectButton>
              </RedirectMessage>
            </TabContent>
          )}
          
          {activeTab === 'venue' && (
            <TabContent>
              <RedirectMessage>
                <RedirectIcon>🏢</RedirectIcon>
                <RedirectText>
                  <RedirectTitle>Venue Portal</RedirectTitle>
                  <RedirectDescription>Manage your venue listings and artist bookings</RedirectDescription>
                </RedirectText>
                <RedirectButton as={Link} to="/venue-portal">Go to Venue Portal</RedirectButton>
              </RedirectMessage>
            </TabContent>
          )}
          
          {activeTab === 'donations' && (
            <TabContent>
              <RedirectMessage>
                <RedirectIcon>💰</RedirectIcon>
                <RedirectText>
                  <RedirectTitle>Donation System</RedirectTitle>
                  <RedirectDescription>Manage your donation links, QR codes, and widgets</RedirectDescription>
                </RedirectText>
                <RedirectButton as={Link} to="/donation-system">Go to Donation System</RedirectButton>
              </RedirectMessage>
            </TabContent>
          )}
          
          {activeTab === 'settings' && (
            <SettingsTab>
              <Section>
                <SectionTitle>Account Settings</SectionTitle>
                <SettingsForm>
                  <FormGroup>
                    <FormLabel>Email Address</FormLabel>
                    <FormInput type="email" defaultValue="sarah@example.com" />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormInput type="password" defaultValue="********" />
                    <FormHelp>Last changed 3 months ago</FormHelp>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Phone Number</FormLabel>
                    <FormInput type="tel" defaultValue="(555) 123-4567" />
                  </FormGroup>
                  
                  <FormActions>
                    <FormButton>Save Changes</FormButton>
                  </FormActions>
                </SettingsForm>
              </Section>
              
              <Section>
                <SectionTitle>Notification Preferences</SectionTitle>
                <NotificationSettings>
                  <NotificationGroup>
                    <NotificationLabel>
                      <NotificationCheckbox type="checkbox" defaultChecked />
                      Email notifications for new donations
                    </NotificationLabel>
                  </NotificationGroup>
                  
                  <NotificationGroup>
                    <NotificationLabel>
                      <NotificationCheckbox type="checkbox" defaultChecked />
                      Email notifications for new bookings
                    </NotificationLabel>
                  </NotificationGroup>
                  
                  <NotificationGroup>
                    <NotificationLabel>
                      <NotificationCheckbox type="checkbox" defaultChecked />
                      Email notifications for new messages
                    </NotificationLabel>
                  </NotificationGroup>
                  
                  <NotificationGroup>
                    <NotificationLabel>
                      <NotificationCheckbox type="checkbox" />
                      Marketing emails and newsletters
                    </NotificationLabel>
                  </NotificationGroup>
                  
                  <FormActions>
                    <FormButton>Save Preferences</FormButton>
                  </FormActions>
                </NotificationSettings>
              </Section>
              
              <Section>
                <SectionTitle>Payment Information</SectionTitle>
                <PaymentSettings>
                  <PaymentMethod>
                    <PaymentMethodIcon>💳</PaymentMethodIcon>
                    <PaymentMethodInfo>
                      <PaymentMethodTitle>Credit Card</PaymentMethodTitle>
                      <PaymentMethodDetails>Visa ending in 4567</PaymentMethodDetails>
                    </PaymentMethodInfo>
                    <PaymentMethodAction>
                      <PaymentMethodButton>Edit</PaymentMethodButton>
                    </PaymentMethodAction>
                  </PaymentMethod>
                  
                  <PaymentMethod>
                    <PaymentMethodIcon>🏦</PaymentMethodIcon>
                    <PaymentMethodInfo>
                      <PaymentMethodTitle>Bank Account</PaymentMethodTitle>
                      <PaymentMethodDetails>Chase Bank ending in 7890</PaymentMethodDetails>
                    </PaymentMethodInfo>
                    <PaymentMethodAction>
                      <PaymentMethodButton>Edit</PaymentMethodButton>
                    </PaymentMethodAction>
                  </PaymentMethod>
                  
                  <AddPaymentButton>Add Payment Method</AddPaymentButton>
                </PaymentSettings>
              </Section>
            </SettingsTab>
          )}
        </DashboardContent>
      </Container>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.lg};
  }
`

const WelcomeSection = styled.div``

const WelcomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const WelcomeSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
`

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`

const ActionButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
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

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.space.xl};
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 0;
  }
`

const TabButton = styled.button`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background: none;
  border: none;
  border-bottom: 3px solid ${({ theme, active }) => 
    active ? theme.colors.primary : 'transparent'
  };
  color: ${({ theme, active }) => 
    active ? theme.colors.darkText : theme.colors.lightText
  };
  font-weight: ${({ theme, active }) => 
    active ? theme.fontWeights.semiBold : theme.fontWeights.medium
  };
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.colors.darkText};
    border-bottom-color: ${({ theme, active }) => 
      active ? theme.colors.primary : theme.colors.lightGray
    };
  }
`

const DashboardContent = styled.div``

const TabContent = styled.div``

const OverviewTab = styled.div``

const SettingsTab = styled.div``

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    text-decoration: underline;
  }
`

const StatsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const StatCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  align-items: center;
`

const StatIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-right: ${({ theme }) => theme.space.md};
`

const StatInfo = styled.div``

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const ActivityItem = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.md};
  }
`

const ActivityIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-right: ${({ theme }) => theme.space.md};
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'donation': return `${theme.colors.primary}20`;
      case 'booking': return `${theme.colors.secondary}20`;
      case 'message': return `${theme.colors.info}20`;
      case 'review': return `${theme.colors.success}20`;
      case 'payout': return `${theme.colors.warning}20`;
      default: return `${theme.colors.primary}20`;
    }
  }};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
`

const ActivityInfo = styled.div`
  flex: 1;
`

const ActivityTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ActivityTime = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ActivityAction = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const ActivityButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const LeftColumn = styled.div``

const RightColumn = styled.div``

const QuickLinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.space.md};
`

const QuickLinkCard = styled.a`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const QuickLinkIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const QuickLinkText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const EventCard = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.space.lg};
  }
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

const EventTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
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

const MoreEventsButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
`

const RedirectMessage = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const RedirectIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const RedirectText = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const RedirectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const RedirectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
`

const RedirectButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
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

// Settings Tab Styles
const SettingsForm = styled.form`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const FormLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const FormHelp = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-top: ${({ theme }) => theme.space.xs};
`

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
`

const FormButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
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

const NotificationSettings = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const NotificationGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const NotificationLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  cursor: pointer;
`

const NotificationCheckbox = styled.input`
  margin-right: ${({ theme }) => theme.space.md};
  width: 18px;
  height: 18px;
  cursor: pointer;
`

const PaymentSettings = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-of-type {
    border-bottom: none;
    margin-bottom: ${({ theme }) => theme.space.lg};
  }
`

const PaymentMethodIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-right: ${({ theme }) => theme.space.md};
`

const PaymentMethodInfo = styled.div`
  flex: 1;
`

const PaymentMethodTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const PaymentMethodDetails = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const PaymentMethodAction = styled.div``

const PaymentMethodButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
`

const AddPaymentButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
`

export default MyDashboard
