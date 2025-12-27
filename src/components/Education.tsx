import React from 'react';
import './Education.css';

interface Achievement {
    title: string;
    description: string;
    issuer: string;
    year: string;
}

interface EducationItem {
    degree: string;
    major: string;
    school: string;
    gpa: string;
    year: string;
    achievements?: Achievement[];
}

const educationData: EducationItem[] = [
    {
        degree: 'Master of Science',
        major: 'Computer Technology',
        school: 'Eastern Illinois University, Charleston, IL',
        gpa: '4.0/4.0',
        year: 'Aug 2024 – Dec 2025'
    },
    {
        degree: 'Bachelor of Technology',
        major: 'Computer Science Engineering',
        school: 'Acharya Nagarjuna University, India',
        gpa: '9.3/10',
        year: 'Sep 2014 – March 2018',
        achievements: [
            {
                title: 'Prathibha Award',
                description: 'An award for academic excellence',
                issuer: 'Acharya Nagarjuna University',
                year: '2018'
            }
        ]
    }
];

const Education: React.FC = () => {
    return (
        <section id="education" className="education-section">
            <div className="education-content">
                <h2 className="section-title">Education</h2>
                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="card-header">
                                <h3 className="degree">{edu.degree}</h3>
                                <span className="year-badge">{edu.year}</span>
                            </div>
                            <p className="major">{edu.major}</p>
                            <p className="school">{edu.school}</p>
                            <p className="gpa">GPA: {edu.gpa}</p>

                            {edu.achievements && edu.achievements.length > 0 && (
                                <div className="achievements-section">
                                    <h4 className="achievements-title">Achievements</h4>
                                    {edu.achievements.map((ach, idx) => (
                                        <div key={idx} className="achievement-item">
                                            <h5 className="achievement-name">{ach.title}</h5>
                                            <p className="achievement-desc">{ach.description}</p>
                                            <p className="achievement-meta">{ach.issuer} | {ach.year}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
