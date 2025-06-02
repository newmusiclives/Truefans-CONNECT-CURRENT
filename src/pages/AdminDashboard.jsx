import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import PageTransition from '../components/common/PageTransition'
import Button from '../components/ui/Button'
import AdminOverview from '../components/admin/AdminOverview'
import AdminArtists from '../components/admin/AdminArtists'
import AdminVenues from '../components/admin/AdminVenues'
import AdminFinancials from '../components/admin/AdminFinancials'
import AdminBrandKit from '../components/admin/AdminBrandKit'
import AdminSettings from '../components/admin/AdminSettings'
import AdminTeamMembers from '../components/admin/AdminTeamMembers'
import Login from './Login'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  // Check if we're on a specific admin route
  const isActive = (path) => {
    return location.pathname === `/admin${path}`
  }
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  // Check for authentication when component mounts
  useEffect(() => {
    // In a real app, this would check for a valid auth token
    // For demo purposes, we'll check if the user has logged in during this session
    const isLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true'
    setIsAuthenticated(isLoggedIn)
  }, [])
  
  // Handle successful login
  const handleLoginSuccess = () => {
    sessionStorage.setItem('isAdminLoggedIn', 'true')
    setIsAuthenticated(true)
    navigate('/admin')
  }
  
  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn')
    setIsAuthenticated(false)
    navigate('/login')
  }
  
  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />
  }
  
  return (
    <PageTransition>
      <AdminContainer>
        <Sidebar open={isSidebarOpen}>
          <SidebarHeader>
            <SidebarLogo>TrueFans ADMIN</SidebarLogo>
            <SidebarToggle onClick={toggleSidebar}>
              {isSidebarOpen ? '←' : '→'}
            </SidebarToggle>
          </SidebarHeader>
          
          <SidebarNav>
            <SidebarNavItem active={isActive('')}>
              <SidebarNavLink to="/admin" onClick={() => setIsSidebarOpen(true)}>
                <SidebarNavIcon>🏠</SidebarNavIcon>
                <SidebarNavText open={isSidebarOpen}>Overview</SidebarNavText>
              </SidebarNavLink>
            </SidebarNavItem>
            
            <SidebarNavItem active={isActive('/artists')}>
              <SidebarNavLink to="/admin/artists" onClick={() => setIsSidebarOpen(true)}>
                <SidebarNavIcon>👤</SidebarNavIcon>
                <SidebarNavText open={isSidebarOpen}>Artists</SidebarNavText>
              </SidebarNavLink>
            </SidebarNavItem>
            
            <SidebarNavItem active={isActive('/venues')}>
              <SidebarNavLink to="/admin/venues" onClick={() => setIsSidebarOpen(true)}>
                <SidebarNavIcon>📍</SidebarNavIcon>
                <SidebarNavText open={isSidebarOpen}>Venues</SidebarNavText>
              </SidebarNavLink>
            </SidebarNavItem>
            
            <SidebarNavItem active={isActive('/financials')}>
              <SidebarNavLink to="/admin/financials" onClick={() => setIsSidebarOpen(true)}>
                <SidebarNavIcon>💰</SidebarNavIcon>
                <SidebarNavText open={isSidebarOpen}>Financials</SidebarNavText>
              </SidebarNavLink>
            </SidebarNavItem>
            
            <SidebarNavItem active={isActive('/team-members')}>
              <SidebarNavLink to="/admin/team-members" onClick={() => setIsSidebarOpen(true)}>
                <SidebarNavIcon>👥</SidebarNavIcon>
                <SidebarNavText open={isSidebarOpen}>Team Members</SidebarNavText>
              </SidebarNavLink>
            </SidebarNavItem>
            
            <SidebarNavItem active={isActive('/brand-kit')}>
              <SidebarNavLink to="/admin/brand-kit" onClick={() => setIsSidebarOpen(true)}>
                <SidebarNavIcon>🎨</SidebarNavIcon>
                <SidebarNavText open={isSidebarOpen}>Brand Kit</SidebarNavText>
              </SidebarNavLink>
            </SidebarNavItem>
            
            <SidebarNavItem active={isActive('/settings')}>
              <SidebarNavLink to="/admin/settings" onClick={() => setIsSidebarOpen(true)}>
                <SidebarNavIcon>⚙️</SidebarNavIcon>
                <SidebarNavText open={isSidebarOpen}>Settings</SidebarNavText>
              </SidebarNavLink>
            </SidebarNavItem>
          </SidebarNav>
          
          <SidebarFooter>
            <SidebarNavItem>
              <SidebarNavLink as="button" onClick={handleLogout}>
                <SidebarNavIcon>🚪</SidebarNavIcon>
                <SidebarNavText open={isSidebarOpen}>Logout</SidebarNavText>
              </SidebarNavLink>
            </SidebarNavItem>
          </SidebarFooter>
        </Sidebar>
        
        <MainContent sidebarOpen={isSidebarOpen}>
          <Routes>
            <Route path="/" element={<AdminOverview />} />
            <Route path="/artists" element={<AdminArtists />} />
            <Route path="/venues" element={<AdminVenues />} />
            <Route path="/financials" element={<AdminFinancials />} />
            <Route path="/team-members" element={<AdminTeamMembers />} />
            <Route path="/brand-kit" element={<AdminBrandKit />} />
            <Route path="/settings" element={<AdminSettings />} />
          </Routes>
        </MainContent>
      </AdminContainer>
    </PageTransition>
  )
}

const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`

const Sidebar = styled.aside`
  width: ${({ open }) => open ? '250px' : '70px'};
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow-x: hidden;
`

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.md};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const SidebarLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const SidebarToggle = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.xs};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`

const SidebarNavItem = styled.li`
  margin: 0;
  background-color: ${({ active, theme }) => 
    active ? `${theme.colors.trustworthyNavyLight}` : 'transparent'};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.trustworthyNavyLight};
  }
`

const SidebarNavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.md}`};
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`

const SidebarNavIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  margin-right: ${({ theme }) => theme.space.md};
`

const SidebarNavText = styled.span`
  white-space: nowrap;
  opacity: ${({ open }) => open ? 1 : 0};
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  transition: opacity 0.2s ease, visibility 0.2s ease;
`

const SidebarFooter = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.space.md} 0;
`

const MainContent = styled.main`
  flex: 1;
  margin-left: ${({ sidebarOpen }) => sidebarOpen ? '250px' : '70px'};
  padding: ${({ theme }) => theme.space.lg};
  transition: margin-left 0.3s ease;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 70px;
  }
`

export default AdminDashboard
