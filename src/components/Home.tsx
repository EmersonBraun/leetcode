import { useMemo, useState } from "react";

import Link from "@docusaurus/Link";
import sidebars from '../../sidebars';
import styles from '../pages/index.module.css';
import { formatName } from '../utils/formatName';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const leetCodeCategories = sidebars.tutorialSidebar[1].items;

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
                            <span>Encontrados {filteredCategories.reduce((total, cat) => 
                                total + (cat?.items?.length || 0), 0)} problemas</span>
                        ) : (
                            <span>Nenhum problema encontrado</span>
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