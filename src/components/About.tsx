import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-heading">
                    <h2>About Me</h2>
                </div>
                <div className="about-text">
                    <p>
                        I am a curious and energetic software developer who enjoys building clean, intuitive, user-focused applications. I work primarily with <strong>React, TypeScript, Next.js</strong> with additional experience in <strong>Node.js, Express, databases</strong> allowing me to contribute across the stack when needed. I value code that is thoughtful, readable, and scalable — the kind that makes collaboration smooth and maintenance pleasant.
                    </p>
                    <p>
                        I learn best by building and experimenting hands-on, often diving deep into challenges with music powering my focus. Outside of tech, I love travelling, exploring new places and experimenting in the kitchen — trying new things, adjusting ingredients and improving with each iteration, just like in code. I am currently seeking full-time opportunities to grow, contribute and create meaningful products with great teams.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
