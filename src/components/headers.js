import React from 'react';

function Header() {
    return (
        <nav className="HEADER flex md:justify-end p-4 md:pe-10 justify-center">
            <ul className="flex space-x-10">
                <li><a href="/link" className="hover:text-gray-400">About</a></li>
                <li><a href="/link" className="hover:text-gray-400">Experience</a></li>
                <li><a href="/link" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Header;
