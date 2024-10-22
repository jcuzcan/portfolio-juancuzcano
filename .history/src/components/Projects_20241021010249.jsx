import React from 'react';

const Projects = () => {
  // Hardcoded project data
  const projects = [
    {
      title: "Project 1",
      type: { title: "Web App" },
      content: "This is a description of Project 1. It is an awesome web application built with React.",
      url: "https://example.com/project1",
      image: "./StockPhoto.jpg", // Replace with actual image URLs
    },
    {
      title: "Project 2",
      type: { title: "Mobile App" },
      content: "This is a description of Project 2. It's a mobile application developed using React Native.",
      url: "https://example.com/project2",
      image: "./StockPhoto1.jpg", // Replace with actual image URLs
    },
    {
      title: "Project 3",
      type: { title: "Desktop App" },
      content: "This is a description of Project 3. It is a desktop application created using Electron.",
      url: "https://example.com/project3",
      image: "https://example.com/image3.jpg", // Replace with actual image URLs
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
