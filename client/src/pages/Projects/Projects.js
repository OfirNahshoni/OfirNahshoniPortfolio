import React, { useState } from 'react'
import './projects.css'
import ProjectView from './ProjectView'

import Spin from 'react-reveal/Spin'
import { ProjectsList } from '../../utils/ProjectsList'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState({});
    const [showViewModal, setShowViewModal] = useState(false);

    const handleViewClick = (project) => {
        if (project.repoLink !== '') {
            window.open(project.repoLink, '_blank');
        } else {
            setSelectedProject(project);
            setShowViewModal(true);
        }
    };

    return (
        <>
            <div className='projects' id='projects'>
                <h2 className='col-12 mt-3 mb-1 text-center'>Top Recent Projects</h2>
                <hr />
                <p className='pb-3 text-center'>
                    Here are my top 3 projects with links to source code and overview videos. <br />
                    MY projects are versatile between couple of fields - FullStack - Web & Mobile, Embedded systems.
                </p>

                <div id='ads' className='row'>
                    <Spin>
                        {ProjectsList.map((project) => (
                            <div className='col-md-4' key={project.id}>
                                <div className='card rounded'>
                                    <div className='card-img'>
                                        <span className='card-notify-badge'>{project.area}</span>
                                        <img src={project.logoImgUrl} />
                                    </div>

                                    <div className='card-img-overly m-auto mt-3'>
                                        {project.techList.map((techItem) => (
                                            <span className='card-detail-badge'>{techItem}</span>
                                        ))}
                                    </div>

                                    <div className='card-body text-center'>
                                        <div className='ad-title'>
                                            <h6>{project.title}</h6>
                                        </div>
                                        <a className='ad-btn' onClick={() => handleViewClick(project)}>View</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Spin>
                </div>
            </div>

            <ProjectView
                show={showViewModal}
                onClose={() => setShowViewModal(false)}
                project={selectedProject}
            />
        </>
    )
}

export default Projects
