import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import { useParams, useLocation } from 'react-router-dom'

const VenueSubmissionForm = () => {
  const { venueId } = useParams()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  
  // Form state
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    phone: '',
    genre: '',
    socialLinks: '',
    musicLinks: '',
    preferredDates: '',
    message: '',
    agreeToTerms: false,
    joinTrueFans: false
  })
  
  // Venue branding state
  const [venueBranding, setVenueBranding] = useState({
    name: queryParams.get('venueName') || 'Music Venue',
    primaryColor: queryParams.get('primaryColor') || '#FFD700',
    secondaryColor: queryParams.get('secondaryColor') || '#1A2B4C',
    logo: queryParams.get('logo') || null,
    backgroundImage: queryParams.get('bgImage') || null
  })
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    
    // Simulate API call
    setTimeout(() => {
      try {
        // In a real app, this would be an API call to submit the form
        console.log('Form submitted:', formData)
        setSubmitSuccess(true)
        setIsSubmitting(false)
      } catch (error) {
        setSubmitError('There was an error submitting your application. Please try again.')
        setIsSubmitting(false)
      }
    }, 1500)
  }
  
  // Reset form after successful submission
  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setFormData({
          artistName: '',
          email: '',
          phone: '',
          genre: '',
          socialLinks: '',
          musicLinks: '',
          preferredDates: '',
          message: '',
          agreeToTerms: false,
          joinTrueFans: false
        })
        setSubmitSuccess(false)
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [submitSuccess])
  
  // Generate dynamic styles based on venue branding
  const dynamicStyles = {
    primaryColor: venueBranding.primaryColor,
    secondaryColor: venueBranding.secondaryColor,
    backgroundImage: venueBranding.backgroundImage ? `url(${venueBranding.backgroundImage})` : 'none'
  }
  
  return (
    <FormWrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        backgroundImage: dynamicStyles.backgroundImage,
        backgroundColor: dynamicStyles.backgroundImage === 'none' ? '#f9f9f9' : 'transparent'
      }}
    >
      <FormContainer>
        <FormHeader style={{ backgroundColor: dynamicStyles.secondaryColor }}>
          {venueBranding.logo && (
            <VenueLogo src={venueBranding.logo} alt={`${venueBranding.name} logo`} />
          )}
          <FormTitle>{venueBranding.name} Live Music Submission</FormTitle>
          <FormSubtitle>Apply to perform at our venue</FormSubtitle>
        </FormHeader>
        
        {submitSuccess ? (
          <SuccessMessage>
            <SuccessIcon>✓</SuccessIcon>
            <SuccessTitle>Application Submitted!</SuccessTitle>
            <SuccessText>
              Thank you for your submission. {venueBranding.name} will review your application and contact you if there's a good fit.
              {formData.joinTrueFans && (
                <span> You'll also receive an email from TrueFans CONNECT with information about creating your artist account.</span>
              )}
            </SuccessText>
          </SuccessMessage>
        ) : (
          <SubmissionForm onSubmit={handleSubmit}>
            <FormSection>
              <SectionTitle>Artist Information</SectionTitle>
              
              <FormGroup>
                <FormLabel htmlFor="artistName">Artist/Band Name *</FormLabel>
                <FormInput
                  type="text"
                  id="artistName"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleInputChange}
                  required
                  placeholder="Your artist or band name"
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
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="phone">Phone Number</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <FormLabel htmlFor="genre">Music Genre *</FormLabel>
                <FormSelect
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your genre</option>
                  <option value="rock">Rock</option>
                  <option value="jazz">Jazz</option>
                  <option value="blues">Blues</option>
                  <option value="folk">Folk</option>
                  <option value="country">Country</option>
                  <option value="pop">Pop</option>
                  <option value="electronic">Electronic</option>
                  <option value="hip-hop">Hip Hop</option>
                  <option value="r-and-b">R&B</option>
                  <option value="classical">Classical</option>
                  <option value="world">World</option>
                  <option value="other">Other</option>
                </FormSelect>
              </FormGroup>
            </FormSection>
            
            <FormSection>
              <SectionTitle>Music & Social Media</SectionTitle>
              
              <FormGroup>
                <FormLabel htmlFor="socialLinks">Social Media Links</FormLabel>
                <FormTextarea
                  id="socialLinks"
                  name="socialLinks"
                  value={formData.socialLinks}
                  onChange={handleInputChange}
                  placeholder="Instagram, Facebook, Twitter, etc. (one per line)"
                  rows="3"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="musicLinks">Music Links *</FormLabel>
                <FormTextarea
                  id="musicLinks"
                  name="musicLinks"
                  value={formData.musicLinks}
                  onChange={handleInputChange}
                  required
                  placeholder="Spotify, SoundCloud, Bandcamp, YouTube, etc. (one per line)"
                  rows="3"
                />
              </FormGroup>
            </FormSection>
            
            <FormSection>
              <SectionTitle>Performance Details</SectionTitle>
              
              <FormGroup>
                <FormLabel htmlFor="preferredDates">Preferred Performance Dates</FormLabel>
                <FormTextarea
                  id="preferredDates"
                  name="preferredDates"
                  value={formData.preferredDates}
                  onChange={handleInputChange}
                  placeholder="List any specific dates or time periods you're available to perform"
                  rows="2"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Additional Information</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your act, performance requirements, or anything else we should know"
                  rows="4"
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
                  onChange={handleInputChange}
                  required
                />
                <CheckboxLabel htmlFor="agreeToTerms">
                  I agree that {venueBranding.name} may contact me about my submission *
                </CheckboxLabel>
              </CheckboxGroup>
              
              <CheckboxGroup>
                <CheckboxInput
                  type="checkbox"
                  id="joinTrueFans"
                  name="joinTrueFans"
                  checked={formData.joinTrueFans}
                  onChange={handleInputChange}
                />
                <CheckboxLabel htmlFor="joinTrueFans">
                  I'm interested in learning more about TrueFans CONNECT, a platform that helps independent artists receive direct support from fans
                </CheckboxLabel>
              </CheckboxGroup>
            </FormSection>
            
            {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
            
            <SubmitButton 
              type="submit" 
              disabled={isSubmitting}
              style={{ 
                backgroundColor: dynamicStyles.primaryColor,
                color: dynamicStyles.secondaryColor
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </SubmitButton>
            
            <PoweredBy>
              Powered by <PoweredByLink href="https://truefans.connect" target="_blank">TrueFans CONNECT</PoweredByLink>
            </PoweredBy>
          </SubmissionForm>
        )}
      </FormContainer>
    </FormWrapper>
  )
}

// Styled Components
const FormWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space.lg};
  background-size: cover;
  background-position: center;
`

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`

const FormHeader = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  text-align: center;
  color: white;
`

const VenueLogo = styled.img`
  max-width: 200px;
  max-height: 80px;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FormTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const FormSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
`

const SubmissionForm = styled.form`
  padding: ${({ theme }) => theme.space.lg};
`

const FormSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.space.xl};
  }
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.xs};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
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

const SubmitButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const PoweredBy = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`

const PoweredByLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const SuccessMessage = styled.div`
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
`

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin: 0 auto ${({ theme }) => theme.space.lg};
`

const SuccessTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SuccessText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`

const ErrorMessage = styled.div`
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => `${theme.colors.error}15`};
  color: ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
`

export default VenueSubmissionForm
