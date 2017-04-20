import axios from 'axios'
import _ from 'lodash'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function fetchUsers (route) {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((data) => {
            //console.log(data)
                dispatch(receiveUsers(route, _.values(data.data)))
            })
    }
}

function receiveUsers (route, users) {
    return {
        type:RECEIVE_USERS,
        users: users,
        last_updated: Date.now()
    }
}
