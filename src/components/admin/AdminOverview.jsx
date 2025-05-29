import React from 'react'
import styled from 'styled-components'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const AdminOverview = () => {
  // Mock data for dashboard
  const stats = [
    { id: 1, title: 'Total Artists', value: '1,245', icon: '👤', color: '#4CAF50' },
    { id: 2, title: 'Total Venues', value: '328', icon: '📍', color: '#2196F3' },
    { id: 3, title: 'Monthly Revenue', value: '$42,890', icon: '💰', color: '#FFD700' },
    { id: 4, title: 'Growth Rate', value: '+12.5%', icon: '📈', color: '#FF6B6B' },
  ]
  
  // Mock data for revenue chart
  const revenueData = [
    { name: 'Jan', artist: 28000, venue: 12000, platform: 10000 },
    { name: 'Feb', artist: 30000, venue: 13000, platform: 10750 },
    { name: 'Mar', artist: 32000, venue: 14000, platform: 11500 },
    { name: 'Apr', artist: 35000, venue: 15000, platform: 12500 },
    { name: 'May', artist: 38000, venue: 16000, platform: 13500 },
    { name: 'Jun', artist: 40000, venue: 17000, platform: 14250 },
  ]
  
  // Mock data for user growth chart
  const userGrowthData = [
    { name: 'Jan', artists: 950, venues: 250 },
    { name: 'Feb', artists: 1000, venues: 260 },
    { name: 'Mar', artists: 1050, venues: 270 },
    { name: 'Apr', artists: 1100, venues: 280 },
    { name: 'May', artists: 1175, venues: 300 },
    { name: 'Jun', artists: 1245, venues: 328 },
  ]
  
  // Mock data for revenue distribution
  const revenueDistributionData = [
    { name: 'Artist Earnings', value: 80 },
    { name: 'Platform Fee', value: 20 },
  ]
  
  const COLORS = ['#FFD700', '#1A2B4C']
  
  // Mock data for recent activities
  const recentActivities = [
    { id: 1, type: 'New Artist', name: 'Sarah Johnson', date: '2 hours ago', action: 'joined the platform' },
    { id: 2, type: 'New Venue', name: 'The Blue Note', date: '5 hours ago', action: 'was added' },
    { id: 3, type: 'Donation', name: '$250.00', date: '6 hours ago', action: 'was received by Marcus Rivera' },
    { id: 4, type: 'Payout', name: '$1,200.00', date: '1 day ago', action: 'was processed to Emily Chen' },
    { id: 5, type: 'New Artist', name: 'David Williams', date: '1 day ago', action: 'joined the platform' },
  ]
  
  // Mock data for alerts
  const alerts = [
    { id: 1, type: 'warning', message: 'Unusual activity detected on artist ID #1089', time: '30 minutes ago' },
    { id: 2, type: 'info', message: 'System maintenance scheduled for tonight at 2 AM EST', time: '2 hours ago' },
    { id: 3, type: 'success', message: 'Monthly financial reports are ready for review', time: '5 hours ago' },
  ]
  
  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>Admin Dashboard</DashboardTitle>
        <DashboardDate>
          📅 {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </DashboardDate>
      </DashboardHeader>
      
      <StatsGrid>
        {stats.map(stat => (
          <StatCard key={stat.id} color={stat.color}>
            <StatIcon>{stat.icon}</StatIcon>
            <StatContent>
              <StatValue>{stat.value}</StatValue>
              <StatTitle>{stat.title}</StatTitle>
            </StatContent>
          </StatCard>
        ))}
      </StatsGrid>
      
      <DashboardRow>
        <ChartCard>
          <ChartTitle>Revenue Overview</ChartTitle>
          <ChartDescription>Monthly revenue breakdown by source</ChartDescription>
          <ChartContainer>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
        
        <ChartCard>
          <ChartTitle>User Growth</ChartTitle>
          <ChartDescription>Monthly artist and venue registrations</ChartDescription>
          <ChartContainer>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="artists" name="Artists" stroke="#4CAF50" strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="venues" name="Venues" stroke="#2196F3" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartCard>
      </DashboardRow>
      
      <DashboardRow>
        <ChartCard>
          <ChartTitle>Revenue Distribution</ChartTitle>
          <ChartDescription>Platform vs. Artist earnings</ChartDescription>
          <ChartContainer>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {revenueDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartCard>
        
        <SideSection>
          <ActivityCard>
            <ActivityHeader>
              <ActivityTitle>Recent Activity</ActivityTitle>
              <ViewAllLink>View All</ViewAllLink>
            </ActivityHeader>
            <ActivityList>
              {recentActivities.map(activity => (
                <ActivityItem key={activity.id}>
                  <ActivityContent>
                    <ActivityName>{activity.name}</ActivityName>
                    <ActivityAction>{activity.action}</ActivityAction>
                  </ActivityContent>
                  <ActivityTime>{activity.date}</ActivityTime>
                </ActivityItem>
              ))}
            </ActivityList>
          </ActivityCard>
          
          <AlertsCard>
            <AlertsHeader>
              <AlertsTitle>System Alerts</AlertsTitle>
              <AlertsCount>{alerts.length}</AlertsCount>
            </AlertsHeader>
            <AlertsList>
              {alerts.map(alert => (
                <AlertItem key={alert.id} type={alert.type}>
                  <AlertIcon>⚠️</AlertIcon>
                  <AlertContent>
                    <AlertMessage>{alert.message}</AlertMessage>
                    <AlertTime>{alert.time}</AlertTime>
                  </AlertContent>
                </AlertItem>
              ))}
            </AlertsList>
          </AlertsCard>
        </SideSection>
      </DashboardRow>
    </DashboardContainer>
  )
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const DashboardTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const DashboardDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const StatCard = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-left: 4px solid ${({ color }) => color};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => `${theme.colors.primary}15`};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-right: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
`

const StatContent = styled.div`
  flex: 1;
`

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const DashboardRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const ChartCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const ChartTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0 0 ${({ theme }) => theme.space.xs} 0;
`

const ChartDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0 0 ${({ theme }) => theme.space.md} 0;
`

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
`

const SideSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const ActivityCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  flex: 1;
`

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ActivityTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const ViewAllLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const ActivityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.space.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const ActivityContent = styled.div``

const ActivityName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ActivityAction = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ActivityTime = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const AlertsCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  flex: 1;
`

const AlertsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const AlertsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const AlertsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const AlertsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const AlertItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme, type }) => 
    type === 'warning' ? `${theme.colors.warning}15` :
    type === 'success' ? `${theme.colors.success}15` :
    `${theme.colors.info}15`
  };
`

const AlertIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.colors.primary};
`

const AlertContent = styled.div`
  flex: 1;
`

const AlertMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const AlertTime = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightText};
`

export default AdminOverview
