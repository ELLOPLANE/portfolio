"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experiences', href: '#Experiences' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className={styles.logo}>
                        Renes Koh
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className={styles.navLinks}>
                    {links.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className={styles.link}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i + 0.2 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`glass`} // Using global glass utility
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            alignItems: 'center',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(10, 10, 12, 0.95)'
                        }}
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={styles.link}
                                onClick={() => setMenuOpen(false)}
                                style={{ fontSize: '1.2rem' }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
