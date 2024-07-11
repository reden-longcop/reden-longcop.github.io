import React, { useRef } from 'react';
import useIsVisible from './useIsVisible';
import '../assets/career.css';

const Timeline = () => {
    const timelineData = [
        {
            direction: 'direction-l',
            flag: 'Mid QA Trainee',
            position: 'IT Americano Inc.',
            time: 'June 2024 - Present',
            description: 'Advanced knowledge in automation testing, led small QA projects, mentored new junior QA, and worked on enhancing the efficiency and effectiveness of the QA team. Expanded expertise in using various QA tools and frameworks.'
        },
        {
            direction: 'direction-r',
            flag: 'Jr QA Engineer',
            position: 'IT Americano Inc.',
            time: 'September 2023 - June 2024',
            description: 'Conducted functional, regression, and performance testing on various software products. Collaborated with development teams to ensure quality standards were met and contributed to the improvement of testing processes.'
        },
        {
            direction: 'direction-l',
            flag: 'QA Intern',
            position: 'IT Americano Inc.',
            time: 'March - June 2023',
            description: 'Assisted senior QA engineers in testing web and mobile applications, learned basic testing methodologies, and contributed to the identification and documentation of bugs and issues.'
        },
        {
            direction: 'direction-r',
            flag: 'Student',
            position: 'University of Makati',
            time: 'August 2019 - August 2023',
            description: 'Graduated with a Bachelor of Science in Computer Science, major in Application Development. Acquired a strong academic foundation in software engineering, honed critical thinking and problem-solving skills, and developed expertise in application development through hands-on projects and coursework.'
        }
    ];

    return (
        <div>
            <h2 className="md:text-4xl text-xl mt-8 text-center">CAREER</h2>
            <ul className="timeline">
                
                {timelineData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        direction={item.direction}
                        flag={item.flag}
                        position={item.position}
                        time={item.time}
                        description={item.description}
                    />
                ))}
            </ul>
        </div>
    );
};

const TimelineItem = ({ direction, flag, position, time, description }) => {
    const itemRef = useRef();
    const isVisible = useIsVisible(itemRef, { threshold: 0.3 });

    return (
        <li ref={itemRef}>
            <div
                className={`box lg:mt-5 lg:text-xl xl:text-xl 2xl:text-xl ${direction} ${isVisible ? 'fade-in' : 'fade-out'}`}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                }}
            >
                <div className="flag-wrapper">
                    <span className="flag">{flag}</span>
                </div>
                <div className="desc">
                    <div className='position'>{position}</div>
                    <div className='time'>{time}</div>
                    <br />
                    <div className='des'>{description}</div>
                </div>
            </div>
        </li>
    );
};

export default Timeline;