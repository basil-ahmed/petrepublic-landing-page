import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import './BlogSection.css';
import article1 from '../assets/images/article.jpg';
import article2 from '../assets/images/article2.png';
import article3 from '../assets/images/article3.jpg';
import passport from '../assets/images/passport.png';

// Startup Article data
const startupArticle = {
  title: 'E-passport for UAE pets - Khaleej Times',
  description: 'This digital solution aims to replace traditional pet passports and vaccination books, creating a centralized database for pet information.',
  content: `Frustrated with managing endless paperwork and scheduling vet appointments for your beloved pets? Don't worry! That's where Pet Republic comes in. With just a few taps, we will connect you seamlessly to pet care centers across the country, making life easier for both pets and their owners.`,
  link: 'https://www.khaleejtimes.com/uae/e-passport-for-uae-pets-new-app-to-streamline-documents-vet-appointments?_refresh=true',
};

const blogs = [
  {
    id: 1,
    title: 'Summer Pet Care in the UAE',
    author: 'Atefeh',
    description: 'Concered about your pet in this weather? Keep Your Furry Friends Safe from the rising temperatures in the UAE with the help of this article!',
    image: article1,
  },
  {
    id: 2,
    title: 'Creating a Pet-Friendly Home: Tips for Safety and Comfort',
    author: 'Atefeh',
    description: 'Bringing in a new pet? Here are some tips to make your home safe and comfortable for your new furry friend!',
    image: article2,
  },
  {
    id: 3,
    title: '10 Signs Your Pet Needs to See a Vet: Early Detection of Health Problems',
    author: 'Atefeh',
    description: 'Identifying key signs about your pet’s health can help you detect early signs of health problems. Learn more about the 10 signs that your pet needs to see a vet!',
    image: article3,
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      {/* Metadata Section */}
      <Helmet>
        <title>Blog Section - Pet Republic</title>
        <meta name="description" content="Explore informative blogs about pet care, safety tips, and health advice from our team at Pet Republic." />
        <meta name="keywords" content="pet care, pet safety, pet health, pet-friendly, pet advice, UAE pets" />
        <meta name="author" content="Pet Republic Team" />
      </Helmet>

      {/* Startup Article Section */}
      <div className="startup-article-wrapper">
        <img src={passport} alt="Startup Article Image" className="startup-article-image" />
        <div className="startup-text-wrapper">
          <h1 style={{ color: '#EF8214' }}>{startupArticle.title}</h1>
          <p className="startup-description">{startupArticle.description}</p>
          <p className="startup-content">{startupArticle.content}</p>
          <a
            href={startupArticle.link}
            target="_blank"
            rel="noopener noreferrer"
            className="startup-link"
          >
            Read more here
          </a>
        </div>
      </div>

      {/* Blog Cards Section */}
      <Typography variant="h4" component="h2" className="blog-header">
        Blogs from Our Team!
      </Typography>
      <div className="blog-cards">
        {blogs.map(blog => (
          <Card key={blog.id} className="blog-card" sx={{ width: 345, margin: 2 }}>
            <CardMedia
              component="img"
              alt={blog.title}
              height="200"
              image={blog.image}
              title={blog.title}
            />
            <CardContent>
              <Typography variant="h5" component="div" className="blog-title">
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="blog-description">
                {blog.description}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" className="blog-author">
                By {blog.author}
              </Typography>
            </CardContent>
            <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
              <Button size="small" color="primary" sx={{ marginBottom: 2 }}>
                Read More
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
