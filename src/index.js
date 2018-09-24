import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RouterMap from './router/RouterMap';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import './index.css';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <RouterMap/>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
