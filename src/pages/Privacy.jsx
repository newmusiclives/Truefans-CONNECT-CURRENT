import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Privacy = () => {
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
          <PageTitle>Privacy Policy</PageTitle>
          <PageSubtitle>Last Updated: June 1, 2023</PageSubtitle>
        </PageHeader>

        <ContentSection>
          <SectionTitle>1. Introduction</SectionTitle>
          <Paragraph>
            TrueFans CONNECT™ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our platform (collectively, the "Service").
          </Paragraph>
          <Paragraph>
            Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>2. Information We Collect</SectionTitle>
          
          <SubsectionTitle>2.1 Personal Information</SubsectionTitle>
          <Paragraph>
            We may collect personal information that you voluntarily provide to us when you:
          </Paragraph>
          <BulletList>
            <BulletItem>Register for an account</BulletItem>
            <BulletItem>Complete a profile (as an artist or venue)</BulletItem>
            <BulletItem>Make a booking or reservation</BulletItem>
            <BulletItem>Process a payment</BulletItem>
            <BulletItem>Sign up for our newsletter</BulletItem>
            <BulletItem>Contact our support team</BulletItem>
            <BulletItem>Participate in promotions or surveys</BulletItem>
          </BulletList>
          <Paragraph>
            The personal information we collect may include:
          </Paragraph>
          <BulletList>
            <BulletItem>Name, email address, and phone number</BulletItem>
            <BulletItem>Billing address and payment information</BulletItem>
            <BulletItem>Profile information (for artists: genre, bio, performance history; for venues: location, capacity, technical specifications)</BulletItem>
            <BulletItem>Profile photos and media content</BulletItem>
            <BulletItem>Communication preferences</BulletItem>
          </BulletList>
          
          <SubsectionTitle>2.2 Automatically Collected Information</SubsectionTitle>
          <Paragraph>
            When you access our Service, we may automatically collect certain information, including:
          </Paragraph>
          <BulletList>
            <BulletItem>Device information (such as your IP address, browser type, and operating system)</BulletItem>
            <BulletItem>Usage details (such as time and duration of your visit)</BulletItem>
            <BulletItem>Location information</BulletItem>
            <BulletItem>Cookies and similar tracking technologies</BulletItem>
          </BulletList>
        </ContentSection>

        <ContentSection>
          <SectionTitle>3. How We Use Your Information</SectionTitle>
          <Paragraph>
            We may use the information we collect for various purposes, including to:
          </Paragraph>
          <BulletList>
            <BulletItem>Provide, maintain, and improve our Service</BulletItem>
            <BulletItem>Process transactions and send related information</BulletItem>
            <BulletItem>Create and manage your account</BulletItem>
            <BulletItem>Connect artists with venues based on preferences and requirements</BulletItem>
            <BulletItem>Send administrative information, such as updates, security alerts, and support messages</BulletItem>
            <BulletItem>Respond to your comments, questions, and requests</BulletItem>
            <BulletItem>Send promotional communications, such as special offers or other information we think you may find interesting</BulletItem>
            <BulletItem>Monitor and analyze trends, usage, and activities in connection with our Service</BulletItem>
            <BulletItem>Detect, investigate, and prevent fraudulent transactions and other illegal activities</BulletItem>
            <BulletItem>Personalize your experience and deliver content relevant to your interests</BulletItem>
          </BulletList>
        </ContentSection>

        <ContentSection>
          <SectionTitle>4. How We Share Your Information</SectionTitle>
          <Paragraph>
            We may share your information in the following situations:
          </Paragraph>
          
          <SubsectionTitle>4.1 With Your Consent</SubsectionTitle>
          <Paragraph>
            We may disclose your personal information for any purpose with your consent.
          </Paragraph>
          
          <SubsectionTitle>4.2 Platform Functionality</SubsectionTitle>
          <Paragraph>
            To facilitate bookings and connections between artists and venues, certain information will be shared between these parties. For example:
          </Paragraph>
          <BulletList>
            <BulletItem>Artists will see venue details, requirements, and contact information</BulletItem>
            <BulletItem>Venues will see artist profiles, performance history, and contact information</BulletItem>
          </BulletList>
          
          <SubsectionTitle>4.3 Service Providers</SubsectionTitle>
          <Paragraph>
            We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include payment processing, data analysis, email delivery, hosting services, and customer service.
          </Paragraph>
          
          <SubsectionTitle>4.4 Business Transfers</SubsectionTitle>
          <Paragraph>
            If we are involved in a merger, acquisition, financing, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our Service of any change in ownership or uses of your personal information.
          </Paragraph>
          
          <SubsectionTitle>4.5 Legal Obligations</SubsectionTitle>
          <Paragraph>
            We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
          </Paragraph>
          
          <SubsectionTitle>4.6 Protect Rights and Safety</SubsectionTitle>
          <Paragraph>
            We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, or as evidence in litigation.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>5. Cookies and Tracking Technologies</SectionTitle>
          <Paragraph>
            We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </Paragraph>
          <Paragraph>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </Paragraph>
          <Paragraph>
            We use cookies for the following purposes:
          </Paragraph>
          <BulletList>
            <BulletItem>To maintain your authenticated session and remember your preferences</BulletItem>
            <BulletItem>To understand how you use our Service</BulletItem>
            <BulletItem>To monitor aggregate usage metrics</BulletItem>
            <BulletItem>To personalize your experience</BulletItem>
          </BulletList>
        </ContentSection>

        <ContentSection>
          <SectionTitle>6. Data Security</SectionTitle>
          <Paragraph>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
          </Paragraph>
          <Paragraph>
            Although we will do our best to protect your personal information, transmission of personal information to and from our Service is at your own risk. You should only access the Service within a secure environment.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>7. Data Retention</SectionTitle>
          <Paragraph>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </Paragraph>
          <Paragraph>
            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>8. Your Privacy Rights</SectionTitle>
          
          <SubsectionTitle>8.1 Account Information</SubsectionTitle>
          <Paragraph>
            You can review and change your personal information by logging into your account and visiting your account profile page.
          </Paragraph>
          
          <SubsectionTitle>8.2 Marketing Communications</SubsectionTitle>
          <Paragraph>
            You can opt out of receiving promotional emails from us by following the unsubscribe instructions provided in those emails. Even if you opt out of receiving promotional emails, we may still send you service-related communications.
          </Paragraph>
          
          <SubsectionTitle>8.3 Cookies</SubsectionTitle>
          <Paragraph>
            Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies.
          </Paragraph>
          
          <SubsectionTitle>8.4 Do Not Track</SubsectionTitle>
          <Paragraph>
            Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. We currently do not respond to "Do Not Track" signals.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>9. Children's Privacy</SectionTitle>
          <Paragraph>
            Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>10. International Data Transfers</SectionTitle>
          <Paragraph>
            Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.
          </Paragraph>
          <Paragraph>
            If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including personal information, to the United States and process it there.
          </Paragraph>
          <Paragraph>
            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>11. Changes to This Privacy Policy</SectionTitle>
          <Paragraph>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
          </Paragraph>
          <Paragraph>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>12. Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy
