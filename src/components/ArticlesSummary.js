import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectArticles from '../selectors/articles';

export const ArticlesSummary = ({ articleCount, articlesTotal }) => {
    const articleWord = articleCount === 1 ? 'Articolo' : 'Articoli';
    return (
        <div className="content-container-summary">
            <h1 className="article-summary__title">Stai visualizzando <span>{articleCount}</span> {articleWord}</h1>
            <div className="article-summary__actions">
                <Link className="btn btn--white" to="/create">Crea Articolo</Link>
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