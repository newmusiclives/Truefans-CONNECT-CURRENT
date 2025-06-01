import React from 'react'
import styled from 'styled-components'
import PageTransition from '../components/common/PageTransition'

const Privacy = () => {
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Privacy Policy</HeroTitle>
            <HeroSubtitle>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <PrivacyContent>
            <Section>
              <SectionTitle>1. Introduction</SectionTitle>
              <Paragraph>
                At TrueFans CONNECT™, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </Paragraph>
              <Paragraph>
                This privacy policy applies to personal data we collect when you use our website, platform, and services (collectively, the "Service").
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>2. Information We Collect</SectionTitle>
              <Paragraph>
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </Paragraph>
              <SubsectionTitle>Personal Data</SubsectionTitle>
              <Paragraph>
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
              </Paragraph>
              <List>
                <ListItem>Email address</ListItem>
                <ListItem>First name and last name</ListItem>
                <ListItem>Phone number</ListItem>
                <ListItem>Address, State, Province, ZIP/Postal code, City</ListItem>
                <ListItem>Cookies and Usage Data</ListItem>
              </List>
              
              <SubsectionTitle>Usage Data</SubsectionTitle>
              <Paragraph>
                We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>3. How We Use Your Information</SectionTitle>
              <Paragraph>
                TrueFans CONNECT™ uses the collected data for various purposes:
              </Paragraph>
              <List>
                <ListItem>To provide and maintain our Service</ListItem>
                <ListItem>To notify you about changes to our Service</ListItem>
                <ListItem>To allow you to participate in interactive features of our Service when you choose to do so</ListItem>
                <ListItem>To provide customer support</ListItem>
                <ListItem>To gather analysis or valuable information so that we can improve our Service</ListItem>
                <ListItem>To monitor the usage of our Service</ListItem>
                <ListItem>To detect, prevent and address technical issues</ListItem>
              </List>
            </Section>
            
            <Section>
              <SectionTitle>4. Data Retention</SectionTitle>
              <Paragraph>
                TrueFans CONNECT™ will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </Paragraph>
              <Paragraph>
                TrueFans CONNECT™ will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>5. Data Transfer</SectionTitle>
              <Paragraph>
                Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
              </Paragraph>
              <Paragraph>
                If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.
              </Paragraph>
              <Paragraph>
                Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>6. Disclosure of Data</SectionTitle>
              <SubsectionTitle>Legal Requirements</SubsectionTitle>
              <Paragraph>
                TrueFans CONNECT™ may disclose your Personal Data in the good faith belief that such action is necessary to:
              </Paragraph>
              <List>
                <ListItem>To comply with a legal obligation</ListItem>
                <ListItem>To protect and defend the rights or property of TrueFans CONNECT™</ListItem>
                <ListItem>To prevent or investigate possible wrongdoing in connection with the Service</ListItem>
                <ListItem>To protect the personal safety of users of the Service or the public</ListItem>
                <ListItem>To protect against legal liability</ListItem>
              </List>
            </Section>
            
            <Section>
              <SectionTitle>7. Security of Data</SectionTitle>
              <Paragraph>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>8. Your Data Protection Rights</SectionTitle>
              <Paragraph>
                You have certain data protection rights. TrueFans CONNECT™ aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
              </Paragraph>
              <Paragraph>
                If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
              </Paragraph>
              <Paragraph>
                In certain circumstances, you have the following data protection rights:
              </Paragraph>
              <List>
                <ListItem>The right to access, update or to delete the information we have on you</ListItem>
                <ListItem>The right of rectification - You have the right to have your information rectified if that information is inaccurate or incomplete</ListItem>
                <ListItem>The right to object - You have the right to object to our processing of your Personal Data</ListItem>
                <ListItem>The right of restriction - You have the right to request that we restrict the processing of your personal information</ListItem>
                <ListItem>The right to data portability - You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format</ListItem>
                <ListItem>The right to withdraw consent - You also have the right to withdraw your consent at any time where TrueFans CONNECT™ relied on your consent to process your personal information</ListItem>
              </List>
            </Section>
            
            <Section>
              <SectionTitle>9. Changes to This Privacy Policy</SectionTitle>
              <Paragraph>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </Paragraph>
              <Paragraph>
                We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
              </Paragraph>
              <Paragraph>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>10. Contact Us</SectionTitle>
              <Paragraph>
                If you have any questions about this Privacy Policy, please contact us:
              </Paragraph>
              <ContactInfo>
                <ContactItem>Email: privacy@truefans.connect</ContactItem>
                <ContactItem>Phone: (555) 123-4567</ContactItem>
                <ContactItem>Address: 123 Music Avenue, Nashville, TN 37203</ContactItem>
              </ContactInfo>
            </Section>
          </PrivacyContent>
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

const PrivacyContent = styled.div`
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

const SubsectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-top: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.sm};
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

const List = styled.ul`
  margin-bottom: ${({ theme }) => theme.space.md};
  padding-left: ${({ theme }) => theme.space.xl};
`

const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.xs};
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

export default Privacy
