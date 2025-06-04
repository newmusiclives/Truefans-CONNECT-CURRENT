import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const VenuePortal = () => {
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
            <HeroTitle>Venue Portal</HeroTitle>
            <HeroSubtitle>Connect with talented independent artists for your venue</HeroSubtitle>
            <HeroActions>
              <HeroButton as={Link} to="/venue-signup">Register Your Venue</HeroButton>
              <HeroButton as={Link} to="/venue-signup" variant="outline">Learn More</HeroButton>
            </HeroActions>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnLayout>
            <MainContent>
              <Section>
                <SectionTitle>Featured Venues</SectionTitle>
                <VenueGrid>
                  {[1, 2, 3, 4, 5, 6].map((venue) => (
                    <VenueCard key={venue}>
                      <VenueImage src={`https://images.pexels.com/photos/${1699159 + venue * 100}/pexels-photo-${1699159 + venue * 100}.jpeg?auto=compress&cs=tinysrgb&w=600`} alt={`Venue ${venue}`} />
                      <VenueInfo>
                        <VenueName>
                          {['The Blue Note', 'Soundwave Lounge', 'Harmony Hall', 'Rhythm Room', 'Melody Mansion', 'Echo Chamber'][venue % 6]}
                        </VenueName>
                        <VenueType>
                          {['Jazz Club', 'Live Music Bar', 'Concert Hall', 'Music Venue', 'Performance Space', 'Acoustic Lounge'][venue % 6]}
                        </VenueType>
                        <VenueLocation>
                          {['New Orleans', 'Austin', 'Nashville', 'New York', 'Los Angeles', 'Chicago'][venue % 6]}
                        </VenueLocation>
                      </VenueInfo>
                      <VenueActions>
                        <VenueButton>View Details</VenueButton>
                        <VenueButton variant="secondary">Contact</VenueButton>
                      </VenueActions>
                    </VenueCard>
                  ))}
                </VenueGrid>
              </Section>
              
              <Section>
                <SectionTitle>Upcoming Events</SectionTitle>
                <EventsList>
                  {[1, 2, 3].map((event) => (
                    <EventCard key={event}>
                      <EventDate>
                        <EventMonth>JUN</EventMonth>
                        <EventDay>{10 + event}</EventDay>
                      </EventDate>
                      <EventInfo>
                        <EventTitle>Jazz Night at Blue Note</EventTitle>
                        <EventDetails>
                          <EventArtists>Sarah Johnson, Marcus Rivera</EventArtists>
                          <EventTime>8:00 PM - 11:00 PM</EventTime>
                        </EventDetails>
                      </EventInfo>
                      <EventActions>
                        <EventButton>Details</EventButton>
                      </EventActions>
                    </EventCard>
                  ))}
                </EventsList>
              </Section>
              
              <Section>
                <SectionTitle>Success Stories</SectionTitle>
                <TestimonialsList>
                  <TestimonialCard>
                    <TestimonialContent>
                      "Partnering with TrueFans Connect has transformed our venue's booking process. We've discovered amazing talent and increased our attendance by 40% since featuring these independent artists."
                    </TestimonialContent>
                    <TestimonialAuthor>
                      <TestimonialAvatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="John Smith" />
                      <TestimonialInfo>
                        <TestimonialName>John Smith</TestimonialName>
                        <TestimonialRole>Owner, The Basement Jazz Club</TestimonialRole>
                      </TestimonialInfo>
                    </TestimonialAuthor>
                  </TestimonialCard>
                  
                  <TestimonialCard>
                    <TestimonialContent>
                      "The quality of artists on this platform is exceptional. We've been able to fill our calendar with diverse performers that our audience loves, and the booking process couldn't be simpler."
                    </TestimonialContent>
                    <TestimonialAuthor>
                      <TestimonialAvatar src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="Maria Rodriguez" />
                      <TestimonialInfo>
                        <TestimonialName>Maria Rodriguez</TestimonialName>
                        <TestimonialRole>Events Manager, Soundwave Lounge</TestimonialRole>
                      </TestimonialInfo>
                    </TestimonialAuthor>
                  </TestimonialCard>
                </TestimonialsList>
              </Section>
              
              <Section>
                <SectionTitle>Venue Affiliate Program</SectionTitle>
                <AffiliateCard>
                  <AffiliateContent>
                    <AffiliateTitle>Earn While Discovering New Talent</AffiliateTitle>
                    <AffiliateDescription>
                      When you register as a venue on TrueFans CONNECT, you automatically become part of our affiliate program. Earn 2.5% of all donations received by artists you refer to the platform, plus 2.5% from artists they refer.
                    </AffiliateDescription>
                    <AffiliateBenefits>
                      <AffiliateBenefit>
                        <BenefitIcon>💰</BenefitIcon>
                        <BenefitText>Two-tier commission structure</BenefitText>
                      </AffiliateBenefit>
                      <AffiliateBenefit>
                        <BenefitIcon>🔄</BenefitIcon>
                        <BenefitText>Passive income from artist referrals</BenefitText>
                      </AffiliateBenefit>
                      <AffiliateBenefit>
                        <BenefitIcon>📊</BenefitIcon>
                        <BenefitText>Detailed performance analytics</BenefitText>
                      </AffiliateBenefit>
                    </AffiliateBenefits>
                    <AffiliateButton as={Link} to="/affiliate-program">Learn More About Affiliate Program</AffiliateButton>
                  </AffiliateContent>
                  <AffiliateImage src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Affiliate Program" />
                </AffiliateCard>
              </Section>
              
              <Section>
                <SectionTitle>Customizable Submission Form</SectionTitle>
                <SubmissionFormCard>
                  <SubmissionFormImage src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Submission Form" />
                  <SubmissionFormContent>
                    <SubmissionFormTitle>Branded Artist Submission Form</SubmissionFormTitle>
                    <SubmissionFormDescription>
                      When you register your venue, you'll get a customizable artist submission form that matches your venue's branding. Embed this form on your website to collect submissions from interested artists.
                    </SubmissionFormDescription>
                    <SubmissionFormFeatures>
                      <SubmissionFormFeature>
                        <FeatureIcon>🎨</FeatureIcon>
                        <FeatureText>Customize colors to match your brand</FeatureText>
                      </SubmissionFormFeature>
                      <SubmissionFormFeature>
                        <FeatureIcon>🖼️</FeatureIcon>
                        <FeatureText>Add your venue logo and background image</FeatureText>
                      </SubmissionFormFeature>
                      <SubmissionFormFeature>
                        <FeatureIcon>📋</FeatureIcon>
                        <FeatureText>Collect all the information you need from artists</FeatureText>
                      </SubmissionFormFeature>
                      <SubmissionFormFeature>
                        <FeatureIcon>📱</FeatureIcon>
                        <FeatureText>Mobile-responsive design works on all devices</FeatureText>
                      </SubmissionFormFeature>
                    </SubmissionFormFeatures>
                    <SubmissionFormButton as={Link} to="/venue-signup">Create Your Submission Form</SubmissionFormButton>
                  </SubmissionFormContent>
                </SubmissionFormCard>
              </Section>
            </MainContent>
            
            <Sidebar>
              <VenueSignupCard>
                <VenueSignupTitle>Register Your Venue</VenueSignupTitle>
                <VenueSignupDescription>Join our network of music venues and connect with talented independent artists.</VenueSignupDescription>
                
                <VenueSignupForm>
                  <FormGroup>
                    <FormLabel>Venue Name</FormLabel>
                    <FormInput type="text" placeholder="Enter your venue name" />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Location</FormLabel>
                    <FormInput type="text" placeholder="City, State" />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email" placeholder="contact@yourvenue.com" />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Phone</FormLabel>
                    <FormInput type="tel" placeholder="(123) 456-7890" />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Venue Type</FormLabel>
                    <FormSelect>
                      <option value="">Select venue type</option>
                      <option value="bar">Bar/Club</option>
                      <option value="concert">Concert Hall</option>
                      <option value="theater">Theater</option>
                      <option value="cafe">Café</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="other">Other</option>
                    </FormSelect>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Capacity</FormLabel>
                    <FormSelect>
                      <option value="">Select capacity</option>
                      <option value="small">Small (Under 100)</option>
                      <option value="medium">Medium (100-300)</option>
                      <option value="large">Large (300-1000)</option>
                      <option value="xl">Very Large (1000+)</option>
                    </FormSelect>
                  </FormGroup>
                  
                  <SignupButton as={Link} to="/venue-signup">Register Venue</SignupButton>
                </VenueSignupForm>
              </VenueSignupCard>
              
              <BenefitsCard>
                <BenefitsTitle>Venue Benefits</BenefitsTitle>
                <BenefitsList>
                  <BenefitItem>
                    <BenefitIcon>🔍</BenefitIcon>
                    <BenefitText>Discover pre-vetted independent artists</BenefitText>
                  </BenefitItem>
                  
                  <BenefitItem>
                    <BenefitIcon>📅</BenefitIcon>
                    <BenefitText>Simplified booking and scheduling</BenefitText>
                  </BenefitItem>
                  
                  <BenefitItem>
                    <BenefitIcon>👥</BenefitIcon>
                    <BenefitText>Access to artists' existing fan bases</BenefitText>
                  </BenefitItem>
                  
                  <BenefitItem>
                    <BenefitIcon>📊</BenefitIcon>
                    <BenefitText>Performance analytics and attendance data</BenefitText>
                  </BenefitItem>
                  
                  <BenefitItem>
                    <BenefitIcon>🎵</BenefitIcon>
                    <BenefitText>Diverse genre options for your audience</BenefitText>
                  </BenefitItem>
                  
                  <BenefitItem>
                    <BenefitIcon>💰</BenefitIcon>
                    <BenefitText>Increased revenue through new audiences</BenefitText>
                  </BenefitItem>
                </BenefitsList>
              </BenefitsCard>
              
              <ContactCard>
                <ContactTitle>Questions?</ContactTitle>
                <ContactDescription>Our venue relations team is here to help you get started.</ContactDescription>
                <ContactButton>Contact Venue Support</ContactButton>
              </ContactCard>
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
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`

const HeroButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  
  &:first-child {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.trustworthyNavy};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
  
  &:last-child {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
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

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  padding-bottom: ${({ theme }) => theme.space.xs};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`

// Venues
const VenueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const VenueCard = styled.div`
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

const VenueImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const VenueInfo = styled.div`
  padding: ${({ theme }) => theme.space.md};
`

const VenueName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const VenueType = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const VenueLocation = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const VenueActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.md};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const VenueButton = styled(Button)`
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

// Events
const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const EventCard = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`

const EventDate = styled.div`
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

const EventMonth = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const EventDay = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const EventInfo = styled.div`
  flex: 1;
`

const EventTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const EventDetails = styled.div``

const EventArtists = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const EventTime = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`

const EventActions = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: ${({ theme }) => theme.space.md};
    width: 100%;
  }
`

const EventButton = styled(Button)`
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

// Testimonials
const TestimonialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
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

// Affiliate Program
const AffiliateCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const AffiliateContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const AffiliateTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const AffiliateDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const AffiliateBenefits = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const AffiliateBenefit = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
`

const BenefitIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

const BenefitText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const AffiliateButton = styled(Button)`
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
`

const AffiliateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`

// Submission Form
const SubmissionFormCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const SubmissionFormImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`

const SubmissionFormContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const SubmissionFormTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SubmissionFormDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SubmissionFormFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const SubmissionFormFeature = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
`

const FeatureIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

const FeatureText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkText};
`

const SubmissionFormButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
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

// Sidebar
const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: -1;
  }
`

const VenueSignupCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const VenueSignupTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const VenueSignupDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const VenueSignupForm = styled.form``

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
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

const FormSelect = styled.select`
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

const SignupButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`

const BenefitsCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const BenefitsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.md};
`

const ContactCard = styled.div`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  color: white;
  text-align: center;
`

const ContactTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ContactDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ContactButton = styled(Button)`
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

export default VenuePortal
