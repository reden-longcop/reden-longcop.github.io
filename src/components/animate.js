import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import '../assets/animate.css'; // Adjust the path to your CSS file

const LoginSection = () => {
    return (
        <div className="container">
            <div className="login">
                <div className="letter lg:text-xs py-2 text-gray-500">redenlongcop5@gmail.com</div>
                <button>Login</button>
            </div>
            <FontAwesomeIcon icon={faMousePointer} className="clicker login-animation-clicker" />
        </div>
    );
};

const AnimateSidebar = () => {
    return (
        <div className="container animated-container">
            <div className="sidebar">
                <div className="sidebar-cons"></div>
                <div className="sidebar-cons"></div>
                <div className="sidebar-cons"></div>
            </div>
            <FontAwesomeIcon icon={faMousePointer} className="sidebar-animation-clicker clicker" />
        </div>
    )
}

const AnimateTracking = () => {
    return (
        <div class="container">
            <div class="tracking">
                <div class="cons"></div>
                <div class="cons"></div>
                <div class="cons"></div>
                <div class="cons"></div>
                <div class="cons"></div>
            </div>
            <FontAwesomeIcon icon={faMousePointer} className="tracking-animation-clicker clicker" />
        </div>
    )
}

const AnimateMulti = () => {
    return (
        <div id="multi-container" className="container animated-container bg-transparent">
            <div className="overlay">
                <div className="overlay-cons"></div>
                <div className="overlay-cons"></div>
                <div className="overlay-cons"></div>
            </div>
            <div className="multi">
                <div className="cons"></div>
                <div className="cons"></div>
                <div className="cons"></div>
                <div className="cons"></div>
                <div className="cons"></div>
            </div>
            <FontAwesomeIcon icon={faMousePointer} className="multi-animation-clicker clicker" />
        </div>
    );
};

export default AnimateMulti;
export { LoginSection, AnimateSidebar, AnimateTracking};
