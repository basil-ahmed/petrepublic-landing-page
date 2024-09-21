import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import './BlogSection.css';
import article1 from '../assets/images/article.jpg';
import article2 from '../assets/images/article2.png';
import article3 from '../assets/images/article3.jpg';

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
