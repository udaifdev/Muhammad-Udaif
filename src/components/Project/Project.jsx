import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Project.css';

const Project = () => {
    const cardvariant = {
        hidden: { opacity: 0, scale: 0.8, rotateX: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const projects = [
        {
            id: 0,
            title: "Customaized Gym Trainer Web Application",
            image: "https://media.istockphoto.com/id/2027278927/photo/young-athletic-woman-exercising-with-barbell-during-sports-training-in-a-gym.jpg?s=612x612&w=0&k=20&c=ifFL7Mqc8NwTj25PAx4ONy1OOQZvc1S_kVOofsbLgFw=",
            description: "A fitness management web application for trainers to assign workouts and diet plans, track body measurements, and monitor member fitness progress.",
            liveLink: "https://app.avfitness.in/",
            // codeLink: "https://github.com/example/git-vs-svn",
        },

        {
            id: 1,
            title: "E-Commerce Solution",
            image: "images/male fashion front page.png",
            description: "Trendy, high-quality fashion store with responsive design.",
            // liveLink: "https://github.com/udaifdev/Fashion-s-World",
            codeLink: "https://github.com/udaifdev/Fashion-s-World",
        },
        {
            id: 2,
            title: "Agentlivery",
            image: "images/ai front page.png",
            description: "AI chatbot solution and modern landing page show case.",
            liveLink: "https://agentlivery-client.vercel.app/",
            codeLink: "https://github.com/udaifdev/Agentlivery-Client",
        },
        {
            id: 3,
            title: "AvailoAssist",
            image: "images/service provider front page.png",
            description: "Smooth service booking platform with scheduling and Location tracking.",
            // liveLink: "https://github.com/udaifdev/AvailoAssist",
            codeLink: "https://github.com/udaifdev/AvailoAssist",
        },
        {
            id: 4,
            title: "Finance Management Tracker Web Application",
            image: "https://i.ytimg.com/vi/ZqMotyhgcc4/maxresdefault.jpg",
            description: "A web-based finance tracker to manage income, expenses, loans, and view monthly and yearly reports through an interactive dashboard.",
            // liveLink: "https://example.com/finance-tracker",
            // codeLink: "https://github.com/example/finance-tracker",
        },

        {
            id: 5,
            title: "Author Arjun Maurya",
            image: "images/author front page.png",
            description: "Clean portfolio for Kannada author ,writer & books show case .",
            liveLink: "https://author-project-mauve.vercel.app/",
            codeLink: "https://github.com/udaifdev/Author-Project",
        },
        {
            id: 6,
            title: "Portfolio Redesign",
            image: "https://static.wixstatic.com/media/5af200_5214c616fc0944adad8c6f7350c4d96d~mv2.png/v1/fill/w_568,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5af200_5214c616fc0944adad8c6f7350c4d96d~mv2.png",
            description: "Creative layout with animations and interactive UI.",
            liveLink: "https://github.com/udaifdev/Portfolio",
            codeLink: "https://github.com/udaifdev/Portfolio",
        },
        {
            id: 7,
            title: "Product Management System",
            image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=400&h=250&fit=crop",
            description: "Comprehensive overview of product management System Product CRUD Operations development.",
            liveLink: "https://pma-frontend-mu.vercel.app/",
            codeLink: "https://github.com/udaifdev/Product-Management-System",
        },
        // {
        //     id: 7,
        //     title: "Git vs Subversion: An Intuitive Explanation",
        //     image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
        //     description: "Detailed comparison between Git and SVN version control systems with practical examples.",
        //     liveLink: "https://example.com/git-vs-svn",
        //     codeLink: "https://github.com/example/git-vs-svn",
        // },
        // {
        //     id: 8,
        //     title: "Machine Learning Model vs ML Algorithm",
        //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
        //     description: "Clear distinction between ML models and algorithms with practical implementation examples.",
        //     liveLink: "https://example.com/ml-model-vs-algorithm",
        //     codeLink: "https://github.com/example/ml-model-vs-algorithm",
        // }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    // Get current projects for the page
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Simplified animation variants - only for title and card content
    const titleVariants = {
        hidden: { opacity: 0, y: -50, rotateX: -45 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardContentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="projects-container" style={{ perspective: "1500px" }}>
            <div className="projects-header">
                <motion.h2
                    className="projects-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={titleVariants}
                >
                    Featured Projects
                </motion.h2>
                <p className="projects-subtitle">
                    Explore my latest work and contributions
                </p>
            </div>

            <div className="projects-grid">
                {currentProjects.map((project, index) => (

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardvariant}
                        key={project.id} className="project-card">

                        <div className="project-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link live-link"
                                        title="View Live Demo"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link code-link"
                                        title="View Source Code"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className="project-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={cardContentVariants}
                        >
                            <h3 className="project-title">
                                {project.title}
                            </h3>
                            <p className="project-description">
                                {project.description}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        className={`pagination-btn prev-btn ${currentPage === 1 ? 'disabled' : ''}`}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="pagination-numbers">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        className={`pagination-btn next-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        style={{
                            opacity: currentPage === totalPages ? 0.5 : 1,
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
                        }}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Project;