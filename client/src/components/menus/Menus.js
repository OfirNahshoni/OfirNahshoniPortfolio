import React from 'react'
import './menus.css'
import ProfileImg from '../../assests/images/me3.jpeg'
import {
    FcHome,
    FcAbout,
    FcBiotech,
    FcReading,
    FcVideoProjector,
    FcBusinessContact
} from "react-icons/fc";
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <Zoom>
                        <div className='sidebar-profile-img'>
                            <img
                                src={ProfileImg}
                                alt='profile-img'
                            />
                        </div>
                    </Zoom>

                    <Fade left>
                        <div className='sidebar-items'>
                            <div className='sidebar-item'>
                                <div className='sidebar-link'>
                                    <Link
                                        to='home'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcHome />
                                        Home
                                    </Link>
                                </div>
                                <div className='sidebar-link'>
                                    <Link
                                        to='about'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcAbout />
                                        About
                                    </Link>
                                </div>
                                <div className='sidebar-link'>
                                    <Link
                                        to='education'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcReading />
                                        Education
                                    </Link>
                                </div>
                                <div className='sidebar-link'>
                                    <Link
                                        to='techstack'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcBiotech />
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className='sidebar-link'>
                                    <Link
                                        to='projects'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcVideoProjector />
                                        Projects
                                    </Link>
                                </div>
                                <div className='sidebar-link'>
                                    <Link
                                        to='contact'
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcBusinessContact />
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </>
            ) : (
                <>
                    <div className='sidebar-items'>
                        <div className='sidebar-item'>
                            <div className='sidebar-link'>
                                <Link
                                    to='home'
                                    smooth={true}
                                    spy={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcHome title='Home' />
                                </Link>
                            </div>
                            <div className='sidebar-link'>
                                <Link
                                    to='about'
                                    smooth={true}
                                    spy={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcAbout title='About' />
                                </Link>
                            </div>
                            <div className='sidebar-link'>
                                <Link
                                    to='education'
                                    smooth={true}
                                    spy={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcReading title='Education' />
                                </Link>
                            </div>
                            <div className='sidebar-link'>
                                <Link
                                    to='techstack'
                                    smooth={true}
                                    spy={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcBiotech title='Tech Stack' />
                                </Link>
                            </div>
                            <div className='sidebar-link'>
                                <Link
                                    to='projects'
                                    smooth={true}
                                    spy={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcVideoProjector title='Projects' />
                                </Link>
                            </div>
                            <div className='sidebar-link'>
                                <Link
                                    to='contact'
                                    smooth={true}
                                    spy={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcBusinessContact title='Contact' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Menus
