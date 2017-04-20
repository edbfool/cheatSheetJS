import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import {users} from '../store/reducers/reducers'
import {pics} from '../store/reducers/reducers'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
    combineReducers({
        users: users,
        pics: pics,
        routing: routerReducer
    }),
    applyMiddleware(thunkMiddleware, middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

import Main from './components/main';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route component={Main} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('mount')
);
