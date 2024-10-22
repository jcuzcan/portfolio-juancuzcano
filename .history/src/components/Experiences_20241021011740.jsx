import React from 'react';

const Experiences = () => {
  // Hardcoded experiences data
  const experiences = [
    {
      job_title: "Student Desktop Support Technican",
      company_name: "Kean University",
      start_date: "2024", // Use a valid start date
      end_date: "Present", // Use a valid end date
      description: "As an IT Support Technician, I provide technical support to students, faculty, and staff to resolve hardware and software issues, ensuring user satisfaction. My responsibilities include configuring and imaging new workstations with the latest hardware upgrades and software installations for campus use. I collaborate with colleagues to address technical challenges and escalate complex issues to higher-level support for optimal resolution. Additionally, I organize and maintain an updated inventory of incoming and outgoing IT assets to ensure a safe and efficient workspace."
    },
    // Add more experiences as needed
  ];

  return (
    <section id='experiences' className="section gray-bg">
      <div className="container">
        <div className="section-title">
          <h2 className="text-center">Experience</h2>
        </div>
        <div className="row">
          <div className="col-12 m-15px-tb">
            <div className="resume-box border border-dark">
              <ul>
                {experiences.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="icon border border-dark">
                        <i className="fas fa-briefcase"></i>
                      </div>
                      <span className="time">{new Date(item.start_date).getFullYear()} - {new Date(item.end_date).getFullYear()}</span>
                      <h5>{item.job_title} - {item.company_name}</h5>
                      <p>{item.description}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
