import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const AffiliateProgram = () => {
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
          <PageTitle>Artist Affiliate Program</PageTitle>
          <PageDescription>Earn additional income by referring other artists to TrueFans CONNECT</PageDescription>
        </PageHeader>
        
        <TabsContainer>
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </TabButton>
          <TabButton 
            active={activeTab === 'how-it-works'} 
            onClick={() => setActiveTab('how-it-works')}
          >
            How It Works
          </TabButton>
          <TabButton 
            active={activeTab === 'referral-tools'} 
            onClick={() => setActiveTab('referral-tools')}
          >
            Referral Tools
          </TabButton>
          <TabButton 
            active={activeTab === 'earnings'} 
            onClick={() => setActiveTab('earnings')}
          >
            Your Earnings
          </TabButton>
        </TabsContainer>
        
        <TabContent>
          {activeTab === 'overview' && (
            <OverviewTab>
              <HighlightsGrid>
                <HighlightCard>
                  <HighlightIcon>💰</HighlightIcon>
                  <HighlightTitle>Two-Tier Earnings</HighlightTitle>
                  <HighlightDescription>Earn 2.5% of all donations received by artists you refer, plus 2.5% from artists they refer.</HighlightDescription>
                </HighlightCard>
                
                <HighlightCard>
                  <HighlightIcon>🔄</HighlightIcon>
                  <HighlightTitle>Passive Income</HighlightTitle>
                  <HighlightDescription>Continue earning as long as your referred artists receive donations on the platform.</HighlightDescription>
                </HighlightCard>
                
                <HighlightCard>
                  <HighlightIcon>🌐</HighlightIcon>
                  <HighlightTitle>Easy Sharing</HighlightTitle>
                  <HighlightDescription>Share your unique referral link via email, social media, or in person at shows and events.</HighlightDescription>
                </HighlightCard>
              </HighlightsGrid>
              
              <InfoSection>
                <InfoTitle>Why Join Our Affiliate Program?</InfoTitle>
                <InfoText>
                  <p>As an artist on TrueFans CONNECT, you're automatically enrolled in our affiliate program. This means you can start earning additional income by referring other artists to the platform.</p>
                  <p>Our two-tier affiliate structure rewards you not only for direct referrals but also for the artists they bring on board. This creates a sustainable income stream that grows with your network.</p>
                  <p>The best part? There's no cap on how many artists you can refer or how much you can earn. The more successful your referred artists become, the more you earn.</p>
                </InfoText>
              </InfoSection>
              
              <StatsSection>
                <StatCard>
                  <StatValue>$127,500+</StatValue>
                  <StatLabel>Paid to affiliates in 2023</StatLabel>
                </StatCard>
                
                <StatCard>
                  <StatValue>1,200+</StatValue>
                  <StatLabel>Artists earning affiliate income</StatLabel>
                </StatCard>
                
                <StatCard>
                  <StatValue>$450</StatValue>
                  <StatLabel>Average monthly affiliate earnings</StatLabel>
                </StatCard>
              </StatsSection>
              
              <TestimonialsSection>
                <SectionTitle>Success Stories</SectionTitle>
                <TestimonialsList>
                  <TestimonialCard>
                    <TestimonialContent>
                      "I've referred 15 artists to TrueFans CONNECT, and now I earn an additional $600-800 per month just from affiliate commissions. It's become a significant part of my income as an independent musician."
                    </TestimonialContent>
                    <TestimonialAuthor>
                      <TestimonialAvatar src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg" alt="Sarah Johnson" />
                      <TestimonialInfo>
                        <TestimonialName>Sarah Johnson</TestimonialName>
                        <TestimonialRole>Jazz Vocalist, New Orleans</TestimonialRole>
                      </TestimonialInfo>
                    </TestimonialAuthor>
                  </TestimonialCard>
                  
                  <TestimonialCard>
                    <TestimonialContent>
                      "The two-tier structure is brilliant. I referred my bandmates, who then referred other musicians in their network. Now I'm earning from both levels, creating a steady stream of passive income."
                    </TestimonialContent>
                    <TestimonialAuthor>
                      <TestimonialAvatar src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg" alt="Marcus Rivera" />
                      <TestimonialInfo>
                        <TestimonialName>Marcus Rivera</TestimonialName>
                        <TestimonialRole>Indie Rock Guitarist, Austin</TestimonialRole>
                      </TestimonialInfo>
                    </TestimonialAuthor>
                  </TestimonialCard>
                </TestimonialsList>
              </TestimonialsSection>
              
              <CTASection>
                <CTATitle>Ready to Start Earning?</CTATitle>
                <CTADescription>Get your unique referral link and start sharing with other artists in your network.</CTADescription>
                <CTAButton onClick={() => setActiveTab('referral-tools')}>Get Your Referral Link</CTAButton>
              </CTASection>
            </OverviewTab>
          )}
          
          {activeTab === 'how-it-works' && (
            <HowItWorksTab>
              <ProcessSection>
                <SectionTitle>How the Affiliate Program Works</SectionTitle>
                <ProcessSteps>
                  <ProcessStep>
                    <StepNumber>1</StepNumber>
                    <StepContent>
                      <StepTitle>Share Your Referral Link</StepTitle>
                      <StepDescription>Every artist on TrueFans CONNECT gets a unique referral link. Share this with other artists through social media, email, or in person.</StepDescription>
                    </StepContent>
                  </ProcessStep>
                  
                  <ProcessStep>
                    <StepNumber>2</StepNumber>
                    <StepContent>
                      <StepTitle>Artists Sign Up Through Your Link</StepTitle>
                      <StepDescription>When an artist clicks your link and creates an account, they're permanently tagged as your referral in our system.</StepDescription>
                    </StepContent>
                  </ProcessStep>
                  
                  <ProcessStep>
                    <StepNumber>3</StepNumber>
                    <StepContent>
                      <StepTitle>Your Network Grows</StepTitle>
                      <StepDescription>Your referred artists can also refer others, creating a second tier in your affiliate network.</StepDescription>
                    </StepContent>
                  </ProcessStep>
                  
                  <ProcessStep>
                    <StepNumber>4</StepNumber>
                    <StepContent>
                      <StepTitle>Earn From Both Tiers</StepTitle>
                      <StepDescription>You earn 2.5% of all donations received by your direct referrals (first tier) and 2.5% from their referrals (second tier).</StepDescription>
                    </StepContent>
                  </ProcessStep>
                  
                  <ProcessStep>
                    <StepNumber>5</StepNumber>
                    <StepContent>
                      <StepTitle>Get Paid Automatically</StepTitle>
                      <StepDescription>Affiliate earnings are calculated daily and added to your regular payout schedule. No extra steps required!</StepDescription>
                    </StepContent>
                  </ProcessStep>
                </ProcessSteps>
              </ProcessSection>
              
              <CommissionSection>
                <SectionTitle>Commission Structure</SectionTitle>
                <CommissionTable>
                  <thead>
                    <tr>
                      <TableHeader>Tier</TableHeader>
                      <TableHeader>Relationship</TableHeader>
                      <TableHeader>Commission Rate</TableHeader>
                      <TableHeader>Example</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <TableCell>Tier 1</TableCell>
                      <TableCell>Artists you directly refer</TableCell>
                      <TableCell>2.5% of all donations</TableCell>
                      <TableCell>If your referral receives $1,000 in donations, you earn $25</TableCell>
                    </tr>
                    <tr>
                      <TableCell>Tier 2</TableCell>
                      <TableCell>Artists referred by your referrals</TableCell>
                      <TableCell>2.5% of all donations</TableCell>
                      <TableCell>If your referral's referral receives $1,000 in donations, you earn $25</TableCell>
                    </tr>
                  </tbody>
                </CommissionTable>
              </CommissionSection>
              
              <ExampleSection>
                <SectionTitle>Earning Potential Example</SectionTitle>
                <ExampleCard>
                  <ExampleScenario>
                    <ExampleTitle>Scenario: Building a Network of 10 Artists</ExampleTitle>
                    <ExampleList>
                      <ExampleItem>You refer 5 artists directly (Tier 1)</ExampleItem>
                      <ExampleItem>Each of those artists refers 1 more artist (5 total in Tier 2)</ExampleItem>
                      <ExampleItem>On average, each artist receives $500/month in donations</ExampleItem>
                    </ExampleList>
                  </ExampleScenario>
                  
                  <ExampleCalculation>
                    <CalculationTitle>Monthly Earnings Calculation:</CalculationTitle>
                    <CalculationRow>
                      <CalculationLabel>Tier 1 Earnings:</CalculationLabel>
                      <CalculationValue>5 artists × $500 × 2.5% = $62.50</CalculationValue>
                    </CalculationRow>
                    <CalculationRow>
                      <CalculationLabel>Tier 2 Earnings:</CalculationLabel>
                      <CalculationValue>5 artists × $500 × 2.5% = $62.50</CalculationValue>
                    </CalculationRow>
                    <CalculationTotal>
                      <TotalLabel>Total Monthly Affiliate Income:</TotalLabel>
                      <TotalValue>$125.00</TotalValue>
                    </CalculationTotal>
                  </ExampleCalculation>
                </ExampleCard>
                
                <ExampleNote>This is just an example. Your actual earnings will depend on how many artists you refer, how many they refer, and how much in donations they all receive.</ExampleNote>
              </ExampleSection>
              
              <FAQSection>
                <SectionTitle>Frequently Asked Questions</SectionTitle>
                <FAQList>
                  <FAQItem>
                    <FAQQuestion>Is there a limit to how many artists I can refer?</FAQQuestion>
                    <FAQAnswer>No, there's no limit. You can refer as many artists as you want and earn from all of them.</FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>How long do I earn commissions for?</FAQQuestion>
                    <FAQAnswer>You'll continue to earn commissions as long as your referred artists (both Tier 1 and Tier 2) receive donations on the platform.</FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>When and how do I get paid my affiliate earnings?</FAQQuestion>
                    <FAQAnswer>Affiliate earnings are added to your regular artist payout and follow the same schedule and payment method.</FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>Do I need to sign up separately for the affiliate program?</FAQQuestion>
                    <FAQAnswer>No, all artists on TrueFans CONNECT are automatically enrolled in the affiliate program.</FAQAnswer>
                  </FAQItem>
                  
                  <FAQItem>
                    <FAQQuestion>Can I track how my referrals are performing?</FAQQuestion>
                    <FAQAnswer>Yes, you can see detailed statistics about your referrals and their earnings in the "Your Earnings" tab.</FAQAnswer>
                  </FAQItem>
                </FAQList>
              </FAQSection>
            </HowItWorksTab>
          )}
          
          {activeTab === 'referral-tools' && (
            <ReferralToolsTab>
              <ReferralLinkSection>
                <SectionTitle>Your Unique Referral Link</SectionTitle>
                <LinkBox>
                  <LinkText>https://truefans.connect/join/sarahjohnson</LinkText>
                  <CopyButton 
                    onClick={() => handleCopy('https://truefans.connect/join/sarahjohnson', 'referral-link')}
                  >
                    {copiedItem === 'referral-link' ? 'Copied!' : 'Copy Link'}
                  </CopyButton>
                </LinkBox>
                <LinkNote>Share this link with other artists. When they sign up through this link, they'll be permanently connected to your affiliate account.</LinkNote>
              </ReferralLinkSection>
              
              <SharingSection>
                <SectionTitle>Ways to Share Your Link</SectionTitle>
                <SharingOptions>
                  <SharingOption>
                    <SharingIcon>📱</SharingIcon>
                    <SharingTitle>Social Media</SharingTitle>
                    <SharingDescription>Share your referral link on Instagram, Twitter, Facebook, or TikTok</SharingDescription>
                    <SharingButtons>
                      <SharingButton>Share on Instagram</SharingButton>
                      <SharingButton>Share on Twitter</SharingButton>
                      <SharingButton>Share on Facebook</SharingButton>
                    </SharingButtons>
                  </SharingOption>
                  
                  <SharingOption>
                    <SharingIcon>✉️</SharingIcon>
                    <SharingTitle>Email</SharingTitle>
                    <SharingDescription>Send your referral link directly to other artists via email</SharingDescription>
                    <CopyButton 
                      onClick={() => handleCopy('Hey fellow artist! I\'ve been using TrueFans CONNECT to receive donations from my fans, and it\'s been amazing. If you\'re looking for a way to monetize your music, check it out: https://truefans.connect/join/sarahjohnson', 'email-template')}
                    >
                      {copiedItem === 'email-template' ? 'Copied!' : 'Copy Email Template'}
                    </CopyButton>
                  </SharingOption>
                  
                  <SharingOption>
                    <SharingIcon>🎵</SharingIcon>
                    <SharingTitle>Music Platforms</SharingTitle>
                    <SharingDescription>Add your referral link to your bio on Spotify, SoundCloud, Bandcamp, etc.</SharingDescription>
                    <CopyButton 
                      onClick={() => handleCopy('Support my music and other independent artists on TrueFans CONNECT: https://truefans.connect/join/sarahjohnson', 'bio-template')}
                    >
                      {copiedItem === 'bio-template' ? 'Copied!' : 'Copy Bio Template'}
                    </CopyButton>
                  </SharingOption>
                </SharingOptions>
              </SharingSection>
              
              <MarketingSection>
                <SectionTitle>Marketing Materials</SectionTitle>
                <MarketingDescription>Use these pre-designed materials to promote TrueFans CONNECT to other artists.</MarketingDescription>
                
                <MarketingGrid>
                  <MarketingCard>
                    <MarketingImage src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg" alt="Marketing Banner" />
                    <MarketingTitle>Social Media Banner</MarketingTitle>
                    <MarketingButton>Download</MarketingButton>
                  </MarketingCard>
                  
                  <MarketingCard>
                    <MarketingImage src="https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg" alt="Instagram Post" />
                    <MarketingTitle>Instagram Post</MarketingTitle>
                    <MarketingButton>Download</MarketingButton>
                  </MarketingCard>
                  
                  <MarketingCard>
                    <MarketingImage src="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg" alt="Email Header" />
                    <MarketingTitle>Email Header</MarketingTitle>
                    <MarketingButton>Download</MarketingButton>
                  </MarketingCard>
                </MarketingGrid>
              </MarketingSection>
              
              <TipsSection>
                <SectionTitle>Tips for Successful Referrals</SectionTitle>
                <TipsList>
                  <TipItem>
                    <TipIcon>💡</TipIcon>
                    <TipContent>
                      <TipTitle>Be Authentic</TipTitle>
                      <TipDescription>Share your genuine experience with TrueFans CONNECT when talking to other artists.</TipDescription>
                    </TipContent>
                  </TipItem>
                  
                  <TipItem>
                    <TipIcon>🎯</TipIcon>
                    <TipContent>
                      <TipTitle>Target the Right Artists</TipTitle>
                      <TipDescription>Focus on artists who already have an engaged fan base that might be willing to support them.</TipDescription>
                    </TipContent>
                  </TipItem>
                  
                  <TipItem>
                    <TipIcon>📊</TipIcon>
                    <TipContent>
                      <TipTitle>Share Your Results</TipTitle>
                      <TipDescription>If comfortable, share specific numbers about donations you've received to show the potential.</TipDescription>
                    </TipContent>
                  </TipItem>
                  
                  <TipItem>
                    <TipIcon>🤝</TipIcon>
                    <TipContent>
                      <TipTitle>Offer Help</TipTitle>
                      <TipDescription>Offer to help new artists set up their profile and donation systems after they sign up.</TipDescription>
                    </TipContent>
                  </TipItem>
                </TipsList>
              </TipsSection>
            </ReferralToolsTab>
          )}
          
          {activeTab === 'earnings' && (
            <EarningsTab>
              <EarningsSummary>
                <EarningsCard>
                  <EarningsHeader>
                    <EarningsTitle>Total Affiliate Earnings</EarningsTitle>
                    <EarningsAmount>$1,245.75</EarningsAmount>
                  </EarningsHeader>
                  <EarningsDetails>
                    <EarningsDetail>
                      <DetailLabel>This Month:</DetailLabel>
                      <DetailValue>$187.50</DetailValue>
                    </EarningsDetail>
                    <EarningsDetail>
                      <DetailLabel>Last Month:</DetailLabel>
                      <DetailValue>$162.25</DetailValue>
                    </EarningsDetail>
                    <EarningsDetail>
                      <DetailLabel>Next Payout:</DetailLabel>
                      <DetailValue>$87.25 (June 15)</DetailValue>
                    </EarningsDetail>
                  </EarningsDetails>
                </EarningsCard>
                
                <EarningsBreakdown>
                  <BreakdownTitle>Earnings Breakdown</BreakdownTitle>
                  <BreakdownChart>
                    <ChartSegment width="65%" color="#FFD700">
                      <SegmentLabel>Tier 1: $121.88 (65%)</SegmentLabel>
                    </ChartSegment>
                    <ChartSegment width="35%" color="#FF6B6B">
                      <SegmentLabel>Tier 2: $65.62 (35%)</SegmentLabel>
                    </ChartSegment>
                  </BreakdownChart>
                </EarningsBreakdown>
              </EarningsSummary>
              
              <ReferralNetwork>
                <SectionTitle>Your Referral Network</SectionTitle>
                <NetworkStats>
                  <NetworkStat>
                    <StatNumber>7</StatNumber>
                    <StatLabel>Direct Referrals (Tier 1)</StatLabel>
                  </NetworkStat>
                  <NetworkStat>
                    <StatNumber>12</StatNumber>
                    <StatLabel>Indirect Referrals (Tier 2)</StatLabel>
                  </NetworkStat>
                  <NetworkStat>
                    <StatNumber>$7,500</StatNumber>
                    <StatLabel>Network Donation Volume</StatLabel>
                  </NetworkStat>
                </NetworkStats>
              </ReferralNetwork>
              
              <ReferralTables>
                <TableSection>
                  <TableTitle>Tier 1 Referrals (Direct)</TableTitle>
                  <ReferralTable>
                    <thead>
                      <tr>
                        <TableHeader>Artist</TableHeader>
                        <TableHeader>Join Date</TableHeader>
                        <TableHeader>Donations Received</TableHeader>
                        <TableHeader>Your Commission</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Marcus Rivera', date: 'Apr 12, 2023', donations: '$1,245.00', commission: '$31.13' },
                        { name: 'Elena Chen', date: 'May 3, 2023', donations: '$875.50', commission: '$21.89' },
                        { name: 'David Kim', date: 'May 15, 2023', donations: '$1,050.00', commission: '$26.25' },
                        { name: 'Sophia Patel', date: 'Jun 2, 2023', donations: '$725.00', commission: '$18.13' },
                        { name: 'James Wilson', date: 'Jun 8, 2023', donations: '$980.00', commission: '$24.50' }
                      ].map((referral, index) => (
                        <tr key={index}>
                          <TableCell>{referral.name}</TableCell>
                          <TableCell>{referral.date}</TableCell>
                          <TableCell>{referral.donations}</TableCell>
                          <TableCell>{referral.commission}</TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </ReferralTable>
                </TableSection>
                
                <TableSection>
                  <TableTitle>Tier 2 Referrals (Indirect)</TableTitle>
                  <ReferralTable>
                    <thead>
                      <tr>
                        <TableHeader>Artist</TableHeader>
                        <TableHeader>Referred By</TableHeader>
                        <TableHeader>Donations Received</TableHeader>
                        <TableHeader>Your Commission</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Michael Johnson', referrer: 'Marcus Rivera', donations: '$650.00', commission: '$16.25' },
                        { name: 'Olivia Brown', referrer: 'Elena Chen', donations: '$425.00', commission: '$10.63' },
                        { name: 'Noah Garcia', referrer: 'David Kim', donations: '$780.00', commission: '$19.50' },
                        { name: 'Emma Martinez', referrer: 'Sophia Patel', donations: '$510.00', commission: '$12.75' },
                        { name: 'Liam Taylor', referrer: 'James Wilson', donations: '$260.00', commission: '$6.50' }
                      ].map((referral, index) => (
                        <tr key={index}>
                          <TableCell>{referral.name}</TableCell>
                          <TableCell>{referral.referrer}</TableCell>
                          <TableCell>{referral.donations}</TableCell>
                          <TableCell>{referral.commission}</TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </ReferralTable>
                </TableSection>
              </ReferralTables>
              
              <EarningsHistory>
                <SectionTitle>Earnings History</SectionTitle>
                <HistoryTable>
                  <thead>
                    <tr>
                      <TableHeader>Month</TableHeader>
                      <TableHeader>Tier 1 Earnings</TableHeader>
                      <TableHeader>Tier 2 Earnings</TableHeader>
                      <TableHeader>Total</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { month: 'June 2023', tier1: '$121.88', tier2: '$65.62', total: '$187.50' },
                      { month: 'May 2023', tier1: '$105.46', tier2: '$56.79', total: '$162.25' },
                      { month: 'April 2023', tier1: '$98.15', tier2: '$52.85', total: '$151.00' },
                      { month: 'March 2023', tier1: '$87.75', tier2: '$47.25', total: '$135.00' },
                      { month: 'February 2023', tier1: '$72.80', tier2: '$39.20', total: '$112.00' },
                      { month: 'January 2023', tier1: '$65.00', tier2: '$35.00', total: '$100.00' }
                    ].map((month, index) => (
                      <tr key={index}>
                        <TableCell>{month.month}</TableCell>
                        <TableCell>{month.tier1}</TableCell>
                        <TableCell>{month.tier2}</TableCell>
                        <TableCell><strong>{month.total}</strong></TableCell>
                      </tr>
                    ))}
                  </tbody>
                </HistoryTable>
              </EarningsHistory>
              
              <GrowthSection>
                <SectionTitle>Grow Your Earnings</SectionTitle>
                <GrowthTips>
                  <GrowthTip>
                    <GrowthIcon>📈</GrowthIcon>
                    <GrowthContent>
                      <GrowthTitle>Refer More Artists</GrowthTitle>
                      <GrowthDescription>The more artists you refer, the more potential earnings you can generate from both tiers.</GrowthDescription>
                    </GrowthContent>
                  </GrowthTip>
                  
                  <GrowthTip>
                    <GrowthIcon>🔄</GrowthIcon>
                    <GrowthContent>
                      <GrowthTitle>Encourage Your Referrals to Refer Others</GrowthTitle>
                      <GrowthDescription>Help your direct referrals understand the affiliate program so they can refer others, expanding your Tier 2 network.</GrowthDescription>
                    </GrowthContent>
                  </GrowthTip>
                  
                  <GrowthTip>
                    <GrowthIcon>🎯</GrowthIcon>
                    <GrowthContent>
                      <GrowthTitle>Target Successful Artists</GrowthTitle>
                      <GrowthDescription>Focus on referring artists who already have an engaged fan base that's likely to support them financially.</GrowthDescription>
                    </GrowthContent>
                  </GrowthTip>
                </GrowthTips>
                
                <GrowthCTA>
                  <CTAButton onClick={() => setActiveTab('referral-tools')}>Get Referral Tools</CTAButton>
                </GrowthCTA>
              </GrowthSection>
            </EarningsTab>
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

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const HighlightCard = styled.div`
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

const HighlightIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const HighlightTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const HighlightDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const InfoSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const InfoTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  text-align: center;
`

const InfoText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  
  p {
    margin-bottom: ${({ theme }) => theme.space.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  opacity: 0.9;
`

const TestimonialsSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const TestimonialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const TestimonialContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-style: italic;
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`

const TestimonialAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.md};
`

const TestimonialInfo = styled.div``

const TestimonialName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TestimonialRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const CTASection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CTAButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

// How It Works Tab
const HowItWorksTab = styled.div``

const ProcessSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const ProcessStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  flex-shrink: 0;
`

const StepContent = styled.div`
  flex: 1;
`

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const StepDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
`

const CommissionSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const CommissionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const TableHeader = styled.th`
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

const TableCell = styled.td`
  padding: ${({ theme }) => theme.space.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkText};
  
  &:last-child {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`

const ExampleSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ExampleCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ExampleScenario = styled.div``

const ExampleTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ExampleList = styled.ul`
  padding-left: ${({ theme }) => theme.space.lg};
`

const ExampleItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const ExampleCalculation = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
`

const CalculationTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const CalculationRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const CalculationLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const CalculationValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const CalculationTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.space.md};
  padding-top: ${({ theme }) => theme.space.md};
  border-top: 1px solid ${({ theme }) => theme.colors.mediumGray};
`

const TotalLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const TotalValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
`

const ExampleNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  font-style: italic;
  margin-top: ${({ theme }) => theme.space.md};
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

// Referral Tools Tab
const ReferralToolsTab = styled.div``

const ReferralLinkSection = styled.section`
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.space.sm};
  }
`

const LinkText = styled.div`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: ${({ theme }) => theme.space.sm};
`

const CopyButton = styled(Button)`
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

const LinkNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  font-style: italic;
`

const SharingSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const SharingOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const SharingOption = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const SharingIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SharingTitle = styled.h3`
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

const SharingButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`

const SharingButton = styled(Button)`
  padding: ${({ theme }) => theme.space.sm};
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

const MarketingSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const MarketingDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const MarketingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const MarketingCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const MarketingImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

const MarketingTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.md} 0`};
`

const MarketingButton = styled(Button)`
  width: calc(100% - ${({ theme }) => theme.space.md} * 2);
  margin: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.sm};
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
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
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

// Earnings Tab
const EarningsTab = styled.div``

const EarningsSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const EarningsCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const EarningsHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const EarningsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const EarningsAmount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
`

const EarningsDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`

const EarningsDetail = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.md};
`

const DetailLabel = styled.div`
  color: ${({ theme }) => theme.colors.lightText};
`

const DetailValue = styled.div`
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const EarningsBreakdown = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const BreakdownTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const BreakdownChart = styled.div`
  display: flex;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ChartSegment = styled.div`
  width: ${({ width }) => width};
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const SegmentLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
`

const ReferralNetwork = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const NetworkStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const NetworkStat = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ReferralTables = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const TableSection = styled.section``

const TableTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ReferralTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const EarningsHistory = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const GrowthSection = styled.section``

const GrowthTips = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const GrowthTip = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.md};
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const GrowthIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  flex-shrink: 0;
`

const GrowthContent = styled.div`
  flex: 1;
`

const GrowthTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const GrowthDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const GrowthCTA = styled.div`
  text-align: center;
`

export default AffiliateProgram
