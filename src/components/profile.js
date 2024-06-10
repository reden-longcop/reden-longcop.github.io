import React from "react";
import linkedin from '../images/linkedin.png';
import git from '../images/github.png';
import profile from '../images/header_profile.png';

function Profile() {
    return (
        <div className="PROFILE sm:space-x-10">
            <div className="left space-x-2">
                <h1 className="md:text-8xl text-5xl">REDEN LONGCOP</h1>
                <img className="icon inline" src={linkedin} alt="LinkedIn"/>
                <img className="icon inline" src={git} alt="GitHub"/>
                <img className="icon inline" src={linkedin} alt="LinkedIn"/>
            </div>
            <div className="profilePic md:block sm:hidden">
                <img src={profile} alt="Profile"/>
            </div>

            <div className="aside sm:inline-block">
                <div className="introduction">
                    <h5>- Introduction</h5>
                    <h3>QA Engineer / Frontend Developer</h3>
                    <p>I'm a dedicated QA Engineer and Frontend Developer with a keen eye for details. 
                        I specialize in creating intuitive user interfaces and ensuring software quality through meticulous testing. 
                        My passion lies in delivering reliable and exceptional results.</p>
                    <a href="/story">My Story &gt;</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;