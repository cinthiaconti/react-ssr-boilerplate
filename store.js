import { createStore, applyMiddleware } from 'redux';
import { composeWithDevtools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from './data/data.json';

//initial state
const startState = {
    cards: []
}

// create store
export const initStore = (initialState = startState) => {
    return createStore(reducer, initialState, composeWithDevtools(applyMiddleware(thunkMiddleware)))
}
