import React, { useRef } from "react";
import useIsVisible from "./useIsVisible";
import AnimateMulti from "./animate";
import '../assets/project.css';
import { LoginSection, AnimateSidebar, AnimateTracking } from "./animate";

const animationComponents = {
    AnimateMulti,
    LoginSection,
    AnimateSidebar,
    AnimateTracking
};

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
                    name: 'Login Automation', 
                    id: 'project-5',
                    tools: 'Robot Framework, Selenium',
                    feature: 'Login',
                    caption: 'This robot automation script is designed to automate the testing sign-in functionality on a website', 
                    url: 'https://github.com/Code-Me-N0t/Google_Login-Robotframework.git',
                    image: 'LoginSection'
                },
            ]
        },
    ];

    return (
        <div id="project" className="p-4">
            <h2 className="md:text-4xl text-xl m-4">PROJECTS</h2>
            {projectSets.map(({ id, projects }) => (
                <ProjectSets key={id} projects={projects} />
            ))}
        </div>
    );
};

const ProjectSets = ({ projects }) => (
    <div className="projects lg:grid lg:grid-cols-2 gap-7">
        {projects.map(project => (
            <ProjectItem key={project.id} project={project} />
        ))}
    </div>
);

const ProjectItem = ({ project }) => {
    const projectRef = useRef();
    const isVisible = useIsVisible(projectRef, { threshold: 0.3 });
    const AnimationComponent = animationComponents[project.image] || null;

    return (
        <li ref={projectRef} className="md:pb-3 sm:pb-3 flex justify-center">
            <div
                className={`per-projects lg:w-full lg:h-full md:w-full overflow-hidden lg:grid lg:grid-cols-2 ${isVisible ? 'fade-in' : 'fade-out'}`}
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
            >
                <div className="detail-bg m-3 space-y-3">
                    <label id={project.id} className="font-semibold lg:text-2xl">{project.name}</label>
                    <p className="lg:text-lg">{project.tools} | {project.feature}</p>
                    <div className="description p-2">
                        <p>{project.caption}</p>
                        <a href={project.url} className="self-center justify-self-end">
                            <p className="mt-4 underline">Go To Project</p>
                        </a>
                    </div>
                </div>
                <div className="animate lg:col-span-1 flex justify-center items-center">
                    {AnimationComponent && <AnimationComponent />}
                </div>
            </div>
        </li>
    );
};

export default Project;
