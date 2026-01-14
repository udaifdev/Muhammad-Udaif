import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const words = ['visionary', 'dedicated', 'versatile', 'goal-oriented'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [words.length]);

    const cardContentVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 45 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
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



    return (
        <div className="about-container" style={{ perspective: "1000px" }}>
            <div className="content">
                <div className="arrow-icon">
                    <span>&gt;&gt;&gt;</span>
                </div>

                <motion.h1
                    className="title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={HeaderVariants}
                >
                    A <span className="animated-word">{words[currentWordIndex]}</span>
                    <span className="static-text"> software engineer, passionate about transforming ideas into reality.</span>
                </motion.h1>


                <motion.p className="description"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardContentVariants}
                >
                    I am a dedicated Full-Stack Developer with 1 year of hands-on experience in building scalable, high-performance applications.
                    Specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js),
                    I have a strong foundation in full-stack development and a passion for creating dynamic, user-centric web applications.
                    Currently undergoing training at Brototype, Bangalore,
                    I am committed to mastering modern web technologies and staying at the forefront of industry trends.
                    My blend of technical proficiency, problem-solving skills,
                    and creativity makes me a valuable asset to any team focused on building cutting-edge digital solutions.
                </motion.p>
            </div>
        </div>
    );
};

export default About;