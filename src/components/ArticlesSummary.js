import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectArticles from '../selectors/articles';

export const ArticlesSummary = ({ articleCount, articlesTotal }) => {
    const articleWord = articleCount === 1 ? 'Article' : 'Articles';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{articleCount}</span> {articleWord}</h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Create Article</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleArticles = selectArticles(state.articles, state.filters);
    return {
        articleCount: visibleArticles.length,
    };
}

export default connect(mapStateToProps)(ArticlesSummary);