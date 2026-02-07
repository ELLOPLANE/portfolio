"use client";

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="home" className={styles.section}>
            <div className={styles.content}>
                <motion.p
                    className={styles.eyebrow}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Hello, I am
                </motion.p>
                <motion.h1
                    className={styles.headline}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                >
                    <span>
                        Creative Developer
                    </span>
                    <br />
                    <span style={{ fontSize: '0.8em', opacity: 0.8 }}>
                        Building digital magic.
                    </span>
                </motion.h1>
                <motion.p
                    className={styles.subheadline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    I transform ideas into high-performance, interactive, and visually stunning web experiences using modern technologies.
                </motion.p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Link href="#projects" className={styles.primaryButton}>
                        View Work
                    </Link>
                    <Link href="#contact" className={styles.secondaryButton}>
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>SCROLL</span>
                <ArrowDown size={20} />
            </motion.div>
        </section>
    );
}
