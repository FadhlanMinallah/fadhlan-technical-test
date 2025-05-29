// src/components/ArticleDetail.tsx
import React from 'react';
import { Typography } from 'antd';
import { Article } from '../models/Article';

const { Title, Text } = Typography;

interface ArticleDetailProps {
    article: Article | null;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
    if (!article) return null;

    return (
        <div>
            <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: '300px', margin: '1rem 0 .75rem 0', objectFit: 'contain', borderRadius: '0.75rem 0.75rem 0 0', background: '#00000040' }} />
            <Title level={5}>{article.title}</Title>
            <p>{article.content}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text type='secondary'>Published at: {article.publishedAt}</Text>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
};

export default ArticleDetail;
