import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import PageTransition from '../components/common/PageTransition'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "How to Maximize Your Earnings as an Independent Artist",
      excerpt: "Learn the strategies that top-earning independent artists use to increase their revenue streams and build sustainable careers.",
      category: "tips",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      authorImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      image: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg",
      featured: true
    },
    {
      id: 2,
      title: "The Power of Direct Fan Support: Why Traditional Labels Are Becoming Obsolete",
      excerpt: "Discover how direct fan support is changing the music industry landscape and why many artists are choosing to go independent.",
      category: "industry",
      date: "May 28, 2023",
      author: "Michael Chen",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      image: "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg",
      featured: true
    },
    {
      id: 3,
      title: "5 Ways to Promote Your Music Without Breaking the Bank",
      excerpt: "Effective promotion strategies that independent artists can implement with limited budgets to reach new audiences.",
      category: "tips",
      date: "May 12, 2023",
      author: "Emily Rodriguez",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      image: "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg",
      featured: false
    },
    {
      id: 4,
      title: "Building Your Artist Brand: A Step-by-Step Guide",
      excerpt: "Learn how to create a compelling artist brand that resonates with fans and helps you stand out in a crowded market.",
      category: "tips",
      date: "April 30, 2023",
      author: "David Williams",
      authorImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      featured: false
    },
    {
      id: 5,
      title: "The Future of Music Streaming: What Artists Need to Know",
      excerpt: "An analysis of current trends in music streaming and what they mean for independent artists' revenue and exposure.",
      category: "industry",
      date: "April 15, 2023",
      author: "John Smith",
      authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg",
      featured: false
    },
    {
      id: 6,
      title: "How TrueFans CONNECT™ Is Revolutionizing Artist Support",
      excerpt: "An inside look at how our platform is changing the way fans support their favorite artists and creating new opportunities.",
      category: "news",
      date: "April 5, 2023",
      author: "Sarah Johnson",
      authorImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      image: "https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg",
      featured: true
    },
    {
      id: 7,
      title: "Venue Relationships: How to Book More Live Shows",
      excerpt: "Practical advice for independent artists looking to increase their live performance opportunities and build venue relationships.",
      category: "tips",
      date: "March 22, 2023",
      author: "Emily Rodriguez",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      image: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg",
      featured: false
    },
    {
      id: 8,
      title: "Understanding Music Copyright: Protect Your Creative Work",
      excerpt: "A comprehensive guide to music copyright laws and how to ensure your creative work is properly protected.",
      category: "legal",
      date: "March 10, 2023",
      author: "Michael Chen",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      image: "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg",
      featured: false
    }
  ]
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)
  
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured)
  
  // Get unique categories
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))]
  
  return (
    <PageTransition>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>TrueFans CONNECT™ Blog</HeroTitle>
            <HeroSubtitle>Insights, tips, and news for independent artists and their supporters</HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>
      
      {featuredPosts.length > 0 && (
        <FeaturedSection>
          <Container>
            <SectionTitle>Featured Articles</SectionTitle>
            <FeaturedGrid>
              {featuredPosts.map(post => (
                <FeaturedPost key={post.id}>
                  <FeaturedPostImage src={post.image} alt={post.title} />
                  <FeaturedPostOverlay>
                    <FeaturedPostCategory>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</FeaturedPostCategory>
                    <FeaturedPostTitle>{post.title}</FeaturedPostTitle>
                    <FeaturedPostMeta>
                      <FeaturedPostAuthor>
                        <FeaturedPostAuthorImage src={post.authorImage} alt={post.author} />
                        <FeaturedPostAuthorName>{post.author}</FeaturedPostAuthorName>
                      </FeaturedPostAuthor>
                      <FeaturedPostDate>{post.date}</FeaturedPostDate>
                    </FeaturedPostMeta>
                    <FeaturedPostExcerpt>{post.excerpt}</FeaturedPostExcerpt>
                    <ReadMoreButton>Read Article</ReadMoreButton>
                  </FeaturedPostOverlay>
                </FeaturedPost>
              ))}
            </FeaturedGrid>
          </Container>
        </FeaturedSection>
      )}
      
      <ContentSection>
        <Container>
          <CategoryTabs>
            {categories.map(category => (
              <CategoryTab 
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'all' ? 'All Posts' : category.charAt(0).toUpperCase() + category.slice(1)}
              </CategoryTab>
            ))}
          </CategoryTabs>
          
          <BlogGrid>
            {filteredPosts.map(post => (
              <BlogPost key={post.id}>
                <BlogPostImage src={post.image} alt={post.title} />
                <BlogPostContent>
                  <BlogPostCategory>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</BlogPostCategory>
                  <BlogPostTitle>{post.title}</BlogPostTitle>
                  <BlogPostExcerpt>{post.excerpt}</BlogPostExcerpt>
                  <BlogPostMeta>
                    <BlogPostAuthor>
                      <BlogPostAuthorImage src={post.authorImage} alt={post.author} />
                      <BlogPostAuthorName>By {post.author}</BlogPostAuthorName>
                    </BlogPostAuthor>
                    <BlogPostDate>{post.date}</BlogPostDate>
                  </BlogPostMeta>
                  <ReadMoreLink>Read More →</ReadMoreLink>
                </BlogPostContent>
              </BlogPost>
            ))}
          </BlogGrid>
          
          {filteredPosts.length === 0 && (
            <NoPosts>
              <NoPostsIcon>📝</NoPostsIcon>
              <NoPostsTitle>No posts found</NoPostsTitle>
              <NoPostsText>There are no posts in this category yet. Check back soon or browse other categories.</NoPostsText>
            </NoPosts>
          )}
        </Container>
      </ContentSection>
      
      <SubscribeSection>
        <Container>
          <SubscribeContent>
            <SubscribeTitle>Stay Updated</SubscribeTitle>
            <SubscribeSubtitle>Subscribe to our newsletter for the latest articles, tips, and industry insights</SubscribeSubtitle>
            <SubscribeForm onSubmit={(e) => e.preventDefault()}>
              <SubscribeInput type="email" placeholder="Your email address" aria-label="Email address" />
              <SubscribeButton>Subscribe</SubscribeButton>
            </SubscribeForm>
            <SubscribeTerms>
              By subscribing, you agree to our <TermsLink as={Link} to="/terms">Terms of Service</TermsLink> and <TermsLink as={Link} to="/privacy">Privacy Policy</TermsLink>
            </SubscribeTerms>
          </SubscribeContent>
        </Container>
      </SubscribeSection>
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
`

// Featured Section
const FeaturedSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.lg};
  text-align: center;
`

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const FeaturedPost = styled.article`
  position: relative;
  height: 400px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const FeaturedPostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${FeaturedPost}:hover & {
    transform: scale(1.05);
  }
`

const FeaturedPostOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.space.lg};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  color: white;
`

const FeaturedPostCategory = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeaturedPostTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.3;
`

const FeaturedPostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeaturedPostAuthor = styled.div`
  display: flex;
  align-items: center;
`

const FeaturedPostAuthorImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.space.sm};
  object-fit: cover;
`

const FeaturedPostAuthorName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const FeaturedPostDate = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.8;
`

const FeaturedPostExcerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.md};
  opacity: 0.9;
`

const ReadMoreButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
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

// Content Section
const ContentSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: white;
`

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
`

const CategoryTab = styled.button`
  background: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.trustworthyNavy : theme.colors.darkText};
  border: 1px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.lightGray};
  }
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const BlogPost = styled.article`
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

const BlogPostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const BlogPostContent = styled.div`
  padding: ${({ theme }) => theme.space.lg};
`

const BlogPostCategory = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkText};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const BlogPostTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.3;
`

const BlogPostExcerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const BlogPostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const BlogPostAuthor = styled.div`
  display: flex;
  align-items: center;
`

const BlogPostAuthorImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.space.sm};
  object-fit: cover;
`

const BlogPostAuthorName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const BlogPostDate = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ReadMoreLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`

// No Posts
const NoPosts = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space.xl};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.lg};
`

const NoPostsIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const NoPostsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const NoPostsText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 500px;
  margin: 0 auto;
`

// Subscribe Section
const SubscribeSection = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const SubscribeContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`

const SubscribeTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const SubscribeSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SubscribeForm = styled.form`
  display: flex;
  margin-bottom: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
  }
`

const SubscribeInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    border-color: transparent;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const SubscribeButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  margin-left: ${({ theme }) => theme.space.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 0;
    width: 100%;
  }
`

const SubscribeTerms = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const TermsLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

export default Blog
