import Link from "@docusaurus/Link";
import clsx from 'clsx';
import styles from './AwsCheatsheetCard.module.css';

export default function AwsCheatsheetCard() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                ☁️ AWS Cheatsheet
            </h2>
            <p className={styles.description}>
                Seu guia definitivo de preparação para <strong>certificações AWS</strong> com insights estruturados sobre os serviços mais importantes!
            </p>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✅</span>
                        Domine os serviços AWS fundamentais
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✅</span>
                        Prepare-se para certificações AWS
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✅</span>
                        Aprenda arquiteturas em nuvem
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.checkIcon}>✅</span>
                        Referência rápida para desenvolvedores
                    </li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <Link
                    className={clsx("button button--lg", styles.button)}
                    to="https://emersonbraun.github.io/aws-cheatsheet/">
                    Acesse o AWS Cheatsheet 🚀
                </Link>
            </div>
            <p className={styles.footer}>
                Gratuito • Sempre atualizado • Feito para desenvolvedores
            </p>
        </div>
    );
}
