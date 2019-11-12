import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import CogoToast from 'cogo-toast';
import DisplayArticlesContainer from './displayArticlesContainer';
import { deleteArticle } from './../../actions/articleAction';
import { connect } from 'react-redux';

export class DeleteArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
        };
    }

    componentDidMount() {
        let id = this.props.articleId;
        this.props.deleteArticle(id);

        this.setState({
            redirect: true,
        });
    }

    render() {
        let { redirect } = this.state;
        console.log(this.props);

        return (
            <>
                <DisplayArticlesContainer></DisplayArticlesContainer>

                <Route>
                    {redirect ?
                        <Redirect to={'/articles'}></Redirect>
                        : ''
                    }
                </Route>);
            </>
        )
    };
}

const mtp = (rootStore) => {
    return {
    }
};

export default connect(mtp, { deleteArticle })(DeleteArticle);
