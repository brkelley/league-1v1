import React from 'react';

export class Login extends React.Component {

    render() {
        return (
            <div className="login-card">
                <span className="login-user-logo">
                    <i className="fas fa-user-circle"></i>
                </span>
                <div className="summoner-name-input-wrapper">
                    <input className="summoner-name-input" />
                </div>
            </div>
        );
    }
}
