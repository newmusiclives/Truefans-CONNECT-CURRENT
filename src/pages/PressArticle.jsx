import React from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const PressArticle = () => {
  const { slug } = useParams()
  
  // Mock data for press releases
  const pressReleases = {
    "truefans-opportunities": {
      id: 1,
      title: "TrueFans CONNECT™ to Offer Unique Opportunities for Artists and Fans",
      date: "December 15, 2024",
      image: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",
      content: `
        <p><strong>NASHVILLE, TN - December 15, 2024</strong> - TrueFans CONNECT™, the innovative platform designed to transform the relationship between independent artists and their supporters, today announced plans to offer unique opportunities for artists and fans to collaborate in building the TrueFans CONNECT™ ecosystem.</p>
        
        <p>The platform, currently in development, will create a direct connection between artists and their most dedicated supporters, allowing fans to contribute meaningfully to artists' careers while receiving exclusive benefits and experiences in return.</p>
        
        <p>"We're building TrueFans CONNECT™ with a fundamental belief that the relationship between artists and fans should be more direct, more meaningful, and more mutually beneficial," said Sarah Johnson, CEO of TrueFans CONNECT™. "Our platform will provide the tools and infrastructure for these connections to flourish."</p>
        
        <h2>Key Features of the Upcoming Platform</h2>
        
        <p>TrueFans CONNECT™ will introduce several innovative features designed to strengthen the artist-fan relationship:</p>
        
        <ul>
          <li><strong>Direct Support Mechanisms:</strong> Fans will be able to directly support artists through various contribution models, with 80% of all revenue going directly to creators.</li>
          <li><strong>Exclusive Content Access:</strong> Artists can offer supporters special access to unreleased music, behind-the-scenes content, and creative process insights.</li>
          <li><strong>Virtual and In-Person Experiences:</strong> The platform will facilitate both digital and real-world connections between artists and fans.</li>
          <li><strong>Community Building Tools:</strong> Artists will have resources to develop and nurture their own dedicated communities.</li>
        </ul>
        
        <p>"What makes TrueFans CONNECT™ different is our focus on building genuine connections rather than just transactions," explained Michael Chen, CTO. "We're creating an ecosystem where artists and fans collaborate to create sustainable careers and meaningful experiences."</p>
        
        <h2>Beta Testing Program</h2>
        
        <p>The company also announced that a select group of beta testers is currently active on the platform, providing valuable feedback that will shape the final product. These early users include independent artists across multiple genres and dedicated music fans eager to support emerging talent.</p>
        
        <p>"The feedback from our beta testers has been invaluable," said Johnson. "They're helping us refine the platform to ensure it truly serves the needs of both artists and fans."</p>
        
        <h2>Industry Impact</h2>
        
        <p>TrueFans CONNECT™ enters the market at a time when independent artists are seeking alternatives to traditional revenue models. By emphasizing direct fan relationships and fair compensation, the platform aims to create more sustainable career paths for creators outside the major label system.</p>
        
        <p>Music industry analyst David Williams commented, "Platforms like TrueFans CONNECT™ represent the future of artist development. By creating direct pathways between creators and their most dedicated supporters, they're establishing a model that could fundamentally change how artists build and sustain their careers."</p>
        
        <h2>Launch Timeline</h2>
        
        <p>TrueFans CONNECT™ is expected to launch to a wider audience in mid-2025, with a phased rollout beginning with independent musicians before expanding to other creative disciplines.</p>
        
        <p>For more information about TrueFans CONNECT™ or to join the waitlist for early access, visit <a href="https://www.truefans.connect">www.truefans.connect</a>.</p>
        
        <h2>About TrueFans CONNECT™</h2>
        
        <p>TrueFans CONNECT™ is developing an innovative platform designed to transform the relationship between independent artists and their supporters. By facilitating direct connections and fair compensation, TrueFans CONNECT™ aims to create a more sustainable ecosystem for creative professionals. The company is headquartered in Nashville, Tennessee.</p>
        
        <h2>Media Contact</h2>
        
        <p>Sarah Johnson<br>
        CEO, TrueFans CONNECT™<br>
        press@truefans.connect<br>
        (555) 123-4567</p>
      `
    },
    "beta-testing-program": {
      id: 2,
      title: "TrueFans CONNECT™ Launches Beta Testing Program",
      date: "November 2, 2024",
      image: "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg",
      content: `
        <p><strong>NASHVILLE, TN - November 2, 2024</strong> - TrueFans CONNECT™, the artist-fan relationship platform, today announced the official launch of its beta testing program. A select group of independent artists and dedicated music fans are now actively using the platform, providing critical feedback to shape its development.</p>
        
        <p>The beta program represents a significant milestone in the company's development roadmap, allowing real users to experience the platform's core features and provide insights that will inform future iterations.</p>
        
        <p>"Today marks an exciting step forward for TrueFans CONNECT™," said Michael Chen, CTO and co-founder. "Our beta testers are now experiencing firsthand how our platform can transform the relationship between artists and their most dedicated supporters."</p>
        
        <h2>Beta Program Details</h2>
        
        <p>The initial beta cohort includes independent artists across multiple genres—from folk and indie rock to hip-hop and electronic music—along with dedicated fans eager to support emerging talent. These early users have access to the platform's core features:</p>
        
        <ul>
          <li><strong>Artist Profiles:</strong> Customizable spaces where creators can showcase their work and connect with supporters</li>
          <li><strong>Direct Support Mechanisms:</strong> Tools that enable fans to financially contribute to artists they believe in</li>
          <li><strong>Exclusive Content Sharing:</strong> Systems for artists to share special content with their supporters</li>
          <li><strong>Community Engagement:</strong> Features that facilitate meaningful interactions between artists and fans</li>
        </ul>
        
        <p>"We've been incredibly intentional about who we've invited to this beta phase," explained Emily Rodriguez, Head of Community. "We wanted a diverse group of artists at different career stages, along with fans who are passionate about supporting independent music. Their feedback is already proving invaluable."</p>
        
        <h2>Early Feedback</h2>
        
        <p>While the beta program is still in its early stages, initial feedback has been promising. Artists have particularly responded to the platform's emphasis on fair compensation and direct relationships.</p>
        
        <p>James Wilson, an independent folk musician participating in the beta, shared: "What excites me most about TrueFans CONNECT™ is how it prioritizes meaningful connections with my most dedicated listeners. It's not just about streaming numbers—it's about building a sustainable community around my music."</p>
        
        <p>Fan participants have highlighted the platform's ability to provide a more personal connection to the artists they support.</p>
        
        <p>"As someone who loves discovering new independent artists, I appreciate how TrueFans CONNECT™ lets me directly contribute to their success," said beta tester Maria Gonzalez. "It feels good knowing my support is making a tangible difference, and the exclusive content and interactions make the experience special."</p>
        
        <h2>Iterative Development Approach</h2>
        
        <p>The company emphasized that the beta program is part of an iterative development process, with regular updates planned based on user feedback.</p>
        
        <p>"We're taking a build-in-public approach," said Chen. "Our beta testers aren't just using the platform—they're helping us build it. We'll be regularly implementing their suggestions and addressing pain points as we work toward our full launch."</p>
        
        <p>The beta testing program is expected to run through early 2025, with new features being added throughout the testing period.</p>
        
        <h2>Looking Ahead</h2>
        
        <p>TrueFans CONNECT™ plans to gradually expand its beta program in the coming months, inviting additional artists and fans to join the platform. Those interested in participating can join the waitlist on the company's website.</p>
        
        <p>"This beta launch is just the beginning," said Sarah Johnson, CEO. "We're building TrueFans CONNECT™ to be the foundation for a new creator economy—one where independent artists can build sustainable careers with the direct support of their most passionate fans."</p>
        
        <h2>About TrueFans CONNECT™</h2>
        
        <p>TrueFans CONNECT™ is developing an innovative platform designed to transform the relationship between independent artists and their supporters. By facilitating direct connections and fair compensation, TrueFans CONNECT™ aims to create a more sustainable ecosystem for creative professionals. The company is headquartered in Nashville, Tennessee.</p>
        
        <h2>Media Contact</h2>
        
        <p>Emily Rodriguez<br>
        Head of Community, TrueFans CONNECT™<br>
        press@truefans.connect<br>
        (555) 123-4567</p>
      `
    },
    "affiliate-program": {
      id: 3,
      title: "TrueFans CONNECT™ Announces Two-Tier Affiliate Program",
      date: "October 10, 2024",
      image: "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg",
      content: `
        <p><strong>NASHVILLE, TN - October 10, 2024</strong> - TrueFans CONNECT™, the platform being developed to transform artist-fan relationships, today announced plans for a two-tier affiliate program that will allow artists to earn passive income through platform referrals.</p>
        
        <p>The program, scheduled to launch alongside the platform's public release in 2025, will create additional revenue opportunities for artists while helping to grow the TrueFans CONNECT™ ecosystem organically.</p>
        
        <p>"We're building TrueFans CONNECT™ to provide multiple income streams for independent artists," said Sarah Johnson, CEO. "The affiliate program represents another way creators can generate revenue beyond their direct creative work."</p>
        
        <h2>How the Affiliate Program Will Work</h2>
        
        <p>The planned two-tier affiliate structure will work as follows:</p>
        
        <ul>
          <li><strong>First-Tier Referrals:</strong> Artists will earn a 5% commission on platform fees generated by other artists they directly refer to the platform for the first year.</li>
          <li><strong>Second-Tier Referrals:</strong> Artists will earn a 2% commission on platform fees generated by artists who are referred by their first-tier referrals, also for the first year.</li>
        </ul>
        
        <p>This structure is designed to reward artists for growing the platform's ecosystem while creating opportunities for passive income that can help stabilize the often unpredictable earnings of independent creators.</p>
        
        <p>"The affiliate program aligns everyone's incentives," explained David Williams, Head of Artist Relations. "Artists are rewarded for bringing other talented creators to the platform, which in turn makes TrueFans CONNECT™ more valuable for all users."</p>
        
        <h2>Artist-Centric Design</h2>
        
        <p>The affiliate program has been designed with input from the platform's beta testers to ensure it serves artists' needs effectively.</p>
        
        <p>"We've been careful to structure this program in a way that feels authentic and non-exploitative," said Williams. "It's not about turning artists into salespeople—it's about rewarding them for organically sharing a platform they believe in with their peers."</p>
        
        <p>The company emphasized that the affiliate program will include clear disclosure requirements and transparent reporting, allowing artists to track their referral performance through a dedicated dashboard.</p>
        
        <h2>Community Building Focus</h2>
        
        <p>Beyond the financial benefits, TrueFans CONNECT™ sees the affiliate program as a way to build stronger connections within artistic communities.</p>
        
        <p>"Independent artists often work in isolation, but they thrive in community," noted Emily Rodriguez, Head of Community. "The affiliate program encourages artists to connect with and support each other, creating a network effect that benefits everyone involved."</p>
        
        <p>The company plans to facilitate these connections through virtual and in-person events for platform artists, creating opportunities for collaboration and knowledge sharing.</p>
        
        <h2>Implementation Timeline</h2>
        
        <p>The affiliate program is currently in development, with a planned launch alongside the platform's public release in mid-2025. Artists participating in the beta program will have early access to the affiliate system and will help refine it before the wider launch.</p>
        
        <p>"Like every aspect of TrueFans CONNECT™, we're building this program iteratively with direct input from the artists it's designed to serve," said Johnson. "We're excited to see how it evolves based on their feedback."</p>
        
        <h2>About TrueFans CONNECT™</h2>
        
        <p>TrueFans CONNECT™ is developing an innovative platform designed to transform the relationship between independent artists and their supporters. By facilitating direct connections and fair compensation, TrueFans CONNECT™ aims to create a more sustainable ecosystem for creative professionals. The company is headquartered in Nashville, Tennessee.</p>
        
        <h2>Media Contact</h2>
        
        <p>David Williams<br>
        Head of Artist Relations, TrueFans CONNECT™<br>
        press@truefans.connect<br>
        (555) 123-4567</p>
      `
    },
    "venue-partnerships": {
      id: 4,
      title: "TrueFans CONNECT™ Plans Venue Network Partnerships",
      date: "September 5, 2024",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      content: `
        <p><strong>NASHVILLE, TN - September 5, 2024</strong> - TrueFans CONNECT™ today announced plans to develop a Venue Network Partnership program, an initiative designed to connect independent artists with performance venues across the country. This program will be a key component of the platform's ecosystem when it launches to the public in 2025.</p>
        
        <p>The Venue Network will create mutually beneficial relationships between independent artists and performance spaces of all sizes, from intimate coffee shops to mid-sized clubs, addressing one of the most significant challenges facing emerging musicians: finding quality performance opportunities.</p>
        
        <p>"Live performance remains essential for artist development and revenue generation," said Sarah Johnson, CEO of TrueFans CONNECT™. "Our Venue Network will help remove barriers between talented artists and the stages where they can connect with audiences."</p>
        
        <h2>Program Structure</h2>
        
        <p>The planned Venue Network will function as a two-sided marketplace within the TrueFans CONNECT™ platform:</p>
        
        <ul>
          <li><strong>For Venues:</strong> Performance spaces will create profiles detailing their capacity, available dates, technical specifications, and compensation structure. Venues will gain access to a curated pool of artists who match their specific needs.</li>
          <li><strong>For Artists:</strong> Musicians will be able to discover appropriate venues, submit performance proposals, and build relationships with venue operators. The platform will provide tools to help artists route tours efficiently.</li>
        </ul>
        
        <p>"We're creating a system that benefits both sides of the equation," explained Alex Thompson, Director of Business Development. "Venues get access to quality talent that fits their specific needs, while artists find appropriate stages and build their touring foundation."</p>
        
        <h2>Initial Partners</h2>
        
        <p>TrueFans CONNECT™ has begun discussions with several venue operators across multiple markets to serve as founding partners in the network. These early participants will help shape the program's development and ensure it addresses real-world needs.</p>
        
        <p>"The initial response from venue operators has been enthusiastic," said Thompson. "They recognize the value in a platform that can connect them with appropriate artists while reducing the administrative burden of booking."</p>
        
        <p>While specific venues have not yet been announced, the company indicated that the initial network will include a diverse range of performance spaces across several key music markets, including Nashville, Austin, Los Angeles, New York, and Chicago.</p>
        
        <h2>Data-Driven Matching</h2>
        
        <p>A key feature of the planned Venue Network will be its use of data to create appropriate matches between artists and venues.</p>
        
        <p>"We're developing algorithms that consider factors like musical style, audience demographics, venue capacity, and artist draw to suggest optimal pairings," said Michael Chen, CTO. "This data-driven approach will help both artists and venues make more informed decisions."</p>
        
        <p>The system will also incorporate feedback mechanisms, allowing venues and artists to rate their experiences and continuously improve the quality of matches.</p>
        
        <h2>Beyond Booking</h2>
        
        <p>The company emphasized that the Venue Network will go beyond simple booking functionality to create a comprehensive support system for live performance.</p>
        
        <p>"We're building tools to help artists promote their shows, sell tickets, and engage with attendees before and after performances," said Emily Rodriguez, Head of Community. "The goal is to maximize the value of every live opportunity."</p>
        
        <p>For venues, the platform will provide analytics on performance outcomes, audience engagement, and promotional effectiveness, helping them optimize their programming decisions.</p>
        
        <h2>Development Timeline</h2>
        
        <p>The Venue Network is currently in the planning and early development phase. TrueFans CONNECT™ expects to begin testing the feature with a limited group of artists and venues in early 2025, with a wider rollout planned for later that year.</p>
        
        <p>"Like all aspects of our platform, we're taking a thoughtful, iterative approach to building the Venue Network," said Johnson. "We're working closely with both artists and venue operators to ensure we're creating something that truly serves their needs."</p>
        
        <h2>About TrueFans CONNECT™</h2>
        
        <p>TrueFans CONNECT™ is developing an innovative platform designed to transform the relationship between independent artists and their supporters. By facilitating direct connections and fair compensation, TrueFans CONNECT™ aims to create a more sustainable ecosystem for creative professionals. The company is headquartered in Nashville, Tennessee.</p>
        
        <h2>Media Contact</h2>
        
        <p>Alex Thompson<br>
        Director of Business Development, TrueFans CONNECT™<br>
        press@truefans.connect<br>
        (555) 123-4567</p>
      `
    }
  }
  
  // Find the current press release
  const pressRelease = pressReleases[slug]
  
  if (!pressRelease) {
    return (
      <PageTransition>
        <Container>
          <NotFoundSection>
            <NotFoundTitle>Article Not Found</NotFoundTitle>
            <NotFoundText>The press release you're looking for doesn't exist or has been moved.</NotFoundText>
            <BackButton as={Link} to="/press">Back to Press & Media</BackButton>
          </NotFoundSection>
        </Container>
      </PageTransition>
    )
  }
  
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroDate>{pressRelease.date}</HeroDate>
            <HeroTitle>{pressRelease.title}</HeroTitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ArticleSection>
        <Container>
          <ArticleContainer>
            <ArticleImage src={pressRelease.image} alt={pressRelease.title} />
            <ArticleContent dangerouslySetInnerHTML={{ __html: pressRelease.content }} />
            
            <ShareSection>
              <ShareTitle>Share this press release</ShareTitle>
              <ShareButtons>
                <ShareButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span>Facebook</span>
                </ShareButton>
                <ShareButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span>Twitter</span>
                </ShareButton>
                <ShareButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn</span>
                </ShareButton>
                <ShareButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>Copy Link</span>
                </ShareButton>
              </ShareButtons>
            </ShareSection>
            
            <ContactSection>
              <ContactTitle>Media Contact</ContactTitle>
              <ContactText>
                For more information about this press release or to schedule an interview, please contact:
              </ContactText>
              <ContactInfo>
                <ContactItem>
                  <ContactIcon>📧</ContactIcon>
                  <ContactText>press@truefans.connect</ContactText>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>📞</ContactIcon>
                  <ContactText>(555) 123-4567</ContactText>
                </ContactItem>
              </ContactInfo>
            </ContactSection>
            
            <BackToPress as={Link} to="/press">← Back to Press & Media</BackToPress>
          </ArticleContainer>
        </Container>
      </ArticleSection>
      
      <MoreReleasesSection>
        <Container>
          <SectionTitle>More Press Releases</SectionTitle>
          <ReleasesGrid>
            {Object.values(pressReleases)
              .filter(release => release.id !== pressRelease.id)
              .slice(0, 3)
              .map(release => (
                <ReleaseCard key={release.id}>
                  <ReleaseImage src={release.image} alt={release.title} />
                  <ReleaseContent>
                    <ReleaseDate>{release.date}</ReleaseDate>
                    <ReleaseTitle>{release.title}</ReleaseTitle>
                    <ReadMoreLink as={Link} to={`/press/${Object.keys(pressReleases).find(key => pressReleases[key].id === release.id)}`}>
                      Read Full Release →
                    </ReadMoreLink>
                  </ReleaseContent>
                </ReleaseCard>
              ))}
          </ReleasesGrid>
          <ViewAllButton as={Link} to="/press">View All Press Releases</ViewAllButton>
        </Container>
      </MoreReleasesSection>
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
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const HeroDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.8;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
`

const ArticleSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ArticleImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ArticleContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.darkText};
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin: ${({ theme }) => theme.space.xl} 0 ${({ theme }) => theme.space.md};
    color: ${({ theme }) => theme.colors.darkText};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.space.md};
  }
  
  ul, ol {
    margin-bottom: ${({ theme }) => theme.space.md};
    padding-left: ${({ theme }) => theme.space.xl};
  }
  
  li {
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
  
  strong {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const ShareSection = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
  padding-top: ${({ theme }) => theme.space.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const ShareTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ShareButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  flex-wrap: wrap;
`

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumGray};
  }
`

const ContactSection = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
`

const ContactTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ContactText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
`

const ContactIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`

const BackToPress = styled(Link)`
  display: inline-block;
  margin-top: ${({ theme }) => theme.space.xl};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const MoreReleasesSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`

const ReleasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const ReleaseCard = styled.article`
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

const ReleaseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const ReleaseContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const ReleaseDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ReleaseTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.3;
`

const ReadMoreLink = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const ViewAllButton = styled(Button)`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
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

const NotFoundSection = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space.xxl} 0;
`

const NotFoundTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const NotFoundText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const BackButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

export default PressArticle
