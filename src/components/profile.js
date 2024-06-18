import React, { useRef } from "react";
import profile from '../images/header_profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import useIsVisible from './useIsVisible';

function Profile() {
    const resume = "https://drive.google.com/uc?export=download&id=1eR7LMmC0Ld3b1FgO4qpstoe2mwofLiFt";
    const github_link = "https://github.com/Code-Me-N0t";
    const linkedin_link = "https://linkedin.com/in/redenlongcop";
    const emailto_link = "mailto:redenlongcop5@gmail.com";

    const leftRef = useRef();
    const profilePicRef = useRef();
    const asideRef = useRef();

    const isLeftVisible = useIsVisible(leftRef);
    const isProfilePicVisible = useIsVisible(profilePicRef);
    const isAsideVisible = useIsVisible(asideRef);

    return (
        <div className="PROFILE sm:space-x-10">
            <div 
                className="left"
                ref={leftRef}
                style={{
                    opacity: isLeftVisible ? 1 : 0,
                    transform: isLeftVisible ? 'none' : 'translateX(-50px)',
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                }}
            >
                <h1 className="md:text-8xl text-5xl">REDEN LONGCOP</h1>
                <h3>QA Engineer | Frontend Developer</h3>
                <div className="icons md:space-x-6 sm:space-x-2">
                    <a href={linkedin_link} className="icon-link"><FontAwesomeIcon className="linkedin icon" icon={faLinkedin} /></a>
                    <a href={github_link} className="icon-link"><FontAwesomeIcon className="github icon" icon={faGithub} /></a>
                    <a href={emailto_link} className="icon-link"><FontAwesomeIcon className="email icon" icon={faEnvelope} /></a>
                </div>
            </div>
            <div 
                className="profilePic md:block"
                ref={profilePicRef}
                style={{
                    opacity: isProfilePicVisible ? 1 : 0,
                    transform: isProfilePicVisible ? 'none' : 'translateX(-50px)',
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                }}
            >
                <img src={profile} alt="Profile"/>
            </div>
            <div 
                className="aside"
                ref={asideRef}
                style={{
                    opacity: isAsideVisible ? 1 : 0,
                    transform: isAsideVisible ? 'none' : 'translateX(50px)',
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                }}
            >
                <div className="introduction">
                    <h5>- Introduction</h5>
                    <p>I'm a dedicated QA Engineer and Frontend Developer with a keen eye for details. 
                        I specialize in creating intuitive user interfaces and ensuring software quality through meticulous testing. 
                        My passion lies in delivering reliable and exceptional results.</p>
                    <a className='resume' href={resume} download='Longcop_Reden-CV.pdf'><FontAwesomeIcon className="download-icon" icon={faDownload} /> Get My Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;