import {GET,UPDATE} from '../constants/home';

const userInfo = (state = {},action) => {
    switch(action.type) {
        case GET: 
            return state;
        case UPDATE:
            // console.log(Object.assign({},state,action));
            return Object.assign({},state,action.userInfo)
        default: return state
    }
}

export  {userInfo}

