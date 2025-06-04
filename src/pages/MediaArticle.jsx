import React from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const MediaArticle = () => {
  const { slug } = useParams()
  
  // Mock data for media articles
  const mediaArticles = {
    "music-industry-today-article": {
      id: 1,
      outlet: "Music Industry Today",
      title: "How TrueFans CONNECT™ Plans to Change the Game for Independent Artists",
      date: "November 28, 2024",
      author: "Jessica Martinez",
      authorTitle: "Senior Music Industry Correspondent",
      image: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",
      content: `
        <p class="lead">In an industry dominated by streaming giants and major labels, a new platform called TrueFans CONNECT™ is developing an alternative approach focused on direct artist-fan relationships. Currently in beta testing, the platform aims to provide independent artists with sustainable revenue streams and deeper connections with their most dedicated supporters.</p>
        
        <p>For decades, the music industry has operated on a model that often leaves independent artists struggling to make ends meet. Streaming services pay fractions of a penny per play, and traditional record deals frequently require artists to surrender ownership of their work in exchange for advances and marketing support.</p>
        
        <p>"The current system works well for the top 1% of artists, but leaves the vast majority undercompensated for their creative work," explains Sarah Johnson, CEO of TrueFans CONNECT™. "We're building an alternative that prioritizes fair compensation and direct relationships."</p>
        
        <h2>A New Approach to Artist Support</h2>
        
        <p>TrueFans CONNECT™ is developing a platform that will allow fans to directly support artists they love through various contribution models. Unlike crowdfunding platforms that focus on one-time projects, TrueFans CONNECT™ aims to facilitate ongoing support relationships.</p>
        
        <p>"We're creating an ecosystem where artists can build sustainable careers with the direct support of their most passionate fans," Johnson told Music Industry Today. "The platform will offer multiple ways for fans to contribute, from monthly support to one-time contributions, all with 80% of revenue going directly to creators."</p>
        
        <p>This approach represents a significant departure from the traditional industry model, where multiple intermediaries typically reduce the percentage of revenue that reaches artists.</p>
        
        <p>Michael Chen, CTO and co-founder, emphasized the technology's role in facilitating these connections: "We're building tools that make it easy for artists to share exclusive content, engage meaningfully with supporters, and track the impact of fan contributions on their career development."</p>
        
        <h2>Beta Testing Underway</h2>
        
        <p>The company recently announced the launch of its beta testing program, with a select group of independent artists and dedicated music fans now actively using the platform.</p>
        
        <p>One of those beta testers, indie folk artist Sophia Williams, shared her early impressions: "What excites me most is how the platform focuses on quality over quantity. Instead of chasing millions of streams that generate minimal revenue, I can build meaningful relationships with the fans who most deeply connect with my music."</p>
        
        <p>Williams noted that the platform's emphasis on direct communication has already changed how she thinks about her career: "I'm spending less time worrying about algorithms and more time creating genuine connections with listeners who want to support my journey."</p>
        
        <h2>Industry Implications</h2>
        
        <p>Music industry analyst David Rodriguez sees platforms like TrueFans CONNECT™ as part of a broader shift in how artists build careers.</p>
        
        <p>"We're witnessing the unbundling of the traditional record label," Rodriguez explained. "Artists now have access to affordable recording technology, digital distribution, and direct marketing channels. What's been missing is a sustainable support model that doesn't rely on massive scale. That's the gap TrueFans CONNECT™ and similar platforms are trying to fill."</p>
        
        <p>Rodriguez noted that while such platforms won't replace major labels for artists seeking mainstream pop success, they could create viable alternatives for the vast middle class of working musicians.</p>
        
        <p>"Not every artist needs or wants to be a global superstar," he said. "Many would be content with a sustainable career making music for a dedicated audience. These direct support platforms could make that possible for many more creators."</p>
        
        <h2>Planned Features</h2>
        
        <p>According to company representatives, TrueFans CONNECT™ will include several key features when it launches to the public in 2025:</p>
        
        <ul>
          <li>Multiple support tiers allowing fans to contribute at different levels</li>
          <li>Tools for artists to share exclusive content with supporters</li>
          <li>Direct messaging capabilities between artists and fans</li>
          <li>Analytics dashboards helping artists understand their supporter base</li>
          <li>A two-tier affiliate program allowing artists to earn passive income through platform referrals</li>
          <li>A venue network connecting artists with performance opportunities</li>
        </ul>
        
        <p>Emily Rodriguez, Head of Community at TrueFans CONNECT™, emphasized that the platform is being built with extensive artist input: "Every feature we're developing comes from direct conversations with independent artists about their needs and challenges. We're taking an iterative approach, constantly refining based on feedback from our beta users."</p>
        
        <h2>Challenges and Competition</h2>
        
        <p>TrueFans CONNECT™ enters a competitive landscape that includes established platforms like Patreon, Bandcamp, and SubscribeStar, each offering different approaches to direct artist support.</p>
        
        <p>When asked about differentiation, Johnson pointed to the platform's comprehensive approach: "Rather than focusing solely on content subscriptions or merchandise sales, we're building an integrated ecosystem that addresses multiple artist needs—from fan relationships to venue connections to passive income opportunities."</p>
        
        <p>The company will face challenges in building the critical mass of both artists and fans needed to create a vibrant ecosystem. Rodriguez acknowledged this hurdle but expressed confidence in their approach: "We're focusing first on quality over quantity, ensuring an exceptional experience for our early users. As those artists and fans share their positive experiences, we expect organic growth to follow."</p>
        
        <h2>Looking Ahead</h2>
        
        <p>TrueFans CONNECT™ plans to expand its beta program in the coming months before a public launch in mid-2025. The company has indicated that while the initial focus is on musicians, the platform may eventually expand to support other creative disciplines.</p>
        
        <p>"The fundamental challenges facing independent musicians—fair compensation, direct audience connections, sustainable career paths—exist across creative fields," noted Johnson. "The model we're building has potential applications beyond music."</p>
        
        <p>For independent artists watching these developments, platforms like TrueFans CONNECT™ represent a potential shift in how creative careers can be built and sustained in the digital age—one that relies less on gatekeepers and algorithms, and more on direct connections with the people who most value their work.</p>
        
        <p><em>Jessica Martinez is Senior Music Industry Correspondent for Music Industry Today, covering the intersection of technology, business models, and artist development.</em></p>
      `
    },
    "tech-innovators-article": {
      id: 2,
      outlet: "Tech Innovators",
      title: "TrueFans CONNECT™: The Platform Aiming to Disrupt Traditional Music Revenue Models",
      date: "October 15, 2024",
      author: "Marcus Wong",
      authorTitle: "Technology & Business Reporter",
      image: "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg",
      content: `
        <p class="lead">A Nashville-based startup is developing a platform that could fundamentally change how independent musicians generate revenue and build sustainable careers. TrueFans CONNECT™, currently in beta testing, is creating an ecosystem that prioritizes direct artist-fan relationships over traditional industry models.</p>
        
        <p>The music industry has undergone massive disruption in the digital age. Physical album sales have plummeted, streaming has become dominant but pays artists minimal amounts per play, and touring—long considered the financial backbone for working musicians—was revealed as precarious during the pandemic.</p>
        
        <p>Against this backdrop, TrueFans CONNECT™ is building what its founders describe as "infrastructure for the creator middle class"—tools that allow musicians to build sustainable careers with direct support from their most dedicated fans.</p>
        
        <h2>The Technology Stack</h2>
        
        <p>At its core, TrueFans CONNECT™ is developing a sophisticated platform that combines several technological components:</p>
        
        <ul>
          <li><strong>Direct Support Infrastructure:</strong> Payment processing systems that facilitate recurring and one-time contributions from fans to artists</li>
          <li><strong>Content Management System:</strong> Tools for artists to share exclusive content with supporters</li>
          <li><strong>Community Engagement Features:</strong> Messaging and interaction capabilities that foster meaningful connections</li>
          <li><strong>Analytics Dashboard:</strong> Data visualization tools helping artists understand their supporter demographics and engagement patterns</li>
          <li><strong>Recommendation Algorithms:</strong> Systems to help fans discover artists they're likely to connect with and support</li>
        </ul>
        
        <p>"We're building technology that removes friction from the artist-fan relationship," explained Michael Chen, CTO and co-founder of TrueFans CONNECT™. "Our goal is to make it seamless for fans to directly support artists they love, while giving creators powerful tools to nurture those relationships."</p>
        
        <p>Chen, who previously worked at several major tech companies, emphasized that the platform's technology is being developed with scalability in mind: "We're building systems that can support artists at various career stages, from those with a few dozen dedicated fans to those with thousands of supporters."</p>
        
        <h2>The Business Model</h2>
        
        <p>TrueFans CONNECT™ plans to generate revenue by taking a 20% platform fee from fan contributions, with 80% going directly to artists. This represents a significantly higher payout percentage than most streaming platforms, which typically pay fractions of a penny per stream.</p>
        
        <p>"Our business model aligns our incentives with artists' success," said Sarah Johnson, CEO. "We only succeed when artists are able to generate meaningful support through the platform."</p>
        
        <p>The company recently announced plans for a two-tier affiliate program that will allow artists to earn passive income by referring other creators to the platform. This approach creates additional revenue opportunities for artists while potentially reducing customer acquisition costs for the company.</p>
        
        <p>"The affiliate program is designed to grow the ecosystem organically through trusted recommendations," explained David Williams, Head of Artist Relations. "Artists are more likely to join a platform that's recommended by peers they respect."</p>
        
        <h2>Market Positioning</h2>
        
        <p>TrueFans CONNECT™ enters a competitive landscape that includes established platforms like Patreon, Bandcamp, and SubscribeStar. When asked about differentiation, Johnson pointed to several key factors:</p>
        
        <p>"Unlike general creator platforms, we're building specifically for musicians, with features tailored to their unique needs," she said. "And unlike existing music platforms that focus primarily on content distribution or merchandise sales, we're creating a comprehensive ecosystem that addresses multiple aspects of an artist's career."</p>
        
        <p>The company is also developing a Venue Network feature that will connect artists with performance opportunities, addressing another critical need for independent musicians.</p>
        
        <p>"By combining direct fan support with venue connections, we're creating infrastructure for both digital and physical aspects of an artist's career," noted Alex Thompson, Director of Business Development. "This integrated approach sets us apart from more narrowly focused platforms."</p>
        
        <h2>The Development Process</h2>
        
        <p>TrueFans CONNECT™ is taking an iterative, user-centered approach to platform development. The company recently launched a beta testing program with a select group of artists and fans providing ongoing feedback.</p>
        
        <p>"We're building in public, with constant input from the creators who will use the platform," said Emily Rodriguez, Head of Community. "This ensures we're solving real problems rather than imposing our assumptions on users."</p>
        
        <p>The development team employs agile methodologies, with two-week sprint cycles and regular releases of new features to beta testers. This approach allows for rapid iteration based on user feedback.</p>
        
        <p>"Our development philosophy centers on continuous improvement," explained Chen. "Rather than spending years building a perfect product in isolation, we're getting real user feedback early and often, then refining based on actual usage patterns."</p>
        
        <h2>Funding and Growth Strategy</h2>
        
        <p>While the company has not disclosed specific funding details, Johnson indicated that TrueFans CONNECT™ has secured sufficient capital to support development through its planned public launch in 2025.</p>
        
        <p>"We've been fortunate to find investors who share our vision for a more equitable creator economy," she said. "They understand that we're building for long-term sustainability rather than rapid growth at all costs."</p>
        
        <p>The company's growth strategy focuses on quality over quantity in its initial phases. Rather than pursuing rapid user acquisition, TrueFans CONNECT™ is prioritizing exceptional experiences for early adopters.</p>
        
        <p>"We believe that by creating genuine value for our first users, we'll build advocates who drive organic growth," explained Rodriguez. "This approach may be slower initially, but creates a more sustainable foundation."</p>
        
        <h2>Industry Impact</h2>
        
        <p>If successful, platforms like TrueFans CONNECT™ could contribute to a broader restructuring of the music industry, creating viable alternatives to traditional career paths that rely on label deals and massive streaming numbers.</p>
        
        <p>"We're not trying to replace major labels or streaming services," Johnson emphasized. "Those models work well for certain types of artists and career goals. We're creating an alternative path for independent artists who want more control, better economics, and deeper fan relationships."</p>
        
        <p>Music industry analyst Jennifer Park sees potential in this approach: "The most interesting innovation happening in music right now isn't about discovery or distribution—it's about sustainable business models for the vast middle class of working musicians. Platforms that can crack that code could have significant impact on how creative careers develop in the coming decade."</p>
        
        <p>As TrueFans CONNECT™ continues development toward its 2025 launch, the company represents part of a broader trend toward infrastructure that empowers creators to build careers outside traditional gatekeeping systems—a trend that could reshape not just music, but creative industries more broadly.</p>
        
        <p><em>Marcus Wong covers technology startups and business model innovation for Tech Innovators.</em></p>
      `
    },
    "entrepreneur-weekly-interview": {
      id: 3,
      outlet: "Entrepreneur Weekly",
      title: "TrueFans CONNECT™ Founders on Building a More Equitable Music Industry",
      date: "September 22, 2024",
      author: "Alicia Johnson",
      authorTitle: "Senior Editor",
      image: "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg",
      content: `
        <p class="lead">In an exclusive interview with Entrepreneur Weekly, the founding team behind TrueFans CONNECT™ shares their vision for creating a more equitable music ecosystem and the entrepreneurial journey of building a platform that challenges industry norms.</p>
        
        <p>When Sarah Johnson and Michael Chen first met at a music tech hackathon in 2022, they discovered a shared frustration with how difficult it is for independent musicians to build sustainable careers. Johnson, a former artist manager, had seen talented clients struggle to make ends meet despite dedicated fan bases. Chen, a software engineer and amateur musician, was disappointed by how little of his streaming subscription payments actually reached the artists he loved.</p>
        
        <p>That chance meeting sparked a conversation that would eventually lead to TrueFans CONNECT™, a platform currently in development that aims to transform how independent artists generate revenue and connect with supporters.</p>
        
        <p>"We kept coming back to this fundamental problem," Johnson told Entrepreneur Weekly. "The current music industry is optimized for superstars and massive scale, but most artists will never reach that level—nor should they have to in order to make a living from their creativity."</p>
        
        <h2>From Concept to Company</h2>
        
        <p>The journey from initial concept to functioning company wasn't straightforward. Johnson and Chen spent six months conducting interviews with over 100 independent artists to deeply understand their challenges before writing a single line of code.</p>
        
        <p>"Those conversations were invaluable," Chen explained. "We heard consistent themes about the disconnect between streaming numbers and actual income, the challenge of identifying and connecting with true fans among casual listeners, and the desire for more direct relationships with supporters."</p>
        
        <p>Armed with these insights, the founders developed a prototype and began testing it with a small group of artists in early 2023. The positive response led them to incorporate the company and begin seeking seed funding.</p>
        
        <p>"We were fortunate to find investors who understood our vision," said Johnson. "They recognized that we weren't just building another music app—we were creating infrastructure for a more equitable creator economy."</p>
        
        <p>With initial funding secured, the team expanded to include Emily Rodriguez as Head of Community, David Williams as Head of Artist Relations, and Alex Thompson as Director of Business Development—each bringing relevant industry experience to the venture.</p>
        
        <h2>Building for Sustainability</h2>
        
        <p>Unlike many tech startups that prioritize rapid growth and user acquisition above all else, TrueFans CONNECT™ has taken a more measured approach focused on sustainability—both for the platform itself and for the artists it serves.</p>
        
        <p>"We're intentionally building a company that reflects our values," Johnson emphasized. "That means prioritizing fair compensation, meaningful relationships, and long-term sustainability over hyper-growth or quick exits."</p>
        
        <p>This philosophy extends to how the company approaches platform development. Rather than rushing to market with a minimum viable product, the team has invested in thorough testing and refinement with a limited group of beta users.</p>
        
        <p>"We're building something that artists will entrust their livelihoods and fan relationships to," explained Chen. "That responsibility demands thoughtfulness and care in how we develop the platform."</p>
        
        <p>The company recently announced plans for a two-tier affiliate program and a venue network feature—both designed to create additional value and revenue opportunities for artists on the platform.</p>
        
        <h2>Entrepreneurial Challenges</h2>
        
        <p>Building a platform that challenges established industry models hasn't been without obstacles. The founders shared several key challenges they've faced:</p>
        
        <p><strong>Balancing stakeholder needs:</strong> "We're creating a two-sided marketplace that needs to work for both artists and fans," noted Rodriguez. "Finding that balance requires constant attention and refinement."</p>
        
        <p><strong>Educating the market:</strong> "Many artists have become resigned to the current system," said Williams. "Part of our work is showing them that alternatives are possible and worth investing in."</p>
        
        <p><strong>Building trust:</strong> "The music industry has a long history of exploitative practices," Johnson acknowledged. "We have to earn trust through transparency, fair terms, and consistently putting artists first in our decisions."</p>
        
        <p><strong>Resource constraints:</strong> "Like any startup, we're building something ambitious with limited resources," said Chen. "That forces us to be extremely thoughtful about prioritization and focus."</p>
        
        <p>Despite these challenges, the team remains committed to their vision of creating a more equitable ecosystem for independent artists.</p>
        
        <h2>Lessons for Entrepreneurs</h2>
        
        <p>When asked what advice they would offer to other entrepreneurs looking to disrupt established industries, the founders shared several insights:</p>
        
        <p><strong>Start with deep understanding:</strong> "The six months we spent interviewing artists before building anything was the best investment we made," said Johnson. "That deep understanding of the problem space continues to guide every decision."</p>
        
        <p><strong>Find the right early adopters:</strong> "We've been very intentional about who we invite to our beta program," noted Rodriguez. "The right early users provide invaluable feedback and become advocates for your vision."</p>
        
        <p><strong>Build with, not for:</strong> "We see ourselves as building alongside our users, not creating something for them," explained Chen. "That collaborative approach leads to better products and stronger community."</p>
        
        <p><strong>Align incentives:</strong> "Our business model is designed so we only succeed when our artists succeed," said Thompson. "That alignment of incentives is critical for building trust and ensuring decisions serve all stakeholders."</p>
        
        <p><strong>Stay focused on core problems:</strong> "There's always pressure to add features or chase new opportunities," Williams observed. "Maintaining focus on solving your core problem well is crucial, especially with limited resources."</p>
        
        <h2>Looking Forward</h2>
        
        <p>As TrueFans CONNECT™ continues development toward a planned public launch in 2025, the founders remain focused on their mission of creating more sustainable paths for independent artists.</p>
        
        <p>"Success for us isn't just building a profitable company," Johnson emphasized. "It's creating a platform that enables thousands of artists to build sustainable careers on their own terms, connecting directly with the people who value their work most."</p>
        
        <p>Chen added: "We're building for the long term—both in how we approach the business and in the impact we hope to have on the broader creative economy. This isn't just about music; it's about creating models that fairly value creative work in the digital age."</p>
        
        <p>That vision—of a more equitable ecosystem for creative professionals—drives the team as they navigate the challenges of building a platform that challenges industry norms while creating value for both artists and their supporters.</p>
        
        <p>"Ultimately, we believe that connecting artists directly with their true fans creates better outcomes for everyone," concluded Johnson. "Artists earn more sustainable income, fans have more meaningful connections with creators they love, and more diverse voices can thrive in the ecosystem. That's the future we're working to build."</p>
        
        <p><em>Alicia Johnson is Senior Editor at Entrepreneur Weekly, covering innovative business models and startup culture.</em></p>
      `
    },
    "digital-music-news-article": {
      id: 4,
      outlet: "Digital Music News",
      title: "Artist-First Platforms: TrueFans CONNECT™ Proposes 80/20 Revenue Split",
      date: "August 10, 2024",
      author: "Ryan Thompson",
      authorTitle: "Industry Reporter",
      image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg",
      content: `
        <p class="lead">As streaming payouts remain a point of contention for working musicians, a new platform called TrueFans CONNECT™ is developing an alternative model that would give artists 80% of all revenue generated through direct fan support.</p>
        
        <p>The economics of music streaming have been under scrutiny for years. Major platforms typically pay artists between $0.003 and $0.005 per stream, meaning a song needs hundreds of thousands of plays to generate meaningful revenue. This model works for major artists with massive audiences but leaves most independent musicians struggling to convert listener numbers into sustainable income.</p>
        
        <p>TrueFans CONNECT™, currently in development and beta testing, proposes a fundamentally different approach focused on direct fan support rather than per-stream micropayments.</p>
        
        <p>"We're building a platform where the economics are centered on the relationship between artists and their most dedicated supporters," explained Sarah Johnson, CEO of TrueFans CONNECT™. "Instead of trying to generate pennies from thousands of casual listeners, we're creating tools that help artists generate meaningful support from their true fans."</p>
        
        <h2>The 80/20 Model</h2>
        
        <p>The platform's proposed revenue model would give artists 80% of all fan contributions, with the company retaining 20% as a platform fee. This represents a significantly higher payout percentage than most existing music platforms.</p>
        
        <p>For comparison:</p>
        <ul>
          <li>Spotify pays approximately 70% of revenue to rights holders (with artists often receiving only a fraction of that depending on their deals)</li>
          <li>Apple Music pays approximately 71.5% to rights holders</li>
          <li>YouTube pays approximately 55% of ad revenue to creators</li>
          <li>Bandcamp takes a 15% commission on digital sales (10% after an artist reaches $5,000 in sales)</li>
          <li>Patreon takes between 5-12% depending on the plan, plus payment processing fees</li>
        </ul>
        
        <p>"We believe 80% strikes the right balance," Johnson told Digital Music News. "It provides artists with the lion's share of fan contributions while giving us enough revenue to build and maintain a quality platform with the features artists need."</p>
        
        <p>The company emphasized that there would be no hidden fees or additional costs beyond the 20% platform fee and standard payment processing charges.</p>
        
        <h2>Beyond Percentages: Contribution Models</h2>
        
        <p>While the revenue split is significant, TrueFans CONNECT™ representatives emphasized that the more fundamental shift is in how fan support is structured.</p>
        
        <p>"The percentage matters, but what's more important is moving from micropayments per stream to meaningful contributions from dedicated fans," explained David Williams, Head of Artist Relations. "When fans directly support artists they love, the total amounts are typically much higher than what streaming generates."</p>
        
        <p>The platform plans to offer multiple contribution models:</p>
        <ul>
          <li>Monthly recurring support at various tiers</li>
          <li>One-time contributions</li>
          <li>Goal-based funding for specific projects</li>
          <li>Virtual ticketing for online performances and events</li>
        </ul>
        
        <p>"Different artists have different needs, and fans have different preferences for how they want to show support," noted Williams. "Our goal is to provide flexible options that work for various situations while maintaining the direct artist-fan connection."</p>
        
        <h2>Artist Ownership and Control</h2>
        
        <p>Beyond favorable economics, TrueFans CONNECT™ emphasizes artist ownership and control as core principles. Unlike traditional record deals that often require artists to surrender rights to their masters, artists on the platform will maintain complete ownership of their work.</p>
        
        <p>"We're building a platform, not a label," Johnson stated. "We don't take ownership stakes in artists' work or creative output. We simply provide the infrastructure that enables direct fan support and deeper connections."</p>
        
        <p>This approach extends to data as well. The platform plans to provide artists with comprehensive analytics about their supporters, engagement, and revenue—information that is often limited or withheld on other platforms.</p>
        
        <p>"Artists should have full visibility into their data," said Michael Chen, CTO. "We're designing our analytics dashboard to give creators actionable insights that help them make informed decisions about their careers."</p>
        
        <h2>Industry Reactions</h2>
        
        <p>Early reactions from industry observers have been cautiously positive, though questions remain about execution and scale.</p>
        
        <p>"The 80/20 split is certainly artist-friendly," noted music industry analyst Maria Rodriguez. "The challenge will be building a platform that delivers enough value to justify the 20% fee while attracting a critical mass of both artists and fans."</p>
        
        <p>Rodriguez pointed out that while the economics are favorable, success will ultimately depend on the platform's ability to help artists find and convert casual listeners into dedicated supporters.</p>
        
        <p>"The model makes sense for artists who already have engaged fans willing to directly support them," she explained. "The question is whether the platform can help artists develop those relationships in the first place."</p>
        
        <p>Artist manager Carlos Mendez expressed interest in the concept but noted that it would likely complement rather than replace existing platforms for most artists.</p>
        
        <p>"I see this as part of a diversified approach for independent artists," Mendez said. "You still need the discovery potential of streaming platforms, but direct support platforms like this could provide the actual sustainable income that streaming rarely delivers for emerging artists."</p>
        
        <h2>Beta Testing and Development</h2>
        
        <p>TrueFans CONNECT™ recently announced the launch of its beta testing program, with a select group of independent artists and fans now using the platform and providing feedback.</p>
        
        <p>"We're taking an iterative approach to development," explained Chen. "The beta program allows us to refine the platform based on real-world usage before our public launch."</p>
        
        <p>The company plans to gradually expand its beta program in the coming months, with a public launch targeted for mid-2025.</p>
        
        <p>"We're building for the long term," Johnson emphasized. "That means taking the time to get the fundamentals right—the economic model, the user experience, the community dynamics—before scaling up."</p>
        
        <p>For artists interested in the platform's approach, the company is maintaining a waitlist for those who want to join the beta program as it expands.</p>
        
        <h2>A Shifting Landscape</h2>
        
        <p>TrueFans CONNECT™ enters a music industry landscape that continues to evolve rapidly. While streaming remains dominant, there's growing interest in alternative models that provide better economics for working musicians.</p>
        
        <p>"We're seeing a broader shift toward creator ownership and direct audience relationships across creative industries," observed Rodriguez. "Music has been somewhat slower to embrace this shift compared to other content categories, but platforms like this suggest the change is accelerating."</p>
        
        <p>Whether TrueFans CONNECT™ can successfully execute its vision remains to be seen, but its artist-first approach and favorable economics represent a noteworthy attempt to create alternatives to the streaming status quo—one that could potentially provide more sustainable paths for independent musicians.</p>
        
        <p><em>Ryan Thompson covers music industry trends and business models for Digital Music News.</em></p>
      `
    },
    "startup-spotlight-feature": {
      id: 5,
      outlet: "Startup Spotlight",
      title: "TrueFans CONNECT™: From Concept to Development in 12 Months",
      date: "January 5, 2025",
      author: "Sophia Chen",
      authorTitle: "Startup Analyst",
      image: "https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg",
      content: `
        <p class="lead">In just 12 months, music industry startup TrueFans CONNECT™ has evolved from initial concept to a functioning platform with active beta testers. Startup Spotlight examines the company's development process, strategic decisions, and plans for growth.</p>
        
        <p>When co-founders Sarah Johnson and Michael Chen first sketched out their vision for TrueFans CONNECT™ in late 2023, they identified a clear problem: independent musicians lacked effective tools to convert listener interest into sustainable income. A year later, their solution to this problem is taking shape as a platform designed to transform how artists and fans connect.</p>
        
        <p>"The past year has been an incredible journey of discovery, refinement, and building," Johnson told Startup Spotlight. "We've gone from whiteboard concepts to a functioning platform with real users providing valuable feedback."</p>
        
        <p>This rapid progress offers lessons for other early-stage startups navigating the challenging path from idea to implementation.</p>
        
        <h2>Starting with Research</h2>
        
        <p>The TrueFans CONNECT™ team credits much of their efficient development to thorough initial research. Before writing a single line of code, the founders conducted extensive interviews with their target users.</p>
        
        <p>"We spent the first three months just talking to independent artists about their challenges, needs, and existing workflows," explained Chen. "Those conversations shaped our product roadmap in ways that would have been impossible if we'd started building immediately."</p>
        
        <p>This research-first approach helped the team identify several key insights:</p>
        <ul>
          <li>Artists wanted tools that helped them identify and connect with their most engaged fans</li>
          <li>Many musicians were cobbling together multiple platforms to manage different aspects of fan relationships</li>
          <li>Direct support from dedicated fans was more valuable than streaming revenue for most independent artists</li>
          <li>Artists needed better data about their supporters to make informed career decisions</li>
        </ul>
        
        <p>"These insights became our north star," said Johnson. "Every feature we've built addresses one or more of these core needs we identified through research."</p>
        
        <h2>Building the Right Team</h2>
        
        <p>With research insights in hand, the founders focused on assembling a team with the right mix of skills and experience. Rather than scaling quickly, they made targeted hires to address specific needs.</p>
        
        <p>"We've been very intentional about who we've brought on board," Johnson noted. "Each team member brings expertise that directly contributes to solving our core challenges."</p>
        
        <p>Key early hires included:</p>
        <ul>
          <li>Emily Rodriguez, Head of Community, who brought experience from music fan communities</li>
          <li>David Williams, Head of Artist Relations, with a background in artist management</li>
          <li>Alex Thompson, Director of Business Development, who had worked with venue networks</li>
          <li>Two senior developers with experience building marketplace platforms</li>
        </ul>
        
        <p>"Having team members who deeply understand both the technical and industry-specific aspects of what we're building has been crucial," said Chen. "It's allowed us to move quickly while still making informed decisions."</p>
        
        <h2>Iterative Development Process</h2>
        
        <p>TrueFans CONNECT™ adopted an iterative development approach from the beginning, with regular feedback cycles informing continuous improvement.</p>
        
        <p>"We built a minimal prototype within two months of completing our initial research," Chen explained. "It wasn't pretty or feature-rich, but it demonstrated the core concept and gave us something concrete to show potential users and investors."</p>
        
        <p>This early prototype helped the team secure seed funding, which enabled them to expand development efforts. They maintained the iterative approach as they built toward a more robust beta version.</p>
        
        <p>"We work in two-week sprints, with regular user testing at the end of each cycle," said Chen. "This keeps us connected to user needs and prevents us from going too far down paths that don't deliver value."</p>
        
        <p>The company launched its formal beta program in November 2024, with a select group of artists and fans using the platform and providing structured feedback.</p>
        
        <h2>Strategic Focus</h2>
        
        <p>Perhaps the most notable aspect of TrueFans CONNECT™'s development has been its disciplined focus on core functionality before expansion.</p>
        
        <p>"There's always pressure to add features or chase new opportunities," Johnson acknowledged. "We've been disciplined about focusing on our core value proposition first: helping artists identify, connect with, and receive direct support from their most dedicated fans."</p>
        
        <p>This focus has meant saying no to potential features and partnerships that, while promising, would have diverted resources from the platform's fundamental purpose.</p>
        
        <p>"We maintain a 'not now' list alongside our development roadmap," explained Rodriguez. "These are good ideas that simply don't align with our current priorities. Keeping them visible but explicitly deprioritized helps us stay focused while acknowledging their potential future value."</p>
        
        <p>This strategic discipline has enabled the company to make significant progress with relatively limited resources.</p>
        
        <h2>Funding Approach</h2>
        
        <p>TrueFans CONNECT™ has taken a measured approach to fundraising, prioritizing strategic investors over maximum valuation.</p>
        
        <p>"We've been selective about who we bring on as investors," said Johnson. "We've prioritized partners who understand the music industry, share our vision for a more equitable creator economy, and can provide strategic value beyond capital."</p>
        
        <p>While the company has not disclosed specific funding amounts, Johnson indicated they've raised enough to support development through their planned public launch in mid-2025 without needing to immediately pursue additional rounds.</p>
        
        <p>"Our funding strategy aligns with our overall approach—building sustainably rather than chasing hyper-growth," she explained. "We're focused on creating a platform that delivers real value and generates healthy unit economics, not just growing user numbers at all costs."</p>
        
        <h2>Challenges and Adaptations</h2>
        
        <p>The team acknowledged that their journey hasn't been without obstacles. Several key challenges have required adaptations to their initial plans:</p>
        
        <p><strong>Technical complexity:</strong> "Building a two-sided marketplace with robust payment infrastructure proved more complex than we initially estimated," Chen admitted. "We had to extend our development timeline and bring in additional expertise to address these challenges."</p>
        
        <p><strong>User education:</strong> "We discovered that many artists needed more guidance on how to effectively utilize direct fan support," noted Williams. "This led us to develop more comprehensive onboarding and educational resources than we had originally planned."</p>
        
        <p><strong>Competitive landscape:</strong> "The space has become more active during our development period," Johnson observed. "We've had to sharpen our differentiation and value proposition in response to new entrants and feature expansions from existing platforms."</p>
        
        <p>In each case, the team credits their research foundation and iterative approach with helping them adapt effectively to these challenges.</p>
        
        <h2>Looking Ahead</h2>
        
        <p>As TrueFans CONNECT™ continues development toward its planned public launch in mid-2025, the team is focused on several key priorities:</p>
        
        <p><strong>Expanding beta testing:</strong> "We'll be gradually increasing our beta user base over the next six months," said Rodriguez. "This controlled growth allows us to test our systems at increasing scale while maintaining a high-quality experience."</p>
        
        <p><strong>Developing the venue network:</strong> "We're building out our venue partnership program to help artists connect with performance opportunities," explained Thompson. "This feature addresses another critical need for independent musicians."</p>
        
        <p><strong>Refining the affiliate program:</strong> "We're developing a two-tier affiliate system that will allow artists to earn passive income through platform referrals," noted Williams. "This creates additional value for artists while helping grow our ecosystem organically."</p>
        
        <p><strong>Building community features:</strong> "We're enhancing the community aspects of the platform to facilitate connections not just between artists and fans, but among artists themselves," said Rodriguez. "These peer relationships are incredibly valuable for independent musicians."</p>
        
        <p>The company's long-term vision extends beyond its current focus on independent musicians.</p>
        
        <p>"While we're starting with music, the challenges we're addressing exist across creative disciplines," Johnson explained. "Our long-term vision is to build infrastructure that enables sustainable careers for creators of all types through direct supporter relationships."</p>
        
        <p>For now, however, the team remains focused on executing their current roadmap and delivering value to their beta users—a disciplined approach that has served them well in their journey from concept to development.</p>
        
        <p><em>Sophia Chen covers early-stage startups and innovation trends for Startup Spotlight.</em></p>
      `
    }
  }
  
  // Find the current article
  const article = mediaArticles[slug]
  
  if (!article) {
    return (
      <PageTransition>
        <Container>
          <NotFoundSection>
            <NotFoundTitle>Article Not Found</NotFoundTitle>
            <NotFoundText>The media article you're looking for doesn't exist or has been moved.</NotFoundText>
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
            <OutletBadge>{article.outlet}</OutletBadge>
            <HeroTitle>{article.title}</HeroTitle>
            <ArticleMeta>
              <MetaItem>By {article.author}, {article.authorTitle}</MetaItem>
              <MetaItem>{article.date}</MetaItem>
            </ArticleMeta>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ArticleSection>
        <Container>
          <ArticleContainer>
            <ArticleImage src={article.image} alt={article.title} />
            <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }} />
            
            <ShareSection>
              <ShareTitle>Share this article</ShareTitle>
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
            
            <SourceSection>
              <SourceTitle>Source</SourceTitle>
              <SourceText>
                This article was originally published in <strong>{article.outlet}</strong> on {article.date}. Republished with permission.
              </SourceText>
            </SourceSection>
            
            <BackToPress as={Link} to="/press">← Back to Press & Media</BackToPress>
          </ArticleContainer>
        </Container>
      </ArticleSection>
      
      <MoreArticlesSection>
        <Container>
          <SectionTitle>More Media Coverage</SectionTitle>
          <ArticlesGrid>
            {Object.values(mediaArticles)
              .filter(a => a.id !== article.id)
              .slice(0, 3)
              .map(a => (
                <ArticleCard key={a.id}>
                  <ArticleCardOutlet>{a.outlet}</ArticleCardOutlet>
                  <ArticleCardTitle>{a.title}</ArticleCardTitle>
                  <ArticleCardMeta>
                    <ArticleCardDate>{a.date}</ArticleCardDate>
                  </ArticleCardMeta>
                  <ReadMoreLink as={Link} to={`/media/${Object.keys(mediaArticles).find(key => mediaArticles[key].id === a.id)}`}>
                    Read Article →
                  </ReadMoreLink>
                </ArticleCard>
              ))}
          </ArticlesGrid>
          <ViewAllButton as={Link} to="/press">View All Media Coverage</ViewAllButton>
        </Container>
      </MoreArticlesSection>
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

const OutletBadge = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ArticleMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.xs};
  }
`

const MetaItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  opacity: 0.8;
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
  
  .lead {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.darkText};
    margin-bottom: ${({ theme }) => theme.space.lg};
  }
  
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
  
  em {
    font-style: italic;
    opacity: 0.8;
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

const SourceSection = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
`

const SourceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const SourceText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
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

const MoreArticlesSection = styled.section`
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

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const ArticleCard = styled.article`
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

const ArticleCardOutlet = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ArticleCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.3;
`

const ArticleCardMeta = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ArticleCardDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
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

export default MediaArticle
