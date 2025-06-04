import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// Replacing react-icons with Unicode emoji icons
// import { AiOutlineSave, AiOutlineReload, AiOutlinePicture, AiOutlineFont, AiOutlineBgColors, AiOutlineCheck } from 'react-icons/ai'
import Button from '../ui/Button'
import { theme as defaultTheme } from '../../styles/theme'

const AdminBrandKit = () => {
  const [brandColors, setBrandColors] = useState({
    primary: defaultTheme.colors.primary,
    primaryDark: defaultTheme.colors.primaryDark,
    primaryLight: defaultTheme.colors.primaryLight,
    secondary: defaultTheme.colors.secondary,
    secondaryDark: defaultTheme.colors.secondaryDark,
    secondaryLight: defaultTheme.colors.secondaryLight,
    trustworthyNavy: defaultTheme.colors.trustworthyNavy,
    trustworthyNavyLight: defaultTheme.colors.trustworthyNavyLight,
  })
  
  const [siteImages, setSiteImages] = useState({
    logo: '/logo.png',
    hero: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg',
    about: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    artists: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg',
    venues: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
  })
  
  const [fonts, setFonts] = useState({
    headings: 'Inter',
    body: 'Inter',
  })
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  
  const handleColorChange = (colorKey, value) => {
    setBrandColors(prev => ({
      ...prev,
      [colorKey]: value
    }))
  }
  
  const handleImageChange = (imageKey, value) => {
    setSiteImages(prev => ({
      ...prev,
      [imageKey]: value
    }))
  }
  
  const handleFontChange = (fontKey, value) => {
    setFonts(prev => ({
      ...prev,
      [fontKey]: value
    }))
  }
  
  const handleSaveChanges = () => {
    // In a real application, this would save to a database or configuration file
    console.log('Saving brand settings:', { brandColors, siteImages, fonts })
    
    // Show success message
    setShowSuccessMessage(true)
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)
  }
  
  const handleResetToDefaults = () => {
    setBrandColors({
      primary: defaultTheme.colors.primary,
      primaryDark: defaultTheme.colors.primaryDark,
      primaryLight: defaultTheme.colors.primaryLight,
      secondary: defaultTheme.colors.secondary,
      secondaryDark: defaultTheme.colors.secondaryDark,
      secondaryLight: defaultTheme.colors.secondaryLight,
      trustworthyNavy: defaultTheme.colors.trustworthyNavy,
      trustworthyNavyLight: defaultTheme.colors.trustworthyNavyLight,
    })
    
    setSiteImages({
      logo: '/logo.png',
      hero: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg',
      about: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      artists: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg',
      venues: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    })
    
    setFonts({
      headings: 'Inter',
      body: 'Inter',
    })
  }
  
  // Available font options
  const fontOptions = [
    'Inter',
    'Roboto',
    'Open Sans',
    'Montserrat',
    'Lato',
    'Poppins',
    'Raleway',
    'Playfair Display',
    'Merriweather',
    'Source Sans Pro',
  ]
  
  return (
    <BrandKitContainer>
      <BrandKitHeader>
        <BrandKitTitle>Brand Customization</BrandKitTitle>
        <HeaderActions>
          <Button 
            variant="outline" 
            size="md" 
            icon={<span>🔄</span>}
            onClick={handleResetToDefaults}
          >
            Reset to Defaults
          </Button>
          <Button 
            variant="primary" 
            size="md" 
            icon={<span>💾</span>}
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </HeaderActions>
      </BrandKitHeader>
      
      {showSuccessMessage && (
        <SuccessMessage>
          <SuccessIcon>✅</SuccessIcon>
          Brand settings saved successfully!
        </SuccessMessage>
      )}
      
      <BrandKitSection>
        <SectionTitle>
          <SectionIcon>🎨</SectionIcon>
          Color Palette
        </SectionTitle>
        <SectionDescription>
          Customize your brand colors. These colors will be applied throughout the platform.
        </SectionDescription>
        
        <ColorGrid>
          <ColorItem>
            <ColorLabel>Primary</ColorLabel>
            <ColorPreview color={brandColors.primary} />
            <ColorInput 
              type="color" 
              value={brandColors.primary}
              onChange={(e) => handleColorChange('primary', e.target.value)}
            />
            <ColorValue>{brandColors.primary}</ColorValue>
          </ColorItem>
          
          <ColorItem>
            <ColorLabel>Primary Dark</ColorLabel>
            <ColorPreview color={brandColors.primaryDark} />
            <ColorInput 
              type="color" 
              value={brandColors.primaryDark}
              onChange={(e) => handleColorChange('primaryDark', e.target.value)}
            />
            <ColorValue>{brandColors.primaryDark}</ColorValue>
          </ColorItem>
          
          <ColorItem>
            <ColorLabel>Primary Light</ColorLabel>
            <ColorPreview color={brandColors.primaryLight} />
            <ColorInput 
              type="color" 
              value={brandColors.primaryLight}
              onChange={(e) => handleColorChange('primaryLight', e.target.value)}
            />
            <ColorValue>{brandColors.primaryLight}</ColorValue>
          </ColorItem>
          
          <ColorItem>
            <ColorLabel>Secondary</ColorLabel>
            <ColorPreview color={brandColors.secondary} />
            <ColorInput 
              type="color" 
              value={brandColors.secondary}
              onChange={(e) => handleColorChange('secondary', e.target.value)}
            />
            <ColorValue>{brandColors.secondary}</ColorValue>
          </ColorItem>
          
          <ColorItem>
            <ColorLabel>Secondary Dark</ColorLabel>
            <ColorPreview color={brandColors.secondaryDark} />
            <ColorInput 
              type="color" 
              value={brandColors.secondaryDark}
              onChange={(e) => handleColorChange('secondaryDark', e.target.value)}
            />
            <ColorValue>{brandColors.secondaryDark}</ColorValue>
          </ColorItem>
          
          <ColorItem>
            <ColorLabel>Secondary Light</ColorLabel>
            <ColorPreview color={brandColors.secondaryLight} />
            <ColorInput 
              type="color" 
              value={brandColors.secondaryLight}
              onChange={(e) => handleColorChange('secondaryLight', e.target.value)}
            />
            <ColorValue>{brandColors.secondaryLight}</ColorValue>
          </ColorItem>
          
          <ColorItem>
            <ColorLabel>Navy</ColorLabel>
            <ColorPreview color={brandColors.trustworthyNavy} />
            <ColorInput 
              type="color" 
              value={brandColors.trustworthyNavy}
              onChange={(e) => handleColorChange('trustworthyNavy', e.target.value)}
            />
            <ColorValue>{brandColors.trustworthyNavy}</ColorValue>
          </ColorItem>
          
          <ColorItem>
            <ColorLabel>Navy Light</ColorLabel>
            <ColorPreview color={brandColors.trustworthyNavyLight} />
            <ColorInput 
              type="color" 
              value={brandColors.trustworthyNavyLight}
              onChange={(e) => handleColorChange('trustworthyNavyLight', e.target.value)}
            />
            <ColorValue>{brandColors.trustworthyNavyLight}</ColorValue>
          </ColorItem>
        </ColorGrid>
        
        <ColorPreviewSection>
          <PreviewTitle>Color Preview</PreviewTitle>
          <PreviewDescription>See how your colors look together</PreviewDescription>
          
          <PreviewElements>
            <PreviewButton color={brandColors.primary}>Primary Button</PreviewButton>
            <PreviewButton color={brandColors.secondary}>Secondary Button</PreviewButton>
            <PreviewCard 
              bgColor={brandColors.trustworthyNavy} 
              textColor="white"
              accentColor={brandColors.primary}
            >
              <PreviewCardTitle>Card Title</PreviewCardTitle>
              <PreviewCardText>This is how your colors will look on dark backgrounds.</PreviewCardText>
            </PreviewCard>
            <PreviewCard 
              bgColor="white" 
              textColor={brandColors.trustworthyNavy}
              accentColor={brandColors.primary}
            >
              <PreviewCardTitle>Card Title</PreviewCardTitle>
              <PreviewCardText>This is how your colors will look on light backgrounds.</PreviewCardText>
            </PreviewCard>
          </PreviewElements>
        </ColorPreviewSection>
      </BrandKitSection>
      
      <BrandKitSection>
        <SectionTitle>
          <SectionIcon>🔤</SectionIcon>
          Typography
        </SectionTitle>
        <SectionDescription>
          Choose fonts for your headings and body text. These fonts will be applied throughout the platform.
        </SectionDescription>
        
        <FontSelectionGrid>
          <FontSelectionItem>
            <FontLabel>Heading Font</FontLabel>
            <FontSelect 
              value={fonts.headings}
              onChange={(e) => handleFontChange('headings', e.target.value)}
            >
              {fontOptions.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </FontSelect>
            <FontPreview fontFamily={fonts.headings}>
              <FontPreviewHeading>This is a heading</FontPreviewHeading>
              <FontPreviewSubheading>This is a subheading</FontPreviewSubheading>
            </FontPreview>
          </FontSelectionItem>
          
          <FontSelectionItem>
            <FontLabel>Body Font</FontLabel>
            <FontSelect 
              value={fonts.body}
              onChange={(e) => handleFontChange('body', e.target.value)}
            >
              {fontOptions.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </FontSelect>
            <FontPreview fontFamily={fonts.body}>
              <FontPreviewParagraph>
                This is a paragraph of text that shows how your body font will look throughout the platform. 
                It should be easy to read at various sizes and work well with your brand colors.
              </FontPreviewParagraph>
            </FontPreview>
          </FontSelectionItem>
        </FontSelectionGrid>
      </BrandKitSection>
      
      <BrandKitSection>
        <SectionTitle>
          <SectionIcon>🖼️</SectionIcon>
          Site Images
        </SectionTitle>
        <SectionDescription>
          Update the key images used throughout the platform. For best results, use high-quality images in the recommended dimensions.
        </SectionDescription>
        
        <ImagesGrid>
          <ImageItem>
            <ImageLabel>Logo</ImageLabel>
            <ImagePreview>
              <img src={siteImages.logo} alt="Logo Preview" />
            </ImagePreview>
            <ImageInput
              type="text"
              value={siteImages.logo}
              onChange={(e) => handleImageChange('logo', e.target.value)}
              placeholder="Enter logo URL"
            />
            <ImageDimensions>Recommended: 200×50px</ImageDimensions>
          </ImageItem>
          
          <ImageItem>
            <ImageLabel>Hero Image</ImageLabel>
            <ImagePreview large>
              <img src={siteImages.hero} alt="Hero Preview" />
            </ImagePreview>
            <ImageInput
              type="text"
              value={siteImages.hero}
              onChange={(e) => handleImageChange('hero', e.target.value)}
              placeholder="Enter hero image URL"
            />
            <ImageDimensions>Recommended: 1920×1080px</ImageDimensions>
          </ImageItem>
          
          <ImageItem>
            <ImageLabel>About Page Image</ImageLabel>
            <ImagePreview>
              <img src={siteImages.about} alt="About Page Preview" />
            </ImagePreview>
            <ImageInput
              type="text"
              value={siteImages.about}
              onChange={(e) => handleImageChange('about', e.target.value)}
              placeholder="Enter about page image URL"
            />
            <ImageDimensions>Recommended: 800×600px</ImageDimensions>
          </ImageItem>
          
          <ImageItem>
            <ImageLabel>Artists Page Image</ImageLabel>
            <ImagePreview>
              <img src={siteImages.artists} alt="Artists Page Preview" />
            </ImagePreview>
            <ImageInput
              type="text"
              value={siteImages.artists}
              onChange={(e) => handleImageChange('artists', e.target.value)}
              placeholder="Enter artists page image URL"
            />
            <ImageDimensions>Recommended: 800×600px</ImageDimensions>
          </ImageItem>
          
          <ImageItem>
            <ImageLabel>Venues Page Image</ImageLabel>
            <ImagePreview>
              <img src={siteImages.venues} alt="Venues Page Preview" />
            </ImagePreview>
            <ImageInput
              type="text"
              value={siteImages.venues}
              onChange={(e) => handleImageChange('venues', e.target.value)}
              placeholder="Enter venues page image URL"
            />
            <ImageDimensions>Recommended: 800×600px</ImageDimensions>
          </ImageItem>
        </ImagesGrid>
      </BrandKitSection>
      
      <SaveButtonContainer>
        <Button 
          variant="primary" 
          size="lg" 
          icon={<span>💾</span>}
          onClick={handleSaveChanges}
        >
          Save All Changes
        </Button>
      </SaveButtonContainer>
    </BrandKitContainer>
  )
}

const BrandKitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const BrandKitHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.md};
  }
`

const BrandKitTitle = styled.h1`
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

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.success}15`};
  color: ${({ theme }) => theme.colors.success};
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const SuccessIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

const BrandKitSection = styled.section`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0 0 ${({ theme }) => theme.space.sm} 0;
`

const SectionIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0 0 ${({ theme }) => theme.space.lg} 0;
`

// Color Palette Styles
const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ColorItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ColorLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ColorPreview = styled.div`
  width: 100px;
  height: 100px;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ color }) => color};
  margin-bottom: ${({ theme }) => theme.space.sm};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const ColorInput = styled.input`
  width: 100px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.space.sm};
  cursor: pointer;
  
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: ${({ theme }) => theme.radii.md};
  }
`

const ColorValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  font-family: monospace;
`

// Color Preview Styles
const ColorPreviewSection = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
`

const PreviewTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0 0 ${({ theme }) => theme.space.xs} 0;
`

const PreviewDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0 0 ${({ theme }) => theme.space.lg} 0;
`

const PreviewElements = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const PreviewButton = styled.button`
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    opacity: 0.9;
  }
`

const PreviewCard = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-left: 4px solid ${({ accentColor }) => accentColor};
`

const PreviewCardTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin: 0 0 ${({ theme }) => theme.space.md} 0;
`

const PreviewCardText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 0;
  opacity: 0.9;
`

// Typography Styles
const FontSelectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
`

const FontSelectionItem = styled.div`
  display: flex;
  flex-direction: column;
`

const FontLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const FontSelect = styled.select`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.md}`};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: white;
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const FontPreview = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  font-family: ${({ fontFamily }) => fontFamily}, sans-serif;
`

const FontPreviewHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0 0 ${({ theme }) => theme.space.md} 0;
`

const FontPreviewSubheading = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0 0 ${({ theme }) => theme.space.md} 0;
`

const FontPreviewParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

// Images Styles
const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
`

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ImagePreview = styled.div`
  width: 100%;
  height: ${({ large }) => large ? '200px' : '150px'};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.space.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageInput = styled.input`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.md}`};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: white;
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const ImageDimensions = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space.md};
`

export default AdminBrandKit
