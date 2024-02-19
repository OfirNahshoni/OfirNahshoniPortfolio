import React from 'react'
import './about.css'
import ProfileImg from '../../assests/images/LinkedInProfile.jpeg'

const About = () => {
    return (
        <div className='about'>
            <div className='row'>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-6 about-img'>
                    <img src={ProfileImg} alt='profile-img' />
                </div>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-6 about-content'>
                    <h1>About me</h1>
                    <p>
                        As a fresh Computer Engineering graduate, my journey has been a blend of hands-on and theoretical
                        experiences in technology. I've developed a diverse skill set, focusing on communication protocols,
                        hardware handling, and both full-stack and embedded software development.

                        A prime example of my work is TripleS (Safe Security System), a full-stack web application
                        for home security. This project highlights my ability to create secure, efficient systems
                        using React and Express.js, demonstrating my skill in crafting dynamic user interfaces and
                        sturdy server-side applications.

                        Beyond software, my expertise also encompasses hardware. Working with the ESP32, a
                        versatile microcontroller with Wi-Fi and Bluetooth capabilities, I've delved into the
                        synergy between hardware and software. This is showcased in TripleS's integration with
                        sensors and cameras, utilizing protocols like MQTT, WebRTC, and FTP for seamless data
                        and video transmission. Additionally, the Raspberry Pi has been instrumental in my
                        hardware projects, further illustrating my comprehensive skill set in this field.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default About
