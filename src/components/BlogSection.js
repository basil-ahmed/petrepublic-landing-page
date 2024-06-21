import React from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';
import dog from '../assets/images/petsummer.jpg';
import cat from '../assets/images/cat2.jpg';
import bird from '../assets/images/bird.jpg';

const blogs = [
  {
    id: 1,
    title: 'Summer Pet Care in the UAE',
    author: 'Atefeh',
    description: 'Concered about your pet in this weather? Keep Your Furry Friends Safe from the rising temperatures in the UAE with the help of this article!',
    image: dog,
  },
  {
    id: 2,
    title: 'Blog Article 2',
    author: 'Author 2',
    description: 'Coming Soon!',
    image: cat,
  },
  {
    id: 3,
    title: 'Blog Article 3',
    author: 'Author 3',
    description: 'Coming Soon!',
    image: bird,
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-header">Blogs from Our Team!</h2>
      <div className="blog-cards">
        {blogs.map(blog => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className="content">
            <div className="blog-card-image" style={{ backgroundImage: `url(${blog.image})` }}></div>
            <div className="blog-card-overlay">
              <h3>{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <p className="blog-author">By {blog.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
