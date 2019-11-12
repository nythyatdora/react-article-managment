import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticle } from './../../actions/articleAction';
import DisplayArticles from './displayArticles';

export class DisplayArticlesContainer extends Component {
    componentDidMount() {
        this.props.getArticle();
    }

    render() {
        let { articles } = this.props;

        return (
            <DisplayArticles list={articles}></DisplayArticles>
        );
    }
}

const mtp = (rootStore) => {
    return {
        articles: rootStore.articleR.articles,
    }
};

export default connect(mtp, { getArticle })(DisplayArticlesContainer);