import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
    const projectSets = [
        {
            id: 1,
            projects: [
                { 
                    name: 'Web Game Automation', 
                    id: 'project-1', 
                    tools: 'Python, Pytest, Selenium',
                    feature: 'multiplay',
                    caption: 'This pytest automation script is designed to test various functionalities of a gaming web application', 
                    url: 'https://github.com/Code-Me-N0t/Gaming_Automation-Pytest.git' 
                },
                { 
                    name: 'Web Game Automation', 
                    id: 'project-2', 
                    tools: 'Cypress', 
                    feature: 'sidebet', 
                    caption: 'This Cypress test suite is designed to automate the testing of a mobile Vue application\'s Sidebet feature', 
                    url: 'https://github.com/Code-Me-N0t/Gaming_Automation-Cypress.git' 
                },
                { 
                    name: 'Flight Tracking', 
                    id: 'project-3', 
                    tools: 'Python, Pytest, Selenium',
                    feature: 'multiplay',
                    caption: 'This pytest automation script is designed to test various functionalities of a gaming web application', 
                    url: 'https://github.com/Code-Me-N0t/Gaming_Automation-Pytest.git' 
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

    const toggleVisibility = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div key={project.id} className="per-projects p-3 mb-4 grid grid-cols-3">
            <label id={project.id} className="font-bold col-span-3">{project.name}</label>
            <p className="col-span-2">{project.tools} | {project.feature}</p>
            <FontAwesomeIcon 
                icon={isOpen ? faAngleUp : faAngleDown} 
                className="cursor-pointer row-span-2" 
                onClick={toggleVisibility} 
            />
            
            {isOpen && (
                <div className="description col-span-3">
                    <a href={project.url} className="">Go To Project</a>
                    <p>{project.caption}</p>
                </div>
            )}
        </div>
    );
};

export default Project;
