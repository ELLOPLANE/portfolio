import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                    <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                    <Twitter size={20} />
                </a>
                <a href="mailto:email@example.com" className={styles.socialLink} aria-label="Email">
                    <Mail size={20} />
                </a>
            </div>
            <p className={styles.copyright}>
                © {new Date().getFullYear()} Creative Developer. Built with Next.js & Framer Motion.
            </p>
        </footer>
    );
}
