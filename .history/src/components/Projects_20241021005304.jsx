import React from 'react';

const Projects = () => {
  // Hardcoded project data
  const projects = [
    {
      title: "Project 1",
      type: { title: "Web App" },
      content: "This is a description of Project 1. It is an awesome web application built with React.",
      image: "https://example.com/image1.jpg", // Replace with actual image URLs
    }
  ];

  return (
    <section id='projects' className='projects container'>
      <h2 className="text-center">My Projects</h2>
      <div className='row'>
        {projects.map((item, index) => {
          return (
            <div key={index} className='col-lg-4 col-md-6'>
              <div className='card border border-dark'>
                {/* Center the image using mx-auto */}
                <img src={item.image} alt="project image" className='project-img mx-auto d-block' />
                <h5 className="text-center">{item.title}</h5>
                <span className='type text-center'><em>{item.type.title}</em></span>
                <p className='text-justify'>{item.content}</p>
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
