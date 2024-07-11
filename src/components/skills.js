import React, { useRef } from 'react';
import useIsVisible from './useIsVisible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faExclamationTriangle, faNetworkWired, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt, faJira } from '@fortawesome/free-brands-svg-icons';
import '../assets/skills.css'

const Skills = () => {
    const toolSets = [
        { id: 1, icon: faJira, label: 'Proficient in using bug tracking tool like JIRA' },
        { id: 1, icon: faGitAlt, label: 'Proficient in using GIT commands' },
        { id: 1, icon: faNetworkWired, label: 'Familiarity in using API testing using POSTMAN' },
        { id: 1, icon: faTachometerAlt, label: 'Familiarity in performance testing tools like JMETER and LOCUST' },
        { id: 1, icon: faClipboardList, label: 'Proficient in using bug tracking tool like JIRA' },
        { id: 1, icon: faExclamationTriangle, label: 'Proficient in using bug tracking tool like JIRA' },
    ];
    const skillSets = [
        {
            id: 1,
            skills: [
                { name: 'CSS', id: 'CSS', level: 90 },
                { name: 'Javascript', id: 'Javascript', level: 80 },
                { name: 'HTML', id: 'HTML', level: 85 },
                { name: 'PHP', id: 'PHP', level: 70 },
                { name: 'PYTHON', id: 'PYTHON', level: 75 }
            ]
        },
        {
            id: 2,
            skills: [
                { name: 'Selenium', id: 'selenium', level: 80 },
                { name: 'Robot Framework', id: 'robot', level: 65 },
                { name: 'Python | Pytest', id: 'pytest', level: 70 },
                { name: 'JS | Cypress', id: 'cypress', level: 60 },
                { name: 'Java | Groovy', id: 'groovy', level: 40 }
            ]
        }
    ];

    const skillsRef = useRef();
    const isVisible = useIsVisible(skillsRef, { threshold: 0.3 });

    return (
        <div id="skills" className="items-center" ref={skillsRef}>
        <h2 className={`md:text-4xl text-xl w-full text-center ${isVisible ? 'visible' : 'invisible'}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                transitionDelay: isVisible ? '0.5s' : '0s'
            }}
        >
            SKILLS
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full overflow-hidden">
            <div className='skills-con-1 lg:w-1/2 w-full'>
                <div className="sets flex flex-wrap justify-center">
                    {skillSets.map((set) => (
                        <SkillSet key={set.id} skills={set.skills} isVisible={isVisible} />
                    ))}
                </div>
            </div>
            <div className='skills-con-2 md:w-full w-full'>
                <div className="tools-set-con">
                    {toolSets.map((tool) => (
                        <div key={tool.id} className={`tools-set space-x-10 md:m-5 m-3 ${isVisible ? 'fade-in' : 'fade-out'}`}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transition: 'opacity 0.5s ease-in-out',
                                transitionDelay: isVisible ? '0.5s' : '0s'
                            }}
                        >
                            <label>{tool.label}</label>
                            <FontAwesomeIcon className="tool-icon" icon={tool.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    
    );
};

const SkillSet = ({ skills, isVisible }) => {
    return (
        <div
            className={`set m-2 sm:w-36 md:w-44 2xl:w-5/12  lg:space-y-10 ${isVisible ? 'fade-in' : 'fade-out'}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                transitionDelay: isVisible ? '0.5s' : '0s'
            }}
        >
            {skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                    <label htmlFor={skill.id} className="block mb-1">{skill.name}</label>
                    <div className="skills lg:w-full" id={skill.id}>
                        <div
                            className="skill-bar"
                            style={{
                                maxWidth: `${isVisible ? skill.level : 0}%`,
                                animation: isVisible ? `grow ${skill.level / 20}s ease-in-out forwards` : 'none'
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
