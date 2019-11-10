import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ResizeableTextarea from './resizeableTextarea';
import CogoToast from 'cogo-toast';

export default class ManipulateArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            article: {
                redirect: false,

                ID: '',
                TITLE: '',
                CREATED_DATE: '',
                DESCRIPTION: ''
            }
        }

        this.createdDate = React.createRef();
    }

    fetchArticleByID(id) {
        let { type } = this.props;

        if (type === 'edit')
            fetch(`http://www.api-ams.me/v1/api/articles/${id}`, {
                method: 'GET',
                headers: {
                    "content-type": "application/json;charset=UTF-8",
                }
            })
                .then(res => res.json())
                .then(res => {
                    let { DATA } = res;

                    this.setState({
                        ID: DATA.ID,
                        TITLE: DATA.TITLE,
                        CREATED_DATE: DATA.CREATED_DATE,
                        DESCRIPTION: DATA.DESCRIPTION,
                    });
                }).catch(error => console.log(error));
    }

    async pushNewArticle(article) {
        fetch(`http://www.api-ams.me/v1/api/articles`, {
            method: 'POST',
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(article),
        }).then(res => {
            let { status } = res;

            if (status === 200) {
                CogoToast.loading('waiting for response...',
                    {
                        position: 'bottom-right',
                    }
                ).then(() => {
                    CogoToast.success('new article has been added!',
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
                    });
            }
        });
    }

    putExistArticle(article) {
        fetch(`http://www.api-ams.me/v1/api/articles/${article.ID}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(article),
        }).then(res => {
            let { status } = res;

            if (status === 200) {
                CogoToast.loading('waiting for response...',
                    {
                        position: 'bottom-right',
                    }
                ).then(() => {
                    CogoToast.success('selected article has been updated!',
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
                    });
            }
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        let { type } = this.props;
        let { ID, TITLE, DESCRIPTION } = this.state;
        let CREATED_DATE = this.createdDate.current.value;

        if (type === 'add')
            this.pushNewArticle({
                TITLE, CREATED_DATE, DESCRIPTION
            });
        else if (type === 'edit')
            this.putExistArticle({ ID, TITLE, CREATED_DATE, DESCRIPTION });

        this.setState({
            redirect: true,
        })
    };

    titleHandler = (event) => {
        this.setState({
            TITLE: event.target.value,
        })
    }

    descriptionHandler = (event) => {
        this.setState({
            DESCRIPTION: event.target.value,
        })
    }

    returnPrev = (event) => {
        this.setState({
            redirect: true,
        })
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        this.fetchArticleByID(id);
    }

    render() {
        let { type } = this.props;
        let { redirect } = this.state;

        return (
            <form className={`article--manipulate`} onSubmit={this.submitHandler}>
                <div className="article--manipulate--title">
                    <div>ចំណងជើង</div>
                    <div>
                        <ResizeableTextarea rows={1} lineheight={166} placeholder={'បញ្ចូលអក្សរនៅទីនេះ'} value={this.state.TITLE} onChange={this.titleHandler}></ResizeableTextarea>
                    </div>
                </div>

                <div className="article--manipulate--date">
                    <span>ថ្ងៃបង្កើត</span>
                    <span>
                        <input type="text" placeholder={'កាលបរិច្ជេទ'} ref={this.createdDate} defaultValue={this.state.CREATED_DATE} />
                    </span>
                </div>

                <div className="article--manipulate--description">
                    <div>អធិប្បាយ</div>
                    <div>
                        <ResizeableTextarea rows={3} lineheight={22} placeholder={'ចង់សរសេរអីសរសេរមក'} value={this.state.DESCRIPTION} onChange={this.descriptionHandler}></ResizeableTextarea>
                    </div>
                </div>

                <div className="article--manipulate--buttons">
                    {
                        type === 'add' ?
                            <div className="--add">
                                <button onClick={this.returnPrev}>ត្រលប់</button>
                                <button type='submit' onClick={this.submitHandler}>បញ្ចូល</button>
                            </div>
                            :
                            type === 'edit' ?
                                <div className="--edit">
                                    <button onClick={this.returnPrev}>ត្រលប់</button>
                                    <button type='submit' onClick={this.submitHandler}>កែប្រែ</button>
                                </div>
                                : ''
                    }
                </div>

                <Route>
                    {
                        redirect ?
                            <Redirect to={'/articles'}></Redirect>
                            : ''
                    }
                </Route>
            </form >
        );
    }
}
