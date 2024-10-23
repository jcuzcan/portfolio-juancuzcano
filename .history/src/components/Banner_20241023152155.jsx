import React from 'react'
import 'boxicons'

const Banner = () => {
  return (
    <div class='banner'>
      <div class='container'>
        <div class='row p-5' >
          <div class='col-xl-8 col-lg-8'>
            <div class='textblock'>
              <h3>Hello, It's Me</h3>
              <h1>Juan Cuzcano</h1>
              <h3>And I'm a <span> Information Technology Student</span></h3>
              <p>Let's connect on social media!</p>
              <div class="social-media">
                <a href="www.linkedin.com/in/juan-cuzcano-83157b213/" target="_blank" rel="noreferrer"><box-icon type='logo' name='linkedin-square'></box-icon></a>
                <a href="https://github.com/jcuzcan" target="_blank" rel="noreferrer"><box-icon name='github' type='logo' ></box-icon></a>
              </div>
              <a href="./Harshadkumar_Patel.pdf" download class="btn mt-2">Download CV</a>
            </div>
          </div>
          <div class='col-xl-4 col-lg-4'>
            <img src="./bannar.png" alt="" class='home-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner