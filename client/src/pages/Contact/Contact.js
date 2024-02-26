import React, { useState } from 'react'
import './contact.css'
import ContactImage from '../../assests/images/contact.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useTheme } from '../../context/ThemeContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Contact = () => {
    const [theme] = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    // handle submit op
    const handleSubmit = async (e) => {
        // prevent the refresh of the page after clicking the submit button (default behavior)
        e.preventDefault();
        try {
            if (!name || !email || !content) {
                toast.error('Please provide all fields');
            }

            // send request to backend
            const response = await axios.post('http://localhost:8080/api/portfolio/send-email', {
                name,
                email,
                content
            });

            // success validation
            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                                            <a href='https://www.linkedin.com/in/ofir-nahshoni-software/' target='blank'>
                                                <FaLinkedin className='ms-3' size={25} color={theme === 'light' ? 'darkgreen' : 'lightgreen'} />
                                            </a>
                                            <a href='https://github.com/OfirNahshoni/' target='blank'>
                                                <FaGithub className='ms-3' size={25} color={theme === 'light' ? 'darkgreen' : 'lightgreen'} />
                                            </a>
                                        </h6>
                                    </div>
                                    <div className='row px-3 mb-4'>
                                        <div className='line' />
                                        <small className='or text-center'>OR</small>
                                        <div className='line' />
                                    </div>

                                    <div className='row px-3'>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Enter your Name'
                                            className='mb-3'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className='row px-3'>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Enter your Email Address'
                                            className='mb-3'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className='row px-3'>
                                        <textarea
                                            type='text'
                                            name='content'
                                            placeholder='Enter your Message'
                                            className='mb-3'
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                        />
                                    </div>
                                    <div className='row px-3'>
                                        <button
                                            type='submit'
                                            className='btn-contact'
                                            onClick={handleSubmit}
                                        >
                                            SEND
                                        </button>
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
