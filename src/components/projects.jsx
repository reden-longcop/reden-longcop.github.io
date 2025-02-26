import React, { useRef } from "react";
import useIsVisible from "./useIsVisible";
import '../assets/project.css';
import { LoginSection, AnimateSidebar, AnimateTracking, AnimateMulti } from "./animate";

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
                    tools: 'Python • Pytest • Selenium',
                    feature: 'Multi',
                    caption: 'This Pytest automation script is designed to test key functionalities of a gaming web application, focusing on the Multi and Sidebet features. It includes test cases for core gaming scenarios and offers flexible testing for different game options. Built with Python and Pytest, the project is structured into various components: test scripts for scenarios, modules with non-driver helper functions, and handlers that manage interactions with web elements, APIs, and game-specific tasks.', 
                    url: 'https://github.com/reden-longcop/Gaming_Automation-Pytest',
                    image: 'AnimateMulti'
                },
                { 
                    name: 'Test Flow Manager', 
                    id: 'project-2', 
                    tools: 'Javascript • Vite • React Flow', 
                    feature: 'Test Case Visualizer', 
                    caption: 'The Test Flow Manager is a web app built with Vite, React Flow, and JavaScript for visualizing and managing test scenarios using nodes and edges. It helps document test cases by mapping user journeys across project features. Recent updates include Robot Framework integration for test automation and a pie chart modal for visualizing test case statuses. The app features an interactive UI with real-time updates, local save functionality, and uses tools like FontAwesome and React-Toastify to enhance the user experience.',
                    url: 'https://reden-longcop.github.io/TestFlowManager/',
                    image: 'AnimateTracking'
                },
                { 
                    name: 'Web Game Automation', 
                    id: 'project-3', 
                    tools: 'Cypress', 
                    feature: 'Sidebet', 
                    caption: 'This project is a Cypress automation test suite for testing the Sidebet feature of a mobile Vue application. It automates side bet placements on various games, using Node.js and Cypress. The test requires environment variables like authentication headers and game keys. Tests can be run via the Cypress UI or command line, and more tests are planned for future updates.', 
                    url: 'https://github.com/reden-longcop/Gaming_Automation-Cypress',
                    image: 'AnimateSidebar'
                },
                { 
                    name: 'Smoke Testing Automation', 
                    id: 'project-5',
                    tools: 'Robot Framework • Selenium',
                    feature: 'Game Navigation',
                    caption: 'This project is a smoke test automation script for a gaming web application built using Robot Framework. It tests core functionalities by utilizing keyword-driven testing, with locators for web elements and variables for credentials. Test cases are written in Gherkin syntax and produce reports in the output folder. The setup includes library imports, setup/teardown configurations, and is executed via Robot Framework’s terminal command.', 
                    url: 'https://github.com/reden-longcop/Smoke_Testing_Automation-RobotFramework',
                    image: 'LoginSection'
                },
            ]
        },
    ];

    return (
        <div id="project" className="md:p-4 lg:pt-20 sm:pt-10">
            <h1 className="md:text-4xl text-xl m-4 lg:mb-20">PROJECTS</h1>
            {projectSets.map(({ id, projects }) => (
                <ProjectSets key={id} projects={projects} />
            ))}
        </div>
    );
};

const ProjectSets = ({ projects }) => (
    <div className="projects lg:block md:grid md:gap-7">
        {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
        ))}
    </div>
);

const ProjectItem = ({ project, index }) => {
    const projectRef = useRef();
    const isVisible = useIsVisible(projectRef, { threshold: 0.3 });
    const AnimationComponent = animationComponents[project.image] || null;

    const isEven = index % 2 === 0;

    return (
        <li ref={projectRef} className={`md:pb-3 sm:py-5 md:mb-20`}>
            <div
                className={`w-full md:h-[400px] flex items-center ${isVisible ? 'fade-in' : 'fade-out'}`}
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
            >
                        <div className={`detail-bg md:bg-inherit space-y-3 sm:px-2 sm:py-5 md:w-[50%] md:absolute sm:w-full ${isEven ? 'lg:left-[0] lg:pl-20 sm:bg-[#2a3547] 2xl:pl-32': 'md:right-[0] lg:pr-20 sm:bg-inherit 2xl:pr-32'}`}>
                            <label id={project.id} className="font-semibold lg:text-2xl">{project.name}</label>
                            <p className="lg:text-md md:text-sm">{project.tools} | {project.feature}</p>
                            <div className="description p-2">
                                <p>{project.caption}</p>
                                <a href={project.url} className="self-center justify-self-end">
                                    <p className="mt-4 underline">Go To Project</p>
                                </a>
                            </div>
                        </div>
                        <div className={`md:w-[50%] flex justify-center absolute md:visible sm:collapse ${isEven ? 'md:right-[0]': 'md:left-[0]'}`}>
                            <div className="laptop lg:w-[80%] 3xl:w-[60%] h-[100%] p-5 md:w-full">
                                <div className="screen md:w-[80%] md:h-[200px] 2xl:h-[300px]">
                                    <div className={`lcd   ${project.id === "project-5" ? '':'md:w-[190%] md:h-[185%] scale-50 md:origin-top-left overflow-hidden'}`}>
                                        {project.id === "project-2" ? (
                                            <iframe title="project 2 content" src={project.url} frameborder="0" width="100%" height="100%"></iframe>
                                        ) : (
                                            AnimationComponent && <AnimationComponent />
                                        )}                                        
                                    </div>
                                    <div className="glass_frame"></div>
                                    <div className="screen_reflection"></div>
                                </div>
                                <div className="keyboard top"></div>
                                <div className="keyboard bottom"></div>
                            </div>
                        </div>
            </div>
        </li>
    );
};

export default Project;
