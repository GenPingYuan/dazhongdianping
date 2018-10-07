import {GET,UPDATE} from '../constants/home';
import localStore from '../util/localStore';
const userInfo = (state = {},action) => {
    switch(action.type) {
        case GET: 
            return state;
        case UPDATE:
            // console.log(Object.assign({},state,action));
            saveUserInfo(state);
            return Object.assign({},state,action.userInfo)
        default: return state
    }
}

function saveUserInfo(state) {
    localStore.setItem("userInfo",JSON.stringify(state));
}

export  {userInfo}

