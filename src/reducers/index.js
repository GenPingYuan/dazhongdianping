import {combineReducers} from 'redux';
import {userInfo} from './home';
import {collectInfo} from './collect';
import {shopCarInfo} from './shopCar';

const rootReducer = combineReducers({
    userInfo,
    collectInfo,
    shopCarInfo
})

export default rootReducer