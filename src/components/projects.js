import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import useIsVisible from "./useIsVisible";
import AnimateMulti from "./animate";
import '../assets/project.css'
import { LoginSection, AnimateSidebar, AnimateTracking } from "./animate";

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
                    url: 'https://github.com/Code-Me-N0t/Gaming_Automation-Pytest.git',
                    image: 'AnimateMulti'
                },
                { 
                    name: 'Web Game Automation', 
                    id: 'project-2', 
                    tools: 'Cypress', 
                    feature: 'Sidebet', 
                    caption: 'This Cypress test suite is designed to automate the testing of a mobile Vue application\'s Sidebet feature', 
                    url: 'https://github.com/Code-Me-N0t/Gaming_Automation-Cypress.git',
                    image: 'AnimateSidebar'
                },
                // { 
                //     name: 'Flight Tracking', 
                //     id: 'project-3', 
                //     tools: 'Python, Pytest, Selenium',
                //     feature: 'Tracking',
                //     caption: 'This pytest automation script is designed to automate the testing of a cargo shipment schedule validation', 
                //     url: 'https://github.com/Code-Me-N0t/Gaming_Automation-Pytest.git',
                //     image: 'AnimateTracking'
                // },
                { 
                    name: 'Flight Tracking', 
                    id: 'project-4', 
                    tools: 'Groovy',
                    feature: 'Tracking',
                    caption: 'This groovy automation script is designed to automate the testing of a cargo shipment schedule validation', 
                    url: 'https://github.com/Code-Me-N0t/Flight_Tracking-Groovy.git',
                    image: 'AnimateTracking'
                },
                { 
                    name: 'Google Login', 
                    id: 'project-5',
                    tools: 'Robot Framework, Selenium',
                    feature: 'Login',
                    caption: 'This robot automation script is designed to automate the testing sign-in functionality on a website', 
                    url: 'https://github.com/Code-Me-N0t/Google_Login-Robotframework.git',
                    image:'LoginSection'
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
        <div className="projects lg:grid lg:grid-cols-2 gap-7">
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

    const renderAnimation = () => {
        switch (project.image) {
            case 'AnimateMulti':
                return <AnimateMulti />;
            case 'LoginSection':
                return <LoginSection />;
            case 'AnimateSidebar':
                return <AnimateSidebar />;
            case 'AnimateTracking':
                return <AnimateTracking />;
            default:
                return null; // Handle the case where no animation component matches
        }
    };

    return (
        <li ref={projectRef} className="flex justify-center">
            <div className={`per-projects lg:w-11/12 lg:h-64 md:w-full overflow-hidden mb-4 lg:grid lg:grid-cols-2 gap-10 ${isVisible ? 'fade-in' : 'fade-out'}`}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                }}
            >
                <div className="detail-bg m-3 space-y-3">
                    <label id={project.id} className="font-semibold lg:text-2xl">{project.name}</label>
                    <p className="lg:text-lg">{project.tools} | {project.feature}</p>
                    <div className="description p-2">
                        <p className="">{project.caption}</p>
                        {/* <a href={project.url} className="self-center justify-self-end ">
                            <FontAwesomeIcon icon={faUpRightFromSquare} className="project-link" />
                        </a> */}
                    </div>
                </div>
                <div className="animate lg:col-span-1 flex justify-center items-center">
                    {renderAnimation()} 
                </div>
            </div>
        </li>
    );
};

export default Project;
