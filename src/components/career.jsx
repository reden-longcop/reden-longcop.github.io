import React, { useRef } from 'react';
import useIsVisible from './useIsVisible';
import '../assets/career.css';

const Timeline = () => {
    const timelineData = [
        {
            direction: 'direction-l',
            flag: 'Associate QA Engineer',
            position: 'Amihan Global Strategies, Phils, Inc.',
            time: 'November 2024 - Present',
            description: 'Reviews and validates requirements and technical specs. Develops and runs test plans and detailed test cases based on requirements and customer feedback. Provides insights or suggestions after analyzing test results and overall product quality. Works with the development team to verify bug fixes, conduct validation, and perform regression testing. Manages testing efforts across multiple projects while meeting tight deadlines.'
        },
        {
            direction: 'direction-r',
            flag: 'Junior QA Engineer',
            position: 'IT Americano Inc.',
            time: 'September 2023 - November 2024',
            description: 'Performed functional, regression, and performance testing on a web-based application to ensure its quality and reliability. Developed, updated, and maintained test cases for both manual and automated testing to cover a wide range of scenarios. Worked closely with the offshore development team and key stakeholders to verify bug fixes, ensuring that identified issues were resolved effectively and the application met expected standards.'
        },
        {
            direction: 'direction-l',
            flag: 'Functional QA Intern',
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
                        {...item}
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
