import React from 'react';
import './Experience.css';

interface ExperienceItem {
    company: string;
    role: string;
    date: string;
    tech: string[];
    points: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: 'Eastern Illinois University',
        role: 'Graduate Assistant',
        date: 'Sep 2024 – Dec 2025',
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL', 'Oracle'],
        points: [
            'Developed and maintained web applications for university departments including HR, Benefits and Administration, streamlining daily operations, improving service accessibility and enabling faster processing applications.',
            'Digitized paper-based workflows into user-friendly online platforms, cutting turnaround time from 3–4 days to under 24 hours by eliminating back-and-forth between departments, reducing paper costs, resulting in a 70%+ reduction in processing time and improved data accuracy.',
            'Built secure and scalable solutions using HTML, CSS, JavaScript, jQuery, PHP, MySQL, and Oracle, contributing to the university’s digital transformation initiatives.'
        ]
    },
    {
        company: 'Tata Consultancy Services',
        role: 'Systems Engineer',
        date: 'Feb 2020 - Feb 2024',
        tech: ['React', 'Redux Toolkit', 'React Router', 'Tailwind', 'SCSS', 'Figma', 'Jest', 'Vitest'],
        points: [
            'Served as a Senior Front-End Developer for large-scale retail and financial platforms, building high-performance UIs using React, Redux Toolkit, React Router, Tailwind, and SCSS, improving user task completion speed by 25%.',
            'Developed 20+ reusable, production-grade components and optimized rendering with Hooks/RTK, reducing page load time by 1.2 seconds and improving Lighthouse performance scores by 30–40 points.',
            'Translated Figma designs into pixel-perfect, accessible interfaces meeting WCAG standards, reducing UI-related QA defects to near zero and increasing design accuracy to 98%+',
            'Integrated REST APIs, implemented error-boundaries, caching, and lazy-loading strategies, reducing API-related UI failures by 35% and boosting overall application stability.',
            'Built automated test suites with Jest, React Testing Library, and Vitest, achieving 85%+ coverage and improving release confidence in CI/CD pipelines.'
        ]
    },
    {
        company: 'HCL Technologies',
        role: 'Application Developer',
        date: 'March 2019 - Dec 2019',
        tech: ['C', 'C++', 'Linux'],
        points: [
            'Designed and improved applications for Vision Tek POS devices, enabling reliable banking services in rural areas. Developed, and maintained applications in C and C++ on Linux systems.',
            'Improved performance and stability through code optimization and collaborative reviews, reducing transaction errors by ~20% and minimizing system crashes under high transaction loads of 500+ transactions per hour.'
        ]
    }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-content">
                <h2 className="section-title">Work Experience</h2>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-left">
                                <h3 className="company-name">{exp.company}</h3>
                                <div className="role-title">{exp.role}</div>
                                <div className="date-range">{exp.date}</div>
                            </div>
                            <div className="experience-right">
                                <div className="tech-stack">
                                    {exp.tech.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                                <ul className="experience-points">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
