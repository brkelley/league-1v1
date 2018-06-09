import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import LoginScreen from '../containers/LoginScreen';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/login" component={LoginScreen} />
            </div>
        </Router>
    </Provider>
);

export default Root;