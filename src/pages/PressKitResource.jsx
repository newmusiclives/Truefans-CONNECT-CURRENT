import React from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const PressKitResource = () => {
  const { slug } = useParams()
  
  // Mock data for press kit resources
  const pressKitResources = {
    "fact-sheet": {
      id: 1,
      title: "Company Fact Sheet",
      description: "Key information about TrueFans CONNECT™, our mission, and our vision.",
      icon: "📄",
      content: `
        <h1>TrueFans CONNECT™ Fact Sheet</h1>
        
        <h2>Company Overview</h2>
        <p><strong>Company Name:</strong> TrueFans CONNECT™</p>
        <p><strong>Founded:</strong> 2023</p>
        <p><strong>Headquarters:</strong> Nashville, Tennessee</p>
        <p><strong>Leadership:</strong></p>
        <ul>
          <li>Sarah Johnson, CEO & Co-Founder</li>
          <li>Michael Chen, CTO & Co-Founder</li>
          <li>Emily Rodriguez, Head of Community</li>
          <li>David Williams, Head of Artist Relations</li>
          <li>Alex Thompson, Director of Business Development</li>
        </ul>
        
        <h2>Mission Statement</h2>
        <p>TrueFans CONNECT™ is building infrastructure for a more equitable creator economy, where independent artists can build sustainable careers through direct relationships with their most dedicated supporters.</p>
        
        <h2>Platform Overview</h2>
        <p>TrueFans CONNECT™ is developing a platform that will transform how independent artists connect with and receive support from their fans. Key features include:</p>
        <ul>
          <li><strong>Direct Support Mechanisms:</strong> Multiple ways for fans to financially contribute to artists they believe in</li>
          <li><strong>Exclusive Content Sharing:</strong> Tools for artists to share special content with their supporters</li>
          <li><strong>Community Building:</strong> Features that facilitate meaningful interactions between artists and fans</li>
          <li><strong>Venue Network:</strong> Connections between artists and performance opportunities</li>
          <li><strong>Affiliate Program:</strong> Two-tier system allowing artists to earn passive income through platform referrals</li>
        </ul>
        
        <h2>Key Differentiators</h2>
        <ul>
          <li><strong>Artist-First Economics:</strong> 80% of all fan contributions go directly to artists</li>
          <li><strong>Comprehensive Ecosystem:</strong> Addressing multiple artist needs in one integrated platform</li>
          <li><strong>Music Industry Focus:</strong> Built specifically for the unique needs of independent musicians</li>
          <li><strong>Data Transparency:</strong> Providing artists with comprehensive analytics about their supporters</li>
          <li><strong>Community Emphasis:</strong> Facilitating connections among artists as well as between artists and fans</li>
        </ul>
        
        <h2>Development Status</h2>
        <p>TrueFans CONNECT™ is currently in beta testing with a select group of independent artists and dedicated music fans. The platform is scheduled for public launch in mid-2025.</p>
        
        <h2>Target Users</h2>
        <p><strong>Artists:</strong> Independent musicians across genres who want to build sustainable careers through direct fan relationships</p>
        <p><strong>Fans:</strong> Dedicated music supporters who want to directly contribute to artists they love and receive exclusive benefits in return</p>
        
        <h2>Business Model</h2>
        <p>TrueFans CONNECT™ will generate revenue through a 20% platform fee on fan contributions, with 80% going directly to artists. There are no hidden fees or additional costs beyond standard payment processing charges.</p>
        
        <h2>Contact Information</h2>
        <p><strong>Press Inquiries:</strong> press@truefans.connect</p>
        <p><strong>General Information:</strong> info@truefans.connect</p>
        <p><strong>Website:</strong> www.truefans.connect</p>
      `
    },
    "brand-assets": {
      id: 2,
      title: "Brand Assets",
      description: "Logos, color palette, and brand guidelines for media use.",
      icon: "🎨",
      content: `
        <h1>TrueFans CONNECT™ Brand Assets</h1>
        
        <h2>Logo Usage Guidelines</h2>
        <p>The TrueFans CONNECT™ logo is the primary visual identifier of our brand. Please follow these guidelines when using our logo:</p>
        
        <h3>Logo Versions</h3>
        <p>The TrueFans CONNECT™ logo is available in the following versions:</p>
        <ul>
          <li>Primary logo (full color)</li>
          <li>Reversed logo (white for dark backgrounds)</li>
          <li>Monochrome logo (black)</li>
          <li>Icon only (for space-constrained applications)</li>
        </ul>
        
        <h3>Clear Space</h3>
        <p>Always maintain a minimum clear space around the logo equal to the height of the "T" in "TrueFans" to ensure visual impact and legibility.</p>
        
        <h3>Minimum Size</h3>
        <p>To ensure legibility, do not reproduce the logo smaller than 1 inch (25.4mm) in width for print or 100 pixels for digital applications.</p>
        
        <h3>Logo Misuse</h3>
        <p>Please do not:</p>
        <ul>
          <li>Alter the colors of the logo</li>
          <li>Stretch or distort the logo</li>
          <li>Add effects such as shadows or outlines</li>
          <li>Place the logo on busy backgrounds that reduce legibility</li>
          <li>Rotate or tilt the logo</li>
          <li>Separate or rearrange logo elements</li>
        </ul>
        
        <h2>Brand Colors</h2>
        
        <h3>Primary Colors</h3>
        <ul>
          <li><strong>TrueFans Blue:</strong> #1E3A8A (RGB: 30, 58, 138)</li>
          <li><strong>TrueFans Gold:</strong> #F59E0B (RGB: 245, 158, 11)</li>
        </ul>
        
        <h3>Secondary Colors</h3>
        <ul>
          <li><strong>Deep Navy:</strong> #0F172A (RGB: 15, 23, 42)</li>
          <li><strong>Light Blue:</strong> #BFDBFE (RGB: 191, 219, 254)</li>
          <li><strong>Warm Gray:</strong> #F3F4F6 (RGB: 243, 244, 246)</li>
        </ul>
        
        <h3>Accent Colors</h3>
        <ul>
          <li><strong>Success Green:</strong> #10B981 (RGB: 16, 185, 129)</li>
          <li><strong>Alert Red:</strong> #EF4444 (RGB: 239, 68, 68)</li>
          <li><strong>Warning Amber:</strong> #F59E0B (RGB: 245, 158, 11)</li>
        </ul>
        
        <h2>Typography</h2>
        
        <h3>Primary Font: Inter</h3>
        <p>Inter is our primary typeface for all communications. It should be used for headlines, body copy, and UI elements.</p>
        <ul>
          <li>Headlines: Inter Bold</li>
          <li>Subheadings: Inter SemiBold</li>
          <li>Body Copy: Inter Regular</li>
          <li>UI Elements: Inter Medium</li>
        </ul>
        
        <h3>Secondary Font: Playfair Display</h3>
        <p>Playfair Display is used sparingly for special headings and pull quotes to add visual interest and contrast.</p>
        
        <h2>Brand Voice</h2>
        <p>The TrueFans CONNECT™ brand voice is:</p>
        <ul>
          <li><strong>Authentic:</strong> Honest, transparent, and genuine</li>
          <li><strong>Supportive:</strong> Encouraging, helpful, and empowering</li>
          <li><strong>Knowledgeable:</strong> Informed, insightful, but never condescending</li>
          <li><strong>Inclusive:</strong> Welcoming to all, regardless of background or experience level</li>
        </ul>
        
        <h2>Trademark Usage</h2>
        <p>Always use the TrueFans CONNECT™ name with the trademark symbol (™) on first mention in any document or webpage. Subsequent mentions in the same document do not require the symbol.</p>
        
        <h2>Downloading Brand Assets</h2>
        <p>A complete brand asset package including logo files, color swatches, and font recommendations is available for download. Please contact press@truefans.connect to request access.</p>
        
        <h2>Questions</h2>
        <p>For questions about brand usage or to request additional assets, please contact our marketing team at brand@truefans.connect.</p>
      `
    },
    "executive-bios": {
      id: 3,
      title: "Executive Bios",
      description: "Biographies and headshots of our leadership team.",
      icon: "👥",
      content: `
        <h1>TrueFans CONNECT™ Executive Team</h1>
        
        <div class="executive">
          <h2>Sarah Johnson</h2>
          <h3>CEO & Co-Founder</h3>
          
          <p>Sarah Johnson brings over 15 years of experience in the music industry to her role as CEO of TrueFans CONNECT™. Prior to co-founding the company, Sarah served as an artist manager for independent musicians and as a digital strategy consultant for several music technology startups.</p>
          
          <p>Her career began at a major record label, where she witnessed firsthand the challenges facing artists in the traditional industry model. This experience inspired her to explore alternative approaches that would better serve independent creators.</p>
          
          <p>As an artist manager, Sarah developed innovative direct-to-fan strategies that helped her clients build sustainable careers outside the traditional label system. These experiences informed her vision for TrueFans CONNECT™ as a platform that would systematize and scale these approaches for artists at all career stages.</p>
          
          <p>Sarah holds a B.A. in Music Business from Berklee College of Music and an MBA from Vanderbilt University. She is a frequent speaker at music industry conferences on topics related to artist development, fan engagement, and the future of music monetization.</p>
          
          <p>"My mission is to create infrastructure that enables more artists to build sustainable careers on their own terms," says Johnson. "The traditional industry wasn't designed to serve the vast middle class of working musicians. We're building TrueFans CONNECT™ to fill that gap."</p>
        </div>
        
        <div class="executive">
          <h2>Michael Chen</h2>
          <h3>CTO & Co-Founder</h3>
          
          <p>Michael Chen leads technology development at TrueFans CONNECT™, bringing extensive experience in building scalable platforms and marketplace solutions. Before co-founding the company, Michael worked as a senior software engineer at several major technology companies, where he specialized in payment systems and community-building features.</p>
          
          <p>An amateur musician himself, Michael became interested in music technology after experiencing the disconnect between streaming numbers and actual revenue for independent artists. This interest led him to explore how technology could create more direct connections between creators and their supporters.</p>
          
          <p>At TrueFans CONNECT™, Michael has assembled a development team focused on building robust, user-friendly systems that make it seamless for fans to support artists they love. His technical leadership ensures the platform can scale effectively while maintaining the personal connections that are central to the company's mission.</p>
          
          <p>Michael holds a B.S. in Computer Science from MIT and an M.S. in Human-Computer Interaction from Stanford University. He is passionate about applying technology to solve real-world problems in creative industries.</p>
          
          <p>"Technology should serve human connections, not replace them," says Chen. "We're building systems that facilitate meaningful relationships between artists and fans, using tech to remove friction rather than create distance."</p>
        </div>
        
        <div class="executive">
          <h2>Emily Rodriguez</h2>
          <h3>Head of Community</h3>
          
          <p>Emily Rodriguez oversees community development and engagement at TrueFans CONNECT™. With a background in fan community management for independent artists and music festivals, Emily brings deep expertise in fostering meaningful connections between creators and their audiences.</p>
          
          <p>Before joining TrueFans CONNECT™, Emily managed online communities for several successful independent musicians, helping them build dedicated fan bases that provided sustainable support. She also served as community director for a regional music festival, where she developed programs that strengthened connections between artists and attendees.</p>
          
          <p>At TrueFans CONNECT™, Emily leads initiatives to ensure the platform fosters genuine community rather than merely transactional relationships. Her team develops features and programs that help artists engage meaningfully with their supporters and build lasting connections.</p>
          
          <p>Emily holds a B.A. in Communications from New York University with a focus on digital communities. She is an advocate for inclusive community-building practices that welcome diverse voices and perspectives.</p>
          
          <p>"The most valuable thing we can create is a sense of genuine connection," says Rodriguez. "When fans feel truly connected to artists and their work, they become partners in the creative journey rather than just consumers."</p>
        </div>
        
        <div class="executive">
          <h2>David Williams</h2>
          <h3>Head of Artist Relations</h3>
          
          <p>David Williams leads artist partnerships and support at TrueFans CONNECT™. With over a decade of experience in artist management and development, David ensures the platform meets the real-world needs of independent musicians at all career stages.</p>
          
          <p>Prior to joining TrueFans CONNECT™, David managed a roster of independent artists across multiple genres, helping them navigate the evolving music landscape. He also served as an artist development consultant for an independent record label, where he created programs to help emerging artists build sustainable careers.</p>
          
          <p>At TrueFans CONNECT™, David oversees artist onboarding, education, and support. His team works directly with creators to help them maximize the platform's value and build meaningful connections with their supporters.</p>
          
          <p>David holds a B.A. in Music Industry Studies from Loyola University New Orleans. He is an active musician himself, which gives him firsthand understanding of the challenges independent artists face.</p>
          
          <p>"Artists need partners, not gatekeepers," says Williams. "We're building TrueFans CONNECT™ to be the kind of platform I wish had existed when I was managing artists—one that truly understands and serves creators' needs."</p>
        </div>
        
        <div class="executive">
          <h2>Alex Thompson</h2>
          <h3>Director of Business Development</h3>
          
          <p>Alex Thompson leads partnership initiatives and business growth at TrueFans CONNECT™. With experience spanning music venues, festivals, and technology platforms, Alex brings valuable perspective on creating mutually beneficial relationships across the music ecosystem.</p>
          
          <p>Before joining TrueFans CONNECT™, Alex served as partnerships director for a network of independent music venues, where he developed programs connecting emerging artists with performance opportunities. He also worked in business development for a music technology startup focused on live event discovery.</p>
          
          <p>At TrueFans CONNECT™, Alex is developing the Venue Network feature that will connect platform artists with performance opportunities. He also leads initiatives to create strategic partnerships that add value to the platform ecosystem.</p>
          
          <p>Alex holds a B.S. in Business Administration from the University of Tennessee with a concentration in entrepreneurship. He is passionate about creating sustainable business models that support creative expression.</p>
          
          <p>"The most exciting partnerships create value for everyone involved," says Thompson. "We're building connections that benefit artists, venues, fans, and other stakeholders in ways that strengthen the entire independent music ecosystem."</p>
        </div>
        
        <h2>Media Contact</h2>
        <p>For interview requests or additional information about the TrueFans CONNECT™ leadership team, please contact:</p>
        <p>press@truefans.connect<br>(555) 123-4567</p>
      `
    },
    "platform-screenshots": {
      id: 4,
      title: "Platform Screenshots",
      description: "High-resolution images of the TrueFans CONNECT™ platform.",
      icon: "📱",
      content: `
        <h1>TrueFans CONNECT™ Platform Screenshots</h1>
        
        <p>The following screenshots provide a preview of the TrueFans CONNECT™ platform currently in beta testing. These images may be used by media outlets when covering TrueFans CONNECT™. All images are available in high resolution upon request.</p>
        
        <div class="screenshot-section">
          <h2>Artist Profile</h2>
          <div class="screenshot">
            <img src="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg" alt="Artist Profile Screenshot" />
            <p>The artist profile page showcases the musician's work, upcoming events, and support options.</p>
          </div>
        </div>
        
        <div class="screenshot-section">
          <h2>Fan Dashboard</h2>
          <div class="screenshot">
            <img src="https://images.pexels.com/photos/5053743/pexels-photo-5053743.jpeg" alt="Fan Dashboard Screenshot" />
            <p>The fan dashboard provides access to exclusive content from supported artists and tracks contribution history.</p>
          </div>
        </div>
        
        <div class="screenshot-section">
          <h2>Direct Support Interface</h2>
          <div class="screenshot">
            <img src="https://images.pexels.com/photos/5053741/pexels-photo-5053741.jpeg" alt="Direct Support Interface Screenshot" />
            <p>The support interface allows fans to contribute directly to artists through various options.</p>
          </div>
        </div>
        
        <div class="screenshot-section">
          <h2>Exclusive Content Library</h2>
          <div class="screenshot">
            <img src="https://images.pexels.com/photos/5053742/pexels-photo-5053742.jpeg" alt="Exclusive Content Library Screenshot" />
            <p>Artists can share exclusive music, videos, and behind-the-scenes content with their supporters.</p>
          </div>
        </div>
        
        <div class="screenshot-section">
          <h2>Artist Analytics Dashboard</h2>
          <div class="screenshot">
            <img src="https://images.pexels.com/photos/5053744/pexels-photo-5053744.jpeg" alt="Artist Analytics Dashboard Screenshot" />
            <p>The analytics dashboard provides artists with insights about their supporters and engagement.</p>
          </div>
        </div>
        
        <div class="screenshot-section">
          <h2>Venue Network</h2>
          <div class="screenshot">
            <img src="https://images.pexels.com/photos/5053745/pexels-photo-5053745.jpeg" alt="Venue Network Screenshot" />
            <p>The Venue Network feature connects artists with performance opportunities at venues across the country.</p>
          </div>
        </div>
        
        <div class="screenshot-section">
          <h2>Mobile Experience</h2>
          <div class="screenshot">
            <img src="https://images.pexels.com/photos/5053746/pexels-photo-5053746.jpeg" alt="Mobile Experience Screenshot" />
            <p>The TrueFans CONNECT™ platform is fully responsive, providing a seamless experience on mobile devices.</p>
          </div>
        </div>
        
        <h2>Usage Guidelines</h2>
        <p>When using these screenshots in media coverage, please:</p>
        <ul>
          <li>Credit "TrueFans CONNECT™" in the caption or image credit</li>
          <li>Do not crop, alter, or modify the screenshots in ways that misrepresent the platform</li>
          <li>Note that these images represent a beta version, and the final product may differ</li>
        </ul>
        
        <h2>Additional Resources</h2>
        <p>For high-resolution versions of these screenshots or to request additional visuals, please contact:</p>
        <p>press@truefans.connect<br>(555) 123-4567</p>
      `
    },
    "case-studies": {
      id: 5,
      title: "Case Studies",
      description: "Detailed stories of beta testers using our platform.",
      icon: "📊",
      content: `
        <h1>TrueFans CONNECT™ Beta Tester Case Studies</h1>
        
        <p>The following case studies highlight the experiences of selected artists participating in the TrueFans CONNECT™ beta testing program. These stories illustrate how independent musicians are using the platform to build stronger fan relationships and create more sustainable revenue streams.</p>
        
        <div class="case-study">
          <h2>Case Study 1: Sophia Williams, Folk Singer-Songwriter</h2>
          
          <h3>Background</h3>
          <p>Sophia Williams is an independent folk singer-songwriter based in Portland, Oregon. Prior to joining the TrueFans CONNECT™ beta program, Sophia had released two EPs and built a modest following through live performances and streaming platforms. Despite having over 500,000 cumulative streams, her streaming revenue averaged less than $200 per month.</p>
          
          <h3>Challenge</h3>
          <p>Sophia faced several challenges common to independent artists:</p>
          <ul>
            <li>Limited revenue from streaming despite significant listener numbers</li>
            <li>Difficulty identifying her most engaged fans among casual listeners</li>
            <li>No direct way to share exclusive content with dedicated supporters</li>
            <li>Inconsistent income making it difficult to plan recording projects</li>
          </ul>
          
          <h3>TrueFans CONNECT™ Implementation</h3>
          <p>As a beta tester, Sophia set up her TrueFans CONNECT™ profile with:</p>
          <ul>
            <li>Three support tiers offering different levels of exclusive content and perks</li>
            <li>A digital songwriting journal sharing her creative process</li>
            <li>Monthly livestreamed acoustic sessions for supporters</li>
            <li>Early access to new recordings before public release</li>
          </ul>
          
          <h3>Results</h3>
          <p>After three months on the platform, Sophia has experienced significant positive outcomes:</p>
          <ul>
            <li>Converted 87 listeners into direct supporters across various tiers</li>
            <li>Generated $1,240 in monthly recurring support (compared to $200 from streaming)</li>
            <li>Received valuable feedback on new material from her most dedicated fans</li>
            <li>Built deeper connections with supporters through direct interactions</li>
            <li>Gained enough financial stability to plan her first full-length album</li>
          </ul>
          
          <h3>Artist Perspective</h3>
          <p>"What's been most valuable isn't just the financial support, though that's certainly significant," says Williams. "It's the direct connection with the people who most deeply connect with my music. Their feedback and encouragement have become an important part of my creative process, and knowing I have their consistent support gives me the freedom to create more authentically."</p>
        </div>
        
        <div class="case-study">
          <h2>Case Study 2: Marcus Rivera, Hip-Hop Artist</h2>
          
          <h3>Background</h3>
          <p>Marcus Rivera is an independent hip-hop artist from Atlanta, Georgia. Before joining the TrueFans CONNECT™ beta program, Marcus had released several singles and one mixtape, building a following primarily through social media and video platforms. While he had a highly engaged audience, monetization was a challenge.</p>
          
          <h3>Challenge</h3>
          <p>Marcus faced several specific challenges:</p>
          <ul>
            <li>High engagement metrics but limited conversion to revenue</li>
            <li>Reliance on merchandise sales at infrequent live shows</li>
            <li>No sustainable way to monetize his creative process between releases</li>
            <li>Limited resources for producing professional-quality music videos</li>
          </ul>
          
          <h3>TrueFans CONNECT™ Implementation</h3>
          <p>Marcus approached the platform with a content-focused strategy:</p>
          <ul>
            <li>Weekly behind-the-scenes videos showing his production process</li>
            <li>A support goal focused on funding his next music video</li>
            <li>Exclusive tracks and remixes available only to supporters</li>
            <li>Direct messaging with top-tier supporters for feedback on works in progress</li>
          </ul>
          
          <h3>Results</h3>
          <p>After four months as a beta tester, Marcus has seen significant benefits:</p>
          <ul>
            <li>Attracted 142 direct supporters from his existing fan base</li>
            <li>Reached his funding goal for a professional music video within 6 weeks</li>
            <li>Created a more consistent monthly income averaging $1,850</li>
            <li>Developed closer relationships with his core audience</li>
            <li>Received valuable creative feedback that improved his recent releases</li>
          </ul>
          
          <h3>Artist Perspective</h3>
          <p>"This platform has completely changed how I think about my career," says Rivera. "Instead of chasing viral moments or trying to game algorithms, I can focus on creating quality music and genuine connections with the people who actually support me financially. The direct feedback from my supporters has made my music better, and the consistent income means I can invest more in my craft."</p>
        </div>
        
        <div class="case-study">
          <h2>Case Study 3: Resonance Collective, Indie Rock Band</h2>
          
          <h3>Background</h3>
          <p>Resonance Collective is a four-member indie rock band based in Chicago, Illinois. Prior to joining the TrueFans CONNECT™ beta program, the band had released one album and built a regional following through live performances. They struggled with the financial challenges of touring as an independent act.</p>
          
          <h3>Challenge</h3>
          <p>As a band, Resonance Collective faced unique challenges:</p>
          <ul>
            <li>High costs associated with touring (vehicle, accommodations, etc.)</li>
            <li>Difficulty maintaining connection with fans between tour cycles</li>
            <li>Limited budget for recording new material</li>
            <li>Need to generate enough income to support four members</li>
          </ul>
          
          <h3>TrueFans CONNECT™ Implementation</h3>
          <p>The band utilized the platform with a collaborative approach:</p>
          <ul>
            <li>Created support tiers with band-specific perks (virtual hangouts, house shows)</li>
            <li>Established a recording fund with transparent goals and updates</li>
            <li>Shared individual members' side projects and solo material</li>
            <li>Used the Venue Network feature to identify new performance opportunities</li>
          </ul>
          
          <h3>Results</h3>
          <p>After five months on the platform, Resonance Collective has experienced:</p>
          <ul>
            <li>Built a base of 215 direct supporters providing consistent monthly income</li>
            <li>Fully funded their upcoming EP three months ahead of schedule</li>
            <li>Booked seven new venue shows through the platform's Venue Network</li>
            <li>Maintained stronger engagement with fans between tour cycles</li>
            <li>Created a more sustainable economic model for all band members</li>
          </ul>
          
          <h3>Artist Perspective</h3>
          <p>"As a band, the economics are particularly challenging because any income is split multiple ways," explains lead vocalist Jamie Chen. "TrueFans CONNECT™ has created a foundation of support that makes everything else more sustainable. We can be more selective about which shows we play, invest more in our recordings, and connect more meaningfully with the people who value our music most. It's transformed our approach to building a career as a band."</p>
        </div>
        
        <h2>Key Insights from Beta Testing</h2>
        <p>These case studies highlight several consistent themes emerging from the TrueFans CONNECT™ beta program:</p>
        <ul>
          <li><strong>Quality Over Quantity:</strong> A smaller number of dedicated supporters often provides more value than a large number of casual listeners</li>
          <li><strong>Content Consistency:</strong> Regular engagement with exclusive content strengthens fan relationships and support</li>
          <li><strong>Feedback Loop:</strong> Direct interaction with supporters improves creative output and audience connection</li>
          <li><strong>Financial Stability:</strong> Predictable income allows for better career planning and creative investment</li>
          <li><strong>Authentic Connection:</strong> Genuine relationships with supporters create both emotional and financial sustainability</li>
        </ul>
        
        <h2>Media Contact</h2>
        <p>For more information about these case studies or to arrange interviews with beta testers, please contact:</p>
        <p>Emily Rodriguez<br>Head of Community, TrueFans CONNECT™<br>press@truefans.connect<br>(555) 123-4567</p>
      `
    }
  }
  
  // Find the current resource
  const resource = pressKitResources[slug]
  
  if (!resource) {
    return (
      <PageTransition>
        <Container>
          <NotFoundSection>
            <NotFoundTitle>Resource Not Found</NotFoundTitle>
            <NotFoundText>The press kit resource you're looking for doesn't exist or has been moved.</NotFoundText>
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
            <ResourceIcon>{resource.icon}</ResourceIcon>
            <HeroTitle>{resource.title}</HeroTitle>
            <HeroDescription>{resource.description}</HeroDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ResourceSection>
        <Container>
          <ResourceContainer>
            <ResourceContent dangerouslySetInnerHTML={{ __html: resource.content }} />
            
            <DownloadSection>
              <DownloadTitle>Download Resources</DownloadTitle>
              <DownloadText>
                For high-resolution versions of these materials or additional resources, please contact our press team.
              </DownloadText>
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
            </DownloadSection>
            
            <BackToPress as={Link} to="/press">← Back to Press Kit</BackToPress>
          </ResourceContainer>
        </Container>
      </ResourceSection>
      
      <MoreResourcesSection>
        <Container>
          <SectionTitle>More Press Kit Resources</SectionTitle>
          <ResourcesGrid>
            {Object.values(pressKitResources)
              .filter(r => r.id !== resource.id)
              .map(r => (
                <ResourceCard key={r.id}>
                  <ResourceCardIcon>{r.icon}</ResourceCardIcon>
                  <ResourceCardContent>
                    <ResourceCardTitle>{r.title}</ResourceCardTitle>
                    <ResourceCardDescription>{r.description}</ResourceCardDescription>
                    <ViewResourceLink as={Link} to={`/press-kit/${Object.keys(pressKitResources).find(key => pressKitResources[key].id === r.id)}`}>
                      View Resource →
                    </ViewResourceLink>
                  </ResourceCardContent>
                </ResourceCard>
              ))}
          </ResourcesGrid>
        </Container>
      </MoreResourcesSection>
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

const ResourceIcon = styled.div`
  font-size: 64px;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  opacity: 0.9;
`

const ResourceSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const ResourceContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ResourceContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.darkText};
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space.lg};
    color: ${({ theme }) => theme.colors.darkText};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin: ${({ theme }) => theme.space.xl} 0 ${({ theme }) => theme.space.md};
    color: ${({ theme }) => theme.colors.darkText};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin: ${({ theme }) => theme.space.lg} 0 ${({ theme }) => theme.space.sm};
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
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.radii.md};
    margin: ${({ theme }) => theme.space.md} 0;
  }
  
  .case-study, .executive, .screenshot-section {
    margin-bottom: ${({ theme }) => theme.space.xl};
    padding-bottom: ${({ theme }) => theme.space.lg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  .screenshot {
    background-color: ${({ theme }) => theme.colors.lightGray};
    padding: ${({ theme }) => theme.space.md};
    border-radius: ${({ theme }) => theme.radii.md};
    
    p {
      margin-top: ${({ theme }) => theme.space.md};
      font-style: italic;
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
`

const DownloadSection = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
`

const DownloadTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const DownloadText = styled.p`
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

const ContactText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
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

const MoreResourcesSection = styled.section`
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

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
`

const ResourceCard = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const ResourceCardIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-right: ${({ theme }) => theme.space.lg};
  flex-shrink: 0;
`

const ResourceCardContent = styled.div`
  flex: 1;
`

const ResourceCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const ResourceCardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ViewResourceLink = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
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

export default PressKitResource
