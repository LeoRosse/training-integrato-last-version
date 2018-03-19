import React from 'react';
import { connect } from 'react-redux';
import ArticleListItem from './ArticleListItem';
import selectArticles from '../selectors/articles';

export const ArticleList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Articles</div>
            <div className="show-for-desktop">Article</div>
        </div>
        <div className="list-body">
        {
            props.articles.length === 0 ? (
                <div className="list-item  list-item--message">
                <span>No articles</span>
                </div>
            ) : (
                    props.articles.map((article) => {
                        return <ArticleListItem key={article.id} {...article} />;
                    })
                )
        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        articles: selectArticles(state.articles, state.filters)
    };
}

export default connect(mapStateToProps)(ArticleList);