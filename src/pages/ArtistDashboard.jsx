import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const ArtistDashboard = () => {
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <DashboardHeader>
          <WelcomeSection>
            <WelcomeTitle>Welcome back, Sarah</WelcomeTitle>
            <WelcomeSubtitle>Here's an overview of your artist account</WelcomeSubtitle>
          </WelcomeSection>
          <ActionButtons>
            <ActionButton>Edit Profile</ActionButton>
            <ActionButton variant="secondary" as={Link} to="/artist-profile">View Public Profile</ActionButton>
          </ActionButtons>
        </DashboardHeader>
        
        <DashboardGrid>
          <MainContent>
            <StatsCards>
              <StatCard>
                <StatIcon>💰</StatIcon>
                <StatInfo>
                  <StatValue>$1,245.00</StatValue>
                  <StatLabel>Total Donations</StatLabel>
                </StatInfo>
              </StatCard>
              
              <StatCard>
                <StatIcon>👥</StatIcon>
                <StatInfo>
                  <StatValue>87</StatValue>
                  <StatLabel>Supporters</StatLabel>
                </StatInfo>
              </StatCard>
              
              <StatCard>
                <StatIcon>📊</StatIcon>
                <StatInfo>
                  <StatValue>$28.50</StatValue>
                  <StatLabel>Average Donation</StatLabel>
                </StatInfo>
              </StatCard>
              
              <StatCard>
                <StatIcon>📱</StatIcon>
                <StatInfo>
                  <StatValue>342</StatValue>
                  <StatLabel>Profile Views</StatLabel>
                </StatInfo>
              </StatCard>
            </StatsCards>
            
            <Section>
              <SectionHeader>
                <SectionTitle>Recent Donations</SectionTitle>
                <ViewAllButton>View All</ViewAllButton>
              </SectionHeader>
              
              <DonationsList>
                {[1, 2, 3, 4, 5].map((donation) => (
                  <DonationItem key={donation}>
                    <DonationInfo>
                      <DonationAmount>${Math.floor(Math.random() * 50) + 5}.00</DonationAmount>
                      <DonationDetails>
                        <DonationName>Fan #{Math.floor(Math.random() * 1000) + 1}</DonationName>
                        <DonationDate>{Math.floor(Math.random() * 24) + 1}h ago</DonationDate>
                      </DonationDetails>
                      {Math.random() > 0.5 && (
                        <DonationMessage>"Keep up the amazing music! Can't wait for your next album."</DonationMessage>
                      )}
                    </DonationInfo>
                    <DonationActions>
                      <DonationButton>Thank</DonationButton>
                    </DonationActions>
                  </DonationItem>
                ))}
              </DonationsList>
            </Section>
            
            <Section>
              <SectionHeader>
                <SectionTitle>Donation Methods</SectionTitle>
                <ViewAllButton as={Link} to="/donation-system">Manage</ViewAllButton>
              </SectionHeader>
              
              <MethodsGrid>
                <MethodCard>
                  <MethodIcon>🔗</MethodIcon>
                  <MethodInfo>
                    <MethodTitle>Donation Link</MethodTitle>
                    <MethodStats>
                      <MethodStat>
                        <StatNumber>124</StatNumber>
                        <StatLabel>Clicks</StatLabel>
                      </MethodStat>
                      <MethodStat>
                        <StatNumber>$685</StatNumber>
                        <StatLabel>Revenue</StatLabel>
                      </MethodStat>
                    </MethodStats>
                  </MethodInfo>
                  <MethodAction>
                    <MethodButton>Copy Link</MethodButton>
                  </MethodAction>
                </MethodCard>
                
                <MethodCard>
                  <MethodIcon>📱</MethodIcon>
                  <MethodInfo>
                    <MethodTitle>QR Code</MethodTitle>
                    <MethodStats>
                      <MethodStat>
                        <StatNumber>56</StatNumber>
                        <StatLabel>Scans</StatLabel>
                      </MethodStat>
                      <MethodStat>
                        <StatNumber>$320</StatNumber>
                        <StatLabel>Revenue</StatLabel>
                      </MethodStat>
                    </MethodStats>
                  </MethodInfo>
                  <MethodAction>
                    <MethodButton>Download</MethodButton>
                  </MethodAction>
                </MethodCard>
                
                <MethodCard>
                  <MethodIcon>💻</MethodIcon>
                  <MethodInfo>
                    <MethodTitle>Embed Widget</MethodTitle>
                    <MethodStats>
                      <MethodStat>
                        <StatNumber>43</StatNumber>
                        <StatLabel>Views</StatLabel>
                      </MethodStat>
                      <MethodStat>
                        <StatNumber>$240</StatNumber>
                        <StatLabel>Revenue</StatLabel>
                      </MethodStat>
                    </MethodStats>
                  </MethodInfo>
                  <MethodAction>
                    <MethodButton>Get Code</MethodButton>
                  </MethodAction>
                </MethodCard>
              </MethodsGrid>
            </Section>
            
            <Section>
              <SectionHeader>
                <SectionTitle>Affiliate Program</SectionTitle>
                <ViewAllButton as={Link} to="/affiliate-program">View Details</ViewAllButton>
              </SectionHeader>
              
              <AffiliateCard>
                <AffiliateContent>
                  <AffiliateIcon>🔄</AffiliateIcon>
                  <AffiliateInfo>
                    <AffiliateTitle>Earn by Referring Other Artists</AffiliateTitle>
                    <AffiliateDescription>
                      Earn 2.5% of all donations received by artists you refer, plus 2.5% from artists they refer.
                    </AffiliateDescription>
                    <AffiliateStats>
                      <AffiliateStat>
                        <AffiliateStatValue>7</AffiliateStatValue>
                        <AffiliateStatLabel>Artists Referred</AffiliateStatLabel>
                      </AffiliateStat>
                      <AffiliateStat>
                        <AffiliateStatValue>$187.50</AffiliateStatValue>
                        <AffiliateStatLabel>Earnings This Month</AffiliateStatLabel>
                      </AffiliateStat>
                    </AffiliateStats>
                  </AffiliateInfo>
                </AffiliateContent>
                <AffiliateActions>
                  <AffiliateButton as={Link} to="/affiliate-program">Manage Referrals</AffiliateButton>
                  <AffiliateButton variant="secondary">Copy Referral Link</AffiliateButton>
                </AffiliateActions>
              </AffiliateCard>
            </Section>
          </MainContent>
          
          <Sidebar>
            <PayoutCard>
              <PayoutHeader>
                <PayoutTitle>Next Payout</PayoutTitle>
                <PayoutAmount>$245.60</PayoutAmount>
              </PayoutHeader>
              <PayoutInfo>
                <PayoutDate>Scheduled for Monday, June 12</PayoutDate>
                <PayoutAccount>Deposit to ****4567</PayoutAccount>
              </PayoutInfo>
              <PayoutActions>
                <PayoutButton>View History</PayoutButton>
                <PayoutButton variant="outline">Update Bank</PayoutButton>
              </PayoutActions>
            </PayoutCard>
            
            <PromotionCard>
              <PromotionHeader>
                <PromotionTitle>Boost Your Donations</PromotionTitle>
              </PromotionHeader>
              <PromotionTips>
                <PromotionTip>
                  <TipIcon>🎯</TipIcon>
                  <TipText>Share your donation link in your next social media post</TipText>
                </PromotionTip>
                <PromotionTip>
                  <TipIcon>🎤</TipIcon>
                  <TipText>Display your QR code at your next live performance</TipText>
                </PromotionTip>
                <PromotionTip>
                  <TipIcon>📧</TipIcon>
                  <TipText>Include your donation link in your email newsletter</TipText>
                </PromotionTip>
                <PromotionTip>
                  <TipIcon>🎵</TipIcon>
                  <TipText>Add your donation widget to your music streaming profiles</TipText>
                </PromotionTip>
              </PromotionTips>
              <PromotionAction>
                <PromotionButton>Get Marketing Kit</PromotionButton>
              </PromotionAction>
            </PromotionCard>
            
            <SupportCard>
              <SupportHeader>
                <SupportTitle>Need Help?</SupportTitle>
              </SupportHeader>
              <SupportOptions>
                <SupportOption>
                  <SupportIcon>📚</SupportIcon>
                  <SupportText>Browse Help Center</SupportText>
                </SupportOption>
                <SupportOption>
                  <SupportIcon>💬</SupportIcon>
                  <SupportText>Chat with Support</SupportText>
                </SupportOption>
                <SupportOption>
                  <SupportIcon>📞</SupportIcon>
                  <SupportText>Schedule a Call</SupportText>
                </SupportOption>
              </SupportOptions>
            </SupportCard>
          </Sidebar>
        </DashboardGrid>
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.lg};
  }
`

const WelcomeSection = styled.div``

const WelcomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const WelcomeSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
`

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`

const ActionButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background-color: ${({ theme, variant }) => 
    variant === 'secondary' ? 'transparent' : theme.colors.primary
  };
  color: ${({ theme, variant }) => 
    variant === 'secondary' ? theme.colors.darkText : theme.colors.trustworthyNavy
  };
  border: ${({ theme, variant }) => 
    variant === 'secondary' ? `1px solid ${theme.colors.mediumGray}` : 'none'
  };
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme, variant }) => 
      variant === 'secondary' ? theme.colors.lightGray : theme.colors.primaryDark
    };
  }
`

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const MainContent = styled.div``

const StatsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const StatCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  align-items: center;
`

const StatIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-right: ${({ theme }) => theme.space.md};
`

const StatInfo = styled.div``

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    text-decoration: underline;
  }
`

const DonationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const DonationItem = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.md};
  }
`

const DonationInfo = styled.div`
  flex: 1;
`

const DonationAmount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const DonationDetails = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const DonationName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const DonationDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`

const DonationMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  font-style: italic;
`

const DonationActions = styled.div``

const DonationButton = styled(Button)`
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const MethodsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const MethodCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  align-items: center;
`

const MethodIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-right: ${({ theme }) => theme.space.md};
`

const MethodInfo = styled.div`
  flex: 1;
`

const MethodTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const MethodStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
`

const MethodStat = styled.div``

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const MethodAction = styled.div``

const MethodButton = styled(Button)`
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

const AffiliateCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const AffiliateContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const AffiliateIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-right: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.space.md};
  }
`

const AffiliateInfo = styled.div`
  flex: 1;
`

const AffiliateTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const AffiliateDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const AffiliateStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
  }
`

const AffiliateStat = styled.div``

const AffiliateStatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
`

const AffiliateStatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const AffiliateActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

const AffiliateButton = styled(Button)`
  flex: 1;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme, variant }) => 
    variant === 'secondary' ? 'transparent' : theme.colors.secondary
  };
  color: ${({ theme, variant }) => 
    variant === 'secondary' ? theme.colors.darkText : 'white'
  };
  border: ${({ theme, variant }) => 
    variant === 'secondary' ? `1px solid ${theme.colors.mediumGray}` : 'none'
  };
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme, variant }) => 
      variant === 'secondary' ? theme.colors.lightGray : theme.colors.secondaryDark
    };
  }
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const PayoutCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const PayoutHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const PayoutTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const PayoutAmount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
`

const PayoutInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const PayoutDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const PayoutAccount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const PayoutActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`

const PayoutButton = styled(Button)`
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme, variant }) => 
    variant === 'outline' ? 'transparent' : theme.colors.primary
  };
  color: ${({ theme, variant }) => 
    variant === 'outline' ? theme.colors.darkText : theme.colors.trustworthyNavy
  };
  border: ${({ theme, variant }) => 
    variant === 'outline' ? `1px solid ${theme.colors.mediumGray}` : 'none'
  };
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme, variant }) => 
      variant === 'outline' ? theme.colors.lightGray : theme.colors.primaryDark
    };
  }
`

const PromotionCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const PromotionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const PromotionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const PromotionTips = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const PromotionTip = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.sm};
`

const TipIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

const TipText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const PromotionAction = styled.div``

const PromotionButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`

const SupportCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const SupportHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SupportTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const SupportOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const SupportOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumGray};
  }
`

const SupportIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

const SupportText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

export default ArtistDashboard
