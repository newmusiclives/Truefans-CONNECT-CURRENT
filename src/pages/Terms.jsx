import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Terms = () => {
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
          <PageTitle>Terms of Service</PageTitle>
          <PageSubtitle>Last Updated: June 1, 2023</PageSubtitle>
        </PageHeader>

        <ContentSection>
          <SectionTitle>1. Introduction</SectionTitle>
          <Paragraph>
            Welcome to TrueFans CONNECT™. These Terms of Service ("Terms") govern your use of the TrueFans CONNECT™ platform, website, and services (collectively, the "Service") operated by TrueFans CONNECT™ ("we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
          </Paragraph>
          <Paragraph>
            TrueFans CONNECT™ is a platform that connects artists with venues and fans, providing tools for artists to manage their careers, venues to discover and book talent, and fans to support their favorite artists.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>2. Accounts and Registration</SectionTitle>
          <Paragraph>
            When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </Paragraph>
          <Paragraph>
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. We encourage you to use "strong" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account.
          </Paragraph>
          <Paragraph>
            You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>3. User Types and Responsibilities</SectionTitle>
          
          <SubsectionTitle>3.1 Artists</SubsectionTitle>
          <Paragraph>
            As an artist using TrueFans CONNECT™, you are responsible for:
          </Paragraph>
          <BulletList>
            <BulletItem>Providing accurate information about your performances, availability, and pricing</BulletItem>
            <BulletItem>Honoring bookings and commitments made through the platform</BulletItem>
            <BulletItem>Maintaining professional conduct in all interactions with venues and fans</BulletItem>
            <BulletItem>Ensuring you have all necessary rights to the content you upload</BulletItem>
          </BulletList>
          
          <SubsectionTitle>3.2 Venues</SubsectionTitle>
          <Paragraph>
            As a venue using TrueFans CONNECT™, you are responsible for:
          </Paragraph>
          <BulletList>
            <BulletItem>Providing accurate information about your venue, requirements, and booking terms</BulletItem>
            <BulletItem>Honoring bookings and commitments made through the platform</BulletItem>
            <BulletItem>Maintaining professional conduct in all interactions with artists</BulletItem>
            <BulletItem>Ensuring your venue complies with all applicable laws and regulations</BulletItem>
          </BulletList>
          
          <SubsectionTitle>3.3 Fans</SubsectionTitle>
          <Paragraph>
            As a fan using TrueFans CONNECT™, you are responsible for:
          </Paragraph>
          <BulletList>
            <BulletItem>Respecting the artists and venues you interact with</BulletItem>
            <BulletItem>Providing accurate information when making donations or purchases</BulletItem>
            <BulletItem>Complying with the terms of any events or experiences you attend</BulletItem>
          </BulletList>
        </ContentSection>

        <ContentSection>
          <SectionTitle>4. Content and Conduct</SectionTitle>
          <Paragraph>
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
          </Paragraph>
          <Paragraph>
            By posting Content on or through the Service, you represent and warrant that:
          </Paragraph>
          <BulletList>
            <BulletItem>The Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms</BulletItem>
            <BulletItem>The posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person</BulletItem>
          </BulletList>
          <Paragraph>
            We reserve the right to remove any Content from the Service at our discretion, without prior notice, for any reason, including if we believe that such Content violates these Terms.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>5. Payments and Fees</SectionTitle>
          <Paragraph>
            TrueFans CONNECT™ may charge fees for certain services, including but not limited to:
          </Paragraph>
          <BulletList>
            <BulletItem>Commission on bookings facilitated through the platform</BulletItem>
            <BulletItem>Processing fees for donations and payments</BulletItem>
            <BulletItem>Subscription fees for premium features</BulletItem>
          </BulletList>
          <Paragraph>
            All fees are clearly disclosed before you complete a transaction. By proceeding with a transaction, you agree to pay all applicable fees.
          </Paragraph>
          <Paragraph>
            For artists and venues, payments will be processed according to our payment schedule, which may vary based on your account type and location. Detailed payment terms are available in your account settings.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>6. Intellectual Property</SectionTitle>
          <Paragraph>
            The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of TrueFans CONNECT™ and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of TrueFans CONNECT™.
          </Paragraph>
          <Paragraph>
            When you upload Content, you grant TrueFans CONNECT™ a non-exclusive, worldwide, royalty-free license to use, reproduce, adapt, publish, translate, and distribute it in any and all media. This license is for the limited purpose of operating, promoting, and improving our Service.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>7. Privacy Policy</SectionTitle>
          <Paragraph>
            Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, explains how we collect, use, and disclose information about you. By using the Service, you agree to the collection and use of information in accordance with our Privacy Policy.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>8. Termination</SectionTitle>
          <Paragraph>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </Paragraph>
          <Paragraph>
            Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>9. Limitation of Liability</SectionTitle>
          <Paragraph>
            In no event shall TrueFans CONNECT™, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </Paragraph>
          <BulletList>
            <BulletItem>Your access to or use of or inability to access or use the Service</BulletItem>
            <BulletItem>Any conduct or content of any third party on the Service</BulletItem>
            <BulletItem>Any content obtained from the Service</BulletItem>
            <BulletItem>Unauthorized access, use or alteration of your transmissions or content</BulletItem>
          </BulletList>
        </ContentSection>

        <ContentSection>
          <SectionTitle>10. Governing Law</SectionTitle>
          <Paragraph>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </Paragraph>
          <Paragraph>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>11. Changes to Terms</SectionTitle>
          <Paragraph>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </Paragraph>
          <Paragraph>
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>12. Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions about these Terms, please contact us at:
          </Paragraph>
          <ContactInfo>
            <ContactItem>Email: <ContactLink href="mailto:paul@truefansconnect.com">paul@truefansconnect.com</ContactLink></ContactItem>
            <ContactItem>Phone: <ContactLink href="tel:16025776556">1-602-577-6556</ContactLink></ContactItem>
            <ContactItem>Address: TrueFans CONNECT™ Headquarters, Phoenix, AZ</ContactItem>
          </ContactInfo>
        </ContentSection>
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
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const PageHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const PageSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const ContentSection = styled.section`
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
  padding-bottom: ${({ theme }) => theme.space.xs};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const SubsectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-top: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const BulletList = styled.ul`
  margin-bottom: ${({ theme }) => theme.space.md};
  padding-left: ${({ theme }) => theme.space.xl};
`

const BulletItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const ContactInfo = styled.div`
  margin-top: ${({ theme }) => theme.space.md};
`

const ContactItem = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    text-decoration: underline;
  }
`

export default Terms
