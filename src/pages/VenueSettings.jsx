import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const VenueSettings = () => {
  const [activeTab, setActiveTab] = useState('profile')
  
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
            <HeroTitle>Venue Settings</HeroTitle>
            <HeroSubtitle>Manage your venue profile and account settings</HeroSubtitle>
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
                <NavItem>
                  <NavLink to="/venue-portal/artists">Artists</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/venue-portal/analytics">Analytics</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink to="/venue-portal/settings">Settings</NavLink>
                </NavItem>
              </SidebarNav>
            </Sidebar>
            
            <MainContent>
              <SettingsTabs>
                <SettingsTab 
                  active={activeTab === 'profile'} 
                  onClick={() => setActiveTab('profile')}
                >
                  Venue Profile
                </SettingsTab>
                <SettingsTab 
                  active={activeTab === 'account'} 
                  onClick={() => setActiveTab('account')}
                >
                  Account
                </SettingsTab>
                <SettingsTab 
                  active={activeTab === 'billing'} 
                  onClick={() => setActiveTab('billing')}
                >
                  Billing
                </SettingsTab>
                <SettingsTab 
                  active={activeTab === 'notifications'} 
                  onClick={() => setActiveTab('notifications')}
                >
                  Notifications
                </SettingsTab>
                <SettingsTab 
                  active={activeTab === 'team'} 
                  onClick={() => setActiveTab('team')}
                >
                  Team Members
                </SettingsTab>
              </SettingsTabs>
              
              {activeTab === 'profile' && (
                <SettingsSection>
                  <SectionTitle>Venue Profile</SectionTitle>
                  <SectionDescription>
                    Update your venue information that will be visible to artists and the public.
                  </SectionDescription>
                  
                  <ProfileForm>
                    <FormRow>
                      <FormGroup>
                        <FormLabel>Venue Name</FormLabel>
                        <FormInput type="text" defaultValue="The Blue Note" />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup>
                        <FormLabel>Venue Type</FormLabel>
                        <FormSelect>
                          <option>Music Club</option>
                          <option>Concert Hall</option>
                          <option>Bar with Stage</option>
                          <option>Restaurant with Live Music</option>
                          <option>Theater</option>
                          <option>Outdoor Venue</option>
                        </FormSelect>
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel>Capacity</FormLabel>
                        <FormInput type="number" defaultValue="250" />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup fullWidth>
                        <FormLabel>Description</FormLabel>
                        <FormTextarea 
                          rows="4"
                          defaultValue="The Blue Note is an iconic jazz club established in 1981, featuring world-class musicians in an intimate setting with excellent acoustics and a sophisticated atmosphere."
                        />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup>
                        <FormLabel>Address</FormLabel>
                        <FormInput type="text" defaultValue="131 W 3rd St" />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup>
                        <FormLabel>City</FormLabel>
                        <FormInput type="text" defaultValue="New York" />
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel>State</FormLabel>
                        <FormSelect>
                          <option>NY</option>
                          <option>CA</option>
                          <option>TX</option>
                          <option>IL</option>
                          <option>FL</option>
                        </FormSelect>
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormInput type="text" defaultValue="10012" />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup>
                        <FormLabel>Phone</FormLabel>
                        <FormInput type="tel" defaultValue="(212) 555-3233" />
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="email" defaultValue="bookings@bluenote.com" />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup>
                        <FormLabel>Website</FormLabel>
                        <FormInput type="url" defaultValue="https://www.bluenote.com" />
                      </FormGroup>
                    </FormRow>
                    
                    <FormSection>
                      <SectionSubtitle>Venue Photos</SectionSubtitle>
                      
                      <PhotosContainer>
                        <PhotoItem>
                          <PhotoImage src="https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Venue" />
                          <PhotoOverlay>
                            <PhotoActions>
                              <PhotoActionButton>Edit</PhotoActionButton>
                              <PhotoActionButton>Delete</PhotoActionButton>
                            </PhotoActions>
                          </PhotoOverlay>
                        </PhotoItem>
                        
                        <PhotoItem>
                          <PhotoImage src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Venue" />
                          <PhotoOverlay>
                            <PhotoActions>
                              <PhotoActionButton>Edit</PhotoActionButton>
                              <PhotoActionButton>Delete</PhotoActionButton>
                            </PhotoActions>
                          </PhotoOverlay>
                        </PhotoItem>
                        
                        <PhotoItem>
                          <PhotoImage src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Venue" />
                          <PhotoOverlay>
                            <PhotoActions>
                              <PhotoActionButton>Edit</PhotoActionButton>
                              <PhotoActionButton>Delete</PhotoActionButton>
                            </PhotoActions>
                          </PhotoOverlay>
                        </PhotoItem>
                        
                        <AddPhotoItem>
                          <AddPhotoButton>
                            <PlusIcon />
                            <span>Add Photo</span>
                          </AddPhotoButton>
                        </AddPhotoItem>
                      </PhotosContainer>
                    </FormSection>
                    
                    <FormSection>
                      <SectionSubtitle>Amenities</SectionSubtitle>
                      <AmenitiesGrid>
                        <AmenityCheckbox>
                          <input type="checkbox" id="sound-system" defaultChecked />
                          <label htmlFor="sound-system">Sound System</label>
                        </AmenityCheckbox>
                        
                        <AmenityCheckbox>
                          <input type="checkbox" id="stage" defaultChecked />
                          <label htmlFor="stage">Stage</label>
                        </AmenityCheckbox>
                        
                        <AmenityCheckbox>
                          <input type="checkbox" id="lighting" defaultChecked />
                          <label htmlFor="lighting">Lighting</label>
                        </AmenityCheckbox>
                        
                        <AmenityCheckbox>
                          <input type="checkbox" id="piano" defaultChecked />
                          <label htmlFor="piano">Piano</label>
                        </AmenityCheckbox>
                        
                        <AmenityCheckbox>
                          <input type="checkbox" id="backline" />
                          <label htmlFor="backline">Backline</label>
                        </AmenityCheckbox>
                        
                        <AmenityCheckbox>
                          <input type="checkbox" id="dressing-room" defaultChecked />
                          <label htmlFor="dressing-room">Dressing Room</label>
                        </AmenityCheckbox>
                        
                        <AmenityCheckbox>
                          <input type="checkbox" id="bar" defaultChecked />
                          <label htmlFor="bar">Bar</label>
                        </AmenityCheckbox>
                        
                        <AmenityCheckbox>
                          <input type="checkbox" id="food" defaultChecked />
                          <label htmlFor="food">Food Service</label>
                        </AmenityCheckbox>
                        
                        <AmenityCheckbox>
                          <input type="checkbox" id="parking" />
                          <label htmlFor="parking">Parking</label>
                        </AmenityCheckbox>
                        
                        <AmenityCheckbox>
                          <input type="checkbox" id="wheelchair" defaultChecked />
                          <label htmlFor="wheelchair">Wheelchair Accessible</label>
                        </AmenityCheckbox>
                      </AmenitiesGrid>
                    </FormSection>
                    
                    <FormActions>
                      <CancelButton>Cancel</CancelButton>
                      <SaveButton>Save Changes</SaveButton>
                    </FormActions>
                  </ProfileForm>
                </SettingsSection>
              )}
              
              {activeTab === 'account' && (
                <SettingsSection>
                  <SectionTitle>Account Settings</SectionTitle>
                  <SectionDescription>
                    Manage your account credentials and security settings.
                  </SectionDescription>
                  
                  <FormSection>
                    <SectionSubtitle>Email Address</SectionSubtitle>
                    <FormRow>
                      <FormGroup fullWidth>
                        <FormLabel>Current Email</FormLabel>
                        <FormInput type="email" defaultValue="admin@bluenote.com" disabled />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup fullWidth>
                        <FormLabel>New Email</FormLabel>
                        <FormInput type="email" placeholder="Enter new email address" />
                      </FormGroup>
                    </FormRow>
                    
                    <FormActions>
                      <SaveButton>Update Email</SaveButton>
                    </FormActions>
                  </FormSection>
                  
                  <FormSection>
                    <SectionSubtitle>Password</SectionSubtitle>
                    <FormRow>
                      <FormGroup fullWidth>
                        <FormLabel>Current Password</FormLabel>
                        <FormInput type="password" placeholder="Enter current password" />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup fullWidth>
                        <FormLabel>New Password</FormLabel>
                        <FormInput type="password" placeholder="Enter new password" />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup fullWidth>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormInput type="password" placeholder="Confirm new password" />
                      </FormGroup>
                    </FormRow>
                    
                    <FormActions>
                      <SaveButton>Update Password</SaveButton>
                    </FormActions>
                  </FormSection>
                  
                  <FormSection>
                    <SectionSubtitle>Two-Factor Authentication</SectionSubtitle>
                    <TwoFactorToggle>
                      <ToggleLabel>
                        <ToggleText>
                          <ToggleTitle>Enable Two-Factor Authentication</ToggleTitle>
                          <ToggleDescription>Add an extra layer of security to your account</ToggleDescription>
                        </ToggleText>
                        <ToggleSwitch>
                          <input type="checkbox" id="two-factor" />
                          <ToggleSlider />
                        </ToggleSwitch>
                      </ToggleLabel>
                    </TwoFactorToggle>
                  </FormSection>
                  
                  <FormSection>
                    <SectionSubtitle>Delete Account</SectionSubtitle>
                    <DangerZone>
                      <DangerText>
                        <DangerTitle>Delete Your Account</DangerTitle>
                        <DangerDescription>
                          Once you delete your account, there is no going back. Please be certain.
                        </DangerDescription>
                      </DangerText>
                      <DangerButton>Delete Account</DangerButton>
                    </DangerZone>
                  </FormSection>
                </SettingsSection>
              )}
              
              {activeTab === 'billing' && (
                <SettingsSection>
                  <SectionTitle>Billing Information</SectionTitle>
                  <SectionDescription>
                    Manage your subscription plan and payment methods.
                  </SectionDescription>
                  
                  <FormSection>
                    <SectionSubtitle>Current Plan</SectionSubtitle>
                    <PlanCard>
                      <PlanHeader>
                        <PlanName>Professional Plan</PlanName>
                        <PlanBadge>Current</PlanBadge>
                      </PlanHeader>
                      <PlanPrice>$49.99<PlanPeriod>/month</PlanPeriod></PlanPrice>
                      <PlanFeatures>
                        <PlanFeature>Unlimited events</PlanFeature>
                        <PlanFeature>Priority artist matching</PlanFeature>
                        <PlanFeature>Advanced analytics</PlanFeature>
                        <PlanFeature>Custom branding</PlanFeature>
                        <PlanFeature>Email support</PlanFeature>
                      </PlanFeatures>
                      <PlanActions>
                        <PlanButton>Change Plan</PlanButton>
                      </PlanActions>
                    </PlanCard>
                  </FormSection>
                  
                  <FormSection>
                    <SectionSubtitle>Payment Methods</SectionSubtitle>
                    <PaymentMethodsList>
                      <PaymentMethod>
                        <PaymentIcon>
                          <CreditCardIcon />
                        </PaymentIcon>
                        <PaymentDetails>
                          <PaymentName>Visa ending in 4242</PaymentName>
                          <PaymentExpiry>Expires 12/2025</PaymentExpiry>
                        </PaymentDetails>
                        <PaymentActions>
                          <PaymentActionButton>Edit</PaymentActionButton>
                          <PaymentActionButton>Remove</PaymentActionButton>
                        </PaymentActions>
                      </PaymentMethod>
                      
                      <AddPaymentMethod>
                        <AddPaymentButton>
                          <PlusIcon />
                          <span>Add Payment Method</span>
                        </AddPaymentButton>
                      </AddPaymentMethod>
                    </PaymentMethodsList>
                  </FormSection>
                  
                  <FormSection>
                    <SectionSubtitle>Billing History</SectionSubtitle>
                    <BillingTable>
                      <BillingTableHead>
                        <BillingTableRow>
                          <BillingTableHeader>Date</BillingTableHeader>
                          <BillingTableHeader>Description</BillingTableHeader>
                          <BillingTableHeader>Amount</BillingTableHeader>
                          <BillingTableHeader>Status</BillingTableHeader>
                          <BillingTableHeader>Invoice</BillingTableHeader>
                        </BillingTableRow>
                      </BillingTableHead>
                      <BillingTableBody>
                        <BillingTableRow>
                          <BillingTableCell>May 1, 2023</BillingTableCell>
                          <BillingTableCell>Professional Plan - Monthly</BillingTableCell>
                          <BillingTableCell>$49.99</BillingTableCell>
                          <BillingTableCell>
                            <BillingStatus status="paid">Paid</BillingStatus>
                          </BillingTableCell>
                          <BillingTableCell>
                            <BillingLink>Download</BillingLink>
                          </BillingTableCell>
                        </BillingTableRow>
                        <BillingTableRow>
                          <BillingTableCell>Apr 1, 2023</BillingTableCell>
                          <BillingTableCell>Professional Plan - Monthly</BillingTableCell>
                          <BillingTableCell>$49.99</BillingTableCell>
                          <BillingTableCell>
                            <BillingStatus status="paid">Paid</BillingStatus>
                          </BillingTableCell>
                          <BillingTableCell>
                            <BillingLink>Download</BillingLink>
                          </BillingTableCell>
                        </BillingTableRow>
                        <BillingTableRow>
                          <BillingTableCell>Mar 1, 2023</BillingTableCell>
                          <BillingTableCell>Professional Plan - Monthly</BillingTableCell>
                          <BillingTableCell>$49.99</BillingTableCell>
                          <BillingTableCell>
                            <BillingStatus status="paid">Paid</BillingStatus>
                          </BillingTableCell>
                          <BillingTableCell>
                            <BillingLink>Download</BillingLink>
                          </BillingTableCell>
                        </BillingTableRow>
                      </BillingTableBody>
                    </BillingTable>
                  </FormSection>
                </SettingsSection>
              )}
              
              {activeTab === 'notifications' && (
                <SettingsSection>
                  <SectionTitle>Notification Preferences</SectionTitle>
                  <SectionDescription>
                    Control how and when you receive notifications from the platform.
                  </SectionDescription>
                  
                  <NotificationSection>
                    <NotificationCategory>
                      <CategoryTitle>Email Notifications</CategoryTitle>
                      
                      <NotificationItem>
                        <NotificationText>
                          <NotificationTitle>Artist Inquiries</NotificationTitle>
                          <NotificationDescription>Receive emails when artists express interest in performing at your venue</NotificationDescription>
                        </NotificationText>
                        <NotificationToggle>
                          <input type="checkbox" id="artist-inquiries" defaultChecked />
                          <ToggleSlider />
                        </NotificationToggle>
                      </NotificationItem>
                      
                      <NotificationItem>
                        <NotificationText>
                          <NotificationTitle>Booking Confirmations</NotificationTitle>
                          <NotificationDescription>Receive emails when a booking is confirmed</NotificationDescription>
                        </NotificationText>
                        <NotificationToggle>
                          <input type="checkbox" id="booking-confirmations" defaultChecked />
                          <ToggleSlider />
                        </NotificationToggle>
                      </NotificationItem>
                      
                      <NotificationItem>
                        <NotificationText>
                          <NotificationTitle>Event Reminders</NotificationTitle>
                          <NotificationDescription>Receive reminders about upcoming events</NotificationDescription>
                        </NotificationText>
                        <NotificationToggle>
                          <input type="checkbox" id="event-reminders" defaultChecked />
                          <ToggleSlider />
                        </NotificationToggle>
                      </NotificationItem>
                      
                      <NotificationItem>
                        <NotificationText>
                          <NotificationTitle>Platform Updates</NotificationTitle>
                          <NotificationDescription>Receive updates about new features and improvements</NotificationDescription>
                        </NotificationText>
                        <NotificationToggle>
                          <input type="checkbox" id="platform-updates" />
                          <ToggleSlider />
                        </NotificationToggle>
                      </NotificationItem>
                      
                      <NotificationItem>
                        <NotificationText>
                          <NotificationTitle>Marketing & Promotions</NotificationTitle>
                          <NotificationDescription>Receive promotional offers and marketing communications</NotificationDescription>
                        </NotificationText>
                        <NotificationToggle>
                          <input type="checkbox" id="marketing" />
                          <ToggleSlider />
                        </NotificationToggle>
                      </NotificationItem>
                    </NotificationCategory>
                    
                    <NotificationCategory>
                      <CategoryTitle>In-App Notifications</CategoryTitle>
                      
                      <NotificationItem>
                        <NotificationText>
                          <NotificationTitle>Artist Messages</NotificationTitle>
                          <NotificationDescription>Receive notifications when artists send you messages</NotificationDescription>
                        </NotificationText>
                        <NotificationToggle>
                          <input type="checkbox" id="artist-messages" defaultChecked />
                          <ToggleSlider />
                        </NotificationToggle>
                      </NotificationItem>
                      
                      <NotificationItem>
                        <NotificationText>
                          <NotificationTitle>Booking Updates</NotificationTitle>
                          <NotificationDescription>Receive notifications about changes to bookings</NotificationDescription>
                        </NotificationText>
                        <NotificationToggle>
                          <input type="checkbox" id="booking-updates" defaultChecked />
                          <ToggleSlider />
                        </NotificationToggle>
                      </NotificationItem>
                      
                      <NotificationItem>
                        <NotificationText>
                          <NotificationTitle>New Artist Matches</NotificationTitle>
                          <NotificationDescription>Receive notifications about new artists that match your venue</NotificationDescription>
                        </NotificationText>
                        <NotificationToggle>
                          <input type="checkbox" id="artist-matches" defaultChecked />
                          <ToggleSlider />
                        </NotificationToggle>
                      </NotificationItem>
                    </NotificationCategory>
                  </NotificationSection>
                  
                  <FormActions>
                    <SaveButton>Save Preferences</SaveButton>
                  </FormActions>
                </SettingsSection>
              )}
              
              {activeTab === 'team' && (
                <SettingsSection>
                  <SectionTitle>Team Members</SectionTitle>
                  <SectionDescription>
                    Manage access to your venue account for team members.
                  </SectionDescription>
                  
                  <TeamActions>
                    <InviteButton>
                      <PlusIcon />
                      <span>Invite Team Member</span>
                    </InviteButton>
                  </TeamActions>
                  
                  <TeamTable>
                    <TeamTableHead>
                      <TeamTableRow>
                        <TeamTableHeader>Name</TeamTableHeader>
                        <TeamTableHeader>Email</TeamTableHeader>
                        <TeamTableHeader>Role</TeamTableHeader>
                        <TeamTableHeader>Status</TeamTableHeader>
                        <TeamTableHeader>Actions</TeamTableHeader>
                      </TeamTableRow>
                    </TeamTableHead>
                    <TeamTableBody>
                      <TeamTableRow>
                        <TeamTableCell>
                          <TeamMember>
                            <TeamAvatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Smith" />
                            <TeamName>John Smith</TeamName>
                          </TeamMember>
                        </TeamTableCell>
                        <TeamTableCell>john@bluenote.com</TeamTableCell>
                        <TeamTableCell>Owner</TeamTableCell>
                        <TeamTableCell>
                          <TeamStatus status="active">Active</TeamStatus>
                        </TeamTableCell>
                        <TeamTableCell>
                          <TeamActions>
                            <TeamActionButton disabled>Edit</TeamActionButton>
                            <TeamActionButton disabled>Remove</TeamActionButton>
                          </TeamActions>
                        </TeamTableCell>
                      </TeamTableRow>
                      
                      <TeamTableRow>
                        <TeamTableCell>
                          <TeamMember>
                            <TeamAvatar src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sarah Johnson" />
                            <TeamName>Sarah Johnson</TeamName>
                          </TeamMember>
                        </TeamTableCell>
                        <TeamTableCell>sarah@bluenote.com</TeamTableCell>
                        <TeamTableCell>Manager</TeamTableCell>
                        <TeamTableCell>
                          <TeamStatus status="active">Active</TeamStatus>
                        </TeamTableCell>
                        <TeamTableCell>
                          <TeamActions>
                            <TeamActionButton>Edit</TeamActionButton>
                            <TeamActionButton>Remove</TeamActionButton>
                          </TeamActions>
                        </TeamTableCell>
                      </TeamTableRow>
                      
                      <TeamTableRow>
                        <TeamTableCell>
                          <TeamMember>
                            <TeamAvatar src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="David Lee" />
                            <TeamName>David Lee</TeamName>
                          </TeamMember>
                        </TeamTableCell>
                        <TeamTableCell>david@bluenote.com</TeamTableCell>
                        <TeamTableCell>Booking Agent</TeamTableCell>
                        <TeamTableCell>
                          <TeamStatus status="active">Active</TeamStatus>
                        </TeamTableCell>
                        <TeamTableCell>
                          <TeamActions>
                            <TeamActionButton>Edit</TeamActionButton>
                            <TeamActionButton>Remove</TeamActionButton>
                          </TeamActions>
                        </TeamTableCell>
                      </TeamTableRow>
                      
                      <TeamTableRow>
                        <TeamTableCell>
                          <TeamMember>
                            <TeamAvatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Maria Garcia" />
                            <TeamName>Maria Garcia</TeamName>
                          </TeamMember>
                        </TeamTableCell>
                        <TeamTableCell>maria@bluenote.com</TeamTableCell>
                        <TeamTableCell>Marketing</TeamTableCell>
                        <TeamTableCell>
                          <TeamStatus status="pending">Pending</TeamStatus>
                        </TeamTableCell>
                        <TeamTableCell>
                          <TeamActions>
                            <TeamActionButton>Resend</TeamActionButton>
                            <TeamActionButton>Cancel</TeamActionButton>
                          </TeamActions>
                        </TeamTableCell>
                      </TeamTableRow>
                    </TeamTableBody>
                  </TeamTable>
                </SettingsSection>
              )}
            </MainContent>
          </DashboardLayout>
        </Container>
      </ContentSection>
    </PageWrapper>
  )
}

// Icons
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3.33334V12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CreditCardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 15H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Styled Components
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

// Settings Tabs
const SettingsTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const SettingsTab = styled.button`
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

// Settings Section
const SettingsSection = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.colors.darkText};
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const FormSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SectionSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.darkText};
`

// Form Elements
const ProfileForm = styled.form``

const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const FormGroup = styled.div`
  flex: ${({ fullWidth }) => fullWidth ? 1 : 1};
`

const FormLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.darkText};
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
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
  }
`

const FormSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

const SaveButton = styled(Button)`
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const CancelButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

// Photos Section
const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.space.md};
`

const PhotoItem = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  height: 150px;
  
  &:hover {
    div {
      opacity: 1;
    }
  }
`

const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
`

const PhotoActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`

const PhotoActionButton = styled.button`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  background-color: white;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const AddPhotoItem = styled.div`
  height: 150px;
  border: 2px dashed ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
`

const AddPhotoButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  
  svg {
    margin-bottom: ${({ theme }) => theme.space.xs};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`

// Amenities Section
const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.md};
`

const AmenityCheckbox = styled.div`
  display: flex;
  align-items: center;
  
  input {
    margin-right: ${({ theme }) => theme.space.sm};
  }
  
  label {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.darkText};
  }
`

// Toggle Switch
const ToggleLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const ToggleText = styled.div``

const ToggleTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ToggleDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ToggleSwitch = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + span {
      background-color: ${({ theme }) => theme.colors.primary};
    }
    
    &:checked + span:before {
      transform: translateX(26px);
    }
  }
`

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.mediumGray};
  transition: 0.4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`

// Two Factor Authentication
const TwoFactorToggle = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
`

// Danger Zone
const DangerZone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff5f5;
  border: 1px solid #feb2b2;
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.lg};
  }
`

const DangerText = styled.div``

const DangerTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: #e53e3e;
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const DangerDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const DangerButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: #e53e3e;
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: #c53030;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

// Billing Section
const PlanCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const PlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const PlanName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const PlanBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  background-color: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.sm};
`

const PlanPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const PlanPeriod = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.lightText};
`

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.space.lg} 0;
`

const PlanFeature = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:before {
    content: "✓";
    color: ${({ theme }) => theme.colors.success};
    margin-right: ${({ theme }) => theme.space.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`

const PlanActions = styled.div``

const PlanButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
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
`

// Payment Methods
const PaymentMethodsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
`

const PaymentIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const PaymentDetails = styled.div`
  flex: 1;
`

const PaymentName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const PaymentExpiry = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const PaymentActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`

const PaymentActionButton = styled.button`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  background-color: white;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const AddPaymentMethod = styled.div`
  padding: ${({ theme }) => theme.space.md};
  border: 2px dashed ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
`

const AddPaymentButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`

// Billing Table
const BillingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const BillingTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const BillingTableBody = styled.tbody``

const BillingTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`

const BillingTableHeader = styled.th`
  padding: ${({ theme }) => theme.space.md};
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const BillingTableCell = styled.td`
  padding: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const BillingStatus = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  ${({ status, theme }) => {
    if (status === 'paid') {
      return `
        background-color: ${theme.colors.success}20;
        color: ${theme.colors.success};
      `;
    } else if (status === 'pending') {
      return `
        background-color: ${theme.colors.warning}20;
        color: ${theme.colors.warning};
      `;
    } else if (status === 'failed') {
      return `
        background-color: ${theme.colors.error}20;
        color: ${theme.colors.error};
      `;
    }
  }}
`

const BillingLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  &:hover {
    text-decoration: underline;
  }
`

// Notification Section
const NotificationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const NotificationCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CategoryTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`

const NotificationText = styled.div`
  flex: 1;
`

const NotificationTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const NotificationDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const NotificationToggle = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + span {
      background-color: ${({ theme }) => theme.colors.primary};
    }
    
    &:checked + span:before {
      transform: translateX(26px);
    }
  }
`

// Team Section
const TeamActions = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const InviteButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const TeamTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TeamTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const TeamTableBody = styled.tbody``

const TeamTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`

const TeamTableHeader = styled.th`
  padding: ${({ theme }) => theme.space.md};
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const TeamTableCell = styled.td`
  padding: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const TeamMember = styled.div`
  display: flex;
  align-items: center;
`

const TeamAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.md};
`

const TeamName = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const TeamStatus = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  ${({ status, theme }) => {
    if (status === 'active') {
      return `
        background-color: ${theme.colors.success}20;
        color: ${theme.colors.success};
      `;
    } else if (status === 'pending') {
      return `
        background-color: ${theme.colors.warning}20;
        color: ${theme.colors.warning};
      `;
    } else if (status === 'inactive') {
      return `
        background-color: ${theme.colors.error}20;
        color: ${theme.colors.error};
      `;
    }
  }}
`

const TeamActionButton = styled.button`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  background-color: white;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
  
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

export default VenueSettings
