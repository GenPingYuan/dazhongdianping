import {GET,UPDATE} from '../constants/home';
export function get(){
    return {
        type: GET
    }
}

export function update(userInfo){
    return {
        type: UPDATE,
        userInfo
    }
}