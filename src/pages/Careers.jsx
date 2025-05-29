import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const Careers = () => {
  // Mock data for job listings
  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote (US)",
      type: "Full-time",
      description: "We're looking for an experienced Full Stack Developer to help build and scale our platform. You'll work on both frontend and backend systems, implementing new features and optimizing performance.",
      requirements: [
        "5+ years of experience in full stack development",
        "Proficiency in React, Node.js, and modern JavaScript",
        "Experience with SQL and NoSQL databases",
        "Strong understanding of web performance optimization",
        "Experience with cloud services (AWS, GCP, or Azure)"
      ]
    },
    {
      id: 2,
      title: "Artist Relations Specialist",
      department: "Artist Success",
      location: "Nashville, TN",
      type: "Full-time",
      description: "As an Artist Relations Specialist, you'll be the primary point of contact for artists on our platform. You'll help them maximize their success, troubleshoot issues, and gather feedback for product improvements.",
      requirements: [
        "2+ years of experience in customer success or account management",
        "Strong understanding of the music industry",
        "Excellent communication and interpersonal skills",
        "Problem-solving mindset",
        "Experience with CRM software"
      ]
    },
    {
      id: 3,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote (US)",
      type: "Full-time",
      description: "We're seeking a Marketing Manager to lead our growth initiatives. You'll develop and execute marketing strategies to attract both artists and fans to our platform.",
      requirements: [
        "3+ years of experience in digital marketing",
        "Experience with social media marketing and content creation",
        "Strong analytical skills and data-driven approach",
        "Experience with marketing automation tools",
        "Understanding of the music industry landscape"
      ]
    },
    {
      id: 4,
      title: "Product Designer",
      department: "Design",
      location: "Remote (US)",
      type: "Full-time",
      description: "As a Product Designer, you'll create intuitive and engaging user experiences for our platform. You'll work closely with product managers and engineers to design features that delight our users.",
      requirements: [
        "3+ years of experience in product design",
        "Strong portfolio demonstrating UX/UI design skills",
        "Proficiency in design tools (Figma, Sketch, etc.)",
        "Experience with user research and testing",
        "Ability to translate complex requirements into simple user experiences"
      ]
    },
    {
      id: 5,
      title: "Venue Partnership Manager",
      department: "Business Development",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "We're looking for a Venue Partnership Manager to expand our network of venue partners. You'll identify and onboard new venues, maintain relationships with existing partners, and help create successful connections between venues and artists.",
      requirements: [
        "3+ years of experience in business development or partnerships",
        "Strong network in the live music industry",
        "Excellent negotiation and relationship-building skills",
        "Experience with contract management",
        "Willingness to travel (25%)"
      ]
    }
  ]
  
  // Mock data for company values
  const companyValues = [
    {
      icon: "⚖️",
      title: "Fairness",
      description: "We believe in fair compensation for artists and transparent business practices."
    },
    {
      icon: "🤝",
      title: "Community",
      description: "We foster meaningful connections between artists, fans, and venues."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We continuously evolve our platform to better serve the needs of independent artists."
    },
    {
      icon: "🔒",
      title: "Trust",
      description: "We build trust through reliability, security, and consistent delivery on our promises."
    }
  ]
  
  // Mock data for benefits
  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "We offer competitive salaries and equity packages."
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage for you and your dependents."
    },
    {
      icon: "🏖️",
      title: "Unlimited PTO",
      description: "Take the time you need to rest, recharge, and explore."
    },
    {
      icon: "🎵",
      title: "Music Perks",
      description: "Free access to concerts and music events."
    },
    {
      icon: "💻",
      title: "Remote Work",
      description: "Work from anywhere with flexible hours."
    },
    {
      icon: "📚",
      title: "Learning Budget",
      description: "Annual budget for courses, books, and conferences."
    }
  ]
  
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Join Our Team</HeroTitle>
            <HeroSubtitle>Help us revolutionize the music industry and empower independent artists</HeroSubtitle>
            <HeroButton as="a" href="#openings">View Open Positions</HeroButton>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <MissionSection>
        <Container>
          <TwoColumnLayout>
            <MissionImage src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="Team collaboration" />
            <MissionContent>
              <SectionTitle>Our Mission</SectionTitle>
              <MissionText>
                <p>
                  At TrueFans CONNECT™, we're on a mission to democratize the music industry by putting the power back in the hands of those who create and appreciate art.
                </p>
                <p>
                  We believe that talented artists deserve to be supported directly by their fans, without intermediaries taking the majority of their earnings. Our platform is built on the principle that the relationship between artists and their supporters should be direct, transparent, and mutually beneficial.
                </p>
                <p>
                  By joining our team, you'll be part of a movement that's creating a more equitable future for independent artists and transforming how music is valued and supported.
                </p>
              </MissionText>
            </MissionContent>
          </TwoColumnLayout>
        </Container>
      </MissionSection>
      
      <ValuesSection>
        <Container>
          <SectionTitle>Our Values</SectionTitle>
          <ValuesGrid>
            {companyValues.map(value => (
              <ValueCard key={value.title}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </ValuesSection>
      
      <BenefitsSection>
        <Container>
          <SectionTitle>Benefits & Perks</SectionTitle>
          <BenefitsGrid>
            {benefits.map(benefit => (
              <BenefitCard key={benefit.title}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Container>
      </BenefitsSection>
      
      <OpeningsSection id="openings">
        <Container>
          <SectionTitle>Open Positions</SectionTitle>
          <JobListingsContainer>
            {jobListings.map(job => (
              <JobListing key={job.id}>
                <JobHeader>
                  <JobTitle>{job.title}</JobTitle>
                  <JobMeta>
                    <JobMetaItem>{job.department}</JobMetaItem>
                    <JobMetaItem>{job.location}</JobMetaItem>
                    <JobMetaItem>{job.type}</JobMetaItem>
                  </JobMeta>
                </JobHeader>
                <JobDescription>{job.description}</JobDescription>
                <JobRequirements>
                  <RequirementsTitle>Requirements:</RequirementsTitle>
                  <RequirementsList>
                    {job.requirements.map((requirement, index) => (
                      <RequirementItem key={index}>{requirement}</RequirementItem>
                    ))}
                  </RequirementsList>
                </JobRequirements>
                <ApplyButton>Apply Now</ApplyButton>
              </JobListing>
            ))}
          </JobListingsContainer>
        </Container>
      </OpeningsSection>
      
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle>Don't See the Right Fit?</CTATitle>
            <CTAText>
              We're always looking for talented individuals who are passionate about our mission. Send us your resume and let us know how you can contribute to our team.
            </CTAText>
            <CTAButton as={Link} to="/contact">Contact Us</CTAButton>
          </CTAContent>
        </Container>
      </CTASection>
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
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const HeroButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

// Mission Section
const MissionSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const MissionImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.space.lg};
  }
`

const MissionContent = styled.div``

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`

const MissionText = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.lightText};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

// Values Section
const ValuesSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const ValueCard = styled.div`
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

const ValueIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ValueTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ValueDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

// Benefits Section
const BenefitsSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const BenefitCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const BenefitIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const BenefitDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

// Openings Section
const OpeningsSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
  scroll-margin-top: 80px; /* For smooth scrolling with fixed header */
`

const JobListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const JobListing = styled.div`
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

const JobHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const JobTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.md};
`

const JobMetaItem = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const JobDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const JobRequirements = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const RequirementsTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const RequirementsList = styled.ul`
  padding-left: ${({ theme }) => theme.space.lg};
`

const RequirementItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.xs};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const ApplyButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
`

const CTAContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CTAButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

export default Careers
