import React, { useEffect, useState } from 'react'

const Skill = () => {
  const [skills, setSkills] = useState();

  const fetchSkills = async () => {
    const url = 'https://admin.codewithharsh.ca/api/skills';
    const response = await fetch(url);
    const data = await response.json();

    setSkills(data);
    console.log('fetchSkills ', data);
  };

  useEffect(() => {
    fetchSkills();
  }, [])

  return (
    <section id='skills' class='skills container'>
      <h2 class="text-center">Skills</h2>
      <p class="text-center">Programming Languages & Tools</p>
      <div class='row'>
        {skills && skills.map((item, index) => {
          return (
            <div key={index} class='col-lg-4 col-md-6 card'>
              <div class='skills-item text-center' onClick={() => window.open(item?.url, "_blank")}>
                <img src={item?.image} alt="" class='skills-img' />
                <p class='skills-description'>{item?.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skill