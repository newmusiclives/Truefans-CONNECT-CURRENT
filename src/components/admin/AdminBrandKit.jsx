import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'

const AdminBrandKit = () => {
  const [activeTab, setActiveTab] = useState('colors')
  
  // Brand colors
  const brandColors = [
    { name: 'Primary', hex: '#FFD700', rgb: 'rgb(255, 215, 0)', usage: 'Primary buttons, highlights, and key interactive elements' },
    { name: 'TrustworthyNavy', hex: '#1A2B4C', rgb: 'rgb(26, 43, 76)', usage: 'Headers, footers, and primary background' },
    { name: 'TrustworthyNavyLight', hex: '#2A3B5C', rgb: 'rgb(42, 59, 92)', usage: 'Secondary backgrounds, hover states' },
    { name: 'Success', hex: '#4CAF50', rgb: 'rgb(76, 175, 80)', usage: 'Success messages, positive indicators' },
    { name: 'Warning', hex: '#FF9800', rgb: 'rgb(255, 152, 0)', usage: 'Warning messages, attention indicators' },
    { name: 'Error', hex: '#F44336', rgb: 'rgb(244, 67, 54)', usage: 'Error messages, destructive actions' },
    { name: 'Info', hex: '#2196F3', rgb: 'rgb(33, 150, 243)', usage: 'Information messages, neutral indicators' },
    { name: 'LightGray', hex: '#F5F7FA', rgb: 'rgb(245, 247, 250)', usage: 'Background for cards, subtle separators' },
    { name: 'MediumGray', hex: '#E1E4E8', rgb: 'rgb(225, 228, 232)', usage: 'Borders, dividers, secondary elements' },
    { name: 'DarkText', hex: '#333333', rgb: 'rgb(51, 51, 51)', usage: 'Primary text color' },
    { name: 'LightText', hex: '#6E7A8A', rgb: 'rgb(110, 122, 138)', usage: 'Secondary text, labels, placeholders' },
  ]
  
  // Typography
  const typography = [
    { name: 'Heading 1', size: '2.5rem (40px)', weight: 'Bold (700)', family: 'Inter, sans-serif', usage: 'Main page headings' },
    { name: 'Heading 2', size: '2rem (32px)', weight: 'SemiBold (600)', family: 'Inter, sans-serif', usage: 'Section headings' },
    { name: 'Heading 3', size: '1.5rem (24px)', weight: 'SemiBold (600)', family: 'Inter, sans-serif', usage: 'Subsection headings' },
    { name: 'Heading 4', size: '1.25rem (20px)', weight: 'Medium (500)', family: 'Inter, sans-serif', usage: 'Card headings, smaller sections' },
    { name: 'Body', size: '1rem (16px)', weight: 'Regular (400)', family: 'Inter, sans-serif', usage: 'Main body text' },
    { name: 'Small', size: '0.875rem (14px)', weight: 'Regular (400)', family: 'Inter, sans-serif', usage: 'Secondary text, captions' },
    { name: 'XSmall', size: '0.75rem (12px)', weight: 'Regular (400)', family: 'Inter, sans-serif', usage: 'Legal text, footnotes' },
  ]
  
  // Logos
  const logos = [
    { name: 'Primary Logo', description: 'Full color logo for use on light backgrounds', format: 'SVG, PNG', download: 'primary-logo.zip' },
    { name: 'Inverse Logo', description: 'White logo for use on dark backgrounds', format: 'SVG, PNG', download: 'inverse-logo.zip' },
    { name: 'Icon Only', description: 'Logo icon without text for small spaces', format: 'SVG, PNG', download: 'icon-only.zip' },
    { name: 'Monochrome', description: 'Single color versions for special applications', format: 'SVG, PNG', download: 'monochrome.zip' },
  ]
  
  // UI Components
  const uiComponents = [
    { name: 'Buttons', description: 'Primary, secondary, and tertiary button styles', preview: 'buttons.png' },
    { name: 'Forms', description: 'Input fields, checkboxes, radio buttons, and selects', preview: 'forms.png' },
    { name: 'Cards', description: 'Content containers for various information displays', preview: 'cards.png' },
    { name: 'Navigation', description: 'Header, footer, and sidebar navigation components', preview: 'navigation.png' },
    { name: 'Modals', description: 'Dialog boxes and overlay components', preview: 'modals.png' },
    { name: 'Tables', description: 'Data display tables with various styling options', preview: 'tables.png' },
  ]
  
  // Guidelines
  const guidelines = [
    { title: 'Logo Usage', content: 'Guidelines for proper logo placement, sizing, and clearance space.' },
    { title: 'Color Application', content: 'How to apply the color palette effectively across different mediums.' },
    { title: 'Typography Rules', content: 'Hierarchy, spacing, and alignment guidelines for text elements.' },
    { title: 'Voice & Tone', content: 'How to communicate in the TrueFans brand voice across different channels.' },
    { title: 'Photography Style', content: 'Guidelines for selecting and editing photos that align with the brand.' },
    { title: 'Accessibility', content: 'Ensuring all brand materials meet WCAG 2.1 AA standards for accessibility.' },
  ]
  
  // Function to copy color to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`Copied: ${text}`)
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }
  
  return (
    <BrandKitContainer>
      <BrandKitHeader>
        <BrandKitTitle>Brand Kit</BrandKitTitle>
        <BrandKitDescription>
          Comprehensive guidelines and assets for maintaining brand consistency across all touchpoints.
        </BrandKitDescription>
      </BrandKitHeader>
      
      <TabsContainer>
        <TabButton 
          active={activeTab === 'colors'} 
          onClick={() => setActiveTab('colors')}
        >
          Colors
        </TabButton>
        <TabButton 
          active={activeTab === 'typography'} 
          onClick={() => setActiveTab('typography')}
        >
          Typography
        </TabButton>
        <TabButton 
          active={activeTab === 'logos'} 
          onClick={() => setActiveTab('logos')}
        >
          Logos
        </TabButton>
        <TabButton 
          active={activeTab === 'ui'} 
          onClick={() => setActiveTab('ui')}
        >
          UI Components
        </TabButton>
        <TabButton 
          active={activeTab === 'guidelines'} 
          onClick={() => setActiveTab('guidelines')}
        >
          Guidelines
        </TabButton>
      </TabsContainer>
      
      <TabContent>
        {activeTab === 'colors' && (
          <ColorsSection>
            <SectionSubtitle>Brand Colors</SectionSubtitle>
            <ColorsGrid>
              {brandColors.map(color => (
                <ColorCard key={color.name}>
                  <ColorSwatch color={color.hex} onClick={() => copyToClipboard(color.hex)} />
                  <ColorInfo>
                    <ColorName>{color.name}</ColorName>
                    <ColorValues>
                      <ColorValue onClick={() => copyToClipboard(color.hex)}>{color.hex}</ColorValue>
                      <ColorValue onClick={() => copyToClipboard(color.rgb)}>{color.rgb}</ColorValue>
                    </ColorValues>
                    <ColorUsage>{color.usage}</ColorUsage>
                  </ColorInfo>
                </ColorCard>
              ))}
            </ColorsGrid>
            <DownloadSection>
              <Button variant="primary">Download Color Palette (Adobe)</Button>
              <Button variant="outline">Download Color Palette (Figma)</Button>
            </DownloadSection>
          </ColorsSection>
        )}
        
        {activeTab === 'typography' && (
          <TypographySection>
            <SectionSubtitle>Typography System</SectionSubtitle>
            <TypographyInfo>
              <p>Our brand uses the Inter font family for all digital and print applications. Inter is a versatile sans-serif typeface designed for excellent readability on screens.</p>
            </TypographyInfo>
            
            <TypographyTable>
              <thead>
                <tr>
                  <th>Style</th>
                  <th>Size</th>
                  <th>Weight</th>
                  <th>Font Family</th>
                  <th>Usage</th>
                </tr>
              </thead>
              <tbody>
                {typography.map(type => (
                  <tr key={type.name}>
                    <td>
                      <TypeSample style={{ 
                        fontSize: type.size.split(' ')[0], 
                        fontWeight: type.weight.split(' ')[1].replace('(', '').replace(')', '') 
                      }}>
                        {type.name}
                      </TypeSample>
                    </td>
                    <td>{type.size}</td>
                    <td>{type.weight}</td>
                    <td>{type.family}</td>
                    <td>{type.usage}</td>
                  </tr>
                ))}
              </tbody>
            </TypographyTable>
            
            <DownloadSection>
              <Button variant="primary">Download Font Files</Button>
              <Button variant="outline">Typography Guidelines PDF</Button>
            </DownloadSection>
          </TypographySection>
        )}
        
        {activeTab === 'logos' && (
          <LogosSection>
            <SectionSubtitle>Logo Assets</SectionSubtitle>
            <LogoInfo>
              <p>The TrueFans CONNECT™ logo represents our brand identity. Use these official logo files for all communications and marketing materials.</p>
            </LogoInfo>
            
            <LogosGrid>
              {logos.map(logo => (
                <LogoCard key={logo.name}>
                  <LogoPreview>
                    <LogoPlaceholder>{logo.name}</LogoPlaceholder>
                  </LogoPreview>
                  <LogoDetails>
                    <LogoName>{logo.name}</LogoName>
                    <LogoDescription>{logo.description}</LogoDescription>
                    <LogoFormat>Format: {logo.format}</LogoFormat>
                    <DownloadButton variant="outline" size="sm">Download</DownloadButton>
                  </LogoDetails>
                </LogoCard>
              ))}
            </LogosGrid>
            
            <LogoUsageGuidelines>
              <h3>Logo Usage Guidelines</h3>
              <LogoGuidelinesList>
                <LogoGuidelineItem>Maintain clear space around the logo equal to the height of the "T" in TrueFans.</LogoGuidelineItem>
                <LogoGuidelineItem>Never alter the logo colors outside of the approved versions provided.</LogoGuidelineItem>
                <LogoGuidelineItem>Do not stretch, distort, or rotate the logo.</LogoGuidelineItem>
                <LogoGuidelineItem>Ensure the logo is legible at all sizes. For very small applications, use the icon-only version.</LogoGuidelineItem>
              </LogoGuidelinesList>
            </LogoUsageGuidelines>
          </LogosSection>
        )}
        
        {activeTab === 'ui' && (
          <UIComponentsSection>
            <SectionSubtitle>UI Component Library</SectionSubtitle>
            <UIInfo>
              <p>These standardized UI components ensure consistency across all digital products and interfaces.</p>
            </UIInfo>
            
            <UIComponentsGrid>
              {uiComponents.map(component => (
                <UIComponentCard key={component.name}>
                  <UIComponentPreview>
                    <UIComponentPlaceholder>{component.name}</UIComponentPlaceholder>
                  </UIComponentPreview>
                  <UIComponentDetails>
                    <UIComponentName>{component.name}</UIComponentName>
                    <UIComponentDescription>{component.description}</UIComponentDescription>
                  </UIComponentDetails>
                </UIComponentCard>
              ))}
            </UIComponentsGrid>
            
            <DownloadSection>
              <Button variant="primary">Download UI Kit (Figma)</Button>
              <Button variant="outline">Download UI Kit (Sketch)</Button>
            </DownloadSection>
          </UIComponentsSection>
        )}
        
        {activeTab === 'guidelines' && (
          <GuidelinesSection>
            <SectionSubtitle>Brand Guidelines</SectionSubtitle>
            <GuidelinesInfo>
              <p>These guidelines help maintain brand consistency across all communications and touchpoints.</p>
            </GuidelinesInfo>
            
            <GuidelinesList>
              {guidelines.map((guideline, index) => (
                <GuidelineItem key={index}>
                  <GuidelineTitle>{guideline.title}</GuidelineTitle>
                  <GuidelineContent>{guideline.content}</GuidelineContent>
                  <GuidelineAction>
                    <Button variant="text" size="sm">View Details</Button>
                  </GuidelineAction>
                </GuidelineItem>
              ))}
            </GuidelinesList>
            
            <DownloadSection>
              <Button variant="primary">Download Complete Brand Guidelines (PDF)</Button>
            </DownloadSection>
          </GuidelinesSection>
        )}
      </TabContent>
    </BrandKitContainer>
  )
}

const BrandKitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const BrandKitHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const BrandKitTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const BrandKitDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 800px;
`

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.space.lg};
  overflow-x: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: nowrap;
    padding-bottom: ${({ theme }) => theme.space.xs};
  }
`

const TabButton = styled.button`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background: none;
  border: none;
  border-bottom: 3px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.darkText : theme.colors.lightText};
  font-weight: ${({ active, theme }) => active ? theme.fontWeights.semiBold : theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.colors.darkText};
  }
`

const TabContent = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const SectionSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

// Colors Section
const ColorsSection = styled.div``

const ColorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ColorCard = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const ColorSwatch = styled.div`
  width: 80px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    opacity: 0.9;
  }
`

const ColorInfo = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.space.md};
  background-color: white;
`

const ColorName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ColorValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ColorValue = styled.div`
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ColorUsage = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

// Typography Section
const TypographySection = styled.div``

const TypographyInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.lightText};
  }
`

const TypographyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  th, td {
    padding: ${({ theme }) => theme.space.md};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  }
  
  th {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${({ theme }) => theme.colors.darkText};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  
  td {
    color: ${({ theme }) => theme.colors.lightText};
  }
`

const TypeSample = styled.div`
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.2;
`

// Logos Section
const LogosSection = styled.div``

const LogoInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.lightText};
  }
`

const LogosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const LogoCard = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  background-color: white;
`

const LogoPreview = styled.div`
  height: 150px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
`

const LogoPlaceholder = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const LogoDetails = styled.div`
  padding: ${({ theme }) => theme.space.md};
`

const LogoName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const LogoDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const LogoFormat = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const DownloadButton = styled(Button)`
  width: 100%;
`

const LogoUsageGuidelines = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin-bottom: ${({ theme }) => theme.space.md};
  }
`

const LogoGuidelinesList = styled.ul`
  padding-left: ${({ theme }) => theme.space.lg};
`

const LogoGuidelineItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.sm};
  line-height: 1.6;
  
  &:last-child {
    margin-bottom: 0;
  }
`

// UI Components Section
const UIComponentsSection = styled.div``

const UIInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.lightText};
  }
`

const UIComponentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const UIComponentCard = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  background-color: white;
`

const UIComponentPreview = styled.div`
  height: 180px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
`

const UIComponentPlaceholder = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const UIComponentDetails = styled.div`
  padding: ${({ theme }) => theme.space.md};
`

const UIComponentName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const UIComponentDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

// Guidelines Section
const GuidelinesSection = styled.div``

const GuidelinesInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.lightText};
  }
`

const GuidelinesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const GuidelineItem = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`

const GuidelineTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const GuidelineContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.6;
`

const GuidelineAction = styled.div``

const DownloadSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

export default AdminBrandKit
