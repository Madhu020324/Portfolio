import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

    const validateForm = () => {
        const newErrors: { name?: string; email?: string; message?: string } = {};
        let isValid = true;

        if (!name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please provide a valid email';
            isValid = false;
        }

        if (!message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            const subject = `Portfolio Contact from ${name}`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            window.location.href = `mailto:madhuyaminallamothu97@gmail.com?subject=${subject}&body=${body}`;

            // Optional: check if we should clear form after "sending" (opening mail client)
            // setName(''); setEmail(''); setMessage(''); setErrors({});
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-content">
                <h2 className="section-title">Contact Me</h2>

                <div className="contact-grid">
                    {/* Left Column: Contact Form */}
                    <div className="contact-form-container">
                        <p className="contact-intro">
                            If you have any questions or concerns, please don't hesitate to contact me.
                            I am open to any work opportunities that align with my skills and interests.
                        </p>

                        <form onSubmit={handleSubmit} className="contact-form" noValidate>
                            <div className="form-group">
                                <label htmlFor="name">Name: <span className="required-asterisk">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={errors.name ? 'input-error' : ''}
                                    required
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email: <span className="required-asterisk">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={errors.email ? 'input-error' : ''}
                                    required
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message: <span className="required-asterisk">*</span></label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={errors.message ? 'input-error' : ''}
                                    required
                                    rows={5}
                                ></textarea>
                                {errors.message && <span className="error-message">{errors.message}</span>}
                            </div>

                            <button type="submit" className="submit-button">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="icon-circle">
                                <MdEmail size={24} />
                            </div>
                            <div className="info-text">
                                <a href="mailto:madhuyaminallamothu97@gmail.com">madhuyaminallamothu97@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle icon-red">
                                <MdLocationOn size={24} />
                            </div>
                            <div className="info-text">
                                <span>Illinois, USA (Open to relocation)</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/Madhu020324" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/madhuyamini-nallamothu/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
