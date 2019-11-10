import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import CogoToast from 'cogo-toast';
import DisplayArticlesContainer from './displayArticlesContainer';

export default class DeleteArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
        };
    }

    async componentDidMount() {
        let id = this.props.articleId;
        await fetch(`http://www.api-ams.me/v1/api/articles/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json;charset=UTF-8",
            }
        })
            .then(res => {
                let { status } = res;
                if (status === 200) {
                    CogoToast.loading('waiting for response...', {
                        position: 'bottom-right',
                    })
                        .then(() => {
                            CogoToast.success('selected item has been deleted!',
                                {
                                    position: 'bottom-right',
                                }
                            );

                        });
                }
                else {
                    CogoToast.error('something is wrong!',
                        {
                            position: 'bottom-right',
                        }
                    );
                }
            });

        this.setState({
            redirect: true,
        });
    }

    render() {
        let { redirect } = this.state;
        console.log(this.props);

        return (
            <DisplayArticlesContainer></DisplayArticlesContainer> >

            <Route>
                {redirect ?
                    <Redirect to={'/articles'}></Redirect>
                    : ''
                }
            </Route>);
    }
}

