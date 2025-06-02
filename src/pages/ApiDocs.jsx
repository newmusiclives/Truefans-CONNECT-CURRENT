import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const ApiDocs = () => {
  const [activeSection, setActiveSection] = useState('introduction')
  
  // Mock data for API endpoints
  const apiEndpoints = [
    {
      id: 'artists',
      name: 'Artists',
      description: 'Endpoints for managing artist profiles and data',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/artists',
          description: 'Get a list of artists',
          parameters: [
            { name: 'limit', type: 'integer', description: 'Maximum number of results to return (default: 20, max: 100)' },
            { name: 'offset', type: 'integer', description: 'Number of results to skip (default: 0)' },
            { name: 'genre', type: 'string', description: 'Filter by genre' }
          ],
          response: `{
  "data": [
    {
      "id": "a1b2c3d4",
      "name": "Sarah James",
      "genre": "Folk",
      "location": "Nashville, TN",
      "bio": "Independent folk artist...",
      "image_url": "https://example.com/images/sarah.jpg",
      "created_at": "2023-01-15T12:00:00Z"
    },
    ...
  ],
  "meta": {
    "total": 1250,
    "limit": 20,
    "offset": 0
  }
}`
        },
        {
          method: 'GET',
          path: '/api/v1/artists/:id',
          description: 'Get a specific artist by ID',
          parameters: [
            { name: 'id', type: 'string', description: 'Unique identifier for the artist' }
          ],
          response: `{
  "data": {
    "id": "a1b2c3d4",
    "name": "Sarah James",
    "genre": "Folk",
    "location": "Nashville, TN",
    "bio": "Independent folk artist...",
    "image_url": "https://example.com/images/sarah.jpg",
    "social_links": {
      "website": "https://sarahjames.com",
      "instagram": "sarahjamesmusic",
      "spotify": "sarahjames"
    },
    "created_at": "2023-01-15T12:00:00Z",
    "updated_at": "2023-05-20T14:30:00Z"
  }
}`
        },
        {
          method: 'POST',
          path: '/api/v1/artists',
          description: 'Create a new artist profile',
          parameters: [
            { name: 'name', type: 'string', description: 'Artist name', required: true },
            { name: 'genre', type: 'string', description: 'Primary genre', required: true },
            { name: 'location', type: 'string', description: 'Artist location', required: true },
            { name: 'bio', type: 'string', description: 'Artist biography' },
            { name: 'image_url', type: 'string', description: 'URL to artist profile image' }
          ],
          response: `{
  "data": {
    "id": "e5f6g7h8",
    "name": "New Artist",
    "genre": "Rock",
    "location": "Austin, TX",
    "bio": "Rock band from Austin...",
    "image_url": null,
    "created_at": "2023-06-10T09:15:00Z",
    "updated_at": "2023-06-10T09:15:00Z"
  }
}`
        }
      ]
    },
    {
      id: 'venues',
      name: 'Venues',
      description: 'Endpoints for managing venue profiles and bookings',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/venues',
          description: 'Get a list of venues',
          parameters: [
            { name: 'limit', type: 'integer', description: 'Maximum number of results to return (default: 20, max: 100)' },
            { name: 'offset', type: 'integer', description: 'Number of results to skip (default: 0)' },
            { name: 'location', type: 'string', description: 'Filter by city or region' },
            { name: 'capacity', type: 'integer', description: 'Filter by minimum capacity' }
          ],
          response: `{
  "data": [
    {
      "id": "v1w2x3y4",
      "name": "The Sound Garden",
      "location": "Seattle, WA",
      "capacity": 250,
      "description": "Intimate venue for indie artists...",
      "image_url": "https://example.com/images/soundgarden.jpg",
      "created_at": "2023-02-10T10:30:00Z"
    },
    ...
  ],
  "meta": {
    "total": 850,
    "limit": 20,
    "offset": 0
  }
}`
        },
        {
          method: 'GET',
          path: '/api/v1/venues/:id/availability',
          description: 'Get venue availability for booking',
          parameters: [
            { name: 'id', type: 'string', description: 'Unique identifier for the venue' },
            { name: 'start_date', type: 'string (ISO date)', description: 'Start date for availability check' },
            { name: 'end_date', type: 'string (ISO date)', description: 'End date for availability check' }
          ],
          response: `{
  "data": {
    "venue_id": "v1w2x3y4",
    "available_dates": [
      {
        "date": "2023-07-15",
        "slots": ["evening"]
      },
      {
        "date": "2023-07-16",
        "slots": ["afternoon", "evening"]
      },
      ...
    ]
  }
}`
        }
      ]
    },
    {
      id: 'contributions',
      name: 'Fan Contributions',
      description: 'Endpoints for managing fan contributions to artists',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/contributions',
          description: 'Create a new contribution',
          parameters: [
            { name: 'artist_id', type: 'string', description: 'ID of the artist receiving the contribution', required: true },
            { name: 'amount', type: 'number', description: 'Contribution amount in USD', required: true },
            { name: 'payment_method_id', type: 'string', description: 'ID of the saved payment method', required: true },
            { name: 'message', type: 'string', description: 'Optional message to the artist' },
            { name: 'is_recurring', type: 'boolean', description: 'Whether this is a recurring monthly contribution' }
          ],
          response: `{
  "data": {
    "id": "c1d2e3f4",
    "artist_id": "a1b2c3d4",
    "fan_id": "f1g2h3i4",
    "amount": 25.00,
    "message": "Love your music!",
    "is_recurring": false,
    "status": "completed",
    "created_at": "2023-06-12T15:45:00Z"
  }
}`
        },
        {
          method: 'GET',
          path: '/api/v1/contributions',
          description: 'Get contributions (for artists or fans)',
          parameters: [
            { name: 'limit', type: 'integer', description: 'Maximum number of results to return (default: 20, max: 100)' },
            { name: 'offset', type: 'integer', description: 'Number of results to skip (default: 0)' },
            { name: 'artist_id', type: 'string', description: 'Filter by artist ID' },
            { name: 'fan_id', type: 'string', description: 'Filter by fan ID' },
            { name: 'status', type: 'string', description: 'Filter by status (completed, pending, failed)' }
          ],
          response: `{
  "data": [
    {
      "id": "c1d2e3f4",
      "artist_id": "a1b2c3d4",
      "fan_id": "f1g2h3i4",
      "amount": 25.00,
      "message": "Love your music!",
      "is_recurring": false,
      "status": "completed",
      "created_at": "2023-06-12T15:45:00Z"
    },
    ...
  ],
  "meta": {
    "total": 156,
    "limit": 20,
    "offset": 0
  }
}`
        }
      ]
    }
  ]
  
  // Navigation sections
  const sections = [
    { id: 'introduction', name: 'Introduction' },
    { id: 'authentication', name: 'Authentication' },
    { id: 'rate-limits', name: 'Rate Limits' },
    { id: 'errors', name: 'Error Handling' },
    ...apiEndpoints.map(endpoint => ({ id: endpoint.id, name: endpoint.name }))
  ]
  
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>API Documentation</HeroTitle>
            <HeroSubtitle>Integrate with the TrueFans CONNECT™ platform</HeroSubtitle>
            <HeroButtons>
              <PrimaryButton>Get API Keys</PrimaryButton>
              <SecondaryButton>View on GitHub</SecondaryButton>
            </HeroButtons>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnLayout>
            <Sidebar>
              <SidebarTitle>Documentation</SidebarTitle>
              <NavList>
                {sections.map(section => (
                  <NavItem 
                    key={section.id}
                    active={activeSection === section.id}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.name}
                  </NavItem>
                ))}
              </NavList>
              
              <SidebarBox>
                <SidebarBoxTitle>Need Help?</SidebarBoxTitle>
                <SidebarBoxText>
                  If you have questions about our API or need assistance with integration, our developer support team is here to help.
                </SidebarBoxText>
                <SidebarBoxButton as={Link} to="/contact">Contact Developer Support</SidebarBoxButton>
              </SidebarBox>
            </Sidebar>
            
            <MainContent>
              {activeSection === 'introduction' && (
                <DocSection>
                  <DocTitle>Introduction</DocTitle>
                  <DocText>
                    <p>
                      Welcome to the TrueFans CONNECT™ API documentation. Our API allows you to integrate with our platform and access data about artists, venues, and fan contributions.
                    </p>
                    <p>
                      The TrueFans CONNECT™ API is organized around REST principles. It uses standard HTTP response codes, authentication, and verbs. All responses are returned in JSON format.
                    </p>
                    <p>
                      This documentation provides information about available endpoints, request parameters, and response formats. You'll also find examples to help you get started quickly.
                    </p>
                  </DocText>
                  
                  <DocSubtitle>Base URL</DocSubtitle>
                  <CodeBlock>
                    https://api.truefans.connect/v1
                  </CodeBlock>
                  
                  <DocSubtitle>API Versions</DocSubtitle>
                  <DocText>
                    <p>
                      The current version of the API is v1. When we make backwards-incompatible changes to the API, we will release a new version. We recommend specifying a version when making API requests.
                    </p>
                  </DocText>
                  
                  <DocSubtitle>Getting Started</DocSubtitle>
                  <DocText>
                    <p>
                      To use the TrueFans CONNECT™ API, you'll need to:
                    </p>
                    <ol>
                      <li>Create a developer account</li>
                      <li>Generate API keys in the developer dashboard</li>
                      <li>Include your API key in all requests</li>
                    </ol>
                  </DocText>
                </DocSection>
              )}
              
              {activeSection === 'authentication' && (
                <DocSection>
                  <DocTitle>Authentication</DocTitle>
                  <DocText>
                    <p>
                      The TrueFans CONNECT™ API uses API keys to authenticate requests. You can view and manage your API keys in the developer dashboard.
                    </p>
                    <p>
                      Authentication is performed via HTTP Bearer Auth. Provide your API key as the bearer token in the Authorization header.
                    </p>
                  </DocText>
                  
                  <DocSubtitle>Example Request</DocSubtitle>
                  <CodeBlock>
                    curl -X GET "https://api.truefans.connect/v1/artists" \<br />
                    &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                  </CodeBlock>
                  
                  <DocSubtitle>API Keys</DocSubtitle>
                  <DocText>
                    <p>
                      Your API keys carry many privileges, so be sure to keep them secure. Do not share your API keys in publicly accessible areas such as GitHub, client-side code, etc.
                    </p>
                    <p>
                      All API requests must be made over HTTPS. Calls made over plain HTTP will fail.
                    </p>
                  </DocText>
                </DocSection>
              )}
              
              {activeSection === 'rate-limits' && (
                <DocSection>
                  <DocTitle>Rate Limits</DocTitle>
                  <DocText>
                    <p>
                      To ensure the stability of the API, we enforce rate limits on requests. Rate limits vary based on your plan:
                    </p>
                  </DocText>
                  
                  <RateLimitsTable>
                    <thead>
                      <tr>
                        <th>Plan</th>
                        <th>Rate Limit</th>
                        <th>Burst Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Developer</td>
                        <td>100 requests/minute</td>
                        <td>150 requests/minute</td>
                      </tr>
                      <tr>
                        <td>Business</td>
                        <td>500 requests/minute</td>
                        <td>750 requests/minute</td>
                      </tr>
                      <tr>
                        <td>Enterprise</td>
                        <td>2000 requests/minute</td>
                        <td>3000 requests/minute</td>
                      </tr>
                    </tbody>
                  </RateLimitsTable>
                  
                  <DocSubtitle>Rate Limit Headers</DocSubtitle>
                  <DocText>
                    <p>
                      All API responses include headers that indicate your current rate limit status:
                    </p>
                  </DocText>
                  
                  <RateLimitHeaders>
                    <RateLimitHeader>
                      <RateLimitHeaderName>X-RateLimit-Limit</RateLimitHeaderName>
                      <RateLimitHeaderValue>The maximum number of requests allowed per minute</RateLimitHeaderValue>
                    </RateLimitHeader>
                    <RateLimitHeader>
                      <RateLimitHeaderName>X-RateLimit-Remaining</RateLimitHeaderName>
                      <RateLimitHeaderValue>The number of requests remaining in the current rate limit window</RateLimitHeaderValue>
                    </RateLimitHeader>
                    <RateLimitHeader>
                      <RateLimitHeaderName>X-RateLimit-Reset</RateLimitHeaderName>
                      <RateLimitHeaderValue>The time at which the current rate limit window resets (UTC epoch seconds)</RateLimitHeaderValue>
                    </RateLimitHeader>
                  </RateLimitHeaders>
                  
                  <DocSubtitle>Exceeding Rate Limits</DocSubtitle>
                  <DocText>
                    <p>
                      If you exceed the rate limit, you will receive a 429 Too Many Requests response. The response will include the standard rate limit headers to help you determine when you can retry the request.
                    </p>
                  </DocText>
                </DocSection>
              )}
              
              {activeSection === 'errors' && (
                <DocSection>
                  <DocTitle>Error Handling</DocTitle>
                  <DocText>
                    <p>
                      The TrueFans CONNECT™ API uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed given the information provided, and codes in the 5xx range indicate an error with our servers.
                    </p>
                  </DocText>
                  
                  <DocSubtitle>HTTP Status Codes</DocSubtitle>
                  <ErrorCodesTable>
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>200 - OK</td>
                        <td>Everything worked as expected</td>
                      </tr>
                      <tr>
                        <td>201 - Created</td>
                        <td>A new resource was successfully created</td>
                      </tr>
                      <tr>
                        <td>400 - Bad Request</td>
                        <td>The request was unacceptable, often due to missing a required parameter</td>
                      </tr>
                      <tr>
                        <td>401 - Unauthorized</td>
                        <td>No valid API key provided</td>
                      </tr>
                      <tr>
                        <td>403 - Forbidden</td>
                        <td>The API key doesn't have permissions to perform the request</td>
                      </tr>
                      <tr>
                        <td>404 - Not Found</td>
                        <td>The requested resource doesn't exist</td>
                      </tr>
                      <tr>
                        <td>429 - Too Many Requests</td>
                        <td>Rate limit exceeded</td>
                      </tr>
                      <tr>
                        <td>500, 502, 503, 504 - Server Errors</td>
                        <td>Something went wrong on our end</td>
                      </tr>
                    </tbody>
                  </ErrorCodesTable>
                  
                  <DocSubtitle>Error Response Format</DocSubtitle>
                  <DocText>
                    <p>
                      When an error occurs, the API will return a JSON response with an error object:
                    </p>
                  </DocText>
                  
                  <CodeBlock>
                    {`{
  "error": {
    "code": "invalid_request",
    "message": "The request was unacceptable, often due to missing a required parameter",
    "param": "artist_id",
    "type": "validation_error"
  }
}`}
                  </CodeBlock>
                </DocSection>
              )}
              
              {apiEndpoints.map(endpoint => (
                activeSection === endpoint.id && (
                  <DocSection key={endpoint.id}>
                    <DocTitle>{endpoint.name}</DocTitle>
                    <DocText>
                      <p>{endpoint.description}</p>
                    </DocText>
                    
                    {endpoint.endpoints.map((api, index) => (
                      <EndpointSection key={index}>
                        <EndpointHeader>
                          <EndpointMethod method={api.method}>{api.method}</EndpointMethod>
                          <EndpointPath>{api.path}</EndpointPath>
                        </EndpointHeader>
                        <EndpointDescription>{api.description}</EndpointDescription>
                        
                        {api.parameters && api.parameters.length > 0 && (
                          <>
                            <EndpointSubtitle>Parameters</EndpointSubtitle>
                            <ParametersTable>
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Type</th>
                                  <th>Description</th>
                                  <th>Required</th>
                                </tr>
                              </thead>
                              <tbody>
                                {api.parameters.map((param, paramIndex) => (
                                  <tr key={paramIndex}>
                                    <td>{param.name}</td>
                                    <td>{param.type}</td>
                                    <td>{param.description}</td>
                                    <td>{param.required ? 'Yes' : 'No'}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </ParametersTable>
                          </>
                        )}
                        
                        <EndpointSubtitle>Example Response</EndpointSubtitle>
                        <CodeBlock>
                          {api.response}
                        </CodeBlock>
                      </EndpointSection>
                    ))}
                  </DocSection>
                )
              ))}
            </MainContent>
          </TwoColumnLayout>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle>Ready to Get Started?</CTATitle>
            <CTAText>
              Create a developer account to get your API keys and start building with the TrueFans CONNECT™ API.
            </CTAText>
            <CTAButtons>
              <CTAButton>Create Developer Account</CTAButton>
              <CTASecondaryButton>View API Reference</CTASecondaryButton>
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

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`

const PrimaryButton = styled(Button)`
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

const SecondaryButton = styled(Button)`
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

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const NavItem = styled.div`
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ active, theme }) => active ? theme.colors.primary + '15' : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.darkText};
  font-weight: ${({ active, theme }) => active ? theme.fontWeights.semiBold : theme.fontWeights.normal};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ active, theme }) => active ? theme.colors.primary + '15' : theme.colors.lightGray};
  }
`

const SidebarBox = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const SidebarBoxTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const SidebarBoxText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SidebarBoxButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => theme.space.sm};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
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
const MainContent = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const DocSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const DocTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  padding-bottom: ${({ theme }) => theme.space.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
`

const DocSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-top: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const DocText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  
  p {
    margin-bottom: ${({ theme }) => theme.space.md};
  }
  
  ol, ul {
    margin-bottom: ${({ theme }) => theme.space.md};
    padding-left: ${({ theme }) => theme.space.xl};
  }
  
  li {
    margin-bottom: ${({ theme }) => theme.space.xs};
  }
`

const CodeBlock = styled.pre`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.md};
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

// Rate Limits
const RateLimitsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  th, td {
    padding: ${({ theme }) => theme.space.md};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  }
  
  th {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const RateLimitHeaders = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const RateLimitHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`

const RateLimitHeaderName = styled.div`
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const RateLimitHeaderValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
`

// Error Codes
const ErrorCodesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  th, td {
    padding: ${({ theme }) => theme.space.md};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  }
  
  th {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  
  td:first-child {
    font-family: monospace;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`

// Endpoint
const EndpointSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
  padding-bottom: ${({ theme }) => theme.space.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`

const EndpointHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const EndpointMethod = styled.div`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-family: monospace;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-right: ${({ theme }) => theme.space.sm};
  
  background-color: ${({ method, theme }) => {
    switch (method) {
      case 'GET':
        return '#61affe';
      case 'POST':
        return '#49cc90';
      case 'PUT':
        return '#fca130';
      case 'DELETE':
        return '#f93e3e';
      default:
        return theme.colors.mediumGray;
    }
  }};
  
  color: white;
`

const EndpointPath = styled.div`
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const EndpointDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const EndpointSubtitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ParametersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  th, td {
    padding: ${({ theme }) => theme.space.md};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  }
  
  th {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  
  td:first-child {
    font-family: monospace;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
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

export default ApiDocs
