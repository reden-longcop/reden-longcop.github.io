import React from 'react';
import '../assets/header.css'

function Header() {
    return (
        <nav className="HEADER flex md:justify-end p-4 md:pe-20 justify-center">
            <ul className="flex space-x-10 lg:space-x-20">
                <li><a href="#timeline" className="hover:text-gray-400">About</a></li>
                <li><a href="#project" className="hover:text-gray-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Header;
