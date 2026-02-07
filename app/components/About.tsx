"use client";

import { motion } from 'framer-motion';
import styles from './About.module.css';

const skills = [
    'React', 'Next.js', 'Typescript', 'Node.js',
    'CSS Modules', 'Tailwind CSS', 'Framer Motion',
    'PostgreSQL', 'GraphQL', 'Docker', 'AWS'
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
                        I am a passionate developer with a keen eye for design and a drive for creating seamless digital experiences. With a background in both frontend and backend technologies, I specialize in building scalable web applications that are not only functional but also visually compelling.
                    </p>
                    <p className={styles.bio}>
                        My approach combines technical expertise with creative problem-solving. I believe that the best software is built at the intersection of engineering and design.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className={styles.h3}>Skills & Technologies</h3>
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
