import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/HomePage'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Press from './pages/Press'
import PressRelease from './pages/PressRelease'
import Contact from './pages/Contact'
import ArtistDashboard from './pages/ArtistDashboard'
import VenuePortal from './pages/VenuePortal'
import DonationSystem from './pages/DonationSystem'
import AffiliateProgram from './pages/AffiliateProgram'
import ArtistSignup from './pages/ArtistSignup'
import VenueSignup from './pages/VenueSignUp'
import MyDashboard from './pages/MyDashboard'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import ArtistsDirectory from './pages/ArtistsDirectory'
import ArtistProfile from './pages/ArtistProfile'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/press" element={<Press />} />
          <Route path="/press/:id" element={<PressRelease />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artist-dashboard" element={<ArtistDashboard />} />
          <Route path="/venue-portal" element={<VenuePortal />} />
          <Route path="/donation-system" element={<DonationSystem />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/artist-signup" element={<ArtistSignup />} />
          <Route path="/venue-signup" element={<VenueSignup />} />
          <Route path="/my-dashboard" element={<MyDashboard />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/artists" element={<ArtistsDirectory />} />
          <Route path="/artist-profile" element={<ArtistProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  )
}

export default App
