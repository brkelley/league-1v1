import './index.html';
import './styles/app.scss';
import reducer from './reducers';
import React from 'react';

import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './components/Root';

const app = document.getElementById('app');
const store = createStore(reducer);

render(
    <Root store={store} />,
    app
);