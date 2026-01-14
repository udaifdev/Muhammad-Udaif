import React, { useState, useEffect } from 'react';
import { User, MapPin, Mail, CheckCircle, XCircle, X } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState({ show: false, message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init('sXZ5TUyejLwBnnHmU'); // Your public key
    }, []);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone validation regex (supports various formats)
    const phoneRegex = /^[+]?[0-9\s-()]{10,15}$/;

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const showToast = (message, type) => {
        setToast({ show: true, message, type });
        setTimeout(() => {
            setToast({ show: false, message: '', type: '' });
        }, 4000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            // Send the email using EmailJS
            emailjs.send('service_mtadjw2', 'template_crfinzo', formData, 'sXZ5TUyejLwBnnHmU')
                .then(function (response) {
                    showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
                    setFormData({ name: '', email: '', phone: '', message: '' });
                    setIsSubmitting(false);
                }, function (error) {
                    showToast('Failed to send message. Please try again later.', 'error');
                    console.error('EmailJS Error:', error);
                    setIsSubmitting(false);
                });
        } else {
            showToast('Please fix the errors below and try again.', 'error');
        }
    };

    const HeaderVariants = {
        hidden: { opacity: 0, x: -100, rotateY: -45 },
        visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };
    const inputboxvariant = {
        hidden: { opacity: 0, x: 100, rotateY: 45 },
        visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    return (

        <div className="contact-container" style={{ perspective: "1000px" }}>
            {/* Toast Notification */}
            {toast.show && (
                <div className={`toast ${toast.type}`}>
                    <div className="toast-content">
                        <span className="toast-icon">
                            {toast.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
                        </span>
                        <span className="toast-message">{toast.message}</span>
                        <button
                            className="toast-close"
                            onClick={() => setToast({ show: false, message: '', type: '' })}
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>
            )}

            {/* Header */}
            <motion.div className="contact-header"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={HeaderVariants}
            >
                <h1 className="contact-title">Contact me</h1>
                <div className="contact-subtitle">
                    <span className="line"></span>
                    <span className="subtitle-text">get in touch</span>
                    <span className="line"></span>
                </div>
            </motion.div>

            <div className="contact-content">
                {/* Contact Info */}
                <div className="contact-info">
                    <motion.h2 className="info-title"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={HeaderVariants}>
                        Get in Touch
                    </motion.h2>
                    <motion.p className="info-description"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={HeaderVariants}
                    >
                        Feel free to reach out! Whether you have a project idea, want to
                        collaborate, or just want to say hello, I'd love to connect. You can
                        find me on:
                    </motion.p>

                    <motion.div className="contact-details"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={HeaderVariants}
                    >
                        <div className="contact-item">
                            <div className="contact-icon">
                                <User size={24} />
                            </div>
                            <div className="contact-text">
                                <h3>Muhammad Udaif</h3>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <MapPin size={24} />
                            </div>
                            <div className="contact-text">
                                <h3>HSR Layout Bangalore Karnataka.</h3>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <Mail size={24} />
                            </div>
                            <div className="contact-text">
                                <h3>muhammadudaifpa@gmail.com</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div className="contact-form-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={inputboxvariant}>

                    <h2 className="form-title">Message me</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={errors.name ? 'error' : ''}
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={errors.phone ? 'error' : ''}
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Message..."
                                rows="5"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={errors.message ? 'error' : ''}
                            ></textarea>
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;