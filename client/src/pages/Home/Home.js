import React from 'react'
import Typewriter from 'typewriter-effect'
import './home.css'
import Resume from '../../assests/docs/CV_OfirNahshoni_Software.pdf'

const Home = () => {
  return (
    <>
      <div className='container-fluid home-container'>
        <div className='container home-content'>
          <h2>Hi  👋  I'm a</h2>

          <h1>
            <Typewriter
              options={{
                strings: ['Computer Engineer', 'FullStack Developer', 'Embedded Systems Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className='home-buttons'>
            <button className='btn btn-hire'>Hire Me</button>
            <a className='btn btn-cv' href={Resume} download='OfirNahshoni_CV.pdf'>My Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
