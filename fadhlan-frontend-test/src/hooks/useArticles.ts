// src/hooks/useArticles.ts
import { useEffect, useState } from 'react';
import { fetchArticles } from '../services/articleService';
import { Article } from '../models/Article';

export const useArticles = (query: string) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadArticles = async () => {
            try {
                const fetchedArticles = await fetchArticles(query);
                setArticles(fetchedArticles);
            } catch (err) {
                setError('Failed to fetch articles');
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, [query]);

    return { articles, loading, error };
};
