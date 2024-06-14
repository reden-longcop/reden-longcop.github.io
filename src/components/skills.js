import React, { useRef } from 'react';
import jira from '../images/icons/jira.png';
import git from '../images/icons/git.png';
import postman from '../images/icons/postman.png';
import jmeter from '../images/icons/jmeter.png';
import lambda from '../images/icons/lambda.png';
import useIsVisible from './useIsVisible';

const Skills = () => {
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
        <div id="skills" className="flex flex-col items-center" ref={skillsRef}>
            <h2 className={`md:text-4xl text-xl m-4 ${isVisible ? 'visible' : 'invisible'}`}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    transitionDelay: isVisible ? '0.5s' : '0s'
                }}
            >SKILLS</h2>
            <div className="sets flex flex-wrap justify-center">
                {skillSets.map((set) => (
                    <SkillSet key={set.id} skills={set.skills} isVisible={isVisible} />
                ))}
            </div>
            <h2 className={`md:text-4xl text-xl m-4 ${isVisible ? 'visible' : 'invisible'}`}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    transitionDelay: isVisible ? '0.5s' : '0s'
                }}
            >TOOLS</h2>
            <div className={`tools-set grid grid-cols-5 gap-4 ${isVisible ? 'fade-in' : 'fade-out'}}`}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                }}
            >
                <img src={jira} alt="jira" />
                <img src={git} alt="git" />
                <img src={postman} alt="postman" />
                <img className="col-span-2" src={jmeter} alt="jmeter" />
                <img className="col-span-5" src={lambda} alt="lambda" />
            </div>
        </div>
    );
};

const SkillSet = ({ skills, isVisible }) => {
    return (
        <div
            className={`set m-2 ${isVisible ? 'fade-in' : 'fade-out'}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                transitionDelay: isVisible ? '0.5s' : '0s'
            }}
        >
            {skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                    <label htmlFor={skill.id} className="block mb-1">{skill.name}</label>
                    <div className="skills" id={skill.id}>
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
