import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch, AiOutlinePlus, AiOutlineEdit, AiOutlineDelete, AiOutlineCheck, AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai'
import Button from '../ui/Button'

const AdminVenues = () => {
  // Mock data for venues
  const [venues, setVenues] = useState([
    { 
      id: 1, 
      name: 'The Blue Note', 
      email: 'booking@bluenote.com', 
      type: 'Jazz Club', 
      location: 'New York, NY',
      joinDate: '2023-01-10',
      totalDonations: 18750,
      status: 'active',
      verified: true
    },
    { 
      id: 2, 
      name: 'Whiskey A Go Go', 
      email: 'events@whiskyagogo.com', 
      type: 'Rock Venue', 
      location: 'Los Angeles, CA',
      joinDate: '2023-01-25',
      totalDonations: 15200,
      status: 'active',
      verified: true
    },
    { 
      id: 3, 
      name: 'The Continental Club', 
      email: 'info@continentalclub.com', 
      type: 'Live Music Venue', 
      location: 'Austin, TX',
      joinDate: '2023-02-15',
      totalDonations: 12800,
      status: 'active',
      verified: true
    },
    { 
      id: 4, 
      name: 'House of Blues', 
      email: 'booking@hob.com', 
      type: 'Concert Hall', 
      location: 'Chicago, IL',
      joinDate: '2023-03-05',
      totalDonations: 9500,
      status: 'active',
      verified: true
    },
    { 
      id: 5, 
      name: 'The Fillmore', 
      email: 'events@fillmore.com', 
      type: 'Concert Hall', 
      location: 'San Francisco, CA',
      joinDate: '2023-03-18',
      totalDonations: 7200,
      status: 'pending',
      verified: false
    },
    { 
      id: 6, 
      name: 'The Bitter End', 
      email: 'contact@bitterend.com', 
      type: 'Folk Venue', 
      location: 'New York, NY',
      joinDate: '2023-04-02',
      totalDonations: 5800,
      status: 'inactive',
      verified: true
    },
  ])
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedVenue, setSelectedVenue] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState('view') // 'view', 'edit', 'add'
  
  // Filter venues based on search term
  const filteredVenues = venues.filter(venue => 
    venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.location.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const handleViewVenue = (venue) => {
    setSelectedVenue(venue)
    setModalMode('view')
    setIsModalOpen(true)
  }
  
  const handleEditVenue = (venue) => {
    setSelectedVenue({...venue})
    setModalMode('edit')
    setIsModalOpen(true)
  }
  
  const handleAddVenue = () => {
    setSelectedVenue({
      id: venues.length + 1,
      name: '',
      email: '',
      type: '',
      location: '',
      joinDate: new Date().toISOString().split('T')[0],
      totalDonations: 0,
      status: 'pending',
      verified: false
    })
    setModalMode('add')
    setIsModalOpen(true)
  }
  
  const handleDeleteVenue = (id) => {
    if (window.confirm('Are you sure you want to delete this venue?')) {
      setVenues(venues.filter(venue => venue.id !== id))
    }
  }
  
  const handleSaveVenue = () => {
    if (modalMode === 'add') {
      setVenues([...venues, selectedVenue])
    } else if (modalMode === 'edit') {
      setVenues(venues.map(venue => 
        venue.id === selectedVenue.id ? selectedVenue : venue
      ))
    }
    setIsModalOpen(false)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSelectedVenue({
      ...selectedVenue,
      [name]: value
    })
  }
  
  const handleStatusChange = (e) => {
    setSelectedVenue({
      ...selectedVenue,
      status: e.target.value
    })
  }
  
  const handleVerifiedChange = (e) => {
    setSelectedVenue({
      ...selectedVenue,
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
    <VenuesContainer>
      <VenuesHeader>
        <VenuesTitle>Venue Management</VenuesTitle>
        <HeaderActions>
          <SearchContainer>
            <SearchIcon><AiOutlineSearch /></SearchIcon>
            <SearchInput 
              type="text" 
              placeholder="Search venues..." 
              value={searchTerm}
              onChange={handleSearch}
            />
          </SearchContainer>
          <Button 
            variant="primary" 
            size="md" 
            icon={<AiOutlinePlus />}
            onClick={handleAddVenue}
          >
            Add Venue
          </Button>
        </HeaderActions>
      </VenuesHeader>
      
      <VenuesTable>
        <VenuesTableHead>
          <VenuesTableRow>
            <VenuesTableHeader>Name</VenuesTableHeader>
            <VenuesTableHeader>Type</VenuesTableHeader>
            <VenuesTableHeader>Location</VenuesTableHeader>
            <VenuesTableHeader>Join Date</VenuesTableHeader>
            <VenuesTableHeader>Total Donations</VenuesTableHeader>
            <VenuesTableHeader>Status</VenuesTableHeader>
            <VenuesTableHeader>Actions</VenuesTableHeader>
          </VenuesTableRow>
        </VenuesTableHead>
        <VenuesTableBody>
          {filteredVenues.length > 0 ? (
            filteredVenues.map(venue => (
              <VenuesTableRow key={venue.id}>
                <VenuesTableCell>
                  <VenueName>{venue.name}</VenueName>
                  <VenueEmail>{venue.email}</VenueEmail>
                </VenuesTableCell>
                <VenuesTableCell>{venue.type}</VenuesTableCell>
                <VenuesTableCell>{venue.location}</VenuesTableCell>
                <VenuesTableCell>{formatDate(venue.joinDate)}</VenuesTableCell>
                <VenuesTableCell>{formatCurrency(venue.totalDonations)}</VenuesTableCell>
                <VenuesTableCell>
                  <StatusBadge status={venue.status}>
                    {venue.status.charAt(0).toUpperCase() + venue.status.slice(1)}
                    {venue.verified && <VerifiedBadge><AiOutlineCheck /></VerifiedBadge>}
                  </StatusBadge>
                </VenuesTableCell>
                <VenuesTableCell>
                  <ActionButtons>
                    <ActionButton onClick={() => handleViewVenue(venue)}>
                      <AiOutlineInfoCircle />
                    </ActionButton>
                    <ActionButton onClick={() => handleEditVenue(venue)}>
                      <AiOutlineEdit />
                    </ActionButton>
                    <ActionButton onClick={() => handleDeleteVenue(venue.id)}>
                      <AiOutlineDelete />
                    </ActionButton>
                  </ActionButtons>
                </VenuesTableCell>
              </VenuesTableRow>
            ))
          ) : (
            <VenuesTableRow>
              <VenuesTableCell colSpan="7">
                <NoResultsMessage>No venues found matching your search.</NoResultsMessage>
              </VenuesTableCell>
            </VenuesTableRow>
          )}
        </VenuesTableBody>
      </VenuesTable>
      
      {isModalOpen && selectedVenue && (
        <Modal>
          <ModalOverlay onClick={() => setIsModalOpen(false)} />
          <ModalContent>
            <ModalHeader>
              <ModalTitle>
                {modalMode === 'view' ? 'Venue Details' : 
                 modalMode === 'edit' ? 'Edit Venue' : 'Add New Venue'}
              </ModalTitle>
              <ModalCloseButton onClick={() => setIsModalOpen(false)}>
                <AiOutlineClose />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              {modalMode === 'view' ? (
                <VenueDetails>
                  <VenueDetailRow>
                    <VenueDetailLabel>Name:</VenueDetailLabel>
                    <VenueDetailValue>{selectedVenue.name}</VenueDetailValue>
                  </VenueDetailRow>
                  <VenueDetailRow>
                    <VenueDetailLabel>Email:</VenueDetailLabel>
                    <VenueDetailValue>{selectedVenue.email}</VenueDetailValue>
                  </VenueDetailRow>
                  <VenueDetailRow>
                    <VenueDetailLabel>Type:</VenueDetailLabel>
                    <VenueDetailValue>{selectedVenue.type}</VenueDetailValue>
                  </VenueDetailRow>
                  <VenueDetailRow>
                    <VenueDetailLabel>Location:</VenueDetailLabel>
                    <VenueDetailValue>{selectedVenue.location}</VenueDetailValue>
                  </VenueDetailRow>
                  <VenueDetailRow>
                    <VenueDetailLabel>Join Date:</VenueDetailLabel>
                    <VenueDetailValue>{formatDate(selectedVenue.joinDate)}</VenueDetailValue>
                  </VenueDetailRow>
                  <VenueDetailRow>
                    <VenueDetailLabel>Total Donations:</VenueDetailLabel>
                    <VenueDetailValue>{formatCurrency(selectedVenue.totalDonations)}</VenueDetailValue>
                  </VenueDetailRow>
                  <VenueDetailRow>
                    <VenueDetailLabel>Status:</VenueDetailLabel>
                    <VenueDetailValue>
                      <StatusBadge status={selectedVenue.status}>
                        {selectedVenue.status.charAt(0).toUpperCase() + selectedVenue.status.slice(1)}
                      </StatusBadge>
                    </VenueDetailValue>
                  </VenueDetailRow>
                  <VenueDetailRow>
                    <VenueDetailLabel>Verified:</VenueDetailLabel>
                    <VenueDetailValue>
                      {selectedVenue.verified ? 
                        <VerifiedText><AiOutlineCheck /> Yes</VerifiedText> : 
                        <UnverifiedText><AiOutlineClose /> No</UnverifiedText>
                      }
                    </VenueDetailValue>
                  </VenueDetailRow>
                </VenueDetails>
              ) : (
                <VenueForm>
                  <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormInput 
                      type="text" 
                      name="name" 
                      value={selectedVenue.name}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormInput 
                      type="email" 
                      name="email" 
                      value={selectedVenue.email}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Type</FormLabel>
                    <FormInput 
                      type="text" 
                      name="type" 
                      value={selectedVenue.type}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Location</FormLabel>
                    <FormInput 
                      type="text" 
                      name="location" 
                      value={selectedVenue.location}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Status</FormLabel>
                    <FormSelect 
                      name="status" 
                      value={selectedVenue.status}
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
                        checked={selectedVenue.verified}
                        onChange={handleVerifiedChange}
                      />
                      Verified Venue
                    </FormCheckboxLabel>
                  </FormGroup>
                </VenueForm>
              )}
            </ModalBody>
            <ModalFooter>
              {modalMode === 'view' ? (
                <Button 
                  variant="primary" 
                  size="md" 
                  onClick={() => handleEditVenue(selectedVenue)}
                >
                  Edit Venue
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
                    onClick={handleSaveVenue}
                  >
                    {modalMode === 'add' ? 'Add Venue' : 'Save Changes'}
                  </Button>
                </>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </VenuesContainer>
  )
}

const VenuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const VenuesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.md};
  }
`

const VenuesTitle = styled.h1`
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

const VenuesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`

const VenuesTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const VenuesTableBody = styled.tbody``

const VenuesTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}05`};
  }
`

const VenuesTableHeader = styled.th`
  padding: ${({ theme }) => theme.space.md};
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const VenuesTableCell = styled.td`
  padding: ${({ theme }) => theme.space.md};
  vertical-align: middle;
`

const VenueName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const VenueEmail = styled.div`
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

// Venue Details Styles
const VenueDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const VenueDetailRow = styled.div`
  display: flex;
  align-items: flex-start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.xs};
  }
`

const VenueDetailLabel = styled.div`
  width: 150px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.lightText};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const VenueDetailValue = styled.div`
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

// Venue Form Styles
const VenueForm = styled.form`
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

export default AdminVenues
