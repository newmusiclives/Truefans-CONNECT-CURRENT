import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'

const AdminSupport = () => {
  const [tickets, setTickets] = useState([
    {
      id: 'TKT-1001',
      user: 'John Smith',
      userType: 'Artist',
      subject: 'Payment not received',
      status: 'Open',
      priority: 'High',
      created: '2023-05-10T14:30:00',
      lastUpdated: '2023-05-10T16:45:00',
      messages: [
        {
          sender: 'John Smith',
          timestamp: '2023-05-10T14:30:00',
          content: 'I performed at Blue Note last weekend and haven\'t received my payment yet. The venue owner said it was processed through the platform but I don\'t see it in my account.',
        },
        {
          sender: 'Support Agent',
          timestamp: '2023-05-10T16:45:00',
          content: 'Thank you for reporting this issue. I\'ve checked your account and can see that the payment was initiated but got stuck in processing. I\'ve escalated this to our payments team who will resolve it within 24 hours. I\'ll update you once it\'s fixed.',
        }
      ]
    },
    {
      id: 'TKT-1002',
      user: 'Sarah Johnson',
      userType: 'Venue',
      subject: 'Need to reschedule an event',
      status: 'Open',
      priority: 'Medium',
      created: '2023-05-09T10:15:00',
      lastUpdated: '2023-05-09T11:20:00',
      messages: [
        {
          sender: 'Sarah Johnson',
          timestamp: '2023-05-09T10:15:00',
          content: 'We need to reschedule an event due to unforeseen circumstances. The event is scheduled for May 15th. How can we notify all the artists and attendees?',
        },
        {
          sender: 'Support Agent',
          timestamp: '2023-05-09T11:20:00',
          content: 'I understand the situation. You can reschedule the event from your venue dashboard under "Events" > "Upcoming Events". Select the event and click "Reschedule". This will automatically notify all artists booked for the event. For attendees, you can use the "Message Attendees" feature to send a mass notification.',
        }
      ]
    },
    {
      id: 'TKT-1003',
      user: 'Michael Brown',
      userType: 'Artist',
      subject: 'Profile not updating',
      status: 'Closed',
      priority: 'Low',
      created: '2023-05-08T09:45:00',
      lastUpdated: '2023-05-08T14:30:00',
      messages: [
        {
          sender: 'Michael Brown',
          timestamp: '2023-05-08T09:45:00',
          content: 'I\'ve been trying to update my profile picture and bio for the past two days but the changes aren\'t saving.',
        },
        {
          sender: 'Support Agent',
          timestamp: '2023-05-08T10:30:00',
          content: 'I\'m sorry you\'re experiencing this issue. Could you please tell me what browser and device you\'re using? Also, have you tried clearing your cache?',
        },
        {
          sender: 'Michael Brown',
          timestamp: '2023-05-08T11:15:00',
          content: 'I\'m using Chrome on a MacBook. I haven\'t tried clearing the cache yet. Let me try that.',
        },
        {
          sender: 'Michael Brown',
          timestamp: '2023-05-08T11:45:00',
          content: 'That worked! Thank you for the suggestion.',
        },
        {
          sender: 'Support Agent',
          timestamp: '2023-05-08T14:30:00',
          content: 'Great! I\'m glad that resolved the issue. If you encounter any other problems, don\'t hesitate to reach out.',
        }
      ]
    },
    {
      id: 'TKT-1004',
      user: 'Emily Davis',
      userType: 'Venue',
      subject: 'Question about commission rates',
      status: 'Open',
      priority: 'Medium',
      created: '2023-05-07T16:20:00',
      lastUpdated: '2023-05-07T17:30:00',
      messages: [
        {
          sender: 'Emily Davis',
          timestamp: '2023-05-07T16:20:00',
          content: 'I\'m considering upgrading to the premium plan but I\'m not clear on how the commission rates change. Could you provide more details?',
        },
        {
          sender: 'Support Agent',
          timestamp: '2023-05-07T17:30:00',
          content: 'With the standard plan, the platform charges 8% commission on all transactions. The premium plan reduces this to 5% and also provides additional features like priority listing and advanced analytics. Would you like me to arrange a call with our sales team to discuss this further?',
        }
      ]
    },
    {
      id: 'TKT-1005',
      user: 'David Wilson',
      userType: 'Artist',
      subject: 'Feature request: Calendar integration',
      status: 'Open',
      priority: 'Low',
      created: '2023-05-06T13:10:00',
      lastUpdated: '2023-05-06T15:45:00',
      messages: [
        {
          sender: 'David Wilson',
          timestamp: '2023-05-06T13:10:00',
          content: 'It would be really helpful if the platform could integrate with Google Calendar or Apple Calendar so that my gigs automatically appear in my personal calendar.',
        },
        {
          sender: 'Support Agent',
          timestamp: '2023-05-06T15:45:00',
          content: 'Thank you for the suggestion! We\'ve actually been working on calendar integrations and plan to release this feature in our next update, scheduled for next month. I\'ve added your name to our beta tester list if you\'d like to try it out early.',
        }
      ]
    }
  ])
  
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [replyText, setReplyText] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterPriority, setFilterPriority] = useState('All')
  const [filterUserType, setFilterUserType] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  
  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket)
    setReplyText('')
  }
  
  const handleReplyChange = (e) => {
    setReplyText(e.target.value)
  }
  
  const handleSendReply = () => {
    if (!replyText.trim()) return
    
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === selectedTicket.id) {
        const newMessage = {
          sender: 'Support Agent',
          timestamp: new Date().toISOString(),
          content: replyText
        }
        
        return {
          ...ticket,
          messages: [...ticket.messages, newMessage],
          lastUpdated: new Date().toISOString()
        }
      }
      return ticket
    })
    
    setTickets(updatedTickets)
    setReplyText('')
    
    // Update selected ticket to show the new message
    const updatedSelectedTicket = updatedTickets.find(ticket => ticket.id === selectedTicket.id)
    setSelectedTicket(updatedSelectedTicket)
  }
  
  const handleStatusChange = (ticketId, newStatus) => {
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          status: newStatus,
          lastUpdated: new Date().toISOString()
        }
      }
      return ticket
    })
    
    setTickets(updatedTickets)
    
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket({
        ...selectedTicket,
        status: newStatus,
        lastUpdated: new Date().toISOString()
      })
    }
  }
  
  const handlePriorityChange = (ticketId, newPriority) => {
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          priority: newPriority,
          lastUpdated: new Date().toISOString()
        }
      }
      return ticket
    })
    
    setTickets(updatedTickets)
    
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket({
        ...selectedTicket,
        priority: newPriority,
        lastUpdated: new Date().toISOString()
      })
    }
  }
  
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return '#4CAF50'
      case 'Pending':
        return '#FFC107'
      case 'Closed':
        return '#9E9E9E'
      default:
        return '#9E9E9E'
    }
  }
  
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#F44336'
      case 'Medium':
        return '#FF9800'
      case 'Low':
        return '#2196F3'
      default:
        return '#9E9E9E'
    }
  }
  
  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = filterStatus === 'All' || ticket.status === filterStatus
    const matchesPriority = filterPriority === 'All' || ticket.priority === filterPriority
    const matchesUserType = filterUserType === 'All' || ticket.userType === filterUserType
    const matchesSearch = searchQuery === '' || 
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesStatus && matchesPriority && matchesUserType && matchesSearch
  })
  
  return (
    <SupportContainer>
      <SupportHeader>
        <SupportTitle>Support Tickets</SupportTitle>
        <SupportDescription>
          Manage and respond to support requests from artists and venues.
        </SupportDescription>
      </SupportHeader>
      
      <SupportContent>
        <TicketListSection>
          <TicketFilters>
            <SearchBar
              type="text"
              placeholder="Search tickets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            <FilterGroup>
              <FilterSelect 
                value={filterStatus} 
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Open">Open</option>
                <option value="Pending">Pending</option>
                <option value="Closed">Closed</option>
              </FilterSelect>
              
              <FilterSelect 
                value={filterPriority} 
                onChange={(e) => setFilterPriority(e.target.value)}
              >
                <option value="All">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </FilterSelect>
              
              <FilterSelect 
                value={filterUserType} 
                onChange={(e) => setFilterUserType(e.target.value)}
              >
                <option value="All">All Users</option>
                <option value="Artist">Artists</option>
                <option value="Venue">Venues</option>
              </FilterSelect>
            </FilterGroup>
          </TicketFilters>
          
          <TicketList>
            {filteredTickets.length === 0 ? (
              <NoTicketsMessage>No tickets match your filters</NoTicketsMessage>
            ) : (
              filteredTickets.map(ticket => (
                <TicketItem 
                  key={ticket.id}
                  isSelected={selectedTicket && selectedTicket.id === ticket.id}
                  onClick={() => handleTicketSelect(ticket)}
                >
                  <TicketHeader>
                    <TicketId>{ticket.id}</TicketId>
                    <TicketStatus color={getStatusColor(ticket.status)}>
                      {ticket.status}
                    </TicketStatus>
                  </TicketHeader>
                  
                  <TicketSubject>{ticket.subject}</TicketSubject>
                  
                  <TicketMeta>
                    <TicketUser>{ticket.user} ({ticket.userType})</TicketUser>
                    <TicketPriority color={getPriorityColor(ticket.priority)}>
                      {ticket.priority}
                    </TicketPriority>
                  </TicketMeta>
                  
                  <TicketDate>
                    Created: {formatDate(ticket.created)}
                  </TicketDate>
                  <TicketDate>
                    Updated: {formatDate(ticket.lastUpdated)}
                  </TicketDate>
                </TicketItem>
              ))
            )}
          </TicketList>
        </TicketListSection>
        
        <TicketDetailSection>
          {selectedTicket ? (
            <>
              <TicketDetailHeader>
                <div>
                  <TicketDetailTitle>{selectedTicket.subject}</TicketDetailTitle>
                  <TicketDetailId>Ticket ID: {selectedTicket.id}</TicketDetailId>
                </div>
                
                <TicketActions>
                  <TicketActionSelect 
                    value={selectedTicket.status}
                    onChange={(e) => handleStatusChange(selectedTicket.id, e.target.value)}
                  >
                    <option value="Open">Open</option>
                    <option value="Pending">Pending</option>
                    <option value="Closed">Closed</option>
                  </TicketActionSelect>
                  
                  <TicketActionSelect 
                    value={selectedTicket.priority}
                    onChange={(e) => handlePriorityChange(selectedTicket.id, e.target.value)}
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </TicketActionSelect>
                  
                  <Button variant="outline">Assign</Button>
                </TicketActions>
              </TicketDetailHeader>
              
              <TicketUserInfo>
                <UserInfoLabel>From:</UserInfoLabel>
                <UserInfoValue>{selectedTicket.user} ({selectedTicket.userType})</UserInfoValue>
                <UserInfoLabel>Created:</UserInfoLabel>
                <UserInfoValue>{formatDate(selectedTicket.created)}</UserInfoValue>
                <UserInfoLabel>Last Updated:</UserInfoLabel>
                <UserInfoValue>{formatDate(selectedTicket.lastUpdated)}</UserInfoValue>
              </TicketUserInfo>
              
              <MessageThread>
                {selectedTicket.messages.map((message, index) => (
                  <MessageItem key={index} isAgent={message.sender === 'Support Agent'}>
                    <MessageHeader>
                      <MessageSender>{message.sender}</MessageSender>
                      <MessageTime>{formatDate(message.timestamp)}</MessageTime>
                    </MessageHeader>
                    <MessageContent>{message.content}</MessageContent>
                  </MessageItem>
                ))}
              </MessageThread>
              
              <ReplySection>
                <ReplyTextarea 
                  placeholder="Type your reply here..."
                  value={replyText}
                  onChange={handleReplyChange}
                />
                <ReplyActions>
                  <Button variant="outline">Add Attachment</Button>
                  <Button 
                    variant="primary" 
                    onClick={handleSendReply}
                    disabled={!replyText.trim()}
                  >
                    Send Reply
                  </Button>
                </ReplyActions>
              </ReplySection>
            </>
          ) : (
            <NoTicketSelected>
              <NoTicketIcon>📨</NoTicketIcon>
              <NoTicketMessage>Select a ticket to view details and respond</NoTicketMessage>
            </NoTicketSelected>
          )}
        </TicketDetailSection>
      </SupportContent>
      
      <SupportStats>
        <StatCard>
          <StatValue>12</StatValue>
          <StatLabel>Open Tickets</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>3</StatValue>
          <StatLabel>High Priority</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>85%</StatValue>
          <StatLabel>Resolution Rate</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>4.2h</StatValue>
          <StatLabel>Avg. Response Time</StatLabel>
        </StatCard>
      </SupportStats>
    </SupportContainer>
  )
}

const SupportContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const SupportHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SupportTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const SupportDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 800px;
`

const SupportContent = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const TicketListSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`

const TicketFilters = styled.div`
  padding: ${({ theme }) => theme.space.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const SearchBar = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.space.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const FilterGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  flex-wrap: wrap;
`

const FilterSelect = styled.select`
  padding: ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background-color: white;
  flex: 1;
  min-width: 100px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const TicketList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 600px;
`

const TicketItem = styled.div`
  padding: ${({ theme }) => theme.space.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
  background-color: ${({ isSelected, theme }) => 
    isSelected ? theme.colors.background : 'white'};
  
  &:hover {
    background-color: ${({ theme, isSelected }) => 
      isSelected ? theme.colors.background : theme.colors.lightGray};
  }
`

const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TicketId = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  font-family: ${({ theme }) => theme.fonts.mono};
`

const TicketStatus = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: white;
  background-color: ${({ color }) => color};
  padding: ${({ theme }) => `${theme.space.xxs} ${theme.space.xs}`};
  border-radius: ${({ theme }) => theme.radii.sm};
`

const TicketSubject = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TicketMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TicketUser = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkText};
`

const TicketPriority = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ color }) => color};
`

const TicketDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightText};
`

const NoTicketsMessage = styled.div`
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};
  font-size: ${({ theme }) => theme.fontSizes.md};
`

const TicketDetailSection = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const TicketDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.space.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
  }
`

const TicketDetailTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const TicketDetailId = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  font-family: ${({ theme }) => theme.fonts.mono};
`

const TicketActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`

const TicketActionSelect = styled.select`
  padding: ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const TicketUserInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const UserInfoLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.lightText};
`

const UserInfoValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkText};
`

const MessageThread = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.lg};
  flex-grow: 1;
  overflow-y: auto;
  max-height: 400px;
`

const MessageItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ isAgent, theme }) => 
    isAgent ? theme.colors.background : 'white'};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  align-self: ${({ isAgent }) => isAgent ? 'flex-end' : 'flex-start'};
  max-width: 80%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.xxs};
  }
`

const MessageSender = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const MessageTime = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightText};
`

const MessageContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  white-space: pre-wrap;
`

const ReplySection = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const ReplyTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.space.md};
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const ReplyActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

const NoTicketSelected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.xl};
  height: 100%;
  min-height: 400px;
`

const NoTicketIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.lightText};
`

const NoTicketMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
`

const SupportStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
`

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

export default AdminSupport
