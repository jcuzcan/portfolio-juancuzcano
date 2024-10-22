import React from 'react';

const Skill = () => {
  // Hardcoded skills data
  const skills = [
    {
      title: "FreshService",
      image: "./FreshService.jpg", // Replace with actual image path
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", // Replace with actual URL
    },
    {
      title: "Mircosoft 365",
      image: "./365.jpg", // Replace with actual image path
      url: "https://reactjs.org/", // Replace with actual URL
    },
    {
      title: "Google Workspace",
      image: "./Google.png", // Replace with actual image path
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS", // Replace with actual URL
    },
    // Add more skills as needed
  ];

  return (
    <section id='skills' className='skills container'>
      <h2 className="text-center">Skills</h2>
      <p className="text-center">Programming Languages & Tools</p>
      <div className='row'>
        {skills.map((item, index) => {
          return (
            <div key={index} className='col-lg-4 col-md-6 card'>
              <div className='skills-item text-center' onClick={() => window.open(item.url, "_blank")}>
                <img src={item.image} alt="" className='skills-img' />
                <p className='skills-description'>{item.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Skill;
