import React from 'react'
import './projects.css'
import NotesLogo from '../../assests/images/notes_logo.png'
import TripleSLogo from '../../assests/images/triples_logo.png'
import VehiclesMarketLogo from '../../assests/images/vehicles_market_logo.png'
import Spin from 'react-reveal/Spin'

const Projects = () => {
    return (
        <>
            <div className='project' id='projects'>
                <h2 className='col-12 mt-3 mb-1 text-center'>Top Recent Projects</h2>
                <hr />
                <p className='pb-3 text-center'>
                    Here are my top 3 projects with links to source code and overview videos. <br />
                    MY projects are versatile between couple of fields - FullStack - Web & Mobile, Embedded systems.
                </p>

                <div id='ads' className='row'>
                    <Spin>
                        {/* Notes Web App */}
                        <div className='col-md-4'>
                            <div className='card rounded'>
                                <div className='card-img'>
                                    <span className='card-notify-badge'>Full Stack</span>
                                    <img src={NotesLogo} alt='project1' />
                                </div>
                                <div className='card-img-overly m-auto mt-3'>
                                    <span className='card-detail-badge'>HTML</span>
                                    <span className='card-detail-badge'>Flask</span>
                                    <span className='card-detail-badge'>SQLite3</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title'>
                                        <h6>Notes Web App</h6>
                                    </div>
                                    <a className='ad-btn' href='#'>View</a>
                                </div>
                            </div>
                        </div>

                        {/* TripleS IOT security system */}
                        <div className='col-md-4'>
                            <div className='card rounded'>
                                <div className='card-img'>
                                    <span className='card-notify-badge'>Embedded</span>
                                    <img src={TripleSLogo} alt='project2' />
                                </div>
                                <div className='card-img-overly m-auto mt-3'>
                                    <span className='card-detail-badge'>ReactJS</span>
                                    <span className='card-detail-badge'>NodeJS</span>
                                    <span className='card-detail-badge'>ExpressJS</span>
                                    <span className='card-detail-badge'>AWS</span>
                                    <span className='card-detail-badge'>Raspberry PI</span>
                                    <span className='card-detail-badge'>ESP32</span>
                                    <span className='card-detail-badge'>JavaScript</span>
                                    <span className='card-detail-badge'>Python</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title'>
                                        <h6>IOT security system</h6>
                                    </div>
                                    <a className='ad-btn' href='#'>View</a>
                                </div>
                            </div>
                        </div>

                        {/* Vehicles Market Web app */}
                        <div className='col-md-4'>
                            <div className='card rounded'>
                                <div className='card-img'>
                                    <span className='card-notify-badge'>FullStack</span>
                                    <img src={VehiclesMarketLogo} alt='project3' />
                                </div>
                                <div className='card-img-overly m-auto mt-3'>
                                    <span className='card-detail-badge'>HTML</span>
                                    <span className='card-detail-badge'>Flask</span>
                                    <span className='card-detail-badge'>SQLite3</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title'>
                                        <h6>Web app</h6>
                                    </div>
                                    <a className='ad-btn' href='#'>View</a>
                                </div>
                            </div>
                        </div>
                    </Spin>
                </div>
            </div>
        </>
    )
}

export default Projects
