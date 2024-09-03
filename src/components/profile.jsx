import React, { useRef } from "react";
import profile from '../images/header_profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import useIsVisible from './useIsVisible';
import '../assets/profile.css'

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
        <div className="PROFILE md:py-5 2xl:p-14 md:space-x-10">
            <div 
                className="left lg:pl-10 2xl:pl-20"
                ref={leftRef}
                style={{
                    opacity: isLeftVisible ? 1 : 0,
                    transform: isLeftVisible ? 'none' : 'translateX(-50px)',
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                }}
            >
                <h1 className="sm:text-6xl md:text-7xl md:pt-5 2xl:text-9xl">REDEN LONGCOP</h1>
                <h3>QA Engineer | Frontend Developer</h3>
                <div className="icons md:space-x-6 space-x-3">
                    <a href={linkedin_link} className="icon-link"><FontAwesomeIcon className="linkedin icon" icon={faLinkedin} /></a>
                    <a href={github_link} className="icon-link"><FontAwesomeIcon className="github icon" icon={faGithub} /></a>
                    <a href={emailto_link} className="icon-link"><FontAwesomeIcon className="email icon" icon={faEnvelope} /></a>
                </div>
            </div>
            <div 
                className="profilePic sm:collapse md:block md:left-1/4 xl:left-1/4 2xl:left-1/3 lg:visible"
                ref={profilePicRef}
                style={{
                    opacity: isProfilePicVisible ? 1 : 0,
                    transform: isProfilePicVisible ? 'none' : 'translateX(-50px)',
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                }}
            >
                <img className="lg:size-2/5 xl:size-1/2" src={profile} alt="Profile"/>
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
                <div className="introduction  lg:pe-10 xl:pe-20 pb-5 pe-2 xl:text-xl sm:pb-10">
                    <h5>- Introduction</h5>
                    <p className="lg:pb-10">I'm a dedicated QA Engineer with a keen eye for details. 
                    I focus on developing and executing both manual and automated test cases to ensure high software quality through testing. 
                        My passion lies in delivering reliable and exceptional results.</p>
                    <a className='resume sm:w-56 py-2 px-4 xl:py-3 2xl:px-6 md:w-50 md:relative md:left-0 leading-5 sm:absolute sm:left-1/2' href={resume} download='Longcop_Reden-CV.pdf'>
                        <FontAwesomeIcon className="download-icon mr-5" icon={faDownload} /> Get My Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;