import React from 'react';
import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import { startRemoveArticle, startEditArticle } from '../actions/articles';

export class EditArticlePage extends React.Component {
    onSubmit = (article) => {
        this.props.startEditArticle(this.props.article.id, article);
        this.props.history.push('/dashboard')
    };
    onRemove = () => {
        console.log(this.props)
        this.props.startRemoveArticle({ id: this.props.article.id });
        this.props.history.push('/dashboard')
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Article</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ArticleForm
                        article={this.props.article}
                        onSubmit={this.onSubmit}
                    />
                    <button
                    className="button button--secondary"
                        onClick={this.onRemove}
                    >Remove Article</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        article: state.articles.find((article) => {
            return article.id === props.match.params.id;
        })
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditArticle: (id, article) => dispatch(startEditArticle(id, article)),
    startRemoveArticle: (data) => dispatch(startRemoveArticle(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);