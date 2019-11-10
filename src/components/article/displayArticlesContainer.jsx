import React, { Component } from 'react';
import DisplayArticles from './displayArticles';
import CogoToast from 'cogo-toast';

export default class DisplayArticlesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
        }
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
            }).catch(error => {
                CogoToast.error('server is not responding...',
                    {
                        position: 'bottom-right',
                    }
                );
            });
    }

    render() {
        let { articles } = this.state;

        return (
            <DisplayArticles list={articles}></DisplayArticles>
        );
    }
}
