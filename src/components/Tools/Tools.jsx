import React from 'react';
import { motion } from 'framer-motion';
import {
  FileCode, Palette, Zap, Book, Atom, RefreshCw, Sparkles, Server, Rocket,
  Hammer, Plug, Landmark, Figma, Wind, Bold, Database, Leaf, Flame,
  Clipboard, Github, Laptop, Mail, CreditCard, DollarSign, Cloud, Send,
  Bell, Share2, Shield, Wifi, Wrench, Map, Lock, Moon, BarChart2,
} from 'lucide-react';

import './tools.css';

const Tools = () => {
  const allTools = [
    { name: "HTML5", icon: <FileCode size={20} /> },
    { name: "CSS3", icon: <Palette size={20} /> },
    { name: "JavaScript", icon: <Zap size={20} /> },
    { name: "TypeScript", icon: <Book size={20} /> },
    { name: "React.js", icon: <Atom size={20} /> },
    { name: "Redux Toolkit", icon: <RefreshCw size={20} /> },
    { name: "ES6", icon: <Sparkles size={20} /> },
    { name: "Node.js", icon: <Server size={20} /> },
    { name: "Express.js", icon: <Rocket size={20} /> },
    { name: "Nest.js", icon: <Hammer size={20} /> },
    { name: "EJS", icon: <FileCode size={20} /> },
    { name: "REST APIs", icon: <Plug size={20} /> },
    { name: "MVC Architecture", icon: <Landmark size={20} /> },
    { name: "Figma", icon: <Figma size={20} /> },
    { name: "Tailwind", icon: <Wind size={20} /> },
    { name: "Bootstrap", icon: <Bold size={20} /> },
    { name: "PostgreSQL", icon: <Database size={20} /> },
    { name: "MongoDB", icon: <Leaf size={20} /> },
    { name: "Firebase", icon: <Flame size={20} /> },
    { name: "Supabase", icon: <Database size={20} /> },
    { name: "Git", icon: <Clipboard size={20} /> },
    { name: "Github", icon: <Github size={20} /> },
    { name: "VS Code", icon: <Laptop size={20} /> },
    { name: "Postman", icon: <Mail size={20} /> },
    { name: "Razorpay", icon: <CreditCard size={20} /> },
    { name: "Stripe", icon: <DollarSign size={20} /> },
    { name: "Cloudinary", icon: <Cloud size={20} /> },
    { name: "Node Mailer", icon: <Send size={20} /> },
    { name: "Web Push", icon: <Bell size={20} /> },
    { name: "Socket.io", icon: <Share2 size={20} /> },
    { name: "JWT", icon: <Shield size={20} /> },
    { name: "Axios", icon: <Wifi size={20} /> },
    { name: "SDK", icon: <Wrench size={20} /> },
    { name: "Google Map", icon: <Map size={20} /> },
    { name: "Auth 0.2", icon: <Lock size={20} /> },
    { name: "Moon Moduler", icon: <Moon size={20} /> },
    { name: "JSON", icon: <BarChart2 size={20} /> }
  ];

  const cardContentVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const headVeriant = {
    hidden: { opacity: 0, y: -50, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <div className="tools-container">
      <motion.div
        className="tools-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={headVeriant}
      >
        <h2 className="tools-title">My Tools</h2>
        <div className="tools-underline"></div>
      </motion.div>

      <motion.div
        className="tools-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={cardContentVariants}
      >
        {allTools.map((tool, index) => (
          <div key={index} className="tool-card">
            <span className="tool-icon">{tool.icon}</span>
            <span className="tool-name">{tool.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;