import { createStore } from 'redux';
import rootReducer from '../reducers';

const initial = {};

export default function configureStore(initialState = initial) {

    return createStore(rootReducer);
}