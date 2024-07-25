import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import '../assets/animate.css'; // Adjust the path to your CSS file

const AnimatedIcon = ({ className }) => (
    <FontAwesomeIcon icon={faMousePointer} className={`clicker ${className}`} />
);

const LoginSection = () => (
    <div className="container">
        <div className="login">
            <div className="letter lg:text-xs py-2 text-gray-500">redenlongcop5@gmail.com</div>
            <button>Login</button>
        </div>
        <AnimatedIcon className="login-animation-clicker" />
    </div>
);

const AnimateSidebar = () => (
    <div className="container animated-container">
        <div className="sidebar">
            <div className="sidebar-cons"></div>
            <div className="sidebar-cons"></div>
            <div className="sidebar-cons"></div>
        </div>
        <AnimatedIcon className="sidebar-animation-clicker" />
    </div>
);

const AnimateTracking = () => (
    <div className="container">
        <div className="tracking">
            <div className="cons"></div>
            <div className="cons"></div>
            <div className="cons"></div>
            <div className="cons"></div>
            <div className="cons"></div>
        </div>
        <AnimatedIcon className="tracking-animation-clicker" />
    </div>
);

const AnimateMulti = () => (
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
        <AnimatedIcon className="multi-animation-clicker" />
    </div>
);

export default AnimateMulti;
export { LoginSection, AnimateSidebar, AnimateTracking };