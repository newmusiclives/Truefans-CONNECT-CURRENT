import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const VenuePortalInfo = () => {
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
            </HeroActions>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <MainContent>
            <Section>
              <SectionTitle>Benefits for Venue Owners</SectionTitle>
              <BenefitsGrid>
                <BenefitCard>
                  <BenefitIcon>👥</BenefitIcon>
                  <BenefitTitle>Built-In Audience</BenefitTitle>
                  <BenefitDescription>
                    Our artists bring their existing fan bases to your venue. When you book through TrueFans CONNECT, you're not just getting a performer—you're getting their entire community of dedicated supporters.
                  </BenefitDescription>
                </BenefitCard>
                
                <BenefitCard>
                  <BenefitIcon>📊</BenefitIcon>
                  <BenefitTitle>Performance Analytics</BenefitTitle>
                  <BenefitDescription>
                    Gain valuable insights into attendance, audience demographics, and revenue for each performance. Use data to make informed decisions about which artists to book again and which genres resonate with your audience.
                  </BenefitDescription>
                </BenefitCard>
                
                <BenefitCard>
                  <BenefitIcon>🎵</BenefitIcon>
                  <BenefitTitle>Genre Diversity</BenefitTitle>
                  <BenefitDescription>
                    Easily discover artists across multiple genres to create a diverse calendar that appeals to different audience segments. Expand your venue's appeal beyond your typical programming.
                  </BenefitDescription>
                </BenefitCard>
                
                <BenefitCard>
                  <BenefitIcon>💰</BenefitIcon>
                  <BenefitTitle>Revenue Growth</BenefitTitle>
                  <BenefitDescription>
                    Venues using our platform report an average 35% increase in attendance and 28% increase in bar/food sales when booking our independent artists compared to traditional booking methods.
                  </BenefitDescription>
                </BenefitCard>
              </BenefitsGrid>
            </Section>
            
            <Section>
              <SectionTitle>How It Works</SectionTitle>
              <StepsContainer>
                <Step>
                  <StepNumber>1</StepNumber>
                  <StepContent>
                    <StepTitle>Register Your Venue</StepTitle>
                    <StepDescription>
                      Create your venue profile with details about your space, capacity, available equipment, and booking preferences. This helps us match you with compatible artists.
                    </StepDescription>
                  </StepContent>
                </Step>
                
                <Step>
                  <StepNumber>2</StepNumber>
                  <StepContent>
                    <StepTitle>Browse Artist Profiles</StepTitle>
                    <StepDescription>
                      Explore our database of independent artists filtered by genre, location, draw capacity, and availability. Review their media, past performances, and fan engagement metrics.
                    </StepDescription>
                  </StepContent>
                </Step>
                
                <Step>
                  <StepNumber>3</StepNumber>
                  <StepContent>
                    <StepTitle>Send Booking Requests</StepTitle>
                    <StepDescription>
                      When you find artists that match your needs, send them booking requests with your proposed dates, compensation, and other details. Artists can accept, decline, or propose alternatives.
                    </StepDescription>
                  </StepContent>
                </Step>
                
                <Step>
                  <StepNumber>4</StepNumber>
                  <StepContent>
                    <StepTitle>Confirm and Promote</StepTitle>
                    <StepDescription>
                      Once an artist accepts, the booking is confirmed in our system. Both you and the artist can promote the event to your respective audiences through our integrated marketing tools.
                    </StepDescription>
                  </StepContent>
                </Step>
                
                <Step>
                  <StepNumber>5</StepNumber>
                  <StepContent>
                    <StepTitle>Host the Event</StepTitle>
                    <StepDescription>
                      Welcome the artist and their fans to your venue. Our system can help with check-ins, ticket scanning, and attendance tracking if needed.
                    </StepDescription>
                  </StepContent>
                </Step>
                
                <Step>
                  <StepNumber>6</StepNumber>
                  <StepContent>
                    <StepTitle>Review and Analyze</StepTitle>
                    <StepDescription>
                      After the event, both parties can leave reviews. You'll receive detailed analytics about attendance, revenue, and audience engagement to help inform future booking decisions.
                    </StepDescription>
                  </StepContent>
                </Step>
              </StepsContainer>
            </Section>
            
            <Section>
              <SectionTitle>Exclusive Venue Features</SectionTitle>
              <FeaturesContainer>
                <FeatureCard>
                  <FeatureImage src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Affiliate Program" />
                  <FeatureContent>
                    <FeatureTitle>Two-Tier Affiliate Program</FeatureTitle>
                    <FeatureDescription>
                      Earn 2.5% of all donations received by artists you refer to the platform, plus 2.5% from artists they refer. Create a passive income stream while supporting independent music.
                    </FeatureDescription>
                    <FeatureButton as={Link} to="/affiliate-program">Find Out About The Affiliate Program</FeatureButton>
                  </FeatureContent>
                </FeatureCard>
                
                <FeatureCard reversed>
                  <FeatureContent>
                    <FeatureTitle>Customizable Submission Form</FeatureTitle>
                    <FeatureDescription>
                      Get a branded artist submission form that matches your venue's aesthetic. Embed it on your website to collect submissions from interested artists and funnel them directly into your TrueFans CONNECT dashboard.
                    </FeatureDescription>
                    <FeatureList>
                      <FeatureListItem>
                        <FeatureListIcon>🎨</FeatureListIcon>
                        <FeatureListText>Customize colors and branding</FeatureListText>
                      </FeatureListItem>
                      <FeatureListItem>
                        <FeatureListIcon>📱</FeatureListIcon>
                        <FeatureListText>Mobile-responsive design</FeatureListText>
                      </FeatureListItem>
                      <FeatureListItem>
                        <FeatureListIcon>📋</FeatureListIcon>
                        <FeatureListText>Collect exactly the information you need</FeatureListText>
                      </FeatureListItem>
                    </FeatureList>
                  </FeatureContent>
                  <FeatureImage src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Submission Form" />
                </FeatureCard>
                
                <FeatureCard>
                  <FeatureImage src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Marketing Tools" />
                  <FeatureContent>
                    <FeatureTitle>Integrated Marketing Tools</FeatureTitle>
                    <FeatureDescription>
                      Promote your events with our suite of marketing tools designed specifically for music venues. Create professional event pages, social media graphics, and email campaigns with just a few clicks.
                    </FeatureDescription>
                    <FeatureList>
                      <FeatureListItem>
                        <FeatureListIcon>🎟️</FeatureListIcon>
                        <FeatureListText>Ticketing integration</FeatureListText>
                      </FeatureListItem>
                      <FeatureListItem>
                        <FeatureListIcon>📱</FeatureListIcon>
                        <FeatureListText>Social media campaign templates</FeatureListText>
                      </FeatureListItem>
                      <FeatureListItem>
                        <FeatureListIcon>📧</FeatureListIcon>
                        <FeatureListText>Automated email marketing</FeatureListText>
                      </FeatureListItem>
                    </FeatureList>
                  </FeatureContent>
                </FeatureCard>
              </FeaturesContainer>
            </Section>
            
            <Section>
              <SectionTitle>Venue Success Stories</SectionTitle>
              <TestimonialsList>
                <TestimonialCard>
                  <TestimonialContent>
                    "Since joining TrueFans CONNECT, we've filled our calendar with diverse, high-quality acts that have brought in new audiences. Our bar sales have increased by 45% on nights featuring platform artists, and we've built relationships with performers who now make our venue a regular stop on their tours."
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
                    "As a small venue in a competitive market, finding reliable talent was always a challenge. TrueFans CONNECT has connected us with artists who not only deliver amazing performances but also bring their dedicated fans with them. The platform's analytics have helped us understand which genres work best for our space."
                  </TestimonialContent>
                  <TestimonialAuthor>
                    <TestimonialAvatar src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="Maria Rodriguez" />
                    <TestimonialInfo>
                      <TestimonialName>Maria Rodriguez</TestimonialName>
                      <TestimonialRole>Events Manager, Soundwave Lounge</TestimonialRole>
                    </TestimonialInfo>
                  </TestimonialAuthor>
                </TestimonialCard>
                
                <TestimonialCard>
                  <TestimonialContent>
                    "The affiliate program has been an unexpected revenue stream for us. We've earned over $5,000 in passive income just by referring artists to the platform. It's a win-win: we help musicians find more opportunities, and we get rewarded for growing the community."
                  </TestimonialContent>
                  <TestimonialAuthor>
                    <TestimonialAvatar src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" alt="David Johnson" />
                    <TestimonialInfo>
                      <TestimonialName>David Johnson</TestimonialName>
                      <TestimonialRole>Booking Agent, Harmony Hall</TestimonialRole>
                    </TestimonialInfo>
                  </TestimonialAuthor>
                </TestimonialCard>
              </TestimonialsList>
            </Section>
            
            <Section>
              <CTASection>
                <CTAContent>
                  <CTATitle>Ready to Transform Your Venue?</CTATitle>
                  <CTADescription>
                    Join hundreds of successful venues that have increased their bookings, attendance, and revenue with TrueFans CONNECT.
                  </CTADescription>
                  <CTAActions>
                    <CTAButton as={Link} to="/venue-signup">Register Your Venue</CTAButton>
                  </CTAActions>
                </CTAContent>
              </CTASection>
            </Section>
            
            <Section>
              <FAQSection>
                <FAQTitle>Frequently Asked Questions</FAQTitle>
                <FAQList>
                  <FAQItem>
                    <FAQQuestion>How much does it cost to register my venue?</FAQQuestion>
                    <FAQAnswer>
                      Basic registration is completely free. You can create a venue profile, receive up to 5 booking requests per month, and access our community of independent artists without any cost. For more features and unlimited bookings, we offer affordable Professional and Enterprise plans.
                    </FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>What types of venues can join?</FAQQuestion>
                    <FAQAnswer>
                      We welcome all types of music venues including bars, clubs, concert halls, theaters, cafés, restaurants with performance spaces, and non-traditional venues. If you host live music performances, we'd love to have you in our network.
                    </FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>How do you vet the artists on your platform?</FAQQuestion>
                    <FAQAnswer>
                      All artists go through a multi-step verification process that includes reviewing their performance history, media quality, professionalism, and fan engagement metrics. We also collect feedback from venues after each performance to ensure ongoing quality.
                    </FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>Can I cancel my subscription at any time?</FAQQuestion>
                    <FAQAnswer>
                      Yes, you can cancel your paid subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you'll maintain access to your paid features until the end of your current billing cycle, after which you'll be downgraded to the Basic plan.
                    </FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>How does the affiliate program work?</FAQQuestion>
                    <FAQAnswer>
                      When you refer an artist to our platform using your unique referral link, you earn 2.5% of all donations they receive through TrueFans CONNECT. Additionally, you earn 2.5% from any artists they refer (second-tier). There's no cap on your earnings, and payments are made monthly.
                    </FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>Do you handle ticketing and payments?</FAQQuestion>
                    <FAQAnswer>
                      Our Professional and Enterprise plans include integration with popular ticketing platforms. We can also process direct payments between venues and artists if desired, with a small processing fee. Many venues prefer to handle their own ticketing and payments, which is also perfectly fine.
                    </FAQAnswer>
                  </FAQItem>
                </FAQList>
              </FAQSection>
            </Section>
          </MainContent>
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
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
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

// Benefits
const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
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
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const BenefitDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

// How It Works
const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-radius: 50%;
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.space.md};
  }
`

const StepContent = styled.div`
  flex: 1;
`

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const StepDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

// Features
const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const FeatureCard = styled.div`
  display: grid;
  grid-template-columns: ${({ reversed }) => reversed ? '1fr 1fr' : '1fr 1fr'};
  gap: ${({ theme }) => theme.space.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  
  ${({ reversed }) => reversed && `
    @media (min-width: 769px) {
      direction: rtl;
      
      > * {
        direction: ltr;
      }
    }
  `}
`

const FeatureContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`

const FeatureButton = styled(Button)`
  align-self: flex-start;
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

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.space.lg} 0;
`

const FeatureListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const FeatureListIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

const FeatureListText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
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

// CTA
const CTASection = styled.div`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  color: white;
  text-align: center;
`

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const CTATitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CTAActions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`

const CTAButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

// FAQ
const FAQSection = styled.div``

const FAQTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  text-align: center;
`

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const FAQItem = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const FAQQuestion = styled.h4`
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

export default VenuePortalInfo
