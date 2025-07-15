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
                    name: 'Property Listing Automation', 
                    id: 'project-1', 
                    tools: 'Robot Framework • Selenium', 
                    feature: 'Real Estate Website', 
                    caption: 'This project is a comprehensive test automation suite designed for the Bah.Ai property listing web application. Built using the Robot Framework, it enables robust cross-browser testing across Chrome, Firefox, and Safari, ensuring consistent user experience and functionality. The framework leverages Selenium for browser automation and integrates seamlessly with GitHub Actions for continuous integration and delivery (CI/CD). Automated test execution results are visualized through a custom HTML dashboard, with detailed reports and logs published to GitHub Pages for easy access and monitoring. The project structure is organized for maintainability, separating test cases, shared resources, and results, and includes support for real-time analytics and historical data tracking. This setup empowers teams to maintain high quality standards, with automated quality gates and full regression and smoke test coverage, making it a reliable foundation for ongoing development and deployment of the Bah.Ai platform.', 
                    url: 'https://github.com/reden-longcop/property-listing-web-automation.git',
                    image: 'AnimateSidebar'
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
                    name: 'Mobile Automation', 
                    id: 'project-3', 
                    tools: 'Robot Framework • Appium',
                    feature: 'Mobile App',
                    caption: 'This project is a comprehensive mobile automation testing framework designed for both iOS and Android applications. It leverages the Robot Framework and Appium to enable cross-platform automated testing. The framework features automatic detection of application files (both .app for iOS and .apk for Android), robust evidence collection (including screenshots and screen recordings), and modular organization using the Page Object Model for maintainable test code. It supports data-driven testing, parallel execution, and provides utilities for emulator management, device location simulation, and Appium server control. The project is structured for easy configuration and extensibility, making it suitable for teams aiming to automate mobile app testing efficiently and with clear, organized test artifacts.', 
                    url: 'https://github.com/reden-longcop/mobile-automation.git',
                    image: 'AnimateMulti'
                },
                { 
                    name: 'Medical Supply Chain Automation', 
                    id: 'project-5',
                    tools: 'Robot Framework • Selenium • Appium',
                    feature: 'Web and Mobile App',
                    caption: 'This automation project provides a robust end-to-end testing framework for a medical supply chain application, covering both web and mobile platforms. Built using the Robot Framework, it features modular test cases, reusable page objects, and centralized variable management for locators and credentials, ensuring maintainability and scalability. The framework supports comprehensive test coverage, with detailed execution reports and screenshots generated for each test run to facilitate efficient debugging and quality assurance. Containerization via Docker guarantees a consistent testing environment across different systems. This setup enables seamless integration of automated testing into the development lifecycle, enhancing the reliability and performance of the medical supply chain application.', 
                    url: 'https://github.com/reden-longcop/medical-supply-chain-web-and-mobile-automation.git',
                    image: 'AnimateTracking'
                },
                { 
                    name: 'Gaming Automation', 
                    id: 'project-3', 
                    tools: 'Pytest • Selenium',
                    feature: 'Multi',
                    caption: 'This Pytest automation script is designed to test key functionalities of a gaming web application, focusing on the Multi and Sidebet features. It includes test cases for core gaming scenarios and offers flexible testing for different game options. Built with Python and Pytest, the project is structured into various components: test scripts for scenarios, modules with non-driver helper functions, and handlers that manage interactions with web elements, APIs, and game-specific tasks.', 
                    url: 'https://github.com/reden-longcop/Gaming_Automation-Pytest',
                    image: 'AnimateMulti'
                }
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
