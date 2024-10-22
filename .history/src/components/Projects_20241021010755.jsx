import React from 'react';

const Projects = () => {
  // Hardcoded project data
  const projects = [
    {
      title: "Project 1",
      type: { title: "Tutorial" },
      content: "Created a beginner-friendly tutorial on building a blog using HTML, CSS, and the Bootstrap framework, providing step-by-step guidance for new developers.",
      image: "./StockPhoto.jpg", // Replace with actual image URLs
    },
    {
      title: "Project 2",
      type: { title: "Website App" },
      content: "Developed a comprehensive website that enables users to track their calorie intake, calculates BMI, and offers personalized daily recommendations for proteins, carbs, and fats.",
      image: "./StockPhoto1.jpg", // Replace with actual image URLs
    },
    {
      title: "Project 3",
      type: { title: "Hardware" },
      content: "This is a description of Project 3. It is a desktop application created using Electron.",
      image: "./StockPhoto2.jpg", // Replace with actual image URLs
    },
  ];

  return (
    <section id='projects' className='projects container'>
      <h2 className="text-center">My Projects</h2>
      <div className='row'>
        {projects.map((item, index) => {
          return (
            <div key={index} className='col-lg-4 col-md-6'>
              <div className='card border border-dark'>
                <img src={item.image} alt="project image" className='project-img' />
                <h5 className="text-center">{item.title}</h5>
                <span className='type text-center'><em>{item.type.title}</em></span>
                <p className='text-justify'>{item.content}</p> {/* Use the content from the project data */}
                <button onClick={() => window.open(item.url, "_blank")} className='btn btn-primary btn-sm'>View</button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Projects;
