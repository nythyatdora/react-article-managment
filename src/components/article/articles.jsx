import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DisplayArticleContainer from './displayArticlesContainer';
import ManipulateArticle from './manipulateArticle';
import ViewArticle from './viewArticle';
import DeleteArticleContainer from './deleteArticleContainer';

import './articles.css';

export default class Articles extends React.Component {
    render() {
        let { match } = this.props;
        let { path } = match;

        return (
            <Switch>
                <Route exact path={`${path}`}>
                    <DisplayArticleContainer></DisplayArticleContainer>
                </Route>

                <Route exact path={`${path}/add`} component={(props) => <ManipulateArticle type={'add'} {...props} />}></Route>
                ធ
                <Route path={`${path}/view/:id`} component={ViewArticle}></Route>

                <Route path={`${path}/edit/:id`} component={(props) => <ManipulateArticle type={'edit'} {...props} />}></Route>

                <Route path={`${path}/delete/:id`} component={(props) => <DeleteArticleContainer {...props} />}></Route>
            </Switch >
        );
    }
}