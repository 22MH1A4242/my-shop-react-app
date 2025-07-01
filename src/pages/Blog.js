import React from "react";
import "./Blog.css"; // optional if you want extra styles

const blogPosts = [
  {
    id: 1,
    title: "Latest Fashion Trends 2025",
    excerpt: "Discover the hottest styles for this year.",
    image: "b1.jpg",
  },
  {
    id: 2,
    title: "How to Style Your Summer Outfits",
    excerpt: "Stay cool and stylish during summer.",
    image: "b2.jpg",
  },
  {
    id: 3,
    title: "Essential Accessories for Every Wardrobe",
    excerpt: "Must-have items to elevate any outfit.",
    image: "b3.jpg",
  },
  {
    id: 4,
    title: "Choosing the Right Shoes",
    excerpt: "Find what works best for your look.",
    image: "b4.jpg",
  },
  {
    id: 5,
    title: "Sustainable Fashion: Why It Matters",
    excerpt: "Learn about ethical brands and materials.",
    image: "b5.jpg",
  },
  {
    id: 6,
    title: "Winter Wear Guide",
    excerpt: "Stay warm and trendy in winter.",
    image: "b6.jpg",
  },
  {
    id: 7,
    title: "Building a Capsule Wardrobe",
    excerpt: "Create a timeless closet with fewer pieces.",
    image: "b7.jpg",
  },
  {
    id: 8,
    title: "Fashion for Every Occasion",
    excerpt: "Dress right, every time.",
    image: "b8.jpg",
  },
];

function Blog() {
  return (
    <div>
      <header>
        <h1>Our Blog</h1>
      </header>
      <section className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={`/img/blog/${post.image}`} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href="#">Read More »</a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;
