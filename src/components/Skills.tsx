import React from 'react';
import './Skills.css';

interface SkillCategory {
    category: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        category: 'Languages',
        skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'C', 'C++']
    },
    {
        category: 'Frontend & Styling',
        skills: ['React.js', 'Next.js', 'Sass (SCSS)', 'Tailwind CSS', 'Responsive Design (Flexbox, CSS Grid)']
    },
    {
        category: 'UI Libraries',
        skills: ['Material UI (MUI)', 'Ant Design']
    },
    {
        category: 'State Management',
        skills: ['Redux Toolkit', 'React Context API']
    },
    {
        category: 'APIs & Data',
        skills: ['RESTful APIs', 'Axios', 'Fetch API']
    },
    {
        category: 'Build & Tooling',
        skills: ['npm', 'Vite', 'Webpack']
    },
    {
        category: 'Testing',
        skills: ['Jest', 'React Testing Library', 'Vitest']
    },
    {
        category: 'Version Control & Workflow',
        skills: ['Git', 'GitHub', 'Agile/Scrum', 'Jira']
    },
    {
        category: 'Deployment & Cloud',
        skills: ['Netlify', 'Vercel', 'GitHub Actions', 'AWS Services']
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-content">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-list">
                    {skillCategories.map((item, index) => (
                        <div key={index} className="skill-category-item">
                            <div className="skill-category-name">
                                <h3>{item.category}</h3>
                            </div>
                            <div className="skill-items">
                                {item.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
