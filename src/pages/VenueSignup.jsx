import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import { SketchPicker } from 'react-color'

const VenueSignup = () => {
  // Form state
  const [formData, setFormData] = useState({
    venueName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    website: '',
    venueType: '',
    capacity: '',
    description: '',
    logo: null,
    backgroundImage: null,
    agreeToTerms: false
  })
  
  // Branding state
  const [branding, setBranding] = useState({
    primaryColor: '#FFD700',
    secondaryColor: '#1A2B4C',
    showPrimaryPicker: false,
    showSecondaryPicker: false
  })
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [embedCode, setEmbedCode] = useState('')
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target
    
    if (type === 'file') {
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setFormData({
            ...formData,
            [name]: reader.result
          })
        }
        reader.readAsDataURL(files[0])
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      })
    }
  }
  
  // Handle color changes
  const handleColorChange = (color, type) => {
    setBranding({
      ...branding,
      [type]: color.hex
    })
  }
  
  // Toggle color picker
  const toggleColorPicker = (pickerName) => {
    setBranding({
      ...branding,
      [pickerName]: !branding[pickerName]
    })
  }
  
  // Generate embed code
  const generateEmbedCode = () => {
    const baseUrl = 'https://truefans.connect/venue-submission'
    const params = new URLSearchParams()
    
    params.append('venueId', 'YOUR_VENUE_ID') // This would be dynamically generated in production
    params.append('venueName', formData.venueName)
    params.append('primaryColor', branding.primaryColor)
    params.append('secondaryColor', branding.secondaryColor)
    
    if (formData.logo) {
      params.append('logo', formData.logo)
    }
    
    if (formData.backgroundImage) {
      params.append('bgImage', formData.backgroundImage)
    }
    
    const iframeUrl = `${baseUrl}?${params.toString()}`
    
    const code = `<iframe 
  src="${iframeUrl}" 
  width="100%" 
  height="800" 
  frameborder="0" 
  style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
  title="${formData.venueName} Live Music Submission Form"
></iframe>`
    
    setEmbedCode(code)
  }
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setSubmitError('Passwords do not match')
      return
    }
    
    setIsSubmitting(true)
    setSubmitError(null)
    
    // Simulate API call
    setTimeout(() => {
      try {
        // In a real app, this would be an API call to create the venue account
        console.log('Venue signup:', formData)
        console.log('Branding:', branding)
        
        // Generate embed code
        generateEmbedCode()
        
        setSubmitSuccess(true)
        setIsSubmitting(false)
      } catch (error) {
        setSubmitError('There was an error creating your venue account. Please try again.')
        setIsSubmitting(false)
      }
    }, 1500)
  }
  
  // Copy embed code to clipboard
  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode)
      .then(() => {
        alert('Embed code copied to clipboard!')
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }
  
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <PageHeader>
          <PageTitle>Venue Signup</PageTitle>
          <PageDescription>Join TrueFans CONNECT and discover talented independent artists for your venue</PageDescription>
        </PageHeader>
        
        {submitSuccess ? (
          <SuccessContainer>
            <SuccessHeader>
              <SuccessIcon>✓</SuccessIcon>
              <SuccessTitle>Venue Account Created!</SuccessTitle>
              <SuccessDescription>
                Your venue account has been successfully created. You can now use the embed code below to add a live music submission form to your website.
              </SuccessDescription>
            </SuccessHeader>
            
            <EmbedCodeSection>
              <SectionTitle>Your Submission Form Embed Code</SectionTitle>
              <EmbedPreview>
                <EmbedCodeBox>
                  {embedCode}
                </EmbedCodeBox>
                <CopyButton onClick={copyEmbedCode}>Copy Code</CopyButton>
              </EmbedPreview>
              
              <PreviewTitle>Preview of Your Submission Form</PreviewTitle>
              <FormPreview>
                <PreviewHeader style={{ backgroundColor: branding.secondaryColor }}>
                  {formData.logo && <PreviewLogo src={formData.logo} alt={`${formData.venueName} logo`} />}
                  <PreviewVenueName>{formData.venueName} Live Music Submission</PreviewVenueName>
                </PreviewHeader>
                <PreviewBody>
                  <PreviewFormGroup>
                    <PreviewLabel>Artist/Band Name</PreviewLabel>
                    <PreviewInput placeholder="Your artist or band name" />
                  </PreviewFormGroup>
                  <PreviewButton style={{ 
                    backgroundColor: branding.primaryColor,
                    color: branding.secondaryColor
                  }}>
                    Submit Application
                  </PreviewButton>
                </PreviewBody>
              </FormPreview>
              
              <NextStepsSection>
                <SectionTitle>Next Steps</SectionTitle>
                <NextStepsList>
                  <NextStep>
                    <StepNumber>1</StepNumber>
                    <StepContent>
                      <StepTitle>Add the form to your website</StepTitle>
                      <StepDescription>Copy the embed code above and paste it into your venue's website where you want the submission form to appear.</StepDescription>
                    </StepContent>
                  </NextStep>
                  
                  <NextStep>
                    <StepNumber>2</StepNumber>
                    <StepContent>
                      <StepTitle>Start receiving submissions</StepTitle>
                      <StepDescription>Artists will be able to submit their information through the form. You'll receive email notifications for each submission.</StepDescription>
                    </StepContent>
                  </NextStep>
                  
                  <NextStep>
                    <StepNumber>3</StepNumber>
                    <StepContent>
                      <StepTitle>Earn affiliate commissions</StepTitle>
                      <StepDescription>When artists you discover join TrueFans CONNECT, you'll earn 2.5% of all their donations, plus 2.5% from artists they refer.</StepDescription>
                    </StepContent>
                  </NextStep>
                </NextStepsList>
              </NextStepsSection>
              
              <DashboardLink>
                <DashboardButton>Go to Venue Dashboard</DashboardButton>
              </DashboardLink>
            </EmbedCodeSection>
          </SuccessContainer>
        ) : (
          <SignupFormContainer>
            <FormTabs>
              <FormTab active={true}>Venue Information</FormTab>
              <FormTabDivider />
              <FormTab active={false}>Submission Form Branding</FormTab>
            </FormTabs>
            
            <SignupForm onSubmit={handleSubmit}>
              <TwoColumnLayout>
                <FormColumn>
                  <FormSection>
                    <SectionTitle>Venue Details</SectionTitle>
                    
                    <FormGroup>
                      <FormLabel htmlFor="venueName">Venue Name *</FormLabel>
                      <FormInput
                        type="text"
                        id="venueName"
                        name="venueName"
                        value={formData.venueName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your venue name"
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
                          placeholder="contact@yourvenue.com"
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel htmlFor="phone">Phone Number *</FormLabel>
                        <FormInput
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="(123) 456-7890"
                        />
                      </FormGroup>
                    </FormRow>
                    
                    <FormGroup>
                      <FormLabel htmlFor="website">Website</FormLabel>
                      <FormInput
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://yourvenue.com"
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="address">Street Address *</FormLabel>
                      <FormInput
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="123 Music Ave"
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
                          onChange={handleInputChange}
                          required
                          placeholder="Nashville"
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel htmlFor="state">State *</FormLabel>
                        <FormInput
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          placeholder="TN"
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel htmlFor="zipCode">Zip Code *</FormLabel>
                        <FormInput
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          placeholder="37203"
                        />
                      </FormGroup>
                    </FormRow>
                  </FormSection>
                  
                  <FormSection>
                    <SectionTitle>Venue Specifications</SectionTitle>
                    
                    <FormRow>
                      <FormGroup>
                        <FormLabel htmlFor="venueType">Venue Type *</FormLabel>
                        <FormSelect
                          id="venueType"
                          name="venueType"
                          value={formData.venueType}
                          onChange={handleInputChange}
                          required
                        >
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
                        <FormLabel htmlFor="capacity">Capacity *</FormLabel>
                        <FormSelect
                          id="capacity"
                          name="capacity"
                          value={formData.capacity}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select capacity</option>
                          <option value="small">Small (Under 100)</option>
                          <option value="medium">Medium (100-300)</option>
                          <option value="large">Large (300-1000)</option>
                          <option value="xl">Very Large (1000+)</option>
                        </FormSelect>
                      </FormGroup>
                    </FormRow>
                    
                    <FormGroup>
                      <FormLabel htmlFor="description">Venue Description *</FormLabel>
                      <FormTextarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your venue, the types of music you feature, your audience, etc."
                        rows="4"
                      />
                    </FormGroup>
                  </FormSection>
                  
                  <FormSection>
                    <SectionTitle>Account Security</SectionTitle>
                    
                    <FormRow>
                      <FormGroup>
                        <FormLabel htmlFor="password">Password *</FormLabel>
                        <FormInput
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          placeholder="Create a secure password"
                          minLength="8"
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <FormLabel htmlFor="confirmPassword">Confirm Password *</FormLabel>
                        <FormInput
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                          placeholder="Confirm your password"
                          minLength="8"
                        />
                      </FormGroup>
                    </FormRow>
                  </FormSection>
                </FormColumn>
                
                <FormColumn>
                  <FormSection>
                    <SectionTitle>Submission Form Branding</SectionTitle>
                    <BrandingDescription>
                      Customize how your live music submission form will look to match your venue's branding.
                    </BrandingDescription>
                    
                    <FormGroup>
                      <FormLabel htmlFor="logo">Venue Logo</FormLabel>
                      <FileUploadContainer>
                        <FileUploadLabel>
                          {formData.logo ? 'Change Logo' : 'Upload Logo'}
                          <FileInput
                            type="file"
                            id="logo"
                            name="logo"
                            accept="image/*"
                            onChange={handleInputChange}
                          />
                        </FileUploadLabel>
                        {formData.logo && (
                          <FilePreview>
                            <PreviewImage src={formData.logo} alt="Logo preview" />
                            <RemoveButton 
                              onClick={() => setFormData({...formData, logo: null})}
                              type="button"
                            >
                              Remove
                            </RemoveButton>
                          </FilePreview>
                        )}
                      </FileUploadContainer>
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="backgroundImage">Background Image (Optional)</FormLabel>
                      <FileUploadContainer>
                        <FileUploadLabel>
                          {formData.backgroundImage ? 'Change Image' : 'Upload Image'}
                          <FileInput
                            type="file"
                            id="backgroundImage"
                            name="backgroundImage"
                            accept="image/*"
                            onChange={handleInputChange}
                          />
                        </FileUploadLabel>
                        {formData.backgroundImage && (
                          <FilePreview>
                            <PreviewImage src={formData.backgroundImage} alt="Background preview" />
                            <RemoveButton 
                              onClick={() => setFormData({...formData, backgroundImage: null})}
                              type="button"
                            >
                              Remove
                            </RemoveButton>
                          </FilePreview>
                        )}
                      </FileUploadContainer>
                    </FormGroup>
                    
                    <ColorPickersContainer>
                      <ColorPickerGroup>
                        <ColorPickerLabel>Primary Color (Buttons, Accents)</ColorPickerLabel>
                        <ColorPreviewButton 
                          type="button"
                          style={{ backgroundColor: branding.primaryColor }}
                          onClick={() => toggleColorPicker('showPrimaryPicker')}
                        >
                          {branding.primaryColor}
                        </ColorPreviewButton>
                        {branding.showPrimaryPicker && (
                          <ColorPickerPopover>
                            <ColorPickerCover onClick={() => toggleColorPicker('showPrimaryPicker')} />
                            <SketchPicker 
                              color={branding.primaryColor}
                              onChange={(color) => handleColorChange(color, 'primaryColor')}
                            />
                          </ColorPickerPopover>
                        )}
                      </ColorPickerGroup>
                      
                      <ColorPickerGroup>
                        <ColorPickerLabel>Secondary Color (Header, Text)</ColorPickerLabel>
                        <ColorPreviewButton 
                          type="button"
                          style={{ backgroundColor: branding.secondaryColor }}
                          onClick={() => toggleColorPicker('showSecondaryPicker')}
                        >
                          {branding.secondaryColor}
                        </ColorPreviewButton>
                        {branding.showSecondaryPicker && (
                          <ColorPickerPopover>
                            <ColorPickerCover onClick={() => toggleColorPicker('showSecondaryPicker')} />
                            <SketchPicker 
                              color={branding.secondaryColor}
                              onChange={(color) => handleColorChange(color, 'secondaryColor')}
                            />
                          </ColorPickerPopover>
                        )}
                      </ColorPickerGroup>
                    </ColorPickersContainer>
                    
                    <FormPreviewSection>
                      <PreviewLabel>Form Preview</PreviewLabel>
                      <FormPreview>
                        <PreviewHeader style={{ backgroundColor: branding.secondaryColor }}>
                          {formData.logo && <PreviewLogo src={formData.logo} alt={`${formData.venueName} logo`} />}
                          <PreviewVenueName>
                            {formData.venueName ? `${formData.venueName} Live Music Submission` : 'Venue Live Music Submission'}
                          </PreviewVenueName>
                        </PreviewHeader>
                        <PreviewBody>
                          <PreviewFormGroup>
                            <PreviewLabel>Artist/Band Name</PreviewLabel>
                            <PreviewInput placeholder="Your artist or band name" />
                          </PreviewFormGroup>
                          <PreviewButton style={{ 
                            backgroundColor: branding.primaryColor,
                            color: branding.secondaryColor
                          }}>
                            Submit Application
                          </PreviewButton>
                        </PreviewBody>
                      </FormPreview>
                    </FormPreviewSection>
                  </FormSection>
                  
                  <FormSection>
                    <AffiliateInfo>
                      <InfoIcon>💰</InfoIcon>
                      <InfoContent>
                        <InfoTitle>Earn as an Affiliate</InfoTitle>
                        <InfoText>
                          When artists you discover join TrueFans CONNECT, you'll earn 2.5% of all their donations, plus 2.5% from artists they refer.
                        </InfoText>
                      </InfoContent>
                    </AffiliateInfo>
                  </FormSection>
                </FormColumn>
              </TwoColumnLayout>
              
              <TermsSection>
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
                    I agree to the <TermsLink href="#" target="_blank">Terms of Service</TermsLink> and <TermsLink href="#" target="_blank">Privacy Policy</TermsLink> *
                  </CheckboxLabel>
                </CheckboxGroup>
              </TermsSection>
              
              {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
              
              <SubmitButtonContainer>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Creating Account...' : 'Create Venue Account'}
                </SubmitButton>
              </SubmitButtonContainer>
            </SignupForm>
          </SignupFormContainer>
        )}
      </Container>
    </PageWrapper>
  )
}

// Styled Components
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

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const PageDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 800px;
  margin: 0 auto;
`

const SignupFormContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
`

const FormTabs = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
`

const FormTab = styled.div`
  color: white;
  font-weight: ${({ theme, active }) => active ? theme.fontWeights.semiBold : theme.fontWeights.normal};
  opacity: ${({ active }) => active ? 1 : 0.7};
  padding: ${({ theme }) => `${theme.space.sm} 0`};
`

const FormTabDivider = styled.div`
  width: 20px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 ${({ theme }) => theme.space.md};
`

const SignupForm = styled.form`
  padding: ${({ theme }) => theme.space.xl};
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const FormColumn = styled.div``

const FormSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const BrandingDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

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

const FileUploadContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FileUploadLabel = styled.label`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkText};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumGray};
  }
`

const FileInput = styled.input`
  display: none;
`

const FilePreview = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.md};
`

const PreviewImage = styled.img`
  max-width: 150px;
  max-height: 80px;
  border-radius: ${({ theme }) => theme.radii.sm};
  margin-right: ${({ theme }) => theme.space.md};
`

const RemoveButton = styled.button`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  background-color: ${({ theme }) => theme.colors.error};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  &:hover {
    opacity: 0.9;
  }
`

const ColorPickersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ColorPickerGroup = styled.div`
  position: relative;
`

const ColorPickerLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ColorPreviewButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
  cursor: pointer;
  color: white;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`

const ColorPickerPopover = styled.div`
  position: absolute;
  z-index: 2;
  top: 100%;
  left: 0;
  margin-top: ${({ theme }) => theme.space.xs};
`

const ColorPickerCover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const FormPreviewSection = styled.div`
  margin-top: ${({ theme }) => theme.space.lg};
`

const PreviewLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FormPreview = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const PreviewHeader = styled.div`
  padding: ${({ theme }) => theme.space.md};
  text-align: center;
  color: white;
`

const PreviewLogo = styled.img`
  max-width: 120px;
  max-height: 50px;
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const PreviewVenueName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

const PreviewBody = styled.div`
  padding: ${({ theme }) => theme.space.md};
  background-color: white;
`

const PreviewFormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const PreviewInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const PreviewButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
`

const AffiliateInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => `${theme.colors.primary}15`};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
`

const InfoIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  flex-shrink: 0;
`

const InfoContent = styled.div`
  flex: 1;
`

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const TermsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
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

const TermsLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
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

const SubmitButtonContainer = styled.div`
  text-align: center;
`

const SubmitButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

// Success View Styles
const SuccessContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
`

const SuccessHeader = styled.div`
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
  background-color: ${({ theme }) => `${theme.colors.success}10`};
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

const SuccessDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 700px;
  margin: 0 auto;
`

const EmbedCodeSection = styled.div`
  padding: ${({ theme }) => theme.space.xl};
`

const EmbedPreview = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const EmbedCodeBox = styled.pre`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  overflow-x: auto;
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.space.md};
  white-space: pre-wrap;
  word-break: break-all;
`

const CopyButton = styled(Button)`
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

const PreviewTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const NextStepsSection = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const NextStepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const NextStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.md};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
`

const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  flex-shrink: 0;
`

const StepContent = styled.div`
  flex: 1;
`

const StepTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StepDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const DashboardLink = styled.div`
  text-align: center;
`

const DashboardButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export default VenueSignup
