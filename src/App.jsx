import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ArtistSignup from './pages/ArtistSignUp'
import VenueSignup from './pages/VenueSignUp'
import DonationSystem from './pages/DonationSystem'
import HelpCenter from './pages/HelpCenter'
import Blog from './pages/Blog'
import BlogPostPage from './pages/BlogPost'
import SuccessStories from './pages/SuccessStories'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import AdminArtists from './components/admin/AdminArtists'
import AdminVenues from './components/admin/AdminVenues'
import AdminDonations from './components/admin/AdminFinancials'
import AdminSettings from './components/admin/AdminSettings'
import AdminReports from './components/admin/AdminReports'
import AdminSupport from './components/admin/AdminSupport'
import ArtistDashboard from './pages/ArtistDashboard'
import VenuePortal from './pages/VenuePortal'
import VenuePortalInfo from './pages/VenuePortalInfo'
import VenueEvents from './pages/VenueEvents'
import VenueArtists from './pages/VenueArtists'
import VenueSettings from './pages/VenueSettings'
import VenueAnalytics from './pages/VenueAnalytics'
import NotFound from './pages/NotFound'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import Press from './pages/Press'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import ArtistsDirectory from './pages/ArtistsDirectory'
import AffiliateProgram from './pages/AffiliateProgram'
import ArtistProfile from './pages/ArtistProfile'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState(null)
  
  // Check if user is logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setIsLoggedIn(true)
      setUserRole(foundUser.role)
    }
  }, [])
  
  // Handle login
  const handleLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setIsLoggedIn(true)
    setUserRole(user.role)
  }
  
  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    setUserRole(null)
  }
  
  // Protected route component
  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />
    }
    
    if (allowedRoles && !allowedRoles.includes(userRole)) {
      return <Navigate to="/" replace />
    }
    
    return children
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header isLoggedIn={isLoggedIn} userRole={userRole} onLogout={handleLogout} />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artist-signup" element={<ArtistSignup />} />
        <Route path="/venue-signup" element={<VenueSignup />} />
        <Route path="/venue-portal-info" element={<VenuePortalInfo />} />
        <Route path="/donation-system" element={<DonationSystem />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/press" element={<Press />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artists-directory" element={<ArtistsDirectory />} />
        <Route path="/affiliate-program" element={<AffiliateProgram />} />
        <Route path="/artist-profile/:id" element={<ArtistProfile />} />
        
        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        
        {/* Artist routes */}
        <Route 
          path="/artist-portal" 
          element={
            <ProtectedRoute allowedRoles={['artist']}>
              <ArtistDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Venue routes */}
        <Route 
          path="/venue-portal" 
          element={
            <ProtectedRoute allowedRoles={['venue']}>
              <VenuePortal />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/venue-portal/events" 
          element={
            <ProtectedRoute allowedRoles={['venue']}>
              <VenueEvents />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/venue-portal/artists" 
          element={
            <ProtectedRoute allowedRoles={['venue']}>
              <VenueArtists />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/venue-portal/settings" 
          element={
            <ProtectedRoute allowedRoles={['venue']}>
              <VenueSettings />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/venue-portal/analytics" 
          element={
            <ProtectedRoute allowedRoles={['venue']}>
              <VenueAnalytics />
            </ProtectedRoute>
          } 
        />
        
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
