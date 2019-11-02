import React from 'react';
import { Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';

import Home from '../home/home';
import Login from '../login/login';
import AboutMe from '../aboutme/aboutme';
import Articles from '../article/articles';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authorize: true,
            articles: [],
            article: {},
            addArticle: false,
            editArticle: false
        };
    }

    componentDidMount() {
        fetch('http://www.api-ams.me/v1/api/articles?page=1&limit=10', {
            headers: {
                "Authorization": 'Basic QU1TQVBJQURNSU46QU1TQVBJUEBTU1dPUkQ=',
                "content-type": "application/json;charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    articles: res.DATA
                });
            })
            .catch(error => console.log(error));
    }

    viewArticleByID(id) {
        fetch('http://www.api-ams.me/v1/api/articles/' + id)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }

    render() {
        const { articles } = this.state;

        return (
            <main>
                <Switch>
                    <Route exact path={['', '/', '/home']}>
                        <Home></Home>
                    </Route>

                    <Route path={'/articles'}
                        render={
                            ({ location }) =>
                                !this.state.authorize ?
                                    <Redirect
                                        to={
                                            {
                                                pathname: '/login',
                                                state: {
                                                    from: location,
                                                }
                                            }
                                        }></Redirect>
                                    :
                                    (<Articles list={articles}></Articles>)
                        }
                    >
                    </Route>

                    <Route path={'/login'}>
                        <Login></Login>
                    </Route>

                    <Route path={'/aboutme'}>
                        <AboutMe></AboutMe>
                    </Route>

                    <Route path={'/login'}></Route>

                    <Route path='*'>
                        <Redirect
                            to={{
                                pathname: "/404",
                            }}
                        />
                    </Route>
                </Switch>
            </main >
        );
    }
}