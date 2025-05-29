// src/views/ArticleView.tsx
import React, { useState } from 'react';
import { useArticles } from '../hooks/useArticles';
import ArticleList from '../components/ArticleList';
import ArticleDetail from '../components/ArticleDetail';
import { Article } from '../models/Article';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Modal, Skeleton } from 'antd';

const ArticleView: React.FC = () => {
    const [valueSearch, setValueSearch] = useState('');
    const { articles, loading, error } = useArticles(valueSearch);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    if (loading) return <Skeleton></Skeleton>
    if (error) return <p style={{ textAlign: 'center' }}>{error}</p>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Input
                style={{ width: '50%', margin: '0 auto' }}
                size='large'
                variant='filled'
                placeholder="Search article.."
                prefix={<SearchOutlined />}
                onChange={(event) => {
                    const searchTerm = event.target.value;
                    const timeoutId = setTimeout(() => {
                        setValueSearch(searchTerm);
                    }, 500);

                    return () => clearTimeout(timeoutId);
                }}
            />

            <div>
                <ArticleList articles={articles} onSelect={(article: Article) => { setSelectedArticle(article as any); showModal() }} />
            </div>
            <Modal
                title="Detail Article"
                width={650}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    <ArticleDetail article={selectedArticle} />
                </div>
            </Modal>
        </div>
    );
};

export default ArticleView;
