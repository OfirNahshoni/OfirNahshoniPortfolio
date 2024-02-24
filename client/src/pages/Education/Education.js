import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import './education.css'
import { useTheme } from '../../context/ThemeContext';
import BrainnestCert from '../../assests/docs/PythonCertBrainnest.pdf';
import DevopsExpertsCert from '../../assests/docs/PythonCertDevopsExperts.pdf';

const Education = () => {
    const [theme] = useTheme();
    return (
        <>
            <div className='education' id='education'>
                <h2 className='col-12 mt-3 mb-1 text-center'>Education Details</h2>
                <hr />

                <VerticalTimeline>
                    {/* Degree */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: theme === 'dark' ? '#232154' : 'white',
                            color: theme === 'dark' ? 'white' : 'black'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2019-2024"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">BSc Computer Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">Ruppic Academic Center, ISR</h4>
                        <p>
                            Final Project - 98. GPA - 82.
                        </p>
                    </VerticalTimelineElement>

                    {/* Python Courses */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: theme === 'dark' ? '#232154' : 'white',
                            color: theme === 'dark' ? 'white' : 'black'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2022-2023"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">2 Python Courses</h3>
                        <h4 className="vertical-timeline-element-subtitle">Brainnest & DevopsExperts</h4>
                        <div className='certs-buttons'>
                            <a href={BrainnestCert} target='blank'>
                                <button className='btn btn-cert1'>Cert 1</button>
                            </a>
                            <a href={DevopsExpertsCert} target='blank'>
                                <button className='btn btn-cert2'>Cert 2</button>
                            </a>
                        </div>
                    </VerticalTimelineElement>

                    {/* Hackathons */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: theme === 'dark' ? '#232154' : 'white',
                            color: theme === 'dark' ? 'white' : 'black'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2022-2023"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">2 FPGA Kackathons</h3>
                        <h4 className="vertical-timeline-element-subtitle">RISC-V processor for AI computational accelerator</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education
