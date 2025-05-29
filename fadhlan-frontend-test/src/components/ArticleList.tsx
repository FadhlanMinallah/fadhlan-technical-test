// src/components/ArticleList.tsx
import React from 'react';
import { Card, Col, Row } from 'antd';
import { Article } from '../models/Article';

interface ArticleListProps {
    articles: Article[];
    onSelect: (article: Article) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, onSelect }) => {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {articles.map((article, index) => {
                return (
                    <Col className="gutter-row" span={6} key={index} style={{ padding: '16px' }}>
                        <Card
                            hoverable
                            onClick={() => onSelect(article)}
                            style={{ overflow: 'hidden' }}
                            cover={<img alt="example" style={{ height: '250px', objectFit: 'cover' }} src={article.urlToImage} />}
                        >
                            <h3
                                style={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 1,
                                    fontWeight: 'bold',
                                }}
                            >{article.title}</h3>
                            <p
                                style={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2,
                                }}
                            >{article.description}</p>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    );
};

export default ArticleList;
