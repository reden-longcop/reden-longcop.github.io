import React from 'react';

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
                { name: 'Robot Framework', id: 'robot', level: 70 },
                { name: 'Python | Pytest', id: 'pytest', level: 70 },
                { name: 'JS | Cypress', id: 'cypress', level: 60 },
                { name: 'Java | Groovy', id: 'groovy', level: 40 }
            ]
        }
    ];
    return (
        <div id="skills" className="flex flex-col items-center">
            <h2 className="md:text-4xl text-xl m-4">SKILLS</h2>
            <div className="sets flex flex-wrap justify-center">
                {skillSets.map((set) => (
                    <SkillSet key={set.id} skills={set.skills} />
                ))}
            </div>
            <h2 className="md:text-4xl text-xl m-4">TOOLS</h2>
            <div className='tools-set'>
                <div className='tools'>
                    
                </div>
            </div>
            <h2 className="md:text-4xl text-xl m-4">KNOWLEDGE</h2>
            <div className=''></div>
        </div>
    );
};   

const SkillSet = ({ skills }) => {
    return (
        <div className="set m-2">
            {skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                    <label htmlFor={skill.id} className="block mb-1">{skill.name}</label>
                    <div className="skills" id={skill.id}>
                        <div className="skill-bar" style={{ animation: `grow ${skill.level / 20}s forwards`, maxWidth: `${skill.level}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Skills;
