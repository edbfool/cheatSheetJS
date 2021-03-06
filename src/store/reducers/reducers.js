import {RECEIVE_PICTURE, RECEIVE_USERS} from './actions';

export function fetchedUsers(state = [], action){
    switch(action.type){
        case RECEIVE_USERS:
            return Object.assign([], state, action.last_updated, action.payload);
        default:
            return state;
    }
}

export function fetchedPictures(state = [], action){
    switch(action.type){
        case RECEIVE_PICTURE:
            return Object.assign([], state, action.last_updated, action.payload.slice(0,25));
        default:
            return state;
    }
}
