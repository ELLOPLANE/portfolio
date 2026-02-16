"use client";

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import styles from './Experiences.module.css';

const experiences = [
    {
        title: 'Sales Logisitics Operations and Data Analysis',
        description: 'A full-stack e-commerce solution with Next.js, Stripe integration, and real-time inventory management.',
        tags: ['Next.js', 'Stripe', 'Tailwind', 'PostgreSQL'],
        links: { github: '#', live: '#' },
        image: '', // Placeholder
        backContent: 'hi'
    },
    {
        title: 'Mass Communications Analyst',
        description: 'A collaborative task manager featuring drag-and-drop boards, real-time updates, and team permissions.',
        tags: ['React', 'Firebase', 'Framer Motion'],
        links: { github: '#', live: '#' },
        image: '' // Placeholder
    },
    {
        title: 'Data Visualisation and Financial Analysis',
        description: 'An analytics dashboard powered by AI to visualize data trends and predict future metrics.',
        tags: ['Python', 'FastAPI', 'D3.js', 'Next.js'],
        links: { github: '#', live: '#' },
        image: '' // Placeholder
    },
];

export default function Experiences() {
    return (
        <section id="experiences" className={styles.section}>
            <div className={styles.headingWrapper}>
                <motion.h2
                    className={styles.h2}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Selected Work
                </motion.h2>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.grid}>
  {experiences.map((experience, index) => (
    <motion.div
      key={index}
      className={styles.flipCardWrapper}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ rotateY: 180 }}
      style={{ perspective: '1000px' }}
    >
      <div className={styles.flipCard}>
        {/* FRONT SIDE */}
        <div className={styles.cardFront}>
          <div className={styles.imageFrame}>
            <div style={{ 
              width: '100%', height: '100%', 
              background: `hsl(${220 + index * 40}, 60%, 20%)`,
              display: 'flex', alignItems: 'center', 
              justifyContent: 'center', color: '#fff', opacity: 0.5 
            }}>
              Experience Preview {index + 1}
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{experience.title}</h3>
            <p className={styles.description}>{experience.description}</p>
            <div className={styles.links}>
              <a href={experience.links.github} className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                <Github size={18} /> Code
              </a>
              <a href={experience.links.live} className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className={styles.cardBack}>
          <div className={styles.backContent}>
            <h3 className={styles.title}>{experience.title}</h3>
            <p className={styles.backDescription}>{experience.backContent}</p>
            <div className={styles.tags}>
              {experience.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.links}>
              <a href={experience.links.github} className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                <Github size={18} /> Code
              </a>
              <a href={experience.links.live} className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>

        </section>
    );
}
