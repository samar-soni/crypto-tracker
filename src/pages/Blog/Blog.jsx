import React from 'react'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Cryptocurrency Basics",
      date: "March 15, 2024",
      excerpt: "Learn the fundamental concepts behind cryptocurrency and blockchain technology...",
      author: "John Smith",
      readTime: "5 min read"
    },
    {
      id: 2, 
      title: "Top 5 Crypto Trading Strategies",
      date: "March 12, 2024",
      excerpt: "Discover the most effective trading strategies used by successful crypto traders...",
      author: "Sarah Johnson",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Future of DeFi",
      date: "March 10, 2024", 
      excerpt: "Exploring the growing world of decentralized finance and its potential impact...",
      author: "Mike Wilson",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "NFTs: Beyond Digital Art",
      date: "March 8, 2024",
      excerpt: "Exploring the expanding applications of NFTs in gaming, real estate, and more...", 
      author: "Emma Davis",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Crypto Security Best Practices",
      date: "March 5, 2024",
      excerpt: "Essential tips and strategies to keep your cryptocurrency investments safe and secure...",
      author: "David Chen",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Web3 Revolution",
      date: "March 3, 2024",
      excerpt: "Understanding how Web3 technology is reshaping the internet and digital ownership...",
      author: "Lisa Thompson",
      readTime: "9 min read"
    }
  ]

  return (
    <div className='blog'>
      <div className="blog-hero">
        <h1>Crypto Blog</h1>
        <p>Stay updated with the latest news and insights from the crypto world</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map(post => (
          <div className="blog-card" key={post.id}>
            <h2>{post.title}</h2>
            <div className="blog-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <p>{post.excerpt}</p>
            <div className="blog-footer">
              <span className="author">By {post.author}</span>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
