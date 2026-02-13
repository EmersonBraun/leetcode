import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { type ReactElement } from 'react';

import { EbookCta } from '../components/EbookCta';
import AwsCheatsheetCard from '../components/AwsCheatsheetCard';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Your ultimate guide to solving LeetCode programming problems with structured explanations
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Start Solving 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A comprehensive guide to solving LeetCode programming problems with structured explanations">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="text--center padding-horiz--md">
                  <div className={styles.introSection}>
                    <h2>What is this project?</h2>
                    <p>
                      This LeetCode Cheatsheet is your comprehensive companion for technical interview preparation.
                      Each problem is presented in a structured format with three key sections: Approaches,
                      Key Points, and Solutions. This organization helps you quickly understand how to solve
                      each problem, what's important to know for interviews, and how different approaches relate to each other.
                    </p>

                    <div className={styles.buttons}>
                      <Link
                        className="button button--primary button--lg"
                        to="/docs/">
                        Explore Problems ✨
                      </Link>
                    </div>
                  </div>
                  

                  <h2>Help Improve This Guide</h2>
                  <p>
                    This project thrives on community contributions. If you're preparing for technical interviews
                    or working with algorithms and data structures, your insights are valuable! You can help by:
                  </p>
                  <ul>
                    <li>Adding new approaches based on your experience</li>
                    <li>Updating key points with best practices</li>
                    <li>Contributing to algorithm comparisons</li>
                    <li>Fixing outdated information</li>
                    <li>Improving explanations and examples</li>
                  </ul>
                  <p>
                    Your contributions help keep this guide current and valuable for everyone in the programming
                    community. Check out our contribution guidelines to get started!
                  </p>

                  <div className={styles.buttons} style={{ marginBottom: '4rem' }}>
                    <Link
                      className="button button--secondary button--lg"
                      href="https://github.com/EmersonBraun/leetcode">
                      Contribute to the Project 🤝
                    </Link>
                  </div>

                  {/* E-book Promotional Section */}
                  <EbookCta />

                  <AwsCheatsheetCard />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}