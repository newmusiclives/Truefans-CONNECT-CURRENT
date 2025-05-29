import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const DonationSystem = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [copiedItem, setCopiedItem] = useState(null)
  
  const handleCopy = (text, item) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedItem(item)
        setTimeout(() => setCopiedItem(null), 2000)
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }
  
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <PageHeader>
          <PageTitle>Donation System</PageTitle>
          <PageDescription>Multiple ways for your fans to support your music</PageDescription>
        </PageHeader>
        
        <TabsContainer>
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </TabButton>
          <TabButton 
            active={activeTab === 'donation-link'} 
            onClick={() => setActiveTab('donation-link')}
          >
            Donation Link
          </TabButton>
          <TabButton 
            active={activeTab === 'qr-code'} 
            onClick={() => setActiveTab('qr-code')}
          >
            QR Code
          </TabButton>
          <TabButton 
            active={activeTab === 'embed-widget'} 
            onClick={() => setActiveTab('embed-widget')}
          >
            Embed Widget
          </TabButton>
        </TabsContainer>
        
        <TabContent>
          {activeTab === 'overview' && (
            <OverviewTab>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureIcon>🔗</FeatureIcon>
                  <FeatureTitle>Donation Link</FeatureTitle>
                  <FeatureDescription>Share a direct link to your donation page on social media, in emails, or on your website.</FeatureDescription>
                  <FeatureButton onClick={() => setActiveTab('donation-link')}>View Details</FeatureButton>
                </FeatureCard>
                
                <FeatureCard>
                  <FeatureIcon>📱</FeatureIcon>
                  <FeatureTitle>QR Code</FeatureTitle>
                  <FeatureDescription>Display a QR code at live shows, on merch, or on physical promotional materials.</FeatureDescription>
                  <FeatureButton onClick={() => setActiveTab('qr-code')}>View Details</FeatureButton>
                </FeatureCard>
                
                <FeatureCard>
                  <FeatureIcon>💻</FeatureIcon>
                  <FeatureTitle>Embed Widget</FeatureTitle>
                  <FeatureDescription>Add a donation widget directly to your website or blog with simple embed code.</FeatureDescription>
                  <FeatureButton onClick={() => setActiveTab('embed-widget')}>View Details</FeatureButton>
                </FeatureCard>
              </FeatureGrid>
              
              <InfoSection>
                <InfoTitle>How It Works</InfoTitle>
                <InfoSteps>
                  <InfoStep>
                    <StepNumber>1</StepNumber>
                    <StepContent>
                      <StepTitle>Choose Your Method</StepTitle>
                      <StepDescription>Select from donation link, QR code, or embed widget based on your needs.</StepDescription>
                    </StepContent>
                  </InfoStep>
                  
                  <InfoStep>
                    <StepNumber>2</StepNumber>
                    <StepContent>
                      <StepTitle>Share With Your Fans</StepTitle>
                      <StepDescription>Distribute your chosen donation method through social media, at shows, or on your website.</StepDescription>
                    </StepContent>
                  </InfoStep>
                  
                  <InfoStep>
                    <StepNumber>3</StepNumber>
                    <StepContent>
                      <StepTitle>Fans Make Donations</StepTitle>
                      <StepDescription>Supporters can easily contribute any amount to help fund your music.</StepDescription>
                    </StepContent>
                  </InfoStep>
                  
                  <InfoStep>
                    <StepNumber>4</StepNumber>
                    <StepContent>
                      <StepTitle>Receive Your Funds</StepTitle>
                      <StepDescription>80% of donations go directly to you, with weekly transfers to your bank account.</StepDescription>
                    </StepContent>
                  </InfoStep>
                </InfoSteps>
              </InfoSection>
              
              <FAQSection>
                <InfoTitle>Frequently Asked Questions</InfoTitle>
                <FAQList>
                  <FAQItem>
                    <FAQQuestion>What percentage of donations do I receive?</FAQQuestion>
                    <FAQAnswer>You receive 80% of all donations. The remaining 20% helps us maintain and improve the platform.</FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>How quickly will I receive my funds?</FAQQuestion>
                    <FAQAnswer>Funds are transferred to your connected bank account on a weekly basis, every Monday.</FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>Can fans leave messages with their donations?</FAQQuestion>
                    <FAQAnswer>Yes! Supporters can include a personal message when they make a donation.</FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>Is there a minimum donation amount?</FAQQuestion>
                    <FAQAnswer>The minimum donation amount is $1, but you can suggest recommended amounts.</FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>Can I customize the donation page?</FAQQuestion>
                    <FAQAnswer>Yes, you can customize colors, images, and suggested donation amounts to match your brand.</FAQAnswer>
                  </FAQItem>
                </FAQList>
              </FAQSection>
            </OverviewTab>
          )}
          
          {activeTab === 'donation-link' && (
            <DonationLinkTab>
              <FeatureHeader>
                <FeatureHeaderIcon>🔗</FeatureHeaderIcon>
                <FeatureHeaderTitle>Donation Link</FeatureHeaderTitle>
                <FeatureHeaderDescription>Share this link anywhere to let fans support you directly</FeatureHeaderDescription>
              </FeatureHeader>
              
              <LinkPreview>
                <LinkBox>
                  <LinkText>https://truefans.connect/donate/sarahjohnson</LinkText>
                  <CopyButton 
                    onClick={() => handleCopy('https://truefans.connect/donate/sarahjohnson', 'link')}
                  >
                    {copiedItem === 'link' ? 'Copied!' : 'Copy'}
                  </CopyButton>
                </LinkBox>
                <PreviewNote>This is your unique donation link that never expires</PreviewNote>
              </LinkPreview>
              
              <SharingSection>
                <SectionTitle>Share Your Link</SectionTitle>
                <SharingOptions>
                  <SharingOption>
                    <SharingIcon>📱</SharingIcon>
                    <SharingTitle>Social Media</SharingTitle>
                    <SharingDescription>Post your donation link on Instagram, Twitter, Facebook, or TikTok</SharingDescription>
                    <SharingButton>Share Now</SharingButton>
                  </SharingOption>
                  
                  <SharingOption>
                    <SharingIcon>✉️</SharingIcon>
                    <SharingTitle>Email Newsletter</SharingTitle>
                    <SharingDescription>Include your donation link in emails to your fan mailing list</SharingDescription>
                    <SharingButton>Copy for Email</SharingButton>
                  </SharingOption>
                  
                  <SharingOption>
                    <SharingIcon>🌐</SharingIcon>
                    <SharingTitle>Your Website</SharingTitle>
                    <SharingDescription>Add your donation link to your personal website or bio pages</SharingDescription>
                    <SharingButton>Copy HTML</SharingButton>
                  </SharingOption>
                </SharingOptions>
              </SharingSection>
              
              <TipsSection>
                <SectionTitle>Tips for Success</SectionTitle>
                <TipsList>
                  <TipItem>
                    <TipIcon>💡</TipIcon>
                    <TipContent>
                      <TipTitle>Be Specific</TipTitle>
                      <TipDescription>Tell fans exactly what their donations will help fund (new album, tour, equipment)</TipDescription>
                    </TipContent>
                  </TipItem>
                  
                  <TipItem>
                    <TipIcon>🎯</TipIcon>
                    <TipContent>
                      <TipTitle>Set Goals</TipTitle>
                      <TipDescription>Share specific funding goals to motivate fans to contribute</TipDescription>
                    </TipContent>
                  </TipItem>
                  
                  <TipItem>
                    <TipIcon>🙏</TipIcon>
                    <TipContent>
                      <TipTitle>Show Gratitude</TipTitle>
                      <TipDescription>Publicly thank supporters to encourage more donations</TipDescription>
                    </TipContent>
                  </TipItem>
                  
                  <TipItem>
                    <TipIcon>🔄</TipIcon>
                    <TipContent>
                      <TipTitle>Regular Updates</TipTitle>
                      <TipDescription>Share your link regularly with updates on your progress</TipDescription>
                    </TipContent>
                  </TipItem>
                </TipsList>
              </TipsSection>
            </DonationLinkTab>
          )}
          
          {activeTab === 'qr-code' && (
            <QRCodeTab>
              <FeatureHeader>
                <FeatureHeaderIcon>📱</FeatureHeaderIcon>
                <FeatureHeaderTitle>QR Code</FeatureHeaderTitle>
                <FeatureHeaderDescription>Perfect for live shows, merch tables, and physical promotional materials</FeatureHeaderDescription>
              </FeatureHeader>
              
              <QRCodePreview>
                <QRCodeImage src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://truefans.connect/donate/sarahjohnson" alt="Donation QR Code" />
                <QRCodeActions>
                  <QRCodeButton>Download PNG</QRCodeButton>
                  <QRCodeButton>Download SVG</QRCodeButton>
                  <QRCodeButton>Download PDF</QRCodeButton>
                </QRCodeActions>
              </QRCodePreview>
              
              <UsageSection>
                <SectionTitle>Ways to Use Your QR Code</SectionTitle>
                <UsageGrid>
                  <UsageCard>
                    <UsageIcon>🎸</UsageIcon>
                    <UsageTitle>At Live Shows</UsageTitle>
                    <UsageDescription>Display your QR code at your merch table, on stage screens, or on small cards handed out to fans</UsageDescription>
                  </UsageCard>
                  
                  <UsageCard>
                    <UsageIcon>👕</UsageIcon>
                    <UsageTitle>On Merchandise</UsageTitle>
                    <UsageDescription>Print your QR code on t-shirts, stickers, album covers, or other merchandise</UsageDescription>
                  </UsageCard>
                  
                  <UsageCard>
                    <UsageIcon>📃</UsageIcon>
                    <UsageTitle>Promotional Materials</UsageTitle>
                    <UsageDescription>Include your QR code on posters, flyers, business cards, and press kits</UsageDescription>
                  </UsageCard>
                  
                  <UsageCard>
                    <UsageIcon>📺</UsageIcon>
                    <UsageTitle>Video Content</UsageTitle>
                    <UsageDescription>Display your QR code at the end of music videos or live stream performances</UsageDescription>
                  </UsageCard>
                </UsageGrid>
              </UsageSection>
              
              <CustomizationSection>
                <SectionTitle>Customize Your QR Code</SectionTitle>
                <CustomizationOptions>
                  <CustomizationOption>
                    <CustomizationLabel>QR Code Color</CustomizationLabel>
                    <ColorPicker>
                      <ColorOption color="#000000" selected />
                      <ColorOption color="#1A2B4C" />
                      <ColorOption color="#FFD700" />
                      <ColorOption color="#FF6B6B" />
                      <ColorOption color="#4CAF50" />
                    </ColorPicker>
                  </CustomizationOption>
                  
                  <CustomizationOption>
                    <CustomizationLabel>Background Color</CustomizationLabel>
                    <ColorPicker>
                      <ColorOption color="#FFFFFF" selected />
                      <ColorOption color="#F9F9F9" />
                      <ColorOption color="#F0F0F0" />
                      <ColorOption color="#FFFDF0" />
                      <ColorOption color="#F0FFF0" />
                    </ColorPicker>
                  </CustomizationOption>
                  
                  <CustomizationOption>
                    <CustomizationLabel>Add Logo</CustomizationLabel>
                    <LogoUpload>
                      <LogoUploadButton>Upload Logo</LogoUploadButton>
                      <LogoNote>Recommended: 200x200px PNG with transparency</LogoNote>
                    </LogoUpload>
                  </CustomizationOption>
                </CustomizationOptions>
                
                <UpdateButton>Update QR Code</UpdateButton>
              </CustomizationSection>
            </QRCodeTab>
          )}
          
          {activeTab === 'embed-widget' && (
            <EmbedWidgetTab>
              <FeatureHeader>
                <FeatureHeaderIcon>💻</FeatureHeaderIcon>
                <FeatureHeaderTitle>Embed Widget</FeatureHeaderTitle>
                <FeatureHeaderDescription>Add a donation widget directly to your website or blog</FeatureHeaderDescription>
              </FeatureHeader>
              
              <WidgetPreview>
                <WidgetContainer>
                  <WidgetHeader>Support Sarah Johnson</WidgetHeader>
                  <WidgetDescription>Help fund my new album "Midnight in New Orleans"</WidgetDescription>
                  <WidgetAmounts>
                    <WidgetAmount>$5</WidgetAmount>
                    <WidgetAmount selected>$10</WidgetAmount>
                    <WidgetAmount>$25</WidgetAmount>
                    <WidgetAmount>$50</WidgetAmount>
                    <WidgetAmount>Custom</WidgetAmount>
                  </WidgetAmounts>
                  <WidgetButton>Support Now</WidgetButton>
                </WidgetContainer>
              </WidgetPreview>
              
              <CodeSection>
                <SectionTitle>Embed Code</SectionTitle>
                <CodeBox>
                  <CodeText>{`<iframe src="https://truefans.connect/widget/sarahjohnson" width="300" height="400" frameborder="0"></iframe>`}</CodeText>
                  <CopyButton 
                    onClick={() => handleCopy('<iframe src="https://truefans.connect/widget/sarahjohnson" width="300" height="400" frameborder="0"></iframe>', 'embed')}
                  >
                    {copiedItem === 'embed' ? 'Copied!' : 'Copy'}
                  </CopyButton>
                </CodeBox>
                <CodeInstructions>
                  <InstructionTitle>How to use:</InstructionTitle>
                  <InstructionList>
                    <InstructionItem>Copy the code above</InstructionItem>
                    <InstructionItem>Paste it into the HTML of your website where you want the widget to appear</InstructionItem>
                    <InstructionItem>Adjust the width and height values if needed to fit your site</InstructionItem>
                  </InstructionList>
                </CodeInstructions>
              </CodeSection>
              
              <CustomizationSection>
                <SectionTitle>Customize Your Widget</SectionTitle>
                <CustomizationForm>
                  <FormRow>
                    <FormGroup>
                      <FormLabel>Widget Title</FormLabel>
                      <FormInput type="text" defaultValue="Support Sarah Johnson" />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel>Description</FormLabel>
                      <FormInput type="text" defaultValue="Help fund my new album" />
                    </FormGroup>
                  </FormRow>
                  
                  <FormRow>
                    <FormGroup>
                      <FormLabel>Button Text</FormLabel>
                      <FormInput type="text" defaultValue="Support Now" />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel>Button Color</FormLabel>
                      <ColorPicker>
                        <ColorOption color="#FF6B6B" selected />
                        <ColorOption color="#FFD700" />
                        <ColorOption color="#4CAF50" />
                        <ColorOption color="#1A2B4C" />
                        <ColorOption color="#9C27B0" />
                      </ColorPicker>
                    </FormGroup>
                  </FormRow>
                  
                  <FormRow>
                    <FormGroup>
                      <FormLabel>Suggested Amounts</FormLabel>
                      <FormInput type="text" defaultValue="5, 10, 25, 50" />
                      <FormHint>Comma-separated values</FormHint>
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel>Widget Size</FormLabel>
                      <SelectInput defaultValue="medium">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </SelectInput>
                    </FormGroup>
                  </FormRow>
                  
                  <UpdateButton>Update Widget</UpdateButton>
                </CustomizationForm>
              </CustomizationSection>
            </EmbedWidgetTab>
          )}
        </TabContent>
      </Container>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const PageDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightText};
`

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.space.xl};
  overflow-x: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`

const TabButton = styled.button`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${({ theme, active }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ theme, active }) => active ? theme.colors.darkText : theme.colors.lightText};
  font-weight: ${({ theme, active }) => active ? theme.fontWeights.semiBold : theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.colors.darkText};
  }
`

const TabContent = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

// Overview Tab
const OverviewTab = styled.div``

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const FeatureCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const FeatureIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const FeatureButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const InfoSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const InfoTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  text-align: center;
`

const InfoSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const InfoStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.lg};
`

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  flex-shrink: 0;
`

const StepContent = styled.div`
  flex: 1;
`

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StepDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const FAQSection = styled.section``

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const FAQItem = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const FAQQuestion = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const FAQAnswer = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

// Donation Link Tab
const DonationLinkTab = styled.div``

const FeatureHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const FeatureHeaderIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeatureHeaderTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const FeatureHeaderDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
`

const LinkPreview = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const LinkBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const LinkText = styled.div`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CopyButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const PreviewNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  font-style: italic;
`

const SharingSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SharingOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const SharingOption = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
`

const SharingIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SharingTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const SharingDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SharingButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const TipsSection = styled.section``

const TipsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const TipItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.md};
`

const TipIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  flex-shrink: 0;
`

const TipContent = styled.div`
  flex: 1;
`

const TipTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TipDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

// QR Code Tab
const QRCodeTab = styled.div``

const QRCodePreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const QRCodeImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: ${({ theme }) => theme.space.lg};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  padding: ${({ theme }) => theme.space.md};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
`

const QRCodeActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

const QRCodeButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const UsageSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const UsageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const UsageCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
`

const UsageIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const UsageTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const UsageDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const CustomizationSection = styled.section``

const CustomizationOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CustomizationOption = styled.div``

const CustomizationLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ColorPicker = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  flex-wrap: wrap;
`

const ColorOption = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 2px solid ${({ theme, selected }) => selected ? theme.colors.darkText : 'transparent'};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: scale(1.1);
  }
`

const LogoUpload = styled.div``

const LogoUploadButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const LogoNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`

const UpdateButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  display: block;
  margin: 0 auto;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`

// Embed Widget Tab
const EmbedWidgetTab = styled.div``

const WidgetPreview = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const WidgetContainer = styled.div`
  width: 300px;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const WidgetHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
  text-align: center;
`

const WidgetDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  text-align: center;
`

const WidgetAmounts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const WidgetAmount = styled.button`
  padding: ${({ theme }) => theme.space.sm};
  background-color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.lightGray};
  color: ${({ theme, selected }) => selected ? theme.colors.trustworthyNavy : theme.colors.darkText};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-weight: ${({ theme, selected }) => selected ? theme.fontWeights.semiBold : theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.trustworthyNavy};
  }
`

const WidgetButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`

const CodeSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const CodeBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.md};
  overflow-x: auto;
`

const CodeText = styled.code`
  flex: 1;
  font-family: monospace;
  color: white;
  white-space: pre;
`

const CodeInstructions = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
`

const InstructionTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const InstructionList = styled.ul`
  padding-left: ${({ theme }) => theme.space.lg};
`

const InstructionItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xs};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const CustomizationForm = styled.form`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.space.xl};
  }
`

const FormGroup = styled.div``

const FormLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const FormInput = styled.input`
  width: 100%;
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

const FormHint = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-top: ${({ theme }) => theme.space.xs};
`

const SelectInput = styled.select`
  width: 100%;
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

export default DonationSystem
