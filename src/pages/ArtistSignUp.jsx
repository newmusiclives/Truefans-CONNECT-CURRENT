import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

const ArtistSignUp = () => {
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
    acceptTerms: false,
    // New fields for music tracks
    music: [
      {
        title: '',
        duration: '',
        audioUrl: '',
        image: ''
      }
    ],
    // New fields for upcoming shows
    upcomingShows: [
      {
        venue: '',
        location: '',
        date: '',
        time: '',
        ticketPrice: ''
      }
    ]
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
  
  // Handle changes to nested arrays (music tracks and upcoming shows)
  const handleArrayChange = (arrayName, index, field, value) => {
    const updatedArray = [...formData[arrayName]]
    updatedArray[index] = {
      ...updatedArray[index],
      [field]: value
    }
    
    setFormData({
      ...formData,
      [arrayName]: updatedArray
    })
  }
  
  // Add a new item to an array (music track or upcoming show)
  const handleAddItem = (arrayName) => {
    if (arrayName === 'music') {
      setFormData({
        ...formData,
        music: [
          ...formData.music,
          {
            title: '',
            duration: '',
            audioUrl: '',
            image: ''
          }
        ]
      })
    } else if (arrayName === 'upcomingShows') {
      setFormData({
        ...formData,
        upcomingShows: [
          ...formData.upcomingShows,
          {
            venue: '',
            location: '',
            date: '',
            time: '',
            ticketPrice: ''
          }
        ]
      })
    }
  }
  
  // Remove an item from an array (music track or upcoming show)
  const handleRemoveItem = (arrayName, index) => {
    const updatedArray = [...formData[arrayName]]
    updatedArray.splice(index, 1)
    
    setFormData({
      ...formData,
      [arrayName]: updatedArray
    })
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
        <TwoColumnLayout>
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
              <ProgressLine active={step >= 4} />
              <ProgressStep active={step >= 4}>4</ProgressStep>
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
                  <StepTitle>Your Music (Optional)</StepTitle>
                  <FormHint>Add tracks that fans can listen to on your profile. You can add more later.</FormHint>
                  
                  {formData.music.map((track, index) => (
                    <TrackContainer key={index}>
                      <TrackHeader>
                        <TrackNumber>Track {index + 1}</TrackNumber>
                        {index > 0 && (
                          <RemoveButton 
                            type="button" 
                            onClick={() => handleRemoveItem('music', index)}
                          >
                            Remove
                          </RemoveButton>
                        )}
                      </TrackHeader>
                      
                      <FormGroup>
                        <Label htmlFor={`track-title-${index}`}>Track Title</Label>
                        <Input
                          type="text"
                          id={`track-title-${index}`}
                          value={track.title}
                          onChange={(e) => handleArrayChange('music', index, 'title', e.target.value)}
                          placeholder="Enter track title"
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor={`track-duration-${index}`}>Duration</Label>
                        <Input
                          type="text"
                          id={`track-duration-${index}`}
                          value={track.duration}
                          onChange={(e) => handleArrayChange('music', index, 'duration', e.target.value)}
                          placeholder="e.g. 3:42"
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor={`track-audio-${index}`}>Audio URL</Label>
                        <Input
                          type="url"
                          id={`track-audio-${index}`}
                          value={track.audioUrl}
                          onChange={(e) => handleArrayChange('music', index, 'audioUrl', e.target.value)}
                          placeholder="Link to your audio file (MP3, WAV, etc.)"
                        />
                        <FormHint>Provide a link to your audio file hosted on SoundCloud, Dropbox, Google Drive, etc.</FormHint>
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor={`track-image-${index}`}>Track Image URL (Optional)</Label>
                        <Input
                          type="url"
                          id={`track-image-${index}`}
                          value={track.image}
                          onChange={(e) => handleArrayChange('music', index, 'image', e.target.value)}
                          placeholder="Link to track artwork image"
                        />
                      </FormGroup>
                    </TrackContainer>
                  ))}
                  
                  <AddItemButton 
                    type="button" 
                    onClick={() => handleAddItem('music')}
                  >
                    + Add Another Track
                  </AddItemButton>
                  
                  <ButtonGroup>
                    <BackButton onClick={prevStep}>Back</BackButton>
                    <NextButton onClick={nextStep}>Continue</NextButton>
                  </ButtonGroup>
                </FormStep>
              )}
              
              {step === 4 && (
                <FormStep
                  as={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <StepTitle>Upcoming Shows (Optional)</StepTitle>
                  <FormHint>Add your upcoming performances. You can add more or update these later.</FormHint>
                  
                  {formData.upcomingShows.map((show, index) => (
                    <ShowContainer key={index}>
                      <ShowHeader>
                        <ShowNumber>Show {index + 1}</ShowNumber>
                        {index > 0 && (
                          <RemoveButton 
                            type="button" 
                            onClick={() => handleRemoveItem('upcomingShows', index)}
                          >
                            Remove
                          </RemoveButton>
                        )}
                      </ShowHeader>
                      
                      <FormGroup>
                        <Label htmlFor={`show-venue-${index}`}>Venue Name</Label>
                        <Input
                          type="text"
                          id={`show-venue-${index}`}
                          value={show.venue}
                          onChange={(e) => handleArrayChange('upcomingShows', index, 'venue', e.target.value)}
                          placeholder="Enter venue name"
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor={`show-location-${index}`}>Location</Label>
                        <Input
                          type="text"
                          id={`show-location-${index}`}
                          value={show.location}
                          onChange={(e) => handleArrayChange('upcomingShows', index, 'location', e.target.value)}
                          placeholder="City, State"
                        />
                      </FormGroup>
                      
                      <FormRow>
                        <FormGroup>
                          <Label htmlFor={`show-date-${index}`}>Date</Label>
                          <Input
                            type="date"
                            id={`show-date-${index}`}
                            value={show.date}
                            onChange={(e) => handleArrayChange('upcomingShows', index, 'date', e.target.value)}
                          />
                        </FormGroup>
                        
                        <FormGroup>
                          <Label htmlFor={`show-time-${index}`}>Time</Label>
                          <Input
                            type="time"
                            id={`show-time-${index}`}
                            value={show.time}
                            onChange={(e) => handleArrayChange('upcomingShows', index, 'time', e.target.value)}
                          />
                        </FormGroup>
                      </FormRow>
                      
                      <FormGroup>
                        <Label htmlFor={`show-price-${index}`}>Ticket Price ($)</Label>
                        <Input
                          type="number"
                          id={`show-price-${index}`}
                          value={show.ticketPrice}
                          onChange={(e) => handleArrayChange('upcomingShows', index, 'ticketPrice', e.target.value)}
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                        />
                      </FormGroup>
                    </ShowContainer>
                  ))}
                  
                  <AddItemButton 
                    type="button" 
                    onClick={() => handleAddItem('upcomingShows')}
                  >
                    + Add Another Show
                  </AddItemButton>
                  
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
                        I agree to the <StyledLink to="/terms">Terms of Service</StyledLink> and <StyledLink to="/privacy">Privacy Policy</StyledLink>
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
          
          <BenefitsContainer>
            <BenefitsTitle>Artist Benefits</BenefitsTitle>
            
            <BenefitsList>
              <BenefitItem>
                <BenefitIcon>💰</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Direct Fan Support</BenefitTitle>
                  <BenefitDescription>
                    Receive direct financial support from your fans without a record label taking a cut. Keep 80% of all donations.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>🎵</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Music Showcase</BenefitTitle>
                  <BenefitDescription>
                    Share your music directly with fans through your personalized artist profile. Upload tracks, videos, and promote upcoming shows.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>🔗</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Venue Connections</BenefitTitle>
                  <BenefitDescription>
                    Get discovered by venues looking for talent. Our platform connects artists with venues seeking performers for their spaces.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>📊</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Fan Analytics</BenefitTitle>
                  <BenefitDescription>
                    Gain insights into your audience with detailed analytics. Track listener demographics, popular tracks, and donation patterns.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>🌐</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Promotional Tools</BenefitTitle>
                  <BenefitDescription>
                    Access customizable widgets, QR codes, and social media integration to promote your music and collect support across platforms.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>👥</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Artist Community</BenefitTitle>
                  <BenefitDescription>
                    Connect with other independent artists, collaborate on projects, and share resources within our growing community.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitItem>
            </BenefitsList>
            
            <TestimonialSection>
              <TestimonialCard>
                <TestimonialContent>
                  "TrueFans has completely changed how I connect with my audience. I've been able to fund my latest EP entirely through fan donations, and the venue connections helped me book my first mini-tour!"
                </TestimonialContent>
                <TestimonialAuthor>
                  <TestimonialAvatar src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" alt="Sarah Martinez" />
                  <TestimonialInfo>
                    <TestimonialName>Sarah Martinez</TestimonialName>
                    <TestimonialRole>Independent Singer-Songwriter</TestimonialRole>
                  </TestimonialInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            </TestimonialSection>
          </BenefitsContainer>
        </TwoColumnLayout>
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

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
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

// Track and Show containers
const TrackContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
`

const TrackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const TrackNumber = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const ShowContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
  border-left: 3px solid ${({ theme }) => theme.colors.trustworthyNavy};
`

const ShowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ShowNumber = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const RemoveButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.danger};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    text-decoration: underline;
  }
`

const AddItemButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px dashed ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
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

// Updated link component for Terms and Privacy links
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

// Benefits section styles
const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: ${({ theme }) => theme.space.xl};
  }
`

const BenefitsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
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

// Testimonial section
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

export default ArtistSignUp
