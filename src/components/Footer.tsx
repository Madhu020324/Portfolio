import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    &copy; {new Date().getFullYear()} Developer Portfolio by {' '}
                    <a
                        href="https://www.linkedin.com/in/madhuyamini-nallamothu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Madhu Yamini Nallamothu
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
