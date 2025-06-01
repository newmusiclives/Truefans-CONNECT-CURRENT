import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const EditArtistProfile = () => {
  // In a real app, this would be fetched from your backend
  const [formData, setFormData] = useState({
    name: 'Eliza Johnson',
    email: 'eliza@example.com',
    genre: 'Folk',
    bio: 'Indie folk artist with a passion for storytelling through music. Based in Nashville, I blend traditional folk with contemporary influences to create authentic, heartfelt songs that connect with listeners on a personal level.',
    location: 'Nashville, TN',
    socialLinks: {
      website: 'https://elizajohnson.com',
      instagram: '@elizajohnsonmusic',
      spotify: 'https://open.spotify.com/artist/elizajohnson',
      twitter: '@elizajohnson',
      facebook: 'elizajohnsonmusic',
      youtube: 'ElizaJohnsonOfficial',
      soundcloud: 'elizajohnson'
    },
    // Music tracks
    music: [
      {
        id: 1,
        title: 'Summer Memories',
        duration: '3:42',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1bab.mp3?filename=acoustic-guitars-ambient-uplifting-background-music-for-videos-5642.mp3',
        image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 2,
        title: 'City Lights',
        duration: '4:15',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=inspiring-cinematic-ambient-116199.mp3',
        image: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    // Upcoming shows
    upcomingShows: [
      {
        id: 1,
        venue: 'The Sound Lounge',
        location: 'Nashville, TN',
        date: '2023-11-15',
        time: '20:00',
        ticketPrice: '25.00'
      }
    ],
    profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    coverImage: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  })
  
  const [activeTab, setActiveTab] = useState('basic')
  const [successMessage, setSuccessMessage] = useState('')
  
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
      const newId = formData.music.length > 0 
        ? Math.max(...formData.music.map(track => track.id)) + 1 
        : 1
        
      setFormData({
        ...formData,
        music: [
          ...formData.music,
          {
            id: newId,
            title: '',
            duration: '',
            audioUrl: '',
            image: ''
          }
        ]
      })
    } else if (arrayName === 'upcomingShows') {
      const newId = formData.upcomingShows.length > 0 
        ? Math.max(...formData.upcomingShows.map(show => show.id)) + 1 
        : 1
        
      setFormData({
        ...formData,
        upcomingShows: [
          ...formData.upcomingShows,
          {
            id: newId,
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
  const handleRemoveItem = (arrayName, id) => {
    const updatedArray = formData[arrayName].filter(item => item.id !== id)
    
    setFormData({
      ...formData,
      [arrayName]: updatedArray
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // In a real app, this would send the updated data to your backend
    console.log('Form submitted:', formData)
    
    // Show success message
    setSuccessMessage('Profile updated successfully!')
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)
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
        <ProfileHeader>
          <ProfileTitle>Edit Your Profile</ProfileTitle>
          <ProfileSubtitle>Update your information to keep your fans informed</ProfileSubtitle>
        </ProfileHeader>
        
        {successMessage && (
          <SuccessMessage>
            <SuccessIcon>✓</SuccessIcon>
            {successMessage}
          </SuccessMessage>
        )}
        
        <EditCard>
          <TabsContainer>
            <Tab 
              active={activeTab === 'basic'} 
              onClick={() => setActiveTab('basic')}
            >
              Basic Info
            </Tab>
            <Tab 
              active={activeTab === 'social'} 
              onClick={() => setActiveTab('social')}
            >
              Social Links
            </Tab>
            <Tab 
              active={activeTab === 'music'} 
              onClick={() => setActiveTab('music')}
            >
              Music
            </Tab>
            <Tab 
              active={activeTab === 'shows'} 
              onClick={() => setActiveTab('shows')}
            >
              Shows
            </Tab>
            <Tab 
              active={activeTab === 'images'} 
              onClick={() => setActiveTab('images')}
            >
              Images
            </Tab>
          </TabsContainer>
          
          <TabContent>
            <form onSubmit={handleSubmit}>
              {/* Basic Info Tab */}
              {activeTab === 'basic' && (
                <TabPanel>
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
                    <Label htmlFor="genre">Music Genre</Label>
                    <Select
                      id="genre"
                      name="genre"
                      value={formData.genre}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your primary genre</option>
                      <option value="Rock">Rock</option>
                      <option value="Pop">Pop</option>
                      <option value="Hip Hop">Hip Hop</option>
                      <option value="R&B">R&B</option>
                      <option value="Electronic">Electronic</option>
                      <option value="Jazz">Jazz</option>
                      <option value="Classical">Classical</option>
                      <option value="Folk">Folk</option>
                      <option value="Country">Country</option>
                      <option value="Metal">Metal</option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="bio">Artist Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="Tell your fans about yourself and your music"
                      rows="6"
                      required
                    />
                  </FormGroup>
                </TabPanel>
              )}
              
              {/* Social Links Tab */}
              {activeTab === 'social' && (
                <TabPanel>
                  <FormGroup>
                    <Label htmlFor="website">Website</Label>
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
                    <Label htmlFor="instagram">Instagram</Label>
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
                    <Label htmlFor="spotify">Spotify</Label>
                    <Input
                      type="text"
                      id="spotify"
                      name="socialLinks.spotify"
                      value={formData.socialLinks.spotify}
                      onChange={handleChange}
                      placeholder="Your Spotify artist link"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      type="text"
                      id="twitter"
                      name="socialLinks.twitter"
                      value={formData.socialLinks.twitter}
                      onChange={handleChange}
                      placeholder="@yourusername"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      type="text"
                      id="facebook"
                      name="socialLinks.facebook"
                      value={formData.socialLinks.facebook}
                      onChange={handleChange}
                      placeholder="Your Facebook page name"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="youtube">YouTube</Label>
                    <Input
                      type="text"
                      id="youtube"
                      name="socialLinks.youtube"
                      value={formData.socialLinks.youtube}
                      onChange={handleChange}
                      placeholder="Your YouTube channel name"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="soundcloud">SoundCloud</Label>
                    <Input
                      type="text"
                      id="soundcloud"
                      name="socialLinks.soundcloud"
                      value={formData.socialLinks.soundcloud}
                      onChange={handleChange}
                      placeholder="Your SoundCloud username"
                    />
                  </FormGroup>
                </TabPanel>
              )}
              
              {/* Music Tab */}
              {activeTab === 'music' && (
                <TabPanel>
                  <SectionDescription>
                    Add tracks that fans can listen to on your profile. These will appear in your music player.
                  </SectionDescription>
                  
                  {formData.music.map((track, index) => (
                    <ItemContainer key={track.id}>
                      <ItemHeader>
                        <ItemTitle>{track.title || `Track ${index + 1}`}</ItemTitle>
                        <RemoveButton 
                          type="button" 
                          onClick={() => handleRemoveItem('music', track.id)}
                        >
                          Remove
                        </RemoveButton>
                      </ItemHeader>
                      
                      <FormGroup>
                        <Label htmlFor={`track-title-${track.id}`}>Track Title</Label>
                        <Input
                          type="text"
                          id={`track-title-${track.id}`}
                          value={track.title}
                          onChange={(e) => handleArrayChange('music', index, 'title', e.target.value)}
                          placeholder="Enter track title"
                          required
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor={`track-duration-${track.id}`}>Duration</Label>
                        <Input
                          type="text"
                          id={`track-duration-${track.id}`}
                          value={track.duration}
                          onChange={(e) => handleArrayChange('music', index, 'duration', e.target.value)}
                          placeholder="e.g. 3:42"
                          required
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor={`track-audio-${track.id}`}>Audio URL</Label>
                        <Input
                          type="url"
                          id={`track-audio-${track.id}`}
                          value={track.audioUrl}
                          onChange={(e) => handleArrayChange('music', index, 'audioUrl', e.target.value)}
                          placeholder="Link to your audio file (MP3, WAV, etc.)"
                          required
                        />
                        <FormHint>Provide a link to your audio file hosted on SoundCloud, Dropbox, Google Drive, etc.</FormHint>
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor={`track-image-${track.id}`}>Track Image URL</Label>
                        <Input
                          type="url"
                          id={`track-image-${track.id}`}
                          value={track.image}
                          onChange={(e) => handleArrayChange('music', index, 'image', e.target.value)}
                          placeholder="Link to track artwork image"
                        />
                      </FormGroup>
                      
                      {track.audioUrl && (
                        <AudioPreview>
                          <AudioPreviewLabel>Audio Preview:</AudioPreviewLabel>
                          <audio controls src={track.audioUrl} style={{ width: '100%' }}></audio>
                        </AudioPreview>
                      )}
                    </ItemContainer>
                  ))}
                  
                  <AddItemButton 
                    type="button" 
                    onClick={() => handleAddItem('music')}
                  >
                    + Add New Track
                  </AddItemButton>
                </TabPanel>
              )}
              
              {/* Shows Tab */}
              {activeTab === 'shows' && (
                <TabPanel>
                  <SectionDescription>
                    Add your upcoming performances. These will appear in the "Upcoming Shows" section of your profile.
                  </SectionDescription>
                  
                  {formData.upcomingShows.map((show, index) => (
                    <ItemContainer key={show.id}>
                      <ItemHeader>
                        <ItemTitle>{show.venue || `Show ${index + 1}`}</ItemTitle>
                        <RemoveButton 
                          type="button" 
                          onClick={() => handleRemoveItem('upcomingShows', show.id)}
                        >
                          Remove
                        </RemoveButton>
                      </ItemHeader>
                      
                      <FormGroup>
                        <Label htmlFor={`show-venue-${show.id}`}>Venue Name</Label>
                        <Input
                          type="text"
                          id={`show-venue-${show.id}`}
                          value={show.venue}
                          onChange={(e) => handleArrayChange('upcomingShows', index, 'venue', e.target.value)}
                          placeholder="Enter venue name"
                          required
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor={`show-location-${show.id}`}>Location</Label>
                        <Input
                          type="text"
                          id={`show-location-${show.id}`}
                          value={show.location}
                          onChange={(e) => handleArrayChange('upcomingShows', index, 'location', e.target.value)}
                          placeholder="City, State"
                          required
                        />
                      </FormGroup>
                      
                      <FormRow>
                        <FormGroup>
                          <Label htmlFor={`show-date-${show.id}`}>Date</Label>
                          <Input
                            type="date"
                            id={`show-date-${show.id}`}
                            value={show.date}
                            onChange={(e) => handleArrayChange('upcomingShows', index, 'date', e.target.value)}
                            required
                          />
                        </FormGroup>
                        
                        <FormGroup>
                          <Label htmlFor={`show-time-${show.id}`}>Time</Label>
                          <Input
                            type="time"
                            id={`show-time-${show.id}`}
                            value={show.time}
                            onChange={(e) => handleArrayChange('upcomingShows', index, 'time', e.target.value)}
                            required
                          />
                        </FormGroup>
                      </FormRow>
                      
                      <FormGroup>
                        <Label htmlFor={`show-price-${show.id}`}>Ticket Price ($)</Label>
                        <Input
                          type="number"
                          id={`show-price-${show.id}`}
                          value={show.ticketPrice}
                          onChange={(e) => handleArrayChange('upcomingShows', index, 'ticketPrice', e.target.value)}
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                          required
                        />
                      </FormGroup>
                    </ItemContainer>
                  ))}
                  
                  <AddItemButton 
                    type="button" 
                    onClick={() => handleAddItem('upcomingShows')}
                  >
                    + Add New Show
                  </AddItemButton>
                </TabPanel>
              )}
              
              {/* Images Tab */}
              {activeTab === 'images' && (
                <TabPanel>
                  <FormGroup>
                    <Label htmlFor="profileImage">Profile Image URL</Label>
                    <Input
                      type="url"
                      id="profileImage"
                      name="profileImage"
                      value={formData.profileImage}
                      onChange={handleChange}
                      placeholder="Link to your profile image"
                      required
                    />
                    <FormHint>This is your main profile photo that appears on your profile.</FormHint>
                    
                    {formData.profileImage && (
                      <ImagePreview>
                        <PreviewImage src={formData.profileImage} alt="Profile" />
                      </ImagePreview>
                    )}
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="coverImage">Cover Image URL</Label>
                    <Input
                      type="url"
                      id="coverImage"
                      name="coverImage"
                      value={formData.coverImage}
                      onChange={handleChange}
                      placeholder="Link to your cover image"
                      required
                    />
                    <FormHint>This is the banner image that appears at the top of your profile.</FormHint>
                    
                    {formData.coverImage && (
                      <ImagePreview>
                        <CoverPreviewImage src={formData.coverImage} alt="Cover" />
                      </ImagePreview>
                    )}
                  </FormGroup>
                </TabPanel>
              )}
              
              <ButtonContainer>
                <SaveButton type="submit">Save Changes</SaveButton>
              </ButtonContainer>
            </form>
          </TabContent>
        </EditCard>
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
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ProfileTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ProfileSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
`

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const SuccessIcon = styled.span`
  margin-right: ${({ theme }) => theme.space.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const EditCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
`

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: auto;
  
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const Tab = styled.button`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${({ theme, active }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ theme, active }) => 
    active ? theme.colors.primary : theme.colors.lightText};
  font-weight: ${({ theme, active }) => 
    active ? theme.fontWeights.semiBold : theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
`

const TabContent = styled.div`
  padding: ${({ theme }) => theme.space.xl};
`

const TabPanel = styled.div`
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.space.xl};
`

const SaveButton = styled(Button)`
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

const ItemContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
`

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ItemTitle = styled.h3`
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
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
`

const AudioPreview = styled.div`
  margin-top: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
`

const AudioPreviewLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.colors.darkText};
`

const ImagePreview = styled.div`
  margin-top: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const PreviewImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  display: block;
`

const CoverPreviewImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
`

export default EditArtistProfile
