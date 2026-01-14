import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Phone, Mail, Instagram, Twitter } from 'lucide-react';
import './Land.css';
// import Header from '../Header/Header';

const Land = () => {

    const inputboxvariant = {
        hidden: { opacity: 0, x: 100, rotateY: 90 },
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
    const imageVariant = {
        hidden: { opacity: 0, x: -100, rotateY: -90 },
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };


    const socialVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
                delayChildren: 0.8
            }
        }
    };

    const socialItemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const dotVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 1 + i * 0.2,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="land-section">
            {/* <Header /> */}
            <motion.div
                className="land-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ perspective: "1000px" }}
            >
                <motion.div className="profile-image"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={imageVariant} >
                    <div className="image-placeholder">
                        <div className="profile-silhouette">
                            <img src="images/udaif 1.png" alt="udaif" />
                        </div>
                    </div>
                </motion.div>

                <motion.div className="content-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={inputboxvariant}
                >
                    <div className="text-content">
                        <h1
                            className="name-title"
                        >
                            Muhammad Udaif PA<span className="accent-dot">.</span>
                        </h1>

                        <p
                            className="role-subtitle"
                            variants={itemVariants}
                        >
                            MERN Full Stack Software Developer
                        </p>

                        <div
                            className="social-links"
                            variants={socialVariants}
                        >
                            <motion.a
                                href="https://github.com/udaifdev?tab=repositories"
                                className="social-link"
                                target="_blank"
                                aria-label="GitHub"
                                variants={socialItemVariants}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/muhammadudaifpa022/"
                                target="_blank"
                                className="social-link"
                                aria-label="LinkedIn"
                                variants={socialItemVariants}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Linkedin size={20} />
                            </motion.a>
                            <motion.a
                                href="+91 8867148072"
                                className="social-link"
                                aria-label="Phone"
                                variants={socialItemVariants}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Phone size={20} />
                            </motion.a>
                            <motion.a
                                href="mailto:muhammadudaif786udaif@gmail.com"
                                target="_blank"
                                className="social-link"
                                aria-label="Email"
                                variants={socialItemVariants}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail size={20} />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/udaif_uzz/"
                                className="social-link"
                                target="_blank"
                                aria-label="Instagram"
                                variants={socialItemVariants}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Instagram size={20} />
                            </motion.a>
                            <motion.a
                                href=" "
                                className="social-link"
                                aria-label="Twitter"
                                variants={socialItemVariants}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Twitter size={20} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Background decorative elements */}
            <div className="bg-decoration">
                <motion.div
                    className="floating-dot dot-1"
                    variants={dotVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                ></motion.div>
                <motion.div
                    className="floating-dot dot-2"
                    variants={dotVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                ></motion.div>
                <motion.div
                    className="floating-dot dot-3"
                    variants={dotVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                ></motion.div>
            </div>
        </section>
    );
};

export default Land;