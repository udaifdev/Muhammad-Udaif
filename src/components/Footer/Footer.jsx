import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Social Links */}
                    <div className="footer-social">
                        <a
                            href="https://github.com/muhammadudaif"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub Profile"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/muhammadudaif"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:muhammadudaif786udaif@gmail.com"
                            className="social-link"
                            aria-label="Send Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="footer-text">
                        <p>
                            © {currentYear} Muhammad Udaif. Made with <Heart size={16} className="heart" /> in Bangalore
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;