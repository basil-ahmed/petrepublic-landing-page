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
    title: 'Creating a Pet-Friendly Home: Tips for Safety and Comfort', 
    author: 'Atefeh', 
    content: `
    <p>Creating a pet-friendly home is essential for ensuring your furry friends are safe, comfortable, and happy. By making a few adjustments to your living space, you can create an environment where your pets can thrive. Here are some simple tips to help you make your home more accommodating for pets.</p>
      <h2>Safety First</h2>
      <p>Safety should always be a top priority. Keep hazardous items like cleaning supplies, medications, and small objects out of reach. Use child-proof locks on cabinets if necessary. Many common houseplants, such as lilies and poinsettias, can be toxic to pets. Opt for pet-safe plants like spider plants or Boston ferns. To prevent pets from chewing on electrical cords, hide or cover them using cord protectors or running them through PVC pipes. Additionally, ensure windows have secure screens to prevent pets from falling out, and consider installing window perches with safety guards for cats.
</p>
      <h2>Comfortable Living Spaces</h2>
      <p>Creating cozy nooks for your pets can greatly enhance their comfort. Designate quiet areas with comfy beds or blankets where pets can retreat and relax. A cat tree or a dog bed can provide a perfect sanctuary for your pets. Make sure your home is well-ventilated in the summer and warm in the winter, as pets can be sensitive to extreme temperatures. Place water and food bowls in easily accessible spots, and ensure water is always fresh and clean. Use rugs or mats on slippery surfaces to help prevent your pets from slipping and injuring themselves.</p>
      <h2>Entertainment</h2>
      <p>Providing enrichment and entertainment is crucial for your pets' mental and physical well-being. Offer a variety of toys to keep them entertained and mentally stimulated, and rotate toys regularly to maintain their interest. For cats, scratching posts are essential to save your furniture, while chew toys can help dogs keep their teeth healthy and reduce boredom. If possible, provide a safe outdoor space, such as a fenced yard or a secure balcony, where pets can enjoy fresh air and sunshine.</p>
      <h2>Regular Maintenance</h2>
      <p>Maintaining cleanliness in your home is important for both you and your pets. Keep your home clean and free of pet hair and dander by regularly washing pet bedding and vacuuming carpets and furniture. Routine vet visits are essential to ensure your pets remain healthy and any issues are caught early. Regular check-ups with the vet can help maintain your pets' overall health and well-being.</p>
      <p>By following these tips, you can create a home environment that ensures the safety and comfort of your beloved pets. With a little effort and attention to detail, you can make your shared living space a happy and harmonious one.</p>
    ` 
  },
  3: { 
    title: '10 Signs Your Pet Needs to See a Vet: Early Detection of Health Problems', 
    author: 'Atefeh', 
    content: `
      <p>As a pet owner, recognizing the early signs of health issues in your pet is crucial for their well-being. Here are 10 key indicators that your pet needs to visit the vet:</p>
      <h2>1. Changes in Appetite</h2>
      <p>Sudden loss of appetite or refusal to eat can signal underlying health problems. Conversely, increased hunger might indicate diabetes or hyperthyroidism.</p>
      <h2>2. Unusual Thirst</h2>
      <p>Excessive drinking and frequent urination can be symptoms of kidney disease or diabetes. If your pet's water intake drastically increases, it's time for a vet visit.</p>
      <h2>3. Lethargy</h2>
      <p>Lack of energy or enthusiasm for usual activities often indicates illness or pain. If your pet seems unusually tired or inactive, it's important to seek veterinary advice.</p>
      <h2>4. Weight Loss or Gain</h2>
      <p>Unexplained weight loss might point to cancer, liver disease, or gastrointestinal issues. Rapid weight gain could be a sign of heart disease or fluid retention.</p>
      <h2>5. Persistent Coughing or Sneezing</h2>
      <p>Chronic coughs or sneezes can be symptoms of respiratory infections, allergies, or heart disease. Persistent respiratory issues should be checked by a vet.</p>
      <h2> 6. Vomiting or Diarrhea</h2>
      <p>Frequent vomiting or diarrhea can indicate infections, poisoning, or gastrointestinal diseases. If these symptoms persist, it's crucial to get your pet examined.</p>
      <h2>7. Changes in Urination</h2>
      <p>Difficulty urinating, blood in urine, or accidents in the house may signal urinary tract infections or bladder stones. These symptoms require immediate veterinary attention.</p>
      <h2>8. Skin and Coat Issues</h2>
      <p>Excessive scratching, bald patches, or changes in coat texture can be signs of allergies, parasites, or skin infections. Any noticeable changes in your pet’s skin or fur should be addressed by a vet.</p>
      <h2>9. Behavioral Changes</h2>
      <p>Aggression, anxiety, or withdrawal from social interactions might indicate pain or neurological issues. Sudden changes in behavior warrant a professional evaluation.</p>
      <h2>10. Bad Breath</h2>
      <p>Foul-smelling breath can be a sign of dental disease, kidney issues, or diabetes. Persistent bad breath should be checked by a vet to rule out serious health problems.</p>
      <p>If you notice any of these signs, it's important to consult with your vet as soon as possible. Early detection and treatment can make a significant difference in your pet’s health and quality of life.</p>
      
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