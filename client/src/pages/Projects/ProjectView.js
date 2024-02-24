import React from 'react'
import { FaRegWindowClose } from "react-icons/fa";

const ProjectView = ({ show, onClose, project }) => {
    if (!show) {
        return null;
    }

    return (
        <>
            <div className='full-page-modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <button onClick={onClose}><FaRegWindowClose /></button>
                    </div>

                    <div className='modal-body'>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <video controls src={project.videoUrl} className='project-video' />
                        <div className='details'>
                            {project.details}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectView
