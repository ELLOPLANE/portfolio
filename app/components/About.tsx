"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, GraduationCap, Briefcase } from 'lucide-react';
import styles from './About.module.css';

const skills = [
  'Python', 'SQL', 'Typescript', 'PowerBi',
  'CSS Modules', 'Tailwind CSS', 'Microsoft Suite',
  'Canva'
];

const experiences = [  // ← NEW: Swipeable job cards
  {
    icon: GraduationCap,
    title: 'Economics & Media Analytics',
    subtitle: 'NTU Singapore',
    period: '2023 - Present',
    content: 'Data analytics, visualization, Python, SQL, Power BI, financial modeling.',
  },
  {
    icon: Briefcase,
    title: 'Sales Logistics Operations',
    subtitle: 'Data Analysis',
    period: '2024',
    content: 'Full-stack e-commerce dashboard. Next.js + PostgreSQL + Stripe integration.',
  },
  {
    icon: Briefcase,
    title: 'Bosch Internship',
    subtitle: 'Engineering Operations',
    period: '2023',
    content: 'Process optimization, manufacturing data analysis, cross-functional collaboration.',
  },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        {/* EXISTING BIO + SKILLS (unchanged) */}
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

      {/* NEW: Swipeable Experiences */}
      <motion.div
        className={styles.experiencesSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <div className={styles.headingWrapper}>
          <h3 className={styles.h3}>Experience</h3>
          <div className={styles.divider}></div>
        </div>
        
        <div className={styles.carousel}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.expCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ delay: index * 0.1 + 1 }}
            >
              <div className={styles.expIcon}>
                <exp.icon size={32} />
              </div>
              <h4 className={styles.expTitle}>{exp.title}</h4>
              <p className={styles.expSubtitle}>{exp.subtitle}</p>
              <p className={styles.expPeriod}>{exp.period}</p>
              <p className={styles.expContent}>{exp.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
