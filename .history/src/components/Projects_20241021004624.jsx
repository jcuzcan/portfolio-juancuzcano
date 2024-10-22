import React, { useEffect, useState } from 'react'

const Projects = () => {

  const [projects, setProjects] = useState();

  const fetchProjects = async () => {
    const url = 'https://admin.codewithharsh.ca/api/projects';
    const response = await fetch(url);
    const data = await response.json();

    setProjects(data);
    console.log('fetchProjects ', data);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id='projects' class='projects container'>
      <h2 class="text-center">My Projects</h2>
      <div class='row'>
        {projects && projects.map((item, index) => {
          return (
            <div key={index} class='col-lg-4 col-md-6'>
              <div class='card border border-dark'>
                <img src={item?.image} alt="project image" class='project-img' />
                <h5 class="text-center">{item?.title}</h5>
                <span class='type text-center'><em>{item?.type?.title}</em></span>
                <p class='text-justify'> Poop </p>
                <button onClick={() => window.open(item?.url, "_blank")} class='btn btn-primary btn-sm'>View</button>
              </div>
            </div>
          )
        })}


      </div>
    </section>
  )
}

export default Projects