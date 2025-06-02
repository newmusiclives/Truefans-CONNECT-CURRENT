import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const BlogPostPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "How to Maximize Your Earnings as an Independent Artist",
      content: `
        <p>As an independent artist in today's digital landscape, there are more opportunities than ever to create sustainable income streams. However, navigating these options can be overwhelming. This guide breaks down proven strategies that successful independent artists use to maximize their earnings.</p>
        
        <h2>Diversify Your Revenue Streams</h2>
        <p>The most financially successful independent artists rarely rely on a single source of income. Instead, they create multiple revenue channels:</p>
        <ul>
          <li><strong>Digital Music Sales:</strong> While streaming may pay pennies, owning your masters means you keep 100% of sales from platforms like Bandcamp.</li>
          <li><strong>Streaming Revenue:</strong> Focus on getting your music on playlists and building a consistent release schedule to maximize streaming income.</li>
          <li><strong>Live Performances:</strong> Even in the digital age, live shows remain one of the most lucrative income sources for musicians.</li>
          <li><strong>Merchandise:</strong> High-margin items like t-shirts, vinyl, and limited edition collectibles can generate significant revenue.</li>
          <li><strong>Sync Licensing:</strong> Getting your music placed in TV shows, films, commercials, and video games can provide substantial one-time payments.</li>
          <li><strong>Teaching:</strong> Offering lessons in your instrument or production techniques can provide steady income between releases and tours.</li>
        </ul>
        
        <h2>Build and Monetize Your Fan Relationship</h2>
        <p>The direct artist-to-fan relationship is your most valuable asset:</p>
        <ul>
          <li><strong>Fan Membership Programs:</strong> Platforms like Patreon allow fans to support you with monthly contributions in exchange for exclusive content.</li>
          <li><strong>Direct Support:</strong> Services like TrueFans CONNECT™ enable your supporters to contribute directly to your career development.</li>
          <li><strong>Email Marketing:</strong> Building an email list gives you a direct line to your most engaged fans that you own and control.</li>
          <li><strong>Virtual Events:</strong> Online concerts, workshops, and meet-and-greets can be monetized globally without travel expenses.</li>
        </ul>
        
        <h2>Optimize Your Digital Presence</h2>
        <p>Your online presence is your 24/7 storefront:</p>
        <ul>
          <li><strong>Website Optimization:</strong> Ensure your website effectively converts visitors into fans and customers.</li>
          <li><strong>Social Media Strategy:</strong> Focus on platforms where your fans actually spend time, and create content that drives engagement.</li>
          <li><strong>Content Marketing:</strong> Regular blog posts, videos, or podcasts can attract new audiences and deepen connections with existing fans.</li>
          <li><strong>Analytics:</strong> Use data to understand what's working and double down on successful strategies.</li>
        </ul>
        
        <h2>Collaborate Strategically</h2>
        <p>Strategic partnerships can expand your reach and income:</p>
        <ul>
          <li><strong>Artist Collaborations:</strong> Working with complementary artists can introduce you to new audiences.</li>
          <li><strong>Brand Partnerships:</strong> Align with brands that share your values for sponsorships and endorsements.</li>
          <li><strong>Production Work:</strong> Producing, mixing, or mastering for other artists can provide additional income.</li>
        </ul>
        
        <h2>Invest in Your Business</h2>
        <p>Thinking like an entrepreneur is essential:</p>
        <ul>
          <li><strong>Financial Literacy:</strong> Understanding basic accounting, taxes, and business principles will help you make informed decisions.</li>
          <li><strong>Strategic Reinvestment:</strong> Allocate a percentage of earnings back into your career for growth.</li>
          <li><strong>Team Building:</strong> As you grow, strategically hire professionals (manager, publicist, etc.) who can multiply your earning potential.</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building a sustainable career as an independent artist requires treating your music as both an art and a business. By implementing these strategies and consistently delivering value to your audience, you can create a career that's both creatively fulfilling and financially rewarding.</p>
        
        <p>Remember that success rarely happens overnight. The artists who thrive independently are those who consistently implement these principles over time, building momentum with each release and performance.</p>
      `,
      excerpt: "Learn the strategies that top-earning independent artists use to increase their revenue streams and build sustainable careers.",
      category: "tips",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      authorImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      image: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",
      featured: true,
      slug: "maximize-earnings-independent-artist",
      relatedPosts: [2, 3, 7]
    },
    {
      id: 2,
      title: "The Power of Direct Fan Support: Why Traditional Labels Are Becoming Obsolete",
      content: `
        <p>The music industry has undergone a radical transformation in the past decade. As streaming platforms have disrupted traditional revenue models and social media has changed how artists connect with fans, a new paradigm has emerged: direct fan support. This shift is making traditional record labels increasingly obsolete for many independent artists.</p>
        
        <h2>The Traditional Label Model</h2>
        <p>For decades, the path to a music career followed a predictable pattern:</p>
        <ol>
          <li>Get discovered by a record label</li>
          <li>Sign a contract (often giving up rights to your music)</li>
          <li>Receive an advance (essentially a loan against future earnings)</li>
          <li>Let the label handle distribution, marketing, and promotion</li>
          <li>Hope to recoup your advance before seeing any royalties</li>
        </ol>
        
        <p>This system worked in an era when recording, manufacturing, distributing, and marketing music required substantial capital investment. Labels controlled access to recording studios, physical distribution networks, radio promotion, and retail shelf space.</p>
        
        <h2>The Digital Disruption</h2>
        <p>Several technological developments have fundamentally changed this landscape:</p>
        <ul>
          <li><strong>Affordable Recording Technology:</strong> Professional-quality recordings can now be made with relatively inexpensive equipment.</li>
          <li><strong>Digital Distribution:</strong> Services like DistroKid and TuneCore allow any artist to get their music on all major platforms for a small fee.</li>
          <li><strong>Social Media Marketing:</strong> Artists can build and engage with audiences directly, without traditional media gatekeepers.</li>
          <li><strong>Direct-to-Fan Platforms:</strong> Services like TrueFans CONNECT™, Patreon, and Bandcamp enable direct financial relationships between artists and supporters.</li>
        </ul>
        
        <h2>The Rise of Direct Fan Support</h2>
        <p>Direct fan support models offer several advantages over traditional label arrangements:</p>
        
        <h3>1. Artist Ownership and Control</h3>
        <p>When fans support artists directly, creators maintain ownership of their masters and publishing rights. This means they control how their music is used and receive a much larger percentage of revenue generated.</p>
        
        <h3>2. Sustainable Income</h3>
        <p>Rather than the feast-or-famine cycle of advances and recoupment, direct support often provides more predictable, sustainable income. A dedicated fanbase of 1,000 true fans contributing regularly can provide a living wage for many artists.</p>
        
        <h3>3. Creative Freedom</h3>
        <p>Without label executives making decisions based on commercial potential, artists can create the music they truly want to make. This authenticity often resonates more deeply with fans.</p>
        
        <h3>4. Direct Relationship</h3>
        <p>The direct artist-fan relationship eliminates middlemen and creates a more meaningful connection. Fans feel invested in the artist's success, and artists receive immediate feedback and encouragement.</p>
        
        <h2>Case Studies in Success</h2>
        <p>Numerous artists have built thriving careers outside the traditional label system:</p>
        <ul>
          <li><strong>Chance the Rapper:</strong> Won Grammy awards as an independent artist, leveraging streaming, touring, and merchandise.</li>
          <li><strong>Amanda Palmer:</strong> Raised over $1.2 million on Kickstarter for an album, tour, and art book after leaving her label.</li>
          <li><strong>Jacob Collier:</strong> Built a global fanbase through YouTube before releasing any commercial music, maintaining independence while winning multiple Grammys.</li>
        </ul>
        
        <h2>The Future Landscape</h2>
        <p>While major labels still dominate the top of the charts, the middle class of working musicians increasingly finds greater success and sustainability through direct fan support. This doesn't mean labels will disappear entirely—they're evolving toward more artist-friendly deals and service-based models.</p>
        
        <p>The most likely future is a diverse ecosystem where artists choose the path that best suits their goals and fanbase:</p>
        <ul>
          <li>Some will remain fully independent, powered by direct fan support</li>
          <li>Others will use fan funding to build leverage for more favorable label deals</li>
          <li>Many will create hybrid models, partnering with labels for specific services while maintaining ownership</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The power has fundamentally shifted in the music industry. Artists no longer need labels to reach audiences or fund their careers. With direct fan support platforms like TrueFans CONNECT™, musicians can build sustainable careers while maintaining creative control and ownership of their work.</p>
        
        <p>For fans, this new paradigm offers the satisfaction of directly supporting the artists they love and playing an active role in making new music possible. It's a win-win transformation that's reshaping the future of music.</p>
      `,
      excerpt: "Discover how direct fan support is changing the music industry landscape and why many artists are choosing to go independent.",
      category: "industry",
      date: "May 28, 2023",
      author: "Michael Chen",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      image: "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg",
      featured: true,
      slug: "power-direct-fan-support",
      relatedPosts: [1, 6, 8]
    },
    {
      id: 3,
      title: "5 Ways to Promote Your Music Without Breaking the Bank",
      content: `<p>Content for this blog post would go here...</p>`,
      excerpt: "Effective promotion strategies that independent artists can implement with limited budgets to reach new audiences.",
      category: "tips",
      date: "May 12, 2023",
      author: "Emily Rodriguez",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      image: "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg",
      featured: false,
      slug: "promote-music-budget-friendly",
      relatedPosts: [1, 4, 7]
    },
    {
      id: 4,
      title: "Building Your Artist Brand: A Step-by-Step Guide",
      content: `<p>Content for this blog post would go here...</p>`,
      excerpt: "Learn how to create a compelling artist brand that resonates with fans and helps you stand out in a crowded market.",
      category: "tips",
      date: "April 30, 2023",
      author: "David Williams",
      authorImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      featured: false,
      slug: "building-artist-brand-guide",
      relatedPosts: [1, 3, 6]
    },
    {
      id: 5,
      title: "The Future of Music Streaming: What Artists Need to Know",
      content: `<p>Content for this blog post would go here...</p>`,
      excerpt: "An analysis of current trends in music streaming and what they mean for independent artists' revenue and exposure.",
      category: "industry",
      date: "April 15, 2023",
      author: "John Smith",
      authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg",
      featured: false,
      slug: "future-music-streaming",
      relatedPosts: [2, 6, 8]
    },
    {
      id: 6,
      title: "How TrueFans CONNECT™ Is Revolutionizing Artist Support",
      content: `<p>Content for this blog post would go here...</p>`,
      excerpt: "An inside look at how our platform is changing the way fans support their favorite artists and creating new opportunities.",
      category: "news",
      date: "April 5, 2023",
      author: "Sarah Johnson",
      authorImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      image: "https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg",
      featured: true,
      slug: "truefans-revolutionizing-artist-support",
      relatedPosts: [1, 2, 4]
    },
    {
      id: 7,
      title: "Venue Relationships: How to Book More Live Shows",
      content: `<p>Content for this blog post would go here...</p>`,
      excerpt: "Practical advice for independent artists looking to increase their live performance opportunities and build venue relationships.",
      category: "tips",
      date: "March 22, 2023",
      author: "Emily Rodriguez",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      image: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg",
      featured: false,
      slug: "venue-relationships-booking-shows",
      relatedPosts: [1, 3, 4]
    },
    {
      id: 8,
      title: "Understanding Music Copyright: Protect Your Creative Work",
      content: `<p>Content for this blog post would go here...</p>`,
      excerpt: "A comprehensive guide to music copyright laws and how to ensure your creative work is properly protected.",
      category: "legal",
      date: "March 10, 2023",
      author: "Michael Chen",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      image: "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg",
      featured: false,
      slug: "understanding-music-copyright",
      relatedPosts: [2, 5, 6]
    }
  ]
  
  // Find the current post
  const post = blogPosts.find(post => post.slug === slug)
  
  // If post not found, redirect to blog page
  if (!post) {
    React.useEffect(() => {
      navigate('/blog')
    }, [navigate])
    return null
  }
  
  // Get related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter(p => post.relatedPosts.includes(p.id))
    : []
  
  return (
    <PageTransition>
      <HeroSection style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${post.image})` }}>
        <Container>
          <HeroContent>
            <PostCategory>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</PostCategory>
            <HeroTitle>{post.title}</HeroTitle>
            <PostMeta>
              <PostAuthor>
                <AuthorImage src={post.authorImage} alt={post.author} />
                <AuthorName>By {post.author}</AuthorName>
              </PostAuthor>
              <PostDate>{post.date}</PostDate>
            </PostMeta>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnLayout>
            <MainContent>
              <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
              
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
              
              <AuthorSection>
                <AuthorCard>
                  <AuthorCardImage src={post.authorImage} alt={post.author} />
                  <AuthorCardContent>
                    <AuthorCardName>{post.author}</AuthorCardName>
                    <AuthorCardBio>
                      {post.author} is a music industry expert with over 10 years of experience working with independent artists. 
                      They specialize in artist development, marketing strategies, and building sustainable careers in music.
                    </AuthorCardBio>
                    <AuthorCardSocial>
                      <AuthorSocialLink href="#" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </AuthorSocialLink>
                      <AuthorSocialLink href="#" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </AuthorSocialLink>
                      <AuthorSocialLink href="#" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </AuthorSocialLink>
                    </AuthorCardSocial>
                  </AuthorCardContent>
                </AuthorCard>
              </AuthorSection>
            </MainContent>
            
            <Sidebar>
              <SidebarSection>
                <SidebarTitle>Related Articles</SidebarTitle>
                <RelatedPostsList>
                  {relatedPosts.map(post => (
                    <RelatedPostItem key={post.id}>
                      <RelatedPostImage src={post.image} alt={post.title} />
                      <RelatedPostContent>
                        <RelatedPostCategory>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</RelatedPostCategory>
                        <RelatedPostTitle as={Link} to={`/blog/${post.slug}`}>{post.title}</RelatedPostTitle>
                        <RelatedPostDate>{post.date}</RelatedPostDate>
                      </RelatedPostContent>
                    </RelatedPostItem>
                  ))}
                </RelatedPostsList>
              </SidebarSection>
              
              <SidebarSection>
                <SidebarTitle>Categories</SidebarTitle>
                <CategoriesList>
                  {['tips', 'industry', 'news', 'legal'].map(category => (
                    <CategoryItem key={category}>
                      <CategoryLink as={Link} to={`/blog?category=${category}`}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </CategoryLink>
                    </CategoryItem>
                  ))}
                </CategoriesList>
              </SidebarSection>
              
              <SidebarSection>
                <NewsletterCard>
                  <NewsletterTitle>Subscribe to Our Newsletter</NewsletterTitle>
                  <NewsletterDescription>Get the latest articles and industry insights right in your inbox.</NewsletterDescription>
                  <NewsletterForm onSubmit={(e) => e.preventDefault()}>
                    <NewsletterInput type="email" placeholder="Your email address" />
                    <NewsletterButton>Subscribe</NewsletterButton>
                  </NewsletterForm>
                </NewsletterCard>
              </SidebarSection>
            </Sidebar>
          </TwoColumnLayout>
        </Container>
      </ContentSection>
      
      <MoreArticlesSection>
        <Container>
          <SectionTitle>More Articles</SectionTitle>
          <MoreArticlesGrid>
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(post => (
                <ArticleCard key={post.id}>
                  <ArticleCardImage src={post.image} alt={post.title} />
                  <ArticleCardContent>
                    <ArticleCardCategory>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</ArticleCardCategory>
                    <ArticleCardTitle>{post.title}</ArticleCardTitle>
                    <ArticleCardExcerpt>{post.excerpt}</ArticleCardExcerpt>
                    <ArticleCardMeta>
                      <ArticleCardAuthor>
                        <ArticleCardAuthorImage src={post.authorImage} alt={post.author} />
                        <ArticleCardAuthorName>By {post.author}</ArticleCardAuthorName>
                      </ArticleCardAuthor>
                      <ArticleCardDate>{post.date}</ArticleCardDate>
                    </ArticleCardMeta>
                    <ReadMoreLink as={Link} to={`/blog/${post.slug}`}>Read More →</ReadMoreLink>
                  </ArticleCardContent>
                </ArticleCard>
              ))}
          </MoreArticlesGrid>
          <ViewAllButton as={Link} to="/blog">View All Articles</ViewAllButton>
        </Container>
      </MoreArticlesSection>
    </PageTransition>
  )
}

const HeroSection = styled.section`
  background-size: cover;
  background-position: center;
  padding: ${({ theme }) => theme.space.xl} 0;
  color: white;
  position: relative;
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
  padding: ${({ theme }) => theme.space.xl} 0;
`

const PostCategory = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.lg};
  line-height: 1.2;
`

const PostMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.sm};
  }
`

const PostAuthor = styled.div`
  display: flex;
  align-items: center;
`

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.space.sm};
  object-fit: cover;
`

const AuthorName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
`

const PostDate = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  opacity: 0.8;
`

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const MainContent = styled.div``

const PostContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.darkText};
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin: ${({ theme }) => theme.space.xl} 0 ${({ theme }) => theme.space.md};
    color: ${({ theme }) => theme.colors.darkText};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin: ${({ theme }) => theme.space.lg} 0 ${({ theme }) => theme.space.md};
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
    margin: ${({ theme }) => theme.space.lg} 0;
  }
  
  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding-left: ${({ theme }) => theme.space.lg};
    margin: ${({ theme }) => theme.space.lg} 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.lightText};
  }
`

// Share Section
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

// Author Section
const AuthorSection = styled.div`
  margin-top: ${({ theme }) => theme.space.xl};
`

const AuthorCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`

const AuthorCardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.space.md};
  }
`

const AuthorCardContent = styled.div`
  flex: 1;
`

const AuthorCardName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const AuthorCardBio = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const AuthorCardSocial = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
  }
`

const AuthorSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: white;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.darkText};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`

// Sidebar
const Sidebar = styled.aside``

const SidebarSection = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SidebarTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  padding-bottom: ${({ theme }) => theme.space.xs};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`

// Related Posts
const RelatedPostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const RelatedPostItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
`

const RelatedPostImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.md};
`

const RelatedPostContent = styled.div`
  flex: 1;
`

const RelatedPostCategory = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.xs};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const RelatedPostTitle = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`

const RelatedPostDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

// Categories
const CategoriesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const CategoryItem = styled.li`
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const CategoryLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.space.sm};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.darkText};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.trustworthyNavy};
    text-decoration: none;
  }
`

// Newsletter
const NewsletterCard = styled.div`
  background-color: ${({ theme }) => theme.colors.trustworthyNavy};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.lg};
  color: white;
`

const NewsletterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const NewsletterDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const NewsletterInput = styled.input`
  padding: ${({ theme }) => theme.space.md};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`

const NewsletterButton = styled(Button)`
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

// More Articles Section
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

const MoreArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const ArticleCard = styled.article`
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

const ArticleCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const ArticleCardContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const ArticleCardCategory = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkText};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ArticleCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.3;
`

const ArticleCardExcerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ArticleCardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ArticleCardAuthor = styled.div`
  display: flex;
  align-items: center;
`

const ArticleCardAuthorImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.space.sm};
  object-fit: cover;
`

const ArticleCardAuthorName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ArticleCardDate = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ReadMoreLink = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

const ViewAllButton = styled(Button)`
  display: block;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

export default BlogPostPage
