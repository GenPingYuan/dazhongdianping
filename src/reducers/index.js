import {combineReducers} from 'redux';
import {userInfo} from './home';
import {collectInfo} from './collect';

const rootReducer = combineReducers({
    userInfo,
    collectInfo
})

export default rootReducer