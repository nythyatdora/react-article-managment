import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../home/home';
import Posts from '../posts/posts';
import Login from '../login/login';
import AboutMe from '../aboutme/aboutme';
import Articles from '../article/articles';


export const Authorize = {
    isAuthenticated: false,

    authenticate() {
        Authorize.isAuthenticated = true;
    },

    signout() {
        Authorize.isAuthenticated = false;
    }
};
export default function Main() {
    return (
        <Switch>
            <Route exact path={['', '/', '/home']}>
                <Home></Home>
            </Route>

            <Route path={'/articles'}
                render={
                    (props) =>
                        !Authorize.isAuthenticated ?
                            <Redirect
                                to={
                                    {
                                        pathname: '/login',
                                        state: {
                                            from: props.location,
                                        }
                                    }
                                }></Redirect>
                            :
                            (<Articles {...props}></Articles>)
                }
            >
            </Route>

            <Route path={'/posts'} component={(props) => <Posts {...props} />}></Route>

            <Route path={'/login'} component={
                (props) => <Login {...props}></Login>
            }>
            </Route>

            <Route path={'/aboutme'}>
                <AboutMe></AboutMe>
            </Route>

            <Route path={'/signout'}></Route>

            <Route path='*'>
                <Redirect
                    to={{
                        pathname: "/404",
                    }}
                />
            </Route>
        </Switch>
    );
}