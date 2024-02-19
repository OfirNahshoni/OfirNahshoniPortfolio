import React from 'react'
import './menus.css'
import ProfileImg from '../../assests/images/me3.jpeg'
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBusiness } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";

const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <div className='sidebar-profile-img'>
                        <img
                            src={ProfileImg}
                            alt='profile-img'
                        />
                    </div>

                    <div className='sidebar-items'>
                        <div className='sidebar-item'>
                            <div className='sidebar-link'>
                                <FcHome />
                                Home
                            </div>
                            <div className='sidebar-link'>
                                <FcAbout />
                                About
                            </div>
                            <div className='sidebar-link'>
                                <FcBusiness />
                                Work Experience
                            </div>
                            <div className='sidebar-link'>
                                <FcBiotech />
                                Tech Stack
                            </div>
                            <div className='sidebar-link'>
                                <FcReading />
                                Education
                            </div>
                            <div className='sidebar-link'>
                                <FcVideoProjector />
                                Projects
                            </div>
                            <div className='sidebar-link'>
                                <FcVoicePresentation />
                                Testimonial
                            </div>
                            <div className='sidebar-link'>
                                <FcBusinessContact />
                                Contact
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='sidebar-items'>
                        <div className='sidebar-item'>
                            <div className='sidebar-link'>
                                <FcHome title='Home' />
                            </div>
                            <div className='sidebar-link'>
                                <FcAbout title='About' />
                            </div>
                            <div className='sidebar-link'>
                                <FcBusiness title='Work Experience' />
                            </div>
                            <div className='sidebar-link'>
                                <FcBiotech title='Tech Stack' />
                            </div>
                            <div className='sidebar-link'>
                                <FcReading title='Education' />
                            </div>
                            <div className='sidebar-link'>
                                <FcVideoProjector title='Projects' />
                            </div>
                            <div className='sidebar-link'>
                                <FcVoicePresentation title='Testimonial' />
                            </div>
                            <div className='sidebar-link'>
                                <FcBusinessContact title='Contact' />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Menus
