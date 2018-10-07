import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RouterMap from './router/RouterMap';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import localStore from './util/localStore';
import './index.css';

let initStore = {};
try {
    initStore = JSON.parse(localStore.getItem("state"));
} catch (error) {
    initStore = null;
}
console.log("------init------");
console.log(initStore);
if(initStore != null) {
    for (const key in initStore) {
        if(initStore[key].indexOf("{") >= 0 || initStore[key].indexOf("[") >= 0) {
            initStore[key] = JSON.parse(initStore[key]);
        }
    }
} 
const store = initStore ? configureStore(initStore) :  configureStore();


ReactDOM.render(
    <Provider store={store}>
        <RouterMap/>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
