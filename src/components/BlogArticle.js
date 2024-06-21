import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogArticle.css';

const blogContent = {
  1: { 
    title: 'Keeping Your Furry Friends Safe in the Heat', 
    author: 'Atefeh', 
    content: `
    <p>Get ready for the dog days of summer in the UAE! As temperatures soar, it's important to make sure your furry friends are staying safe and cool in the scorching heat. From providing shade to limiting exercise, there are plenty of ways to ensure your pets stay happy and healthy during the summer months.
                                   
When it comes to caring for our furry friends during the hot summer months, it is essential to follow some important tips to ensure their wellbeing. 
</p>
      <h2>Shade & Shelter</h2>
      <p>Providing shade is crucial to protect pets from the scorching sun, as they can easily overheat. Plenty of water should always be available to prevent dehydration, especially during the hottest parts of the day. </p>
      <h2>Exercise Timing</h2>
      <p>One key tip is to take your dog for walks either before sunrise or after sunset to avoid the burning hot sidewalks and roads. If you must go out during the day, make sure to use doggie boots for protection.</p>
      <h2>Air Circulation</h2>
      <p>Improving air circulation in outdoor spaces for pets' comfort and safety is crucial to ensure your furry friend remains cool and comfortable, especially during hot weather. Dogs can easily become overheated, leading to heatstroke and other health issues if they are not provided with adequate air circulation. To help your pet stay safe outdoors, consider creating shaded areas where they can rest and relax away from direct sunlight.</p>
      <h2>Proper Hydration</h2>
      <p>With temperatures reaching extreme highs, it is essential to ensure that your furry friends have access to fresh drinking water at all times. Refreshing their water bowls at least twice a day will help keep them cool, hydrated, and healthy. </p>
      <h2>Cooling Mats</h2>
      <p>Implementing cooling mats for pets to prevent heat exhaustion in UAE summers is a crucial measure that all pet owners should consider. With soaring temperatures in the region, the risk of heatstroke for our furry friends increases significantly. Cats and dogs are not able to regulate their body temperature as efficiently as humans, making them more susceptible to overheating.</p>
      <p>In conclusion, it is vital to prioritize the well-being of our furry friends during the scorching summer months in the UAE. By following the above tips, we can ensure that our pets stay safe and comfortable in the heat. These simple yet effective measures can make a significant difference in preventing heat-related illnesses and ensuring a happy and healthy summer for our pets.</p>
    ` 
  },
  2: { 
    title: 'Blog Article 2', 
    author: 'Author 2', 
    content: `
      <h2>Subheader 1</h2>
      <p>This is a paragraph of Blog Article 2 content.</p>
      <h2>Subheader 2</h2>
      <p>This is another paragraph of Blog Article 2 content.</p>
    ` 
  },
  3: { 
    title: 'Blog Article 3', 
    author: 'Author 3', 
    content: `
      <h2>Subheader 1</h2>
      <p>This is a paragraph of Blog Article 3 content.</p>
      <h2>Subheader 2</h2>
      <p>This is another paragraph of Blog Article 3 content.</p>
    ` 
  },
};

const BlogArticle = () => {
    const { id } = useParams();
    const blog = blogContent[id];
  
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);
  
    if (!blog) {
      return <div>Blog article not found</div>;
    }
  
    return (
      <div className="blog-article">
        <div className="blog-card">
          <h1>{blog.title}</h1>
          <p><em>by {blog.author}</em></p>
          <div className="content_2" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    );
  };
  
  export default BlogArticle;