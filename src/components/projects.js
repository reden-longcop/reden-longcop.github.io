import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import useIsVisible from "./useIsVisible";


const Project = () => {
    const projectSets = [
        {
            id: 1,
            projects: [
                { 
                    name: 'Web Game Automation', 
                    id: 'project-1', 
                    tools: 'Python, Pytest, Selenium',
                    feature: 'Multi',
                    caption: 'This pytest automation script is designed to test various functionalities of the Multi Feature', 
                    url: 'https://github.com/Code-Me-N0t/Gaming_Automation-Pytest.git' 
                },
                { 
                    name: 'Web Game Automation', 
                    id: 'project-2', 
                    tools: 'Cypress', 
                    feature: 'Sidebet', 
                    caption: 'This Cypress test suite is designed to automate the testing of a mobile Vue application\'s Sidebet feature', 
                    url: 'https://github.com/Code-Me-N0t/Gaming_Automation-Cypress.git' 
                },
                { 
                    name: 'Flight Tracking', 
                    id: 'project-3', 
                    tools: 'Python, Pytest, Selenium',
                    feature: 'Tracking',
                    caption: 'This pytest automation script is designed to automate the testing of a cargo shipment schedule validation', 
                    url: 'https://github.com/Code-Me-N0t/Gaming_Automation-Pytest.git' 
                },
                { 
                    name: 'Flight Tracking', 
                    id: 'project-4', 
                    tools: 'Groovy',
                    feature: 'Tracking',
                    caption: 'This groovy automation script is designed to automate the testing of a cargo shipment schedule validation', 
                    url: 'https://github.com/Code-Me-N0t/Flight_Tracking-Groovy.git' 
                },
                { 
                    name: 'Google Login', 
                    id: 'project-5',  // Adjusted id to be unique
                    tools: 'Robot Framework, Selenium',
                    feature: 'Login',
                    caption: 'This robot automation script is designed to automate the testing sign-in functionality on a website', 
                    url: 'https://github.com/Code-Me-N0t/Google_Login-Robotframework.git' 
                },
            ]
        },
    ];

    return (
        <div id="project" className="p-4">
            <h2 className="md:text-4xl text-xl m-4">PROJECTS</h2>
            {projectSets.map((set) => (
                <ProjectSets key={set.id} projects={set.projects} />
            ))}
        </div>
    );
};

const ProjectSets = ({ projects }) => {
    return (
        <div className="projects">
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
};

const ProjectItem = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleVisibility = () => setIsOpen(!isOpen);

    const projectRef = useRef();
    const isVisible = useIsVisible(projectRef, { threshold: 0.3 });

    return (
        <li ref={projectRef}>
        <div className={`per-projects p-3 mb-4 grid grid-cols-3 grid-rows-2 gap-2 ${isVisible ? 'fade-in' : 'fade-out'}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
            }}
        >
            <label id={project.id} className="font-bold col-span-2">{project.name}</label>
            <FontAwesomeIcon
                icon={isOpen ? faAngleUp : faAngleDown}
                className="cursor-pointer col-start-3 row-span-2 self-center justify-self-end"
                onClick={toggleVisibility}
            />
            <p className="col-span-2">{project.tools} | {project.feature}</p>
            {isOpen && (
                <div className="description col-span-3 mt-2 p-3 grid grid-cols-3">
                    <p className="col-span-2">{project.caption}</p>
                    <a href={project.url} className="self-center justify-self-end flex items-center justify-center">
                        <FontAwesomeIcon icon={faUpRightFromSquare} className="project-link"/>
                    </a>
                </div>
            )}
        </div>
        </li>
    );
};

export default Project;
