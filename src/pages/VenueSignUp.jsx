import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const VenueSignUp = () => {
  const [formData, setFormData] = useState({
    venueName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    venueType: 'bar',
    capacity: '',
    description: '',
    website: '',
    socialMedia: '',
    agreeToTerms: false
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    
    // Reset form after submission
    setFormData({
      venueName: '',
      contactName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      venueType: 'bar',
      capacity: '',
      description: '',
      website: '',
      socialMedia: '',
      agreeToTerms: false
    })
  }
  
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Register Your Venue</HeroTitle>
            <HeroSubtitle>Join our network of venues and discover talented independent artists</HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnLayout>
            <SignupFormContainer>
              <SectionTitle>Venue Registration</SectionTitle>
              {formSubmitted ? (
                <SuccessMessage>
                  <SuccessIcon>✓</SuccessIcon>
                  <SuccessText>
                    <SuccessTitle>Registration Successful!</SuccessTitle>
                    <SuccessDescription>
                      Thank you for registering your venue with TrueFans CONNECT™. Our team will review your information and contact you shortly to complete the setup process.
                    </SuccessDescription>
                  </SuccessText>
                </SuccessMessage>
              ) : (
                <SignupForm onSubmit={handleSubmit}>
                  <FormSection>
                    <SectionSubtitle>Venue Information</SectionSubtitle>
                    
                    <FormGroup>
                      <FormLabel htmlFor="venueName">Venue Name *</FormLabel>
                      <FormInput
                        type="text"
                        id="venueName"
                        name="venueName"
                        value={formData.venueName}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormRow>
                      <FormGroup>
                        <FormLabel htmlFor="venueType">Venue Type *</FormLabel>
                        <FormSelect
                          id="venueType"
                          name="venueType"
                          value={formData.venueType}
                          onChange={handleChange}
                          required
                        >
                          <option value="bar">Bar/Pub</option>
                          <option value="club">Club</option>
                          <option value="concert-hall">Concert Hall</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="cafe">Café</option>
                          <option value="theater">Theater</option>
                          <option value="outdoor">Outdoor Venue</option>
                          <option value="other">Other</option>
                        </FormSelect>
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel htmlFor="capacity">Capacity</FormLabel>
                        <FormInput
                          type="number"
                          id="capacity"
                          name="capacity"
                          value={formData.capacity}
                          onChange={handleChange}
                          placeholder="Approximate"
                        />
                      </FormGroup>
                    </FormRow>
                    
                    <FormGroup>
                      <FormLabel htmlFor="description">Venue Description *</FormLabel>
                      <FormTextarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        required
                        placeholder="Tell us about your venue, the types of music you feature, and your audience"
                      />
                    </FormGroup>
                  </FormSection>
                  
                  <FormSection>
                    <SectionSubtitle>Contact Information</SectionSubtitle>
                    
                    <FormGroup>
                      <FormLabel htmlFor="contactName">Contact Name *</FormLabel>
                      <FormInput
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormRow>
                      <FormGroup>
                        <FormLabel htmlFor="email">Email Address *</FormLabel>
                        <FormInput
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel htmlFor="phone">Phone Number *</FormLabel>
                        <FormInput
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </FormRow>
                  </FormSection>
                  
                  <FormSection>
                    <SectionSubtitle>Venue Location</SectionSubtitle>
                    
                    <FormGroup>
                      <FormLabel htmlFor="address">Street Address *</FormLabel>
                      <FormInput
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormRow>
                      <FormGroup>
                        <FormLabel htmlFor="city">City *</FormLabel>
                        <FormInput
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel htmlFor="state">State/Province *</FormLabel>
                        <FormInput
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel htmlFor="zip">ZIP/Postal Code *</FormLabel>
                        <FormInput
                          type="text"
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </FormRow>
                  </FormSection>
                  
                  <FormSection>
                    <SectionSubtitle>Online Presence</SectionSubtitle>
                    
                    <FormGroup>
                      <FormLabel htmlFor="website">Website</FormLabel>
                      <FormInput
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://"
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="socialMedia">Social Media Links</FormLabel>
                      <FormTextarea
                        id="socialMedia"
                        name="socialMedia"
                        value={formData.socialMedia}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Instagram, Facebook, Twitter, etc. (one per line)"
                      />
                    </FormGroup>
                  </FormSection>
                  
                  <FormSection>
                    <CheckboxGroup>
                      <CheckboxInput
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                      />
                      <CheckboxLabel htmlFor="agreeToTerms">
                        I agree to the <TermsLink to="/terms">Terms of Service</TermsLink> and <PrivacyLink to="/privacy">Privacy Policy</PrivacyLink> *
                      </CheckboxLabel>
                    </CheckboxGroup>
                  </FormSection>
                  
                  <SubmitButton type="submit">Register Venue</SubmitButton>
                </SignupForm>
              )}
            </SignupFormContainer>
            
            <BenefitsContainer>
              <SectionTitle>Venue Benefits</SectionTitle>
              
              <BenefitsList>
                <BenefitItem>
                  <BenefitIcon>🎵</BenefitIcon>
                  <BenefitContent>
                    <BenefitTitle>Access to Talented Artists</BenefitTitle>
                    <BenefitDescription>
                      Connect with a diverse pool of independent artists across various genres, all vetted for quality and professionalism.
                    </BenefitDescription>
                  </BenefitContent>
                </BenefitItem>
                
                <BenefitItem>
                  <BenefitIcon>📋</BenefitIcon>
                  <BenefitContent>
                    <BenefitTitle>Customizable Submission Forms</BenefitTitle>
                    <BenefitDescription>
                      Create branded artist submission forms tailored to your venue's specific requirements and booking process.
                    </BenefitDescription>
                  </BenefitContent>
                </BenefitItem>
                
                <BenefitItem>
                  <BenefitIcon>💰</BenefitIcon>
                  <BenefitContent>
                    <BenefitTitle>Affiliate Revenue</BenefitTitle>
                    <BenefitDescription>
                      Earn 2.5% from artists you refer to the platform, plus an additional 2.5% from their referrals, creating a passive income stream.
                    </BenefitDescription>
                  </BenefitContent>
                </BenefitItem>
                
                <BenefitItem>
                  <BenefitIcon>📊</BenefitIcon>
                  <BenefitContent>
                    <BenefitTitle>Analytics Dashboard</BenefitTitle>
                    <BenefitDescription>
                      Track submission metrics, audience demographics, and performance data to make informed booking decisions.
                    </BenefitDescription>
                  </BenefitContent>
                </BenefitItem>
                
                <BenefitItem>
                  <BenefitIcon>🔍</BenefitIcon>
                  <BenefitContent>
                    <BenefitTitle>Artist Discovery Tools</BenefitTitle>
                    <BenefitDescription>
                      Search and filter artists by genre, location, audience size, and more to find the perfect fit for your venue.
                    </BenefitDescription>
                  </BenefitContent>
                </BenefitItem>
                
                <BenefitItem>
                  <BenefitIcon>📱</BenefitIcon>
                  <BenefitContent>
                    <BenefitTitle>Venue Profile</BenefitTitle>
                    <BenefitDescription>
                      Showcase your venue to artists and music fans with a professional profile page highlighting your space and events.
                    </BenefitDescription>
                  </BenefitContent>
                </BenefitItem>
              </BenefitsList>
              
              <TestimonialSection>
                <TestimonialCard>
                  <TestimonialContent>
                    "TrueFans CONNECT™ has transformed our booking process. We've discovered amazing talent we wouldn't have found otherwise, and our audiences love the fresh, diverse lineup of artists."
                  </TestimonialContent>
                  <TestimonialAuthor>
                    <TestimonialAvatar src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="James Wilson" />
                    <TestimonialInfo>
                      <TestimonialName>James Wilson</TestimonialName>
                      <TestimonialRole>Booking Manager, The Sound Lounge</TestimonialRole>
                    </TestimonialInfo>
                  </TestimonialAuthor>
                </TestimonialCard>
              </TestimonialSection>
              
              <SupportSection>
                <SupportTitle>Need Help?</SupportTitle>
                <SupportText>
                  Our venue support team is available to answer any questions and guide you through the registration process.
                </SupportText>
                <SupportContact>
                  <SupportEmail href="mailto:venues@truefans.connect">venues@truefans.connect</SupportEmail>
                  <SupportPhone href="tel:+15551234567">(555) 123-4567</SupportPhone>
                </SupportContact>
              </SupportSection>
            </BenefitsContainer>
          </TwoColumnLayout>
        </Container>
      </ContentSection>
    </PageTransition>
  )
}

// Styled Components
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

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SectionSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.xs};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

// Signup Form
const SignupFormContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const FormSection = styled.div``

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.md};
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
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
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
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CheckboxInput = styled.input`
  margin-top: 5px;
  margin-right: ${({ theme }) => theme.space.sm};
`

const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.4;
`

const TermsLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const PrivacyLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space.md};
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

// Success Message
const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.space.xl} 0;
`

const SuccessIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SuccessText = styled.div``

const SuccessTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SuccessDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  max-width: 600px;
`

// Benefits Section
const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const BenefitIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-right: ${({ theme }) => theme.space.md};
  flex-shrink: 0;
`

const BenefitContent = styled.div`
  flex: 1;
`

const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const BenefitDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

// Testimonial Section
const TestimonialSection = styled.div`
  margin-top: ${({ theme }) => theme.space.md};
`

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 60px;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-family: Georgia, serif;
    opacity: 0.5;
  }
`

const TestimonialContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-style: italic;
  position: relative;
  z-index: 1;
  padding-top: ${({ theme }) => theme.space.md};
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: ${({ theme }) => theme.space.md};
`

const TestimonialAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.md};
  border: 2px solid ${({ theme }) => theme.colors.primary};
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

// Support Section
const SupportSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  text-align: center;
`

const SupportTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SupportText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SupportContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`

const SupportEmail = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  &:hover {
    text-decoration: underline;
  }
`

const SupportPhone = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  
  &:hover {
    text-decoration: underline;
  }
`

export default VenueSignUp
