import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'


import registerServiceWorker from './registerServiceWorker';
export const initialState = {};

ReactDOM.render(<Provider store={createStore(reducers, initialState)}>
    <App />    
    </Provider>, document.getElementById('root'));
registerServiceWorker();
