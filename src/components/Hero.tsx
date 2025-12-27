import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import resumePdf from '../assets/MadhuYamini Nallamothu_FrontEnd_Developer.pdf';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero">
            <span className="hero-small-text">Hello,</span>
            <h1 className="hero-title">I am Madhu Yamini Nallamothu</h1>
            <h2 className="hero-subtitle">Software Engineer</h2>

            <div className="hero-socials">
                <a href="https://www.linkedin.com/in/madhuyamini-nallamothu/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Madhu020324" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                    <FaGithub />
                </a>
            </div>

            <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Contact Me</a>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download Resume</a>
            </div>
        </section>
    );
};

export default Hero;
