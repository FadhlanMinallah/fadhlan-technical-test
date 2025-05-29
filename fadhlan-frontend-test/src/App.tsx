// src/App.tsx
import React from 'react';
// import 'antd/dist/antd.css';
import 'antd/dist/reset.css';
import { Divider } from 'antd';
import ArticleView from './views/ArticleView';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Divider>
        <h1 style={{ textAlign: 'center' }}>Article</h1>
      </Divider>
      <ArticleView />
    </div>
  );
};

export default App;
