import React from 'react';
import {Route, Link, useHistory} from 'react-router-dom';
import './login.css';

const defaultUser = {
    username: 'admin',
    password: 'admin',
};

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    usernameTextHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    passwordTextHandler = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    logIn = (event) => {
    };

    submitLogin = (event) => {
        event.preventDefault();

        const {username, password} = this.state;
        const isAllowed = username === defaultUser.username && password === defaultUser.password;
    };

    render() {
        const { username, password } = this.state;

        return (
            <div className="login">
                <div>
                    <div>សូមបំពេញពត៌មាន</div>
                    <form onSubmit={this.submitLogin}>
                        <label>គណនី</label>
                        <input type="text" value={username} onChange={this.usernameTextHandler} />

                        <label>លេខសម្ងាត់</label>
                        <input type="text" value={password} onChange={this.passwordTextHandler} />

                        <div>
                            <button type="submit" onClick={this.logIn}>ចូល</button>
                            <button>ភ្លេច</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
