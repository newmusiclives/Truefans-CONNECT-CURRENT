import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch, AiOutlinePlus, AiOutlineEdit, AiOutlineDelete, AiOutlineCheck, AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai'
import Button from '../ui/Button'

const AdminArtists = () => {
  // Mock data for artists
  const [artists, setArtists] = useState([
    { 
      id: 1, 
      name: 'Emily Chen', 
      email: 'emily.chen@example.com', 
      genre: 'Jazz', 
      location: 'New York, NY',
      joinDate: '2023-01-15',
      totalDonations: 12450,
      status: 'active',
      verified: true
    },
    { 
      id: 2, 
      name: 'Marcus Rivera', 
      email: 'marcus.rivera@example.com', 
      genre: 'Hip Hop', 
      location: 'Los Angeles, CA',
      joinDate: '2023-02-03',
      totalDonations: 8750,
      status: 'active',
      verified: true
    },
    { 
      id: 3, 
      name: 'Sarah Johnson', 
      email: 'sarah.johnson@example.com', 
      genre: 'Folk', 
      location: 'Austin, TX',
      joinDate: '2023-02-28',
      totalDonations: 5200,
      status: 'active',
      verified: true
    },
    { 
      id: 4, 
      name: 'David Williams', 
      email: 'david.williams@example.com', 
      genre: 'Rock', 
      location: 'Chicago, IL',
      joinDate: '2023-03-10',
      totalDonations: 3800,
      status: 'pending',
      verified: false
    },
    { 
      id: 5, 
      name: 'Aisha Patel', 
      email: 'aisha.patel@example.com', 
      genre: 'Classical', 
      location: 'Boston, MA',
      joinDate: '2023-03-22',
      totalDonations: 2100,
      status: 'active',
      verified: true
    },
    { 
      id: 6, 
      name: 'James Wilson', 
      email: 'james.wilson@example.com', 
      genre: 'Electronic', 
      location: 'Miami, FL',
      joinDate: '2023-04-05',
      totalDonations: 1850,
      status: 'inactive',
      verified: true
    },
    { 
      id: 7, 
      name: 'Olivia Martinez', 
      email: 'olivia.martinez@example.com', 
      genre: 'R&B', 
      location: 'Atlanta, GA',
      joinDate: '2023-04-18',
      totalDonations: 950,
      status: 'active',
      verified: true
    },
  ])
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState('view') // 'view', 'edit', 'add'
  
  // Filter artists based on search term
  const filteredArtists = artists.filter(artist => 
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.location.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const handleViewArtist = (artist) => {
    setSelectedArtist(artist)
    setModalMode('view')
    setIsModalOpen(true)
  }
  
  const handleEditArtist = (artist) => {
    setSelectedArtist({...artist})
    setModalMode('edit')
    setIsModalOpen(true)
  }
  
  const handleAddArtist = () => {
    setSelectedArtist({
      id: artists.length + 1,
      name: '',
      email: '',
      genre: '',
      location: '',
      joinDate: new Date().toISOString().split('T')[0],
      totalDonations: 0,
      status: 'pending',
      verified: false
    })
    setModalMode('add')
    setIsModalOpen(true)
  }
  
  const handleDeleteArtist = (id) => {
    if (window.confirm('Are you sure you want to delete this artist?')) {
      setArtists(artists.filter(artist => artist.id !== id))
    }
  }
  
  const handleSaveArtist = () => {
    if (modalMode === 'add') {
      setArtists([...artists, selectedArtist])
    } else if (modalMode === 'edit') {
      setArtists(artists.map(artist => 
        artist.id === selectedArtist.id ? selectedArtist : artist
      ))
    }
    setIsModalOpen(false)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSelectedArtist({
      ...selectedArtist,
      [name]: value
    })
  }
  
  const handleStatusChange = (e) => {
    setSelectedArtist({
      ...selectedArtist,
      status: e.target.value
    })
  }
  
  const handleVerifiedChange = (e) => {
    setSelectedArtist({
      ...selectedArtist,
      verified: e.target.checked
    })
  }
  
  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString()}`
  }
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  return (
    <ArtistsContainer>
      <ArtistsHeader>
        <ArtistsTitle>Artist Management</ArtistsTitle>
        <HeaderActions>
          <SearchContainer>
            <SearchIcon><AiOutlineSearch /></SearchIcon>
            <SearchInput 
              type="text" 
              placeholder="Search artists..." 
              value={searchTerm}
              onChange={handleSearch}
            />
          </SearchContainer>
          <Button 
            variant="primary" 
            size="md" 
            icon={<AiOutlinePlus />}
            onClick={handleAddArtist}
          >
            Add Artist
          </Button>
        </HeaderActions>
      </ArtistsHeader>
      
      <ArtistsTable>
        <ArtistsTableHead>
          <ArtistsTableRow>
            <ArtistsTableHeader>Name</ArtistsTableHeader>
            <ArtistsTableHeader>Genre</ArtistsTableHeader>
            <ArtistsTableHeader>Location</ArtistsTableHeader>
            <ArtistsTableHeader>Join Date</ArtistsTableHeader>
            <ArtistsTableHeader>Total Donations</ArtistsTableHeader>
            <ArtistsTableHeader>Status</ArtistsTableHeader>
            <ArtistsTableHeader>Actions</ArtistsTableHeader>
          </ArtistsTableRow>
        </ArtistsTableHead>
        <ArtistsTableBody>
          {filteredArtists.length > 0 ? (
            filteredArtists.map(artist => (
              <ArtistsTableRow key={artist.id}>
                <ArtistsTableCell>
                  <ArtistName>{artist.name}</ArtistName>
                  <ArtistEmail>{artist.email}</ArtistEmail>
                </ArtistsTableCell>
                <ArtistsTableCell>{artist.genre}</ArtistsTableCell>
                <ArtistsTableCell>{artist.location}</ArtistsTableCell>
                <ArtistsTableCell>{formatDate(artist.joinDate)}</ArtistsTableCell>
                <ArtistsTableCell>{formatCurrency(artist.totalDonations)}</ArtistsTableCell>
                <ArtistsTableCell>
                  <StatusBadge status={artist.status}>
                    {artist.status.charAt(0).toUpperCase() + artist.status.slice(1)}
                    {artist.verified && <VerifiedBadge><AiOutlineCheck /></VerifiedBadge>}
                  </StatusBadge>
                </ArtistsTableCell>
                <ArtistsTableCell>
                  <ActionButtons>
                    <ActionButton onClick={() => handleViewArtist(artist)}>
                      <AiOutlineInfoCircle />
                    </ActionButton>
                    <ActionButton onClick={() => handleEditArtist(artist)}>
                      <AiOutlineEdit />
                    </ActionButton>
                    <ActionButton onClick={() => handleDeleteArtist(artist.id)}>
                      <AiOutlineDelete />
                    </ActionButton>
                  </ActionButtons>
                </ArtistsTableCell>
              </ArtistsTableRow>
            ))
          ) : (
            <ArtistsTableRow>
              <ArtistsTableCell colSpan="7">
                <NoResultsMessage>No artists found matching your search.</NoResultsMessage>
              </ArtistsTableCell>
            </ArtistsTableRow>
          )}
        </ArtistsTableBody>
      </ArtistsTable>
      
      {isModalOpen && selectedArtist && (
        <Modal>
          <ModalOverlay onClick={() => setIsModalOpen(false)} />
          <ModalContent>
            <ModalHeader>
              <ModalTitle>
                {modalMode === 'view' ? 'Artist Details' : 
                 modalMode === 'edit' ? 'Edit Artist' : 'Add New Artist'}
              </ModalTitle>
              <ModalCloseButton onClick={() => setIsModalOpen(false)}>
                <AiOutlineClose />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              {modalMode === 'view' ? (
                <ArtistDetails>
                  <ArtistDetailRow>
                    <ArtistDetailLabel>Name:</ArtistDetailLabel>
                    <ArtistDetailValue>{selectedArtist.name}</ArtistDetailValue>
                  </ArtistDetailRow>
                  <ArtistDetailRow>
                    <ArtistDetailLabel>Email:</ArtistDetailLabel>
                    <ArtistDetailValue>{selectedArtist.email}</ArtistDetailValue>
                  </ArtistDetailRow>
                  <ArtistDetailRow>
                    <ArtistDetailLabel>Genre:</ArtistDetailLabel>
                    <ArtistDetailValue>{selectedArtist.genre}</ArtistDetailValue>
                  </ArtistDetailRow>
                  <ArtistDetailRow>
                    <ArtistDetailLabel>Location:</ArtistDetailLabel>
                    <ArtistDetailValue>{selectedArtist.location}</ArtistDetailValue>
                  </ArtistDetailRow>
                  <ArtistDetailRow>
                    <ArtistDetailLabel>Join Date:</ArtistDetailLabel>
                    <ArtistDetailValue>{formatDate(selectedArtist.joinDate)}</ArtistDetailValue>
                  </ArtistDetailRow>
                  <ArtistDetailRow>
                    <ArtistDetailLabel>Total Donations:</ArtistDetailLabel>
                    <ArtistDetailValue>{formatCurrency(selectedArtist.totalDonations)}</ArtistDetailValue>
                  </ArtistDetailRow>
                  <ArtistDetailRow>
                    <ArtistDetailLabel>Status:</ArtistDetailLabel>
                    <ArtistDetailValue>
                      <StatusBadge status={selectedArtist.status}>
                        {selectedArtist.status.charAt(0).toUpperCase() + selectedArtist.status.slice(1)}
                      </StatusBadge>
                    </ArtistDetailValue>
                  </ArtistDetailRow>
                  <ArtistDetailRow>
                    <ArtistDetailLabel>Verified:</ArtistDetailLabel>
                    <ArtistDetailValue>
                      {selectedArtist.verified ? 
                        <VerifiedText><AiOutlineCheck /> Yes</VerifiedText> : 
                        <UnverifiedText><AiOutlineClose /> No</UnverifiedText>
                      }
                    </ArtistDetailValue>
                  </ArtistDetailRow>
                </ArtistDetails>
              ) : (
                <ArtistForm>
                  <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormInput 
                      type="text" 
                      name="name" 
                      value={selectedArtist.name}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormInput 
                      type="email" 
                      name="email" 
                      value={selectedArtist.email}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Genre</FormLabel>
                    <FormInput 
                      type="text" 
                      name="genre" 
                      value={selectedArtist.genre}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Location</FormLabel>
                    <FormInput 
                      type="text" 
                      name="location" 
                      value={selectedArtist.location}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Status</FormLabel>
                    <FormSelect 
                      name="status" 
                      value={selectedArtist.status}
                      onChange={handleStatusChange}
                    >
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="inactive">Inactive</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup>
                    <FormCheckboxLabel>
                      <FormCheckbox 
                        type="checkbox" 
                        name="verified" 
                        checked={selectedArtist.verified}
                        onChange={handleVerifiedChange}
                      />
                      Verified Artist
                    </FormCheckboxLabel>
                  </FormGroup>
                </ArtistForm>
              )}
            </ModalBody>
            <ModalFooter>
              {modalMode === 'view' ? (
                <Button 
                  variant="primary" 
                  size="md" 
                  onClick={() => handleEditArtist(selectedArtist)}
                >
                  Edit Artist
                </Button>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    size="md" 
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="primary" 
                    size="md" 
                    onClick={handleSaveArtist}
                  >
                    {modalMode === 'add' ? 'Add Artist' : 'Save Changes'}
                  </Button>
                </>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </ArtistsContainer>
  )
}

const ArtistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const ArtistsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.md};
  }
`

const ArtistsTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const HeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    flex-direction: column;
  }
`

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.space.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.lightText};
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.md} ${theme.space.md} ${theme.space.xl}`};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const ArtistsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`

const ArtistsTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const ArtistsTableBody = styled.tbody``

const ArtistsTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}05`};
  }
`

const ArtistsTableHeader = styled.th`
  padding: ${({ theme }) => theme.space.md};
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const ArtistsTableCell = styled.td`
  padding: ${({ theme }) => theme.space.md};
  vertical-align: middle;
`

const ArtistName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ArtistEmail = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme, status }) => 
    status === 'active' ? `${theme.colors.success}15` :
    status === 'pending' ? `${theme.colors.warning}15` :
    `${theme.colors.error}15`
  };
  color: ${({ theme, status }) => 
    status === 'active' ? theme.colors.success :
    status === 'pending' ? theme.colors.warning :
    theme.colors.error
  };
`

const VerifiedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.space.xs};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 10px;
`

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.primary};
  }
`

const NoResultsMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space.xl};
  color: ${({ theme }) => theme.colors.lightText};
  font-style: italic;
`

// Modal Styles
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 1001;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
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
  margin: 0;
`

const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ModalBody = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  overflow-y: auto;
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`

// Artist Details Styles
const ArtistDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const ArtistDetailRow = styled.div`
  display: flex;
  align-items: flex-start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.xs};
  }
`

const ArtistDetailLabel = styled.div`
  width: 150px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.lightText};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const ArtistDetailValue = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.darkText};
`

const VerifiedText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.success};
`

const UnverifiedText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.error};
`

// Artist Form Styles
const ArtistForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`

const FormLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const FormInput = styled.input`
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

const FormCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  cursor: pointer;
  user-select: none;
`

const FormCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`

export default AdminArtists
