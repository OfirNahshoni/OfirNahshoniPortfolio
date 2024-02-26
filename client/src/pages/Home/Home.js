import React from 'react'
import Typewriter from 'typewriter-effect'
import './home.css'
import Resume from '../../assests/docs/CV_OfirNahshoni.pdf'
import { useTheme } from '../../context/ThemeContext'
import { MdDarkMode } from "react-icons/md"
import { MdLightMode } from "react-icons/md"
import Fade from 'react-reveal/Fade'

const Home = () => {
  const [theme, setTheme] = useTheme();

  // handle Theme change
  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className='theme-btn' onClick={handleTheme}>
          {theme === 'light' ? (
            <MdDarkMode size={30} />
          ) : (
            <MdLightMode size={30} />
          )}
        </div>

        <div className='container home-content'>
          <Fade right>
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
          </Fade>
          <Fade bottom>
            <div className='home-buttons'>
              <a
                className='btn btn-hire'
                href='https://api.whatsapp.com/send?phone=0525699466'
                rel="noreferrer"
                target='_blank'
              >
                Hire Me
              </a>
              <a className='btn btn-cv' href={Resume} download='OfirNahshoni_CV.pdf'>My Resume</a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Home
