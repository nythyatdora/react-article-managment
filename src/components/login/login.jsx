import React from 'react';
import './login.css';
import { Authorize } from '../main/main';

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

    submitLogin = (event) => {
        event.preventDefault();
        let { location, history } = this.props;
        let { from } = location.state || { from: { pathname: "/" } };
        const { username, password } = this.state;
        const isAllowed = username === defaultUser.username && password === defaultUser.password;

        if (isAllowed) {
            Authorize.authenticate();
            history.replace(from);
        }
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
                            <button type="submit">ចូល</button>
                            <button>ភ្លេច</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
