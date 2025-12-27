import React from 'react';
import './Projects.css';
import './Projects.css';
import expenseJournalImg from '../assets/expense-journal.png';
import { FaExternalLinkAlt, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

interface ProjectItem {
    title: string;
    link: string;
    description: string;
    image: string;
    techStack: string[];
}

const projects: ProjectItem[] = [
    {
        title: 'Expense Journal',
        link: 'https://expense-journal.vercel.app/',
        description: 'A privacy-focused expense tracker that keeps all data local, providing visual spending analytics and Excel export — no server storage.',
        image: expenseJournalImg,
        techStack: ['React', 'TypeScript'],
    },
    // Add more projects here later
];

const Projects: React.FC = () => {
    const getTechIcon = (tech: string) => {
        switch (tech) {
            case 'React':
                return <FaReact className="tech-icon react-icon" title="React" />;
            case 'TypeScript':
                return <SiTypescript className="tech-icon ts-icon" title="TypeScript" />;
            default:
                return null;
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="projects-content">
                <h2 className="section-title">Projects</h2>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-details">
                                <div className="project-header">
                                    <h3 className="project-title">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            {project.title} <FaExternalLinkAlt className="external-link-icon" />
                                        </a>
                                    </h3>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech-stack">
                                    {project.techStack.map((tech, idx) => (
                                        <span key={idx}>{getTechIcon(tech)}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
