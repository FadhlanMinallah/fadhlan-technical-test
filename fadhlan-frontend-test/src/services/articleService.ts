// src/services/articleService.ts
import axios from 'axios';
import { Article } from '../models/Article';

const API_KEY = '00ab388072b54aaeb1fdb38a4e8e10bc';
const BASE_URL = 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com';

export const fetchArticles = async (query: string): Promise<Article[]> => {
    const searchQuery = query ? encodeURIComponent(query.trim()) : '';
    const response = await axios.get(`${BASE_URL}&q=${searchQuery}&apiKey=${API_KEY}`);
    return response.data.articles;
};
