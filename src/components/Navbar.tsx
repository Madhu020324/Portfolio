import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY + 150 >= sectionTop) {
          current = section.getAttribute('id') || '';
        }
      });

      // Bottom of page check
      if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.documentElement.scrollHeight - 50) {
        // Find the last section
        if (sections.length > 0) {
          current = sections[sections.length - 1].getAttribute('id') || '';
        }
      }

      // If at top, set hero as active (fallback)
      if (window.scrollY < 100) {
        current = 'hero';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo-container" onClick={openModal}>
          <img src="/public/Madhu_Image.jpg" alt="Madhu Yamini Nallamothu" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact Me</a></li>
        </ul>
      </nav>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <img src="/public/Madhu_Image.jpg" alt="Profile Photo of Madhu Yamini Nallamothu" className="full-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
