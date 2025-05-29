import React, { useState } from 'react'
import styled from 'styled-components'
// Replacing react-icons with Unicode emoji icons
// import { AiOutlineCalendar, AiOutlineDownload, AiOutlineFilter, AiOutlineInfoCircle, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import Button from '../ui/Button'

const AdminFinancials = () => {
  const [dateRange, setDateRange] = useState('last6Months')
  const [showDetails, setShowDetails] = useState(false)
  
  // Mock data for revenue chart
  const revenueData = {
    last30Days: [
      { name: 'May 1', artist: 1200, venue: 500, platform: 425 },
      { name: 'May 8', artist: 1500, venue: 650, platform: 537 },
      { name: 'May 15', artist: 1350, venue: 580, platform: 482 },
      { name: 'May 22', artist: 1800, venue: 780, platform: 645 },
      { name: 'May 29', artist: 2100, venue: 900, platform: 750 },
    ],
    last3Months: [
      { name: 'Mar', artist: 8500, venue: 3600, platform: 3025 },
      { name: 'Apr', artist: 9200, venue: 3900, platform: 3275 },
      { name: 'May', artist: 10500, venue: 4500, platform: 3750 },
    ],
    last6Months: [
      { name: 'Dec', artist: 7800, venue: 3300, platform: 2775 },
      { name: 'Jan', artist: 8200, venue: 3500, platform: 2925 },
      { name: 'Feb', artist: 7900, venue: 3400, platform: 2825 },
      { name: 'Mar', artist: 8500, venue: 3600, platform: 3025 },
      { name: 'Apr', artist: 9200, venue: 3900, platform: 3275 },
      { name: 'May', artist: 10500, venue: 4500, platform: 3750 },
    ],
    lastYear: [
      { name: 'Jun', artist: 6500, venue: 2800, platform: 2325 },
      { name: 'Jul', artist: 7000, venue: 3000, platform: 2500 },
      { name: 'Aug', artist: 7200, venue: 3100, platform: 2575 },
      { name: 'Sep', artist: 7500, venue: 3200, platform: 2675 },
      { name: 'Oct', artist: 7300, venue: 3100, platform: 2600 },
      { name: 'Nov', artist: 7600, venue: 3250, platform: 2712 },
      { name: 'Dec', artist: 7800, venue: 3300, platform: 2775 },
      { name: 'Jan', artist: 8200, venue: 3500, platform: 2925 },
      { name: 'Feb', artist: 7900, venue: 3400, platform: 2825 },
      { name: 'Mar', artist: 8500, venue: 3600, platform: 3025 },
      { name: 'Apr', artist: 9200, venue: 3900, platform: 3275 },
      { name: 'May', artist: 10500, venue: 4500, platform: 3750 },
    ],
  }
  
  // Mock data for payment methods
  const paymentMethodsData = [
    { name: 'Credit Card', value: 65 },
    { name: 'PayPal', value: 20 },
    { name: 'Apple Pay', value: 10 },
    { name: 'Google Pay', value: 5 },
  ]
  
  const COLORS = ['#FFD700', '#FF6B6B', '#4CAF50', '#2196F3']
  
  // Mock data for top earners
  const topArtists = [
    { id: 1, name: 'Emily Chen', earnings: 12450, growth: 15.2 },
    { id: 2, name: 'Marcus Rivera', earnings: 8750, growth: 12.8 },
    { id: 3, name: 'Sarah Johnson', earnings: 5200, growth: 9.5 },
    { id: 4, name: 'Aisha Patel', earnings: 4800, growth: 7.2 },
    { id: 5, name: 'James Wilson', earnings: 3900, growth: -2.1 },
  ]
  
  const topVenues = [
    { id: 1, name: 'The Blue Note', earnings: 18750, growth: 18.5 },
    { id: 2, name: 'Whiskey A Go Go', earnings: 15200, growth: 14.2 },
    { id: 3, name: 'The Continental Club', earnings: 12800, growth: 10.8 },
    { id: 4, name: 'House of Blues', earnings: 9500, growth: 8.5 },
    { id: 5, name: 'The Fillmore', earnings: 7200, growth: 5.2 },
  ]
  
  // Mock data for recent transactions
  const recentTransactions = [
    { id: 1, date: '2023-05-30', type: 'Donation', amount: 250, from: 'John Smith', to: 'Marcus Rivera', status: 'completed' },
    { id: 2, date: '2023-05-29', type: 'Payout', amount: 1200, from: 'TrueFans', to: 'Emily Chen', status: 'completed' },
    { id: 3, date: '2023-05-28', type: 'Donation', amount: 100, from: 'Jane Doe', to: 'Sarah Johnson', status: 'completed' },
    { id: 4, date: '2023-05-27', type: 'Donation', amount: 75, from: 'Robert Brown', to: 'The Blue Note', status: 'completed' },
    { id: 5, date: '2023-05-26', type: 'Payout', amount: 850, from: 'TrueFans', to: 'Whiskey A Go Go', status: 'pending' },
    { id: 6, date: '2023-05-25', type: 'Donation', amount: 150, from: 'Lisa Chen', to: 'Aisha Patel', status: 'completed' },
    { id: 7, date: '2023-05-24', type: 'Donation', amount: 50, from: 'Michael Johnson', to: 'James Wilson', status: 'completed' },
    { id: 8, date: '2023-05-23', type: 'Payout', amount: 500, from: 'TrueFans', to: 'The Continental Club', status: 'completed' },
  ]
  
  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value)
  }
  
  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString()}`
  }
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  // Calculate totals
  const calculateTotals = () => {
    const data = revenueData[dateRange]
    let artistTotal = 0
    let venueTotal = 0
    let platformTotal = 0
    
    data.forEach(item => {
      artistTotal += item.artist
      venueTotal += item.venue
      platformTotal += item.platform
    })
    
    const grandTotal = artistTotal + venueTotal + platformTotal
    
    return {
      artistTotal,
      venueTotal,
      platformTotal,
      grandTotal
    }
  }
  
  const totals = calculateTotals()
  
  return (
    <FinancialsContainer>
      <FinancialsHeader>
        <FinancialsTitle>Financial Overview</FinancialsTitle>
        <HeaderActions>
          <DateRangeSelect value={dateRange} onChange={handleDateRangeChange}>
            <option value="last30Days">Last 30 Days</option>
            <option value="last3Months">Last 3 Months</option>
            <option value="last6Months">Last 6 Months</option>
            <option value="lastYear">Last Year</option>
          </DateRangeSelect>
          <Button 
            variant="outline" 
            size="md" 
            icon={<span>📥</span>}
          >
            Export Report
          </Button>
        </HeaderActions>
      </FinancialsHeader>
      
      <SummaryCards>
        <SummaryCard>
          <SummaryCardTitle>Total Revenue</SummaryCardTitle>
          <SummaryCardValue>{formatCurrency(totals.grandTotal)}</SummaryCardValue>
          <SummaryCardDetails>
            <SummaryCardDetailItem color="#FFD700">
              <SummaryCardDetailLabel>Artist Earnings:</SummaryCardDetailLabel>
              <SummaryCardDetailValue>{formatCurrency(totals.artistTotal)}</SummaryCardDetailValue>
            </SummaryCardDetailItem>
            <SummaryCardDetailItem color="#FF6B6B">
              <SummaryCardDetailLabel>Venue Earnings:</SummaryCardDetailLabel>
              <SummaryCardDetailValue>{formatCurrency(totals.venueTotal)}</SummaryCardDetailValue>
            </SummaryCardDetailItem>
            <SummaryCardDetailItem color="#1A2B4C">
              <SummaryCardDetailLabel>Platform Fee:</SummaryCardDetailLabel>
              <SummaryCardDetailValue>{formatCurrency(totals.platformTotal)}</SummaryCardDetailValue>
            </SummaryCardDetailItem>
          </SummaryCardDetails>
        </SummaryCard>
        
        <SummaryCard>
          <SummaryCardTitle>Revenue Split</SummaryCardTitle>
          <SummaryCardChart>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Artist', value: 80 },
                    { name: 'Platform', value: 20 },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  <Cell fill="#FFD700" />
                  <Cell fill="#1A2B4C" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </SummaryCardChart>
          <SummaryCardFooter>
            80% to creators, 20% platform fee
          </SummaryCardFooter>
        </SummaryCard>
        
        <SummaryCard>
          <SummaryCardTitle>Payment Methods</SummaryCardTitle>
          <SummaryCardChart>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={paymentMethodsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {paymentMethodsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </SummaryCardChart>
          <SummaryCardFooter>
            Distribution of payment methods
          </SummaryCardFooter>
        </SummaryCard>
      </SummaryCards>
      
      <ChartCard>
        <ChartHeader>
          <ChartTitle>Revenue Breakdown</ChartTitle>
          <ChartDescription>Monthly revenue by recipient type</ChartDescription>
        </ChartHeader>
        <ChartContainer>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={revenueData[dateRange]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="artist" name="Artist Earnings" stackId="a" fill="#FFD700" />
              <Bar dataKey="venue" name="Venue Earnings" stackId="a" fill="#FF6B6B" />
              <Bar dataKey="platform" name="Platform Fee" stackId="a" fill="#1A2B4C" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </ChartCard>
      
      <SectionTitle>Top Earners</SectionTitle>
      
      <TopEarnersGrid>
        <TopEarnersCard>
          <TopEarnersHeader>
            <TopEarnersTitle>Top Artists</TopEarnersTitle>
            <TopEarnersFilter>
              <span>🔍</span>
            </TopEarnersFilter>
          </TopEarnersHeader>
          <TopEarnersList>
            {topArtists.map((artist, index) => (
              <TopEarnersItem key={artist.id}>
                <TopEarnersRank>{index + 1}</TopEarnersRank>
                <TopEarnersInfo>
                  <TopEarnersName>{artist.name}</TopEarnersName>
                  <TopEarnersEarnings>{formatCurrency(artist.earnings)}</TopEarnersEarnings>
                </TopEarnersInfo>
                <TopEarnersGrowth positive={artist.growth >= 0}>
                  {artist.growth >= 0 ? <span>⬆️</span> : <span>⬇️</span>}
                  {Math.abs(artist.growth)}%
                </TopEarnersGrowth>
              </TopEarnersItem>
            ))}
          </TopEarnersList>
        </TopEarnersCard>
        
        <TopEarnersCard>
          <TopEarnersHeader>
            <TopEarnersTitle>Top Venues</TopEarnersTitle>
            <TopEarnersFilter>
              <span>🔍</span>
            </TopEarnersFilter>
          </TopEarnersHeader>
          <TopEarnersList>
            {topVenues.map((venue, index) => (
              <TopEarnersItem key={venue.id}>
                <TopEarnersRank>{index + 1}</TopEarnersRank>
                <TopEarnersInfo>
                  <TopEarnersName>{venue.name}</TopEarnersName>
                  <TopEarnersEarnings>{formatCurrency(venue.earnings)}</TopEarnersEarnings>
                </TopEarnersInfo>
                <TopEarnersGrowth positive={venue.growth >= 0}>
                  {venue.growth >= 0 ? <span>⬆️</span> : <span>⬇️</span>}
                  {Math.abs(venue.growth)}%
                </TopEarnersGrowth>
              </TopEarnersItem>
            ))}
          </TopEarnersList>
        </TopEarnersCard>
      </TopEarnersGrid>
      
      <SectionTitle>Recent Transactions</SectionTitle>
      
      <TransactionsCard>
        <TransactionsHeader>
          <TransactionsTitle>Transaction History</TransactionsTitle>
          <TransactionsActions>
            <Button 
              variant="text" 
              size="sm" 
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide Details' : 'Show Details'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              icon={<span>🔍</span>}
            >
              Filter
            </Button>
          </TransactionsActions>
        </TransactionsHeader>
        
        <TransactionsTable>
          <TransactionsTableHead>
            <TransactionsTableRow>
              <TransactionsTableHeader>Date</TransactionsTableHeader>
              <TransactionsTableHeader>Type</TransactionsTableHeader>
              <TransactionsTableHeader>Amount</TransactionsTableHeader>
              {showDetails && (
                <>
                  <TransactionsTableHeader>From</TransactionsTableHeader>
                  <TransactionsTableHeader>To</TransactionsTableHeader>
                </>
              )}
              <TransactionsTableHeader>Status</TransactionsTableHeader>
              <TransactionsTableHeader>Actions</TransactionsTableHeader>
            </TransactionsTableRow>
          </TransactionsTableHead>
          <TransactionsTableBody>
            {recentTransactions.map(transaction => (
              <TransactionsTableRow key={transaction.id}>
                <TransactionsTableCell>{formatDate(transaction.date)}</TransactionsTableCell>
                <TransactionsTableCell>
                  <TransactionType type={transaction.type}>
                    {transaction.type}
                  </TransactionType>
                </TransactionsTableCell>
                <TransactionsTableCell>{formatCurrency(transaction.amount)}</TransactionsTableCell>
                {showDetails && (
                  <>
                    <TransactionsTableCell>{transaction.from}</TransactionsTableCell>
                    <TransactionsTableCell>{transaction.to}</TransactionsTableCell>
                  </>
                )}
                <TransactionsTableCell>
                  <TransactionStatus status={transaction.status}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </TransactionStatus>
                </TransactionsTableCell>
                <TransactionsTableCell>
                  <ActionButton>
                    <span>ℹ️</span>
                  </ActionButton>
                </TransactionsTableCell>
              </TransactionsTableRow>
            ))}
          </TransactionsTableBody>
        </TransactionsTable>
      </TransactionsCard>
    </FinancialsContainer>
  )
}

const FinancialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const FinancialsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.md};
  }
`

const FinancialsTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const HeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    flex-direction: column;
  }
`

const DateRangeSelect = styled.select`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.md}`};
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

const SummaryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const SummaryCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
`

const SummaryCardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0 0 ${({ theme }) => theme.space.md} 0;
`

const SummaryCardValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SummaryCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`

const SummaryCardDetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${({ theme }) => theme.space.sm};
  border-left: 3px solid ${({ color }) => color};
`

const SummaryCardDetailLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const SummaryCardDetailValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const SummaryCardChart = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SummaryCardFooter = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
  margin-top: ${({ theme }) => theme.space.md};
`

const ChartCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const ChartHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ChartTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0 0 ${({ theme }) => theme.space.xs} 0;
`

const ChartDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0;
`

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: ${({ theme }) => theme.space.lg} 0 ${({ theme }) => theme.space.md} 0;
`

const TopEarnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const TopEarnersCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const TopEarnersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const TopEarnersTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const TopEarnersFilter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.primary};
  }
`

const TopEarnersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const TopEarnersItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.space.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const TopEarnersRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-right: ${({ theme }) => theme.space.md};
`

const TopEarnersInfo = styled.div`
  flex: 1;
`

const TopEarnersName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TopEarnersEarnings = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const TopEarnersGrowth = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ positive, theme }) => positive ? theme.colors.success : theme.colors.error};
`

const TransactionsCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const TransactionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.md};
  }
`

const TransactionsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const TransactionsActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
`

const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TransactionsTableHead = styled.thead`
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
`

const TransactionsTableBody = styled.tbody``

const TransactionsTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}05`};
  }
`

const TransactionsTableHeader = styled.th`
  padding: ${({ theme }) => theme.space.md};
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const TransactionsTableCell = styled.td`
  padding: ${({ theme }) => theme.space.md};
  vertical-align: middle;
`

const TransactionType = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme, type }) => 
    type === 'Donation' ? `${theme.colors.primary}15` :
    type === 'Payout' ? `${theme.colors.info}15` :
    `${theme.colors.lightGray}`
  };
  color: ${({ theme, type }) => 
    type === 'Donation' ? theme.colors.primary :
    type === 'Payout' ? theme.colors.info :
    theme.colors.darkText
  };
`

const TransactionStatus = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme, status }) => 
    status === 'completed' ? `${theme.colors.success}15` :
    status === 'pending' ? `${theme.colors.warning}15` :
    `${theme.colors.error}15`
  };
  color: ${({ theme, status }) => 
    status === 'completed' ? theme.colors.success :
    status === 'pending' ? theme.colors.warning :
    theme.colors.error
  };
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default AdminFinancials
