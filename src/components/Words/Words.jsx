import React from 'react';
import { motion } from 'framer-motion';
import './Words.css';

const Words = () => {
    const words = [
        "Perfection", "is", "achieved,", "not", "when",
        "there", "is", "nothing", "more", "to", "add,", "but",
        "when", "there", "is", "nothing", "left", "to", "take",
        "away."
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    const waveVariants = {
        hidden: { x: -100, opacity: 0, rotateY: -45 },
        visible: {
            x: 0,
            opacity: 1,
            rotateY: 0,
            transition: { duration: 1, ease: 'easeOut' }
        }
    };

    return (
        <section className="words-section" style={{ perspective: "1000px" }}>
            <div className="words-container">
                <motion.div
                    className="sound-wave"
                    variants={waveVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }} // animate every time scrolled to
                >
                    <svg viewBox="0 0 200 50" className="wave-svg">
                        <path
                            d="M10,25 Q20,10 30,25 T50,25 T70,25 T90,25 T110,25 T130,25 T150,25 T170,25 T190,25"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="wave-path"
                        />
                    </svg>
                </motion.div>

                <motion.div
                    className="quote-text"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            className="word"
                            variants={wordVariants}
                            style={{ display: 'inline-block', marginRight: '0.25em' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>

                <div className="dots-pattern">
                    {Array.from({ length: 50 }, (_, i) => (
                        <div
                            key={i}
                            className="dot"
                            style={{
                                left: `${(i % 10) * 10}%`,
                                top: `${Math.floor(i / 10) * 20}%`,
                                opacity: 0.3 // static dots
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Words;