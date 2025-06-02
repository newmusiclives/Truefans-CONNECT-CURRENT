import React, { useState } from 'react'
import styled from 'styled-components'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import Button from '../ui/Button'

const AdminReports = () => {
  const [reportType, setReportType] = useState('userGrowth')
  const [dateRange, setDateRange] = useState('last6Months')
  const [exportFormat, setExportFormat] = useState('pdf')
  
  // Mock data for user growth report
  const userGrowthData = {
    last30Days: [
      { date: 'May 1', artists: 1200, venues: 320 },
      { date: 'May 8', artists: 1215, venues: 325 },
      { date: 'May 15', artists: 1225, venues: 330 },
      { date: 'May 22', artists: 1235, venues: 335 },
      { date: 'May 29', artists: 1245, venues: 340 },
    ],
    last3Months: [
      { date: 'Mar', artists: 1150, venues: 300 },
      { date: 'Apr', artists: 1200, venues: 320 },
      { date: 'May', artists: 1245, venues: 340 },
    ],
    last6Months: [
      { date: 'Dec', artists: 1050, venues: 260 },
      { date: 'Jan', artists: 1080, venues: 270 },
      { date: 'Feb', artists: 1120, venues: 290 },
      { date: 'Mar', artists: 1150, venues: 300 },
      { date: 'Apr', artists: 1200, venues: 320 },
      { date: 'May', artists: 1245, venues: 340 },
    ],
    lastYear: [
      { date: 'Jun', artists: 900, venues: 220 },
      { date: 'Jul', artists: 920, venues: 225 },
      { date: 'Aug', artists: 950, venues: 230 },
      { date: 'Sep', artists: 980, venues: 240 },
      { date: 'Oct', artists: 1000, venues: 245 },
      { date: 'Nov', artists: 1020, venues: 250 },
      { date: 'Dec', artists: 1050, venues: 260 },
      { date: 'Jan', artists: 1080, venues: 270 },
      { date: 'Feb', artists: 1120, venues: 290 },
      { date: 'Mar', artists: 1150, venues: 300 },
      { date: 'Apr', artists: 1200, venues: 320 },
      { date: 'May', artists: 1245, venues: 340 },
    ],
  }
  
  // Mock data for revenue report
  const revenueData = {
    last30Days: [
      { date: 'May 1', amount: 4200 },
      { date: 'May 8', amount: 4500 },
      { date: 'May 15', amount: 4300 },
      { date: 'May 22', amount: 4800 },
      { date: 'May 29', amount: 5100 },
    ],
    last3Months: [
      { date: 'Mar', amount: 18000 },
      { date: 'Apr', amount: 19500 },
      { date: 'May', amount: 21000 },
    ],
    last6Months: [
      { date: 'Dec', amount: 15000 },
      { date: 'Jan', amount: 16000 },
      { date: 'Feb', amount: 16500 },
      { date: 'Mar', amount: 18000 },
      { date: 'Apr', amount: 19500 },
      { date: 'May', amount: 21000 },
    ],
    lastYear: [
      { date: 'Jun', amount: 12000 },
      { date: 'Jul', amount: 12500 },
      { date: 'Aug', amount: 13000 },
      { date: 'Sep', amount: 13500 },
      { date: 'Oct', amount: 14000 },
      { date: 'Nov', amount: 14500 },
      { date: 'Dec', amount: 15000 },
      { date: 'Jan', amount: 16000 },
      { date: 'Feb', amount: 16500 },
      { date: 'Mar', amount: 18000 },
      { date: 'Apr', amount: 19500 },
      { date: 'May', amount: 21000 },
    ],
  }
  
  // Mock data for platform usage report
  const platformUsageData = {
    last30Days: [
      { name: 'Artist Profile Views', value: 12500 },
      { name: 'Venue Profile Views', value: 8500 },
      { name: 'Donation Transactions', value: 3200 },
      { name: 'New Signups', value: 850 },
    ],
    last3Months: [
      { name: 'Artist Profile Views', value: 35000 },
      { name: 'Venue Profile Views', value: 25000 },
      { name: 'Donation Transactions', value: 9500 },
      { name: 'New Signups', value: 2400 },
    ],
    last6Months: [
      { name: 'Artist Profile Views', value: 68000 },
      { name: 'Venue Profile Views', value: 48000 },
      { name: 'Donation Transactions', value: 18500 },
      { name: 'New Signups', value: 4800 },
    ],
    lastYear: [
      { name: 'Artist Profile Views', value: 125000 },
      { name: 'Venue Profile Views', value: 95000 },
      { name: 'Donation Transactions', value: 35000 },
      { name: 'New Signups', value: 9200 },
    ],
  }
  
  // Mock data for geographic distribution
  const geographicData = {
    last30Days: [
      { name: 'North America', value: 65 },
      { name: 'Europe', value: 20 },
      { name: 'Asia', value: 10 },
      { name: 'Other', value: 5 },
    ],
    last3Months: [
      { name: 'North America', value: 62 },
      { name: 'Europe', value: 22 },
      { name: 'Asia', value: 11 },
      { name: 'Other', value: 5 },
    ],
    last6Months: [
      { name: 'North America', value: 60 },
      { name: 'Europe', value: 25 },
      { name: 'Asia', value: 10 },
      { name: 'Other', value: 5 },
    ],
    lastYear: [
      { name: 'North America', value: 58 },
      { name: 'Europe', value: 25 },
      { name: 'Asia', value: 12 },
      { name: 'Other', value: 5 },
    ],
  }
  
  const COLORS = ['#FFD700', '#FF6B6B', '#4CAF50', '#2196F3']
  
  const handleReportTypeChange = (e) => {
    setReportType(e.target.value)
  }
  
  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value)
  }
  
  const handleExportFormatChange = (e) => {
    setExportFormat(e.target.value)
  }
  
  const handleExportReport = () => {
    alert(`Exporting ${reportType} report as ${exportFormat.toUpperCase()}...`)
    // In a real app, this would trigger a download of the report
  }
  
  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString()}`
  }
  
  const renderReportContent = () => {
    switch (reportType) {
      case 'userGrowth':
        return (
          <ReportContent>
            <ReportDescription>
              This report shows the growth of artists and venues on the platform over time.
            </ReportDescription>
            
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={userGrowthData[dateRange]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="artists" name="Artists" stroke="#FFD700" strokeWidth={2} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="venues" name="Venues" stroke="#FF6B6B" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <ReportSummary>
              <SummaryTitle>Key Insights:</SummaryTitle>
              <SummaryList>
                <SummaryItem>Artist growth rate: <strong>+3.8%</strong> over the selected period</SummaryItem>
                <SummaryItem>Venue growth rate: <strong>+2.5%</strong> over the selected period</SummaryItem>
                <SummaryItem>Current artist to venue ratio: <strong>3.66:1</strong></SummaryItem>
                <SummaryItem>Projected to reach <strong>1,500</strong> artists by end of year</SummaryItem>
              </SummaryList>
            </ReportSummary>
          </ReportContent>
        )
        
      case 'revenue':
        return (
          <ReportContent>
            <ReportDescription>
              This report shows the platform's revenue over time, including all transaction fees and subscriptions.
            </ReportDescription>
            
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={revenueData[dateRange]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                  <Bar dataKey="amount" name="Revenue" fill="#4CAF50" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <ReportSummary>
              <SummaryTitle>Key Insights:</SummaryTitle>
              <SummaryList>
                <SummaryItem>Total revenue for period: <strong>{formatCurrency(revenueData[dateRange].reduce((sum, item) => sum + item.amount, 0))}</strong></SummaryItem>
                <SummaryItem>Average monthly revenue: <strong>{formatCurrency(revenueData[dateRange].reduce((sum, item) => sum + item.amount, 0) / revenueData[dateRange].length)}</strong></SummaryItem>
                <SummaryItem>Revenue growth: <strong>+12.3%</strong> compared to previous period</SummaryItem>
                <SummaryItem>Projected annual revenue: <strong>{formatCurrency(21000 * 12)}</strong> based on current trends</SummaryItem>
              </SummaryList>
            </ReportSummary>
          </ReportContent>
        )
        
      case 'platformUsage':
        return (
          <ReportContent>
            <ReportDescription>
              This report shows how users are interacting with the platform, including profile views and transactions.
            </ReportDescription>
            
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={platformUsageData[dateRange]} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Count" fill="#2196F3" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <ReportSummary>
              <SummaryTitle>Key Insights:</SummaryTitle>
              <SummaryList>
                <SummaryItem>Most viewed: <strong>Artist profiles</strong> with {platformUsageData[dateRange][0].value.toLocaleString()} views</SummaryItem>
                <SummaryItem>Average donation transaction value: <strong>{formatCurrency(85)}</strong></SummaryItem>
                <SummaryItem>User engagement up <strong>15%</strong> from previous period</SummaryItem>
                <SummaryItem>Mobile usage accounts for <strong>68%</strong> of all platform interactions</SummaryItem>
              </SummaryList>
            </ReportSummary>
          </ReportContent>
        )
        
      case 'geographic':
        return (
          <ReportContent>
            <ReportDescription>
              This report shows the geographic distribution of platform users across different regions.
            </ReportDescription>
            
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={geographicData[dateRange]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {geographicData[dateRange].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <ReportSummary>
              <SummaryTitle>Key Insights:</SummaryTitle>
              <SummaryList>
                <SummaryItem>Largest user base: <strong>North America</strong> with {geographicData[dateRange][0].value}% of users</SummaryItem>
                <SummaryItem>Fastest growing region: <strong>Asia</strong> with 28% growth year-over-year</SummaryItem>
                <SummaryItem>Top 3 cities: <strong>New York, London, Los Angeles</strong></SummaryItem>
                <SummaryItem>International expansion opportunity: <strong>South America</strong> showing increased interest</SummaryItem>
              </SummaryList>
            </ReportSummary>
          </ReportContent>
        )
        
      default:
        return null
    }
  }
  
  return (
    <ReportsContainer>
      <ReportsHeader>
        <ReportsTitle>Analytics Reports</ReportsTitle>
        <ReportsDescription>
          Generate detailed reports about platform performance, user growth, and revenue.
        </ReportsDescription>
      </ReportsHeader>
      
      <ReportsControls>
        <ControlGroup>
          <ControlLabel>Report Type</ControlLabel>
          <ControlSelect value={reportType} onChange={handleReportTypeChange}>
            <option value="userGrowth">User Growth</option>
            <option value="revenue">Revenue</option>
            <option value="platformUsage">Platform Usage</option>
            <option value="geographic">Geographic Distribution</option>
          </ControlSelect>
        </ControlGroup>
        
        <ControlGroup>
          <ControlLabel>Date Range</ControlLabel>
          <ControlSelect value={dateRange} onChange={handleDateRangeChange}>
            <option value="last30Days">Last 30 Days</option>
            <option value="last3Months">Last 3 Months</option>
            <option value="last6Months">Last 6 Months</option>
            <option value="lastYear">Last Year</option>
          </ControlSelect>
        </ControlGroup>
        
        <ControlGroup>
          <ControlLabel>Export Format</ControlLabel>
          <ControlSelect value={exportFormat} onChange={handleExportFormatChange}>
            <option value="pdf">PDF</option>
            <option value="csv">CSV</option>
            <option value="excel">Excel</option>
          </ControlSelect>
        </ControlGroup>
        
        <ExportButton variant="primary" onClick={handleExportReport}>
          Export Report
        </ExportButton>
      </ReportsControls>
      
      <ReportCard>
        <ReportHeader>
          <ReportTitle>
            {reportType === 'userGrowth' && 'User Growth Report'}
            {reportType === 'revenue' && 'Revenue Report'}
            {reportType === 'platformUsage' && 'Platform Usage Report'}
            {reportType === 'geographic' && 'Geographic Distribution Report'}
          </ReportTitle>
          <ReportDate>
            {dateRange === 'last30Days' && 'Last 30 Days'}
            {dateRange === 'last3Months' && 'Last 3 Months'}
            {dateRange === 'last6Months' && 'Last 6 Months'}
            {dateRange === 'lastYear' && 'Last Year'}
          </ReportDate>
        </ReportHeader>
        
        {renderReportContent()}
      </ReportCard>
      
      <ScheduledReportsSection>
        <SectionTitle>Scheduled Reports</SectionTitle>
        <SectionDescription>
          Set up automated reports to be delivered to your email on a regular schedule.
        </SectionDescription>
        
        <ScheduledReportsTable>
          <thead>
            <tr>
              <TableHeader>Report Name</TableHeader>
              <TableHeader>Frequency</TableHeader>
              <TableHeader>Recipients</TableHeader>
              <TableHeader>Format</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>Monthly Revenue Summary</TableCell>
              <TableCell>Monthly (1st)</TableCell>
              <TableCell>admin@truefans.com</TableCell>
              <TableCell>PDF</TableCell>
              <TableCell>
                <ActionButtons>
                  <ActionButton>✏️</ActionButton>
                  <ActionButton>🗑️</ActionButton>
                </ActionButtons>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weekly User Growth</TableCell>
              <TableCell>Weekly (Monday)</TableCell>
              <TableCell>admin@truefans.com, marketing@truefans.com</TableCell>
              <TableCell>Excel</TableCell>
              <TableCell>
                <ActionButtons>
                  <ActionButton>✏️</ActionButton>
                  <ActionButton>🗑️</ActionButton>
                </ActionButtons>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Quarterly Performance</TableCell>
              <TableCell>Quarterly</TableCell>
              <TableCell>admin@truefans.com, finance@truefans.com</TableCell>
              <TableCell>PDF</TableCell>
              <TableCell>
                <ActionButtons>
                  <ActionButton>✏️</ActionButton>
                  <ActionButton>🗑️</ActionButton>
                </ActionButtons>
              </TableCell>
            </TableRow>
          </tbody>
        </ScheduledReportsTable>
        
        <AddScheduleButton variant="outline">
          + Schedule New Report
        </AddScheduleButton>
      </ScheduledReportsSection>
    </ReportsContainer>
  )
}

const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const ReportsHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ReportsTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ReportsDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 800px;
`

const ReportsControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.lg};
  align-items: flex-end;
  background-color: white;
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-wrap: wrap;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  flex: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

const ControlLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const ControlSelect = styled.select`
  padding: ${({ theme }) => theme.space.md};
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

const ExportButton = styled(Button)`
  align-self: flex-end;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

const ReportCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`

const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
`

const ReportTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const ReportDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const ReportContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const ReportDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ReportSummary = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
`

const SummaryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SummaryList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const SummaryItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  
  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`

const ScheduledReportsSection = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ScheduledReportsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const TableHeader = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.space.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.mediumGray};
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`

const TableCell = styled.td`
  padding: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const AddScheduleButton = styled(Button)`
  width: 100%;
`

export default AdminReports
