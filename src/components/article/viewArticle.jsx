import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class ViewArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            article: {
                TITLE: 'ចំណងជើង',
                CREATED_DATE: 'ថ្ងៃបង្កើត',
                DESCRITPION: 'សេចក្តីអធិប្បាយ'
            }
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        fetch(`http://www.api-ams.me/v1/api/articles/${id}`, {
            method: 'GET',
            headers: {
                "content-type": "application/json;charset=UTF-8",
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    article: res.DATA,
                })
            })
            .catch(error => console.log(error));
    }

    returnPrev = (event) => {
        this.setState({
            redirect: true,
        })
    };

    render() {
        const { article, redirect } = this.state;
        return (
            <div className="article">
                <div className="article--header">
                    <div>អត្ថបទ</div>
                    <div>{article.TITLE}</div>
                </div>
                <div className="article--date">
                    <span>បង្កើតតាំងពី</span>
                    <span>{article.CREATED_DATE}</span>
                </div>
                <div className="article--description">{article.DESCRIPTION}</div>
                <div className="article--buttons">
                    <button onClick={this.returnPrev}>ត្រលប់</button>
                </div>

                <Route>
                    {
                        redirect ?
                            <Redirect to='/articles'></Redirect>
                            : ''
                    }
                </Route>
            </div >
        );
    }
}