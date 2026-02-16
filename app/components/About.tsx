"use client";

import { motion } from 'framer-motion';
import styles from './About.module.css';

const skills = [
    'Python', 'SQL', 'Typescript', 'PowerBi',
    'CSS Modules', 'Tailwind CSS', 'Microsoft Suite',
    'Canva'
];

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.headingWrapper}>
                        <h2 className={styles.h2}>About Me</h2>
                        <div className={styles.divider}></div>
                    </div>
                    <p className={styles.bio}>
                        I am an Economics and Media Analytics student at NTU with hands-on experience in data analytics, visualization, and cross-functional collaboration. 
                    </p>
                    <p className={styles.bio}>
                        My approach blends technical expertise in Python, SQL, and Power BI with strategic stakeholder collaboration. I believe the best solutions emerge at the intersection of data-driven analysis and business execution.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className={styles.h3}>Skills</h3>
                    <div className={styles.skillsContainer}>
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                className={styles.skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 + 0.5 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
