import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    userType: 'fan'
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      userType: 'fan'
    })
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }
  
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Contact Us</HeroTitle>
            <HeroSubtitle>Get in touch with the TrueFans CONNECT™ team</HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnLayout>
            <ContactFormContainer>
              <SectionTitle>Send Us a Message</SectionTitle>
              {formSubmitted ? (
                <SuccessMessage>
                  <SuccessIcon>✓</SuccessIcon>
                  <SuccessText>
                    <SuccessTitle>Message Sent!</SuccessTitle>
                    <SuccessDescription>Thank you for contacting us. We'll get back to you as soon as possible.</SuccessDescription>
                  </SuccessText>
                </SuccessMessage>
              ) : (
                <ContactForm onSubmit={handleSubmit}>
                  <FormGroup>
                    <FormLabel htmlFor="name">Your Name</FormLabel>
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <FormInput
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="userType">I am a:</FormLabel>
                    <FormSelect
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                    >
                      <option value="fan">Fan</option>
                      <option value="artist">Artist</option>
                      <option value="venue">Venue Owner</option>
                      <option value="press">Press/Media</option>
                      <option value="other">Other</option>
                    </FormSelect>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="subject">Subject</FormLabel>
                    <FormInput
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormTextarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      required
                    />
                  </FormGroup>
                  
                  <SubmitButton type="submit">Send Message</SubmitButton>
                </ContactForm>
              )}
            </ContactFormContainer>
            
            <ContactInfoContainer>
              <SectionTitle>Contact Information</SectionTitle>
              <ContactInfoList>
                <ContactInfoItem>
                  <ContactInfoIcon>📧</ContactInfoIcon>
                  <ContactInfoContent>
                    <ContactInfoTitle>Email Us</ContactInfoTitle>
                    <ContactInfoText>
                      <ContactInfoLink href="mailto:info@truefans.connect">info@truefans.connect</ContactInfoLink>
                    </ContactInfoText>
                  </ContactInfoContent>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <ContactInfoIcon>📞</ContactInfoIcon>
                  <ContactInfoContent>
                    <ContactInfoTitle>Call Us</ContactInfoTitle>
                    <ContactInfoText>
                      <ContactInfoLink href="tel:+15551234567">(555) 123-4567</ContactInfoLink>
                    </ContactInfoText>
                  </ContactInfoContent>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <ContactInfoIcon>📍</ContactInfoIcon>
                  <ContactInfoContent>
                    <ContactInfoTitle>Visit Us</ContactInfoTitle>
                    <ContactInfoText>
                      123 Music Avenue<br />
                      Nashville, TN 37203<br />
                      United States
                    </ContactInfoText>
                  </ContactInfoContent>
                </ContactInfoItem>
              </ContactInfoList>
              
              <SectionTitle>Department Contacts</SectionTitle>
              <DepartmentList>
                <DepartmentItem>
                  <DepartmentTitle>Artist Support</DepartmentTitle>
                  <DepartmentEmail href="mailto:artists@truefans.connect">artists@truefans.connect</DepartmentEmail>
                  <DepartmentDescription>
                    For questions related to artist accounts, features, and support.
                  </DepartmentDescription>
                </DepartmentItem>
                
                <DepartmentItem>
                  <DepartmentTitle>Venue Relations</DepartmentTitle>
                  <DepartmentEmail href="mailto:venues@truefans.connect">venues@truefans.connect</DepartmentEmail>
                  <DepartmentDescription>
                    For venue owners interested in joining our network or current venue partners.
                  </DepartmentDescription>
                </DepartmentItem>
                
                <DepartmentItem>
                  <DepartmentTitle>Press & Media</DepartmentTitle>
                  <DepartmentEmail href="mailto:press@truefans.connect">press@truefans.connect</DepartmentEmail>
                  <DepartmentDescription>
                    For media inquiries, interview requests, and press materials.
                  </DepartmentDescription>
                </DepartmentItem>
                
                <DepartmentItem>
                  <DepartmentTitle>Partnerships</DepartmentTitle>
                  <DepartmentEmail href="mailto:partnerships@truefans.connect">partnerships@truefans.connect</DepartmentEmail>
                  <DepartmentDescription>
                    For business development and strategic partnership opportunities.
                  </DepartmentDescription>
                </DepartmentItem>
              </DepartmentList>
              
              <SocialMediaSection>
                <SocialMediaTitle>Connect With Us</SocialMediaTitle>
                <SocialMediaLinks>
                  <SocialMediaLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <SocialMediaIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </SocialMediaIcon>
                    Twitter
                  </SocialMediaLink>
                  <SocialMediaLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <SocialMediaIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </SocialMediaIcon>
                    Instagram
                  </SocialMediaLink>
                  <SocialMediaLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <SocialMediaIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </SocialMediaIcon>
                    Facebook
                  </SocialMediaLink>
                  <SocialMediaLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <SocialMediaIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </SocialMediaIcon>
                    LinkedIn
                  </SocialMediaLink>
                </SocialMediaLinks>
              </SocialMediaSection>
            </ContactInfoContainer>
          </TwoColumnLayout>
        </Container>
      </ContentSection>
      
      <FAQSection>
        <Container>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          <FAQGrid>
            <FAQItem>
              <FAQQuestion>How quickly can I expect a response?</FAQQuestion>
              <FAQAnswer>
                We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your subject line.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>I'm having technical issues with the platform. Who should I contact?</FAQQuestion>
              <FAQAnswer>
                For technical support, please email support@truefans.connect with details of the issue you're experiencing, including screenshots if possible.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>How can I request a feature for the platform?</FAQQuestion>
              <FAQAnswer>
                We welcome feature suggestions! Please email features@truefans.connect with your ideas, and our product team will review them.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Do you offer phone support?</FAQQuestion>
              <FAQAnswer>
                While email is our primary support channel, we can arrange phone support for complex issues that require real-time assistance.
              </FAQAnswer>
            </FAQItem>
          </FAQGrid>
        </Container>
      </FAQSection>
    </PageTransition>
  )
}

const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space.xl} 0;
  color: white;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  opacity: 0.9;
  line-height: 1.5;
`

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

// Contact Form
const ContactFormContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
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

const FormTextarea = styled.textarea`
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space.md};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  margin-top: ${({ theme }) => theme.space.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

// Success Message
const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.primary}15`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
`

const SuccessIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-right: ${({ theme }) => theme.space.lg};
  flex-shrink: 0;
`

const SuccessText = styled.div``

const SuccessTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const SuccessDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

// Contact Info
const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const ContactInfoIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-right: ${({ theme }) => theme.space.md};
  flex-shrink: 0;
`

const ContactInfoContent = styled.div`
  flex: 1;
`

const ContactInfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ContactInfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

const ContactInfoLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

// Department Contacts
const DepartmentList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.md};
`

const DepartmentItem = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const DepartmentTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const DepartmentEmail = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.sm};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const DepartmentDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

// Social Media
const SocialMediaSection = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const SocialMediaTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SocialMediaLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.md};
`

const SocialMediaIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.xs};
`

const SocialMediaLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkText};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.trustworthyNavy};
    text-decoration: none;
  }
`

// FAQ Section
const FAQSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const FAQTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const FAQItem = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const FAQQuestion = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FAQAnswer = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

export default Contact
