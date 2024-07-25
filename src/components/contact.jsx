import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import '../assets/contact.css'

function Contact() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section contact">
                    <h3>Contact Me</h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <a href="https://linkedin.com/in/redenlongcop"> linkedin.com/in/redenlongcop</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/Code-Me-N0t"> github.com/Code-Me-N0t</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href="mailto:redenlongcop5@gmail.com"> redenlongcop5@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Reden Longcop | Designed by Me :)
            </div>
        </footer>
    );
}

export default Contact;
