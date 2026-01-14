import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // hide on scroll down
            } else {
                setIsVisible(true); // show on scroll up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlHeader);
        return () => window.removeEventListener('scroll', controlHeader);
    }, [lastScrollY]);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();

        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Map navigation items to their corresponding section IDs
    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
            <nav className="nav-container">
                <ul className="nav-menu">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.name}>
                            <a
                                href={`#${item.id}`}
                                className="nav-link"
                                onClick={(e) => handleNavClick(e, item.id)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;