import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {logger} from'redux-logger'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import App from './containers/App';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>
    ,
    document.getElementById('app')
)