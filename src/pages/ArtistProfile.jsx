import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'

const ArtistProfile = () => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const audioRef = useRef(null)
  const [showDonationModal, setShowDonationModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [showTicketModal, setShowTicketModal] = useState(false)
  const [donationAmount, setDonationAmount] = useState(10)
  const [customAmount, setCustomAmount] = useState('')
  const [donationMessage, setDonationMessage] = useState('')
  const [donationSuccess, setDonationSuccess] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [ticketQuantity, setTicketQuantity] = useState(1)
  const [ticketSuccess, setTicketSuccess] = useState(false)
  const [selectedShow, setSelectedShow] = useState(null)
  
  // Check if we should show the donation modal on load (from support button)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    if (searchParams.get('support') === 'true') {
      setShowDonationModal(true)
    }
  }, [location])
  
  // Handle audio playback
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentlyPlaying])
  
  // Mock artist data - in a real app, this would be fetched from an API
  const artist = {
    id: parseInt(id),
    name: id === '1' ? 'Eliza Johnson' : 
          id === '2' ? 'Marcus Rivera' : 
          id === '3' ? 'Emily Chen' : 
          id === '4' ? 'David Williams' : 
          id === '5' ? 'Sophia Martinez' : 
          id === '6' ? 'James Wilson' : 
          id === '7' ? 'Olivia Taylor' : 
          id === '8' ? 'Michael Brown' : 'Unknown Artist',
    genre: id === '1' ? 'Folk' : 
           id === '2' ? 'Hip Hop' : 
           id === '3' ? 'Electronic' : 
           id === '4' ? 'Rock' : 
           id === '5' ? 'Jazz' : 
           id === '6' ? 'Country' : 
           id === '7' ? 'Pop' : 
           id === '8' ? 'R&B' : 'Various',
    location: id === '1' ? 'Nashville, TN' : 
              id === '2' ? 'Atlanta, GA' : 
              id === '3' ? 'Los Angeles, CA' : 
              id === '4' ? 'Chicago, IL' : 
              id === '5' ? 'New Orleans, LA' : 
              id === '6' ? 'Austin, TX' : 
              id === '7' ? 'New York, NY' : 
              id === '8' ? 'Philadelphia, PA' : 'Unknown Location',
    image: id === '1' ? 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg' : 
           id === '2' ? 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg' : 
           id === '3' ? 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg' : 
           id === '4' ? 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' : 
           id === '5' ? 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg' : 
           id === '6' ? 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' : 
           id === '7' ? 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' : 
           id === '8' ? 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' : 'https://via.placeholder.com/500',
    coverImage: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: id === '1' ? 'Indie folk artist with a passion for storytelling through music. Based in Nashville, I blend traditional folk with contemporary influences to create authentic, heartfelt songs that connect with listeners on a personal level.' : 
         id === '2' ? 'Urban poet and producer creating authentic hip hop with a message. My music draws from personal experiences growing up in Atlanta, addressing social issues while delivering infectious beats and thoughtful lyrics.' : 
         id === '3' ? 'Electronic music producer pushing boundaries with innovative sounds. I experiment with synthesizers, field recordings, and digital manipulation to create immersive sonic landscapes that challenge conventional electronic music.' : 
         id === '4' ? 'Rock guitarist and vocalist with a classic sound and modern edge. Influenced by the golden era of rock while incorporating contemporary elements, my music delivers powerful riffs, memorable hooks, and raw energy.' : 
         id === '5' ? 'Jazz vocalist and composer blending traditional and contemporary styles. My approach to jazz honors the classics while exploring new harmonic territories, resulting in performances that are both familiar and surprising.' : 
         id === '6' ? 'Country singer-songwriter with authentic roots and modern appeal. My songs tell stories of real life experiences with honesty and heart, combining traditional country instrumentation with contemporary production.' : 
         id === '7' ? 'Pop vocalist and songwriter crafting catchy melodies with depth. I create accessible pop music that doesn\'t sacrifice substance, with lyrics that explore personal growth, relationships, and social awareness.' : 
         id === '8' ? 'R&B artist with soulful vocals and heartfelt lyrics. My music draws from classic soul and contemporary R&B influences, delivering smooth vocals, rich harmonies, and grooves that move both body and spirit.' : 
         'Independent artist creating original music.',
    supporters: id === '1' ? 87 : 
                id === '2' ? 124 : 
                id === '3' ? 56 : 
                id === '4' ? 92 : 
                id === '5' ? 43 : 
                id === '6' ? 78 : 
                id === '7' ? 112 : 
                id === '8' ? 67 : 50,
    totalDonations: id === '1' ? '$1,245.00' : 
                    id === '2' ? '$2,180.50' : 
                    id === '3' ? '$895.25' : 
                    id === '4' ? '$1,567.75' : 
                    id === '5' ? '$720.00' : 
                    id === '6' ? '$1,120.50' : 
                    id === '7' ? '$1,890.25' : 
                    id === '8' ? '$950.75' : '$500.00',
    featured: id === '1' || id === '2' || id === '4' || id === '7',
    socialLinks: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      spotify: 'https://spotify.com',
      soundcloud: 'https://soundcloud.com'
    },
    music: [
      {
        id: 1,
        title: 'Summer Memories',
        duration: '3:42',
        plays: 1245,
        image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1bab.mp3?filename=acoustic-guitars-ambient-uplifting-background-music-for-videos-5642.mp3'
      },
      {
        id: 2,
        title: 'City Lights',
        duration: '4:15',
        plays: 987,
        image: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=inspiring-cinematic-ambient-116199.mp3'
      },
      {
        id: 3,
        title: 'Rainy Day',
        duration: '3:28',
        plays: 1532,
        image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/04/27/audio_c2e4e07f04.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3'
      }
    ],
    upcomingShows: [
      {
        id: 1,
        venue: 'The Sound Lounge',
        location: 'Nashville, TN',
        date: '2023-11-15',
        time: '8:00 PM',
        ticketPrice: 25.00
      },
      {
        id: 2,
        venue: 'Blue Note',
        location: 'New York, NY',
        date: '2023-12-05',
        time: '9:30 PM',
        ticketPrice: 35.00
      }
    ]
  }
  
  const handleDonationSubmit = (e) => {
    e.preventDefault()
    
    // In a real app, this would process the payment
    console.log('Processing donation:', {
      amount: customAmount ? parseFloat(customAmount) : donationAmount,
      message: donationMessage,
      artistId: artist.id
    })
    
    // Show success message
    setDonationSuccess(true)
    
    // Reset form
    setTimeout(() => {
      setDonationSuccess(false)
      setShowDonationModal(false)
      setDonationAmount(10)
      setCustomAmount('')
      setDonationMessage('')
      
      // Remove the support=true from URL
      navigate(`/artist-profile/${id}`, { replace: true })
    }, 3000)
  }
  
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing)
    
    // In a real app, this would update the follow status in the database
    console.log(`${isFollowing ? 'Unfollowing' : 'Following'} artist:`, artist.id)
    
    // Show a temporary notification
    const notification = document.createElement('div')
    notification.className = 'follow-notification'
    notification.textContent = isFollowing ? `Unfollowed ${artist.name}` : `Now following ${artist.name}`
    document.body.appendChild(notification)
    
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 3000)
  }
  
  const handleShare = () => {
    setShowShareModal(true)
  }
  
  const handleCopyLink = () => {
    const artistUrl = `${window.location.origin}/artist-profile/${id}`
    navigator.clipboard.writeText(artistUrl)
      .then(() => {
        // Show success message
        const copyLinkButton = document.getElementById('copy-link-button')
        copyLinkButton.textContent = 'Copied!'
        setTimeout(() => {
          copyLinkButton.textContent = 'Copy Link'
        }, 2000)
      })
      .catch(err => {
        console.error('Failed to copy link: ', err)
      })
  }
  
  const handlePlayTrack = (track) => {
    if (currentlyPlaying === track.id) {
      // Toggle play/pause for current track
      setIsPlaying(!isPlaying)
    } else {
      // Play new track
      setCurrentlyPlaying(track.id)
      setIsPlaying(true)
    }
  }
  
  const handleBuyTickets = (show) => {
    setSelectedShow(show)
    setShowTicketModal(true)
  }
  
  const handleTicketPurchase = (e) => {
    e.preventDefault()
    
    // In a real app, this would process the ticket purchase
    console.log('Processing ticket purchase:', {
      showId: selectedShow.id,
      quantity: ticketQuantity,
      totalPrice: (selectedShow.ticketPrice * ticketQuantity).toFixed(2)
    })
    
    // Show success message
    setTicketSuccess(true)
    
    // Reset form
    setTimeout(() => {
      setTicketSuccess(false)
      setShowTicketModal(false)
      setTicketQuantity(1)
      setSelectedShow(null)
    }, 3000)
  }
  
  // Find the currently playing track
  const currentTrack = artist.music.find(track => track.id === currentlyPlaying)
  
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CoverImage src={artist.coverImage} alt={`${artist.name} cover`} />
      
      <Container>
        <ProfileHeader>
          <ProfileImageContainer>
            <ProfileImage src={artist.image} alt={artist.name} />
          </ProfileImageContainer>
          
          <ProfileInfo>
            <ProfileName>{artist.name}</ProfileName>
            <ProfileDetails>
              <ProfileGenre>{artist.genre}</ProfileGenre>
              <ProfileLocation>{artist.location}</ProfileLocation>
            </ProfileDetails>
            
            <ProfileStats>
              <StatItem>
                <StatValue>{artist.supporters}</StatValue>
                <StatLabel>Supporters</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{artist.totalDonations}</StatValue>
                <StatLabel>Total Donations</StatLabel>
              </StatItem>
            </ProfileStats>
            
            <ProfileActions>
              <SupportButton onClick={() => setShowDonationModal(true)}>Support Artist</SupportButton>
              <FollowButton 
                isFollowing={isFollowing} 
                onClick={handleFollowToggle}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </FollowButton>
              <ShareButton onClick={handleShare}>Share</ShareButton>
            </ProfileActions>
          </ProfileInfo>
        </ProfileHeader>
        
        <ContentSection>
          <MainContent>
            <Section>
              <SectionTitle>About</SectionTitle>
              <BioText>{artist.bio}</BioText>
            </Section>
            
            <Section>
              <SectionTitle>Music</SectionTitle>
              <MusicGrid>
                {artist.music.map((track) => (
                  <MusicCard key={track.id}>
                    <MusicImage src={track.image} alt={track.title} />
                    <MusicInfo>
                      <MusicTitle>{track.title}</MusicTitle>
                      <MusicDetails>
                        <MusicDuration>{track.duration}</MusicDuration>
                        <MusicPlays>{track.plays} plays</MusicPlays>
                      </MusicDetails>
                    </MusicInfo>
                    <PlayButton 
                      isPlaying={isPlaying && currentlyPlaying === track.id}
                      onClick={() => handlePlayTrack(track)}
                    >
                      {isPlaying && currentlyPlaying === track.id ? '❚❚' : '▶'}
                    </PlayButton>
                  </MusicCard>
                ))}
              </MusicGrid>
              
              {/* Hidden audio element for playing music */}
              {currentTrack && (
                <audio
                  ref={audioRef}
                  src={currentTrack.audioUrl}
                  onEnded={() => setIsPlaying(false)}
                />
              )}
              
              {currentlyPlaying && (
                <NowPlaying>
                  <NowPlayingText>
                    Now Playing: {artist.music.find(track => track.id === currentlyPlaying)?.title}
                  </NowPlayingText>
                  <NowPlayingControls>
                    <NowPlayingButton onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? '❚❚ Pause' : '▶ Play'}
                    </NowPlayingButton>
                    <NowPlayingButton onClick={() => {
                      setCurrentlyPlaying(null)
                      setIsPlaying(false)
                    }}>
                      ■ Stop
                    </NowPlayingButton>
                  </NowPlayingControls>
                </NowPlaying>
              )}
            </Section>
            
            <Section>
              <SectionTitle>Upcoming Shows</SectionTitle>
              {artist.upcomingShows.length > 0 ? (
                <ShowsList>
                  {artist.upcomingShows.map((show) => (
                    <ShowItem key={show.id}>
                      <ShowDate>
                        {new Date(show.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </ShowDate>
                      <ShowInfo>
                        <ShowVenue>{show.venue}</ShowVenue>
                        <ShowLocation>{show.location}</ShowLocation>
                      </ShowInfo>
                      <ShowTime>{show.time}</ShowTime>
                      <ShowTicketButton onClick={() => handleBuyTickets(show)}>
                        Get Tickets
                      </ShowTicketButton>
                    </ShowItem>
                  ))}
                </ShowsList>
              ) : (
                <NoShowsMessage>No upcoming shows scheduled.</NoShowsMessage>
              )}
            </Section>
          </MainContent>
          
          <Sidebar>
            <SidebarSection>
              <SidebarTitle>Support {artist.name}</SidebarTitle>
              <SupportMessage>
                Your direct support helps me continue creating music independently.
              </SupportMessage>
              <SidebarSupportButton onClick={() => setShowDonationModal(true)}>
                Donate Now
              </SidebarSupportButton>
            </SidebarSection>
            
            <SidebarSection>
              <SidebarTitle>Connect</SidebarTitle>
              <SocialLinks>
                <SocialLink href={artist.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <SocialIcon>📷</SocialIcon>
                  <SocialName>Instagram</SocialName>
                </SocialLink>
                <SocialLink href={artist.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <SocialIcon>🐦</SocialIcon>
                  <SocialName>Twitter</SocialName>
                </SocialLink>
                <SocialLink href={artist.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <SocialIcon>👍</SocialIcon>
                  <SocialName>Facebook</SocialName>
                </SocialLink>
                <SocialLink href={artist.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                  <SocialIcon>▶️</SocialIcon>
                  <SocialName>YouTube</SocialName>
                </SocialLink>
                <SocialLink href={artist.socialLinks.spotify} target="_blank" rel="noopener noreferrer">
                  <SocialIcon>🎵</SocialIcon>
                  <SocialName>Spotify</SocialName>
                </SocialLink>
                <SocialLink href={artist.socialLinks.soundcloud} target="_blank" rel="noopener noreferrer">
                  <SocialIcon>☁️</SocialIcon>
                  <SocialName>SoundCloud</SocialName>
                </SocialLink>
              </SocialLinks>
            </SidebarSection>
            
            <SidebarSection>
              <SidebarTitle>Recent Supporters</SidebarTitle>
              <SupportersList>
                <SupporterItem>
                  <SupporterAvatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="John D." />
                  <SupporterInfo>
                    <SupporterName>John D.</SupporterName>
                    <SupporterAmount>$25.00</SupporterAmount>
                  </SupporterInfo>
                </SupporterItem>
                <SupporterItem>
                  <SupporterAvatar src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="Sarah M." />
                  <SupporterInfo>
                    <SupporterName>Sarah M.</SupporterName>
                    <SupporterAmount>$15.00</SupporterAmount>
                  </SupporterInfo>
                </SupporterItem>
                <SupporterItem>
                  <SupporterAvatar src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="David R." />
                  <SupporterInfo>
                    <SupporterName>David R.</SupporterName>
                    <SupporterAmount>$50.00</SupporterAmount>
                  </SupporterInfo>
                </SupporterItem>
              </SupportersList>
            </SidebarSection>
          </Sidebar>
        </ContentSection>
      </Container>
      
      {/* Donation Modal */}
      {showDonationModal && (
        <ModalOverlay onClick={() => !donationSuccess && setShowDonationModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            {donationSuccess ? (
              <SuccessMessage>
                <SuccessIcon>✓</SuccessIcon>
                <SuccessTitle>Thank You!</SuccessTitle>
                <SuccessText>Your donation to {artist.name} has been processed successfully.</SuccessText>
              </SuccessMessage>
            ) : (
              <>
                <ModalHeader>
                  <ModalTitle>Support {artist.name}</ModalTitle>
                  <CloseButton onClick={() => setShowDonationModal(false)}>×</CloseButton>
                </ModalHeader>
                
                <DonationForm onSubmit={handleDonationSubmit}>
                  <DonationText>
                    Your direct support helps me continue creating music independently.
                  </DonationText>
                  
                  <AmountSection>
                    <AmountLabel>Select an amount:</AmountLabel>
                    <AmountOptions>
                      <AmountOption 
                        selected={donationAmount === 5 && !customAmount} 
                        onClick={() => {
                          setDonationAmount(5)
                          setCustomAmount('')
                        }}
                      >
                        $5
                      </AmountOption>
                      <AmountOption 
                        selected={donationAmount === 10 && !customAmount} 
                        onClick={() => {
                          setDonationAmount(10)
                          setCustomAmount('')
                        }}
                      >
                        $10
                      </AmountOption>
                      <AmountOption 
                        selected={donationAmount === 25 && !customAmount} 
                        onClick={() => {
                          setDonationAmount(25)
                          setCustomAmount('')
                        }}
                      >
                        $25
                      </AmountOption>
                      <AmountOption 
                        selected={donationAmount === 50 && !customAmount} 
                        onClick={() => {
                          setDonationAmount(50)
                          setCustomAmount('')
                        }}
                      >
                        $50
                      </AmountOption>
                    </AmountOptions>
                    
                    <CustomAmountContainer>
                      <CustomAmountLabel>Or enter a custom amount:</CustomAmountLabel>
                      <CustomAmountInput
                        type="number"
                        min="1"
                        step="0.01"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                      />
                    </CustomAmountContainer>
                  </AmountSection>
                  
                  <MessageSection>
                    <MessageLabel>Add a message (optional):</MessageLabel>
                    <MessageInput
                      placeholder="Your message to the artist..."
                      value={donationMessage}
                      onChange={(e) => setDonationMessage(e.target.value)}
                    />
                  </MessageSection>
                  
                  <SubmitButton type="submit">
                    Donate ${customAmount ? parseFloat(customAmount).toFixed(2) : donationAmount.toFixed(2)}
                  </SubmitButton>
                  
                  <SecurityNote>
                    Secure payment processing. 80% goes directly to the artist.
                  </SecurityNote>
                </DonationForm>
              </>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
      
      {/* Share Modal */}
      {showShareModal && (
        <ModalOverlay onClick={() => setShowShareModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Share {artist.name}'s Profile</ModalTitle>
              <CloseButton onClick={() => setShowShareModal(false)}>×</CloseButton>
            </ModalHeader>
            
            <ShareModalContent>
              <ShareText>
                Share this artist with your friends and help them grow their audience.
              </ShareText>
              
              <ShareOptions>
                <ShareOption onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}>
                  <ShareOptionIcon>👍</ShareOptionIcon>
                  <ShareOptionText>Facebook</ShareOptionText>
                </ShareOption>
                
                <ShareOption onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check out ${encodeURIComponent(artist.name)} on TrueFans CONNECT™&url=${encodeURIComponent(window.location.href)}`, '_blank')}>
                  <ShareOptionIcon>🐦</ShareOptionIcon>
                  <ShareOptionText>Twitter</ShareOptionText>
                </ShareOption>
                
                <ShareOption onClick={() => window.open(`mailto:?subject=Check out ${encodeURIComponent(artist.name)} on TrueFans CONNECT™&body=I thought you might like this artist: ${encodeURIComponent(window.location.href)}`, '_blank')}>
                  <ShareOptionIcon>✉️</ShareOptionIcon>
                  <ShareOptionText>Email</ShareOptionText>
                </ShareOption>
              </ShareOptions>
              
              <ShareLinkContainer>
                <ShareLinkLabel>Or copy this link:</ShareLinkLabel>
                <ShareLinkInput value={window.location.href} readOnly />
                <ShareLinkButton id="copy-link-button" onClick={handleCopyLink}>
                  Copy Link
                </ShareLinkButton>
              </ShareLinkContainer>
            </ShareModalContent>
          </ModalContent>
        </ModalOverlay>
      )}
      
      {/* Ticket Modal */}
      {showTicketModal && selectedShow && (
        <ModalOverlay onClick={() => !ticketSuccess && setShowTicketModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            {ticketSuccess ? (
              <SuccessMessage>
                <SuccessIcon>✓</SuccessIcon>
                <SuccessTitle>Tickets Confirmed!</SuccessTitle>
                <SuccessText>
                  Your tickets for {artist.name} at {selectedShow.venue} have been reserved. Check your email for details.
                </SuccessText>
              </SuccessMessage>
            ) : (
              <>
                <ModalHeader>
                  <ModalTitle>Get Tickets</ModalTitle>
                  <CloseButton onClick={() => setShowTicketModal(false)}>×</CloseButton>
                </ModalHeader>
                
                <TicketForm onSubmit={handleTicketPurchase}>
                  <TicketEventDetails>
                    <TicketEventTitle>{artist.name}</TicketEventTitle>
                    <TicketEventInfo>
                      <TicketEventVenue>{selectedShow.venue}</TicketEventVenue>
                      <TicketEventLocation>{selectedShow.location}</TicketEventLocation>
                    </TicketEventInfo>
                    <TicketEventDateTime>
                      {new Date(selectedShow.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })} at {selectedShow.time}
                    </TicketEventDateTime>
                  </TicketEventDetails>
                  
                  <TicketPriceInfo>
                    <TicketPriceLabel>Ticket Price:</TicketPriceLabel>
                    <TicketPrice>${selectedShow.ticketPrice.toFixed(2)}</TicketPrice>
                  </TicketPriceInfo>
                  
                  <TicketQuantityContainer>
                    <TicketQuantityLabel>Number of Tickets:</TicketQuantityLabel>
                    <TicketQuantityControls>
                      <TicketQuantityButton 
                        type="button"
                        onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                      >
                        -
                      </TicketQuantityButton>
                      <TicketQuantityInput 
                        type="number" 
                        min="1" 
                        max="10"
                        value={ticketQuantity}
                        onChange={(e) => setTicketQuantity(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                      />
                      <TicketQuantityButton 
                        type="button"
                        onClick={() => setTicketQuantity(Math.min(10, ticketQuantity + 1))}
                      >
                        +
                      </TicketQuantityButton>
                    </TicketQuantityControls>
                  </TicketQuantityContainer>
                  
                  <TicketTotalContainer>
                    <TicketTotalLabel>Total:</TicketTotalLabel>
                    <TicketTotal>${(selectedShow.ticketPrice * ticketQuantity).toFixed(2)}</TicketTotal>
                  </TicketTotalContainer>
                  
                  <TicketSubmitButton type="submit">
                    Purchase Tickets
                  </TicketSubmitButton>
                  
                  <TicketNote>
                    Tickets will be sent to your email. No refunds available within 24 hours of the event.
                  </TicketNote>
                </TicketForm>
              </>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
      
      {/* Global styles for notifications */}
      <style>
        {`
          .follow-notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 12px 20px;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            animation: fadeInOut 3s ease;
          }
          
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
        `}
      </style>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
  position: relative;
  margin-top: -100px;
`

const CoverImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

// Profile Header
const ProfileHeader = styled.div`
  display: flex;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const ProfileImageContainer = styled.div`
  margin-right: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.space.lg};
  }
`

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const ProfileInfo = styled.div`
  flex: 1;
`

const ProfileName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ProfileDetails = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`

const ProfileGenre = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const ProfileLocation = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
`

const ProfileStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`

const StatItem = styled.div``

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const ProfileActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

const SupportButton = styled(Button)`
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.xl};
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

const FollowButton = styled(Button)`
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.xl};
  background-color: ${({ theme, isFollowing }) => 
    isFollowing ? theme.colors.success : theme.colors.trustworthyNavy};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme, isFollowing }) => 
      isFollowing ? theme.colors.successDark : theme.colors.trustworthyNavyLight};
  }
`

const ShareButton = styled(Button)`
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.xl};
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
`

// Content Section
const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const Section = styled.section`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  position: relative;
  padding-bottom: ${({ theme }) => theme.space.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const BioText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

// Music Section
const MusicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const MusicCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const MusicImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.radii.sm};
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.md};
`

const MusicInfo = styled.div`
  flex: 1;
`

const MusicTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const MusicDetails = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
`

const MusicDuration = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const MusicPlays = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const PlayButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme, isPlaying }) => 
    isPlaying ? theme.colors.success : theme.colors.primary};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme, isPlaying }) => 
      isPlaying ? theme.colors.successDark : theme.colors.primaryDark};
    transform: scale(1.1);
  }
`

const NowPlaying = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-top: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.sm};
  }
`

const NowPlayingText = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const NowPlayingControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`

const NowPlayingButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`

// Shows Section
const ShowsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const ShowItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.sm};
  }
`

const ShowDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.primary};
  width: 120px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: auto;
  }
`

const ShowInfo = styled.div`
  flex: 1;
`

const ShowVenue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const ShowLocation = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ShowTime = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  margin-right: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`

const ShowTicketButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.trustworthyNavyLight};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-self: flex-end;
  }
`

const NoShowsMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  font-style: italic;
`

// Sidebar
const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const SidebarSection = styled.section`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const SidebarTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  position: relative;
  padding-bottom: ${({ theme }) => theme.space.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const SupportMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SidebarSupportButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
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

// Social Links
const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.md};
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkText};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateX(3px);
    color: ${({ theme }) => theme.colors.primary};
  }
`

const SocialIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-right: ${({ theme }) => theme.space.sm};
`

const SocialName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
`

// Supporters
const SupportersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const SupporterItem = styled.div`
  display: flex;
  align-items: center;
`

const SupporterAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.md};
`

const SupporterInfo = styled.div``

const SupporterName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const SupporterAmount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

// Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.space.md};
`

const ModalContent = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.darkText};
  }
`

// Donation Form
const DonationForm = styled.form`
  padding: ${({ theme }) => theme.space.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const DonationText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

const AmountSection = styled.div``

const AmountLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const AmountOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const AmountOption = styled.div`
  padding: ${({ theme }) => theme.space.md};
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme, selected }) => 
    selected ? theme.colors.primary : theme.colors.mediumGray};
  background-color: ${({ theme, selected }) => 
    selected ? `${theme.colors.primary}15` : 'white'};
  color: ${({ theme, selected }) => 
    selected ? theme.colors.primary : theme.colors.darkText};
  font-weight: ${({ theme, selected }) => 
    selected ? theme.fontWeights.semiBold : theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
`

const CustomAmountContainer = styled.div`
  margin-top: ${({ theme }) => theme.space.md};
`

const CustomAmountLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const CustomAmountInput = styled.input`
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

const MessageSection = styled.div``

const MessageLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const MessageInput = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const SubmitButton = styled(Button)`
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const SecurityNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
`

// Success Message
const SuccessMessage = styled.div`
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SuccessTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SuccessText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

// Share Modal
const ShareModalContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const ShareText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

const ShareOptions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ShareOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
  }
`

const ShareOptionIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ShareOptionText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkText};
`

const ShareLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`

const ShareLinkLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const ShareLinkInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const ShareLinkButton = styled(Button)`
  align-self: flex-end;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.trustworthyNavyLight};
  }
`

// Ticket Modal
const TicketForm = styled.form`
  padding: ${({ theme }) => theme.space.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const TicketEventDetails = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const TicketEventTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TicketEventInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const TicketEventVenue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
`

const TicketEventLocation = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const TicketEventDateTime = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const TicketPriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const TicketPriceLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const TicketPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const TicketQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`

const TicketQuantityLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const TicketQuantityControls = styled.div`
  display: flex;
  align-items: center;
`

const TicketQuantityButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:first-child {
    border-radius: ${({ theme }) => `${theme.radii.md} 0 0 ${theme.radii.md}`};
  }
  
  &:last-child {
    border-radius: ${({ theme }) => `0 ${theme.radii.md} ${theme.radii.md} 0`};
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumGray};
  }
`

const TicketQuantityInput = styled.input`
  width: 60px;
  height: 40px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  /* Hide spinner buttons */
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
  }
`

const TicketTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.md} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-top: ${({ theme }) => theme.space.sm};
`

const TicketTotalLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const TicketTotal = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
`

const TicketSubmitButton = styled(Button)`
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const TicketNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
`

export default ArtistProfile
