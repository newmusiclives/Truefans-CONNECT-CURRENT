import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const VenueAnalytics = () => {
  const [dateRange, setDateRange] = useState('month')
  
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Analytics Dashboard</HeroTitle>
            <HeroSubtitle>Track your venue's performance and audience insights</HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <DashboardLayout>
            <Sidebar>
              <SidebarNav>
                <NavItem>
                  <NavLink to="/venue-portal">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/venue-portal/events">Events</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/venue-portal/artists">Artists</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink to="/venue-portal/analytics">Analytics</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/venue-portal/settings">Settings</NavLink>
                </NavItem>
              </SidebarNav>
            </Sidebar>
            
            <MainContent>
              <AnalyticsHeader>
                <DateRangeSelector>
                  <DateRangeButton 
                    active={dateRange === 'week'} 
                    onClick={() => setDateRange('week')}
                  >
                    Week
                  </DateRangeButton>
                  <DateRangeButton 
                    active={dateRange === 'month'} 
                    onClick={() => setDateRange('month')}
                  >
                    Month
                  </DateRangeButton>
                  <DateRangeButton 
                    active={dateRange === 'quarter'} 
                    onClick={() => setDateRange('quarter')}
                  >
                    Quarter
                  </DateRangeButton>
                  <DateRangeButton 
                    active={dateRange === 'year'} 
                    onClick={() => setDateRange('year')}
                  >
                    Year
                  </DateRangeButton>
                </DateRangeSelector>
                
                <DownloadButton>
                  <DownloadIcon />
                  Export Data
                </DownloadButton>
              </AnalyticsHeader>
              
              <OverviewCards>
                <OverviewCard>
                  <CardIcon color="#4CAF50">
                    <TicketIcon />
                  </CardIcon>
                  <CardContent>
                    <CardValue>1,248</CardValue>
                    <CardLabel>Tickets Sold</CardLabel>
                    <CardTrend positive>
                      <TrendIcon positive />
                      <TrendValue>+12.5%</TrendValue>
                    </CardTrend>
                  </CardContent>
                </OverviewCard>
                
                <OverviewCard>
                  <CardIcon color="#2196F3">
                    <RevenueIcon />
                  </CardIcon>
                  <CardContent>
                    <CardValue>$24,850</CardValue>
                    <CardLabel>Total Revenue</CardLabel>
                    <CardTrend positive>
                      <TrendIcon positive />
                      <TrendValue>+8.3%</TrendValue>
                    </CardTrend>
                  </CardContent>
                </OverviewCard>
                
                <OverviewCard>
                  <CardIcon color="#FF9800">
                    <EventIcon />
                  </CardIcon>
                  <CardContent>
                    <CardValue>18</CardValue>
                    <CardLabel>Events Hosted</CardLabel>
                    <CardTrend positive>
                      <TrendIcon positive />
                      <TrendValue>+5.0%</TrendValue>
                    </CardTrend>
                  </CardContent>
                </OverviewCard>
                
                <OverviewCard>
                  <CardIcon color="#E91E63">
                    <ArtistIcon />
                  </CardIcon>
                  <CardContent>
                    <CardValue>32</CardValue>
                    <CardLabel>Artists Booked</CardLabel>
                    <CardTrend negative>
                      <TrendIcon negative />
                      <TrendValue>-2.1%</TrendValue>
                    </CardTrend>
                  </CardContent>
                </OverviewCard>
              </OverviewCards>
              
              <AnalyticsGrid>
                <ChartCard wide>
                  <ChartHeader>
                    <ChartTitle>Revenue & Attendance</ChartTitle>
                    <ChartActions>
                      <ChartLegend>
                        <LegendItem color="#4CAF50">
                          <LegendColor color="#4CAF50" />
                          <LegendLabel>Revenue</LegendLabel>
                        </LegendItem>
                        <LegendItem color="#2196F3">
                          <LegendColor color="#2196F3" />
                          <LegendLabel>Attendance</LegendLabel>
                        </LegendItem>
                      </ChartLegend>
                    </ChartActions>
                  </ChartHeader>
                  <ChartContainer>
                    <RevenueChart />
                  </ChartContainer>
                </ChartCard>
                
                <ChartCard>
                  <ChartHeader>
                    <ChartTitle>Audience Demographics</ChartTitle>
                  </ChartHeader>
                  <ChartContainer>
                    <DemographicsChart />
                  </ChartContainer>
                </ChartCard>
                
                <ChartCard>
                  <ChartHeader>
                    <ChartTitle>Popular Event Types</ChartTitle>
                  </ChartHeader>
                  <ChartContainer>
                    <EventTypesChart />
                  </ChartContainer>
                </ChartCard>
                
                <ChartCard>
                  <ChartHeader>
                    <ChartTitle>Ticket Sales by Channel</ChartTitle>
                  </ChartHeader>
                  <ChartContainer>
                    <ChannelChart />
                  </ChartContainer>
                </ChartCard>
                
                <ChartCard>
                  <ChartHeader>
                    <ChartTitle>Audience Retention</ChartTitle>
                  </ChartHeader>
                  <ChartContainer>
                    <RetentionChart />
                  </ChartContainer>
                </ChartCard>
              </AnalyticsGrid>
              
              <AnalyticsSection>
                <SectionTitle>Top Performing Events</SectionTitle>
                <EventsTable>
                  <EventsTableHead>
                    <EventsTableRow>
                      <EventsTableHeader>Event Name</EventsTableHeader>
                      <EventsTableHeader>Date</EventsTableHeader>
                      <EventsTableHeader>Tickets Sold</EventsTableHeader>
                      <EventsTableHeader>Revenue</EventsTableHeader>
                      <EventsTableHeader>Capacity %</EventsTableHeader>
                    </EventsTableRow>
                  </EventsTableHead>
                  <EventsTableBody>
                    <EventsTableRow>
                      <EventsTableCell>
                        <EventName>Jazz Night with Emma Johnson</EventName>
                      </EventsTableCell>
                      <EventsTableCell>May 15, 2023</EventsTableCell>
                      <EventsTableCell>245</EventsTableCell>
                      <EventsTableCell>$4,900</EventsTableCell>
                      <EventsTableCell>
                        <CapacityBar>
                          <CapacityFill percent={98} />
                          <CapacityText>98%</CapacityText>
                        </CapacityBar>
                      </EventsTableCell>
                    </EventsTableRow>
                    
                    <EventsTableRow>
                      <EventsTableCell>
                        <EventName>Rock Concert: The Amplifiers</EventName>
                      </EventsTableCell>
                      <EventsTableCell>May 22, 2023</EventsTableCell>
                      <EventsTableCell>230</EventsTableCell>
                      <EventsTableCell>$5,750</EventsTableCell>
                      <EventsTableCell>
                        <CapacityBar>
                          <CapacityFill percent={92} />
                          <CapacityText>92%</CapacityText>
                        </CapacityBar>
                      </EventsTableCell>
                    </EventsTableRow>
                    
                    <EventsTableRow>
                      <EventsTableCell>
                        <EventName>Classical Evening: String Quartet</EventName>
                      </EventsTableCell>
                      <EventsTableCell>May 8, 2023</EventsTableCell>
                      <EventsTableCell>198</EventsTableCell>
                      <EventsTableCell>$3,960</EventsTableCell>
                      <EventsTableCell>
                        <CapacityBar>
                          <CapacityFill percent={79} />
                          <CapacityText>79%</CapacityText>
                        </CapacityBar>
                      </EventsTableCell>
                    </EventsTableRow>
                    
                    <EventsTableRow>
                      <EventsTableCell>
                        <EventName>EDM Party: DJ Pulse</EventName>
                      </EventsTableCell>
                      <EventsTableCell>May 29, 2023</EventsTableCell>
                      <EventsTableCell>185</EventsTableCell>
                      <EventsTableCell>$3,700</EventsTableCell>
                      <EventsTableCell>
                        <CapacityBar>
                          <CapacityFill percent={74} />
                          <CapacityText>74%</CapacityText>
                        </CapacityBar>
                      </EventsTableCell>
                    </EventsTableRow>
                    
                    <EventsTableRow>
                      <EventsTableCell>
                        <EventName>Acoustic Session: Sarah & Friends</EventName>
                      </EventsTableCell>
                      <EventsTableCell>May 5, 2023</EventsTableCell>
                      <EventsTableCell>175</EventsTableCell>
                      <EventsTableCell>$2,625</EventsTableCell>
                      <EventsTableCell>
                        <CapacityBar>
                          <CapacityFill percent={70} />
                          <CapacityText>70%</CapacityText>
                        </CapacityBar>
                      </EventsTableCell>
                    </EventsTableRow>
                  </EventsTableBody>
                </EventsTable>
              </AnalyticsSection>
              
              <AnalyticsSection>
                <SectionTitle>Popular Artists</SectionTitle>
                <ArtistsGrid>
                  {[1, 2, 3, 4, 5].map((artist) => (
                    <ArtistCard key={artist}>
                      <ArtistImage 
                        src={`https://images.pexels.com/photos/${1000000 + artist * 127}/pexels-photo-${1000000 + artist * 127}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                        alt={`Artist ${artist}`} 
                      />
                      <ArtistInfo>
                        <ArtistName>
                          {['Emma Johnson', 'The Amplifiers', 'String Quartet', 'DJ Pulse', 'Sarah & Friends'][artist - 1]}
                        </ArtistName>
                        <ArtistStats>
                          <ArtistStat>
                            <StatValue>{artist * 2 + 3}</StatValue>
                            <StatLabel>Events</StatLabel>
                          </ArtistStat>
                          <ArtistStat>
                            <StatValue>{artist * 150 + 500}</StatValue>
                            <StatLabel>Tickets</StatLabel>
                          </ArtistStat>
                          <ArtistStat>
                            <StatValue>${artist * 1500 + 3000}</StatValue>
                            <StatLabel>Revenue</StatLabel>
                          </ArtistStat>
                        </ArtistStats>
                      </ArtistInfo>
                    </ArtistCard>
                  ))}
                </ArtistsGrid>
              </AnalyticsSection>
              
              <AnalyticsSection>
                <SectionTitle>Audience Insights</SectionTitle>
                <InsightsGrid>
                  <InsightCard>
                    <InsightIcon>
                      <LocationIcon />
                    </InsightIcon>
                    <InsightContent>
                      <InsightTitle>Top Locations</InsightTitle>
                      <InsightList>
                        <InsightItem>
                          <InsightName>Downtown</InsightName>
                          <InsightValue>42%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Uptown</InsightName>
                          <InsightValue>28%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Midtown</InsightName>
                          <InsightValue>15%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Suburbs</InsightName>
                          <InsightValue>10%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Other</InsightName>
                          <InsightValue>5%</InsightValue>
                        </InsightItem>
                      </InsightList>
                    </InsightContent>
                  </InsightCard>
                  
                  <InsightCard>
                    <InsightIcon>
                      <AgeIcon />
                    </InsightIcon>
                    <InsightContent>
                      <InsightTitle>Age Distribution</InsightTitle>
                      <InsightList>
                        <InsightItem>
                          <InsightName>18-24</InsightName>
                          <InsightValue>22%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>25-34</InsightName>
                          <InsightValue>35%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>35-44</InsightName>
                          <InsightValue>25%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>45-54</InsightName>
                          <InsightValue>12%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>55+</InsightName>
                          <InsightValue>6%</InsightValue>
                        </InsightItem>
                      </InsightList>
                    </InsightContent>
                  </InsightCard>
                  
                  <InsightCard>
                    <InsightIcon>
                      <InterestIcon />
                    </InsightIcon>
                    <InsightContent>
                      <InsightTitle>Music Preferences</InsightTitle>
                      <InsightList>
                        <InsightItem>
                          <InsightName>Jazz</InsightName>
                          <InsightValue>30%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Rock</InsightName>
                          <InsightValue>25%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Classical</InsightName>
                          <InsightValue>20%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Electronic</InsightName>
                          <InsightValue>15%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Acoustic</InsightName>
                          <InsightValue>10%</InsightValue>
                        </InsightItem>
                      </InsightList>
                    </InsightContent>
                  </InsightCard>
                  
                  <InsightCard>
                    <InsightIcon>
                      <TimeIcon />
                    </InsightIcon>
                    <InsightContent>
                      <InsightTitle>Popular Times</InsightTitle>
                      <InsightList>
                        <InsightItem>
                          <InsightName>Friday 8PM</InsightName>
                          <InsightValue>35%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Saturday 9PM</InsightName>
                          <InsightValue>30%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Thursday 7PM</InsightName>
                          <InsightValue>15%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Saturday 6PM</InsightName>
                          <InsightValue>12%</InsightValue>
                        </InsightItem>
                        <InsightItem>
                          <InsightName>Sunday 5PM</InsightName>
                          <InsightValue>8%</InsightValue>
                        </InsightItem>
                      </InsightList>
                    </InsightContent>
                  </InsightCard>
                </InsightsGrid>
              </AnalyticsSection>
            </MainContent>
          </DashboardLayout>
        </Container>
      </ContentSection>
    </PageWrapper>
  )
}

// Mock Chart Components
const RevenueChart = () => (
  <ChartPlaceholder>
    <svg width="100%" height="100%" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,250 C50,200 100,220 150,180 C200,140 250,160 300,120 C350,80 400,100 450,60 C500,20 550,40 600,10 C650,30 700,20 750,40 L750,300 L0,300 Z" fill="#4CAF5020" stroke="#4CAF50" strokeWidth="2" />
      <path d="M0,280 C50,260 100,270 150,250 C200,230 250,240 300,220 C350,200 400,210 450,190 C500,170 550,180 600,160 C650,140 700,150 750,130" fill="none" stroke="#2196F3" strokeWidth="2" />
      <g>
        <circle cx="0" cy="280" r="4" fill="#2196F3" />
        <circle cx="150" cy="250" r="4" fill="#2196F3" />
        <circle cx="300" cy="220" r="4" fill="#2196F3" />
        <circle cx="450" cy="190" r="4" fill="#2196F3" />
        <circle cx="600" cy="160" r="4" fill="#2196F3" />
        <circle cx="750" cy="130" r="4" fill="#2196F3" />
      </g>
    </svg>
  </ChartPlaceholder>
)

const DemographicsChart = () => (
  <ChartPlaceholder>
    <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="100" fill="none" stroke="#ddd" strokeWidth="30" />
      <circle cx="150" cy="150" r="100" fill="none" stroke="#4CAF50" strokeWidth="30" strokeDasharray="188.5 377" strokeDashoffset="0" />
      <circle cx="150" cy="150" r="100" fill="none" stroke="#2196F3" strokeWidth="30" strokeDasharray="94.25 377" strokeDashoffset="-188.5" />
      <circle cx="150" cy="150" r="100" fill="none" stroke="#FF9800" strokeWidth="30" strokeDasharray="47.125 377" strokeDashoffset="-282.75" />
      <circle cx="150" cy="150" r="100" fill="none" stroke="#E91E63" strokeWidth="30" strokeDasharray="47.125 377" strokeDashoffset="-329.875" />
    </svg>
  </ChartPlaceholder>
)

const EventTypesChart = () => (
  <ChartPlaceholder>
    <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="40" height="200" fill="#4CAF50" />
      <rect x="100" y="80" width="40" height="170" fill="#2196F3" />
      <rect x="150" y="120" width="40" height="130" fill="#FF9800" />
      <rect x="200" y="150" width="40" height="100" fill="#E91E63" />
      <rect x="250" y="180" width="40" height="70" fill="#9C27B0" />
    </svg>
  </ChartPlaceholder>
)

const ChannelChart = () => (
  <ChartPlaceholder>
    <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path d="M150,150 L150,20 A130,130 0 0,1 259,95 Z" fill="#4CAF50" />
      <path d="M150,150 L259,95 A130,130 0 0,1 259,205 Z" fill="#2196F3" />
      <path d="M150,150 L259,205 A130,130 0 0,1 150,280 Z" fill="#FF9800" />
      <path d="M150,150 L150,280 A130,130 0 0,1 41,205 Z" fill="#E91E63" />
      <path d="M150,150 L41,205 A130,130 0 0,1 41,95 Z" fill="#9C27B0" />
      <path d="M150,150 L41,95 A130,130 0 0,1 150,20 Z" fill="#00BCD4" />
    </svg>
  </ChartPlaceholder>
)

const RetentionChart = () => (
  <ChartPlaceholder>
    <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,250 C50,180 100,150 150,150 C200,150 250,100 250,50" fill="none" stroke="#4CAF50" strokeWidth="3" />
      <g>
        <circle cx="50" cy="250" r="5" fill="#4CAF50" />
        <circle cx="100" cy="200" r="5" fill="#4CAF50" />
        <circle cx="150" cy="150" r="5" fill="#4CAF50" />
        <circle cx="200" cy="100" r="5" fill="#4CAF50" />
        <circle cx="250" cy="50" r="5" fill="#4CAF50" />
      </g>
    </svg>
  </ChartPlaceholder>
)

// Icons
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.66667 6.66666L8 10L11.3333 6.66666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TicketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 15V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4"/>
  </svg>
)

const RevenueIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EventIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArtistIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TrendIcon = ({ positive }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    {positive ? (
      <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    ) : (
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
)

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AgeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 11C12.7091 11 14.5 9.20914 14.5 7C14.5 4.79086 12.7091 3 10.5 3C8.29086 3 6.5 4.79086 6.5 7C6.5 9.20914 8.29086 11 10.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3.13C15.8604 3.35031 16.623 3.85071 17.1676 4.55232C17.7122 5.25392 18.0078 6.11683 18.0078 7.005C18.0078 7.89318 17.7122 8.75608 17.1676 9.45769C16.623 10.1593 15.8604 10.6597 15 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const InterestIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TimeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Styled Components
const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

// Hero Section
const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space.lg} 0;
  color: white;
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
`

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
`

const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
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

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const NavItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ active, theme }) => active ? theme.colors.lightGray : 'transparent'};
  
  &:last-child {
    border-bottom: none;
  }
`

const NavLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.darkText};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

// Main Content
const MainContent = styled.div``

// Analytics Header
const AnalyticsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
  }
`

const DateRangeSelector = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

const DateRangeButton = styled.button`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background-color: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.trustworthyNavy : theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.mediumGray};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1;
    padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  }
`

const DownloadButton = styled(Button)`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background-color: white;
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`

// Overview Cards
const OverviewCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const OverviewCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  align-items: center;
`

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ color }) => `${color}20`};
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.lg};
`

const CardContent = styled.div`
  flex: 1;
`

const CardValue = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const CardLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const CardTrend = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ positive, theme }) => positive ? theme.colors.success : theme.colors.error};
`

const TrendValue = styled.span`
  margin-left: ${({ theme }) => theme.space.xs};
`

// Analytics Grid
const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const ChartCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  grid-column: ${({ wide }) => wide ? 'span 2' : 'span 1'};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: span 1;
  }
`

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ChartTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const ChartActions = styled.div`
  display: flex;
  align-items: center;
`

const ChartLegend = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
`

const LegendColor = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: ${({ theme }) => theme.space.xs};
`

const LegendLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ChartContainer = styled.div`
  height: 300px;
  width: 100%;
`

const ChartPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray}20;
  border-radius: ${({ theme }) => theme.radii.md};
`

// Analytics Section
const AnalyticsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

// Events Table
const EventsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const EventsTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const EventsTableBody = styled.tbody``

const EventsTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`

const EventsTableHeader = styled.th`
  padding: ${({ theme }) => theme.space.md};
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const EventsTableCell = styled.td`
  padding: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const EventName = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const CapacityBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.full};
  position: relative;
`

const CapacityFill = styled.div`
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  background-color: ${({ theme, percent }) => {
    if (percent >= 90) return theme.colors.success;
    if (percent >= 70) return theme.colors.primary;
    if (percent >= 50) return theme.colors.warning;
    return theme.colors.error;
  }};
  border-radius: ${({ theme }) => theme.radii.full};
`

const CapacityText = styled.span`
  position: absolute;
  right: -40px;
  top: -4px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

// Artists Grid
const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const ArtistCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const ArtistImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

const ArtistInfo = styled.div`
  padding: ${({ theme }) => theme.space.md};
`

const ArtistName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  text-align: center;
`

const ArtistStats = styled.div`
  display: flex;
  justify-content: space-between;
`

const ArtistStat = styled.div`
  text-align: center;
`

const StatValue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightText};
`

// Insights Grid
const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const InsightCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
`

const InsightIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.md};
`

const InsightContent = styled.div`
  flex: 1;
`

const InsightTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const InsightList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`

const InsightItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InsightName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkText};
`

const InsightValue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
`

export default VenueAnalytics
