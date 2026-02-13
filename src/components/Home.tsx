import { useMemo, useState } from "react";

import Link from "@docusaurus/Link";
import sidebars from '../../sidebars';
import styles from '../pages/index.module.css';
import { formatName } from '../utils/formatName';

// Normalize sidebar: support either nested categories or a flat list of doc ids
const rawItems = sidebars.tutorialSidebar[1]?.items ?? [];
const leetCodeCategoriesNormalized = Array.isArray(rawItems) && typeof rawItems[0] === 'string'
    ? [{ type: 'category', label: 'LeetCode Problems', items: rawItems as string[] }]
    : (rawItems as Array<{ type: string; label: string; items: string[] }>);

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const leetCodeCategories = leetCodeCategoriesNormalized;

    const filteredCategories = useMemo(() => {
        if (!searchTerm.trim()) return leetCodeCategories;

        return leetCodeCategories.map(category => {
            if (category.type === 'category') {
                const filteredItems = category.items.filter(item => {
                    if (typeof item === 'string') {
                        const problemName = formatName(item).toLowerCase();
                        const categoryName = category.label.toLowerCase();
                        return problemName.includes(searchTerm.toLowerCase()) ||
                               categoryName.includes(searchTerm.toLowerCase());
                    }
                    return false;
                });

                if (filteredItems.length > 0) {
                    return {
                        ...category,
                        items: filteredItems
                    };
                }
            }
            return null;
        }).filter(Boolean);
    }, [searchTerm, leetCodeCategories]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const clearSearch = () => {
        setSearchTerm('');
    };

    return (
        <div className={styles.home}>
            <div className={styles.searchContainer}>
                <div className={styles.searchWrapper}>
                    <input
                        type="text"
                        placeholder="Search for problems or categories..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                    {searchTerm && (
                        <button 
                            onClick={clearSearch}
                            className={styles.clearButton}
                            aria-label="Clear search"
                        >
                            ✕
                        </button>
                    )}
                </div>
                {searchTerm && (
                    <div className={styles.searchInfo}>
                        {filteredCategories.length > 0 ? (
                            <span>{filteredCategories.reduce((total, cat) =>
                                total + (cat?.items?.length || 0), 0)} problems found</span>
                        ) : (
                            <span>No problems found</span>
                        )}
                    </div>
                )}
            </div>

            <div className={styles.leetCodeCategories}>
                {filteredCategories.map((item) => (
                    <div key={item.label} className={styles.leetCodeCategory}>
                        <h2>{item.label}</h2>
                        <ul className={styles.leetCodeProblems}>
                            {item.items.map((subitem) => (
                                <li key={subitem}>
                                    <Link to={`/docs/${subitem}`}>
                                        {formatName(subitem)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}