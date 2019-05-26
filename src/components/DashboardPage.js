import React from 'react';
import ArticlesSummary from './ArticlesSummary';
import ArticleList from  './ArticleList';
import ArticleListFilters from './ArticleListFilters';

const DashboardPage = () => (
    <div>
        <ArticlesSummary />
        <ArticleList />
    </div>
);

export default DashboardPage;