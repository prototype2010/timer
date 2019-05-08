import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router'
import {history} from './store/index';
import store from './store'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <HashRouter>
                <App/>
            </HashRouter>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
