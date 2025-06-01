import React from 'react'
import styled from 'styled-components'
import PageTransition from '../components/common/PageTransition'

const Terms = () => {
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Terms of Service</HeroTitle>
            <HeroSubtitle>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TermsContent>
            <Section>
              <SectionTitle>1. Introduction</SectionTitle>
              <Paragraph>
                Welcome to TrueFans CONNECT™. These Terms of Service ("Terms") govern your use of our website, services, and platform (collectively, the "Service") operated by TrueFans CONNECT™ ("us", "we", or "our").
              </Paragraph>
              <Paragraph>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>2. Accounts</SectionTitle>
              <Paragraph>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </Paragraph>
              <Paragraph>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
              </Paragraph>
              <Paragraph>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>3. Content</SectionTitle>
              <Paragraph>
                Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
              </Paragraph>
              <Paragraph>
                By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>4. Intellectual Property</SectionTitle>
              <Paragraph>
                The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of TrueFans CONNECT™ and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of TrueFans CONNECT™.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>5. Links To Other Web Sites</SectionTitle>
              <Paragraph>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by TrueFans CONNECT™.
              </Paragraph>
              <Paragraph>
                TrueFans CONNECT™ has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that TrueFans CONNECT™ shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>6. Termination</SectionTitle>
              <Paragraph>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </Paragraph>
              <Paragraph>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>7. Limitation Of Liability</SectionTitle>
              <Paragraph>
                In no event shall TrueFans CONNECT™, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>8. Changes</SectionTitle>
              <Paragraph>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </Paragraph>
              <Paragraph>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>9. Contact Us</SectionTitle>
              <Paragraph>
                If you have any questions about these Terms, please contact us at:
              </Paragraph>
              <ContactInfo>
                <ContactItem>Email: legal@truefans.connect</ContactItem>
                <ContactItem>Phone: (555) 123-4567</ContactItem>
                <ContactItem>Address: 123 Music Avenue, Nashville, TN 37203</ContactItem>
              </ContactInfo>
            </Section>
          </TermsContent>
        </Container>
      </ContentSection>
    </PageTransition>
  )
}

// Styled Components
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
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
`

const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const TermsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const ContactInfo = styled.div`
  margin-top: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
`

const ContactItem = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`

export default Terms
