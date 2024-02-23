import React from 'react'
import './contact.css'
import ContactImage from '../../assests/images/contact.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useTheme } from '../../context/ThemeContext';

const Contact = () => {
    const [theme] = useTheme();
    return (
        <>
            <div className='contact' id='contact'>
                <div className='card card0 border-0'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='card1'>
                                <div className='row border-line'>
                                    <img src={ContactImage} alt='contact-image' className='contact-img' />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                            <div className='card2 d-flex card border-0 px-4 py-4'>
                                <div className='row'>
                                    <div className='row contact-icons'>
                                        <h6>
                                            Contact With
                                            <FaLinkedin className='ms-3' size={25} color={theme === 'light' ? 'darkgreen' : 'lightgreen'} />
                                            <FaGithub className='ms-3' size={25} color={theme === 'light' ? 'darkgreen' : 'lightgreen'} />
                                            <FaFacebook className='ms-3' size={25} color={theme === 'light' ? 'darkgreen' : 'lightgreen'} />
                                        </h6>
                                    </div>
                                    <div className='row px-3 mb-4'>
                                        <div className='line' />
                                        <small className='or text-center'>OR</small>
                                        <div className='line' />
                                    </div>

                                    <div className='row px-3'>
                                        <input type='text' name='name' placeholder='Enter your Name' className='mb-3' />
                                    </div>
                                    <div className='row px-3'>
                                        <input type='email' name='email' placeholder='Enter your Email Address' className='mb-3' />
                                    </div>
                                    <div className='row px-3'>
                                        <textarea type='text' name='msg' placeholder='Enter your Message' className='mb-3' />
                                    </div>
                                    <div className='row px-3'>
                                        <button className='btn-contact' type='submit'>SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
