import React, { useRef } from 'react'
import '../styles/header.scss'
import Logo from '../images/logo.png'

export const Header = () => {

    const elementRef = useRef(null);

    const toggleClass = () => {
        if (elementRef.current) {
        elementRef.current.classList.toggle('open');
        }
    };
    return (
        <header>
            <div class="header-container">
                <div class="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav>
                    <ul class="nav-links" ref={elementRef}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div class="hamburger" onClick={toggleClass}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}
