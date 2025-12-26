import Link from "@docusaurus/Link";
import clsx from 'clsx';
import styles from './ebook.module.css';

export default function Ebook() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                🎯 Tired of failing technical interviews?
            </h2>
            <p className={styles.description}>
                Get my <strong>FREE e-book</strong> "Cracking The Technical Interview" and learn proven strategies
                to ace your next technical interview with confidence!
            </p>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✅</span> 
                        Master coding and system design questions
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✅</span> 
                        Learn behavioral interview techniques
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✅</span> 
                        Discover negotiation strategies
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✅</span> 
                        Build unshakeable confidence
                    </li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <Link
                    className={clsx("button button--lg", styles.button)}
                    to="https://ebook.emersonbraun.dev/">
                    Get My Free E-book 📚
                </Link>
            </div>
            <p className={styles.footer}>
                Trusted by 2,000+ developers • No spam, we promise
            </p>
        </div>
    );
}