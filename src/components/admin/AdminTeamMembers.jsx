import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'

const AdminTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([
    { 
      id: 1, 
      name: 'John Smith', 
      email: 'john@truefans.com', 
      role: 'Admin', 
      department: 'Engineering',
      status: 'Active',
      lastLogin: '2023-06-15 09:32 AM',
      permissions: ['dashboard', 'artists', 'venues', 'financials', 'settings']
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      email: 'sarah@truefans.com', 
      role: 'Admin', 
      department: 'Marketing',
      status: 'Active',
      lastLogin: '2023-06-14 03:45 PM',
      permissions: ['dashboard', 'artists', 'venues', 'financials']
    },
    { 
      id: 3, 
      name: 'Michael Chen', 
      email: 'michael@truefans.com', 
      role: 'Support', 
      department: 'Customer Support',
      status: 'Active',
      lastLogin: '2023-06-15 11:20 AM',
      permissions: ['dashboard', 'artists', 'venues']
    }
  ])
  
  const [showAddMemberForm, setShowAddMemberForm] = useState(false)
  const [showEditMemberForm, setShowEditMemberForm] = useState(false)
  const [currentMember, setCurrentMember] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Support',
    department: '',
    permissions: []
  })
  
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('All')
  
  // Reset form when closing
  useEffect(() => {
    if (!showAddMemberForm && !showEditMemberForm) {
      setFormData({
        name: '',
        email: '',
        role: 'Support',
        department: '',
        permissions: []
      })
      setCurrentMember(null)
    }
  }, [showAddMemberForm, showEditMemberForm])
  
  // Set form data when editing
  useEffect(() => {
    if (currentMember) {
      setFormData({
        name: currentMember.name,
        email: currentMember.email,
        role: currentMember.role,
        department: currentMember.department,
        permissions: [...currentMember.permissions]
      })
    }
  }, [currentMember])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handlePermissionChange = (permission) => {
    if (formData.permissions.includes(permission)) {
      setFormData({
        ...formData,
        permissions: formData.permissions.filter(p => p !== permission)
      })
    } else {
      setFormData({
        ...formData,
        permissions: [...formData.permissions, permission]
      })
    }
  }
  
  const handleRoleChange = (e) => {
    const role = e.target.value
    let permissions = [...formData.permissions]
    
    // Auto-select permissions based on role
    if (role === 'Admin') {
      permissions = ['dashboard', 'artists', 'venues', 'financials', 'settings', 'brand-kit']
    } else if (role === 'Manager') {
      permissions = ['dashboard', 'artists', 'venues', 'financials']
    } else if (role === 'Support') {
      permissions = ['dashboard', 'artists', 'venues']
    }
    
    setFormData({
      ...formData,
      role,
      permissions
    })
  }
  
  const handleAddMember = (e) => {
    e.preventDefault()
    
    const newMember = {
      id: teamMembers.length + 1,
      name: formData.name,
      email: formData.email,
      role: formData.role,
      department: formData.department,
      status: 'Active',
      lastLogin: 'Never',
      permissions: formData.permissions
    }
    
    setTeamMembers([...teamMembers, newMember])
    setShowAddMemberForm(false)
  }
  
  const handleEditMember = (e) => {
    e.preventDefault()
    
    const updatedMembers = teamMembers.map(member => {
      if (member.id === currentMember.id) {
        return {
          ...member,
          name: formData.name,
          email: formData.email,
          role: formData.role,
          department: formData.department,
          permissions: formData.permissions
        }
      }
      return member
    })
    
    setTeamMembers(updatedMembers)
    setShowEditMemberForm(false)
  }
  
  const handleDeleteMember = (id) => {
    if (window.confirm('Are you sure you want to remove this team member?')) {
      setTeamMembers(teamMembers.filter(member => member.id !== id))
    }
  }
  
  const openEditForm = (member) => {
    setCurrentMember(member)
    setShowEditMemberForm(true)
  }
  
  // Filter members based on search and role filter
  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.department.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesRole = filterRole === 'All' || member.role === filterRole
    
    return matchesSearch && matchesRole
  })
  
  return (
    <TeamMembersContainer>
      <TeamMembersHeader>
        <TeamMembersTitle>Team Members</TeamMembersTitle>
        <AddMemberButton 
          variant="primary" 
          onClick={() => setShowAddMemberForm(true)}
        >
          + Add Team Member
        </AddMemberButton>
      </TeamMembersHeader>
      
      <TeamMembersFilters>
        <SearchContainer>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search by name, email, or department" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        <FilterContainer>
          <FilterLabel>Role:</FilterLabel>
          <FilterSelect 
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="All">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Support">Support</option>
          </FilterSelect>
        </FilterContainer>
      </TeamMembersFilters>
      
      <TeamMembersTable>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Department</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Last Login</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map(member => (
            <TableRow key={member.id}>
              <TableCell>
                <MemberName>{member.name}</MemberName>
              </TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>
                <RoleBadge role={member.role}>{member.role}</RoleBadge>
              </TableCell>
              <TableCell>{member.department}</TableCell>
              <TableCell>
                <StatusBadge status={member.status}>{member.status}</StatusBadge>
              </TableCell>
              <TableCell>{member.lastLogin}</TableCell>
              <TableCell>
                <ActionButtons>
                  <ActionButton onClick={() => openEditForm(member)}>
                    ✏️
                  </ActionButton>
                  <ActionButton onClick={() => handleDeleteMember(member.id)}>
                    🗑️
                  </ActionButton>
                </ActionButtons>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </TeamMembersTable>
      
      {filteredMembers.length === 0 && (
        <EmptyState>
          <EmptyStateIcon>👥</EmptyStateIcon>
          <EmptyStateText>No team members found matching your filters</EmptyStateText>
        </EmptyState>
      )}
      
      {/* Add Member Modal */}
      {showAddMemberForm && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Add Team Member</ModalTitle>
              <CloseButton onClick={() => setShowAddMemberForm(false)}>×</CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <Form onSubmit={handleAddMember}>
                <FormGroup>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
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
                    required
                  />
                </FormGroup>
                
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="role">Role</Label>
                    <Select 
                      id="role" 
                      name="role" 
                      value={formData.role}
                      onChange={handleRoleChange}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="Support">Support</option>
                    </Select>
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="department">Department</Label>
                    <Input 
                      type="text" 
                      id="department" 
                      name="department" 
                      value={formData.department}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </FormRow>
                
                <FormGroup>
                  <Label>Permissions</Label>
                  <PermissionsGrid>
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="perm-dashboard" 
                        checked={formData.permissions.includes('dashboard')}
                        onChange={() => handlePermissionChange('dashboard')}
                      />
                      <CheckboxLabel htmlFor="perm-dashboard">Dashboard</CheckboxLabel>
                    </PermissionItem>
                    
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="perm-artists" 
                        checked={formData.permissions.includes('artists')}
                        onChange={() => handlePermissionChange('artists')}
                      />
                      <CheckboxLabel htmlFor="perm-artists">Artists</CheckboxLabel>
                    </PermissionItem>
                    
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="perm-venues" 
                        checked={formData.permissions.includes('venues')}
                        onChange={() => handlePermissionChange('venues')}
                      />
                      <CheckboxLabel htmlFor="perm-venues">Venues</CheckboxLabel>
                    </PermissionItem>
                    
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="perm-financials" 
                        checked={formData.permissions.includes('financials')}
                        onChange={() => handlePermissionChange('financials')}
                      />
                      <CheckboxLabel htmlFor="perm-financials">Financials</CheckboxLabel>
                    </PermissionItem>
                    
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="perm-settings" 
                        checked={formData.permissions.includes('settings')}
                        onChange={() => handlePermissionChange('settings')}
                      />
                      <CheckboxLabel htmlFor="perm-settings">Settings</CheckboxLabel>
                    </PermissionItem>
                    
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="perm-brand-kit" 
                        checked={formData.permissions.includes('brand-kit')}
                        onChange={() => handlePermissionChange('brand-kit')}
                      />
                      <CheckboxLabel htmlFor="perm-brand-kit">Brand Kit</CheckboxLabel>
                    </PermissionItem>
                  </PermissionsGrid>
                </FormGroup>
                
                <FormActions>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowAddMemberForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    variant="primary"
                  >
                    Add Team Member
                  </Button>
                </FormActions>
              </Form>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
      
      {/* Edit Member Modal */}
      {showEditMemberForm && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Team Member</ModalTitle>
              <CloseButton onClick={() => setShowEditMemberForm(false)}>×</CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <Form onSubmit={handleEditMember}>
                <FormGroup>
                  <Label htmlFor="edit-name">Full Name</Label>
                  <Input 
                    type="text" 
                    id="edit-name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="edit-email">Email Address</Label>
                  <Input 
                    type="email" 
                    id="edit-email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="edit-role">Role</Label>
                    <Select 
                      id="edit-role" 
                      name="role" 
                      value={formData.role}
                      onChange={handleRoleChange}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="Support">Support</option>
                    </Select>
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="edit-department">Department</Label>
                    <Input 
                      type="text" 
                      id="edit-department" 
                      name="department" 
                      value={formData.department}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </FormRow>
                
                <FormGroup>
                  <Label>Permissions</Label>
                  <PermissionsGrid>
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="edit-perm-dashboard" 
                        checked={formData.permissions.includes('dashboard')}
                        onChange={() => handlePermissionChange('dashboard')}
                      />
                      <CheckboxLabel htmlFor="edit-perm-dashboard">Dashboard</CheckboxLabel>
                    </PermissionItem>
                    
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="edit-perm-artists" 
                        checked={formData.permissions.includes('artists')}
                        onChange={() => handlePermissionChange('artists')}
                      />
                      <CheckboxLabel htmlFor="edit-perm-artists">Artists</CheckboxLabel>
                    </PermissionItem>
                    
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="edit-perm-venues" 
                        checked={formData.permissions.includes('venues')}
                        onChange={() => handlePermissionChange('venues')}
                      />
                      <CheckboxLabel htmlFor="edit-perm-venues">Venues</CheckboxLabel>
                    </PermissionItem>
                    
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="edit-perm-financials" 
                        checked={formData.permissions.includes('financials')}
                        onChange={() => handlePermissionChange('financials')}
                      />
                      <CheckboxLabel htmlFor="edit-perm-financials">Financials</CheckboxLabel>
                    </PermissionItem>
                    
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="edit-perm-settings" 
                        checked={formData.permissions.includes('settings')}
                        onChange={() => handlePermissionChange('settings')}
                      />
                      <CheckboxLabel htmlFor="edit-perm-settings">Settings</CheckboxLabel>
                    </PermissionItem>
                    
                    <PermissionItem>
                      <Checkbox 
                        type="checkbox" 
                        id="edit-perm-brand-kit" 
                        checked={formData.permissions.includes('brand-kit')}
                        onChange={() => handlePermissionChange('brand-kit')}
                      />
                      <CheckboxLabel htmlFor="edit-perm-brand-kit">Brand Kit</CheckboxLabel>
                    </PermissionItem>
                  </PermissionsGrid>
                </FormGroup>
                
                <FormActions>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowEditMemberForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    variant="primary"
                  >
                    Save Changes
                  </Button>
                </FormActions>
              </Form>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </TeamMembersContainer>
  )
}

const TeamMembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const TeamMembersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.md};
  }
`

const TeamMembersTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const AddMemberButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

const TeamMembersFilters = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.lg};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.space.md};
  }
`

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
`

const SearchIcon = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.space.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.lightText};
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

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
`

const FilterLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const FilterSelect = styled.select`
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const TeamMembersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`

const TableHeader = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:first-child {
    padding-left: ${({ theme }) => theme.space.lg};
  }
  
  &:last-child {
    padding-right: ${({ theme }) => theme.space.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    &:nth-child(4), &:nth-child(5), &:nth-child(6) {
      display: none;
    }
  }
`

const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`

const TableCell = styled.td`
  padding: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:first-child {
    padding-left: ${({ theme }) => theme.space.lg};
  }
  
  &:last-child {
    padding-right: ${({ theme }) => theme.space.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    &:nth-child(4), &:nth-child(5), &:nth-child(6) {
      display: none;
    }
  }
`

const MemberName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const RoleBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme, role }) => 
    role === 'Admin' ? `${theme.colors.primary}20` : 
    role === 'Manager' ? `${theme.colors.info}20` : 
    `${theme.colors.success}20`
  };
  color: ${({ theme, role }) => 
    role === 'Admin' ? theme.colors.primary : 
    role === 'Manager' ? theme.colors.info : 
    theme.colors.success
  };
`

const StatusBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme, status }) => 
    status === 'Active' ? `${theme.colors.success}20` : 
    status === 'Inactive' ? `${theme.colors.lightText}20` : 
    `${theme.colors.warning}20`
  };
  color: ${({ theme, status }) => 
    status === 'Active' ? theme.colors.success : 
    status === 'Inactive' ? theme.colors.lightText : 
    theme.colors.warning
  };
`

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.xl};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const EmptyStateIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const EmptyStateText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
`

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
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
  max-width: 600px;
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
  margin: 0;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightText};
  
  &:hover {
    color: ${({ theme }) => theme.colors.darkText};
  }
`

const ModalBody = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const Input = styled.input`
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

const Select = styled.select`
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

const PermissionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const PermissionItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
`

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
`

const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  cursor: pointer;
`

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    
    button {
      width: 100%;
    }
  }
`

export default AdminTeamMembers
