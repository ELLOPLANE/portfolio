"use client";

import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className={styles.eyebrow}>Let's Work Together</span>
                <h2 className={styles.h2}>Ready to start your next project?</h2>
                <p className={styles.subtext}>
                    Have an idea? Need a developer for your team? I'm always open to discussing product design work or partnership opportunities.
                </p>
                <a href="mailto:hello@example.com" className={styles.button}>
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
}
