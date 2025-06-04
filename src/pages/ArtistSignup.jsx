import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const ArtistSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    genre: '',
    bio: '',
    socialLinks: {
      website: '',
      instagram: '',
      spotify: ''
    },
    referralCode: '',
    acceptTerms: false
  })
  
  const [step, setStep] = useState(1)
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      })
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      })
    }
  }
  
  const nextStep = () => {
    setStep(step + 1)
  }
  
  const prevStep = () => {
    setStep(step - 1)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Artist account created successfully!')
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
        <SignupCard>
          <SignupHeader>
            <SignupTitle>Create Your Artist Account</SignupTitle>
            <SignupSubtitle>Start receiving support from your true fans</SignupSubtitle>
          </SignupHeader>
          
          <ProgressBar>
            <ProgressStep active={step >= 1}>1</ProgressStep>
            <ProgressLine active={step >= 2} />
            <ProgressStep active={step >= 2}>2</ProgressStep>
            <ProgressLine active={step >= 3} />
            <ProgressStep active={step >= 3}>3</ProgressStep>
          </ProgressBar>
          
          <SignupForm onSubmit={handleSubmit}>
            {step === 1 && (
              <FormStep
                as={motion.div}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepTitle>Basic Information</StepTitle>
                
                <FormGroup>
                  <Label htmlFor="name">Artist/Band Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your artist or band name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="referralCode">Referral Code (Optional)</Label>
                  <Input
                    type="text"
                    id="referralCode"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleChange}
                    placeholder="Enter referral code if you have one"
                  />
                  <FormHint>If another artist referred you, enter their code here</FormHint>
                </FormGroup>
                
                <ButtonGroup>
                  <NextButton onClick={nextStep}>Continue</NextButton>
                </ButtonGroup>
              </FormStep>
            )}
            
            {step === 2 && (
              <FormStep
                as={motion.div}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepTitle>Artist Profile</StepTitle>
                
                <FormGroup>
                  <Label htmlFor="genre">Music Genre</Label>
                  <Select
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your primary genre</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="hiphop">Hip Hop</option>
                    <option value="rnb">R&B</option>
                    <option value="electronic">Electronic</option>
                    <option value="jazz">Jazz</option>
                    <option value="classical">Classical</option>
                    <option value="folk">Folk</option>
                    <option value="country">Country</option>
                    <option value="metal">Metal</option>
                    <option value="other">Other</option>
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="bio">Artist Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell your fans about yourself and your music"
                    rows="4"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input
                    type="url"
                    id="website"
                    name="socialLinks.website"
                    value={formData.socialLinks.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="instagram">Instagram (Optional)</Label>
                  <Input
                    type="text"
                    id="instagram"
                    name="socialLinks.instagram"
                    value={formData.socialLinks.instagram}
                    onChange={handleChange}
                    placeholder="@yourusername"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="spotify">Spotify (Optional)</Label>
                  <Input
                    type="text"
                    id="spotify"
                    name="socialLinks.spotify"
                    value={formData.socialLinks.spotify}
                    onChange={handleChange}
                    placeholder="Your Spotify artist link"
                  />
                </FormGroup>
                
                <ButtonGroup>
                  <BackButton onClick={prevStep}>Back</BackButton>
                  <NextButton onClick={nextStep}>Continue</NextButton>
                </ButtonGroup>
              </FormStep>
            )}
            
            {step === 3 && (
              <FormStep
                as={motion.div}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepTitle>Donation & Affiliate Setup</StepTitle>
                
                <InfoBox>
                  <InfoTitle>How It Works</InfoTitle>
                  <InfoText>
                    <InfoItem>You'll receive 80% of all donations from your fans</InfoItem>
                    <InfoItem>Payments are processed securely through Stripe</InfoItem>
                    <InfoItem>You'll get access to your donation page, QR code, and embed widget</InfoItem>
                    <InfoItem>Funds are transferred to your bank account weekly</InfoItem>
                  </InfoText>
                </InfoBox>
                
                <AffiliateBox>
                  <AffiliateTitle>Affiliate Program</AffiliateTitle>
                  <AffiliateText>
                    <AffiliateItem>You're automatically enrolled in our affiliate program</AffiliateItem>
                    <AffiliateItem>Earn 2.5% of all donations received by artists you refer</AffiliateItem>
                    <AffiliateItem>Earn 2.5% of all donations from artists referred by your referrals</AffiliateItem>
                    <AffiliateItem>Your unique referral link will be available in your dashboard</AffiliateItem>
                  </AffiliateText>
                </AffiliateBox>
                
                <FormGroup>
                  <CheckboxContainer>
                    <Checkbox
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      required
                    />
                    <CheckboxLabel htmlFor="acceptTerms">
                      I agree to the <TermsLink href="#" target="_blank">Terms of Service</TermsLink> and <TermsLink href="#" target="_blank">Privacy Policy</TermsLink>
                    </CheckboxLabel>
                  </CheckboxContainer>
                </FormGroup>
                
                <ButtonGroup>
                  <BackButton onClick={prevStep}>Back</BackButton>
                  <SubmitButton type="submit">Create Account</SubmitButton>
                </ButtonGroup>
              </FormStep>
            )}
          </SignupForm>
        </SignupCard>
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
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const SignupCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space.xl};
`

const SignupHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const SignupTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const SignupSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
`

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ProgressStep = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.lightGray};
  color: ${({ theme, active }) => active ? theme.colors.trustworthyNavy : theme.colors.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition: ${({ theme }) => theme.transitions.default};
`

const ProgressLine = styled.div`
  height: 3px;
  width: 60px;
  background-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.lightGray};
  transition: ${({ theme }) => theme.transitions.default};
`

const SignupForm = styled.form`
  width: 100%;
`

const FormStep = styled.div`
  width: 100%;
`

const StepTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const FormHint = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-top: ${({ theme }) => theme.space.xs};
`

const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  resize: vertical;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.space.xl};
`

const NextButton = styled(Button)`
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

const BackButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const SubmitButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
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

const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const InfoText = styled.ul`
  padding-left: ${({ theme }) => theme.space.lg};
`

const InfoItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const AffiliateBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary + '15'};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`

const AffiliateTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const AffiliateText = styled.ul`
  padding-left: ${({ theme }) => theme.space.lg};
`

const AffiliateItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

const Checkbox = styled.input`
  margin-top: 4px;
  margin-right: ${({ theme }) => theme.space.sm};
`

const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const TermsLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

export default ArtistSignup
