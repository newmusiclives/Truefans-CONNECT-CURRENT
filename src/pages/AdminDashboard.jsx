import React, { useState } from 'react'
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
// Use simple unicode icons instead of react-icons
// This avoids any dependency issues with react-icons

const AdminDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  // Check if we're on a specific admin route
  const isActive = (path) => {
    return location.pathname === `/admin${path}`
  }
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
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
              <SidebarNavLink to="/" onClick={() => setIsSidebarOpen(true)}>
                <SidebarNavIcon>🚪</SidebarNavIcon>
                <SidebarNavText open={isSidebarOpen}>Exit Admin</SidebarNavText>
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
