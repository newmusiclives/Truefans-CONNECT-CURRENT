import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('getting-started')
  
  // Mock data for help categories
  const helpCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: '🚀',
      description: 'Learn the basics of using TrueFans CONNECT™'
    },
    {
      id: 'artist-guides',
      name: 'Artist Guides',
      icon: '🎸',
      description: 'Detailed guides for artists using the platform'
    },
    {
      id: 'fan-support',
      name: 'Fan Support',
      icon: '👥',
      description: 'How to support your favorite artists'
    },
    {
      id: 'venue-guides',
      name: 'Venue Guides',
      icon: '🏢',
      description: 'Information for venue owners and managers'
    },
    {
      id: 'payments',
      name: 'Payments & Billing',
      icon: '💰',
      description: 'Everything about payments, fees, and billing'
    },
    {
      id: 'account',
      name: 'Account & Security',
      icon: '🔒',
      description: 'Manage your account and security settings'
    }
  ]
  
  // Mock data for FAQs
  const faqsByCategory = {
    'getting-started': [
      {
        id: 1,
        question: 'What is TrueFans CONNECT™?',
        answer: 'TrueFans CONNECT™ is a platform that connects independent artists with their fans and venues. It provides tools for artists to receive direct support from fans, book venues, and grow their careers on their own terms.'
      },
      {
        id: 2,
        question: 'How do I create an account?',
        answer: 'To create an account, click the "Sign Up" button in the top right corner of the homepage. You can sign up as an artist, a fan, or a venue owner. Follow the prompts to complete your profile.'
      },
      {
        id: 3,
        question: 'Is TrueFans CONNECT™ free to use?',
        answer: 'Basic accounts are free for fans. Artists and venues have free basic accounts with optional premium features available for a subscription fee. We also take a small percentage of transactions processed through the platform.'
      },
      {
        id: 4,
        question: 'What makes TrueFans CONNECT™ different from other platforms?',
        answer: 'TrueFans CONNECT™ is unique in that it combines direct fan support with venue booking in one platform. We also offer more favorable revenue splits for artists compared to traditional platforms, with artists keeping 80% of all fan contributions.'
      }
    ],
    'artist-guides': [
      {
        id: 5,
        question: 'How do I set up my artist profile?',
        answer: 'After creating an artist account, you\'ll be guided through the profile setup process. You\'ll need to add a profile photo, cover image, bio, music samples, and links to your social media accounts. The more complete your profile, the more attractive it will be to fans and venues.'
      },
      {
        id: 6,
        question: 'How do I receive payments from fans?',
        answer: 'To receive payments, you\'ll need to connect a payment method in your account settings. We support direct bank deposits, PayPal, and Stripe. Payments are processed weekly, and you\'ll receive 80% of all contributions after payment processing fees.'
      },
      {
        id: 7,
        question: 'How do I apply for venue gigs?',
        answer: 'You can browse available venue opportunities in the "Venues" section. Filter by location, date, and venue type to find suitable opportunities. Click "Apply" on any listing to submit your profile and a custom message to the venue owner.'
      }
    ],
    'fan-support': [
      {
        id: 8,
        question: 'How do I support an artist?',
        answer: 'You can support artists in several ways: making one-time or recurring financial contributions, purchasing merchandise, buying tickets to shows, or sharing their profiles with your network. Every contribution helps artists continue creating music.'
      },
      {
        id: 9,
        question: 'What payment methods are accepted for contributions?',
        answer: 'We accept all major credit and debit cards, PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted.'
      },
      {
        id: 10,
        question: 'Can I get a refund for my contribution?',
        answer: 'One-time contributions are generally non-refundable as they go directly to supporting the artist. However, if you\'ve made a mistake or believe there\'s been an error, please contact our support team within 24 hours of the transaction.'
      }
    ],
    'venue-guides': [
      {
        id: 11,
        question: 'How do I list my venue on the platform?',
        answer: 'After creating a venue account, you\'ll need to complete your venue profile with details like location, capacity, available equipment, and photos. Once your profile is complete, you can create listings for performance opportunities at your venue.'
      },
      {
        id: 12,
        question: 'How do I review artist applications?',
        answer: 'When artists apply to your listings, you\'ll receive notifications. In your venue dashboard, you can review each application, listen to the artist\'s music, view their profile and fan base, and accept or decline their application.'
      },
      {
        id: 13,
        question: 'What fees does TrueFans CONNECT™ charge venues?',
        answer: 'Venues can create a basic profile for free. We charge a small fee for each successful booking made through the platform. Premium features, such as promoted listings and advanced analytics, are available through our venue subscription plans.'
      }
    ],
    'payments': [
      {
        id: 14,
        question: 'When are payments processed?',
        answer: 'Artist payments are processed weekly. Funds are typically available in your connected payment account within 3-5 business days after processing.'
      },
      {
        id: 15,
        question: 'What fees does TrueFans CONNECT™ charge?',
        answer: 'TrueFans CONNECT™ takes 20% of fan contributions, which includes payment processing fees. For venue bookings, we charge a 10% fee to the venue. Premium subscription features for artists and venues have separate monthly fees.'
      },
      {
        id: 16,
        question: 'How do I view my payment history?',
        answer: 'You can view your complete payment history in your account dashboard under "Payments." This section shows all incoming and outgoing transactions, including fan contributions, venue payments, and platform fees.'
      }
    ],
    'account': [
      {
        id: 17,
        question: 'How do I reset my password?',
        answer: 'If you\'ve forgotten your password, click "Log In" and then "Forgot Password." Enter the email address associated with your account, and we\'ll send you instructions to reset your password.'
      },
      {
        id: 18,
        question: 'How do I change my email address?',
        answer: 'You can change your email address in your account settings. For security reasons, we\'ll send a verification link to both your old and new email addresses to confirm the change.'
      },
      {
        id: 19,
        question: 'How do I delete my account?',
        answer: 'To delete your account, go to your account settings and select "Delete Account" at the bottom of the page. Note that account deletion is permanent and will remove all your data from our platform.'
      },
      {
        id: 20,
        question: 'Is my personal information secure?',
        answer: 'Yes, we take security seriously. We use industry-standard encryption for all data transmission and storage. We never share your personal information with third parties without your consent. For more details, please review our Privacy Policy.'
      }
    ]
  }
  
  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? Object.values(faqsByCategory).flat().filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqsByCategory[activeCategory] || []
  
  const handleSearch = (e) => {
    e.preventDefault()
    // Search is handled by the filteredFAQs logic above
  }
  
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Help Center</HeroTitle>
            <HeroSubtitle>Find answers to your questions about TrueFans CONNECT™</HeroSubtitle>
            <SearchForm onSubmit={handleSearch}>
              <SearchInput 
                type="text" 
                placeholder="Search for help..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchButton type="submit">Search</SearchButton>
            </SearchForm>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnLayout>
            <Sidebar>
              <SidebarTitle>Help Categories</SidebarTitle>
              <CategoryList>
                {helpCategories.map(category => (
                  <CategoryItem 
                    key={category.id}
                    active={activeCategory === category.id && !searchQuery}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setSearchQuery('')
                    }}
                  >
                    <CategoryIcon>{category.icon}</CategoryIcon>
                    <CategoryContent>
                      <CategoryName>{category.name}</CategoryName>
                      <CategoryDescription>{category.description}</CategoryDescription>
                    </CategoryContent>
                  </CategoryItem>
                ))}
              </CategoryList>
              
              <ContactSupport>
                <SupportTitle>Need More Help?</SupportTitle>
                <SupportText>Our support team is ready to assist you with any questions or issues.</SupportText>
                <SupportButton as={Link} to="/contact">Contact Support</SupportButton>
              </ContactSupport>
            </Sidebar>
            
            <MainContent>
              {searchQuery ? (
                <>
                  <SearchResultsTitle>
                    Search Results for "{searchQuery}" ({filteredFAQs.length} results)
                  </SearchResultsTitle>
                  {filteredFAQs.length === 0 && (
                    <NoResults>
                      <NoResultsIcon>🔍</NoResultsIcon>
                      <NoResultsTitle>No results found</NoResultsTitle>
                      <NoResultsText>
                        We couldn't find any matches for your search. Try using different keywords or browse our help categories.
                      </NoResultsText>
                    </NoResults>
                  )}
                </>
              ) : (
                <CategoryHeader>
                  <CategoryHeaderIcon>
                    {helpCategories.find(cat => cat.id === activeCategory)?.icon}
                  </CategoryHeaderIcon>
                  <CategoryHeaderContent>
                    <CategoryHeaderTitle>
                      {helpCategories.find(cat => cat.id === activeCategory)?.name}
                    </CategoryHeaderTitle>
                    <CategoryHeaderDescription>
                      {helpCategories.find(cat => cat.id === activeCategory)?.description}
                    </CategoryHeaderDescription>
                  </CategoryHeaderContent>
                </CategoryHeader>
              )}
              
              <FAQList>
                {filteredFAQs.map(faq => (
                  <FAQItem key={faq.id}>
                    <FAQQuestion>
                      <FAQQuestionText>{faq.question}</FAQQuestionText>
                    </FAQQuestion>
                    <FAQAnswer>{faq.answer}</FAQAnswer>
                  </FAQItem>
                ))}
              </FAQList>
              
              <RelatedArticles>
                <RelatedTitle>Related Articles</RelatedTitle>
                <RelatedList>
                  <RelatedItem>
                    <RelatedLink>How to optimize your artist profile for better visibility</RelatedLink>
                  </RelatedItem>
                  <RelatedItem>
                    <RelatedLink>Understanding the payout schedule and fee structure</RelatedLink>
                  </RelatedItem>
                  <RelatedItem>
                    <RelatedLink>Tips for engaging with your fan base effectively</RelatedLink>
                  </RelatedItem>
                  <RelatedItem>
                    <RelatedLink>Best practices for venue owners on the platform</RelatedLink>
                  </RelatedItem>
                </RelatedList>
              </RelatedArticles>
            </MainContent>
          </TwoColumnLayout>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle>Still Have Questions?</CTATitle>
            <CTAText>
              Our support team is available to help you with any questions or issues you may have.
            </CTAText>
            <CTAButtons>
              <CTAButton as={Link} to="/contact">Contact Support</CTAButton>
              <CTASecondaryButton as="a" href="mailto:support@truefans.connect">Email Us</CTASecondaryButton>
            </CTAButtons>
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

const SearchForm = styled.form`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
  }
`

const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.space.md};
  border: none;
  border-radius: ${({ theme }) => `${theme.radii.md} 0 0 ${theme.radii.md}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: ${({ theme }) => theme.radii.md};
  }
`

const SearchButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: none;
  border-radius: ${({ theme }) => `0 ${theme.radii.md} ${theme.radii.md} 0`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: ${({ theme }) => theme.radii.md};
  }
`

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

// Sidebar
const Sidebar = styled.aside`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const SidebarTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ active, theme }) => active ? theme.colors.primary + '15' : 'white'};
  border-left: 3px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ active, theme }) => active ? theme.colors.primary + '15' : theme.colors.lightGray};
  }
`

const CategoryIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-right: ${({ theme }) => theme.space.md};
  flex-shrink: 0;
`

const CategoryContent = styled.div`
  flex: 1;
`

const CategoryName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const CategoryDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ContactSupport = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const SupportTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const SupportText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SupportButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space.md};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-align: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

// Main Content
const MainContent = styled.div``

const SearchResultsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CategoryHeaderIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-right: ${({ theme }) => theme.space.md};
  flex-shrink: 0;
`

const CategoryHeaderContent = styled.div`
  flex: 1;
`

const CategoryHeaderTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const CategoryHeaderDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const FAQItem = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const FAQQuestion = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
`

const FAQQuestionText = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const FAQAnswer = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

// No Results
const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space.xl};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const NoResultsIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const NoResultsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const NoResultsText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 500px;
  margin: 0 auto;
`

// Related Articles
const RelatedArticles = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const RelatedTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const RelatedList = styled.ul`
  padding-left: ${({ theme }) => theme.space.lg};
`

const RelatedItem = styled.li`
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const RelatedLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
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

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`

const CTAButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

const CTASecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: 1px solid white;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }
`

export default HelpCenter
