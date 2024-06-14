import React, { useRef } from 'react';
import useIsVisible from './useIsVisible';

const Timeline = () => {
    const timelineData = [
        {
            direction: 'direction-l',
            flag: 'Mid QA Trainee',
            position: 'IT Americano Inc.',
            time: 'June 2024 - Present',
            description: 'Currently I\'m undergoing a training for the Mid QA position while also improving both my manual and automation skills. I\'m exploring other web automation tools such as Groovy and Cypress.'
        },
        {
            direction: 'direction-r',
            flag: 'Jr QA Engineer',
            position: 'IT Americano Inc.',
            time: 'September 2023 - June 2024',
            description: 'I was hired by the same company, where my tasks include creating automation scripts using Python for key project features. My daily work also involves writing and executing test cases and verifying bugs.'
        },
        {
            direction: 'direction-l',
            flag: 'QA Intern',
            position: 'IT Americano Inc.',
            time: 'March - June 2023',
            description: 'During my internship, I learned extensively about Quality Assurance and enjoyed working with Robot Framework under my QA Lead\'s supervision.'
        },
        {
            direction: 'direction-r',
            flag: 'Student',
            position: 'University of Makati',
            time: 'August 2019 - August 2023',
            description: 'This is where I finished my studies with a degree in Computer Science, Major in Application Development. The time where I aspire to be a frontend web developer.'
        }
    ];

    return (
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
    );
};

const TimelineItem = ({ direction, flag, position, time, description }) => {
    const itemRef = useRef();
    const isVisible = useIsVisible(itemRef, { threshold: 0.3 });

    return (
        <li ref={itemRef}>
            <div
                className={`${direction} ${isVisible ? 'fade-in' : 'fade-out'}`}
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