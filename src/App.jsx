import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'
import ScrollToTop from './components/common/ScrollToTop'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import ArtistsDirectory from './pages/ArtistsDirectory'
import VenuePortal from './pages/VenuePortal'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Press from './pages/Press'
import PressArticle from './pages/PressArticle'
import MediaArticle from './pages/MediaArticle'
import PressKitResource from './pages/PressKitResource'
import Contact from './pages/Contact'
import Login from './pages/Login'
import ArtistSignUp from './pages/ArtistSignUp'
import VenueSignUp from './pages/VenueSignUp'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artists" element={<ArtistsDirectory />} />
        <Route path="/venues" element={<VenuePortal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/press" element={<Press />} />
        <Route path="/press/:slug" element={<PressArticle />} />
        <Route path="/media/:slug" element={<MediaArticle />} />
        <Route path="/press-kit/:slug" element={<PressKitResource />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artist-signup" element={<ArtistSignUp />} />
        <Route path="/venue-signup" element={<VenueSignUp />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
