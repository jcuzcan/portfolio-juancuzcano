import React from 'react'

const About = () => {
  return (

    <section id='about' className='container mh-100 card '>

      <div class='row p-5'>
        <div class='col-md-4 text-center'>
          <img src="ProfilePic2.jpg" alt="" className='about-img' />
        </div>
        <div class='col-md-7 '>
          <h2 className='text-center'>About Me</h2>
          <p class="text-justify"> I hold a Bachelor's degree in Information Technology with a concentration in Cybersecurity from Kean University, where I am expected to graduate in December 2025. Previously, I earned my Associate's degree in Information Technology from Bergen Community College, graduating in August 2023. I aspire to become a cybersecurity analyst by the time I graduate, actively pursuing my CompTIA Security+ certification. My passion for protecting people's data and helping others motivates me in my career path, driving my dedication to excel in the field of cybersecurity.</p>


        </div>
      </div>
    </section>
  )
}

export default About;