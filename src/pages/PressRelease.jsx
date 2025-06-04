import React from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const PressRelease = () => {
  const { id } = useParams()
  
  // Mock data for press releases
  const pressReleaseData = {
    'truefans-raises-5m': {
      title: "TrueFans CONNECT™ Launches Platform to Revolutionize Artist Support",
      date: "May 15, 2025",
      image: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",
      content: `
        <p><strong>PHOENIX, AZ</strong> - TrueFans CONNECT™, the innovative platform connecting independent artists with their supporters, announced today the official launch of its platform designed to create a more equitable ecosystem for independent artists.</p>
        
        <p>"This launch represents a significant milestone for TrueFans CONNECT™ and our mission to create a more equitable ecosystem for independent artists," said Paul Saunders, Founder and CEO of TrueFans CONNECT™. "We're providing artists with the tools and connections they need to thrive in today's music industry."</p>
        
        <p>TrueFans CONNECT™ helps independent artists increase their revenue through its innovative platform that facilitates direct fan support, venue bookings, and merchandise sales.</p>
        
        <p>The company plans to focus on:</p>
        <ul>
          <li>Building a network of venue partnerships across North America</li>
          <li>Enhancing its mobile application with new fan engagement features</li>
          <li>Growing its team, particularly in engineering and artist relations</li>
          <li>Expanding into key metropolitan markets across the United States</li>
        </ul>
        
        <p>"We're just getting started," added Saunders. "Our vision is to create the most artist-friendly platform in the industry, and this launch brings us one step closer to making that vision a reality."</p>
      `
    },
    'truefans-surpasses-10000-artists': {
      title: "TrueFans CONNECT™ Launches Beta Program with Select Artists",
      date: "March 2, 2025",
      image: "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg",
      content: `
        <p><strong>PHOENIX, AZ</strong> - TrueFans CONNECT™, the platform for independent artist support and venue connections, announced today the successful launch of its beta program with a select group of independent artists.</p>
        
        <p>This achievement marks an important first step in the company's mission to revolutionize how independent musicians connect with fans and venues.</p>
        
        <p>"Launching our beta program with these talented artists is a testament to the value we're aiming to provide to independent musicians," said Paul Saunders, Founder and CEO of TrueFans CONNECT™. "We're proud to be working toward empowering artists to build sustainable careers on their own terms, without having to sacrifice creative control or revenue potential."</p>
        
        <p>The platform is designed to process direct fan contributions to artists, with artists keeping 80% of all revenue generated through the platform – significantly higher than industry standards.</p>
        
        <p>Among the beta testers, several early success indicators have emerged:</p>
        <ul>
          <li>Artists report improved fan engagement through the platform's direct connection tools</li>
          <li>The streamlined booking process has helped artists secure performance opportunities more efficiently</li>
          <li>The platform's all-in-one approach reduces the need for multiple services and subscriptions</li>
        </ul>
        
        <p>"What sets TrueFans CONNECT™ apart is their holistic approach to artist support," said Sarah Chen, an independent singer-songwriter who joined the beta program. "It's not just about fan donations – it's about connecting with venues, building a community, and accessing tools that help me grow my career. The platform has great potential to change how I approach my music business."</p>
        
        <p>To highlight the talent in the beta program, TrueFans CONNECT™ is launching an "Artist Spotlight" series, featuring these pioneering artists through social media promotion and exclusive performance opportunities.</p>
        
        <p>"This is just the beginning," said Saunders. "Based on feedback from our beta artists, we're refining the platform before our full public launch. We're committed to building the most artist-friendly ecosystem in the music industry."</p>
      `
    },
    'truefans-launches-affiliate-program': {
      title: "TrueFans CONNECT™ Launches Two-Tier Affiliate Program",
      date: "January 10, 2025",
      image: "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg",
      content: `
        <p><strong>PHOENIX, AZ</strong> - TrueFans CONNECT™, the innovative platform connecting independent artists with fans and venues, today announced the launch of its two-tier affiliate program, enabling artists to earn passive income through platform referrals.</p>
        
        <p>The new program allows artists to earn commission not only from directly referred artists who join the platform, but also from the artists those referrals subsequently bring on board, creating a sustainable income stream for early adopters.</p>
        
        <p>"Our artists have been our best advocates, and we wanted to recognize and reward that," said Paul Saunders, Founder and CEO of TrueFans CONNECT™. "The two-tier affiliate program allows artists to earn while helping grow our community, creating a win-win situation for everyone involved."</p>
        
        <p>Under the new program, artists will earn:</p>
        <ul>
          <li>5% of platform fees from artists they directly refer to TrueFans CONNECT™ for the first year</li>
          <li>2% of platform fees from second-tier referrals (artists referred by their referrals) for six months</li>
          <li>Bonus rewards when referred artists reach certain earnings milestones</li>
        </ul>
        
        <p>The program has been in beta testing with select artists for the past two months, with promising results. Beta testers earned an average of $275 per month in affiliate commissions, with top performers earning over $1,000 monthly.</p>
        
        <p>"I've referred several artist friends to TrueFans CONNECT™ because the platform has been so valuable for my career," said Marcus Johnson, an independent R&B artist based in Atlanta. "The affiliate program now allows me to earn from those referrals, which has become a meaningful addition to my monthly income."</p>
        
        <p>The affiliate program is part of TrueFans CONNECT™'s broader strategy to create multiple revenue streams for independent artists.</p>
        
        <p>"We understand that sustainable careers in music require diverse income sources," explained Saunders. "Between direct fan support, venue bookings, merchandise sales, and now our affiliate program, we're providing artists with multiple ways to monetize their talent and network."</p>
        
        <p>The affiliate program is now available to all artists on the TrueFans CONNECT™ platform. Artists can access their unique referral links and tracking dashboard through their account settings.</p>
      `
    },
    'truefans-partners-with-venues': {
      title: "TrueFans CONNECT™ Partners with Major Venue Network",
      date: "September 5, 2024",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      content: `
        <p><strong>PHOENIX, AZ</strong> - TrueFans CONNECT™, the platform revolutionizing how independent artists connect with fans, announced today a strategic partnership with a major Open Mic network of over 200 performance venues across the United States.</p>
        
        <p>This partnership will enable independent artists on the TrueFans CONNECT™ platform to book performances at venues within this network directly through the TrueFans CONNECT™ interface, streamlining the booking process and creating new opportunities for live performances.</p>
        
        <p>"This partnership represents a major step forward in our mission to help independent artists build sustainable careers," said Paul Saunders, Founder and CEO of TrueFans CONNECT™. "Access to quality venues is one of the biggest challenges independent artists face, and we're now removing that barrier by connecting our artists directly with hundreds of performance spaces across the country."</p>
        
        <p>The venue network includes a diverse range of spaces, from intimate coffee shops and bars to mid-sized theaters and outdoor event spaces in over 50 cities. Through the partnership, venue owners will gain access to TrueFans CONNECT™'s roster of verified artists, complete with performance metrics, fan engagement data, and sample performances.</p>
        
        <p>"We're excited to partner with TrueFans CONNECT™ to bring fresh talent to our venues," said Jennifer Martinez, CEO of the Open Mic network. "Their platform provides us with valuable data about artists' draw and engagement, making it easier for our venue managers to book acts that will resonate with local audiences. It's a more efficient system that benefits both artists and venues."</p>
        
        <p>Key features of the partnership include:</p>
        <ul>
          <li>Direct booking requests through the TrueFans CONNECT™ platform</li>
          <li>Standardized contracts and payment processing</li>
          <li>Venue-specific promotion tools for artists</li>
          <li>Performance analytics for venues</li>
          <li>Fan notification system for local shows</li>
        </ul>
        
        <p>"Before TrueFans CONNECT™, I was spending hours every week cold-emailing venues, often with no response," said Eliza Chen, an independent folk artist from Portland. "Now I can see which venues in my area are looking for artists like me, send a booking request with all my materials already attached, and get a response within days. It's completely changed how I tour."</p>
        
        <p>The venue booking feature is now live on the TrueFans CONNECT™ platform, with the full integration of all network venues expected to be complete by the end of October 2024.</p>
        
        <p>"This is just the beginning of our venue partnership strategy," added Saunders. "We plan to expand to international venues by early 2025, creating a global network of performance opportunities for independent artists."</p>
      `
    }
  }
  
  const pressRelease = pressReleaseData[id]
  
  if (!pressRelease) {
    return (
      <PageTransition>
        <Container>
          <NotFoundMessage>Press release not found</NotFoundMessage>
          <BackButton as={Link} to="/press">Back to Press</BackButton>
        </Container>
      </PageTransition>
    )
  }
  
  return (
    <PageTransition>
      <HeroSection>
        <HeroImage src={pressRelease.image} alt={pressRelease.title} />
        <HeroOverlay>
          <Container>
            <HeroContent>
              <PressReleaseDate>{pressRelease.date}</PressReleaseDate>
              <HeroTitle>{pressRelease.title}</HeroTitle>
            </HeroContent>
          </Container>
        </HeroOverlay>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <PressContent dangerouslySetInnerHTML={{ __html: pressRelease.content }} />
          <ContactInfo>
            <ContactTitle>Media Contact:</ContactTitle>
            <ContactName>Paul Saunders, Founder & CEO</ContactName>
            <ContactEmail>paul@truefansconnect.com</ContactEmail>
            <ContactPhone>1-602-577-6556</ContactPhone>
          </ContactInfo>
          <BackButton as={Link} to="/press">Back to Press</BackButton>
        </Container>
      </ContentSection>
    </PageTransition>
  )
}

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  color: white;
  overflow: hidden;
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(26, 43, 76, 0.85), rgba(26, 43, 76, 0.85));
  display: flex;
  align-items: center;
  justify-content: center;
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

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
`

const PressReleaseDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const PressContent = styled.div`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space.xl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  
  p {
    margin-bottom: ${({ theme }) => theme.space.lg};
  }
  
  ul {
    margin-bottom: ${({ theme }) => theme.space.lg};
    padding-left: ${({ theme }) => theme.space.xl};
  }
  
  li {
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
  
  strong {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
`

const ContactInfo = styled.div`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
`

const ContactTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const ContactName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ContactEmail = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ContactPhone = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
`

const BackButton = styled(Button)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  color: white;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkNavy};
    text-decoration: none;
  }
`

const NotFoundMessage = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  text-align: center;
  margin: ${({ theme }) => theme.space.xxl} 0;
`

export default PressRelease
